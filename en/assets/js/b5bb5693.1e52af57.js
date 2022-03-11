"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2263],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=l,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43540:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],u={title:"NullAway \uc54c\uc544\ubcf4\uae30",slug:"2019/11/29/nullaway-overview",date:new Date("2019-11-29T22:00:00.000Z"),category:["java"],tags:["js305","uber","nullaway","null-reference"]},i=void 0,p={permalink:"/en/2019/11/29/nullaway-overview",source:"@site/blog/nullaway-overview.md",title:"NullAway \uc54c\uc544\ubcf4\uae30",description:"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud558\ub2e4\ubcf4\uba74 \ub300\ubd80\ubd84\uc758 \uc5b8\uc5b4\ub9c8\ub2e4 null \uc774\ub77c\ub294 \uac12\uc774 \uc874\uc7ac\ud55c\ub2e4. \ub54c\ub85c\ub294 \uc774 \uc874\uc7ac\uac00 \ubb38\uc81c\ub97c \uc57c\uae30\uc2dc\ud0a4\uae30\ub3c4 \ud558\ub294\ub370 \uc790\ubc14\uc5d0\uc11c\ub294 null\uc778 \uac1d\uccb4\ub97c \ucc38\uc870\ud558\uac8c \ub418\uba74 NullPointException \uc774\ub77c\ub294 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\ub97c \ub358\uc9c0\uac8c \ub41c\ub2e4.",date:"2019-11-29T22:00:00.000Z",formattedDate:"November 29, 2019",tags:[{label:"js305",permalink:"/en/tags/js-305"},{label:"uber",permalink:"/en/tags/uber"},{label:"nullaway",permalink:"/en/tags/nullaway"},{label:"null-reference",permalink:"/en/tags/null-reference"}],readingTime:3.155,truncated:!0,authors:[],frontMatter:{title:"NullAway \uc54c\uc544\ubcf4\uae30",slug:"2019/11/29/nullaway-overview",date:"2019-11-29T22:00:00.000Z",category:["java"],tags:["js305","uber","nullaway","null-reference"]},prevItem:{title:"2019 \uc6b0\uc544\ud55c \ud14c\ud06c\uc758 \ubc24 - \uc694\uc57d",permalink:"/en/2019/12/19/2019-woowahan-tech-night-review"},nextItem:{title:"2019 \ucee8\ud2b8\ub9ac\ubdf0\ud1a4 (feat. Armeria)",permalink:"/en/2019/11/04/2019-contributon-feat-armeria"}},c={authorsImageUrls:[]},s=[{value:"<code>NullAway</code>",id:"nullaway",level:4},{value:"\uc560\ub178\ud14c\uc774\uc158 \uae30\ubc18\uc774\ub2e4. (<code>@Nullable</code>, <code>@NonNull</code> \ub4f1)",id:"\uc560\ub178\ud14c\uc774\uc158-\uae30\ubc18\uc774\ub2e4-nullable-nonnull-\ub4f1",level:5},{value:"<code>error-prone</code>\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\ub2e4.",id:"error-prone\uc774-\ub0b4\uc7a5\ub418\uc5b4-\uc788\ub2e4",level:5},{value:"\uadf8 \uc678",id:"\uadf8-\uc678",level:5},{value:"\ucd08\uac04\ub2e8 \uc0d8\ud50c",id:"\ucd08\uac04\ub2e8-\uc0d8\ud50c",level:4}],m={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud558\ub2e4\ubcf4\uba74 \ub300\ubd80\ubd84\uc758 \uc5b8\uc5b4\ub9c8\ub2e4 ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," \uc774\ub77c\ub294 \uac12\uc774 \uc874\uc7ac\ud55c\ub2e4. \ub54c\ub85c\ub294 \uc774 \uc874\uc7ac\uac00 \ubb38\uc81c\ub97c \uc57c\uae30\uc2dc\ud0a4\uae30\ub3c4 \ud558\ub294\ub370 \uc790\ubc14\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uc778 \uac1d\uccb4\ub97c \ucc38\uc870\ud558\uac8c \ub418\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"NullPointException")," \uc774\ub77c\ub294 \ub7f0\ud0c0\uc784 \uc5d0\ub7ec\ub97c \ub358\uc9c0\uac8c \ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String message = "Hello Would!";\nmessage = null;\nmessage.toLowerCase(); // throw NullPointException\n')),(0,a.kt)("p",null,"\ubb3c\ub860, \uc704\uc640 \uac19\uc740 \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc9c4 \uc54a\uaca0\uc9c0\ub9cc \uc0c1\ud669\uc5d0 \ub530\ub77c\uc11c \ud734\uba3c \uc5d0\ub7ec\ub294 \uc5b8\uc81c\ub098 \ubc1c\uc0dd\ud560 \uc218 \uc788\uace0 \ubc1c\uacac\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ub110 \ub808\ud37c\ub7f0\uc2a4\ub97c \ucc98\uc74c \ub9cc\ub4e0 \ud1a0\ub2c8 \ud638\uc5b4\uac00 '10\uc5b5 \ubd88\uc9dc\ub9ac \uc2e4\uc218'(billion dollar mistake)\uc600\ub2e4\uace0 \ud68c\uace0\ud55c \uc801 \uc788\ub2e4. - \ub098\ubb34\uc704\ud0a4 \u4e2d")),(0,a.kt)("p",null,"\ud14c\uc2a4\ud2b8 \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uba74 \uc774\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\uaca0\uc9c0\ub9cc \uadfc\ubcf8\uc801\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc5c6\ub294(?) \ubb38\uc81c\uc774\uae30 \ub54c\ubb38\uc5d0 \uad00\ub828 \ud504\ub808\uc784\uc6cc\ud06c\ub098 \ub300\uccb4 \uc5b8\uc5b4(ex. ",(0,a.kt)("inlineCode",{parentName:"p"},"kotlin"),")\uac00 \ub098\uc624\uace0 \uc788\ub2e4. \uadf8 \uc911 uber\uc5d0\uc11c \ub9cc\ub4e0 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/uber/NullAway"},(0,a.kt)("inlineCode",{parentName:"a"},"NullAway")),"\ub97c \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("h4",{id:"nullaway"},(0,a.kt)("a",{parentName:"h4",href:"https://github.com/uber/NullAway"},(0,a.kt)("inlineCode",{parentName:"a"},"NullAway"))),(0,a.kt)("h5",{id:"\uc560\ub178\ud14c\uc774\uc158-\uae30\ubc18\uc774\ub2e4-nullable-nonnull-\ub4f1"},"\uc560\ub178\ud14c\uc774\uc158 \uae30\ubc18\uc774\ub2e4. (",(0,a.kt)("inlineCode",{parentName:"h5"},"@Nullable"),", ",(0,a.kt)("inlineCode",{parentName:"h5"},"@NonNull")," \ub4f1)"),(0,a.kt)("p",null,"\uc790\ubc14\uc758 \ub300\ud45c\uc801\uc778 \ud504\ub808\uc784\uc6cc\ud06c\uc778 Spring\uc744 \ubcf4\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Nullable"),"\uac00 \ud544\ub4dc\ub098 \ud30c\ub77c\ubbf8\ud130, \ubc18\ud658\uac12 \ub4f1\uc5d0 \ubd99\uc740 \uac83\uc744 \ubcfc \uc218 \uc788\ub294\ub370, ",(0,a.kt)("a",{parentName:"p",href:"https://jcp.org/en/jsr/detail?id=305"},"js-305"),"\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uba54\ud0c0 \uc5d0\ub178\ud14c\uc774\uc158\ub4e4 \uc911 \ud558\ub098\uc774\ub2e4. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u203b js-305: \uc790\ubc14 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc624\ub958 \ubc1c\uacac \ub3c4\uad6c\ub97c \uc704\ud55c \ud45c\uc900")),(0,a.kt)("h5",{id:"error-prone\uc774-\ub0b4\uc7a5\ub418\uc5b4-\uc788\ub2e4"},(0,a.kt)("a",{parentName:"h5",href:"https://github.com/google/error-prone"},(0,a.kt)("inlineCode",{parentName:"a"},"error-prone")),"\uc774 \ub0b4\uc7a5\ub418\uc5b4 \uc788\ub2e4."),(0,a.kt)("p",null,"error-prone\uc740 \uad6c\uae00\uc5d0\uc11c \ub9cc\ub4e0 \uc815\uc801 \ubd84\uc11d \ud234\ub85c \ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c \ud754\ud788 \ud558\uae30 \uc26c\uc6b4 \ud328\ud134\uc744 \ucc3e\uc544 \uc54c\ub824\uc900\ub2e4. \ud574\ub2f9 \ud328\ud134\uc740 ",(0,a.kt)("a",{parentName:"p",href:"http://errorprone.info/bugpatterns"},"\uacf5\uc2dd\ubb38\uc11c"),"\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uace0, \ucee4\uc2a4\ud140\ud558\uac8c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\ub2e4. \uc7a0\uae50 \ud6d1\uc5b4\ubd24\ub294\ub370 \uc774\ub97c \ucc38\uace0\ud558\uc5ec \uc790\uc2e0\uc758 \uc798\ubabb\ub41c \ud504\ub85c\uadf8\ub798\ubc0d\ub3c4 \uac1c\uc120\ub420 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4."),(0,a.kt)("h5",{id:"\uadf8-\uc678"},"\uadf8 \uc678"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 NPE\ub97c \ubc29\uc5b4\ud558\uc9c0 \ubabb\ud55c\ub2e4. (\uc5b4\ucc0c\ubcf4\uba74 \ub2f9\uc5f0\ud55c\uac70\uaca0\uc9c0\ub9cc...)"),(0,a.kt)("li",{parentName:"ul"},"\ube4c\ub4dc \uc2dc\uac04\uc774 \ub354 \uac78\ub9b0\ub2e4. (\ubb38\uc11c\uc0c1\uc73c\ub85c \ucd5c\ub300 10% \ubbf8\ub9cc\uc774\ub77c\uace0 \ud558\ub2c8 \ud06c\uac8c \ubb34\ub9ac \uc5c6\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4.)")),(0,a.kt)("h4",{id:"\ucd08\uac04\ub2e8-\uc0d8\ud50c"},"\ucd08\uac04\ub2e8 \uc0d8\ud50c"),(0,a.kt)("p",null,"\uac04\ub2e8\ud788 \ubb38\uc790\uc5f4\uc744 \uc18c\ubb38\uc790\ub85c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uba54\uc18c\ub4dc\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static String foo(String bar) {\n    return bar.toLowerCase();\n}\n")),(0,a.kt)("p",null,"\ubcf8\uc758 \uc544\ub2c8\uac8c \ud30c\ub77c\ubbf8\ud130\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ub123\ub294\ub2e4\uba74 \ucef4\ud30c\uc77c \uacfc\uc815\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc5d0\ub7ec \uba54\uc2dc\uc9c0\uac00 \ucd9c\ub825\ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(foo(null));\n// error: [NullAway] passing @Nullable parameter 'null' where @NonNull is required\n")),(0,a.kt)("p",null,"\uc124\uc815\uc774\ub098 \uc0d8\ud50c \ucf54\ub4dc\ub294 \uacf5\uc2dd \ubb38\uc11c\ub098 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/heowc/JavaBasePractice/tree/master/NullAway"},"JavaBasePractice - NullAway"),"\ub97c \ucc38\uace0\ud560 \uc218 \uc788\ub2e4."))}f.isMDXComponent=!0}}]);