(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[82],{2210:t=>{window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([function(t,e,n){window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){"use strict";var i,r,o,a=n(3),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function s(t){if(t){if(t!==i){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));i=t,c()}}else i!==u&&(i=u,c())}function l(){return o||(o=function(){i||s(u);for(var t,e=i.split(""),n=[],r=a.nextValue();e.length>0;)r=a.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return i||u},characters:function(t){return s(t),i},seed:function(t){a.seed(t),r!==t&&(c(),r=t)},lookup:function(t){return l()[t]},shuffled:l}},function(t,e,n){"use strict";t.exports=n(2)},function(t,e,n){"use strict";var i=n(0),r=n(4),o=n(8),a=n(9)||0;function u(){return r(a)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return i.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&i.characters(t),i.shuffled()},t.exports.isValid=o},function(t,e,n){"use strict";var i=1;t.exports={nextValue:function(){return(i=(9301*i+49297)%233280)/233280},seed:function(t){i=t}}},function(t,e,n){"use strict";var i,r,o=n(5),a=(n(0),1567752802062);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===r?i++:(i=0,r=n),e+=o(7),e+=o(t),i>0&&(e+=o(i)),e+o(n)}},function(t,e,n){"use strict";var i=n(0),r=n(6),o=n(7);t.exports=function(t){for(var e,n=0,a="";!e;)a+=o(r,i.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){"use strict";var i,r="object"==typeof window&&(window.crypto||window.msCrypto);i=r&&r.getRandomValues?function(t){return r.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=i},function(t,e){t.exports=function(t,e,n){for(var i=(2<<Math.log(e.length-1)/Math.LN2)-1,r=Math.ceil(1.6*i*n/e.length),o="";;)for(var a=r,u=t(a);a--;)if((o+=e[u[a]&i]||"").length===+n)return o}},function(t,e,n){"use strict";var i=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+i.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),o={init:function(){r.a.characters("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$_")},generate:function(){return r.a.generate()}};o.init();var a=o,u={onScroll:function(t){window.addEventListener("scroll",t)},isElementAbovePageFold:function(t){return t.offsetTop-(u.getInnerHeight()+u.getPageYOffset())<0},getInnerHeight:function(){return window.innerHeight},getPageYOffset:function(){return window.pageYOffset}},c=u,s={},l=[];function f(){l.forEach((function(t){return p(t.element,t.onShowUp)}))}function p(t,e){c.isElementAbovePageFold(t)&&e()}s.init=function(){c.onScroll(f)},s.subscribe=function(t,e){return setTimeout((function(){return p(t,e)})),function(t,e){var n=a.generate();return l.push({id:n,element:t,onShowUp:e}),n}(t,e)},s.unsubscribe=function(t){var e;l.splice((e=t,l.find((function(t){return t.id===e}))),1)},s.init(),e.default=s}]).default},function(t,e){t.exports='<div class="application" data-application>\n  <div class="application-topbar">\n    <div class="application-actions-container">\n      <div class="application-action application-action-close"></div>\n      <div class="application-action application-action-minimize"></div>\n      <div class="application-action application-action-maximize"></div>\n    </div>\n    <div class="application-title-container" data-title-container></div>\n  </div>\n  <div class="application-content-container" data-content-container></div>\n</div>\n'},function(t,e){t.exports='<span class="cursor"></span>\n'},function(t,e){t.exports='<div class="editor-line">\n  <div class="editor-line-number" data-editor-line-number></div>\n  <pre class="editor-line-text" data-editor-line-text></pre>\n</div>\n'},function(t,e){t.exports='<div class="terminal-line"></div>\n'},function(t,e){t.exports='<div>\n  <div\n    class="terminal-command-line-prompt-string"\n    data-terminal-command-line-prompt-string>\n  </div>\n  <div\n    class="terminal-command-line-text"\n    data-terminal-command-line-text>\n  </div>\n</div>\n'},function(t,e){t.exports='<div class="terminal-response-line-text" data-terminal-response-line-text></div>\n'},function(t,e){t.exports='<div class="desktop"></div>\n'},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return At})),n(8),n(9);var i=n(0),r=n.n(i),o=(n(10),n(11),n(12),{parseHtml:function(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("body").firstChild},wrapHtmlStringInHtmlTag:function(t,e){return"<".concat(e,">").concat(t,"</").concat(e,">")},clearNodeContent:function(t){return t.innerHTML="",t},containsClosingHtmlTag:function(t){return new RegExp("</.+>","gm").test(t)},isHtmlNodeTypeText:function(t){return t&&"#text"==t.nodeName.toLowerCase()}}),a=o,u={toKebabCase:function(t){return t.toLowerCase().replace(" ","-")},isEmptyString:function(t){return""===t.trim()},removeBlankFirstLine:function(t){var e=t.split("\n");return""===e[0].trim()&&e.splice(0,1),e}},c=u,s=n(1),l=n.n(s);function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(this,t),this.type=e,this.options=n,this.element=d(e),this.setOptions(this.options)}var e,n,i;return e=t,(n=[{key:"setOptions",value:function(t){t.minHeight&&this.setMinHeight(t.minHeight),t.windowTitle&&this.setWindowTitle(t.windowTitle),this.configAnimation(t.inanimate)}},{key:"setMinHeight",value:function(t){var e=v(this.element),n=parseInt(t)-26;e.style.minHeight="".concat(n,"px")}},{key:"setWindowTitle",value:function(t){this.element.querySelector("[data-title-container]").innerText=t,this.windowTitle=t}},{key:"configAnimation",value:function(t){this.setInanimate(t),t&&y(this.element).classList.add("application-inanimate")}},{key:"addContent",value:function(t){v(this.element).appendChild(t)}},{key:"setInanimate",value:function(t){this.inanimate=t}},{key:"minimize",value:function(){this.setMaximized(!1),h(this.element,"remove","application-maximized"),h(this.element,"add","application-minimized")}},{key:"maximize",value:function(){this.setMaximized(!0),h(this.element,"remove","application-minimized"),h(this.element,"add","application-maximized")}},{key:"setMaximized",value:function(t){this.isMaximized=t}}])&&p(e.prototype,n),i&&p(e,i),t}();function d(t){var e=function(t){var e=document.createElement("div"),n="".concat(c.toKebabCase(t),"-application");return e.setAttribute("class",n),e}(t);return e.appendChild(a.parseHtml(l.a)),e}function v(t){return t.querySelector("[data-content-container]")}function h(t,e,n){y(t).classList[e](n)}function y(t){return t.querySelector("[data-application]")}n(13),n(14);var b={type:function(t,e,n){var i=e.split(""),r=i.shift();r?function(t,e,n,i){t.append(e),setTimeout((function(){b.type(t,n.join(""),i)}),75)}(t,r,i,n):n()}},g=b,w={};function x(t,e,n){g.type(e,t,n)}w.type=function(t,e,n){!function t(e,n,i){if(!n.length)return i();!function(t,e,n){a.isHtmlNodeTypeText(e)?x(e.textContent,t,n):x(e.textContent,function(t,e){var n=a.clearNodeContent(e);return t.appendChild(n),n}(t,e),n)}(e,n.shift(),(function(){t(e,n,i)}))}(t,function(t){var e=a.wrapHtmlStringInHtmlTag(t,"span"),n=a.parseHtml(e);return Array.from(n.childNodes)}(e),n)};var S=w,O={};function C(t,e,n){t.classList[e](n)}O.type=function(t,e,n){C(t,"add","is-typing"),function(t){return a.containsClosingHtmlTag(t)?S:g}(e).type(t,e,(function(){C(t,"remove","is-typing"),n()}))};var k=O,j=n(2),T=n.n(j);function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var _=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(T.a)}var e,n,i;return e=t,(n=[{key:"write",value:function(t,e){k.type(this.element,t,e)}},{key:"setActive",value:function(){E(this.element,"add","cursor-active")}},{key:"setInactive",value:function(){E(this.element,"remove","cursor-active")}}])&&P(e.prototype,n),i&&P(e,i),t}();function E(t,e,n){t.classList[e](n)}var A=n(3),H=n.n(A);function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(e,n){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cursor=new _,this.element=a.parseHtml(H.a),i=e,(function(t){return I(t,"[data-editor-line-number]")}(this.element)).innerText=i,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";z(t).innerHTML=e}(this.element,n),n||z(this.element).appendChild(this.cursor.element)}var e,n,i;return e=t,(n=[{key:"write",value:function(t,e){this.cursor.write(t,e)}},{key:"setActive",value:function(){this.cursor.setActive()}},{key:"setInactive",value:function(){this.cursor.setInactive()}}])&&M(e.prototype,n),i&&M(e,i),t}();function z(t){return I(t,"[data-editor-line-text]")}function I(t,e){return t.querySelector(e)}function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function R(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var W=function(t){function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return q(this,e),(n=R(this,F(e).call(this,"editor",i))).container=t,n.container.appendChild(n.element),n.setupInitialContent(i.initialContent),n.setWindowTitle(B(i)),n}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),n=e,(i=[{key:"setupInitialContent",value:function(){var t=Y(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"");this.setLines([]),this.appendLines(t)}},{key:"setLines",value:function(t){this.lines=[]}},{key:"appendLines",value:function(t){var e=this;t.forEach((function(t){var n=U(e.lines,t);K(e,n)}))}},{key:"write",value:function(t,e){!function t(e,n,i){var r,o=n.shift();void 0!==o?((r=e.lines).length&&r[r.length-1].setInactive(),function(t,e,n){var i=U(t.lines);K(t,i),i.setActive(),i.write(e,n)}(e,o,(function(){t(e,n,i)}))):i()}(this,Y(t.codeSample),e)}}])&&D(n.prototype,i),r&&D(n,r),e}(m);function Y(t){return c.removeBlankFirstLine(t)}function B(t){return t.windowTitle||"~/demo/demo.js"}function U(t,e){return new L(t.length+1,e)}function K(t,e){t.addContent(e.element),t.lines.push(e)}n(15),n(16);var $=n(4),G=n.n($);function J(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(G.a)}var e,n,i;return e=t,(n=[{key:"setContent",value:function(t){this.element.append(t)}}])&&J(e.prototype,n),i&&J(e,i),t}(),X=n(5),Z=n.n(X);function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function nt(t,e){return!e||"object"!==tt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function rt(t,e){return(rt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ot=function(t){function e(t){var n,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=nt(this,it(e).call(this))).cursor=new _,n.setContent(a.parseHtml(Z.a)),n.setPromptString(t),(i=n.element,i.querySelector("[data-terminal-command-line-text]")).appendChild(n.cursor.element),n}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rt(t,e)}(e,t),n=e,(i=[{key:"setPromptString",value:function(t){this.element.querySelector("[data-terminal-command-line-prompt-string]").appendChild(a.parseHtml(t))}},{key:"command",value:function(t,e){this.cursor.write(t,e)}},{key:"setActive",value:function(){this.cursor.setActive()}},{key:"setInactive",value:function(){this.cursor.setInactive()}}])&&et(n.prototype,i),r&&et(n,r),e}(Q);n(17);var at=n(6),ut=n.n(at);function ct(t){return(ct="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function st(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function lt(t,e){return!e||"object"!==ct(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var mt=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=lt(this,ft(e).call(this))).setContent(a.parseHtml(ut.a)),t}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,t),n=e,(i=[{key:"setText",value:function(t){var e,n,i=this.element.querySelector("[data-terminal-response-line-text]");return a.containsClosingHtmlTag(t)?(e=i,n=a.parseHtml(t),dt(e,"terminal-response-line-html-text"),void e.appendChild(n)):function(t,e){dt(t,"terminal-response-line-plain-text"),t.innerText=e}(i,t)}}])&&st(n.prototype,i),r&&st(n,r),e}(Q);function dt(t,e){t.classList.add(e)}function vt(t){return(vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ht(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function bt(t,e){return!e||"object"!==vt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function wt(t,e){return(wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var xt=function(t){function e(t){var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ht(this,e),(n=bt(this,gt(e).call(this,"terminal",i))).container=t,n.container.appendChild(n.element),n.setCommandLines([]),n.configOptions(i),n}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&wt(t,e)}(e,t),n=e,(i=[{key:"configOptions",value:function(t){this.setWindowTitle(function(t){return t.windowTitle||"bash"}(t)),this.setPromptString(function(t){return t.promptString||"~/demo $"}(t))}},{key:"setCommandLines",value:function(t){this.commandLines=t}},{key:"setPromptString",value:function(t){this.promptString=t}},{key:"command",value:function(t,e){var n,i=t.command,r=t.promptString;r&&this.setPromptString(r),(n=this.commandLines).length&&n[n.length-1].setInactive(),function(t,e,n){var i=new ot(t.promptString);t.commandLines.push(i),t.addContent(i.element),i.setActive(),i.command(e,n)}(this,i,e)}},{key:"respond",value:function(t,e){for(var n=t.response,i=c.removeBlankFirstLine(n),r=0;r<i.length;r++)this.addContent(St(i[r]));e()}}])&&yt(n.prototype,i),r&&yt(n,r),e}(m);function St(t){var e=new mt;return e.setText(t),e.element}var Ot=n(7),Ct=n.n(Ot);function kt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var jt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=a.parseHtml(Ct.a),this.container=e,this.openApplications=[],this.container.appendChild(this.element)}var e,n,i;return e=t,(n=[{key:"openApplication",value:function(t,e){var n=function(t,e){return t.find((function(t){return t.type===e}))}(this.openApplications,t);return n||function(t,e,n){var i=new("editor"==e?W:xt)(t.element,n);return t.openApplications.push(i),t.element.appendChild(i.element),i}(this,t,e)}},{key:"minimizeAllApplications",value:function(t){this.openApplications.forEach((function(t){return t.minimize()})),t&&setTimeout(t,750)}},{key:"maximizeApplication",value:function(t,e){t.maximize(),t.inanimate?e():setTimeout(e,750)}}])&&kt(e.prototype,n),i&&kt(e,i),t}();function Tt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Pt=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.steps=n,this.desktop=new jt(e),this.setCurrentStepNumber(0)}var e,n,i;return e=t,(n=[{key:"play",value:function(){var t=this,e=this.desktop,n=this.steps;return new Promise((function(i){return function t(e,n,i,r){var o=e.getCurrentStepNumber();if(o<i.length){var a=i[o];!function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;_t(t,e.app,e.options,(function(t){e.action?t[e.action](e.params,(function(){setTimeout(n,i)})):setTimeout(n,i)}))}(n,a,(function(){e.setCurrentStepNumber(o+1),t(e,n,i,r)}),a.onCompleteDelay)}else r()}(t,e,n,i)}))}},{key:"getCurrentStepNumber",value:function(){return this.currentStepNumber}},{key:"setCurrentStepNumber",value:function(t){this.currentStepNumber=t}}])&&Tt(e.prototype,n),i&&Tt(e,i),t}();function _t(t,e,n,i){var r=t.openApplication(e,n),o=function(){return i(r)};r.isMaximized?i(r):r.inanimate?(t.minimizeAllApplications(),t.maximizeApplication(r,o)):t.minimizeAllApplications((function(){t.maximizeApplication(r,o)}))}function Et(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var At=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(e),this.steps=[]}var e,n,i;return e=t,(n=[{key:"openApp",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:t,options:e,onCompleteDelay:e.onCompleteDelay}),this}},{key:"write",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"editor",action:"write",params:{codeSample:t},onCompleteDelay:e.onCompleteDelay}),this}},{key:"command",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"terminal",action:"command",params:{command:t,promptString:e.promptString},onCompleteDelay:e.onCompleteDelay}),this}},{key:"respond",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.steps.push({app:"terminal",action:"respond",params:{response:t},onCompleteDelay:e.onCompleteDelay}),this}},{key:"end",value:function(){var t=this;return new Promise((function(e){!function(t,e,n){var i=r.a.subscribe(t,(function(){var o=new Pt(t,e);r.a.unsubscribe(i),o.play().then(n)}))}(t.container,t.steps,e)}))}}])&&Et(e.prototype,n),i&&Et(e,i),t}()}]).default},7215:(t,e,n)=>{"use strict";n.r(e)}}]);