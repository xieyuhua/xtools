(function(e){function t(t){for(var c,o,a=t[0],l=t[1],u=t[2],d=0,p=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(c=!1)}c&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},i=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3480:function(e,t,n){"use strict";n("a1ff")},4011:function(e,t,n){},a1ff:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("79c4"),r=n("c965"),i=n.n(r);const o={class:"info"},a=["src"],l=["value","placeholder"],u={key:1},s={class:"handle-container"},d={key:0,class:"window-handle"};var p={__name:"App",setup(e){const{ipcRenderer:t}=window.require("electron"),n=window.require("process"),r=Object(c["g"])(!1),p=localStorage.getItem("rubick-system-detach")||"{}",v=Object(c["g"])({});window.initDetach=e=>{v.value=e,r.value=e.subInput&&(!!e.subInput.value||!!e.subInput.placeholder),localStorage.setItem("rubick-system-detach",JSON.stringify(e))};try{window.initDetach(JSON.parse(p))}catch(y){}const b=i()(e=>{t.send("msg-trigger",{type:"detachInputChange",data:{text:e.target.value}})},500),f=()=>{t.send("msg-trigger",{type:"openPluginDevTools"})},m=()=>{t.send("detach:service",{type:"minimize"})},w=()=>{t.send("detach:service",{type:"maximize"})},h=()=>{t.send("detach:service",{type:"close"})};return Object.assign(window,{setSubInputValue:({value:e})=>{v.value.subInput.value=e},setSubInput:e=>{v.value.subInput.placeholder=e},removeSubInput:()=>{v.value.subInput=null}}),window.enterFullScreenTrigger=()=>{document.querySelector(".detach").classList.remove("darwin")},window.leaveFullScreenTrigger=()=>{const e=document.querySelector(".detach");e.classList.contains("darwin")||e.classList.add("darwin")},window.maximizeTrigger=()=>{const e=document.querySelector(".maximize");e&&!e.classList.contains("unmaximize")&&e.classList.add("unmaximize")},window.unmaximizeTrigger=()=>{const e=document.querySelector(".maximize");e&&e.classList.remove("unmaximize")},"darwin"===n.platform?window.onkeydown=e=>{"Escape"!==e.code?!e.metaKey||"KeyW"!==e.code&&"KeyQ"!==e.code||window.handle.close():t.send("detach:service",{type:"endFullScreen"})}:window.onkeydown=e=>{e.ctrlKey&&"KeyW"===e.code&&window.handle.close()},(e,t)=>{var i,p;return Object(c["f"])(),Object(c["c"])("div",{class:Object(c["e"])([Object(c["i"])(n).platform,"detach"])},[Object(c["d"])("div",o,[Object(c["d"])("img",{src:v.value.logo},null,8,a),r.value?(Object(c["f"])(),Object(c["c"])("input",{key:0,autofocus:"",onInput:t[0]||(t[0]=(...e)=>Object(c["i"])(b)&&Object(c["i"])(b)(...e)),value:null===(i=v.value.subInput)||void 0===i?void 0:i.value,placeholder:null===(p=v.value.subInput)||void 0===p?void 0:p.placeholder},null,40,l)):(Object(c["f"])(),Object(c["c"])("span",u,Object(c["h"])(v.value.pluginName),1))]),Object(c["d"])("div",s,[Object(c["d"])("div",{class:"handle"},[Object(c["d"])("div",{class:"devtool",onClick:f,title:"开发者工具"})]),"darwin"!==Object(c["i"])(n).platform?(Object(c["f"])(),Object(c["c"])("div",d,[Object(c["d"])("div",{class:"minimize",onClick:m}),Object(c["d"])("div",{class:"maximize",onClick:w}),Object(c["d"])("div",{class:"close",onClick:h})])):Object(c["b"])("",!0)])],2)}}};n("3480");const v=p;var b=v;n("4011");Object(c["a"])(b).mount("#app")}});