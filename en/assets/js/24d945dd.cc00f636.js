"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[8457],{38783:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));a(95657);const r={title:"serverless-image-handler",slug:"2022/04/11/serverless-image-handler",date:new Date("2022-04-11T20:00:00.000Z"),category:["aws"],tags:["aws","aws-solution","serverless","on-the-fly","image"]},s=void 0,i={permalink:"/en/2022/04/11/serverless-image-handler",source:"@site/blog/serverless-image-handler.md",title:"serverless-image-handler",description:"Serverless Image Handler\ub294 AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud558\uace0 \uac80\uc99d\ub41c \uc11c\ube44\uc2a4\ub4e4\uc744 \uc870\ud569\ud558\uc5ec \ub9cc\ub4e4\uc5b4\uc9c4 \uc194\ub8e8\uc158(?)\uc785\ub2c8\ub2e4.",date:"2022-04-11T20:00:00.000Z",formattedDate:"April 11, 2022",tags:[{label:"aws",permalink:"/en/tags/aws"},{label:"aws-solution",permalink:"/en/tags/aws-solution"},{label:"serverless",permalink:"/en/tags/serverless"},{label:"on-the-fly",permalink:"/en/tags/on-the-fly"},{label:"image",permalink:"/en/tags/image"}],readingTime:5.435,hasTruncateMarker:!0,authors:[],frontMatter:{title:"serverless-image-handler",slug:"2022/04/11/serverless-image-handler",date:"2022-04-11T20:00:00.000Z",category:["aws"],tags:["aws","aws-solution","serverless","on-the-fly","image"]},prevItem:{title:"SpringBoot \ud14c\uc2a4\ud2b8 \uac1c\uc120\ud574\ubcf4\uae30 (feat. mock)",permalink:"/en/2023/04/01/improve-spring-integration-test-for-mock"},nextItem:{title:"\ube14\ub85c\uadf8 \ub9c8\uc774\uadf8\ub808\uc774\uc158 (feat. docusaurus)",permalink:"/en/2022/02/22/blog-migrate-to-docusaurus-from-hexo"}},o={authorsImageUrls:[]},m=[{value:"\uc544\ud0a4\ud14d\ucc98",id:"\uc544\ud0a4\ud14d\ucc98",level:3},{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:3},{value:"\uc0ac\uc6a9\ubc29\ubc95",id:"\uc0ac\uc6a9\ubc29\ubc95",level:3},{value:"Default \ubc29\uc2dd",id:"default-\ubc29\uc2dd",level:4},{value:"Thumbor \ubc29\uc2dd",id:"thumbor-\ubc29\uc2dd",level:4},{value:"\uc0ac\uc6a9 \ud6c4\uae30",id:"\uc0ac\uc6a9-\ud6c4\uae30",level:3},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:4}],u={toc:m},p="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Serverless Image Handler\ub294 AWS\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud558\uace0 \uac80\uc99d\ub41c \uc11c\ube44\uc2a4\ub4e4\uc744 \uc870\ud569\ud558\uc5ec \ub9cc\ub4e4\uc5b4\uc9c4 \uc194\ub8e8\uc158(?)\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc6b4\uc601\ud558\ub294 \uc11c\ube44\uc2a4\uc5d0 \uc885\uc18d\uc801\uc778 \uae30\ub2a5\ub4e4\uc774 \uc544\ub2c8\ub77c\uba74 \ud55c\ubc88 \ucc3e\uc544\ubcf4\uba74 \uc774\ubbf8 \ub9cc\ub4e4\uc5b4\uc838 \uc788\uc744 \ubc95\ud55c \uac83\ub4e4\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud55c\ubc88 \uc11c\uce6d\ud574\ubcf4\uba74 \uc88b\uc744 \ub4ef \ud55c\ub370\uc694.\n\uadf8 \uc608\ub85c, \ub85c\uae45 \uc911\uc559\ud654, \uc81c\uac00 \uc0ac\uc6a9\ud574\ubcf8 \uc11c\ubc84\ub9ac\uc2a4 \uc774\ubbf8\uc9c0 \ud578\ub4e4\ub7ec \ub4f1\ub4f1\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-solutions/"},"https://github.com/aws-solutions/")),(0,n.kt)("h3",{id:"\uc544\ud0a4\ud14d\ucc98"},"\uc544\ud0a4\ud14d\ucc98"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/aws-solutions/serverless-image-handler/main/architecture.png",alt:"Overview"}),"\n< \ucd9c\ucc98: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-solutions/serverless-image-handler"},"https://github.com/aws-solutions/serverless-image-handler")," >"),(0,n.kt)("p",null,"\ud574\ub2f9 \uae30\ub2a5\uc740 \ub9d0\uadf8\ub300\ub85c ",(0,n.kt)("strong",{parentName:"p"},"\uc11c\ubc84\ub9ac\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc774\ubbf8\uc9c0\ub97c \uc694\uccad\uc2dc\uc5d0 \uc989\uc2dc \ud578\ub4e4\ub9c1\ud574\uc8fc\ub294 \uc194\ub8e8\uc158"),"\uc785\ub2c8\ub2e4. \uc81c\uac00 \ub9e1\uace0 \uc788\ub294 \uc11c\ube44\uc2a4\ub294 \uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ub97c \ub2e4\uc591\ud55c \ud06c\uae30\ub85c \uc774\ubbf8\uc9c0\ub97c \ub178\ucd9c\uc2dc\ud0ac \uc218 \uc788\uc5b4\uc57c \ud588\ub294\ub370\uc694.\n\ubbf8\ub9ac \ub9cc\ub4dc\ub294 \ubc29\ubc95\ub3c4 \uc788\uc9c0\ub9cc \uc774\ub294 \uc815\uc801\uc774\uace0, \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc774 \ub2e4\uc18c \ubd88\ud3b8\ud558\uba70, \uad00\ub9ac\ud558\ub294 \uce21\uba74\uc5d0\uc11c \ub9cc\uc871\uc2a4\ub7fd\uc9c0 \ubabb \ud588\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774\uac83 \uc774\uc678\uc5d0\ub3c4 CloudFront + Lambda@Edge\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\ub3c4 \uc788\uc73c\ub2c8 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/"},"https://aws.amazon.com/blogs/networking-and-content-delivery/resizing-images-with-amazon-cloudfront-lambdaedge-aws-cdn-blog/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/daangn/lambda-edge%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-on-the-fly-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95-f4e5052d49f3"},"https://medium.com/daangn/lambda-edge%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-on-the-fly-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95-f4e5052d49f3"))),(0,n.kt)("h3",{id:"\uae30\ub2a5"},"\uae30\ub2a5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uc774\ubbf8\uc9c0\ub97c \ub2e4\uc591\ud55c \ud615\ud0dc\ub85c \ud578\ub4e4\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uae30\ub2a5\uc740 \ub7f0\ud0c0\uc784 \ud658\uacbd\uc774 Nodejs\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c0\uba70, Nodejs\uc5d0\uc11c \uc774\ubbf8\uc9c0 \ucc98\ub9ac\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 ",(0,n.kt)("inlineCode",{parentName:"li"},"sharp"),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub9ac\uc0ac\uc774\uc9d5"),(0,n.kt)("li",{parentName:"ul"},"\ud3ec\ub9f7 \ubcc0\uacbd"),(0,n.kt)("li",{parentName:"ul"},"\ud004\ub9ac\ud2f0 \ubcc0\uacbd"),(0,n.kt)("li",{parentName:"ul"},"..."))),(0,n.kt)("li",{parentName:"ol"},"\uc774\ubbf8\uc9c0 URL \ubcc0\uc870",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ub9cc\uc57d \uc6b0\ub9ac\uac00 300x300 \uc0ac\uc774\uc988\uc758 \uc774\ubbf8\uc9c0\ub97c \uc81c\uacf5\ud558\uace0 \uc774\ub97c \uc5b4\ub290 \ub204\uad6c\ub098 \ubcc0\uacbd\ud574\uc11c \uc694\uccad\ud560 \uc218 \uc788\ub2e4\uba74 \uc5b4\ubdf0\uc9d5 \ub300\uc0c1\uc774 \ub420 \uc218 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"300x301, 300x302, 300x303, 300x... \ud83d\ude31"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"signature")," \ub77c\ub294 \ud30c\ub77c\ubbf8\ud130\ub97c \ubc1b\uc544\uc11c \uc774\ub97c \ubcc0\uc870\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. (\ud574\ub2f9 \uae30\ub2a5\uc740 secret-manager\ub97c \ud1b5\ud574 \ubcc4\ub3c4\uc758 \ud0a4\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.)"))),(0,n.kt)("li",{parentName:"ol"},"\uc774\ubbf8\uc9c0 \uc790\ub974\uae30, Amazone Rekognition\uc744 \ud65c\uc6a9\ud55c \ubd84\uc11d \ub4f1\ub4f1\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"...")),(0,n.kt)("h3",{id:"\uc0ac\uc6a9\ubc29\ubc95"},"\uc0ac\uc6a9\ubc29\ubc95"),(0,n.kt)("h4",{id:"default-\ubc29\uc2dd"},"Default \ubc29\uc2dd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'const imageRequest = JSON.stringify({\n    bucket: "<myImageBucket>",\n    key: "<myObjectKey>",\n    edits: { \n        resize: {\n            width: ...,\n            height: ...\n        }\n    }\n});\nconst url = `${CloudFrontUrl}/${btoa(imageRequest)}`;\n\n<img src=`${url}` />\n')),(0,n.kt)("p",null,"\uc704 \ubc29\uc2dd\uc740 url\uc744 json\ubb38\uc790\uc5f4\uc744 base64\uc73c\ub85c \uc778\ucf54\ub529\ud574\uc11c \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c json \uc548\uc5d0\ub294 bucket, object key, sharp \uc815\ubcf4(?) \ub4f1\uc744 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\nsharp \uad00\ub828\ub41c \ub0b4\uc6a9\uc740 \uad00\ub828 \ubb38\uc11c\ub97c \ucc38\uace0\ud574\uc11c \uc801\uc6a9\ud558\uba74 \uc190\uc27d\uac8c \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sharp.pixelplumbing.com/"},"https://sharp.pixelplumbing.com/"))),(0,n.kt)("h4",{id:"thumbor-\ubc29\uc2dd"},"Thumbor \ubc29\uc2dd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"const url = `${CloudFrontUrl}/filter:format(webp)/${object_key}`;\n\n<img src=`${url}` />\n")),(0,n.kt)("p",null,"\uc704 \ubc29\uc2dd\uc740 \uae30\uc874 url\uacfc \ube44\uc2b7\ud558\uac8c \uc720\uc9c0\ud558\uba74\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\ubc95 \uc911\uc5d0 \ud558\ub098\ub85c, path \uc911\uac04\uc5d0 ",(0,n.kt)("inlineCode",{parentName:"p"},"filters:~~~"),"\ub97c \ub123\uc5b4 \uc635\uc158\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud399 \ucc38\uace0: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/solutions/latest/serverless-image-handler/thumbor-filters.html"},"https://docs.aws.amazon.com/solutions/latest/serverless-image-handler/thumbor-filters.html"))),(0,n.kt)("h3",{id:"\uc0ac\uc6a9-\ud6c4\uae30"},"\uc0ac\uc6a9 \ud6c4\uae30"),(0,n.kt)("h4",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CloudFormation\uc73c\ub85c \uc81c\uacf5\ub418\uae30 \ub54c\ubb38\uc5d0 \uc190\uc27d\uac8c \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AWS \uc194\ub8e8\uc158\uc758 \uacf5\ud1b5\uc801\uc778 \uc7a5\uc810\uc774\uaca0\uc9c0\ub9cc, cdk\ub97c \ud65c\uc6a9\ud574 CloudFormation\uc73c\ub85c \ube4c\ub4dc\ud558\uc5ec \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CloudFront\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ud55c\ubc88 \uc694\uccad\ub418\uba74 \uce90\uc2dc\ub418\uc5b4 \ube44\uc6a9 \uc808\uac10\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CloudFront\ub77c\ub294 CDN \uc11c\ube44\uc2a4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub584\ubb38\uc5d0(\uc0ac\uc2e4 \ub204\uac00 CloudFront\uc5c6\uc774 S3\ub97c \ubc14\ub85c \ubd99\uc774\uaca0\ub0d0\ub9cc\uc740...) \uc751\ub2f5\uc774 \uce90\uc2f1\ub418\uc5b4 \uccab \uc694\uccad\uc774\uc678\uc5d0\ub294 \ube44\uc6a9\uc774 \ub9ce\uc774 \uc808\uac10\ub429\ub2c8\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the fly \ubc29\uc2dd\uc774\uae30 \ub54c\ubb38\uc5d0 \uad00\ub9ac\uac00 \uc6a9\uc774\ud569\ub2c8\ub2e4."))),(0,n.kt)("h4",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub78c\ub2e4 \uc790\uccb4\uac00 \uc694\uccad/\uc751\ub2f5\uc5d0 \ub300\ud55c \ud398\uc774\ub85c\ub4dc\uac00 6MB \uc81c\ud55c\uc774 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud070 \uc774\ubbf8\uc9c0\ub97c \uc804\ub2ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"base64\ub85c \uc778\ucf54\ub529\ud574\uc11c \uc804\ub2ec\ud558\uae30 \ub54c\ubb38\uc5d0 6MB\ubcf4\ub2e4 \ub354 \uc791\uc544\uc57c \ud569\ub2c8\ub2e4. \ud83d\ude25"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ub2e4\uc18c \uacfc\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc5b4\ub290 \uac83\uc774\ub098 \uadf8\ub807\uc9c0\ub9cc \ub2e8\uc21c\ud558\uac8c \uc4f0\uace0\uc790\ud55c\ub2e4\uba74 \uc870\uae08 \uacfc\ud560 \uc218 \uc788\ub2e4."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"6.0.0 \ubc84\uc804\uae4c\uc9c4 gif \ub300\uc751\uc774 \uc548\ub41c\ub2e4."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sharp"),"\uac00 ",(0,n.kt)("inlineCode",{parentName:"li"},"0.30.0")," \ubc84\uc804\ubd80\ud130 gif\ub97c \uc9c0\uc6d0\ud558\uae30 \uc2dc\uc791\ud588\uc9c0\ub9cc, ",(0,n.kt)("inlineCode",{parentName:"li"},"0.27.0")," \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub300\uc751\uc774 \uc548\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"gif\ub97c \uc9c0\uc6d0\ud558\ub824\uba74 \uacb0\uad6d\uc5d4 \ubcc4\ub3c4 \ube4c\ub4dc\ub97c \uac70\uccd0\uc11c \uc0ac\uc6a9\ud574\uc57c\ud568")))),(0,n.kt)("p",null,"\uacb0\uad6d, 1,3\ubc88 \ub2e8\uc810 \ub54c\ubb38\uc5d0 \ub098\uc758 \uc11c\ube44\uc2a4\ub294 api gateway\uc5d0 \ubcc4\ub3c4 path\ub97c \ucd94\uac00 \ubc0f \uc9c1\uc811 S3 \uc11c\ube44\uc2a4\ub97c \uc5f0\uacb0\ud574\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);