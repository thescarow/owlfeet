(()=>{var e,t,r={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"non-initial-chunk/"+e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="frontend:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var c,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(l=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[n];var f=(t,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),l&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={5177:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[a,c,l]=r,s=0;if(a.some((t=>0!==e[t]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);l&&l(o)}for(t&&t(r);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.nc=void 0,async function(){let{createMainNotification:e}=await o.e(5967).then(o.bind(o,5967));const t=document.getElementById("userNotificationIcon"),r=document.getElementById("userNotificationModal"),n=document.getElementById("userNotificationModalCloseBtn");t.onclick=async function(){r.style.display="block";let{createUserNotification:t}=await o.e(8286).then(o.bind(o,8286));fetch("/user-notification").then((e=>e.ok?e.json():Promise.reject(e))).then((r=>{r.isSuccess?r.userNotification.forEach((e=>{t(i,e)})):e(r.error,"error")})).catch((t=>{e("Server Error, Please Try Again","error")}))},n.onclick=function(){r.style.display="none"},window.onclick=function(e){e.target==r&&(r.style.display="none")};const i=document.getElementById("userNotificationContainer")}()})();