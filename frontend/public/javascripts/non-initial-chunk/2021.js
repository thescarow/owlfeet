"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2021],{2943:(t,e,i)=>{i.d(e,{Z:()=>C});var s=i(7925);function o(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var r=0;function n(t){return"__private_"+r+++"_"+t}const a={getChunkSize:t=>Math.ceil(t.size/1e4),onProgress(){},onPartComplete(){},onSuccess(){},onError(t){throw t}},h=Symbol("pausing upload, not an actual error");var l=n("abortController"),u=n("chunks"),p=n("chunkState"),c=n("data"),d=n("file"),m=n("uploadPromise"),f=n("onError"),y=n("onSuccess"),b=n("onReject"),v=n("initChunks"),g=n("createUpload"),w=n("resumeUpload"),P=n("onPartProgress"),O=n("onPartComplete"),k=n("abortUpload");function j(){const t=this.options.getChunkSize(o(this,c)[c]),e=o(this,c)[c].size,i=Math.max(5242880,Math.ceil(e/1e4)),s=Math.max(t,i);if(0===o(this,c)[c].size)o(this,u)[u]=[o(this,c)[c]],o(this,c)[c].onProgress=o(this,P)[P](0),o(this,c)[c].onComplete=o(this,O)[O](0);else{const t=Math.ceil(e/s);o(this,u)[u]=Array(t);let i=0;for(let t=0;t<e;t+=s){const r=Math.min(e,t+s),n=o(this,c)[c].slice(t,r);n.onProgress=o(this,P)[P](i),n.onComplete=o(this,O)[O](i),o(this,u)[u][i++]=n}}o(this,p)[p]=o(this,u)[u].map((()=>({uploaded:0})))}function E(){o(this,m)[m]=this.options.companionComm.uploadFile(o(this,d)[d],o(this,u)[u],o(this,l)[l].signal).then(o(this,y)[y],o(this,b)[b])}function T(){o(this,m)[m]=this.options.companionComm.resumeUploadFile(o(this,d)[d],o(this,u)[u],o(this,l)[l].signal).then(o(this,y)[y],o(this,b)[b])}function A(){o(this,l)[l].abort(),this.options.companionComm.abortFileUpload(o(this,d)[d]).catch((t=>this.options.log(t)))}const C=class{constructor(t,e){var i;Object.defineProperty(this,k,{value:A}),Object.defineProperty(this,w,{value:T}),Object.defineProperty(this,g,{value:E}),Object.defineProperty(this,v,{value:j}),Object.defineProperty(this,l,{writable:!0,value:new s.HS}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,b,{writable:!0,value:t=>(null==t?void 0:t.cause)===h?null:o(this,f)[f](t)}),Object.defineProperty(this,P,{writable:!0,value:t=>e=>{if(!e.lengthComputable)return;const i=e.loaded;o(this,p)[p][t].uploaded=function(t){if("string"==typeof t)return parseInt(t,10);if("number"==typeof t)return t;throw new TypeError("Expected a number")}(i);const s=o(this,p)[p].reduce(((t,e)=>t+e.uploaded),0);this.options.onProgress(s,o(this,c)[c].size)}}),Object.defineProperty(this,O,{writable:!0,value:t=>e=>{o(this,u)[u][t]=null,o(this,p)[p][t].etag=e,o(this,p)[p][t].done=!0;const i={PartNumber:t+1,ETag:e};this.options.onPartComplete(i)}}),this.options={...a,...e},null!=(i=this.options).getChunkSize||(i.getChunkSize=a.getChunkSize),o(this,c)[c]=t,o(this,d)[d]=e.file,o(this,y)[y]=this.options.onSuccess,o(this,f)[f]=this.options.onError,o(this,v)[v]()}start(){o(this,m)[m]?(o(this,l)[l].signal.aborted||o(this,l)[l].abort(h),o(this,l)[l]=new s.HS,o(this,w)[w]()):o(this,g)[g]()}pause(){o(this,l)[l].abort(h),o(this,l)[l]=new s.HS}abort(t){var e;void 0===t&&(t=void 0),null!=(e=t)&&e.really?o(this,k)[k]():this.pause()}get chunkState(){return o(this,p)[p]}}},2740:(t,e,i)=>{i.d(e,{zt:()=>E,C$:()=>g,sk:()=>H});var s={};i.r(s),i.d(s,{getItem:()=>k,removeItem:()=>j,setItem:()=>O});class o extends Error{constructor(t,e){void 0===e&&(e=null),super("This looks like a network error, the endpoint might be blocked by an internet provider or a firewall."),this.cause=t,this.isNetworkError=!0,this.request=e}}const r=o;var n=i(5786);class a extends Error{constructor(t,e){void 0===e&&(e={}),super(t),this.cause=e.cause,this.cause&&(0,n.Z)(this.cause,"isNetworkError")&&(this.isNetworkError=this.cause.isNetworkError)}}const h=a;class l extends Error{constructor(){super("Authorization required"),this.name="AuthError",this.isAuthError=!0}}const u=l;let p;function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var d=0;function m(t){return"__private_"+d+++"_"+t}const f=new Map;var y=m("companionHeaders"),b=m("getUrl"),v=m("request");p=Symbol.for("uppy test: getCompanionHeaders");class g{constructor(t,e){Object.defineProperty(this,v,{value:P}),Object.defineProperty(this,b,{value:w}),Object.defineProperty(this,y,{writable:!0,value:void 0}),this.uppy=t,this.opts=e,this.onReceiveResponse=this.onReceiveResponse.bind(this),c(this,y)[y]=null==e?void 0:e.companionHeaders}setCompanionHeaders(t){c(this,y)[y]=t}[p](){return c(this,y)[y]}get hostname(){const{companion:t}=this.uppy.getState(),e=this.opts.companionUrl;return(t&&t[e]?t[e]:e).replace(/\/$/,"")}async headers(){return{Accept:"application/json","Content-Type":"application/json","Uppy-Versions":`@uppy/companion-client=${g.VERSION}`,...c(this,y)[y]}}onReceiveResponse(t){let{headers:e}=t;const i=this.uppy.getState().companion||{},s=this.opts.companionUrl;e.has("i-am")&&e.get("i-am")!==i[s]&&this.uppy.setState({companion:{...i,[s]:e.get("i-am")}})}async preflight(t){const e=f.get(this.hostname);if(null!=e)return e;const i=["accept","content-type","uppy-auth-token"],s=(async()=>{try{const e=(await fetch(c(this,b)[b](t),{method:"OPTIONS"})).headers.get("access-control-allow-headers");if(null==e||"*"===e)return f.set(this.hostname,i),i;this.uppy.log(`[CompanionClient] adding allowed preflight headers to companion cache: ${this.hostname} ${e}`);const s=e.split(",").map((t=>t.trim().toLowerCase()));return f.set(this.hostname,s),s}catch(t){return this.uppy.log(`[CompanionClient] unable to make preflight request ${t}`,"warning"),f.delete(this.hostname),i}})();return f.set(this.hostname,s),s}async preflightAndHeaders(t){const[e,i]=await Promise.all([this.preflight(t),this.headers()]);return Object.fromEntries(Object.entries(i).filter((t=>{let[i]=t;return!!e.includes(i.toLowerCase())||(this.uppy.log(`[CompanionClient] excluding disallowed header ${i}`),!1)})))}async get(t,e){return void 0===e&&(e=void 0),"boolean"==typeof e&&(e={skipPostResponse:e}),c(this,v)[v]({...e,path:t})}async post(t,e,i){return void 0===i&&(i=void 0),"boolean"==typeof i&&(i={skipPostResponse:i}),c(this,v)[v]({...i,path:t,method:"POST",data:e})}async delete(t,e,i){return void 0===e&&(e=void 0),"boolean"==typeof i&&(i={skipPostResponse:i}),c(this,v)[v]({...i,path:t,method:"DELETE",data:e})}}function w(t){return/^(https?:|)\/\//.test(t)?t:`${this.hostname}/${t}`}async function P(t){let{path:e,method:i="GET",data:s,skipPostResponse:o,signal:n}=t;try{const t=await this.preflightAndHeaders(e),a=await function(){return fetch(...arguments).catch((t=>{throw"AbortError"===t.name?t:new r(t)}))}(c(this,b)[b](e),{method:i,signal:n,headers:t,credentials:this.opts.companionCookiesRule||"same-origin",body:s?JSON.stringify(s):null});return o||this.onReceiveResponse(a),async function(t){if(401===t.status)throw new u;const e=t.json();if(t.ok)return e;let i=`Failed request with status: ${t.status}. ${t.statusText}`;try{const t=await e;i=t.message?`${i} message: ${t.message}`:i,i=t.requestId?`${i} request-Id: ${t.requestId}`:i}catch{}throw new Error(i)}(a)}catch(t){if(null!=t&&t.isAuthError)throw t;throw new h(`Could not ${i} ${c(this,b)[b](e)}`,{cause:t})}}function O(t,e){return new Promise((i=>{localStorage.setItem(t,e),i()}))}function k(t){return Promise.resolve(localStorage.getItem(t))}function j(t){return new Promise((e=>{localStorage.removeItem(t),e()}))}g.VERSION="3.1.1";class E extends g{constructor(t,e){super(t,e),this.provider=e.provider,this.id=this.provider,this.name=this.opts.name||(t=>this.id.split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(" "))(),this.pluginId=this.opts.pluginId,this.tokenKey=`companion-${this.pluginId}-auth-token`,this.companionKeysParams=this.opts.companionKeysParams,this.preAuthToken=null}async headers(){const[t,e]=await Promise.all([super.headers(),this.getAuthToken()]),i={};return e&&(i["uppy-auth-token"]=e),this.companionKeysParams&&(i["uppy-credentials-params"]=btoa(JSON.stringify({params:this.companionKeysParams}))),{...t,...i}}onReceiveResponse(t){super.onReceiveResponse(t);const e=this.uppy.getPlugin(this.pluginId),i=e.getPluginState().authenticated?401!==t.status:t.status<400;return e.setPluginState({authenticated:i}),t}setAuthToken(t){return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey,t)}getAuthToken(){return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey)}async ensurePreAuth(){if(this.companionKeysParams&&!this.preAuthToken&&(await this.fetchPreAuthToken(),!this.preAuthToken))throw new Error("Could not load authentication data required for third-party login. Please try again later.")}authUrl(t){void 0===t&&(t={});const e=new URLSearchParams(t);return this.preAuthToken&&e.set("uppyPreAuthToken",this.preAuthToken),`${this.hostname}/${this.id}/connect?${e}`}fileUrl(t){return`${this.hostname}/${this.id}/get/${t}`}async fetchPreAuthToken(){if(this.companionKeysParams)try{const t=await this.post(`${this.id}/preauth/`,{params:this.companionKeysParams});this.preAuthToken=t.token}catch(t){this.uppy.log(`[CompanionClient] unable to fetch preAuthToken ${t}`,"warning")}}list(t){return this.get(`${this.id}/list/${t||""}`)}logout(){return this.get(`${this.id}/logout`).then((t=>Promise.all([t,this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey)]))).then((t=>{let[e]=t;return e}))}static initPlugin(t,e,i){if(t.type="acquirer",t.files=[],i&&(t.opts={...i,...e}),e.serverUrl||e.serverPattern)throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");if(e.companionAllowedHosts){const i=e.companionAllowedHosts;if(!("string"==typeof i||Array.isArray(i)||i instanceof RegExp))throw new TypeError(`${t.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);t.opts.companionAllowedHosts=i}else/^(?!https?:\/\/).*$/i.test(e.companionUrl)?t.opts.companionAllowedHosts=`https://${e.companionUrl.replace(/^\/\//,"")}`:t.opts.companionAllowedHosts=new URL(e.companionUrl).origin;t.storage=t.opts.storage||s}}var T=i(4800);let A,C;function S(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var $=0;function _(t){return"__private_"+$+++"_"+t}var I=_("queued"),R=_("emitter"),U=_("isOpen"),q=_("socket"),x=_("handleMessage");A=Symbol.for("uppy test: getSocket"),C=Symbol.for("uppy test: getQueued");class H{constructor(t){Object.defineProperty(this,I,{writable:!0,value:[]}),Object.defineProperty(this,R,{writable:!0,value:T()}),Object.defineProperty(this,U,{writable:!0,value:!1}),Object.defineProperty(this,q,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:t=>{try{const e=JSON.parse(t.data);this.emit(e.action,e.payload)}catch(t){console.log(t)}}}),this.opts=t,t&&!1===t.autoOpen||this.open()}get isOpen(){return S(this,U)[U]}[A](){return S(this,q)[q]}[C](){return S(this,I)[I]}open(){S(this,q)[q]=new WebSocket(this.opts.target),S(this,q)[q].onopen=()=>{for(S(this,U)[U]=!0;S(this,I)[I].length>0&&S(this,U)[U];){const t=S(this,I)[I].shift();this.send(t.action,t.payload)}},S(this,q)[q].onclose=()=>{S(this,U)[U]=!1},S(this,q)[q].onmessage=S(this,x)[x]}close(){var t;null==(t=S(this,q)[q])||t.close()}send(t,e){S(this,U)[U]?S(this,q)[q].send(JSON.stringify({action:t,payload:e})):S(this,I)[I].push({action:t,payload:e})}on(t,e){S(this,R)[R].on(t,e)}emit(t,e){S(this,R)[R].emit(t,e)}once(t,e){S(this,R)[R].once(t,e)}}},7925:(t,e,i)=>{i.d(e,{HS:()=>o,zE:()=>n});var s=i(5786);const{AbortController:o}=globalThis,{AbortSignal:r}=globalThis,n=function(t,e){void 0===t&&(t="Aborted");const i=new DOMException(t,"AbortError");return null!=e&&(0,s.Z)(e,"cause")&&Object.defineProperty(i,"cause",{__proto__:null,configurable:!0,writable:!0,value:e.cause}),i}},3357:(t,e,i)=>{function s(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}i.d(e,{Z:()=>h});var o=0;function r(t){return"__private_"+o+++"_"+t}var n=r("emitter"),a=r("events");class h{constructor(t){Object.defineProperty(this,n,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:[]}),s(this,n)[n]=t}on(t,e){return s(this,a)[a].push([t,e]),s(this,n)[n].on(t,e)}remove(){for(const[t,e]of s(this,a)[a].splice(0))s(this,n)[n].off(t,e)}}},7570:(t,e,i)=>{function s(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}i.d(e,{s:()=>O});var o=0;function r(t){return"__private_"+o+++"_"+t}function n(t){return new Error("Cancelled",{cause:t})}function a(t){if(null!=t){const e=()=>this.abort(t.reason);t.addEventListener("abort",e,{once:!0});const i=()=>{t.removeEventListener("abort",e)};this.then(i,i)}return this}var h=r("activeRequests"),l=r("queuedHandlers"),u=r("paused"),p=r("pauseTimer"),c=r("downLimit"),d=r("upperLimit"),m=r("rateLimitingTimer"),f=r("call"),y=r("queueNext"),b=r("next"),v=r("queue"),g=r("dequeue"),w=r("resume"),P=r("increaseLimit");class O{constructor(t){Object.defineProperty(this,g,{value:A}),Object.defineProperty(this,v,{value:T}),Object.defineProperty(this,b,{value:E}),Object.defineProperty(this,y,{value:j}),Object.defineProperty(this,f,{value:k}),Object.defineProperty(this,h,{writable:!0,value:0}),Object.defineProperty(this,l,{writable:!0,value:[]}),Object.defineProperty(this,u,{writable:!0,value:!1}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:1}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,m,{writable:!0,value:void 0}),Object.defineProperty(this,w,{writable:!0,value:()=>this.resume()}),Object.defineProperty(this,P,{writable:!0,value:()=>{if(s(this,u)[u])s(this,m)[m]=setTimeout(s(this,P)[P],0);else{s(this,c)[c]=this.limit,this.limit=Math.ceil((s(this,d)[d]+s(this,c)[c])/2);for(let t=s(this,c)[c];t<=this.limit;t++)s(this,y)[y]();s(this,d)[d]-s(this,c)[c]>3?s(this,m)[m]=setTimeout(s(this,P)[P],2e3):s(this,c)[c]=Math.floor(s(this,c)[c]/2)}}}),this.limit="number"!=typeof t||0===t?1/0:t}run(t,e){return!s(this,u)[u]&&s(this,h)[h]<this.limit?s(this,f)[f](t):s(this,v)[v](t,e)}wrapPromiseFunction(t,e){var i=this;return function(){for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];let h;const l=new Promise(((s,r)=>{h=i.run((()=>{let e,i;try{i=Promise.resolve(t(...o))}catch(t){i=Promise.reject(t)}return i.then((t=>{e?r(e):(h.done(),s(t))}),(t=>{e?r(e):(h.done(),r(t))})),t=>{e=n(t)}}),e)}));return l.abort=t=>{h.abort(t)},l.abortOn=a,l}}resume(){s(this,u)[u]=!1,clearTimeout(s(this,p)[p]);for(let t=0;t<this.limit;t++)s(this,y)[y]()}pause(t){void 0===t&&(t=null),s(this,u)[u]=!0,clearTimeout(s(this,p)[p]),null!=t&&(s(this,p)[p]=setTimeout(s(this,w)[w],t))}rateLimit(t){clearTimeout(s(this,m)[m]),this.pause(t),this.limit>1&&Number.isFinite(this.limit)&&(s(this,d)[d]=this.limit-1,this.limit=s(this,c)[c],s(this,m)[m]=setTimeout(s(this,P)[P],t))}get isPaused(){return s(this,u)[u]}}function k(t){s(this,h)[h]+=1;let e,i=!1;try{e=t()}catch(t){throw s(this,h)[h]-=1,t}return{abort:t=>{i||(i=!0,s(this,h)[h]-=1,e(t),s(this,y)[y]())},done:()=>{i||(i=!0,s(this,h)[h]-=1,s(this,y)[y]())}}}function j(){queueMicrotask((()=>s(this,b)[b]()))}function E(){if(s(this,u)[u]||s(this,h)[h]>=this.limit)return;if(0===s(this,l)[l].length)return;const t=s(this,l)[l].shift(),e=s(this,f)[f](t.fn);t.abort=e.abort,t.done=e.done}function T(t,e){void 0===e&&(e={});const i={fn:t,priority:e.priority||0,abort:()=>{s(this,g)[g](i)},done:()=>{throw new Error("Cannot mark a queued request as done: this indicates a bug")}},o=s(this,l)[l].findIndex((t=>i.priority>t.priority));return-1===o?s(this,l)[l].push(i):s(this,l)[l].splice(o,0,i),i}function A(t){const e=s(this,l)[l].indexOf(t);-1!==e&&s(this,l)[l].splice(e,1)}Symbol("__queue")},4821:(t,e,i)=>{i.d(e,{Z:()=>s});const s=i(3096)((function(t,e,i){const{progress:s,bytesUploaded:o,bytesTotal:r}=e;s&&(t.uppy.log(`Upload progress: ${s}`),t.uppy.emit("upload-progress",i,{uploader:t,bytesUploaded:o,bytesTotal:r}))}),300,{leading:!0,trailing:!0})},4359:(t,e,i)=>{function s(t){const e=/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i.exec(t)[1];return`${/^http:\/\//i.test(t)?"ws":"wss"}://${e}`}i.d(e,{Z:()=>s})},5786:(t,e,i)=>{function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i.d(e,{Z:()=>s})}}]);