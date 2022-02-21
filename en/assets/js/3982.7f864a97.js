"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3982],{78665:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(63366),o=n(67294),i=n(86010),a=n(63346),c=n(39960),u="sidebar_a9qW",l="sidebarItemTitle_uKok",s="sidebarItemList_Kvuv",f="sidebarItem_CF0Q",m="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",p=n(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:o.createElement("nav",{className:(0,i.Z)(u,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},o.createElement("div",{className:(0,i.Z)(l,"margin-bottom--md")},t.title),o.createElement("ul",{className:s},t.items.map((function(e){return o.createElement("li",{key:e.permalink,className:f},o.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:d},e.title))}))))}var y=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,n=e.toc,c=e.children,u=(0,r.Z)(e,y),l=t&&t.items.length>0;return o.createElement(a.Z,u,o.createElement("div",{className:"container margin-vert--lg"},o.createElement("div",{className:"row"},l&&o.createElement("aside",{className:"col col--3"},o.createElement(h,{sidebar:t})),o.createElement("main",{className:(0,i.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&o.createElement("div",{className:"col col--2"},n))))}},38561:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(67294),o=n(86010),i=n(3905),a=n(95999),c=n(39960),u=n(44996),l=n(29548),s=n(18780),f=n(54689),m=n(86753),d="blogPostTitle_rzP5",p="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j",y=n(20062),g="image_o0gy";var b=function(e){var t=e.author,n=t.name,o=t.title,i=t.url,a=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},a&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:i},r.createElement("img",{className:g,src:a,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(c.Z,{href:i,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))},v="authorCol_FlmR",E="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function w(e){var t=e.authors,n=e.assets;if(0===t.length)return null;var i=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,o.Z)("margin-top--md margin-bottom--sm",i?E:"row")},t.map((function(e,t){var a;return r.createElement("div",{className:(0,o.Z)(!i&&"col col--6",i?_:v),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=n.authorsImageUrls[t])?a:e.imageURL})}))})))}var O=function(e){var t,n,g,b=(g=(0,l.c2)().selectMessage,function(e){var t=Math.ceil(e);return g(t,(0,a.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,u.C)().withBaseUrl,E=e.children,_=e.frontMatter,O=e.assets,S=e.metadata,I=e.truncated,C=e.isBlogPostPage,D=void 0!==C&&C,T=S.date,N=S.formattedDate,M=S.permalink,P=S.tags,R=S.readingTime,j=S.title,k=S.editUrl,A=S.authors,U=null!=(t=O.image)?t:_.image,q=!D&&I,Z=P.length>0,B=D?"h1":"h2";return r.createElement("article",{className:D?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(B,{className:d,itemProp:"headline"},D?j:r.createElement(c.Z,{itemProp:"url",to:M},j)),r.createElement("div",{className:(0,o.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},N),void 0!==R&&r.createElement(r.Fragment,null," \xb7 ",b(R))),r.createElement(w,{authors:A,assets:O})),U&&r.createElement("meta",{itemProp:"image",content:v(U,{absolute:!0})}),r.createElement("div",{id:D?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(i.Zo,{components:f.Z},E)),(Z||I)&&r.createElement("footer",{className:(0,o.Z)("row docusaurus-mt-lg",(n={},n[h]=D,n))},Z&&r.createElement("div",{className:(0,o.Z)("col",{"col--9":q})},r.createElement(y.Z,{tags:P})),D&&k&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:k})),q&&r.createElement("div",{className:(0,o.Z)("col text--right",{"col--3":Z})},r.createElement(c.Z,{to:S.permalink,"aria-label":"Read more about "+j},r.createElement("b",null,r.createElement(a.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),o=n(95999),i=n(87462),a=n(63366),c=n(86010),u="iconEdit_dcUD",l=["className"];var s=function(e){var t=e.className,n=(0,a.Z)(e,l);return r.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(u,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},f=n(29548);function m(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:f.kM.common.editThisPage},r.createElement(s,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),o=n(86010),i=n(39960),a="tag_hD8n",c="tagRegular_D6E_",u="tagWithCount_i0QQ";var l=function(e){var t,n=e.permalink,l=e.name,s=e.count;return r.createElement(i.Z,{href:n,className:(0,o.Z)(a,(t={},t[c]=!s,t[u]=s,t))},l,s&&r.createElement("span",null,s))}},20062:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),o=n(86010),i=n(95999),a=n(7774),c="tags_XVD_",u="tag_JSN8";function l(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,o.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:u},r.createElement(a.Z,{name:t,permalink:n}))}))))}},12449:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),a=n(63865);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,c=p(u);function u(){return f(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(a.COMMENT_COUNT_SCRIPT_ID)?g():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),a.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,i=s(e,["shortname","config","children","className"]),c=o?" ".concat(o):"";return r.default.createElement("span",l({},i,{className:"".concat(a.COMMENT_COUNT_CLASS).concat(c),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}])&&m(t.prototype,n),o&&m(t,o),u}(r.default.Component);t.CommentCount=b,b.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},75890:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n(67294)),o=a(n(45697)),i=n(63865);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,i=d(a);function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,l(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",u({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}])&&f(t.prototype,n),o&&f(t,o),a}(r.default.Component);t.CommentEmbed=y,y.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},y.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},64811:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),a=n(63865);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,c=p(u);function u(){return f(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(a.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),a.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(a.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById(a.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),a.CALLBACKS.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:a.THREAD_ID}))}}])&&m(t.prototype,n),o&&m(t,o),u}(r.default.Component);t.DiscussionEmbed=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},64573:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),a=n(63865);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,o,c=p(u);function u(){return f(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(a.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),a.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(a.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(t){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(a.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,s(e,["shortname","config"]));return r.default.createElement("div",l({},t,{id:a.RECOMMENDATIONS_ID}))}}])&&m(t.prototype,n),o&&m(t,o),u}(r.default.Component);t.Recommendations=g,g.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},63865:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0;t.THREAD_ID="disqus_thread";t.EMBED_SCRIPT_ID="dsq-embed-scr";t.COMMENT_COUNT_CLASS="disqus-comment-count";t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr";t.COMMENT_EMBED_WIDTH=420;t.COMMENT_EMBED_HEIGHT=320;t.RECOMMENDATIONS_ID="disqus_recommendations";t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr";t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},53944:function(e,t,n){Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(12449),o=n(75890),i=n(64811),a=n(64573);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,a.Recommendations},86674:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((function(e){return e.remove()}))},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===i(t[u])){if(e(t[u],n[u]))return!0}else if(t[u]!==n[u]&&!c(t[u]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=n(67294))&&r.__esModule?r:{default:r};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}}}]);