"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4932,5967,4698,6201,1626],{5967:(e,n,i)=>{function t(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";"error"!=n&&"success"!=n&&(n="info");const i=document.createElement("div");let t;i.classList.add("main-notification",n),i.innerHTML=`\n     <div class="main-notification-message"> ${n.charAt(0).toUpperCase()+n.slice(1)}:\n     ${e}    \n     </div>\n    <div class="main-notification-timer-and-close">\n                <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <g id="timerAndClose">\n                <path id="timerPath" d="M35 10C39.5356 10 43.7185 11.1176 47.5488 13.3529C51.3791 15.5881 54.4119 18.6209 56.6471 22.4512C58.8824 26.2815 60 30.4644 60 35C60 39.5356 58.8824 43.7185 56.6471 47.5488C54.4119 51.3791 51.3791 54.4119 47.5488 56.6471C43.7185 58.8824 39.5356 60 35 60C30.4644 60 26.2815 58.8824 22.4512 56.6471C18.6209 54.4119 15.5881 51.3791 13.3529 47.5488C11.1176 43.7185 10 39.5356 10 35C10 30.4644 11.1176 26.2815 13.3529 22.4512C15.5881 18.6209 18.6209 15.5881 22.4512 13.3529C26.2815 11.1176 30.4644 10 35 10Z" stroke="#5CEB2A" stroke-width="20"/>\n                <path id="closePath" d="M35 10C21.25 10 10 21.25 10 35C10 48.75 21.25 60 35 60C48.75 60 60 48.75 60 35C60 21.25 48.75 10 35 10ZM44.25 40.75C45.25 41.75 45.25 43.25 44.25 44.25C43.25 45.25 41.75 45.25 40.75 44.25L35 38.5L29.25 44.25C28.25 45.25 26.75 45.25 25.75 44.25C24.75 43.25 24.75 41.75 25.75 40.75L31.5 35L25.75 29.25C24.75 28.25 24.75 26.75 25.75 25.75C26.75 24.75 28.25 24.75 29.25 25.75L35 31.5L40.75 25.75C41.75 24.75 43.25 24.75 44.25 25.75C45.25 26.75 45.25 28.25 44.25 29.25L38.5 35L44.25 40.75Z" fill="black"/>\n                </g>\n                </svg>\n       </div> `,i.getElementsByClassName("main-notification-timer-and-close")[0].addEventListener("click",(()=>{i.parentNode.removeChild(i),clearTimeout(t)})),t=setTimeout((()=>{i.parentNode.removeChild(i)}),1e4),document.body.appendChild(i)}i.r(n),i.d(n,{createMainNotification:()=>t}),i.e(8961).then(i.bind(i,8961))}}]);