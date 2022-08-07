"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[87],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(t),m=n,v=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return t?a.createElement(v,l(l({ref:r},s),{},{components:t})):a.createElement(v,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46541:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const o={title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",slug:"2021/02/13/aurora-cluster-failover",date:new Date("2021-02-13T17:19:00.000Z"),category:["aurora"],tags:["aws","aurora","failover"]},l=void 0,i={permalink:"/en/2021/02/13/aurora-cluster-failover",source:"@site/blog/aurora-cluster-failover.md",title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",description:"\ucd5c\uadfc \ud68c\uc0ac\uc5d0\uc11c \uc624\ub85c\ub77c\ub514\ube44\ub97c \uc2a4\ucf00\uc77c \uc5c5\ud558\uae30 \uc704\ud574\uc11c failover \ud14c\uc2a4\ud2b8\ub97c \ud558\ub2e4\uac00 \uc788\uc5c8\ub358 \uc774\uc288\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4.",date:"2021-02-13T17:19:00.000Z",formattedDate:"February 13, 2021",tags:[{label:"aws",permalink:"/en/tags/aws"},{label:"aurora",permalink:"/en/tags/aurora"},{label:"failover",permalink:"/en/tags/failover"}],readingTime:6.07,hasTruncateMarker:!0,authors:[],frontMatter:{title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",slug:"2021/02/13/aurora-cluster-failover",date:"2021-02-13T17:19:00.000Z",category:["aurora"],tags:["aws","aurora","failover"]},prevItem:{title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",permalink:"/en/2021/05/23/amazone-linux-log-issue"},nextItem:{title:"2020\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/en/2020/12/27/2020-develop-retrospection"}},u={authorsImageUrls:[]},c=[],s={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ucd5c\uadfc \ud68c\uc0ac\uc5d0\uc11c \uc624\ub85c\ub77c\ub514\ube44\ub97c \uc2a4\ucf00\uc77c \uc5c5\ud558\uae30 \uc704\ud574\uc11c failover \ud14c\uc2a4\ud2b8\ub97c \ud558\ub2e4\uac00 \uc788\uc5c8\ub358 \uc774\uc288\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4."))}p.isMDXComponent=!0}}]);