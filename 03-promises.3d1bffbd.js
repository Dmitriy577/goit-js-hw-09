!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");e(r).Notify.init({width:"300px",position:"right-top",distance:"10px",opacity:1,borderRadius:"50px",timeout:5e3});var u=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t=u.delay.value,o=u.step.value,i=u.amount.value;!function(n,t,o){for(var i=0,u=0;u<o;u+=1)a(i+=1,n).then((function(n){e(r).Notify.success(n)})).catch((function(n){e(r).Notify.failure(n)})),n=Number(n)+Number(t)}(t,o,i)}))}();
//# sourceMappingURL=03-promises.3d1bffbd.js.map
