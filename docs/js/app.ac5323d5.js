(function(e){function t(t){for(var r,a,c=t[0],s=t[1],p=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/happytap/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header"),n("aside",[e._v("Click to Start")]),n("main",[n("div",{attrs:{id:"p1"}},[n("h3",[e._v("0")])]),n("div",{attrs:{id:"p2"}},[n("h3",[e._v("0")])])])])}],a={name:"app"},c=a,s=(n("034f"),n("2877")),p=Object(s["a"])(c,o,i,!1,null,null,null),u=p.exports,l=n("1157"),f=n.n(l),d=n("9483");Object(d["a"])("/happytap/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(u)}}).$mount("#app");class h{static init(){h.active=!0,f()("#p1 h3").text(h.p1),f()("#p2 h3").text(h.p2),h.countdown()}static countdown(){f()("aside").text(h.countremain),h.countremain-=1,h.countremain<0?h.start():setTimeout(h.countdown,1e3)}static start(){f()("aside").hide(),f()("#p1").off().on(h.event,()=>{h.p1+=1,h.timeremain<=2?f()("#p1 h3").text("???"):f()("#p1 h3").text(h.p1)}),f()("#p2").off().on(h.event,()=>{h.p2+=1,h.timeremain<=2?f()("#p2 h3").text("???"):f()("#p2 h3").text(h.p2)}),h.timecount()}static timecount(){f()("header").text(h.timeremain),h.timeremain-=1,2==h.timeremain&&(f()("#p1 h3").text("???"),f()("#p2 h3").text("???")),h.timeremain<0?h.end():setTimeout(h.timecount,1e3)}static end(){alert("Finish"),f()("#p1").off(),f()("#p2").off(),f()("#p1 h3").text(h.p1),f()("#p2 h3").text(h.p2),f()("aside").show().text("Click to Restart"),h.countremain=3,h.timeremain=10,h.p1=0,h.p2=0,h.active=!1}}h.countremain=3,h.timeremain=10,h.p1=0,h.p2=0,h.event=null,f()("aside").on("touchstart",()=>{h.active||(h.event="touchstart",h.init())}),f()("aside").on("mousedown",()=>{h.active||(h.event="mousedown",h.init())})},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.ac5323d5.js.map