!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),e.disabled=!0,t.disabled=!1})),e.disabled=!0;var n=null}();
//# sourceMappingURL=01-color-switcher.ee797c42.js.map
