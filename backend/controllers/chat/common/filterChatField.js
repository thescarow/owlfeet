let deleteChatFieldForNonMember = {
  groupChatAdmin: 1,
  currentChatMembers: 1,
  allChatMembers: 1,
  updatedAt: 1
}

exports.filterChatFieldForNonMember = chat => {
  let filteredChat = {}
  const keyArray = Object.keys(deleteChatFieldForNonMember)
  for (key in chat) {
    if (!keyArray.includes(key)) {
      filteredChat[key] = chat[key]
    }
  }
  return filteredChat
}

exports.selectChatField = {
  isGroupChat: 1,
  groupChatAdmin: 1,
  currentChatMembers: 1,
  chatPic: 1,
  chatName: 1,
  chatDescription: 1,
  createdAt: 1
}
