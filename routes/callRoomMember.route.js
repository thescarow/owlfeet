const { Router } = require("express")
const router = Router()
const { getLoginUser } = require("../middleware/auth.middleware")
const {
  getCallRoomMemberDataByPeerId,
  updatePeerId
} = require("../controllers/callRoomMember")

router.post("/data/member", getLoginUser, getCallRoomMemberDataByPeerId)
router.put("/update-peer-id", getLoginUser, updatePeerId)

module.exports = router
