(()=>{"use strict";var e,r,t={},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>"non-initial-chunk/"+e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="frontend:",n.l=(t,o,i,a)=>{if(e[t])e[t].push(o);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",r+i),s.src=t),e[t]=[o];var f=(r,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={627:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=i);var a=n.p+n.u(r),s=new Error;n.l(a,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,i,[a,s,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);c&&c(n)}for(r&&r(t);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunkfrontend=self.webpackChunkfrontend||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.nc=void 0,async function(){IS_INIT_CALL_MODULE||(await async function(){try{let e=await fetch("/user/check/login-status");if(!e.ok)throw Error("server error");(await e.json()).isLogin?isLogin=!0:isLogin=!1}catch(e){console.error(e)}}(),isLogin&&await async function(){try{let e=await fetch("/user/data/login-user");if(!e.ok)throw Error("Server Error In Accessing Login User, Please Refresh Your Page");let r=await e.json();if(r.isSuccess)loginUser=r.loginUser;else{let{createMainNotification:e}=await n.e(5967).then(n.bind(n,5967));e(r.error,"error")}}catch(e){console.error(e),createMainNotification("Server Error In Fetching Login User Data, Please Refresh Your Page","error")}}(),IS_INIT_CALL_MODULE=!0)}()})();