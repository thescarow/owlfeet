"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3683,3958,6013],{3683:(e,n,t)=>{t.r(n),t.d(n,{createUserBox:()=>C,fetchUserAndCreateUserBox:()=>E});var o=t(5967),r=t(3379),s=t.n(r),l=t(7795),a=t.n(l),i=t(569),c=t.n(i),u=t(3565),d=t.n(u),f=t(9216),p=t.n(f),m=t(4589),x=t.n(m),b=t(4577),v={};v.styleTagTransform=x(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),s()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;let _=document.getElementById("profileUserReceivedFollowRequestCount"),g=document.getElementById("profileUserFollowingCount"),h=document.getElementById("profileUserFollowerCount");function w(e,n,t){fetch(`/follow/${n}/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"}}).then((e=>e.ok?e.json():Promise.reject(e))).then((r=>{console.log(r),!0===r.isSuccess?r.userFollowStatus?("send-follow-request"===r.userFollowStatus?g.textContent=(parseInt(g.textContent)-1).toString():"unfollow"===r.userFollowStatus&&(g.textContent=(parseInt(g.textContent)+1).toString()),y(e,r.userFollowStatus,t)):(e.parentNode.removeChild(e),"accept-received-follow-request"===n&&(h.textContent=(parseInt(h.textContent)+1).toString(),_.textContent=(parseInt(_.textContent)-1).toString(),C(document.getElementById("followerUserBoxContainer"),"follower",r.acceptReceivedFollowRequestUser)),"delete-received-follow-request"===n&&(_.textContent=(parseInt(_.textContent)-1).toString()),"remove-follower"===n&&(h.textContent=(parseInt(h.textContent)-1).toString())):(0,o.createMainNotification)(r.error,"error")}))}function y(e,n,t){let o=e.getElementsByClassName("user-box__btns")[0];o.innerHTML="";let r=document.createElement("button");r.classList.add("user-box__btn"),"send-follow-request"===n&&(r.textContent="Follow",r.classList.add("user-box__btn--send-follow-request")),"cancel-sent-follow-request"===n&&(r.textContent="Cancel Request",r.classList.add("user-box__btn--cancel-sent-follow-request")),"unfollow"===n&&(r.textContent="Unfollow",r.classList.add("user-box__btn--unfollow")),r.addEventListener("click",(()=>{w(e,n,t)})),o.insertAdjacentElement("beforeend",r)}function C(e,n,t){let o=document.createElement("div");o.classList.add("user-box"),o.setAttribute("data-user-id",t._id);let r=`\n    <div class="user-box__column">\n\n      <div class="user-box__pic">\n      <a class="user-box__link" href="/user/${t.username}">\n        <img\n          src="${t.profileUrl}"\n          alt="${t.firstName}'s pic}">\n          </a>\n      </div>\n\n    </div>\n\n    <div class="user-box__column user-box__column--left-margin">\n      <div class="user-box__username">${t.username}</div>\n      <div class="user-box__full-name">${t.firstName} ${t.lastName}</div>\n    </div>\n    <div class="user-box__column">\n      <div class="user-box__btns">\n\n      \n\n      </div>\n    </div>`;o.insertAdjacentHTML("beforeend",r),!0===isOwner&&("follower"===n?function(e,n){let t=e.getElementsByClassName("user-box__btns")[0];t.innerHTML="";let o=document.createElement("button");o.classList.add("user-box__btn","user-box__btn--remove-follower"),o.textContent="Remove",o.addEventListener("click",(()=>{w(e,"remove-follower",n)})),t.insertAdjacentElement("beforeend",o)}(o,t._id):"following"===n?y(o,"unfollow",t._id):"sent-follow-request"===n?y(o,"cancel-sent-follow-request",t._id):"received-follow-request"===n&&function(e,n){let t=e.getElementsByClassName("user-box__btns")[0];t.innerHTML="";let o=document.createElement("button");o.classList.add("user-box__btn","user-box__btn--accept-received-follow-request"),o.textContent="Accept",o.addEventListener("click",(()=>{w(e,"accept-received-follow-request",n)})),t.insertAdjacentElement("beforeend",o);let r=document.createElement("button");r.classList.add("user-box__btn","user-box__btn--delete-received-follow-request"),r.textContent="Cancel",r.addEventListener("click",(()=>{w(e,"delete-received-follow-request",n)})),t.insertAdjacentElement("beforeend",r)}(o,t._id)),e.insertAdjacentElement("afterbegin",o)}function E(e,n){let t=!0===isOwner?"":profileUser._id,r=e.childElementCount;fetch(`/follow/${n}/${t}?skipNumber=${r}`).then((e=>e.ok?e.json():Promise.reject(e))).then((t=>{console.log(t),!0===t.isSuccess?t.user.forEach((t=>{C(e,n,t)})):t.error&&(console.log("error:"+t.error),(0,o.createMainNotification)(t.error,"error"))})).catch((e=>{console.log(e),(0,o.createMainNotification)("Server Error,Please try again")}))}},4577:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(8081),r=t.n(o),s=t(3645),l=t.n(s)()(r());l.push([e.id,".user-box {\n       width: 100%;\n    border-bottom: 1px solid rgba(var(--rgba-light-color),0.1);\n    /* border-radius: 10px; */\n    margin: 3px 0 0 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: relative;\n    padding: 6px 2px;\n    text-decoration: none;\n    color: var(--light-color);\n    background-color: var(--dark-color);\n}\n\n.user-box__column {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.user-box__row {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.user-box__link {\n    \n}\n\n\n.user-box__column--left-margin {\n    margin-left: 5px\n}\n\n.user-box__pic {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.user-box__pic img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n.user-box__username {\n    font-size: 16px;\n    font-weight: 600;\n    line-height: 13px;\n}\n\n.user-box__full-name {\n    font-size: 15px;\n    font-weight: 500;\n    opacity: 0.7;\n}\n\n.user-box__btns {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    align-self: flex-end;\n    position: absolute;\n    right: 0;\n    bottom: 50%;\n    transform: translate(0, 50%);\n}\n\n\n.user-box__btn {\n    background-color: var(--light-color);\n    color: var(--dark-color);\n    border: 1px solid rgba(var(--rgba-dark-color), 0.9);\n    padding: 3px 6px;\n    border-radius: 5px;\n    outline: none;\n    font-size: 14px;\n    font-weight: 500;\n    margin: 0 2px;\n}\n\n.user-box__btn--action {\n    background-color: var(--second-color);\n    color: var(--light-color);\n}",""]);const a=l},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(l[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&l[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var s={},l=[],a=0;a<e.length;a++){var i=e[a],c=o.base?i[0]+o.base:i[0],u=s[c]||0,d="".concat(c," ").concat(u);s[c]=u+1;var f=t(d),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=r(p,o);o.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}l.push(d)}return l}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var l=0;l<s.length;l++){var a=t(s[l]);n[a].references--}for(var i=o(e,r),c=0;c<s.length;c++){var u=t(s[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}s=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},9216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);