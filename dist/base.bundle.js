!function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=4)}([,,,,function(e,t,n){n(5),n(6),n(7),n(8),e.exports=n(9)},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(10),s=n(11);Object(a.a)(),Object(s.a)()},function(e,t,n){"use strict";function a(){function e(){for(var e=this;!e.className.includes("nav-menu");)"li"===e.tagName.toLowerCase()&&(e.className.includes("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var t=void 0,n=void 0,a=void 0,s=void 0,i=void 0,o=void 0;if((t=document.getElementById("site-navigation"))&&void 0!==(n=t.getElementsByTagName("button")[0])){if(void 0===(a=t.getElementsByTagName("ul")[0]))return void(n.style.display="none");for(a.setAttribute("aria-expanded","false"),a.className.includes("nav-menu")||(a.className+=" nav-menu"),n.onclick=function(){t.className.includes("toggled")?(t.className=t.className.replace(" toggled",""),n.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false")):(t.className+=" toggled",n.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"))},s=a.getElementsByTagName("a"),i=0,o=s.length;i<o;i++)s[i].addEventListener("focus",e,!0),s[i].addEventListener("blur",e,!0);!function(e){var t=void 0,n=void 0,a=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t=this.parentNode,n=void 0;if(t.classList.contains("focus"))t.classList.remove("focus");else{for(e.preventDefault(),n=0;n<t.parentNode.children.length;++n)t!==t.parentNode.children[n]&&t.parentNode.children[n].classList.remove("focus");t.classList.add("focus")}},n=0;n<a.length;++n)a[n].addEventListener("touchstart",t,!1)}(t)}}t.a=a},function(e,t,n){"use strict";function a(){/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e=location.hash.substring(1),t=void 0;/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)}t.a=a}]);
//# sourceMappingURL=base.bundle.js.map