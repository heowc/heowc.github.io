"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[4236],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return s}});var a=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(t),s=l,m=h["".concat(u,".").concat(s)]||h[s]||p[s]||n;return t?a.createElement(m,o(o({ref:r},d),{},{components:t})):a.createElement(m,o({ref:r},d))}));function s(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,o=new Array(n);o[0]=h;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<n;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},75720:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return s}});var a=t(87462),l=t(63366),n=(t(67294),t(3905)),o=["components"],i={title:"Thread Pool \uc774\ud574\ud558\uae30",slug:"2018/02/08/thread-pool",date:new Date("2018-02-08T21:57:49.000Z"),category:["thread-pool"],tags:["thread-pool"]},u=void 0,c={permalink:"/en/2018/02/08/thread-pool",source:"@site/blog/thread-pool.md",title:"Thread Pool \uc774\ud574\ud558\uae30",description:"Process: \uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \ud558\ub098\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158",date:"2018-02-08T21:57:49.000Z",formattedDate:"February 8, 2018",tags:[{label:"thread-pool",permalink:"/en/tags/thread-pool"}],readingTime:4.54,truncated:!0,authors:[],frontMatter:{title:"Thread Pool \uc774\ud574\ud558\uae30",slug:"2018/02/08/thread-pool",date:"2018-02-08T21:57:49.000Z",category:["thread-pool"],tags:["thread-pool"]},prevItem:{title:"Spring Boot - Async",permalink:"/en/2018/02/10/spring-boot-async"},nextItem:{title:"Spring Boot - AOP",permalink:"/en/2018/02/07/spring-boot-aop"}},d={authorsImageUrls:[]},p=[{value:"\ub3d9\uc2dc\uc131(Concurrency) \uc640 \ubcd1\ub82c\uc131(Parallelism)",id:"\ub3d9\uc2dc\uc131concurrency-\uc640-\ubcd1\ub82c\uc131parallelism",children:[{value:"\ub370\uc774\ud130 \ubcd1\ub82c\uc131",id:"\ub370\uc774\ud130-\ubcd1\ub82c\uc131",children:[],level:4},{value:"\uc791\uc5c5 \ubcd1\ub82c\uc131",id:"\uc791\uc5c5-\ubcd1\ub82c\uc131",children:[],level:4}],level:3},{value:"Thread Pool\uc740 \ubb34\uc5c7\uc778\uac00..?",id:"thread-pool\uc740-\ubb34\uc5c7\uc778\uac00",children:[{value:"Single Thread Pool",id:"single-thread-pool",children:[],level:4},{value:"Fixed Thread Pool",id:"fixed-thread-pool",children:[],level:4},{value:"Cached Thread Pool",id:"cached-thread-pool",children:[],level:4},{value:"Scheduler Thread Pool",id:"scheduler-thread-pool",children:[],level:4},{value:"Work Stealing Thread Pool",id:"work-stealing-thread-pool",children:[],level:4}],level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",children:[],level:3}],h={toc:p};function s(e){var r=e.components,t=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Process"),": \uc6b4\uc601\uccb4\uc81c\uc5d0\uc11c \ud558\ub098\uc758 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\n",(0,n.kt)("strong",{parentName:"p"},"Thread"),": Process\uc5d0\uc11c \ud558\ub098\uc758 \uc791\uc5c5")),(0,n.kt)("p",null,"\uc5ec\ub7ec Thread\ub97c \ub3d9\uc2dc\uc5d0 \ub9cc\ub4e4\uc5b4 \uc2e4\ud589(\ubcd1\ub82c\ucc98\ub9ac)\ud560 \uc218 \uc788\ub2e4. Java\uc5d0 \uacbd\uc6b0, ",(0,n.kt)("inlineCode",{parentName:"p"},"Thread"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Runnable"),"\ub97c \uc774\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,n.kt)("h3",{id:"\ub3d9\uc2dc\uc131concurrency-\uc640-\ubcd1\ub82c\uc131parallelism"},"\ub3d9\uc2dc\uc131(Concurrency) \uc640 \ubcd1\ub82c\uc131(Parallelism)"),(0,n.kt)("p",null,"\ub3d9\uc2dc\uc131\uc740 \uc2f1\uae00 \ucf54\uc5b4\uc5d0\uc11c \uba40\ud2f0 \uc2a4\ub808\ub4dc\ub97c \ub3d9\uc791\uc2dc\ud0a4\uae30 \uc704\ud55c \ubc29\uc2dd\uc73c\ub85c \uba40\ud2f0 \ud0dc\uc2a4\ud0b9\uc744 \uc704\ud574 \uc5ec\ub7ec \uac1c\uc758 \uc2a4\ub808\ub4dc\uac00 \ubc88\uac08\uc544\uac00\uba74\uc11c \uc2e4\ud589\ub418\ub294 \uc131\uc9c8\uc744 \ub9d0\ud55c\ub2e4. \ub3d9\uc2dc\uc131\uc744 \uc774\uc6a9\ud55c \uc2f1\uae00 \ucf54\uc5b4\uc758 \uba40\ud2f0 \ud0dc\uc2a4\ud0b9\uc740 \uac01 \uc2a4\ub808\ub4dc\ub4e4\uc774 \ubcd1\ub82c\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \uc0ac\uc2e4\uc740 \ubc88\uac08\uc544\uac00\uba74\uc11c \uc870\uae08\uc529 \uc2e4\ud589\ub418\uace0 \uc788\ub294 \uac83\uc774\ub2e4."),(0,n.kt)("p",null,"\ubcd1\ub82c\uc131\uc740 \uba40\ud2f0 \ucf54\uc5b4\uc5d0\uc11c \uba40\ud2f0 \uc2a4\ub808\ub4dc\ub97c \ub3d9\uc791\uc2dc\ud0a4\ub294 \ubc29\uc2dd\uc73c\ub85c, \ud55c \uac1c \uc774\uc0c1\uc758 \uc2a4\ub808\ub4dc\ub97c \ud3ec\ud568\ud558\ub294 \uac01 \ucf54\uc5b4\ub4e4\uc774 \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ub418\ub294 \uc131\uc9c8\uc744 \ub9d0\ud55c\ub2e4. \ubcd1\ub82c\uc131\uc740 \ub370\uc774\ud130 \ubcd1\ub82c\uc131(Data parallelism)\uacfc \uc791\uc5c5 \ubcd1\ub82c\uc131(Task parallelism)\uc73c\ub85c \uad6c\ubd84\ub41c\ub2e4."),(0,n.kt)("h4",{id:"\ub370\uc774\ud130-\ubcd1\ub82c\uc131"},"\ub370\uc774\ud130 \ubcd1\ub82c\uc131"),(0,n.kt)("p",null,"\ub370\uc774\ud130 \ubcd1\ub82c\uc131\uc740 \uc804\uccb4 \ub370\uc774\ud130\ub97c \ucabc\uac1c \uc11c\ube0c \ub370\uc774\ud130\ub4e4\ub85c \ub9cc\ub4e0 \ub4a4, \uc11c\ube0c \ub370\uc774\ud130\ub4e4\uc744 \ubcd1\ub82c \ucc98\ub9ac\ud558\uc5ec \uc791\uc5c5\uc744 \ube60\ub974\uac8c \uc218\ud589\ud558\ub294 \uac83\uc744 \ub9d0\ud55c\ub2e4. \uc790\ubc14 8\uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 \ubcd1\ub82c \uc2a4\ud2b8\ub9bc\uc774 \ub370\uc774\ud130 \ubcd1\ub82c\uc131\uc744 \uad6c\ud604\ud55c \uac83\uc774\ub2e4. \uc11c\ube0c \ub370\uc774\ud130\ub294 \uba40\ud2f0 \ucf54\uc5b4\uc758 \uc218\ub9cc\ud07c \ucabc\uac1c\uc5b4 \uac01\uac01\uc758 \ub370\uc774\ud130\ub4e4\uc744 \ubd84\ub9ac\ub41c \uc2a4\ub808\ub4dc\uc5d0\uc11c \ubcd1\ub82c \ucc98\ub9ac\ud55c\ub2e4."),(0,n.kt)("h4",{id:"\uc791\uc5c5-\ubcd1\ub82c\uc131"},"\uc791\uc5c5 \ubcd1\ub82c\uc131"),(0,n.kt)("p",null,"\uc791\uc5c5 \ubcd1\ub82c\uc131\uc740 \uc11c\ub85c \ub2e4\ub978 \uc791\uc5c5\uc744 \ubcd1\ub82c \ucc98\ub9ac\ud558\ub294 \uac83\uc744 \ub9d0\ud55c\ub2e4. \ub300\ud45c\uc801\uc778 \uc608\ub294 \uc6f9 \uc11c\ubc84\ub85c, \uac01\uac01\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc694\uccad\ud55c \ub0b4\uc6a9\uc744 \uac1c\ubcc4 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ubcd1\ub82c\ub85c \ucc98\ub9ac\ud55c\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u226a\uc2e0\uc6a9\uad8c - \u2018\uc774\uac83\uc774 \uc790\ubc14\ub2e4\u2019\u226b")),(0,n.kt)("h3",{id:"thread-pool\uc740-\ubb34\uc5c7\uc778\uac00"},"Thread Pool\uc740 \ubb34\uc5c7\uc778\uac00..?"),(0,n.kt)("p",null,"\uadf8\ub807\ub2e4\uace0 \ud574\uc11c Thread\ub97c \uacc4\uc18d \ub298\ub824\uac00\ub294 \uac74 \uc88b\uc740 \uac83 \uc77c\uae4c? \ub2f9\uc5f0\ud788 \uc544\ub2c8\ub2e4. \ud558\ub4dc\uc6e8\uc5b4\uc758 \uc81c\ud55c\uc801\uc778 \uc0ac\ud56d(CPU, Memory \ub4f1)\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \uad00\ub9ac\ud560 \ud544\uc694\uac00 \uc788\ub2e4. \uadf8\ub798\uc11c Thread Pool\uc774\ub77c\ub294 \uac1c\ub150\uc744 \uc774\uc6a9\ud55c\ub2e4. "),(0,n.kt)("p",null,"Thread Pool\uc740 ",(0,n.kt)("strong",{parentName:"p"},"\uc791\uc5c5 \ucc98\ub9ac\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc2a4\ub808\ub4dc\ub97c \uc81c\ud55c\ub41c \uac1c\uc218\ub9cc\ud07c \uc815\ud574 \ub193\uace0 \uc791\uc5c5 \ud050(Queue)\uc5d0 \ub4e4\uc5b4\uc624\ub294 \uc791\uc5c5\ub4e4\uc744 \ud558\ub098\uc529 \uc2a4\ub808\ub4dc\uac00 \ub9e1\uc544 \ucc98\ub9ac\ud558\ub294 \uac83"),"\uc744 \ub9d0\ud55c\ub2e4. Java\uc5d0 \uacbd\uc6b0, \uae30\ubcf8\uc801\uc73c\ub85c ",(0,n.kt)("inlineCode",{parentName:"p"},"Executors"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ExecutorService"),"\ub97c \uc774\uc6a9\ud558\uc5ec Thread Pool\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h4",{id:"single-thread-pool"},"Single Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ExecutorService executorService = Executors.newSingleThreadExecutor();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub2e8\uc77c Worker Thread."),(0,n.kt)("li",{parentName:"ul"},"\uc2e4\ud328 \uc2dc, \uc0c8\ub85c\uc6b4 Thread\ub97c \uc0dd\uc131\ud558\uc9c0 \uc54a\uc74c.")),(0,n.kt)("h4",{id:"fixed-thread-pool"},"Fixed Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ExecutorService executorService = Executors.newFixedThreadPool(int nThreads);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uace0\uc815\ub41c Worker Thread\ub97c \uc0ac\uc6a9\ud558\uba70, \ubaa8\ub4e0 Thread\ub97c \uc0ac\uc6a9 \uc911 \uc774\ub77c\uba74 Queue\uc5d0 \uc313\uc5ec \ub300\uae30."),(0,n.kt)("li",{parentName:"ul"},"\uc2e4\ud328 \uc2dc, \uc0c8\ub85c\uc6b4 Thread\ub97c \uc0dd\uc131\ud558\uc5ec \ub300\uccb4.")),(0,n.kt)("h4",{id:"cached-thread-pool"},"Cached Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ExecutorService executorService = Executors.newCachedThreadPool();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud544\uc694\uc5d0 \ub530\ub77c\uc11c \uc0c8\ub85c\uc6b4 Thread\ub97c \uc0dd\uc131\ud558\uba70, \uc774\uc804\uc5d0 \uc0dd\uc131\ub41c Thread\uac00 \uc874\uc7ac\ud558\uba74 \uc7ac\uc0ac\uc6a9."),(0,n.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c 60\ucd08 \uc815\ub3c4 Thread\uac00 \uc720\uc9c0."),(0,n.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ud558\ub294\ub370 \ud569\ub9ac\uc801.")),(0,n.kt)("h4",{id:"scheduler-thread-pool"},"Scheduler Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(int corePoolSize);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ub41c delay \ud6c4\uc5d0 \uc2e4\ud589\ud558\uac70\ub098 \uc8fc\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub3c4\ub85d \uba85\ub839\uc744 \uc608\uc57d.")),(0,n.kt)("h4",{id:"work-stealing-thread-pool"},"Work Stealing Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ExecutorService executorService = Executors.newWorkStealingPool(int parallelism);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc790\ubc14 8\uc5d0\uc11c \uc0c8\ub85c \uc0dd\uae34 Thread Pool."),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ub41c parallelism\uc744 \uc9c0\uc6d0\ud560\ub9cc\ud07c \ucda9\ubd84\ud55c Thread\ub97c \uc720\uc9c0\ud558\uace0 \uc5ec\ub7ec Queue\uc744 \uc0ac\uc6a9\ud558\uc5ec \uacbd\ud569\uc744 \uc904\uc784."),(0,n.kt)("li",{parentName:"ul"},"Thread\ub97c \ub3d9\uc801\uc73c\ub85c \ub298\ub9ac\uace0 \uc904\uc784."),(0,n.kt)("li",{parentName:"ul"},"\uc791\uc5c5\uc774 \uc2e4\ud589\ub418\ub294 \uc21c\uc11c\ub97c \ubcf4\uc7a5\ud558\uc9c0 \uc54a\uc74c.")),(0,n.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/heowc/JavaBasePractice/tree/master/ThreadPool/src/main/java/com/tistory/heowc/threadpool"},"ThreadPool"))))}s.isMDXComponent=!0}}]);