"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4790],{4790:(e,o,n)=>{n.r(o),n.d(o,{joinCallRoom:()=>l});let i,t,a=document.getElementById("roomInfoContainer"),r=document.getElementById("joiningCallRoom");function l(e,o){i=e,t=o,r&&r.addEventListener("click",(async e=>{console.log("clickedd");let o=e.target.closest(".call-room__btn ");if(o&&a.contains(o)&&"join-call-room"===o.dataset.btn){let e=r.dataset.callRoomId;if(""!==e){let o=!!t.isAudioOn,a={isCameraOn:!!t.isCameraOn,isScreenShareOn:!!t.isScreenShareOn,isAudioOn:o,joiningRoomId:e};fetch("/call/join-call-room",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.ok?e.json():Promise.reject(e))).then((async o=>{if(o.isSuccess){console.log(o.callRoom);let{createOnCallSection:e}=await Promise.all([n.e(819),n.e(3978),n.e(6013)]).then(n.bind(n,3978));e(o.callRoom,i,t)}else if(o.hasOwnProperty("isAlreadyJoined")&&!0===o.isAlreadyJoined){let{createConfirmRejoinModal:o}=await n.e(6480).then(n.bind(n,6480));o(e,i,t)}else{let{createMainNotification:e}=await n.e(5967).then(n.bind(n,5967));e(o.error,"error")}})).catch((async e=>{console.log(e);let{createMainNotification:o}=await n.e(5967).then(n.bind(n,5967));o("Server error in joining room, Please try again","error")}))}else{let{createMainNotification:e}=await n.e(5967).then(n.bind(n,5967));e("There are some error in joining this room, Please refresh your page","error")}}}))}}}]);