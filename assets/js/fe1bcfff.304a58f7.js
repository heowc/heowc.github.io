"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3278],{58568:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=n(74848),i=n(28453);const r={title:"AWS - SES \uc0ac\uc6a9 \ud6c4\uae30",slug:"2020/04/11/aws-ses-review",date:new Date("2020-04-11T17:30:00.000Z"),category:["aws"],tags:["aws","ses","mail","review"]},t=void 0,a={permalink:"/2020/04/11/aws-ses-review",source:"@site/blog/aws-ses-review.md",title:"AWS - SES \uc0ac\uc6a9 \ud6c4\uae30",description:"AWS SES \uc0ac\uc6a9 \ud6c4\uae30\uc774\ub2e4.",date:"2020-04-11T17:30:00.000Z",tags:[{inline:!0,label:"aws",permalink:"/tags/aws"},{inline:!0,label:"ses",permalink:"/tags/ses"},{inline:!0,label:"mail",permalink:"/tags/mail"},{inline:!0,label:"review",permalink:"/tags/review"}],readingTime:6.01,hasTruncateMarker:!0,authors:[],frontMatter:{title:"AWS - SES \uc0ac\uc6a9 \ud6c4\uae30",slug:"2020/04/11/aws-ses-review",date:"2020-04-11T17:30:00.000Z",category:["aws"],tags:["aws","ses","mail","review"]},unlisted:!1,prevItem:{title:"Spring - @Autowired\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294 \uac78\uae4c?",permalink:"/2020/07/04/how-does-autowired-work"},nextItem:{title:"Spring Boot \uc608\uc81c \uac1c\uc120\ud558\uae30 (2)",permalink:"/2020/02/20/improve-spring-boot-example-2"}},o={authorsImageUrls:[]},d=[{value:"AWS SES\ub780?",id:"aws-ses\ub780",level:4},{value:"\uc0ac\uc804 \uc900\ube44",id:"\uc0ac\uc804-\uc900\ube44",level:4},{value:"\uacc4\uc815 \uc2e0\uccad",id:"\uacc4\uc815-\uc2e0\uccad",level:5},{value:"\ubb38\uc11c",id:"\ubb38\uc11c",level:5},{value:"\uc0ac\uc6a9\ubc29\ubc95",id:"\uc0ac\uc6a9\ubc29\ubc95",level:4},{value:"\uc804\uc1a1 API",id:"\uc804\uc1a1-api",level:5},{value:"\uc54c\ub9bc",id:"\uc54c\ub9bc",level:5},{value:"\uc2dc\ubbac\ub808\uc774\ud130",id:"\uc2dc\ubbac\ub808\uc774\ud130",level:5},{value:"\uc8fc\uc758 \ud574\uc57c\ud560 \uc810",id:"\uc8fc\uc758-\ud574\uc57c\ud560-\uc810",level:4},{value:"\ud3c9\ud310",id:"\ud3c9\ud310",level:5},{value:"\ubc18\uc1a1\uc728, \uc218\uc2e0\uac70\ubd80\uc728",id:"\ubc18\uc1a1\uc728-\uc218\uc2e0\uac70\ubd80\uc728",level:5},{value:"\uac1c\ubc1c,\uc6b4\uc601\ud558\uba74\uc11c \uc5bb\ub294 \ud301",id:"\uac1c\ubc1c\uc6b4\uc601\ud558\uba74\uc11c-\uc5bb\ub294-\ud301",level:4},{value:"\uc544\uc26c\uc6b4 \uc810",id:"\uc544\uc26c\uc6b4-\uc810",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"AWS SES \uc0ac\uc6a9 \ud6c4\uae30\uc774\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"aws-ses\ub780",children:"AWS SES\ub780?"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"Amazon Simple Email Service(SES)"}),"\ub294 AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud074\ub77c\uc6b0\ub4dc \uae30\ubc18 \uc774\uba54\uc77c \ubc1c\uc1a1 \uc11c\ube44\uc2a4\uc774\ub2e4."]}),"\n",(0,l.jsx)(s.h4,{id:"\uc0ac\uc804-\uc900\ube44",children:"\uc0ac\uc804 \uc900\ube44"}),"\n",(0,l.jsx)(s.h5,{id:"\uacc4\uc815-\uc2e0\uccad",children:"\uacc4\uc815 \uc2e0\uccad"}),"\n",(0,l.jsxs)(s.p,{children:["\uc778\uc2a4\ud134\uc2a4\ub97c \ud558\ub098 \ud560\ub2f9\ubc1b\ub294 \uac83\ucc98\ub7fc SES\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \uc2e0\uccad\uc744 \ud574\uc57c \ub418\ub294\ub370, \uc815\uc0c1\uc801\uc73c\ub85c \uc2e0\uccad\uc774 \ub418\uc5c8\ub2e4\uba74 \uc774 \uc0c1\ud0dc\uac00 ",(0,l.jsx)(s.strong,{children:"\uc0cc\ub4dc\ubc15\uc2a4"})," \uc0c1\ud0dc\uc774\ub2e4. \ub9cc\uc57d, \uc2e4\uc11c\ube44\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,l.jsx)(s.strong,{children:"\uc0cc\ub4dc\ubc15\uc2a4"})," \uc0c1\ud0dc\ub97c \ubc97\uc5b4\ub098\uc57c\ud55c\ub2e4."]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\uc0cc\ub4dc\ubc15\uc2a4 \uc0c1\ud0dc\ub294 \uc77c\uc77c(200\uac74), \ucd08\ub2f9(1\uac74) \ubc1c\uc1a1 \uc81c\ud55c\uc774 \uac78\ub824\uc788\uace0, \ub4f1\ub85d\ub41c \uc774\uba54\uc77c\uc5d0\ub9cc \uba54\uc77c \uc804\uc1a1\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(s.h5,{id:"\ubb38\uc11c",children:"\ubb38\uc11c"}),"\n",(0,l.jsx)(s.p,{children:"\ub2f9\uc5f0\ud560 \uc218 \ub3c4 \uc788\uaca0\uc9c0\ub9cc, SES\uc5d0 \ub300\ud55c \uac00\uc774\ub4dc \ubb38\uc11c\ub97c \uaf2d \uc77d\uc5b4\ubcf4\uace0 \uc9c4\ud589\ud558\uae38 \uad8c\ud55c\ub2e4. \uc774\uba54\uc77c \ub3c4\uba54\uc778 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0ac\ub78c\ub3c4 \uc774\uba54\uc77c \ub3c4\uba54\uc778 \uc9c0\uc2dd \uc2b5\ub4dd\ud560 \uc218 \uc788\uc744 \ubfd0\ub9cc \uc544\ub2c8\ub77c SES \uae30\ub2a5 \uc219\uc9c0\ub3c4\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)(s.h4,{id:"\uc0ac\uc6a9\ubc29\ubc95",children:"\uc0ac\uc6a9\ubc29\ubc95"}),"\n",(0,l.jsx)(s.h5,{id:"\uc804\uc1a1-api",children:"\uc804\uc1a1 API"}),"\n",(0,l.jsx)(s.p,{children:"SMTP \uc778\ud130\ud398\uc774\uc2a4 \ub610\ub294 AWS SDK, HTTP API\ud615\ud0dc\ub85c \uc81c\uacf5\ud55c\ub2e4."}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/send-using-smtp-java.html",children:"SMTP \uc778\ud130\ud398\uc774\uc2a4"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/send-using-sdk-java.html",children:"AWS SDK"})}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u203b AWS SDK\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc774\uba54\uc77c \ud15c\ud50c\ub9bf\uc744 \uc800\uc7a5\ud574\ub450\uace0 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc874\uc7ac\ud55c\ub2e4."}),"\n",(0,l.jsx)(s.h5,{id:"\uc54c\ub9bc",children:"\uc54c\ub9bc"}),"\n",(0,l.jsxs)(s.p,{children:["\uba54\uc77c\uc740 \uc218\uc2e0\uac70\ubd80, \ubc18\uc1a1 \ub4f1\uc758 \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4. \uc774\ub97c \ubc1b\uae30 \uc704\ud55c \uc218\ub2e8(\ubc29\uc2dd)\uc73c\ub85c\ub294 ",(0,l.jsx)(s.strong,{children:"AWS SNS"})," \ub610\ub294 ",(0,l.jsx)(s.strong,{children:"\ubcc4\ub3c4\uc758 email"}),"\ub97c \ub4f1\ub85d\ud558\uc5ec \ubc1b\uc544\ubcfc \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/monitor-sending-activity-using-notifications-email.html",children:"\uc774\uba54\uc77c \uc54c\ub9bc"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/notification-contents.html",children:"AWS SNS \uc54c\ub9bc"})}),"\n"]}),"\n",(0,l.jsx)(s.h5,{id:"\uc2dc\ubbac\ub808\uc774\ud130",children:"\uc2dc\ubbac\ub808\uc774\ud130"}),"\n",(0,l.jsxs)(s.p,{children:["\uc54c\ub9bc\uc5d0 \ub300\ud55c \ud6c4\ucc98\ub9ac\uae30\ub97c \ube60\ub974\uac8c \ud14c\uc2a4\ud2b8\ud558\uae30 \uc704\ud574 \uc2dc\ubbac\ub808\uc774\ud130\ub97c \uc81c\uacf5\ud55c\ub2e4. \ud2b9\uc815 \uba54\uc77c\uc73c\ub85c \uba54\uc77c\uc744 \uc804\uc1a1\ud558\uba74 \uac01\uac01\uc758 \uc2dc\ub098\ub9ac\uc624\ub97c \ud14c\uc2a4\ud2b8\ud574\ubcfc \uc218 \uc788\ub2e4. \uc608\ub97c \ub4e4\uba74, ",(0,l.jsx)(s.code,{children:"bounce@simulator.amazonses.com"}),"\uc5d0 \uba54\uc77c\uc744 \uc804\uc1a1\ud558\uba74 \ubc18\uc1a1 \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\ucc38\uace0: ",(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/send-email-simulator.html",children:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/send-email-simulator.html"})]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"\uc8fc\uc758-\ud574\uc57c\ud560-\uc810",children:"\uc8fc\uc758 \ud574\uc57c\ud560 \uc810"}),"\n",(0,l.jsx)(s.h5,{id:"\ud3c9\ud310",children:"\ud3c9\ud310"}),"\n",(0,l.jsxs)(s.p,{children:["\ud3c9\ud310\uc774\ub77c\ub294 \uac1c\ub150\uc774 \uc874\uc7ac\ud558\uc5ec, \ud3c9\ud310 \ub0ae\uc544\uc9c0\uba74 \ud560\ub2f9\ubc1b\uc740 \uc77c\uc77c/\ucd08\ub2f9 \ubc1c\uc1a1 \ud69f\uc218\uac00 \ub0ae\uc544\uc9c8 \uc218 \uc788\uace0 \ub098\uc911\uc5d0\ub294 \uacc4\uc815\uc774 \uc815\uc9c0\ub420 \uc218 \uc788\ub2e4. \ud3c9\ud310\uc5d0 \ub300\ud55c \uad00\ub9ac\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \ub418\uc5b4\uc57c \ud558\uba70, \uc774\uc5d0 \ub300\ud55c \ub300\ucc45\uc744 \uac15\uad6c\ud574\uc57c \ud55c\ub2e4. \uadf8\ub807\ub2e4\ubcf4\ub2c8, ",(0,l.jsx)(s.strong,{children:"\uc54c\ub9bc\uc5d0 \ub300\ud55c \ud6c4\ucc98\ub9ac\ub294 \ud544\uc218"}),"\ub77c\uace0 \ubcfc \uc218 \uc788\ub2e4."]}),"\n",(0,l.jsx)(s.h5,{id:"\ubc18\uc1a1\uc728-\uc218\uc2e0\uac70\ubd80\uc728",children:"\ubc18\uc1a1\uc728, \uc218\uc2e0\uac70\ubd80\uc728"}),"\n",(0,l.jsxs)(s.p,{children:["\ud3c9\ud310\uc740 \ubc18\uc1a1\uc728\uacfc \uc218\uc2e0\uac70\ubd80\uc728\ub85c \uc778\ud574 \uc815\ud574\uc9c0\ub294\ub370 \uad8c\uc7a5\uc0ac\ud56d\uc73c\ub85c\ub294 ",(0,l.jsx)(s.strong,{children:"\ubc18\uc1a1\uc728\ub294 5%\ubbf8\ub9cc"}),", ",(0,l.jsx)(s.strong,{children:"\uc218\uc2e0\uac70\ubd80\uc728\ub294 0.1%\ubbf8\ub9cc"})," \uc744 \uc720\uc9c0\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c \ud55c\ub2e4. \uc774\ub97c \ud3ec\ud568\ud574 ",(0,l.jsx)(s.a,{href:"https://docs.aws.amazon.com/ko_kr/ses/latest/DeveloperGuide/best-practices.html",children:"\ubaa8\ubc94 \uc0ac\ub840"}),"\ub294 \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uba74 \uc88b\ub2e4."]}),"\n",(0,l.jsx)(s.h4,{id:"\uac1c\ubc1c\uc6b4\uc601\ud558\uba74\uc11c-\uc5bb\ub294-\ud301",children:"\uac1c\ubc1c,\uc6b4\uc601\ud558\uba74\uc11c \uc5bb\ub294 \ud301"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\uc2e4\uc11c\ube44\uc2a4\ub85c \uac00\uae30\uae4c\uc9c0 \uc0dd\uac01\ubcf4\ub2e4 ",(0,l.jsx)(s.strong,{children:"\uc2e4\uc81c \ubc18\uc1a1/\uc218\uc120\uac70\ubd80 \ucc98\ub9ac\ub97c \uc720\ub3c4\ud558\uae30\uac00 \uc5b4\ub824\uc6e0\ub2e4."})," (\ubc29\ubc95\uc774 \uc798 \ubabb\ub41c \uac83\uc77c \uc218\ub3c4 \uc788\uac9f\uc9c0\ub9cc) \uc2a4\ud338\ucc98\ub9ac, \uc790\ub3d9\uc751\ub2f5 \ub4f1\ub4f1\uc744 \uc124\uc815\ud574\ub3c4 \uc815\uc0c1\uc801\uc73c\ub85c \uba54\uc77c\uc774 \uc804\uc1a1\ub418\ub294 \uac83\uc73c\ub85c \ucc98\ub9ac\ub418\uc5c8\ub2e4. \uadf8\ub798\uc11c \uc2e4\uc11c\ube44\uc2a4 \ubc18\uc601\uae4c\uc9c0 \uc2dc\ubbac\ub808\uc774\ud130 \ud14c\uc2a4\ud2b8\uc640 \uc81c\ud55c\ub41c \uc774\uba54\uc77c\uc744 \uc800\uc7a5\ud574\ub458 \ubcc4\ub3c4\uc758 \ud14c\uc774\ube14\uc744 \ub9cc\ub4e4\uc5b4 \ud544\ud130\ub9c1\uc774 \uc798\ub418\ub294\uc9c0 \uc815\ub3c4\uc758 \ud14c\uc2a4\ud2b8\ub9cc \uc9c4\ud589\ud588\uc5c8\ub2e4."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Google Gmail\uacbd\uc6b0, \ubc18\uc1a1/\uc218\uc120\uac70\ubd80 \ub370\uc774\ud130\ub97c \uc81c\uacf5\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"Yahoo \uc774\uba54\uc77c\uc5d0 \ub300\ud55c \ubc18\uc1a1\uc728\uc774 \uaf64 \ub192\uc558\ub2e4."})," (\ucd08\ubc18 \ub370\uc774\ud130\ub85c\ub9cc \ubd24\uc744 \ub54c, 50%\uc815\ub3c4 \ub418\uc5c8\ub2e4.) \ud655\uc2e4\ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc ",(0,l.jsx)(s.a,{href:"https://blog.zerobounce.net/2019/03/28/yahoo-emails-bouncing-here-is-why-and-what-you-can-do/",children:"2019\ub144 3\uc6d4\ucbe4 \uad00\ub828 \ub0b4\uc6a9"}),"\uc744 \ubcfc \uc218 \uc788\ub294\ub370, \uc7a5\uae30 \ubbf8\uc0ac\uc6a9 \uc720\uc800\uc5d0 \ub300\ud574 \ud734\uba3c\uacc4\uc815\uc73c\ub85c \uc804\ud658\ub418\uc5b4 \ub098\ud0c0\ub09c \ud604\uc0c1\uc73c\ub85c \ucd94\uce21\ub41c\ub2e4. \uc774\ub85c \uc778\ud574, \uac01\uc885 \ud3ec\ub7fc\uc774\ub098 stackoverflow\uc5d0\ub3c4 \uc5ec\ub7ec \uc9c8\uc758\uc751\ub2f5\uc774 \uc624\uac00\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4. \uadf8\ub798\uc11c \uc6b0\ub9ac\uac00 \ud560 \uc218 \uc788\ub294 \ucc98\ub9ac\ub294 \ub2e4\ub978 \uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud558\ub3c4\ub85d \uc720\ub3c4\ud558\uac70\ub098 \uc720\ud6a8\ud55c \uc774\uba54\uc77c\uc778\uc9c0, \ubc18\uc1a1\uc728\uc774 \ub192\uc740 \uc774\uba54\uc77c\uc774 \uc54c \uc218 \uc788\ub294 \ubcc4\ub3c4 API\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc18\uc1a1\uc728\uc744 \ub0ae\ucdb0\uc57c \ud560 \uac83\uc774\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h4,{id:"\uc544\uc26c\uc6b4-\uc810",children:"\uc544\uc26c\uc6b4 \uc810"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"\ud3c9\ud310\uc774 \uacc4\uc0b0\ub418\ub294 \ub0a0\uc9dc \ubc94\uc704 \uae30\uc900\uc774 \uba85\ud655\ud558\uc9c0 \uc54a\ub2e4."})," ",(0,l.jsx)(s.code,{children:"AWS \ucf58\uc194 > SES > \ud3c9\ud310 \ub300\uc2dc\ubcf4\ub4dc"}),"\uc5d0\uc11c \ubc18\uc1a1\uc728, \uc218\uc2e0\uac70\ubd80\uc728\uc744 \ubcfc \uc218 \uc788\ub294\ub370, \uae30\uc900 \ub0a0\uc9dc\ub3c4 \ub2e4\ub974\uace0 \uc5b8\uc81c \uae30\uc900\uc774 \ubc14\ub00c\ub294\uc9c0\ub3c4 \uc54c \uc218\uac00 \uc5c6\ub2e4."]}),"\n",(0,l.jsxs)(s.li,{children:["\ub9e4\ubc88 \ucf58\uc194\uc5d0 \ub4e4\uc5b4\uac00\uc11c \ubcf4\uc790\ub2c8 \uadc0\ucc28\ub2c8\uc998\uc774 \uc0dd\uaca8\uc11c ",(0,l.jsx)(s.strong,{children:"\ubc18\uc1a1\uc728, \uc218\uc2e0\uac70\ubd80\uc728\uc744 \uc54c\uae30 \uc704\ud55c API\ub97c \ucc3e\uc544\ubd24\uc9c0\ub9cc \uc5c6\uc5c8\ub2e4."})," \uadf8\ub098\ub9c8 2\uc8fc\uac04\uc5d0 \ubc1c\uc1a1\uac74 \uc218, \ubc18\uc1a1\uac74 \uc218, \uc218\uc2e0\uac70\ubd80\uac74 \uc218\ub97c \uc54c\uc218 \uc788\ub294 \ub370\uc774\ud130\uac00 \uc788\uc5b4\uc11c \uc774\ub97c \uac00\uacf5\ud558\uc5ec \uc8fc\uae30\uc801\uc73c\ub85c \uc2ac\ub799\uc73c\ub85c \uc54c\ub9bc\uc744 \uc804\uc1a1\ud558\uace0 \uc788\ub2e4."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"Alt slack message",src:n(68988).A+"",width:"1146",height:"220"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},68988:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/slack-7b475dafce21fb4e1a00255629ddf765.png"},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var l=n(96540);const i={},r=l.createContext(i);function t(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);