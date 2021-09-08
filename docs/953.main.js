!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(function(){return(()=>{"use strict";var e,t,r={1953:(e,t,r)=>{r(8594),r(5666);var n=r(8856);function o(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)}))}}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=r(8736),f=self.fetch;self.fetch=function(){if("localhost"===location.hostname)return f.apply(this,arguments);var e=arguments[0];return e.endsWith("ort-wasm.wasm")&&(arguments[0]="https://x-raylaser.github.io/pytorch-handwriting-synthesis-toolkit/ort-wasm.wasm"),f.apply(this,arguments)};var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.charset=" !\"#%'()+,-./0123456789:;?ABCDEFGHIJKLMNOPQRSTUVWXYZ[abcdefghijklmnopqrstuvwxyz",this.charToCode=new Map,this.codeToChar=new Map;for(var t=this.charset,r=0;r<t.length;r++){var n=t[r];this.charToCode.set(n,r+1),this.codeToChar.set(r+1,n)}}var t,r;return t=e,(r=[{key:"tokenize",value:function(e){for(var t=[],r=this.charToCode,n=0;n<e.length;n++){var o=e[n];r.has(o)?t.push(r.get(o)):t.push(0)}return t}},{key:"detokenize",value:function(e){for(var t="",r=0;r<e.length;r++){var n=e[r];t+=this.codeToChar.get(n)}return t}},{key:"charsetSize",value:function(){return this.charset.length+1}}])&&u(t.prototype,r),e}();function h(e,t){for(var r=[],n=0;n<t;n++)r[n]=0;return r[e]=1,r}function p(e){for(var t=new c,r=t.charsetSize(),n=t.tokenize(e),o=[],a=0;a<n.length;a++){var s=h(n[a],r);o.push.apply(o,i(s))}return new l.Tensor("float32",new Float32Array(o),[1,e.length,r])}function d(){return(d=a(regeneratorRuntime.mark((function e(t,r,n){var o,a,i,s,u,f,c,h,d,g,m,b,T,x,k,A,S,j,M,O,F,C,P,z,_,E,I,R,$,B,N,U,W,Z,q,D,G,H,J,K,L,Q;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.InferenceSession.create("./synthesis_network_52.onnx");case 2:o=e.sent,a={mu:[8.217162132263184,.1212363988161087,0],sd:[42.34926223754883,37.07347869873047,1]},i=new l.Tensor("float32",new Float32Array(3),[1,1,3]),s=p(t),u=new l.Tensor("float32",new Float32Array(80),[1,1,80]),f=new l.Tensor("float32",new Float32Array(10),[1,10]),c=new l.Tensor("float32",new Float32Array(400),[1,400]),h=new l.Tensor("float32",new Float32Array(400),[1,400]),d=new l.Tensor("float32",new Float32Array(400),[1,400]),g=new l.Tensor("float32",new Float32Array(400),[1,400]),m=new l.Tensor("float32",new Float32Array(400),[1,400]),b=new l.Tensor("float32",new Float32Array(400),[1,400]),(T=new Float32Array(1))[0]=r,x=new l.Tensor("float32",T,[1]),k=0,A=0,S=[],j=50*t.length,M=1,O=0;case 24:if(!(O<j)){e.next=68;break}return F={x:i,c:s,"w.1":u,"k.1":f,"h1.1":c,"c1.1":h,"h2.1":d,"c2.1":g,"h3.1":m,"c3.1":b,bias:x},e.next=28,o.run(F);case 28:if(C=e.sent,P=C.pi.data,z=C.mu.data,_=C.sd.data,E=C.eos.data,u=new l.Tensor("float32",C.w.data,[1,1,80]),f=new l.Tensor("float32",C.k.data,[1,10]),c=new l.Tensor("float32",C.h1.data,[1,400]),h=new l.Tensor("float32",C.c1.data,[1,400]),d=new l.Tensor("float32",C.h2.data,[1,400]),g=new l.Tensor("float32",C.c2.data,[1,400]),m=new l.Tensor("float32",C.h3.data,[1,400]),b=new l.Tensor("float32",C.c3.data,[1,400]),I=v(P),R=P.length,$=new Float32Array(3),B=z[I],N=z[R+I],U=_[I],W=_[R+I],Z=C.ro.data[I],q=w(B,N,U,W,Z),$[0]=q.x,$[1]=q.y,E[0]>.5?$[2]=1:$[2]=0,D=$[0]*a.sd[0]+a.mu[0],G=$[1]*a.sd[1]+a.mu[1],k+=D,A+=G,H=t.length,!y(C.phi.data,H,$[2])){e.next=61;break}return $[2]=1,e.abrupt("break",68);case 61:S.push({x:Math.round(k),y:Math.round(A),eos:$[2]}),(J=O+1)%M==0&&S.length>0&&(L=Math.max(0,J-M),Q=J,K=S.slice(L,Q),n(Math.round(O/j*100),K)),i=new l.Tensor("float32",$,[1,1,3]);case 65:O++,e.next=24;break;case 68:return e.abrupt("return",S);case 69:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t,r){var n;return e[t-1]>.8||(n=e).indexOf(Math.max.apply(Math,i(n)))==t-1&&r}function w(e,t,r,o,a){var i=a*r*o,s=[[Math.pow(r,2),i],[i,Math.pow(o,2)]],u=[e,t],l=(0,n.Z)(u,s).sample();return{x:l[0],y:l[1]}}function v(e){return g(0,e)}function g(e,t){if(1===t.length)return e;if(Math.random()<t[e])return e;for(var r=0,n=e+1;n<t.length;n++)r+=t[n];for(n=e+1;n<t.length;n++)t[n]=t[n]/r;return g(e+1,t)}onmessage=function(e){(function(e,t,r){return d.apply(this,arguments)})(e.data[0],e.data[1],(function(e,t){self.postMessage({event:"progressChanged",value:e,results:t})})).then((function(e){self.postMessage({event:"resultsReady",results:e})}))}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return r[e](a,a.exports,o),a.loaded=!0,a.exports}return o.m=r,o.x=()=>{var e=o.O(void 0,[51],(()=>o(1953)));return o.O(e)},e=[],o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){for(var[r,n,a]=e[f],s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[u])))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(f--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,n,a]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".main.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={953:1};o.f.i=(t,r)=>{e[t]||importScripts(o.p+o.u(t))};var t=self.webpackChunkhandwriting_demo=self.webpackChunkhandwriting_demo||[],r=t.push.bind(t);t.push=t=>{var[n,a,i]=t;for(var s in a)o.o(a,s)&&(o.m[s]=a[s]);for(i&&i(o);n.length;)e[n.pop()]=1;r(t)}})(),t=o.x,o.x=()=>o.e(51).then(t),o.x()})()}));