const { signedUrlForGetAwsS3Object } = require("../services/awsS3")
exports.createChatDataForNonChatGroup = async chat => {
  let chatOtherMember = chat.currentChatMembers.find(
    user => user._id.toString() !== req.user.id.toString()
  )
  if (
    chatOtherMember.hasOwnProperty("profile") &&
    chatOtherMember.profile !== ""
  ) {
    chat.chatPic = await signedUrlForGetAwsS3Object(chatOtherMember.profile)
  }
  chat.isUserActive = chatOtherMember.isActive
  chat.userLastActive = chatOtherMember.lastActive

  chat.chatName = chatOtherMember.firstName + " " + chatOtherMember.lastName
  chat.chatDescription = chatOtherMember.bio
  return chat
}
