"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3769],{3955:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);const a=e=>{let{id:t="demo-editor",content:a,windowTitle:l="bash",minHeight:r="100px",onCompleteDelay:i=0}=e;return(0,n.useEffect)((()=>{const e=o(2210);o(7215),o(5831),new e(`#${t}`).openApp("editor",{minHeight:r,windowTitle:l}).write(`${a}`,{onCompleteDelay:i}).end()})),n.createElement(n.Fragment,null,n.createElement("div",{id:t,style:{minHeight:r}}),n.createElement("br",null),n.createElement("br",null))}},9598:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);const a=e=>{let{id:t="demo-terminal",command:a,respond:l,prompt:r="$",windowTitle:i="bash",minHeight:m="100px",onCompleteDelay:d=0}=e;return(0,n.useEffect)((()=>{const e=o(2210);o(7215),o(5831);let n=new e(`#${t}`);n.openApp("terminal",{minHeight:m,windowTitle:i,promptString:r});let s=a.split(";");for(let t=0;t<s.length;t++)n.command(s[t],{onCompleteDelay:d});n.respond(l),n.end()})),n.createElement(n.Fragment,null,n.createElement("div",{id:t,style:{minHeight:m}}),n.createElement("br",null),n.createElement("br",null))}},6931:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));o(828),o(9598),o(3955);const l={title:"hexo-tag-gdemo \uc18c\uac1c",slug:"2018/11/14/introduction-hexo-tag-gdemo",date:new Date("2018-11-14T18:00:00.000Z"),category:["hexo"],tags:["hexo","tag","demo","glorious-demo"]},r=void 0,i={permalink:"/2018/11/14/introduction-hexo-tag-gdemo",source:"@site/blog/introduction-hexo-tag-gdemo.mdx",title:"hexo-tag-gdemo \uc18c\uac1c",description:"\uc18c\uac1c",date:"2018-11-14T18:00:00.000Z",formattedDate:"2018\ub144 11\uc6d4 14\uc77c",tags:[{label:"hexo",permalink:"/tags/hexo"},{label:"tag",permalink:"/tags/tag"},{label:"demo",permalink:"/tags/demo"},{label:"glorious-demo",permalink:"/tags/glorious-demo"}],readingTime:1.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"hexo-tag-gdemo \uc18c\uac1c",slug:"2018/11/14/introduction-hexo-tag-gdemo",date:"2018-11-14T18:00:00.000Z",category:["hexo"],tags:["hexo","tag","demo","glorious-demo"]},prevItem:{title:"2018\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/2018/12/24/2018-develop-retrospection"},nextItem:{title:"Spring Camp 2018 \ud6c4\uae30",permalink:"/2018/04/25/spring-camp-2018-review"}},m={authorsImageUrls:[]},d=[],s={toc:d};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},5831:(e,t,o)=>{o.r(t)}}]);