"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4594,5967,4698,4932,3958,6201,6013,1626],{5967:(e,n,t)=>{function r(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";"error"!=n&&"success"!=n&&(n="info");const t=document.createElement("div");let r;t.classList.add("main-notification",n),t.innerHTML=`\n     <div class="main-notification-message"> ${n.charAt(0).toUpperCase()+n.slice(1)}:\n     ${e}    \n     </div>\n    <div class="main-notification-timer-and-close">\n                <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <g id="timerAndClose">\n                <path id="timerPath" d="M35 10C39.5356 10 43.7185 11.1176 47.5488 13.3529C51.3791 15.5881 54.4119 18.6209 56.6471 22.4512C58.8824 26.2815 60 30.4644 60 35C60 39.5356 58.8824 43.7185 56.6471 47.5488C54.4119 51.3791 51.3791 54.4119 47.5488 56.6471C43.7185 58.8824 39.5356 60 35 60C30.4644 60 26.2815 58.8824 22.4512 56.6471C18.6209 54.4119 15.5881 51.3791 13.3529 47.5488C11.1176 43.7185 10 39.5356 10 35C10 30.4644 11.1176 26.2815 13.3529 22.4512C15.5881 18.6209 18.6209 15.5881 22.4512 13.3529C26.2815 11.1176 30.4644 10 35 10Z" stroke="#5CEB2A" stroke-width="20"/>\n                <path id="closePath" d="M35 10C21.25 10 10 21.25 10 35C10 48.75 21.25 60 35 60C48.75 60 60 48.75 60 35C60 21.25 48.75 10 35 10ZM44.25 40.75C45.25 41.75 45.25 43.25 44.25 44.25C43.25 45.25 41.75 45.25 40.75 44.25L35 38.5L29.25 44.25C28.25 45.25 26.75 45.25 25.75 44.25C24.75 43.25 24.75 41.75 25.75 40.75L31.5 35L25.75 29.25C24.75 28.25 24.75 26.75 25.75 25.75C26.75 24.75 28.25 24.75 29.25 25.75L35 31.5L40.75 25.75C41.75 24.75 43.25 24.75 44.25 25.75C45.25 26.75 45.25 28.25 44.25 29.25L38.5 35L44.25 40.75Z" fill="black"/>\n                </g>\n                </svg>\n       </div> `,t.getElementsByClassName("main-notification-timer-and-close")[0].addEventListener("click",(()=>{t.parentNode.removeChild(t),clearTimeout(r)})),r=setTimeout((()=>{t.parentNode.removeChild(t)}),1e4),document.body.appendChild(t)}t.r(n),t.d(n,{createMainNotification:()=>r}),t.e(8961).then(t.bind(t,8961))},4594:(e,n,t)=>{t.r(n),t.d(n,{setOwnerSettingContent:()=>g});var r=t(5967),i=t(3379),o=t.n(i),a=t(7795),s=t.n(a),l=t(569),c=t.n(l),d=t(3565),f=t.n(d),u=t(9216),p=t.n(u),v=t(4589),m=t.n(v),y=t(2793),h={};function g(e,n,t){n.innerHTML=`\n  <div id="verifyUserEmailBox">\n        <div id="verifyUserEmailInfo">\n            <div id="verifyUserEmailTitle"> Verify Your Email\n            </div>\n           <div id="verifyUserEmailDesc">\n           We will send an email to your email address, open your email box and verify your Email Id.\n           </div>\n      </div>\n<input id="userEmail" type="email" placeholder="Enter Your Registered Email" value="${t.email}" style="text-transform: lowercase;">\n      <div id="verifyUserEmailBtns" >\n          <button id="cancleVerifyUserEmail" class="btn">Cancle</button>\n          <button id="verifyUserEmail" class="btn">Verify</button>\n      </div>\n  </div>\n  `,document.getElementById("cancleVerifyUserEmail").addEventListener("click",(()=>{e.style.display="none"}));const i=document.getElementById("verifyUserEmail");let o={userEmail:userEmail.value};i.addEventListener("click",(()=>{fetch("/user-auth/verify-user-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>{if(e.ok)return e.json();throw new Error("Error in verification of User Email")})).then((e=>{e.isSuccess?(0,r.createMainNotification)("Verification Email Is Sent To Your Email Box,Please Go And Verify Your Email","success"):(0,r.createMainNotification)(e.error,"error")})).catch((e=>{(0,r.createMainNotification)("Server Error In Verification User Email,Please Try Again","error")}))}))}h.styleTagTransform=m(),h.setAttributes=f(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),o()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals},2793:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(8081),i=t.n(r),o=t(3645),a=t.n(o)()(i());a.push([e.id,"#verifyUserEmailBox {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 12px;\n\n\n}\n\n#verifyUserEmailBox div#verifyUserEmailInfo {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n\n\ndiv#verifyUserEmailInfo #verifyUserEmailTitle {\n       font-size: 17px;\n    border-bottom: 2px solid var(--light-color);\n    color: var(--light-color);\n}\n\n\n\ndiv#verifyUserEmailInfo #verifyUserEmailDesc {\n      font-size: 14px;\n    font-weight: 800;\n    margin-top: 15px;\n    align-self: flex-start;\n    background-color: rgba(var(--rgba-light-color), 0.6);\n    color: var(--dark-color);\n    padding: 2px 5px;\n    border-radius: 5px;\n}\n\ninput#userEmail {\n       width: 100%;\n    margin-top: 20px;\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 0.2px;\n    padding: 10px 5px;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    color: var(--dark-color);\n    background-color: var(--light-color);\n}\n\n\ndiv#verifyUserEmailBtns {\n    margin-top: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\ndiv#verifyUserEmailBtns button.btn {\n    background-color: var(--light-color);\n    padding: 5px 8px;\n    color: #413F42;\n    border: none;\n    outline: none;\n    font-size: 16px;\n    font-weight: 700;\n    border-radius: 6px;\n}\n\ndiv#verifyUserEmailBtns button#verifyUserEmail {\n    background-color: var(--second-color);\n\n}",""]);const s=a},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=o[c]||0,f="".concat(c," ").concat(d);o[c]=d+1;var u=t(f),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var v=i(p,r);r.byIndex=s,n.splice(s,0,{identifier:f,updater:v,references:1})}a.push(f)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var l=r(e,i),c=0;c<o.length;c++){var d=t(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);