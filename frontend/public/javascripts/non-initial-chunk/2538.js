"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2538],{2538:(e,s,a)=>{async function t(e){let s,t=document.querySelector(`.active-chat-user-message-box[data-message-id="${e}"]`);if(t.classList.contains("active-chat-user-message-box--image")||t.classList.contains("active-chat-user-message-box--video")||t.classList.contains("active-chat-user-message-box--audio"))t.classList.contains("active-chat-user-message-box--image")&&(s=t.getElementsByClassName("active-chat-user-message-box__content--image")[0].src,c(s)),t.classList.contains("active-chat-user-message-box--audio")&&(s=t.querySelector(".active-chat-user-message-box__content--audio source").src,c(s)),t.classList.contains("active-chat-user-message-box--video")&&(s=t.querySelector(".active-chat-user-message-box__content--video source").src,c(s));else{let{createMainNotification:e}=await a.e(4932).then(a.bind(a,5967));e("You Can Not Download This Message","info")}}function c(e){fetch(e).then((e=>e.blob())).then((e=>{const s=URL.createObjectURL(e),a=document.createElement("a");a.download=Date.now(),a.href=s,a.click(),URL.revokeObjectURL(s)}))}a.r(s),a.d(s,{downloadUserMedia:()=>t})}}]);