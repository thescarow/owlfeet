let chatFieldForNonMember = {
  _id: 1,
  isGroupChat: 1,
  chatPic: 1,
  chatName: 1,
  chatDescription: 1,
  createdAt: 1
  //   groupChatAdmin: 1,
  //   currentChatMembers: 1,
  //   allChatMembers:1
  //   isDeleted: 1
}

exports.filterChatFieldForNonMember = chat => {
  let filteredChat = {}
  const keyArray = Object.keys(chatFieldForNonMember)
  for (key in chat) {
    if (keyArray.includes(key)) {
      filteredChat[key] = chat[key]
    }
  }
  return filteredChat
}

exports.selectSafeChatField = {
  _id: 1,
  isGroupChat: 1,
  groupChatAdmin: 1,
  currentChatMembers: 1,
  chatPic: 1,
  chatName: 1,
  chatDescription: 1,
  createdAt: 1,
  isDeleted: 1
  //   allChatMembers: 1,
}
exports.selectChatBoxField = {
  _id: 1,
  isGroupChat: 1,
  chatPic: 1,
  chatName: 1,
  createdAt: 1,
  chatDescription: 1,
  currentChatMembers: 1
  // groupChatAdmin: 1,
  // isDeleted: 1
  // allChatMembers: 1,
}

exports.selectChatFieldForCreatingCallRoom = {
  _id: 1,
  chatPic: 1,
  chatName: 1,
  chatDescription: 1,
  isGroupChat: 1
  // createdAt: 1,
  // currentChatMembers: 1,
  // groupChatAdmin: 1
  // isDeleted: 1
  // allChatMembers: 1,
}
exports.selectChatFieldForCallRoom = {
  _id: 1,
  isGroupChat: 1
  // chatPic: 1,
  // chatName: 1,
  // chatDescription: 1,
  // createdAt: 1,
  // currentChatMembers: 1,
  // groupChatAdmin: 1
  // isDeleted: 1
  // allChatMembers: 1,
}
