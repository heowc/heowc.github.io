"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[4461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,y=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},95253:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",slug:"2019/02/09/using-mysql-jdbc-to-handle-large-table-1",date:new Date("2019-02-09T23:30:00.000Z"),category:["mysql"],tags:["mysql","jdbc","batch-processing"]},l=void 0,c={permalink:"/2019/02/09/using-mysql-jdbc-to-handle-large-table-1",source:"@site/blog/using-mysql-jdbc-to-handle-large-table-1.md",title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc77d\uc5b4\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?",date:"2019-02-09T23:30:00.000Z",formattedDate:"2019\ub144 2\uc6d4 9\uc77c",tags:[{label:"mysql",permalink:"/tags/mysql"},{label:"jdbc",permalink:"/tags/jdbc"},{label:"batch-processing",permalink:"/tags/batch-processing"}],readingTime:7.395,hasTruncateMarker:!0,authors:[],frontMatter:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",slug:"2019/02/09/using-mysql-jdbc-to-handle-large-table-1",date:"2019-02-09T23:30:00.000Z",category:["mysql"],tags:["mysql","jdbc","batch-processing"]},prevItem:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2461",permalink:"/2019/02/12/using-mysql-jdbc-to-handle-large-table-2"},nextItem:{title:"GitHub Action\uc744 \ud65c\uc6a9\ud55c GitHub Page \ubc30\ud3ec",permalink:"/2019/02/03/deploy-gh-page-with-github-action"}},i={authorsImageUrls:[]},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc77d\uc5b4\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?")))}p.isMDXComponent=!0}}]);