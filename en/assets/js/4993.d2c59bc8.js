(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[4993],{72210:function(t){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";var r,i,o,a=n(3),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function l(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,c()}}else r!==u&&(r=u,c())}function s(){return o||(o=function(){r||l(u);for(var t,e=r.split(""),n=[],i=a.nextValue();e.length>0;)i=a.nextValue(),t=Math.floor(i*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return l(t),r},seed:function(t){a.seed(t),i!==t&&(c(),i=t)},lookup:function(t){return s()[t]},shuffled:s}},function(t,e,n){"use strict";t.exports=n(2)},function(t,e,n){"use strict";var r=n(0),i=n(4),o=n(8),a=n(9)||0;function u(){return i(a)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,i,o=n(5),a=(n(0),1567752802062);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===i?r++:(r=0,i=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+o(n)}},function(t,e,n){"use strict";var r=n(0),i=n(6),o=n(7);t.exports=function(t){for(var e,n=0,a="";!e;)a+=o(i,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){"use strict";var r,i="object"==typeof window&&(window.crypto||window.msCrypto);r=i&&i.getRandomValues?function(t){return i.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,i=Math.ceil(1.6*r*n/e.length),o="";;)for(var a=i,u=t(a);a--;)if((o+=e[u[a]&r]||"").length===+n)return o}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),o={init:function(){i.a.characters("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$_")},generate:function(){return i.a.generate()}};o.init();var a=o,u={onScroll:function(t){window.addEventListener("scroll",t)},isElementAbovePageFold:function(t){return t.offsetTop-(u.getInnerHeight()+u.getPageYOffset())<0},getInnerHeight:function(){return window.innerHeight},getPageYOffset:function(){return window.pageYOffset}},c=u,l={},s=[];function f(){s.forEach((function(t){return p(t.element,t.onShowUp)}))}function p(t,e){c.isElementAbovePageFold(t)&&e()}l.init=function(){c.onScroll(f)},l.subscribe=function(t,e){return setTimeout((function(){return p(t,e)})),function(t,e){var n=a.generate();return s.push({id:n,element:t,onShowUp:e}),n}(t,e)},l.unsubscribe=function(t){var e;s.splice((e=t,s.find((function(t){return t.id===e}))),1)},l.init(),e.default=l}]).default},function(t,e){t.exports='<div class="application" data-application>\n  <div class="application-topbar">\n    <div class="application-actions-container">\n      <div class="application-action application-action-close"></div>\n      <div class="application-action application-action-minimize"></div>\n      <div class="application-action application-action-maximize"></div>\n    </div>\n    <div class="application-title-container" data-title-container></div>\n  </div>\n  <div class="application-content-container" data-content-container></div>\n</div>\n'},function(t,e){t.exports='<span class="cursor"></span>\n'},function(t,e){t.exports='<div class="editor-line">\n  <div class="editor-line-number" data-editor-line-number></div>\n  <pre class="editor-line-text" data-editor-line-text></pre>\n</div>\n'},function(t,e){t.exports='<div class="terminal-line"></div>\n'},function(t,e){t.exports='<div>\n  <div\n    class="terminal-command-line-prompt-string"\n    data-terminal-command-line-prompt-string>\n  </div>\n  <div\n    class="terminal-command-line-text"\n    data-terminal-command-line-text>\n  </div>\n</div>\n'},function(t,e){t.exports='<div class="terminal-response-line-text" data-terminal-response-line-text></div>\n'},function(t,e){t.exports='<div class="desktop"></div>\n'},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return At})),n(8),n(9);var r=n(0),i=n.n(r),o=(n(10),n(11),n(12),{parseHtml:function(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("body").firstChild},wrapHtmlStringInHtmlTag:function(t,e){return"<".concat(e,">").concat(t,"</").concat(e,">")},clearNodeContent:function(t){return t.innerHTML="",t},containsClosingHtmlTag:function(t){return new RegExp("</.+>","gm").test(t)},isHtmlNodeTypeText:function(t){return t&&"#text"==t.nodeName.toLowerCase()}}),a=o,u={toKebabCase:function(t){return t.toLowerCase().replace(" ","-")},isEmptyString:function(t){return""===t.trim()},removeBlankFirstLine:function(t){var e=t.split("\n");return""===e[0].trim()&&e.splice(0,1),e}},c=u,l=n(1),s=n.n(l);function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this.type=e,this.options=n,this.element=d(e),this.setOptions(this.options)}var e,n,r;return e=t,(n=[{key:"setOptions",value:function(t){t.minHeight&&this.setMinHeight(t.minHeight),t.windowTitle&&this.setWindowTitle(t.windowTitle),this.configAnimation(t.inanimate)}},{key:"setMinHeight",value:function(t){var e=v(this.element),n=parseInt(t)-26;e.style.minHeight="".concat(n,"px")}},{key:"setWindowTitle",value:function(t){this.element.querySelector("[data-title-container]").innerText=t,this.windowTitle=t}},{key:"configAnimation",value:function(t){this.setInanimate(t),t&&h(this.element).classList.add("application-inanimate")}},{key:"addContent",value:function(t){v(this.element).appendChild(t)}},{key:"setInanimate",value:function(t){this.inanimate=t}},{key:"minimize",value:function(){this.setMaximized(!1),y(this.element,"remove","application-maximized"),y(this.element,"add","application-minimized")}},{key:"maximize",value:function(){this.setMaximized(!0),y(this.element,"remove","application-minimized"),y(this.element,"add","application-maximized")}},{key:"setMaximized",value:function(t){this.isMaximized=t}}])&&p(e.prototype,n),r&&p(e,r),t}();function d(t){var e=function(t){var e=document.createElement("div"),n="".concat(c.toKebabCase(t),"-application");return e.setAttribute("class",n),e}(t);return e.appendChild(a.parseHtml(s.a)),e}function v(t){return t.querySelector("[data-content-container]")}function y(t,e,n){h(t).classList[e](n)}function h(t){return t.querySelector("[data-application]")}n(13),n(14);var b={type:function(t,e,n){var r=e.split(""),i=r.shift();i?function(t,e,n,r){t.append(e),setTimeout((function(){b.type(t,n.join(""),r)}),75)}(t,i,r,n):n()}},g=b,w={};function O(t,e,n){g.type(e,t,n)}w.type=function(t,e,n){!function t(e,n,r){if(!n.length)return r();!function(t,e,n){a.isHtmlNodeTypeText(e)?O(e.textContent,t,n):O(e.textContent,function(t,e){var n=a.clearNodeContent(e);return t.appendChild(n),n}(t,e),n)}(e,n.shift(),(function(){t(e,n,r)}))}(t,function(t){var e=a.wrapHtmlStringInHtmlTag(t,"span"),n=a.parseHtml(e);return Array.from(n.childNodes)}(e),n)};var x=w,S={};function j(t,e,n){t.classList[e](n)}S.type=function(t,e,n){j(t,"add","is-typing"),function(t){return a.containsClosingHtmlTag(t)?x:g}(e).type(t,e,(function(){j(t,"remove","is-typing"),n()}))};var C=S,k=n(2),P=n.n(k);function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(P.a)}var e,n,r;return e=t,(n=[{key:"write",value:function(t,e){C.type(this.element,t,e)}},{key:"setActive",value:function(){E(this.element,"add","cursor-active")}},{key:"setInactive",value:function(){E(this.element,"remove","cursor-active")}}])&&T(e.prototype,n),r&&T(e,r),t}();function E(t,e,n){t.classList[e](n)}var A=n(3),H=n.n(A);function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var L=function(){function t(e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cursor=new _,this.element=a.parseHtml(H.a),r=e,(function(t){return I(t,"[data-editor-line-number]")}(this.element)).innerText=r,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";z(t).innerHTML=e}(this.element,n),n||z(this.element).appendChild(this.cursor.element)}var e,n,r;return e=t,(n=[{key:"write",value:function(t,e){this.cursor.write(t,e)}},{key:"setActive",value:function(){this.cursor.setActive()}},{key:"setInactive",value:function(){this.cursor.setInactive()}}])&&M(e.prototype,n),r&&M(e,r),t}();function z(t){return I(t,"[data-editor-line-text]")}function I(t,e){return t.querySelector(e)}function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var W=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return D(this,e),(n=R(this,F(e).call(this,"editor",r))).container=t,n.container.appendChild(n.element),n.setupInitialContent(r.initialContent),n.setWindowTitle(B(r)),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),n=e,(r=[{key:"setupInitialContent",value:function(){var t=Y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"");this.setLines([]),this.appendLines(t)}},{key:"setLines",value:function(t){this.lines=[]}},{key:"appendLines",value:function(t){var e=this;t.forEach((function(t){var n=U(e.lines,t);K(e,n)}))}},{key:"write",value:function(t,e){!function t(e,n,r){var i,o=n.shift();void 0!==o?((i=e.lines).length&&i[i.length-1].setInactive(),function(t,e,n){var r=U(t.lines);K(t,r),r.setActive(),r.write(e,n)}(e,o,(function(){t(e,n,r)}))):r()}(this,Y(t.codeSample),e)}}])&&q(n.prototype,r),i&&q(n,i),e}(m);function Y(t){return c.removeBlankFirstLine(t)}function B(t){return t.windowTitle||"~/demo/demo.js"}function U(t,e){return new L(t.length+1,e)}function K(t,e){t.addContent(e.element),t.lines.push(e)}n(15),n(16);var $=n(4),X=n.n($);function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var G=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(X.a)}var e,n,r;return e=t,(n=[{key:"setContent",value:function(t){this.element.append(t)}}])&&Z(e.prototype,n),r&&Z(e,r),t}(),J=n(5),Q=n.n(J);function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nt(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function it(t,e){return(it=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ot=function(t){function e(t){var n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=nt(this,rt(e).call(this))).cursor=new _,n.setContent(a.parseHtml(Q.a)),n.setPromptString(t),(r=n.element,r.querySelector("[data-terminal-command-line-text]")).appendChild(n.cursor.element),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&it(t,e)}(e,t),n=e,(r=[{key:"setPromptString",value:function(t){this.element.querySelector("[data-terminal-command-line-prompt-string]").appendChild(a.parseHtml(t))}},{key:"command",value:function(t,e){this.cursor.write(t,e)}},{key:"setActive",value:function(){this.cursor.setActive()}},{key:"setInactive",value:function(){this.cursor.setInactive()}}])&&et(n.prototype,r),i&&et(n,i),e}(G);n(17);var at=n(6),ut=n.n(at);function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function lt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function st(t,e){return!e||"object"!==ct(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var mt=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=st(this,ft(e).call(this))).setContent(a.parseHtml(ut.a)),t}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,t),n=e,(r=[{key:"setText",value:function(t){var e,n,r=this.element.querySelector("[data-terminal-response-line-text]");return a.containsClosingHtmlTag(t)?(e=r,n=a.parseHtml(t),dt(e,"terminal-response-line-html-text"),void e.appendChild(n)):function(t,e){dt(t,"terminal-response-line-plain-text"),t.innerText=e}(r,t)}}])&&lt(n.prototype,r),i&&lt(n,i),e}(G);function dt(t,e){t.classList.add(e)}function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bt(t,e){return!e||"object"!==vt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function wt(t,e){return(wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Ot=function(t){function e(t){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return yt(this,e),(n=bt(this,gt(e).call(this,"terminal",r))).container=t,n.container.appendChild(n.element),n.setCommandLines([]),n.configOptions(r),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wt(t,e)}(e,t),n=e,(r=[{key:"configOptions",value:function(t){this.setWindowTitle(function(t){return t.windowTitle||"bash"}(t)),this.setPromptString(function(t){return t.promptString||"~/demo $"}(t))}},{key:"setCommandLines",value:function(t){this.commandLines=t}},{key:"setPromptString",value:function(t){this.promptString=t}},{key:"command",value:function(t,e){var n,r=t.command,i=t.promptString;i&&this.setPromptString(i),(n=this.commandLines).length&&n[n.length-1].setInactive(),function(t,e,n){var r=new ot(t.promptString);t.commandLines.push(r),t.addContent(r.element),r.setActive(),r.command(e,n)}(this,r,e)}},{key:"respond",value:function(t,e){for(var n=t.response,r=c.removeBlankFirstLine(n),i=0;i<r.length;i++)this.addContent(xt(r[i]));e()}}])&&ht(n.prototype,r),i&&ht(n,i),e}(m);function xt(t){var e=new mt;return e.setText(t),e.element}var St=n(7),jt=n.n(St);function Ct(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var kt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(jt.a),this.container=e,this.openApplications=[],this.container.appendChild(this.element)}var e,n,r;return e=t,(n=[{key:"openApplication",value:function(t,e){var n=function(t,e){return t.find((function(t){return t.type===e}))}(this.openApplications,t);return n||function(t,e,n){var r=new("editor"==e?W:Ot)(t.element,n);return t.openApplications.push(r),t.element.appendChild(r.element),r}(this,t,e)}},{key:"minimizeAllApplications",value:function(t){this.openApplications.forEach((function(t){return t.minimize()})),t&&setTimeout(t,750)}},{key:"maximizeApplication",value:function(t,e){t.maximize(),t.inanimate?e():setTimeout(e,750)}}])&&Ct(e.prototype,n),r&&Ct(e,r),t}();function Pt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Tt=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.steps=n,this.desktop=new kt(e),this.setCurrentStepNumber(0)}var e,n,r;return e=t,(n=[{key:"play",value:function(){var t=this,e=this.desktop,n=this.steps;return new Promise((function(r){return function t(e,n,r,i){var o=e.getCurrentStepNumber();if(o<r.length){var a=r[o];!function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;_t(t,e.app,e.options,(function(t){e.action?t[e.action](e.params,(function(){setTimeout(n,r)})):setTimeout(n,r)}))}(n,a,(function(){e.setCurrentStepNumber(o+1),t(e,n,r,i)}),a.onCompleteDelay)}else i()}(t,e,n,r)}))}},{key:"getCurrentStepNumber",value:function(){return this.currentStepNumber}},{key:"setCurrentStepNumber",value:function(t){this.currentStepNumber=t}}])&&Pt(e.prototype,n),r&&Pt(e,r),t}();function _t(t,e,n,r){var i=t.openApplication(e,n),o=function(){return r(i)};i.isMaximized?r(i):i.inanimate?(t.minimizeAllApplications(),t.maximizeApplication(i,o)):t.minimizeAllApplications((function(){t.maximizeApplication(i,o)}))}function Et(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var At=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(e),this.steps=[]}var e,n,r;return e=t,(n=[{key:"openApp",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:t,options:e,onCompleteDelay:e.onCompleteDelay}),this}},{key:"write",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"editor",action:"write",params:{codeSample:t},onCompleteDelay:e.onCompleteDelay}),this}},{key:"command",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"terminal",action:"command",params:{command:t,promptString:e.promptString},onCompleteDelay:e.onCompleteDelay}),this}},{key:"respond",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"terminal",action:"respond",params:{response:t},onCompleteDelay:e.onCompleteDelay}),this}},{key:"end",value:function(){var t=this;return new Promise((function(e){!function(t,e,n){var r=i.a.subscribe(t,(function(){var o=new Tt(t,e);i.a.unsubscribe(r),o.play().then(n)}))}(t.container,t.steps,e)}))}}])&&Et(e.prototype,n),r&&Et(e,r),t}()}]).default},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,a(a({ref:e},s),{},{components:n})):r.createElement(d,a({ref:e},s))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47215:function(t,e,n){"use strict";n.r(e)}}]);