"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[8226],{29861:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(74848),t=n(28453);const c={title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",slug:"2019/02/09/using-mysql-jdbc-to-handle-large-table-1",date:new Date("2019-02-09T23:30:00.000Z"),category:["mysql"],tags:["mysql","jdbc","batch-processing"]},i=void 0,l={permalink:"/en/2019/02/09/using-mysql-jdbc-to-handle-large-table-1",source:"@site/blog/using-mysql-jdbc-to-handle-large-table-1.md",title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc77d\uc5b4\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?",date:"2019-02-09T23:30:00.000Z",tags:[{inline:!0,label:"mysql",permalink:"/en/tags/mysql"},{inline:!0,label:"jdbc",permalink:"/en/tags/jdbc"},{inline:!0,label:"batch-processing",permalink:"/en/tags/batch-processing"}],readingTime:7.395,hasTruncateMarker:!0,authors:[],frontMatter:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",slug:"2019/02/09/using-mysql-jdbc-to-handle-large-table-1",date:"2019-02-09T23:30:00.000Z",category:["mysql"],tags:["mysql","jdbc","batch-processing"]},unlisted:!1,prevItem:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2461",permalink:"/en/2019/02/12/using-mysql-jdbc-to-handle-large-table-2"},nextItem:{title:"GitHub Action\uc744 \ud65c\uc6a9\ud55c GitHub Page \ubc30\ud3ec",permalink:"/en/2019/02/03/deploy-gh-page-with-github-action"}},h={authorsImageUrls:[]},d=[{value:"\uc65c \uc774\ub7f0 \uc791\uc5c5\uc774 \ud544\uc694\ub85c \ud558\ub294\uac00?",id:"\uc65c-\uc774\ub7f0-\uc791\uc5c5\uc774-\ud544\uc694\ub85c-\ud558\ub294\uac00",level:3},{value:"\ubca4\uce58\ub9c8\ud0b9 : Spring Batch",id:"\ubca4\uce58\ub9c8\ud0b9--spring-batch",level:3},{value:"Cursor \ud65c\uc6a9\ud558\uae30",id:"cursor-\ud65c\uc6a9\ud558\uae30",level:3},{value:"fetchSize \uc9c0\uc815\ud558\uae30",id:"fetchsize-\uc9c0\uc815\ud558\uae30",level:3},{value:"\uc18c\uc694\uc2dc\uac04 \uce21\uc815",id:"\uc18c\uc694\uc2dc\uac04-\uce21\uc815",level:4},{value:"useCursorFetch",id:"usecursorfetch",level:3},{value:"\ub2e4\uc2dc \uc2dc\uac04 \uce21\uc815",id:"\ub2e4\uc2dc-\uc2dc\uac04-\uce21\uc815",level:4},{value:"\ubcf4\ub2e4 \ub514\ud14c\uc77c\ud558\uac8c \ubd84\uc11d\ud558\uae30",id:"\ubcf4\ub2e4-\ub514\ud14c\uc77c\ud558\uac8c-\ubd84\uc11d\ud558\uae30",level:3},{value:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 (feat. VisualVM)",id:"\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9-feat-visualvm",level:4},{value:"\ud328\ud0b7 \ubd84\uc11d (feat. WireShark)",id:"\ud328\ud0b7-\ubd84\uc11d-feat-wireshark",level:4},{value:"\ucd94\uac00\ub85c \uc54c\uac8c\ub41c \uc810",id:"\ucd94\uac00\ub85c-\uc54c\uac8c\ub41c-\uc810",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\uc11c \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc77d\uc5b4\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\uc65c-\uc774\ub7f0-\uc791\uc5c5\uc774-\ud544\uc694\ub85c-\ud558\ub294\uac00",children:"\uc65c \uc774\ub7f0 \uc791\uc5c5\uc774 \ud544\uc694\ub85c \ud558\ub294\uac00?"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"\uac04\ub2e8\ud55c \ud1b5\uacc4 \uc790\ub8cc\ub97c \uc0dd\uac01\ud574\ubcf4\uc790."})}),"\n",(0,r.jsxs)(s.p,{children:["\uc6b0\uc120, \ud1b5\uacc4 \uc790\ub8cc\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574\uc11c\ub294 \ucd95\uc801\ub41c \ub370\uc774\ud130\uac00 \ud544\uc694\ud558\ub2e4. \ucd95\uc801\ub41c \ub370\uc774\ud130\ub294 10\ub9cc row\uac00 \ub420 \uc218 \ub3c4 \uc788\uace0, 1000\ub9cc row\uac00 \ub420 \uc218 \uc788\uace0, 1\uc5b5 row\uac00 \ub420 \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c \uc5ec\ub7ec\uac00\uc9c0 \uacb0\uacfc\ub97c \ub3c4\ucd9c\ud574\ub0bc \uac83 \uc774\ub2e4. \uadf8\ub7f0\ub370 \uc0ac\uc6a9\uc790\uac00 \uc694\uccad\ud560 \ub54c\ub9c8\ub2e4 \ub9e4\ubc88 \uacb0\uacfc\ub97c \ub3c4\ucd9c\ud574\ub0bc \uac83\uc778\uac00? \uc544\ub2c8\ub2e4. \ud558\ub8e8\uc5d0 \ud55c\ubc88\uc774\ub358, \ud55c \uc8fc\uc5d0 \ud55c\ubc88\uc774\ub358 \uc9c0\uc815\ud55c \uc2dc\uac04\uc5d0 \ub9de\ucdb0 \uc8fc\uae30\uc801\uc73c\ub85c \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uac83 \uc774\ub2e4. \ubb3c\ub860 \uc694\uc998\uc5d0\ub294 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \ub2e4\uc591\ud55c \uba54\ucee4\ub2c8\uc998\uacfc \uc624\ud508\uc18c\uc2a4\ub97c \uc81c\uacf5\ud558\uae30 \ub54c\ubb38\uc5d0 \uad73\uc774 MySQL \uac19\uc740 RDB\ub97c \ud65c\uc6a9\ud558\uc9c0 \uc54a\uace0\ub3c4 \uac00\ub2a5\ud558\ub2e4. \ud558\uc9c0\ub9cc, \uc624\ud788\ub824 \ubc30\ubcf4\ub2e4 \ubc30\uaf3d\uc774 \ub354 \ucee4\uc9c8 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 RDB\ub85c \uc774\uc640 \uac19\uc740 \uc791\uc5c5\uc744 \ud574\uacb0\ud574 \ubcf4\uace0\uc790 \ud55c\ub2e4. ",(0,r.jsxs)(s.strong,{children:["\ubcf4\ud1b5 \uc774\ub97c ",(0,r.jsx)(s.a,{href:"https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B4%84_%EC%B2%98%EB%A6%AC",children:"batch-processing"}),"\uc774\ub77c \ud55c\ub2e4."]})]}),"\n",(0,r.jsx)(s.h3,{id:"\ubca4\uce58\ub9c8\ud0b9--spring-batch",children:"\ubca4\uce58\ub9c8\ud0b9 : Spring Batch"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"\uadf8\ub098\ub9c8 \uc544\ub294 Spring Framework\ub97c \ucc38\uace0\ud574\ubcf4\uc790."})}),"\n",(0,r.jsxs)(s.p,{children:["Spring Framework\uc740 \ub9ce\uc740 \ub178\ud558\uc6b0\uc640 \ubaa8\ubc94 \uc0ac\ub840\uac00 \ub179\uc544\uc788\ub294 \uc790\ubc14 \ud504\ub808\uc784\uc6cc\ud06c \uc911 \ud558\ub098\ub85c, \uadf8 \uc911, ",(0,r.jsx)(s.a,{href:"https://spring.io/projects/spring-batch",children:"Spring Batch"}),"\ub97c \ud6d1\uc5b4\ubcf4\uba74 RDB\ub97c \ud65c\uc6a9\ud558\ub294 \uba87 \uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\ub2e4. \ud06c\uac8c\ub294 \ucd1d 2\uac00\uc9c0\ub97c \uc9c0\uc6d0\ud558\ub294\ub370 **",(0,r.jsx)(s.a,{href:"https://docs.spring.io/spring-batch/4.1.x/reference/html/readersAndWriters.html#cursorBasedItemReaders",children:"Cursor\ub97c \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95"}),"**\uacfc **",(0,r.jsx)(s.a,{href:"https://docs.spring.io/spring-batch/4.1.x/reference/html/readersAndWriters.html#pagingItemReaders",children:"Paging \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95"}),"**\uc774\ub2e4."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\uae00\uc758 \uc8fc\uc81c\uac00 Spring\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 'Cursor\ub098 Paging\uc744 \ud65c\uc6a9\ud558\uba74 \ub41c\ub2e4'\uc815\ub3c4 \ud78c\ud2b8\ub9cc \uac00\uc9c0\uace0 \ub2e4\uc74c \ub2e8\uacc4\ub85c \ub118\uc5b4\uac00\uc790. \ub610\ud55c \uc774 \uae00\uc5d0\uc11c\ub294 Cursor\ub9cc \ud65c\uc6a9\ud574\ubcfc \uac83 \uc774\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"cursor-\ud65c\uc6a9\ud558\uae30",children:"Cursor \ud65c\uc6a9\ud558\uae30"}),"\n",(0,r.jsxs)(s.p,{children:['\ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucee4\uc11c(Cursor)\ub294 \uc77c\ub828\uc758 \ub370\uc774\ud130\uc5d0 \uc21c\ucc28\uc801\uc73c\ub85c \uc561\uc138\uc2a4\ud560 \ub54c \uac80\uc0c9 \ubc0f "\ud604\uc7ac \uc704\uce58"\ub97c \ud3ec\ud568\ud558\ub294 \ub370\uc774\ud130 \uc694\uc18c\uc774\ub2e4.  (',(0,r.jsx)(s.a,{href:"https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%BB%A4%EC%84%9C",children:"\ucc38\uace0: \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucee4\uc11c - \uc704\ud0a4\ubc31\uacfc"}),")"]}),"\n",(0,r.jsxs)(s.p,{children:["\uc5ec\uae30\uc11c \uace0\ub824\ud574\uc57c\ud560 \uc810\uc740 \uc801\uc808\ud55c \uac2f\uc218\ub9cc\ud07c row(\ub370\uc774\ud130 \uc694\uc18c)\ub97c \uac00\uc838\uc624\ub294 \uac83\uc774\ub2e4. \ud55c\ubc88\uc5d0 \uadf8 \ub9ce\uc740 row\ub97c \uac00\uc838\uc628\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf4\uc790. \uc544\ub9c8\ub3c4 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ucd08\uacfc\ud558\uc5ec OOM(Out Of Memory)\uac00 \ubc1c\uc0dd\ud560 \uac83\uc774\ub2e4. \ubc18\ub300\ub85c \uc801\uc740 \uac2f\uc218 \uac00\uc838\uc628\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf4\uc790. \uc544\ub9c8\ub3c4 \uad49\uc7a5\ud788 \uc624\ub798 \uac78\ub9b4 \uac83\uc774\ub2e4. \uc774\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 ",(0,r.jsx)(s.code,{children:"fetchSize"}),"\ub97c \uc9c0\uc815\ud558\ub294 \uac83\uc774\ub2e4."]}),"\n",(0,r.jsx)(s.h3,{id:"fetchsize-\uc9c0\uc815\ud558\uae30",children:"fetchSize \uc9c0\uc815\ud558\uae30"}),"\n",(0,r.jsx)(s.p,{children:"\uc21c\uc218 JDBC\ub97c \uc0ac\uc6a9\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Statement stmt = connection.createStatement("select ... from ...");\nstmt.setFetchSize(fetchSize);\n// ...\n'})}),"\n",(0,r.jsx)(s.p,{children:"\uadf8\ub7fc \uc774\uc81c \uc124\uc815\uc774 \ub05d\ub09c\uac78\uae4c? \uac04\ub2e8\ud558\uac8c \ud14c\uc2a4\ud2b8\ub97c \ud574\ubcf4\uc790. \uc5ec\ub7ec \uac12\uc744 \uc801\uc6a9\ud558\uc5ec \uc18c\uc694\uc2dc\uac04\uc744 \uce21\uc815\ud574\ubcf4\uba74 \ub420 \uac83 \uc774\ub2e4."}),"\n",(0,r.jsx)(s.h4,{id:"\uc18c\uc694\uc2dc\uac04-\uce21\uc815",children:"\uc18c\uc694\uc2dc\uac04 \uce21\uc815"}),"\n",(0,r.jsxs)(s.p,{children:["10\ub9cc row\uac00 \ub4e4\uc5b4\uc788\ub294 \uac04\ub2e8\ud55c \ud14c\uc774\ube14\uc744 \uc900\ube44 \ud574\ub193\uace0 Integer.MIN_VALUE, 5, 10, 50, 100, 500, 1000, 2500, 5000 \uc21c\uc73c\ub85c \uce21\uc815\ud574 \ubcf4\uc558\ub2e4. \uacb0\uacfc\ub294 \uc774\uc0c1\ud558\uac8c\ub3c4 ",(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"fetchSize"}),"\uc640 \ubb34\uad00\ud558\uac8c \uc11c\ub85c \ube44\uc2b7\ud55c \uc18c\uc694\uc2dc\uac04\uc774 \uce21\uc815\ub418\uc5c8\ub2e4. (\uc57d 320 ~ 400ms)"]})]}),"\n",(0,r.jsx)(s.h3,{id:"usecursorfetch",children:"useCursorFetch"}),"\n",(0,r.jsxs)(s.p,{children:["\uc5ec\ub7ec \uc0bd\uc9c8\uc744 \ud558\uace0 \uacb0\uad6d \ubb38\uc11c\ub97c \ud1b5\ud574 \ud574\ub2f5\uc744 \uc5bb\uc744 \uc218 \uc788\uc5c8\ub294\ub370, \uc774\ub294 \ubc14\ub85c ",(0,r.jsx)(s.code,{children:"useCursorFetch=true"}),"\ub97c \uc9c0\uc815\ud558\ub294 \uac83\uc774\ub2e4. (",(0,r.jsx)(s.a,{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-implementation-notes.html",children:"\ucc38\uace0"}),")"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-java",children:'Connection connection = \n    DriverManager.getConnection("jdbc:mysql://localhost/?useCursorFetch=true", "...", "...");\nStatement stmt = connection.createStatement("select ... from ...");\nstmt.setFetchSize(fetchSize);\n// ...\n'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://github.com/mysql/mysql-connector-j/blob/release/8.0/src/main/protocol-impl/java/com/mysql/cj/protocol/a/result/ResultsetRowsCursor.java#L200",children:"mysql-connector-java@8.0 - ResultsetRowsCursor.fetchMoreRows()"}),"\ub97c \ubcf4\uba74 fetch\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc774\ud574\ud560 \uc218 \uc788\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"\ub2e4\uc2dc-\uc2dc\uac04-\uce21\uc815",children:"\ub2e4\uc2dc \uc2dc\uac04 \uce21\uc815"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"fetch size"}),(0,r.jsx)(s.th,{children:"time(ms)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Integer.MIN_VALUE"}),(0,r.jsx)(s.td,{children:"682"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"12367"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"10"}),(0,r.jsx)(s.td,{children:"6401"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"50"}),(0,r.jsx)(s.td,{children:"1632"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"1115"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"606"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1000"}),(0,r.jsx)(s.td,{children:"527"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2500"}),(0,r.jsx)(s.td,{children:"508"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"5000"}),(0,r.jsx)(s.td,{children:"464"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\ubb3c\ub860 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591, \ud658\uacbd\ub9c8\ub2e4 \ub2e4\ub974\uaca0\uc9c0\ub9cc ",(0,r.jsx)(s.code,{children:"fetchSize"}),"\uc5d0 \ub530\ub77c \uc11c\ub85c \ub2e4\ub978 \uc18c\uc694\uc2dc\uac04\uc774 \ub098\uc628 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4. \uc55e\uc11c \uc608\uc0c1\ud588\ub358 \uac83 \uac19\uc774 \ub108\ubb34 \uc791\uc73c\uba74 \uad49\uc7a5\ud788 \uc624\ub79c \uc2dc\uac04\uc774 \uc18c\uc694\ub418\ubbc0\ub85c \uc801\uc808\ud55c \uac12\uc744 \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4."]}),"\n",(0,r.jsx)(s.h3,{id:"\ubcf4\ub2e4-\ub514\ud14c\uc77c\ud558\uac8c-\ubd84\uc11d\ud558\uae30",children:"\ubcf4\ub2e4 \ub514\ud14c\uc77c\ud558\uac8c \ubd84\uc11d\ud558\uae30"}),"\n",(0,r.jsx)(s.p,{children:"\uc55e\uc5d0\uc11c \uac19\uc774 \uc0bd\uc9c8\uc744 \ud558\uc9c0 \uc54a\uae30 \uc704\ud574 \uc18c\uc694\uc2dc\uac04 \uc774\uc678\uc5d0 \ubcf4\ub2e4 \ub514\ud14c\uc77c\ud55c \ubd84\uc11d\uc744 \ud574\ubcf4\uc790. \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740? \ud328\ud0b7\uc740?"}),"\n",(0,r.jsx)(s.h4,{id:"\uba54\ubaa8\ub9ac-\uc0ac\uc6a9\ub7c9-feat-visualvm",children:"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9 (feat. VisualVM)"}),"\n",(0,r.jsxs)(s.p,{children:["Java Profiling Tool \uc911 \ud558\ub098\uc778 ",(0,r.jsx)(s.a,{href:"https://visualvm.github.io/",children:"VisualVM"}),"\uc73c\ub85c \ub300\ub7b5\uc801\uc778 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc744 \uce21\uc815\ud574\ubcf8 \uacb0\uacfc\uc774\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=false"})," \uacbd\uc6b0\n",(0,r.jsx)(s.img,{alt:"alt no-fetch-by-visualvm",src:n(51857).A+"",width:"1061",height:"630"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=true"})," \uacbd\uc6b0\n",(0,r.jsx)(s.img,{alt:"alt fetch-by-visualvm",src:n(82607).A+"",width:"1060",height:"630"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=true"})," \uacbd\uc6b0, \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \ub354 \uc801\uc744 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."]})}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"\ud328\ud0b7-\ubd84\uc11d-feat-wireshark",children:"\ud328\ud0b7 \ubd84\uc11d (feat. WireShark)"}),"\n",(0,r.jsxs)(s.p,{children:["jdbc \ud504\ub85c\ud1a0\ucf5c \ud328\ud0b7\uc744 \ubd84\uc11d\ud558\uae30 \uc704\ud574 ",(0,r.jsx)(s.a,{href:"https://www.wireshark.org/",children:"WireShark"}),"\ub97c \ud65c\uc6a9\ud574\ubcf8 \uacb0\uacfc\uc774\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=false"})," \uacbd\uc6b0\n",(0,r.jsx)(s.img,{alt:"alt no-fetch-by-wireshark",src:n(86366).A+"",width:"2260",height:"1756"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=true"}),"\uc640 ",(0,r.jsx)(s.code,{children:"fetchSize=5"})," \uacbd\uc6b0\n",(0,r.jsx)(s.img,{alt:"alt fetch-by-visualvm",src:n(18858).A+"",width:"2260",height:"1756"})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=true"}),"\uc640 ",(0,r.jsx)(s.code,{children:"fetchSize=5"})," \uacbd\uc6b0, ",(0,r.jsx)(s.code,{children:"fetchSize"})," \ub9cc\ud07c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0 \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0\uc774 \ubcf4\ub2e4 \ub9ce\uc740 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."]})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\ucd94\uac00\ub85c-\uc54c\uac8c\ub41c-\uc810",children:"\ucd94\uac00\ub85c \uc54c\uac8c\ub41c \uc810"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\ucd08\ubc18\uc5d0 MariaDB\ub97c \uc0ac\uc6a9\ud588\uc5c8\ub294\ub370 \ud574\ub2f9 JDBC \ub4dc\ub77c\uc774\ubc84\uc5d0\ub294 ",(0,r.jsx)(s.code,{children:"useCursorFetch"})," \uc635\uc158\uc774 \uc5c6\ub2e4. (\ub2e4\ub978 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0\ub3c4 \uc5c6\ub2e4.) \ubb3c\ub860 fetchSize \uc801\uc6a9 \uc5ec\ubd80\uc5d0 \ub530\ub77c \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc740 \uc57d\uac04 \ub2e4\ub978 \uac83\uc744 \ubcfc \uc218 \uc788\ub294\ub370, \uc774\ub294 MariaDB JDBC \ub4dc\ub77c\uc774\ubc84 \uc790\uccb4\uc5d0\uc11c \ucd5c\uc801\ud654 \ud574\uc8fc\ub294 \uac83\uc774 \uc544\ub2d0\uae4c \uc2f6\ub2e4."]}),"\n",(0,r.jsxs)(s.li,{children:["\ud328\ud0b7 \ubd84\uc11d\uc744 \ud558\ub294\ub370 \uae30\ubcf8\uc801\uc73c\ub85c Secure Layer\uac00 \uc874\uc7ac\ud558\uc5ec \uc81c\ub300\ub85c \ubd84\uc11d\ud558\uae30 \uc5b4\ub824\uc6e0\uace0, ",(0,r.jsx)(s.code,{children:"sslMode=DISABLED"})," \ucd94\uac00\ud558\uc5ec \ud574\ub2f9 Layer\ub97c \uc81c\uac70\ud560 \uc218 \uc788\uc5c8\ub2e4."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"useCursorFetch=false"})," \uacbd\uc6b0\uc758 WireShark \uc2a4\ud06c\ub9b0\uc0f7\uc744 \ubcf4\uba74 length\uac00 16388\uc778 \ud328\ud0b7\uc744 \ubcfc \uc218 \uc788\ub294\ub370, \uc774\ub294 ",(0,r.jsx)(s.code,{children:"net_buffer_length"}),"\uc758 default(= 16384)\uc640 \uc720\uc0ac\ud55c \uac83\uc744 \uc54c \uc218 \uc788\ub2e4. \uace0\ub85c, \ub9ce\uc740 \ub370\uc774\ud130\ub97c read\ud558\ub354\ub77c\ub3c4 \ub124\ud2b8\uc6cc\ud06c \ud1b5\uc2e0 \uc790\uccb4\ub294 ",(0,r.jsx)(s.code,{children:"net_buffer_length"})," \ub9cc\ud07c \ub098\ub220\uc11c \ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(s.li,{children:"\uc774\uc678\uc5d0\ub3c4 JDBC \ub4dc\ub77c\uc774\ubc84 \uc635\uc158\uc73c\ub85c \uc131\ub2a5 \ud29c\ub2dd\ud560 \ubd80\ubd84\uc774 \uc0c1\ub2f9\ud788 \ub9ce\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\ucc38\uace0",children:"\ucc38\uace0"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/heowc/mysql-fetch-test",children:"https://github.com/heowc/mysql-fetch-test"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://mariadb.com/kb/en/library/about-mariadb-connector-j/#streaming-result-sets",children:"https://mariadb.com/kb/en/library/about-mariadb-connector-j/#streaming-result-sets"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-implementation-notes.html",children:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-implementation-notes.html"})}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},18858:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/fetch-5-by-wireshark-b3d58e7a49eefc34e5c556c7a5d8d54f.png"},82607:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/fetch-by-visualvm-288b87985f737ad02358d1645c95cdc7.png"},51857:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/no-fetch-by-visualvm-bd0c1ffa695bd13b2f3a18677d6e7dd5.png"},86366:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/no-fetch-by-wireshark-4c08fd823a1130950522f5f3de423562.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var r=n(96540);const t={},c=r.createContext(t);function i(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);