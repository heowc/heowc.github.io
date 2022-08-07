"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[8148],{89598:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);const l=e=>{let{id:t="demo-terminal",command:l,respond:p,prompt:o="$",windowTitle:s="bash",minHeight:i="100px",onCompleteDelay:r=0}=e;return(0,n.useEffect)((()=>{const e=a(72210);a(47215),a(65831);let n=new e("#"+t);n.openApp("terminal",{minHeight:i,windowTitle:s,promptString:o});let u=l.split(";");for(let t=0;t<u.length;t++)n.command(u[t],{onCompleteDelay:r});n.respond(p),n.end()})),n.createElement(n.Fragment,null,n.createElement("div",{id:t,style:{minHeight:i}}),n.createElement("br",null),n.createElement("br",null))}},68779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905)),p=a(89598);const o={title:"Java\uc5d0\uc11c iOS Push \uc0bd\uc9c8\uae30",slug:"2019/05/13/ios-push-to-java",date:new Date("2019-05-13T19:55:41.000Z"),category:["java"],tags:["java","ios-push","apns"]},s=void 0,i={permalink:"/en/2019/05/13/ios-push-to-java",source:"@site/blog/ios-push-to-java.mdx",title:"Java\uc5d0\uc11c iOS Push \uc0bd\uc9c8\uae30",description:"\uc9c1\uc811 APNs\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uacbd\ud5d8\ud55c \uc0bd\uc9c8\uae30\uc774\ub2e4.",date:"2019-05-13T19:55:41.000Z",formattedDate:"May 13, 2019",tags:[{label:"java",permalink:"/en/tags/java"},{label:"ios-push",permalink:"/en/tags/ios-push"},{label:"apns",permalink:"/en/tags/apns"}],readingTime:2.535,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Java\uc5d0\uc11c iOS Push \uc0bd\uc9c8\uae30",slug:"2019/05/13/ios-push-to-java",date:"2019-05-13T19:55:41.000Z",category:["java"],tags:["java","ios-push","apns"]},prevItem:{title:"2019 \ucee8\ud2b8\ub9ac\ubdf0\ud1a4 (feat. Armeria)",permalink:"/en/2019/11/04/2019-contributon-feat-armeria"},nextItem:{title:"Spring Camp 2019 \ud6c4\uae30",permalink:"/en/2019/04/28/spring-camp-2019-review"}},r={authorsImageUrls:[]},u=[{value:"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0...",id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0",level:3},{value:"\ubc30\uacbd",id:"\ubc30\uacbd",level:3},{value:"APNs \uc774\ub780?",id:"apns-\uc774\ub780",level:3},{value:"Legacy Push",id:"legacy-push",level:4},{value:"Push",id:"push",level:4},{value:"Legacy Push \uc774\uc6a9\ud558\uae30",id:"legacy-push-\uc774\uc6a9\ud558\uae30",level:3},{value:"Push \uc774\uc6a9\ud558\uae30",id:"push-\uc774\uc6a9\ud558\uae30",level:3}],h={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc9c1\uc811 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/APNSOverview.html#//apple_ref/doc/uid/TP40008194-CH8-SW1"},"APNs"),"\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uacbd\ud5d8\ud55c \uc0bd\uc9c8\uae30\uc774\ub2e4.")),(0,l.kt)("h3",{id:"\uc2dc\uc791\ud558\uae30-\uc804\uc5d0"},"\uc2dc\uc791\ud558\uae30 \uc804\uc5d0..."),(0,l.kt)("p",null,"Push(Android, iOS \ub4f1)\ub97c \uace0\ub824\ud55c\ub2e4\uba74 \uace0\ubbfc\ub9d0\uace0 ",(0,l.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"FCM(Firebase Cloud Messaging)"),"\uc744 \uc0ac\uc6a9\ud558\uc790. Android \ubfd0\ub9cc \uc544\ub2c8\ub77c \ub2e4\ub978 \ud50c\ub7ab\ud3fc\ub3c4 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("h3",{id:"\ubc30\uacbd"},"\ubc30\uacbd"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.otherlevels.com/"},"OtherLevels"),"\uc774\ub77c\ub294 \uba54\uc2dc\uc9d5 \ud50c\ub7ab\ud3fc\uc744 \uc0ac\uc6a9 \uc911\uc5d0 \uc788\uc73c\uba70, \uc5ec\ub7ec\uac00\uc9c0 \uc774\uc720(?)\ub85c \uc774\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc9c1\uc811 \uba54\uc2dc\uc9d5 \uc2dc\uc2a4\ud15c\uc744 \uad6c\ucd95\ud558\ub824\uace0 \ud55c\ub2e4. \uc778\uc218\uc778\uacc4 \ubc1b\uc740\ubc14\ub85c\ub294 Android, iOS \uac01\uac01 \ud50c\ub7ab\ud3fc\ubcc4\ub85c \ubcc4\ub3c4\ub85c \ucc98\ub9ac\ud574\uc57c \ud558\ub294 \uc0c1\ud669\uc774\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\uc55e\uc5d0\uc11c \uc5b8\uae09\ud588\ub358 \uac83 \ucc98\ub7fc ",(0,l.kt)("strong",{parentName:"p"},"APNs"),"\ub9cc \ub2e4\ub8f0 \uc608\uc815\uc774\ub2e4.")),(0,l.kt)("h3",{id:"apns-\uc774\ub780"},"APNs \uc774\ub780?"),(0,l.kt)("p",null,"APNs(Apple Push Notification Service)\ub294 Apple Device\uc5d0 Push\ub97c \ubcf4\ub0b4\uc904 \uc218 \uc788\ub294 \uc11c\ube44\uc2a4\uc774\ub2e4. \uc9c0\uc6d0\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,l.kt)("h4",{id:"legacy-push"},"Legacy Push"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TLS(SSL) \uc18c\ucf13 \ud1b5\uc2e0"),(0,l.kt)("li",{parentName:"ul"},"Production(gateway.push.apple.com:2195) / Development(gateway.sandbox.push.apple.com:2195)")),(0,l.kt)("h4",{id:"push"},"Push"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HTTP/2 \ud1b5\uc2e0"),(0,l.kt)("li",{parentName:"ul"},"Production(api.push.apple.com:443) / Development(api.sandbox.push.apple.com:443)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HTTP/1.1 \ud1b5\uc2e0\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,l.kt)("h3",{id:"legacy-push-\uc774\uc6a9\ud558\uae30"},"Legacy Push \uc774\uc6a9\ud558\uae30"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/fernandospr/javapns-jdk16"},"fernandospr/javapns-jdk16")," \ud14c\uc2a4\ud2b8 \uc9c4\ud589. \ud558\uc9c0\ub9cc \ub9c8\uc9c0\ub9c9 \ucee4\ubc0b\uc774 2017-05-17\uc73c\ub85c \ud604\uc7ac \uae30\uc900(2019-05-14)\uc73c\ub85c \ub9cc 2\ub144\uc774 \ub118\uc740 \uc0c1\ud0dc\uc774\ub2e4. \uc774\uc640 \uac19\uc774 ",(0,l.kt)("strong",{parentName:"p"},"Legacy Push\uc5d0 \ub300\ud55c \uc624\ud508\uc18c\uc2a4 \uad00\ub9ac\ub294 \uac70\uc758 \uc548\ub418\ub294 \uc0c1\ud0dc"),"\uc774\ub2e4. \ub610\ud55c, Thread Pool \uad00\ub9ac\uac00 \uc548\ub418\uae30 \ub54c\ubb38\uc5d0 \ucf54\ub4dc\uc758 \ubcf5\uc7a1\uc131\uc774 \ub298\uc5b4\ub098\uac70\ub098 \ub9ac\uc18c\uc2a4 \uad00\ub9ac\uac00 \uc548\ub420 \uc218 \uc788\uc73c\ub2c8 \uc870\uc2ec\ud574\uc11c \uc0ac\uc6a9\ud558\uc790."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'/* fernandospr/javapns-jdk16 \uc0d8\ud50c */\nPushNotificationBigPayload payload = PushNotificationBigPayload.complex();\npayload.addAlert("Message received from Bob");\n\n/* ... */\n\nPush.payload(payload, p12File, password, isProduction, deviceTokens);\n')),(0,l.kt)("h3",{id:"push-\uc774\uc6a9\ud558\uae30"},"Push \uc774\uc6a9\ud558\uae30"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/CleverTap/apns-http2"},"CleverTap/apns-http2"),"\uc640 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/relayrides/pushy"},"relayrides/pushy"),", RestTemplate \ud14c\uc2a4\ud2b8 \uc9c4\ud589. \ud558\uc9c0\ub9cc \uc9c0\uae08 \uc11c\ubc84\uac00 Java 8\uc774\uae30 \ub54c\ubb38\uc5d0 HTTP/2\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544 \ubcc4\ub3c4\uc758 \uc791\uc5c5\uc774 \ud544\uc694\ud558\ub2e4. (\uc0ac\uc2e4 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/relayrides/pushy"},"relayrides/pushy"),"\ub294 \uc5c6\uc5b4\ub3c4 \ub41c\ub2e4.)"),(0,l.kt)("p",null,"\u203b \ucc38\uace0) ",(0,l.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/ko/SS7K4U_liberty/com.ibm.websphere.wlp.zseries.doc/ae/cwlp_alpnsupport.html"},"ALPN \uc9c0\uc6d0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'/* CleverTap/apns-http2 \uc0d8\ud50c */\nFileInputStream cert = new FileInputStream("/path/to/certificate.p12");\nfinal ApnsClient client = new ApnsClientBuilder()\n        .withProductionGateway()\n        .inSynchronousMode()\n        .withCertificate(cert)\n        .withPassword("<password>")\n        .build();\n\nNotification n = new Notification.Builder("<the device token>")\n        .alertBody("Hello").build();\n\nNotificationResponse result = client.push(n);\n')),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0... \ubc29\ubc95 \uc911\uc5d0 \ud558\ub098\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"alpn-boot-{version}.jar")," \ub2e4\uc6b4\ubc1b\uace0, \uc2e4\ud589\uc2dc\uc5d0 \ub2e4\uc74c \uc635\uc158\uc744 \ucd94\uac00\ud574\uc57c\ud55c\ub2e4."),(0,l.kt)(p.Z,{command:"java -Xbootclasspath/p:{path}/alpn-boot-{version}.jar ...",respond:"Running ...",minHeight:"80px",mdxType:"GDemoTerminal"}))}d.isMDXComponent=!0},65831:(e,t,a)=>{a.r(t)}}]);