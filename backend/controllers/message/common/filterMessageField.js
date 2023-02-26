let selectDeletedForAllMessageField = {
  chat: 1,
  sender: 1,
  reader: 1,

  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  isRepliedMessage: 1,
  repliedTo: 1,
  isDeletedForAll: 1,
  createdAt: 1
}

exports.selectMessageField = {
  chat: 1,
  sender: 1,
  reader: 1,
  seenBy: 1,
  hasMediaContent: 1,
  mediaContentType: 1,
  mediaContentMimeType: 1,
  mediaContentPath: 1,
  textContent: 1,
  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  isRepliedMessage: 1,
  repliedTo: 1,
  isDeletedForAll: 1,
  createdAt: 1
}

exports.selectDeletedForAllMessageField = {
  chat: 1,
  sender: 1,
  reader: 1,

  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  isRepliedMessage: 1,
  repliedTo: 1,
  isDeletedForAll: 1,
  createdAt: 1
}

exports.filterMessageFieldForDeletedForAll = message => {
  let filteredMessage = {}
  const keyArray = Object.keys(selectDeletedForAllMessageField)
  for (key in message) {
    if (keyArray.includes(key)) {
      filteredMessage[key] = message[key]
    }
  }
  return filteredMessage
}
