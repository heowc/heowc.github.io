"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3494],{26361:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(74848),s=i(28453);i(72143);const t={title:"Spring Boot - \uc2dc\uc791\ud558\uae30",slug:"2018/01/08/spring-boot-start",date:new Date("2018-01-08T21:51:59.000Z"),category:["spring"],tags:["spring","spring-boot"]},l=void 0,o={permalink:"/2018/01/08/spring-boot-start",source:"@site/blog/spring-boot-start.mdx",title:"Spring Boot - \uc2dc\uc791\ud558\uae30",description:"Spring Boot\ub294 \uc801\uc740 \uc124\uc815\ub9cc\uc73c\ub85c \ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.",date:"2018-01-08T21:51:59.000Z",tags:[{inline:!0,label:"spring",permalink:"/tags/spring"},{inline:!0,label:"spring-boot",permalink:"/tags/spring-boot"}],readingTime:.845,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - \uc2dc\uc791\ud558\uae30",slug:"2018/01/08/spring-boot-start",date:"2018-01-08T21:51:59.000Z",category:["spring"],tags:["spring","spring-boot"]},unlisted:!1,prevItem:{title:"Spring Boot - Data JPA",permalink:"/2018/01/09/spring-boot-data-jpa"}},c={authorsImageUrls:[]},d=[{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:3},{value:"\uc900\ube44\uc0ac\ud56d",id:"\uc900\ube44\uc0ac\ud56d",level:3},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:3},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"\uc2e4\ud589",id:"\uc2e4\ud589",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Spring Boot\ub294 \uc801\uc740 \uc124\uc815\ub9cc\uc73c\ub85c \ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uae30\ub2a5",children:"\uae30\ub2a5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158"}),"\n",(0,r.jsx)(n.li,{children:"Tomcat, Jetty \ub610\ub294 Undertow\uc744 \ub0b4\uc7a5"}),"\n",(0,r.jsx)(n.li,{children:"Maven \uad6c\uc131\uc744 \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud55c \u2018starter\u2019 POM \uc81c\uacf5"}),"\n",(0,r.jsx)(n.li,{children:"\uac00\ub2a5\ud55c \uacbd\uc6b0, \uc790\ub3d9\uc73c\ub85c Spring \uc124\uc815"}),"\n",(0,r.jsx)(n.li,{children:"Metric, Health check \ubc0f Externalized \uad6c\uc131\uacfc \uac19\uc740 \ud504\ub85c\ub355\uc158 \uae30\ub2a5\uc744 \uc81c\uacf5"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc900\ube44\uc0ac\ud56d",children:"\uc900\ube44\uc0ac\ud56d"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JDK 1.8 \uc774\uc0c1"}),"\n",(0,r.jsx)(n.li,{children:"IDE(Eclipse, STS, Intellij)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc124\uce58\ud558\uae30",children:"\uc124\uce58\ud558\uae30"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://start.spring.io/",children:"Spring Initializr"})," \uc811\uc18d (\ube4c\ub4dc \ud234, \uc5b8\uc5b4, \ubc84\uc804, \ub514\ud39c\ub358\uc2dc)"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started-installing-the-cli",children:"Spring Boot CLI"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc124\uc815",children:"\uc124\uc815"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"application.properties"}),"\uc774\ub098 ",(0,r.jsx)(n.code,{children:"application.yml"}),"\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc124\uc815\uc744 \ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html",children:"common-application-properties"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\uc2e4\ud589",children:"\uc2e4\ud589"}),"\n",(0,r.jsxs)(n.p,{children:[".   ____          _            __ _ _\n/\\ / ",(0,r.jsxs)(n.em,{children:[(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.em,{children:"'"})," __ _ ",(0,r.jsx)(n.em,{children:"("}),")"]})," __  __ _ \\ \\ \\ ",(0,r.jsx)(n.br,{}),"\n","( ( )_"]}),"_ | '_ | '",(0,r.jsx)(n.em,{children:"| | '"})," / ",(0,r.jsxs)(n.em,{children:["` | \\ \\ \\ ",(0,r.jsx)(n.br,{}),"\n","\\/  __",(0,r.jsx)(n.em,{children:")| |"}),")| | | | | || ("]}),"| |  ) ) ) )\n'  |",(0,r.jsxs)(n.strong,{children:[(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.em,{children:"| .__|"}),"| |"]}),"|",(0,r.jsx)(n.em,{children:"| |"}),"_",(0,r.jsx)(n.em,{children:", | / / / /\n=========|"}),"|==============|"]}),(0,r.jsx)(n.em,{children:"/=/"}),"/",(0,r.jsx)(n.em,{children:"/"}),"/\n:: Spring Boot ::        (v2.1.0.RELEASE)"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},72143:(e,n,i)=>{i.d(n,{A:()=>t});var r=i(96540),s=i(74848);const t=e=>{let{id:n="demo-terminal",command:t,respond:l,prompt:o="$",windowTitle:c="bash",minHeight:d="100px",onCompleteDelay:a=0}=e;return(0,r.useEffect)((()=>{const e=i(85310);i(26994),i(77156);let r=new e(`#${n}`);r.openApp("terminal",{minHeight:d,windowTitle:c,promptString:o});let s=t.split(";");for(let n=0;n<s.length;n++)r.command(s[n],{onCompleteDelay:a});r.respond(l),r.end()})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:n,style:{minHeight:d}}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]})}},77156:(e,n,i)=>{i.r(n)}}]);