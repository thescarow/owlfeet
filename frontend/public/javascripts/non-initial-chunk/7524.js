"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7524],{7524:(t,e,a)=>{async function c(t){let e=document.getElementById("allChatSection"),c=document.getElementById("activeChatSection"),i=document.getElementById("activeChatMessageContainer"),h=c.dataset.chatId;""!==h&&h===t?(history.pushState(activeChatData,"",`/chat/#${t}`),document.title=`${activeChatData.chatName} chat `,e.classList.add("all-chat-section--hide"),c.classList.remove("active-chat-section--hide"),i.scrollTop=i.scrollHeight):fetch(`/chat/data/chat/${t}`).then((t=>t.ok?t.json():Promise.reject(t))).then((async i=>{if(i.isSuccess){activeChatData={...i.chat},history.pushState(i.chat,"",`/chat/#${t}`),document.title=`${i.chat.chatName} chat `;let{showActiveChatSection:e}=await a.e(9248).then(a.bind(a,7308));e(i.chat)}else{history.replaceState({},"","/chat"),document.title="Chats",e.classList.remove("all-chat-section--hide"),c.classList.add("active-chat-section--hide");let{createMainNotification:t}=await a.e(4932).then(a.bind(a,5967));t(i.error,"error")}})).catch((async t=>{console.log("error in fetch Active Chat:",t),history.replaceState({},"","/chat"),document.title="Chats",e.classList.remove("all-chat-section--hide"),c.classList.add("active-chat-section--hide");let{createMainNotification:i}=await a.e(4932).then(a.bind(a,5967));i("Server Error Or May be You Are Accessing Wrong Chat.","info")}))}a.r(e),a.d(e,{fetchActiveChat:()=>c})}}]);