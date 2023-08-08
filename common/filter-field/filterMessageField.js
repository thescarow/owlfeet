let deletedForAllMessageField = {
  _id: 1,
  chat: 1,
  sender: 1,
  reader: 1,
  deliveryStatus: 1,
  seenStatus: 1,
  isDeletedForAll: 1,
  ////
  isRepliedMessage: 1,
  repliedTo: 1,
  ////
  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  createdAt: 1
  //   deletedFor: 1,
  //   hasMediaContent: 1,
  //   mediaContentType: 1,
  //   mediaContentMimeType: 1,
  //   hasDirectMediaContentPath:1
  //   mediaContentPath: 1,
  //   mediaImageSpecs: 1,
  //   mediaVideoSpecs: 1,
  //   textContent: 1,
  //   updatedAt: 1
}

exports.selectSafeMessageField = {
  _id: 1,
  chat: 1,
  sender: 1,
  reader: 1,
  deliveryStatus: 1,
  seenStatus: 1,
  isDeletedForAll: 1,
  ////
  isRepliedMessage: 1,
  repliedTo: 1,
  ////
  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  hasMediaContent: 1,
  mediaContentType: 1,
  mediaContentMimeType: 1,
  hasDirectMediaContentPath: 1,
  mediaContentPath: 1,
  mediaImageSpecs: 1,
  mediaVideoSpecs: 1,
  textContent: 1,
  createdAt: 1
  // deletedFor: 1,
  //   updatedAt: 1
}
exports.selectMessageFieldForRepliedMessage = {
  _id: 1,
  chat: 1,
  sender: 1,
  reader: 1,
  isDeletedForAll: 1,
  ////
  // deliveryStatus: 1,
  // seenStatus: 1,
  // isRepliedMessage: 1,
  // repliedTo: 1,
  ////
  // isInfoMessage: 1,
  // infoMessageType: 1,
  // infoMessageContent: 1,

  hasMediaContent: 1,
  mediaContentType: 1,
  // mediaContentMimeType: 1,
  // hasDirectMediaContentPath: 1,
  // mediaContentPath: 1,
  // mediaImageSpecs: 1,
  // mediaVideoSpecs: 1,
  textContent: 1,
  createdAt: 1
  // deletedFor: 1,
  //   updatedAt: 1
}
exports.selectDeletedForAllMessageField = {
  _id: 1,
  chat: 1,
  sender: 1,
  reader: 1,
  deliveryStatus: 1,
  seenStatus: 1,
  isDeletedForAll: 1,
  ////
  isRepliedMessage: 1,
  repliedTo: 1,
  ////
  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  createdAt: 1

  //   deletedFor: 1,
  //   hasMediaContent: 1,
  //   mediaContentType: 1,
  //   mediaContentMimeType: 1,
  //   hasDirectMediaContentPath: 1,
  //   mediaContentPath: 1,
  //   mediaImageSpecs: 1,
  //   mediaVideoSpecs: 1,
  //   textContent: 1,
  //   updatedAt: 1
}
exports.selectLatestMessageField = {
  _id: 1,
  chat: 1,
  sender: 1,
  deliveryStatus: 1,
  seenStatus: 1,
  hasMediaContent: 1,
  mediaContentType: 1,
  textContent: 1,
  isInfoMessage: 1,
  infoMessageType: 1,
  infoMessageContent: 1,
  createdAt: 1,
  updatedAt: 1,
  isDeletedForAll: 1

  //   reader: 1,
  //   isRepliedMessage: 1,
  //   repliedTo: 1,
  //   deletedFor: 1,
  //   mediaContentMimeType: 1,
  //   hasDirectMediaContentPath: 1,
  //   mediaContentPath: 1,
  //   mediaImageSpecs: 1,
  //   mediaVideoSpecs: 1,
}

exports.filterMessageFieldForDeletedForAll = message => {
  let filteredMessage = {}
  const keyArray = Object.keys(deletedForAllMessageField)
  for (key in message) {
    if (keyArray.includes(key)) {
      filteredMessage[key] = message[key]
    }
  }
  return filteredMessage
}
