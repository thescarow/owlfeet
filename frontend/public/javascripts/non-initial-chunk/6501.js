"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6501],{6501:(e,t,a)=>{a.r(t),a.d(t,{createChatRoom:()=>l});let r,o,n=document.getElementById("callMainContainer"),i=document.getElementById("roomInfoContainer"),c=document.getElementById("creatingChatRoom");function l(e,t){r=e,o=t,c&&c.addEventListener("click",(async e=>{let t=e.target.closest(".call-room__btn");if(t&&i.contains(t)&&"create-chat-room"===t.dataset.btn){let e=c.dataset.chatId;if(""!==e){let t=!!o.isAudioOn,i={isCameraOn:!!o.isCameraOn,isScreenShareOn:!!o.isScreenShareOn,isAudioOn:t,chatId:e};fetch("/call/create-chat-room",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>e.ok?e.json():Promise.reject(e))).then((async e=>{if(e.isSuccess){n.dataset.callRoomId=e.callRoom._id.toString();let{createOnCallSection:t}=await Promise.all([a.e(819),a.e(3978),a.e(6013)]).then(a.bind(a,3978));t(e.callRoom,r,o),history.replaceState(e.callRoom,"",`/call/?room=${e.callRoom._id.toString()}`)}else if(e.hasOwnProperty("isRedirected"))e.hasOwnProperty("redirectedUrl")&&location.replace(e.redirectedUrl);else{let{createMainNotification:t}=await a.e(5967).then(a.bind(a,5967));t(e.error,"error")}})).catch((async e=>{console.log(e);let{createMainNotification:t}=await a.e(5967).then(a.bind(a,5967));t("Server error in creating chat room, Please try again","error")}))}else{let{createMainNotification:e}=await a.e(5967).then(a.bind(a,5967));e("There are some error, Please refresh your page","error")}}}))}}}]);