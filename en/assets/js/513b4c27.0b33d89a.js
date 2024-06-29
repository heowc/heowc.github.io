"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[7904],{89381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=t(74848),r=t(28453);const i={title:"Network JSON Filter \uc18c\uac1c (Chrome Extension)",slug:"2020/10/21/introduction-network-json-filter-as-chrome-extension",date:new Date("2020-10-21T19:00:00.000Z"),category:["chrome-extension"],tags:["chrome-extension","json","network-tool"]},s=void 0,l={permalink:"/en/2020/10/21/introduction-network-json-filter-as-chrome-extension",source:"@site/blog/introduction-network-json-filter-as-chrome-extension.md",title:"Network JSON Filter \uc18c\uac1c (Chrome Extension)",description:"\uc18c\uac1c",date:"2020-10-21T19:00:00.000Z",tags:[{inline:!0,label:"chrome-extension",permalink:"/en/tags/chrome-extension"},{inline:!0,label:"json",permalink:"/en/tags/json"},{inline:!0,label:"network-tool",permalink:"/en/tags/network-tool"}],readingTime:.865,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Network JSON Filter \uc18c\uac1c (Chrome Extension)",slug:"2020/10/21/introduction-network-json-filter-as-chrome-extension",date:"2020-10-21T19:00:00.000Z",category:["chrome-extension"],tags:["chrome-extension","json","network-tool"]},unlisted:!1,prevItem:{title:"2020\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/en/2020/12/27/2020-develop-retrospection"},nextItem:{title:"Spring - @Autowired\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294 \uac78\uae4c?",permalink:"/en/2020/07/04/how-does-autowired-work"}},c={authorsImageUrls:[]},h=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:3},{value:"\uc124\uce58",id:"\uc124\uce58",level:3},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3},{value:"\ucd94\uac00\ub420 \uae30\ub2a5 \ub9ac\uc2a4\ud2b8",id:"\ucd94\uac00\ub420-\uae30\ub2a5-\ub9ac\uc2a4\ud2b8",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"network-json-filter"}),"\ub294 \uc8fc\uace0\ubc1b\ub294 \ub124\ud2b8\uc6cc\ud06c JSON \uc751\ub2f5\uc744 \ud544\ud130\ub9c1\ud558\uc5ec \ubcf4\uace0\uc790 \uac1c\ubc1c\ud55c \ud06c\ub86c \uc775\uc2a4\ud150\uc158\uc73c\ub85c, \ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"JSON \uc751\ub2f5\uc774 \uae34 \uacbd\uc6b0, \ud2b9\uc815 depth\ub9cc \ubcf4\uace0\uc2f6\uc744 \ub54c"}),"\n",(0,o.jsx)(n.li,{children:"\ud2b9\uc815 URL\uc5d0 \ub300\ud55c JSON \uc751\ub2f5\ub9cc \ubcf4\uace0\uc2f6\uc740 \uacbd\uc6b0"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\uc124\uce58",children:"\uc124\uce58"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/network-json-filter/flcfiogpdlddkjiekpeiedkeoihppekm",children:"chrome \uc6f9 \uc2a4\ud1a0\uc5b4 - network-json-filter"})}),"\n",(0,o.jsx)(n.h3,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"https://github.com/heowc/network-json-filter-chrome-extension/blob/main/docs/screenshot.png?raw=true",alt:"img screenshot"}),"\n\u203b \ud574\ub2f9 \uc2a4\ud06c\ub9b0\uc0f7\uc740 ",(0,o.jsx)(n.code,{children:"https://httpbin.org"}),"\ub97c \ud65c\uc6a9\ud55c \uc608\uc2dc"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"url: \ub2e8\uc21c\ud788 url\uc5d0 \ud574\ub2f9 \ubb38\uc790\uc5f4 \ud3ec\ud568\uc5ec\ubd80 \uccb4\ud06c"}),"\n",(0,o.jsxs)(n.li,{children:["expression: JSON Path \ud45c\ud604\uc2dd\uc744 \ud65c\uc6a9\ud55c \uc751\ub2f5 \ubcc0\ud658 (",(0,o.jsx)(n.a,{href:"https://github.com/dchester/jsonpath",children:"\ucc38\uace0"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["\uc751\ub2f5 \uc811\uae30/\ud3bc\uae30 (",(0,o.jsx)(n.code,{children:"\u25b6/\u25bc"}),")"]}),"\n",(0,o.jsx)(n.li,{children:"\uc751\ub2f5 \ub0b4\uc5ed\uc744 \uc0ad\uc81c"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\ucd94\uac00\ub420-\uae30\ub2a5-\ub9ac\uc2a4\ud2b8",children:"\ucd94\uac00\ub420 \uae30\ub2a5 \ub9ac\uc2a4\ud2b8"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/heowc/network-json-filter-chrome-extension/issues",children:"https://github.com/heowc/network-json-filter-chrome-extension/issues"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);