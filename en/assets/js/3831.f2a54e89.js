"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3831],{39058:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),o=n(86010),a=n(81566),i=n(87524),l=n(39960),c=n(95999);const u="sidebar_re4s",s="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",m="sidebarItem__DBe",d="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function h(e){let{sidebar:t}=e;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,o.Z)(u,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,o.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,o.Z)(f,"clean-list")},t.items.map((e=>r.createElement("li",{key:e.permalink,className:m},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title)))))))}var y=n(13102);function g(e){let{sidebar:t}=e;return r.createElement("ul",{className:"menu__list"},t.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return r.createElement(y.Zo,{component:g,props:e})}function v(e){let{sidebar:t}=e;const n=(0,i.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(b,{sidebar:t}):r.createElement(h,{sidebar:t}):null}function E(e){const{sidebar:t,toc:n,children:i,...l}=e,c=t&&t.items.length>0;return r.createElement(a.Z,l,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(v,{sidebar:t}),r.createElement("main",{className:(0,o.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),n&&r.createElement("div",{className:"col col--2"},n))))}},30390:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),o=n(86010),a=n(9460),i=n(44996);function l(e){var t;let{children:n,className:o}=e;const{frontMatter:l,assets:c}=(0,a.C)(),{withBaseUrl:u}=(0,i.C)(),s=null!=(t=c.image)?t:l.image;return r.createElement("article",{className:o,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"image",content:u(s,{absolute:!0})}),n)}var c=n(39960);const u="title_f1Hy";function s(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.C)(),{permalink:l,title:s}=n,f=i?"h1":"h2";return r.createElement(f,{className:(0,o.Z)(u,t),itemProp:"headline"},i?s:r.createElement(c.Z,{itemProp:"url",to:l},s))}var f=n(95999),m=n(88824);const d="container_mt6G";function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.c)();return t=>{const n=Math.ceil(t);return e(n,(0,f.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return r.createElement(r.Fragment,null,n(t))}function h(e){let{date:t,formattedDate:n}=e;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function y(){return r.createElement(r.Fragment,null," \xb7 ")}function g(e){let{className:t}=e;const{metadata:n}=(0,a.C)(),{date:i,formattedDate:l,readingTime:c}=n;return r.createElement("div",{className:(0,o.Z)(d,"margin-vert--md",t)},r.createElement(h,{date:i,formattedDate:l}),void 0!==c&&r.createElement(r.Fragment,null,r.createElement(y,null),r.createElement(p,{readingTime:c})))}function b(e){return e.href?r.createElement(c.Z,e):r.createElement(r.Fragment,null,e.children)}function v(e){let{author:t,className:n}=e;const{name:a,title:i,url:l,imageURL:c,email:u}=t,s=l||u&&"mailto:"+u||void 0;return r.createElement("div",{className:(0,o.Z)("avatar margin-bottom--sm",n)},c&&r.createElement(b,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const E="authorCol_Hf19",_="imageOnlyAuthorRow_pa_O",w="imageOnlyAuthorCol_G86a";function O(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.C)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t}));return r.createElement("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",l?_:"row",t)},n.map(((e,t)=>{var n;return r.createElement("div",{className:(0,o.Z)(!l&&"col col--6",l?w:E),key:t},r.createElement(v,{author:{...e,imageURL:null!=(n=i.authorsImageUrls[t])?n:e.imageURL}}))})))}function I(){return r.createElement("header",null,r.createElement(s,null),r.createElement(g,null),r.createElement(O,null))}var S=n(18780),C=n(80210);function P(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.C)();return r.createElement("div",{id:i?S.blogPostContainerID:void 0,className:(0,o.Z)("markdown",n),itemProp:"articleBody"},r.createElement(C.Z,null,t))}var D=n(84881),N=n(71526),M=n(87462);function T(){return r.createElement("b",null,r.createElement(f.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function R(e){const{blogPostTitle:t,...n}=e;return r.createElement(c.Z,(0,M.Z)({"aria-label":(0,f.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),r.createElement(T,null))}const j="blogPostFooterDetailsFull_mRVl";function k(){const{metadata:e,isBlogPostPage:t}=(0,a.C)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:c}=e,u=!t&&c,s=n.length>0;return s||u||l?r.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",t&&j)},s&&r.createElement("div",{className:(0,o.Z)("col",{"col--9":u})},r.createElement(N.Z,{tags:n})),t&&l&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(D.Z,{editUrl:l})),u&&r.createElement("div",{className:(0,o.Z)("col text--right",{"col--3":s})},r.createElement(R,{blogPostTitle:i,to:e.permalink}))):null}function A(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,a.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(l,{className:(0,o.Z)(i,n)},r.createElement(I,null),r.createElement(P,null,t),r.createElement(k,null))}},9460:(e,t,n)=>{n.d(t,{C:()=>l,n:()=>i});var r=n(67294),o=n(902);const a=r.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return r.createElement(a.Provider,{value:i},t)}function l(){const e=(0,r.useContext)(a);if(null===e)throw new o.i6("BlogPostProvider");return e}},88824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(67294),o=n(52263);const a=["zero","one","two","few","many","other"];function i(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),l}}),[e])}function u(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}(n,t,e)}}},12449:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=l(n(67294)),o=l(n(45697)),a=n(86674),i=n(63865);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(i.COMMENT_COUNT_SCRIPT_ID)?g():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),i.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,a=s(e,["shortname","config","children","className"]),l=o?" ".concat(o):"";return r.default.createElement("span",u({},a,{className:"".concat(i.COMMENT_COUNT_CLASS).concat(l),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},75890:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n(67294)),o=i(n(45697)),a=n(63865);function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,o,a=d(i);function i(){return s(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,u(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",c({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(t.prototype,n),o&&f(t,o),i}(r.default.Component);t.CommentEmbed=y,y.defaultProps={showMedia:!0,showParentComment:!0,width:a.COMMENT_EMBED_WIDTH,height:a.COMMENT_EMBED_HEIGHT},y.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},64811:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=l(n(67294)),o=l(n(45697)),a=n(86674),i=n(63865);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(i.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),i.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)(i.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(i.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,a.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),i.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",u({},t,{id:i.THREAD_ID}))}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.DiscussionEmbed=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},64573:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=l(n(67294)),o=l(n(45697)),a=n(86674),i=n(63865);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,l=p(c);function c(){return f(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(i.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),i.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,a.removeScript)(i.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(i.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,a.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",u({},t,{id:i.RECOMMENDATIONS_ID}))}}])&&m(t.prototype,n),o&&m(t,o),c}(r.default.Component);t.Recommendations=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},63865:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},53944:(e,t,n)=>{Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return a.DiscussionEmbed}});var r=n(12449),o=n(75890),a=n(64811),i=n(64573);r.CommentCount,o.CommentEmbed,a.DiscussionEmbed,i.Recommendations},86674:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},l=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),l&&e.apply(o,a)}},t.isReactElement=l,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var c=r.value;if("object"===a(t[c])){if(e(t[c],n[c]))return!0}else if(t[c]!==n[c]&&!l(t[c]))return!0}}catch(u){o.e(u)}finally{o.f()}return!1};var r,o=(r=n(67294))&&r.__esModule?r:{default:r};function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}}}]);