const chalk = require("chalk")
const dataLog = chalk.blue.bold
const errorLog = chalk.red.bgWhite.bold
const mainErrorLog = chalk.white.bgYellow.bold
///////////////////////////////////////////
const linkify = require("linkifyjs")
const { getLinkPreview } = require("link-preview-js")
const dns = require("node:dns")
///////////////////////////
const Message = require("../../../models/message")
//////////////////////
const { signedUrlForGetAwsS3Object } = require("../../../services/awsS3")
///////////////////////////
const {
  selectSafeMessageField,
  selectMessageFieldForRepliedMessage,
  filterMessageFieldForDeletedForAll
} = require("../../../common/filter-field/filterMessageField")
const {
  selectChatFieldForMessage
} = require("../../../common/filter-field/filterChatField")

exports.sendMessageToOtherMembersAndUpdateMessageStatusForSender = async (
  io,
  clientMessageId,
  newMessageId
) => {
  let newMessage = await Message.findById(newMessageId)
    .populate({
      path: "sender",
      select: {
        username: 1,
        firstName: 1,
        lastName: 1,
        profile: 1
      },
      options: {
        lean: true
      }
    })
    .populate({
      path: "chat",
      select: selectChatFieldForMessage,
      options: {
        lean: true
      }
    })
    .populate({
      path: "repliedTo",
      select: selectMessageFieldForRepliedMessage,
      populate: {
        path: "sender",
        select: { username: 1, firstName: 1, lastName: 1 }
      },

      options: {
        lean: true
      }
    })
    .select(selectSafeMessageField)
    .lean()

  if (
    newMessage.isRepliedMessage === true &&
    newMessage.repliedTo.isDeletedForAll === true
  ) {
    newMessage.repliedTo = filterMessageFieldForDeletedForAll(
      newMessage.repliedTo
    )
  }

  if (
    newMessage.sender.hasOwnProperty("profile") &&
    newMessage.sender.profile !== ""
  ) {
    newMessage.sender.profile = await signedUrlForGetAwsS3Object(
      newMessage.sender.profile
    )
  }

  if (
    newMessage.hasMediaContent &&
    newMessage.hasDirectMediaContentPath === false
  ) {
    newMessage.mediaContentPath = await signedUrlForGetAwsS3Object(
      newMessage.mediaContentPath
    )
  } else {
    if (
      newMessage.hasOwnProperty("textContent") &&
      newMessage.textContent !== ""
    ) {
      // const linkifyOptions = {
      //   attributes: null,
      //   className: "hello",
      //   defaultProtocol: "http",
      //   events: null,
      //   format: (value, type) => value,
      //   formatHref: (href, type) => href,
      //   ignoreTags: [],
      //   nl2br: false,
      //   rel: null,
      //   render: null,
      //   tagName: "a",
      //   target: null,
      //   truncate: Infinity,
      //   validate: true
      // }
      let linkPreviewOptions = {
        // resolveDNSHost: async url => {
        //   return new Promise((resolve, reject) => {
        //     const hostname = new URL(url).hostname
        //     dns.lookup(hostname, (err, address, family) => {
        //       if (err) {
        //         reject(err)
        //         return
        //       }

        //       resolve(address) // if address resolves to localhost or '127.0.0.1' library will throw an error
        //     })
        //   }).catch(e => {
        //     // will throw a detected redirection to localhost
        //   })
        // },
        // imagesPropertyType: "og", // fetches only open-graph images,

        headers: {
          "user-agent": "googlebot", // fetches with googlebot crawler user agent
          "Accept-Language": "en-US" // fetches site for French language
          // ...other optional HTTP request headers
        },
        // timeout: 1000,
        followRedirects: `manual`,
        handleRedirects: (baseURL, forwardedURL) => {
          const baseURLObj = new URL(baseURL)
          const forwardedURLObj = new URL(forwardedURL)
          if (
            forwardedURLObj.hostname === baseURLObj.hostname ||
            forwardedURLObj.hostname === "www." + baseURLObj.hostname ||
            "www." + forwardedURLObj.hostname === baseURLObj.hostname
          ) {
            return true
          } else {
            return false
          }
        }
      }
      let allLinks = linkify.find(newMessage.textContent)

      if (allLinks.length > 0) {
        // console.log("allLinks:", allLinks)
        try {
          let data = await getLinkPreview(allLinks[0].href, linkPreviewOptions)
          if (data) {
            // console.log("linkPreviewData:", data)
            newMessage.hasLinkPreview = true
            newMessage.linkPreviewData = data
          }
        } catch (err) {
          newMessage.hasLinkPreview = false
          console.log("linkPreviewError:", err)
        }

        newMessage.hasLinks = true
        newMessage.linksData = allLinks
      } else {
        newMessage.hasLinks = false
        newMessage.hasLinkPreview = false
      }
    }
  }

  io.to(newMessage.sender._id.toString()).emit(
    "message:replace-client-user-message-to-server-user-message",
    {
      clientMessageId: clientMessageId,
      message: newMessage
    }
  )
  let newMessageDocument = await Message.findById(newMessage._id).select({
    deliveryStatus: 1
  })

  newMessage.reader.forEach(userId => {
    if (newMessage.sender._id.toString() !== userId.toString()) {
      io.to(userId.toString()).emit("message:new-user-message", {
        message: newMessage
      })
    }
  })

  newMessageDocument.deliveryStatus.isDelivered = true
  newMessageDocument.deliveryStatus.deliveredTime = Date.now()
  await newMessageDocument.save()

  io.to(newMessage.sender._id.toString()).emit(
    "message:user-message-delivered",
    {
      clientMessageId: clientMessageId,
      messageId: newMessage._id,
      chatId: newMessage.chat._id,
      deliveredTime: Date.now()
    }
  )
}
