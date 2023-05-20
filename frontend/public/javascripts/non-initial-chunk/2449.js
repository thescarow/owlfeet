"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2449,7308,3958,9248,6013],{7308:(e,t,s)=>{s.r(t),s.d(t,{clearActiveChatMessageContainer:()=>m,closeActiveChatCallRoomBox:()=>v,increaseTotalReceivedMessagesCount:()=>r,onOffActiveChatInputContainer:()=>g,openActiveChatCallRoomBox:()=>u,showActiveChatSection:()=>l,updateActiveChatSection:()=>c});let n=document.getElementById("allChatSection"),a=document.getElementById("activeChatSection");const i=document.getElementById("activeChatMessageContainer");let o,d;async function l(e){document.getElementById("activeChatInputTextContent").value="",i.innerHTML="",c(e),o=0;let t=await fetch(`/message/data/unseen-messages-count/${e._id}`),l=await t.json();d=l.unseenMessagesCount,console.log("totalUnseenMessagesCount: "+d);let{openActiveChatInputBox:r}=await s.e(1975).then(s.bind(s,1975));r(),void 0!==USER_MESSAGE_BOX_OBSERVER&&USER_MESSAGE_BOX_OBSERVER.disconnect(),USER_MESSAGE_BOX_OBSERVER=new IntersectionObserver((async(e,t)=>{e.forEach((e=>{if(!0===e.isIntersecting){let s=e.target.dataset.messageId;socket.emit("chat:update-message-seen-status",{messageId:s}),t.unobserve(e.target)}}))}),{threshold:.5,root:i}),void 0!==TOP_MESSAGE_BOX_OBSERVER&&TOP_MESSAGE_BOX_OBSERVER.disconnect(),TOP_MESSAGE_BOX_OBSERVER=new IntersectionObserver((async(e,t)=>{e.forEach((async e=>{if(!0===e.isIntersecting){t.unobserve(e.target);let n=a.dataset.chatId;const{createLoadingMessagesAnimation:l}=await Promise.all([s.e(1443),s.e(2064)]).then(s.bind(s,2064));let r=l();i.insertAdjacentElement("afterbegin",r),i.scrollTop+=150,await async function(e){const{checkTimeAndCreateOldMessages:t}=await Promise.all([s.e(1443),s.e(2064)]).then(s.bind(s,2064));fetch(`/message/fetch-messages/${e}?totalReceivedMessagesCount=${o}`).then((e=>e.ok?e.json():Promise.reject(e))).then((async e=>{if(e.isSuccess)if(console.log(e),e.allMessages.length>0){if(o+=e.allMessages.length,0!==d&&d<=o){let{createUnseenMessageTagBox:n}=await Promise.all([s.e(1443),s.e(2064)]).then(s.bind(s,2064)),a=e.allMessages.length-(o-d);t(e.allMessages.slice(0,a),i,!1,!1),n(d,i,"afterbegin"),t(e.allMessages.slice(a),i,!1,!1),d=0}else t(e.allMessages,i,!1,!1);setTimeout((()=>{i.firstElementChild&&TOP_MESSAGE_BOX_OBSERVER.observe(i.firstElementChild)}),4e3)}else[...i.getElementsByClassName("loading-message-animation-box")].forEach((e=>{e.parentNode.removeChild(e)}));else{let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t(e.error,"error")}})).catch((async e=>{console.log(e);let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t("Server Error In Accessing Messages, Please Refresh Your Page","error")}))}(n)}}))}),{threshold:.5,root:i,rootMargin:"100px"}),void 0!==BOTTOM_MESSAGE_BOX_OBSERVER&&BOTTOM_MESSAGE_BOX_OBSERVER.disconnect(),BOTTOM_MESSAGE_BOX_OBSERVER=new IntersectionObserver((async(e,t)=>{e.forEach((async e=>{if(!0===e.isIntersecting){t.unobserve(e.target);let s=a.dataset.chatId;socket.emit("chat:update-chat-unseen-messages",{chatId:s})}}))}),{threshold:.5,root:i});const{checkTimeAndCreateOldMessages:m}=await Promise.all([s.e(1443),s.e(2064)]).then(s.bind(s,2064));fetch(`/message/fetch-messages/${e._id}?totalReceivedMessagesCount=0`).then((e=>e.ok?e.json():Promise.reject(e))).then((async e=>{if(e.isSuccess){if(i.innerHTML="",console.log(e),e.allMessages.length>0){if(o+=e.allMessages.length,0!==d&&d<=o){let{createUnseenMessageTagBox:t}=await Promise.all([s.e(1443),s.e(2064)]).then(s.bind(s,2064)),n=e.allMessages.length-(o-d);m(e.allMessages.slice(0,n),i,!1,!0),t(d,i,"afterbegin"),m(e.allMessages.slice(n),i,!1,!0),d=0}else m(e.allMessages,i,!1,!0);setTimeout((()=>{i.firstElementChild&&TOP_MESSAGE_BOX_OBSERVER.observe(i.firstElementChild)}),2500),setTimeout((()=>{i.lastElementChild&&BOTTOM_MESSAGE_BOX_OBSERVER.observe(i.lastElementChild)}),2e3)}let{adjustMessageContainerBottomPadding:t}=await s.e(1975).then(s.bind(s,1975));t()}else{let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t(e.error,"error")}})).catch((async e=>{console.log(e);let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t("Server Error In Accessing Messages, Please Refresh Your Page","error")})),n.classList.add("all-chat-section--hide"),a.classList.remove("active-chat-section--hide")}function r(){d=0,o++}async function c(e){let{closeReplyMessageBox:t}=await s.e(6025).then(s.bind(s,6025));t(),a.dataset.chatId=e._id;const n=document.getElementById("activeChatHeader"),i=document.getElementById("activeChatHeaderPic"),o=document.getElementById("activeChatImg"),d=document.getElementById("activeChatHeaderName"),l=document.getElementById("activeChatHeaderStatus");if(document.getElementById("activeChatInputContainer"),n.dataset.chatId=e._id,e.hasOwnProperty("chatPic")&&""!==e.chatPic?(o.src=e.chatPic,i.classList.add("active-chat-header__pic--hide-svg"),i.classList.remove("active-chat-header__pic--hide-img")):(i.classList.add("active-chat-header__pic--hide-img"),i.classList.remove("active-chat-header__pic--hide-svg")),d.textContent=e.chatName,e.isGroupChat)l.classList.remove("active-chat-header__chat-status--hide"),l.textContent="";else if(e.isUserActive)l.classList.remove("active-chat-header__chat-status--hide"),l.textContent="Active";else{let{timeDifferenceFromNow:t}=await s.e(7153).then(s.bind(s,7153));l.classList.remove("active-chat-header__chat-status--hide"),e.hasOwnProperty("userLastActive")?l.textContent=`last active ${t(e.userLastActive)} ago`:l.textContent=""}g(e),e.hasOwnProperty("isOnCall")&&!0===e.isOnCall?u(e.callRoomId):v()}async function m(){document.getElementById("activeChatMessageContainer").innerHTML=""}async function g(e){const t=document.getElementById("activeChatInputContainer");e.hasOwnProperty("canSendMessageToThisChat")&&!1===e.canSendMessageToThisChat?(t.classList.add("active-chat-input-container--disable"),t.classList.remove("active-chat-input-container--enable")):(t.classList.add("active-chat-input-container--enable"),t.classList.remove("active-chat-input-container--disable"))}function u(e){let t=document.getElementById("activeChatCallBtn"),s=document.getElementById("activeChatCallRoomBox");for(;s.classList.contains("chat-call-room-box--hide");)s.classList.remove("chat-call-room-box--hide");t.classList.add("active-chat-header__btn--hide"),s.dataset.callRoomId=e}function v(){let e=document.getElementById("activeChatCallBtn"),t=document.getElementById("activeChatCallRoomBox");for(;e.classList.contains("active-chat-header__btn--hide");)e.classList.remove("active-chat-header__btn--hide");t.classList.add("chat-call-room-box--hide"),t.dataset.callRoomId=""}},982:(e,t,s)=>{function n(e){let t,s=e;"string"!=typeof e&&"number"!=typeof e||(s=new Date(e));let n=s.getHours();n<10&&(n="0"+n);let a=s.getMinutes();return a<10&&(a="0"+a),t=s.toDateString()+" "+n+":"+a,t}s.r(t),s.d(t,{addUserToMessageInfoSeenStatus:()=>R,createUserMessageOptionModal:()=>O,updateMessageInfoDeliveryStatus:()=>P});var a=s(3379),i=s.n(a),o=s(7795),d=s.n(o),l=s(569),r=s.n(l),c=s(3565),m=s.n(c),g=s(9216),u=s.n(g),v=s(4589),h=s.n(v),C=s(165),f={};f.styleTagTransform=h(),f.setAttributes=m(),f.insert=r().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=u(),i()(C.Z,f),C.Z&&C.Z.locals&&C.Z.locals;var p=s(2064);const M='<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">\n<g clip-path="url(#clip0_1_2)">\n<path d="M50 100C22.5 100 0 77.5 0 50C0 22.5 22.5 0 50 0C77.5 0 100 22.5 100 50C100 77.5 77.5 100 50 100ZM50 8.33333C27.0833 8.33333 8.33333 27.0833 8.33333 50C8.33333 72.9167 27.0833 91.6667 50 91.6667C72.9167 91.6667 91.6667 72.9167 91.6667 50C91.6667 27.0833 72.9167 8.33333 50 8.33333Z" stroke-width="0"/>\n<path d="M45.8333 75C44.1667 75 42.9167 74.1667 41.6667 72.9167C39.5833 70 41.25 65.8333 45.8333 54.5833C46.6667 52.9167 47.5 50.8333 48.3333 49.1667C46.6667 50.4167 44.1667 50.4167 42.5 48.75C40.8333 47.0833 40.8333 44.5833 42.5 42.9167C43.3333 42.5 48.3333 37.5 54.1667 37.5C55.8333 37.5 57.0833 38.3333 58.3333 39.5833C60.4167 42.5 58.75 46.6667 54.1667 57.9167C53.3333 59.5833 52.5 61.6667 51.6667 63.3333C53.3333 62.0833 55.8333 62.0833 57.5 63.75C59.1667 65.4167 59.1667 67.9167 57.5 69.5833C56.6667 70 51.6667 75 45.8333 75Z" stroke-width="0"/>\n<path d="M56.25 33.3333C59.7018 33.3333 62.5 30.5351 62.5 27.0833C62.5 23.6316 59.7018 20.8333 56.25 20.8333C52.7982 20.8333 50 23.6316 50 27.0833C50 30.5351 52.7982 33.3333 56.25 33.3333Z" />\n<path d="M56.25 35.4167C51.6667 35.4167 47.9167 31.6667 47.9167 27.0833C47.9167 22.5 51.6667 18.75 56.25 18.75C60.8333 18.75 64.5833 22.5 64.5833 27.0833C64.5833 31.6667 60.8333 35.4167 56.25 35.4167ZM56.25 22.9167C53.75 22.9167 52.0833 24.5833 52.0833 27.0833C52.0833 29.5833 53.75 31.25 56.25 31.25C58.75 31.25 60.4167 29.5833 60.4167 27.0833C60.4167 24.5833 58.75 22.9167 56.25 22.9167Z" stroke-width="0"/>\n</g>\n<defs>\n<clipPath id="clip0_1_2">\n<rect width="100" height="100" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n',y='<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">\n<path d="M7.9875 22.9312C7.9875 24.1745 8.48136 25.3667 9.36044 26.2458C10.2395 27.1249 11.4318 27.6188 12.675 27.6188H15.175V83.0094C15.1791 87.0994 16.8055 91.0207 19.6973 93.913C22.589 96.8054 26.51 98.4325 30.6 98.4375H69.4C73.49 98.4325 77.411 96.8054 80.3027 93.913C83.1945 91.0207 84.8209 87.0994 84.825 83.0094V27.6188H87.325C88.5682 27.6188 89.7605 27.1249 90.6396 26.2458C91.5186 25.3667 92.0125 24.1745 92.0125 22.9312C92.0125 21.688 91.5186 20.4958 90.6396 19.6167C89.7605 18.7376 88.5682 18.2437 87.325 18.2437H70.9188V13.4062C70.9188 6.875 65.6062 1.55938 59.075 1.55938H40.925C34.3938 1.55938 29.0813 6.87187 29.0813 13.4062V18.2406H12.675C11.4318 18.2406 10.2395 18.7345 9.36044 19.6136C8.48136 20.4926 7.9875 21.688 7.9875 22.9312ZM38.4563 13.4094C38.4563 12.0437 39.5625 10.9375 40.925 10.9375H59.075C60.4375 10.9375 61.5438 12.0437 61.5438 13.4094V18.2437H38.4531V13.4062L38.4563 13.4094ZM24.55 27.6188H75.45V83.0094C75.4483 84.6137 74.8105 86.1519 73.6764 87.2866C72.5422 88.4214 71.0043 89.06 69.4 89.0625H30.6C28.9957 89.06 27.4578 88.4214 26.3236 87.2866C25.1895 86.1519 24.5517 84.6137 24.55 83.0094V27.6188Z" stroke-width="0"/>\n<path d="M38.35 80.4281C39.5932 80.4281 40.7855 79.9343 41.6646 79.0552C42.5436 78.1761 43.0375 76.9838 43.0375 75.7406V40.9406C43.0375 39.6974 42.5436 38.5051 41.6646 37.6261C40.7855 36.747 39.5932 36.2531 38.35 36.2531C37.1068 36.2531 35.9145 36.747 35.0354 37.6261C34.1564 38.5051 33.6625 39.6974 33.6625 40.9406V75.7406C33.6625 76.9838 34.1564 78.1761 35.0354 79.0552C35.9145 79.9343 37.1068 80.4281 38.35 80.4281ZM61.65 80.4281C62.8932 80.4281 64.0855 79.9343 64.9646 79.0552C65.8436 78.1761 66.3375 76.9838 66.3375 75.7406V40.9406C66.3375 39.6974 65.8436 38.5051 64.9646 37.6261C64.0855 36.747 62.8932 36.2531 61.65 36.2531C60.4068 36.2531 59.2145 36.747 58.3354 37.6261C57.4564 38.5051 56.9625 39.6974 56.9625 40.9406V75.7406C56.9625 76.9838 57.4564 78.1761 58.3354 79.0552C59.2145 79.9343 60.4068 80.4281 61.65 80.4281Z" stroke-width="0"/>\n</svg>\n',I='<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">\n<path d="M70.8333 39.5833H30.875L36.2917 34.2083C37.0763 33.4237 37.517 32.3596 37.517 31.25C37.517 30.1404 37.0763 29.0763 36.2917 28.2917C35.5071 27.5071 34.4429 27.0663 33.3333 27.0663C32.2237 27.0663 31.1596 27.5071 30.375 28.2917L17.875 40.7917C17.4957 41.1879 17.1983 41.6552 17 42.1667C16.5833 43.1811 16.5833 44.3189 17 45.3333C17.1983 45.8448 17.4957 46.3121 17.875 46.7083L30.375 59.2083C30.7623 59.5989 31.2232 59.9088 31.7309 60.1204C32.2387 60.3319 32.7833 60.4408 33.3333 60.4408C33.8834 60.4408 34.428 60.3319 34.9357 60.1204C35.4435 59.9088 35.9043 59.5989 36.2917 59.2083C36.6822 58.821 36.9922 58.3601 37.2037 57.8524C37.4152 57.3447 37.5242 56.8 37.5242 56.25C37.5242 55.6999 37.4152 55.1553 37.2037 54.6476C36.9922 54.1398 36.6822 53.679 36.2917 53.2917L30.875 47.9167H70.8333C71.9384 47.9167 72.9982 48.3557 73.7796 49.1371C74.561 49.9185 75 50.9783 75 52.0833V68.75C75 69.8551 75.439 70.9149 76.2204 71.6963C77.0018 72.4777 78.0616 72.9167 79.1667 72.9167C80.2717 72.9167 81.3315 72.4777 82.1129 71.6963C82.8943 70.9149 83.3333 69.8551 83.3333 68.75V52.0833C83.3333 48.7681 82.0164 45.5887 79.6722 43.2445C77.328 40.9003 74.1485 39.5833 70.8333 39.5833Z"  stroke-width="3"/>\n</svg>\n\n',b='<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n<path d="M83 42.1667C82.8017 41.6552 82.5043 41.1879 82.125 40.7917L69.625 28.2917C69.2365 27.9032 68.7753 27.595 68.2677 27.3848C67.7601 27.1745 67.2161 27.0663 66.6667 27.0663C65.5571 27.0663 64.4929 27.5071 63.7083 28.2917C63.3198 28.6802 63.0117 29.1414 62.8014 29.649C62.5912 30.1566 62.483 30.7006 62.483 31.25C62.483 32.3596 62.9237 33.4237 63.7083 34.2083L69.125 39.5833H29.1667C25.8515 39.5833 22.672 40.9003 20.3278 43.2445C17.9836 45.5887 16.6667 48.7681 16.6667 52.0833V68.75C16.6667 69.8551 17.1057 70.9149 17.8871 71.6963C18.6685 72.4777 19.7283 72.9167 20.8333 72.9167C21.9384 72.9167 22.9982 72.4777 23.7796 71.6963C24.561 70.9149 25 69.8551 25 68.75V52.0833C25 50.9783 25.439 49.9185 26.2204 49.1371C27.0018 48.3557 28.0616 47.9167 29.1667 47.9167H69.125L63.7083 53.2917C63.3178 53.679 63.0078 54.1398 62.7963 54.6476C62.5847 55.1553 62.4758 55.6999 62.4758 56.25C62.4758 56.8 62.5847 57.3447 62.7963 57.8524C63.0078 58.3601 63.3178 58.821 63.7083 59.2083C64.0957 59.5989 64.5565 59.9088 65.0643 60.1204C65.572 60.3319 66.1166 60.4408 66.6667 60.4408C67.2167 60.4408 67.7613 60.3319 68.2691 60.1204C68.7768 59.9088 69.2376 59.5989 69.625 59.2083L82.125 46.7083C82.5043 46.3121 82.8017 45.8448 83 45.3333C83.4167 44.3189 83.4167 43.1811 83 42.1667Z"  stroke-width="3"/>\n</svg>\n',w='<svg width="100" height="100" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg">\n<path d="M25.0018 25.5328L25 65.625C25 73.9093 31.4471 80.6877 39.5977 81.2168L40.625 81.25L68.215 81.2544C66.9268 84.8933 63.4553 87.5 59.375 87.5H37.5C27.1447 87.5 18.75 79.1053 18.75 68.75V34.375C18.75 30.2924 21.3596 26.8193 25.0018 25.5328ZM71.875 12.5C77.0527 12.5 81.25 16.6973 81.25 21.875V65.625C81.25 70.8027 77.0527 75 71.875 75H40.625C35.4473 75 31.25 70.8027 31.25 65.625V21.875C31.25 16.6973 35.4473 12.5 40.625 12.5H71.875ZM71.875 18.75H40.625C38.8991 18.75 37.5 20.1491 37.5 21.875V65.625C37.5 67.3509 38.8991 68.75 40.625 68.75H71.875C73.6009 68.75 75 67.3509 75 65.625V21.875C75 20.1491 73.6009 18.75 71.875 18.75Z"  stroke-width="3"/>\n</svg>\n',S='<svg width="99" height="60" viewBox="0 0 99 60"  xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M96.9561 7.77492C98.5903 5.91613 98.3709 3.12825 96.4661 1.54808C94.5612 -0.032131 91.6919 0.193778 90.0577 2.05257L51.1691 46.2841L47.2994 43.075C45.3941 41.4949 42.5253 41.7211 40.8911 43.5802C39.2571 45.4393 39.4769 48.2268 41.3821 49.8069L48.7009 55.8764C50.6062 57.4561 53.475 57.2303 55.1092 55.3716L96.9561 7.77492ZM69.7675 9.91481C71.4017 8.05602 71.1823 5.26819 69.2774 3.68793C67.3725 2.10771 64.5032 2.33354 62.869 4.19228L23.979 48.4236L7.91635 35.0991C6.01137 33.519 3.14224 33.7448 1.50789 35.6035C-0.126417 37.4622 0.0930049 40.2502 1.99795 41.8303L21.5099 58.016C22.4247 58.7747 23.6138 59.148 24.8156 59.0534C26.0174 58.9589 27.1335 58.4041 27.9183 57.5116L69.7675 9.91481Z" />\n</svg>\n',E='<svg width="92" height="60" viewBox="0 0 92 60"  xmlns="http://www.w3.org/2000/svg">\n<path d="M46 0.833334C25.4333 0.833334 9.78333 13.575 0.166667 30C9.78333 46.425 25.4333 59.1667 46 59.1667C66.5667 59.1667 82.2208 46.425 91.8333 30C82.2208 13.575 66.5625 0.833334 46 0.833334ZM46 50.8333C28.0417 50.8333 16.7958 39.5292 10.0667 30C16.7958 20.4708 28.0417 9.16667 46 9.16667C63.9625 9.16667 75.2083 20.4708 81.9333 30C75.2083 39.5292 63.9625 50.8333 46 50.8333Z" />\n<path d="M46 42.5C52.9036 42.5 58.5 36.9036 58.5 30C58.5 23.0964 52.9036 17.5 46 17.5C39.0964 17.5 33.5 23.0964 33.5 30C33.5 36.9036 39.0964 42.5 46 42.5Z" />\n</svg>\n',B='<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n<path d="M95 60C93.6739 60 92.4021 60.5268 91.4645 61.4645C90.5268 62.4021 90 63.6739 90 65V85C90 86.3261 89.4732 87.5979 88.5355 88.5355C87.5979 89.4732 86.3261 90 85 90H15C13.6739 90 12.4021 89.4732 11.4645 88.5355C10.5268 87.5979 10 86.3261 10 85V65C10 63.6739 9.47322 62.4021 8.53553 61.4645C7.59785 60.5268 6.32608 60 5 60C3.67392 60 2.40215 60.5268 1.46447 61.4645C0.526784 62.4021 0 63.6739 0 65V85C0 88.9782 1.58035 92.7936 4.3934 95.6066C7.20644 98.4196 11.0218 100 15 100H85C88.9782 100 92.7936 98.4196 95.6066 95.6066C98.4196 92.7936 100 88.9782 100 85V65C100 63.6739 99.4732 62.4021 98.5355 61.4645C97.5979 60.5268 96.3261 60 95 60ZM46.45 68.55C46.9255 69.0052 47.4862 69.362 48.1 69.6C48.6985 69.8645 49.3456 70.0012 50 70.0012C50.6544 70.0012 51.3015 69.8645 51.9 69.6C52.5138 69.362 53.0745 69.0052 53.55 68.55L73.55 48.55C74.4915 47.6085 75.0205 46.3315 75.0205 45C75.0205 43.6685 74.4915 42.3915 73.55 41.45C72.6085 40.5085 71.3315 39.9795 70 39.9795C68.6685 39.9795 67.3915 40.5085 66.45 41.45L55 52.95V5C55 3.67392 54.4732 2.40215 53.5355 1.46447C52.5979 0.526784 51.3261 0 50 0C48.6739 0 47.4021 0.526784 46.4645 1.46447C45.5268 2.40215 45 3.67392 45 5V52.95L33.55 41.45C33.0838 40.9838 32.5304 40.614 31.9212 40.3617C31.3121 40.1094 30.6593 39.9795 30 39.9795C29.3407 39.9795 28.6879 40.1094 28.0788 40.3617C27.4696 40.614 26.9162 40.9838 26.45 41.45C25.9838 41.9162 25.614 42.4696 25.3617 43.0788C25.1094 43.6879 24.9795 44.3407 24.9795 45C24.9795 45.6593 25.1094 46.3121 25.3617 46.9212C25.614 47.5304 25.9838 48.0838 26.45 48.55L46.45 68.55Z" />\n</svg>\n';let _=` <div class="inner-modal-option" data-user-message-option-btn="reply" >${I}Reply</div>\n<div class="inner-modal-option"  data-user-message-option-btn="copy">${w}Copy</div>\n<div class="inner-modal-option inner-modal-option--view-media" data-user-message-option-btn="view" >${E}View</div>\n<div class="inner-modal-option inner-modal-option--downloaded-media" data-user-message-option-btn="download" >${B}Download</div>\n<div class="inner-modal-option" data-user-message-option-btn="forward" >${b}Forward</div>\n<div class="inner-modal-option" data-user-message-option-btn="delete" data-enable-for-all="true">${y}Delete</div>\n<div class="inner-modal-option" data-user-message-option-btn="info">${M}Info</div>\n<div class="inner-modal-option" data-user-message-option-btn="closeModal">Close</div>`,L=`<div class="inner-modal-option" data-user-message-option-btn="reply" >${I}Reply</div>\n<div class="inner-modal-option"  data-user-message-option-btn="copy">${w}Copy</div>\n<div class="inner-modal-option inner-modal-option--image" data-user-message-option-btn="view" >${E}View</div>\n<div class="inner-modal-option inner-modal-option--downloaded-media" data-user-message-option-btn="download" >${B}Download</div>\n<div class="inner-modal-option" data-user-message-option-btn="forward" >${b}Forward</div>\n<div class="inner-modal-option" data-user-message-option-btn="delete" data-enable-for-all="false">${y}Delete</div>\n<div class="inner-modal-option" data-user-message-option-btn="closeModal">Close</div>`,x=`<div class="inner-modal-option" data-user-message-option-btn="reply" >${I}Reply</div>\n\n<div class="inner-modal-option" data-user-message-option-btn="delete" data-enable-for-all="false">${y}Delete</div>\n<div class="inner-modal-option" data-user-message-option-btn="info">${M}Info</div>\n<div class="inner-modal-option" data-user-message-option-btn="closeModal">Close</div>`;async function O(e){let t=e.dataset.senderId,n=e.dataset.messageId,a=document.getElementById("activeChatSection");if(a){let i=document.getElementById("userMessageOptionModal");i?i.classList.remove("inner-modal--hide"):(i=document.createElement("div"),i.classList.add("inner-modal","inner-modal--user-message-option"),i.setAttribute("id","userMessageOptionModal"),i.innerHTML='\n          <div class="inner-modal-content inner-modal-content--user-message-option">\n             <div class="inner-modal-options-container" id="userMessageOptionsContainer">\n                \n             </div>\n          </div>',a.insertAdjacentElement("afterbegin",i),async function(e){let t=document.getElementById("userMessageOptionsContainer");t.addEventListener("click",(async n=>{let a=n.target.closest("[data-user-message-option-btn]");if(a&&t.contains(a)){let t=e.dataset.messageId;if(e.dataset.senderId,"delete"===a.dataset.userMessageOptionBtn){let e=a.dataset.enableForAll;e=e&&"true"===e,async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];document.getElementById("userMessageOptionModal")&&document.getElementById("userMessageOptionModal").classList.add("inner-modal--hide");let s=document.getElementById("activeChatSection");if(s){let n=document.getElementById("deleteMessageModal");n?n.classList.remove("inner-modal--hide"):(n=document.createElement("div"),n.classList.add("inner-modal","inner-modal--delete-message"),n.setAttribute("id","deleteMessageModal"),n.innerHTML='\n          <div class="inner-modal-content inner-modal-content--delete-message">\n  \n          <div class="inner-modal-header">\n          <div class="inner-modal-header__title">\n          Do you want to delete Message ?\n          </div>\n          </div>\n          <div class="inner-modal-main">\n  \n          </div>\n          <div class="inner-modal-btns-container">\n          <div class="inner-modal-btn" id="closeDeleteMessageModalBtn">Cancel</div>\n          <div class="inner-modal-btn inner-modal-btn--action" id="submitDeleteMessageRequestBtn">Delete</div>\n          </div>\n          </div>',s.insertAdjacentElement("afterbegin",n),T(n));let a=n.getElementsByClassName("inner-modal-main")[0];a.innerHTML="",t?a.insertAdjacentHTML("beforeend",' <div class="inner-modal-main__info">\n          After deleting message for all, message will be deleted from all the member\'s chat.\n        </div>\n        <lable class="for-all-input-container">\n           <input type="checkbox" class="for-all-input-container__checkbox" id="deleteMessageForAllInput">Delete Messages For All\n     </lable>'):a.insertAdjacentHTML("beforeend",' <div class="inner-modal-main__info">\n              After deleting message, message will be deleted from your chat permanently.\n            </div>'),n.dataset.messageId=e}}(t,e)}if("reply"===a.dataset.userMessageOptionBtn){let{openReplyMessageBox:n}=await s.e(6025).then(s.bind(s,6025));e.classList.add("inner-modal--hide"),(0,p.unSelectUserMessage)(t),n(t)}if("copy"===a.dataset.userMessageOptionBtn){let{copyUserMessage:n}=await s.e(8066).then(s.bind(s,8066));e.classList.add("inner-modal--hide"),(0,p.unSelectUserMessage)(t),n(t)}if("info"===a.dataset.userMessageOptionBtn&&(s.e(124).then(s.bind(s,124)),(0,p.unSelectUserMessage)(t),async function(e){document.getElementById("userMessageOptionModal")&&document.getElementById("userMessageOptionModal").classList.add("inner-modal--hide");let t=document.getElementById("activeChatSection");if(t){let s=document.getElementById("messageInfoModal");s?s.classList.remove("inner-modal--hide"):(s=document.createElement("div"),s.classList.add("inner-modal","inner-modal--message-info"),s.setAttribute("id","messageInfoModal"),s.dataset.messageId=e,s.innerHTML=`\n          <div class="inner-modal-content inner-modal-content--message-info">\n\n             <div class="inner-modal-header inner-modal-header--message-info">\n                    <div class="inner-modal-header__title inner-modal-header__title--message-info"> Message Info\n                   </div>\n             </div>\n\n\n             <div class="inner-modal-main">\n                <div class="message-info-delivery-status-box message-info-delivery-status-box--delivered" id="messageInfoDeliveryStatusBox">\n                    <div class="message-info-delivery-status-box__icon">\n                        ${S}\n                    </div>\n                    <div class="message-info-delivery-status-box__row">\n                        <div class="message-info-delivery-status-box__title">Delivered</div>\n                        <div class="message-info-delivery-status-box__time" id="messageInfoDeliveryStatusTime"></div>\n                    </div>  \n                </div>\n\n\n\n\n\n\n                <div class="message-info-seen-status-box message-info-seen-status-box--seen" id="messageInfoSeenStatusBox" data-seen-user-count="0">\n                   <div class="message-info-seen-status-box__icon" id="messageInfoSeenStatusBoxIcon">\n                         ${S}\n                   </div>\n                   <div class="message-info-seen-status-box__title">\n                         Seen\n                   </div>\n                  <div class="message-info-seen-status-indicator" >\n                        <div class="message-info-seen-status-indicator__user-count" id="messageInfoSeenStatusIndicatorUserCount">\n                        </div>\n                       <div class="message-info-seen-status-indicator__bar" id="messageInfoSeenStatusIndicatorBar">\n                      <div class="message-info-seen-status-indicator__point" id="messageInfoSeenStatusIndicatorPoint">\n                     </div>\n                      </div>\n                      <div class="message-info-seen-status-indicator__total-count" id="messageInfoSeenStatusIndicatorTotalCount">\n                      </div>\n                  </div>\n\n                   <div class="message-info-seen-status-user-container" id="messageInfoSeenStatusUserContainer">\n                       \n\n                   </div>\n            </div>\n      </div>\n</div>`,t.insertAdjacentElement("beforeend",s),A(s,e),function(e){window.addEventListener("click",(t=>{t.target===e&&e.classList.add("inner-modal--hide")}))}(s))}messageInfoModal.dataset.messageId!==e&&A(messageInfoModal,e)}(t)),"download"===a.dataset.userMessageOptionBtn){let{downloadUserMedia:n}=await s.e(2538).then(s.bind(s,2538));e.classList.add("inner-modal--hide"),(0,p.unSelectUserMessage)(t),n(t)}if("view"===a.dataset.userMessageOptionBtn){let{viewUserMedia:n}=await s.e(7045).then(s.bind(s,7045));e.classList.add("inner-modal--hide"),(0,p.unSelectUserMessage)(t),n(t)}"closeModal"===a.dataset.userMessageOptionBtn&&((0,p.unSelectUserMessage)(t),e.classList.add("inner-modal--hide"))}})),window.addEventListener("click",(t=>{if(t.target===e){let t=e.dataset.messageId;(0,p.unSelectUserMessage)(t),e.classList.add("inner-modal--hide")}}))}(i)),i.dataset.messageId=n,i.dataset.senderId=t;let o=document.getElementById("userMessageOptionsContainer");e.classList.contains("active-chat-user-message-box--deleted-message")?o.innerHTML=x:(e.classList.contains("active-chat-user-message-box--image")||e.classList.contains("active-chat-user-message-box--youtube")?o.classList.add("inner-modal-options-container--show-view-media"):o.classList.remove("inner-modal-options-container--show-view-media"),e.classList.contains("active-chat-user-message-box--video")||e.classList.contains("active-chat-user-message-box--image")||e.classList.contains("active-chat-user-message-box--audio")?o.classList.add("inner-modal-options-container--show-downloaded-media"):o.classList.remove("inner-modal-options-container--show-downloaded-media"),t.toString()===loginUser._id.toString()&&(o.innerHTML=_),t.toString()!==loginUser._id.toString()&&(o.innerHTML=L))}}async function T(e){document.getElementById("submitDeleteMessageRequestBtn").addEventListener("click",(()=>{e.classList.add("inner-modal--hide");let t=e.dataset.messageId;console.log("messageId:",t);let n={};n.id=t,n.forAll=!1;let a=document.getElementById("deleteMessageForAllInput");a&&!0===a.checked&&(n.forAll=!0),fetch("/message/delete-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.ok?e.json():Promise.reject(e))).then((async e=>{if(e.isSuccess){if(console.log("deletedMessgeData:",e),e.isDeletedForAll){(0,p.unSelectUserMessage)(t);let{convertUserMessageToDeletedForAllMessage:n}=await Promise.resolve().then(s.bind(s,2064));n(e.deletedForAllMessage)}else{let{deleteUserMessage:t}=await Promise.resolve().then(s.bind(s,2064));t(e.deletedMessageId)}if(e.isLatestMessageChanged){let{updateChatBoxLatestMessage:t}=await s.e(226).then(s.bind(s,226));t(e.latestMessage)}}else{let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t(e.error,"error")}})).catch((async e=>{console.log(e);let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t("Server Error In Deleting Message, Please Try Again","error")}))})),document.getElementById("closeDeleteMessageModalBtn").addEventListener("click",(()=>{(0,p.unSelectUserMessage)(e.dataset.messageId),e.classList.add("inner-modal--hide")})),window.addEventListener("click",(t=>{t.target===e&&((0,p.unSelectUserMessage)(e.dataset.messageId),e.classList.add("inner-modal--hide"))}))}function A(e,t){const n=document.getElementById("messageInfoDeliveryStatusBox"),a=document.getElementById("messageInfoDeliveryStatusTime"),i=document.getElementById("messageInfoSeenStatusBox"),o=document.getElementById("messageInfoSeenStatusUserContainer");let d=document.getElementById("messageInfoSeenStatusIndicatorPoint"),l=document.getElementById("messageInfoSeenStatusIndicatorUserCount"),r=document.getElementById("messageInfoSeenStatusIndicatorTotalCount"),c=i.querySelector(".message-info-seen-status-box__icon svg");e.dataset.messageId=t,n.classList.remove("message-info-delivery-status-box--delivered"),a.textContent="",i.classList.remove("message-info-seen-status-box--seen"),l.textContent=0,r.textContent=0,o.innerHTML="",d.style.left="0px",c.style.fill="rgba(var(--rgba-fourth-color),0.4)",c.style.strokeWidth="1px",c.style.stroke="rgba(var(--rgba-fourth-color),0.4)",fetch(`/message/data/status/${t}`).then((e=>e.ok?e.json():Promise.reject(e))).then((async e=>{if(e.isSuccess)e.message.hasOwnProperty("deliveryStatus")&&!0===e.message.deliveryStatus.isDelivered&&P(e.message._id.toString(),e.message.deliveryStatus.deliveredTime),e.message.hasOwnProperty("seenStatus")&&e.message.seenStatus.length&&(r.textContent=e.message.readerCount-1,e.message.seenStatus.forEach((t=>{R(e.message._id.toString(),t.seenBy,t.seenTime)})));else{let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t(e.error,"error")}})).catch((async e=>{let{createMainNotification:t}=await s.e(4932).then(s.bind(s,5967));t("Server Error In Accessing Message Status, Please try again","info")}))}async function R(e,t,a){if(console.log("userTime: ",a),t._id.toString()!==loginUser._id.toString()){let i=document.getElementById("messageInfoModal");if(i&&i.dataset.messageId===e){const e=document.getElementById("messageInfoSeenStatusUserContainer");if(e){let i=e.querySelector(`.message-info-seen-status-user[data-user-id="${t._id.toString()}"]`);if(!i){i=document.createElement("div"),i.classList.add("message-info-seen-status-user"),i.dataset.userId=t._id.toString(),i.innerHTML='\n      <div class="message-info-seen-status-user__left-box">\n           <div class="message-info-seen-status-user__pic">\n                <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="">\n           </div>\n          <div class="message-info-seen-status-user__name">\n          \n          </div>\n     </div>\n     <div class="message-info-seen-status-user__time">\n      01/01/1975 00:00\n     </div>',t.hasOwnProperty("profile")&&""!==t.profile&&(i.querySelector(".message-info-seen-status-user__pic img").src=t.profile),i.getElementsByClassName("message-info-seen-status-user__name")[0].textContent=t.firstName+" "+t.lastName,i.getElementsByClassName("message-info-seen-status-user__time")[0].textContent=n(a),e.insertAdjacentElement("afterbegin",i);let o=document.getElementById("messageInfoSeenStatusBox"),d=o.querySelector(".message-info-seen-status-box__icon svg"),l=document.getElementById("messageInfoSeenStatusIndicatorPoint"),r=document.getElementById("messageInfoSeenStatusIndicatorUserCount"),c=document.getElementById("messageInfoSeenStatusIndicatorTotalCount"),m=parseInt(r.textContent)+1,g=parseInt(c.textContent),u=m/g;if(r.textContent=m,u>.9){let e=getComputedStyle(l).width;console.log(e),l.style.left="calc("+100*u+"% - "+e+")"}else l.style.left=100*u+"%";o.classList.add("message-info-seen-status-box--seen"),o.dataset.seenUserCount=m;let{generateColorForUserMessageStatus:v}=await Promise.resolve().then(s.bind(s,2064)),h=v(m,g);console.log("color",h),d.style.fill=`rgb(${h.r}, ${h.g},${h.b})`,d.style.strokeWidth="1px",d.style.stroke=`rgb(${h.r}, ${h.g},${h.b})`}}}}}async function P(e,t){let s=document.getElementById("messageInfoModal");s&&s.dataset.messageId===e&&(document.getElementById("messageInfoDeliveryStatusBox").classList.add("message-info-delivery-status-box--delivered"),document.getElementById("messageInfoDeliveryStatusTime").textContent=n(t))}},165:(e,t,s)=>{s.d(t,{Z:()=>d});var n=s(8081),a=s.n(n),i=s(3645),o=s.n(i)()(a());o.push([e.id,".inner-modal--user-message-option {}\r\n\r\n.inner-modal-content--user-message-option {}",""]);const d=o},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",n=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),n&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),n&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(o[l]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);n&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),s&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=s):c[2]=s),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var t=[];function s(e){for(var s=-1,n=0;n<t.length;n++)if(t[n].identifier===e){s=n;break}return s}function n(e,n){for(var i={},o=[],d=0;d<e.length;d++){var l=e[d],r=n.base?l[0]+n.base:l[0],c=i[r]||0,m="".concat(r," ").concat(c);i[r]=c+1;var g=s(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(u);else{var v=a(u,n);n.byIndex=d,t.splice(d,0,{identifier:m,updater:v,references:1})}o.push(m)}return o}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var d=s(i[o]);t[d].references--}for(var l=n(e,a),r=0;r<i.length;r++){var c=s(i[r]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=l}}},569:e=>{var t={};e.exports=function(e,s){var n=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}},9216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var n="";s.supports&&(n+="@supports (".concat(s.supports,") {")),s.media&&(n+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(n+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),n+=s.css,a&&(n+="}"),s.media&&(n+="}"),s.supports&&(n+="}");var i=s.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);