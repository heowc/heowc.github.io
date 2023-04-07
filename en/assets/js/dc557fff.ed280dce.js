"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[7683],{4778:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={title:"ElastiCache Maintenance",slug:"2021/07/22/elasticache-maintenance",date:new Date("2021-07-22T18:00:00.000Z"),category:["elasticache"],tags:["elasticache","redis","maintenance","aws"]},r=void 0,c={permalink:"/en/2021/07/22/elasticache-maintenance",source:"@site/blog/elasticache-maintenance.md",title:"ElastiCache Maintenance",description:"\ucd5c\uadfc AWS\uc758 Redis Service\uc778 ElastiCache\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uacaa\uc5c8\ub358 \uc720\uc9c0\uad00\ub9ac \uae30\uac04(Maintenance)\uc5d0 \ub300\ud55c \uc774\uc288 \ud574\uacb0\uacfc\uc815\uc744 \uc801\uc5b4\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",date:"2021-07-22T18:00:00.000Z",formattedDate:"July 22, 2021",tags:[{label:"elasticache",permalink:"/en/tags/elasticache"},{label:"redis",permalink:"/en/tags/redis"},{label:"maintenance",permalink:"/en/tags/maintenance"},{label:"aws",permalink:"/en/tags/aws"}],readingTime:5.85,hasTruncateMarker:!0,authors:[],frontMatter:{title:"ElastiCache Maintenance",slug:"2021/07/22/elasticache-maintenance",date:"2021-07-22T18:00:00.000Z",category:["elasticache"],tags:["elasticache","redis","maintenance","aws"]},prevItem:{title:"Hibernate NativeQuery HHH-14778 issue (with Postgres)",permalink:"/en/2021/11/27/hibernate-nativequery-bug-with-postgres"},nextItem:{title:"Spring WebSocket (with STOMP)",permalink:"/en/2021/07/15/spring-websocket-with-stomp"}},o={authorsImageUrls:[]},s=[{value:"Maintenance \uc774\ub780?",id:"maintenance-\uc774\ub780",level:3},{value:"\ud658\uacbd",id:"\ud658\uacbd",level:3},{value:"Maintenance \ub300\uc751\ud558\uae30",id:"maintenance-\ub300\uc751\ud558\uae30",level:3},{value:"enablePeriodicRefresh(...)",id:"enableperiodicrefresh",level:4},{value:"enableAllAdaptiveRefreshTriggers()",id:"enablealladaptiverefreshtriggers",level:4},{value:"\uc7ac\ud604\ud574\ubcf4\uae30",id:"\uc7ac\ud604\ud574\ubcf4\uae30",level:3},{value:"\uae54\ub054\ud558\uc9c0 \uc54a\uc740 \uacb0\ub860...",id:"\uae54\ub054\ud558\uc9c0-\uc54a\uc740-\uacb0\ub860",level:3},{value:"\ub9c8\ubb34\ub9ac...?!",id:"\ub9c8\ubb34\ub9ac",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],u={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucd5c\uadfc AWS\uc758 Redis Service\uc778 ElastiCache\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c \uacaa\uc5c8\ub358 \uc720\uc9c0\uad00\ub9ac \uae30\uac04(Maintenance)\uc5d0 \ub300\ud55c \uc774\uc288 \ud574\uacb0\uacfc\uc815\uc744 \uc801\uc5b4\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"maintenance-\uc774\ub780"},"Maintenance \uc774\ub780?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ko/elasticache/elasticache-maintenance/"},"https://aws.amazon.com/ko/elasticache/elasticache-maintenance/"))),(0,i.kt)("p",null,"\ubcf4\uc548 \ud328\uce58\ub098 \uc548\uc815\uc131\uc744 \uc704\ud574 \uc774\uc6a9\uc790\uac00 \uc9c0\uc815\ud55c \uc2dc\uae30\uc5d0 \ub178\ub4dc\ub97c \uad50\uccb4\ud558\uac70\ub098 \ud074\ub7ec\uc2a4\ud130\uac00 \ub2e4\uc6b4\ub418\uac70\ub098 \ud2b9\uc815 \uc0e4\ub4dc\uc758 \ub178\ub4dc\ub4e4\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4. \ubb38\uc11c\uc0c1\uc5d0\uc120 \uba87 \ucd08\uc758 \ub2e4\uc6b4\ud0c0\uc784\uc774 \ubc1c\uc0dd\ud55c\ub2e4\uace0 \ud558\ub294\ub370\uc694."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\uc81c\uac00 \uacbd\ud5d8\ud55c \ubc14\ub85c\ub294 \uc57d\uac04 \ud2c0\ub9b0 \uc810(?)\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\ud658\uacbd"},"\ud658\uacbd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis Server: AWS ElastiCache Cluster"),(0,i.kt)("li",{parentName:"ul"},"Redis Client: lettuce ",(0,i.kt)("inlineCode",{parentName:"li"},"5.3.7"))),(0,i.kt)("p",null,"\u203b lettuce\uc758 \uacbd\uc6b0, \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ubc84\uc804(",(0,i.kt)("inlineCode",{parentName:"p"},"5.1.1"),")\uc5d0\uc11c \ubc84\uadf8\uac00 \uc788\uc5b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"5.3.7"),"\uc73c\ub85c \ubcc0\uacbd\ud588\uc5c8\ub294\ub370\uc694. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798\uc11c \ub2e4\uc2dc \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"maintenance-\ub300\uc751\ud558\uae30"},"Maintenance \ub300\uc751\ud558\uae30"),(0,i.kt)("p",null,"Maintenance\ub294 \uc694\uc77c\uacfc \uc2dc\uac04\ub300(1\uc2dc\uac04 \uac04\uaca9)\ub97c \uc9c0\uc815\ud574\ub450\uba74, AWS\uc5d0\uc11c event \uc54c\ub9bc\uacfc \ud568\uaed8 Maintenance \uc2a4\ucf00\uc904\uc744 \uc7a1\uc2b5\ub2c8\ub2e4. (\ubb3c\ub860, \uac11\uc791\uc2a4\ub7fd\uac8c \uc2a4\ucf00\uc904\uc774 \uc7a1\ud788\uace0 \uadf8\ub7ec\uc9c4 \uc54a\uc2b5\ub2c8\ub2e4.) \uc774 \ub54c, \ud074\ub7ec\uc2a4\ud130\uac00 \ub0b4\ub824\uac00\uac70\ub098 \uc0e4\ub4dc\uc758 \ub178\ub4dc\ub4e4\uc774 \ubcc0\uacbd\ub418\uac70\ub098 \uc7ac\ubc30\uce58\ud558\uac8c \ub418\ub294\ub370\uc694. lettuce client\uc5d0\uc11c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://lettuce.io/core/release/api/io/lettuce/core/cluster/models/partitions/Partitions.html"},"\uac01 \ub178\ub4dc\ub4e4\uc744 \uce90\uc2f1\ud558\uace0 \uc788\ub294 \uc815\ubcf4\ub4e4(Partitions)"),"\uc744 \ub9ac\ub85c\ub4dc\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\uc5d0 \ub9de\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://lettuce.io/core/release/reference/#redis-cluster.refreshing-the-cluster-topology-view"},"\ucd94\uac00 \uc635\uc158"),"\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spring-data-redis"),"\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, \ub2e4\uc74c\uacfc \uac19\uc774 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private static LettuceClientConfiguration lettuceClientConfiguration() {\n    final ClusterClientOption clientOptions = \n            ClusterClientOptions.builder()\n                                .topologyRefreshOptions(\n                                    ClusterTopologyRefreshOptions.builder()\n                                                                 .enablePeriodicRefresh(...) // <--\n                                                                 .enableAllAdaptiveRefreshTriggers() // <--\n                                                                 .build())\n                                .timeoutOptions(...)\n                                .build();\n    return LettuceClientConfiguration.builder()\n                                     .commandTimeout(...)\n                                     .shutdownTimeout(...)\n                                     .clientOptions(clientOptions)\n            .build();\n}\n")),(0,i.kt)("h4",{id:"enableperiodicrefresh"},"enablePeriodicRefresh(...)"),(0,i.kt)("p",null,"\uc8fc\uae30\uc801\uc73c\ub85c connection\uc744 \uac31\uc2e0\ud574\uc8fc\ub294 \uc635\uc158 \ud65c\uc131\ud654\uc640 \uae30\uac04\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\uac04\uc740 \uae30\ubcf8 60\ucd08\uc785\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"enablealladaptiverefreshtriggers"},"enableAllAdaptiveRefreshTriggers()"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://lettuce.io/core/release/api/io/lettuce/core/cluster/ClusterTopologyRefreshOptions.RefreshTrigger.html"},"\ubb38\uc81c\uac00 \ub420\ub9cc\ud55c operation"),"\uc774 \ubc1c\uc0dd\ud55c\ub2e4\uba74 \uc989\uc2dc connection\uc744 \uac31\uc2e0\ud574\uc8fc\ub294 \uc774\ubca4\ud2b8\ub97c \ud2b8\ub9ac\uac70 \uc2dc\ucf1c\uc8fc\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. \ud574\ub2f9 \uae30\ub2a5\uc740 rate-limit \uac19\uc740(?) \ucc98\ub9ac\uac00 \ub418\uc5b4 \uc788\uc5b4\uc11c \ud37c\ud3ec\uba3c\uc2a4\uc5d0 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc7ac\ud604\ud574\ubcf4\uae30"},"\uc7ac\ud604\ud574\ubcf4\uae30"),(0,i.kt)("p",null,"aws\uc5d0\uc11c\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"aws-cli"),"\ub97c \ud1b5\ud574 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/elasticache/test-failover.html"},(0,i.kt)("inlineCode",{parentName:"a"},"test-failover")),"\ub77c\ub294 \ucee4\ub9e8\ub4dc\ub97c \uc81c\uacf5\ud574\uc8fc\uace0 \uc788\uc73c\uba70, \uc774\ub97c \ud1b5\ud574 \uc704 \ud604\uc0c1\uc744 \uc7ac\ud604\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud574\ub2f9 \uae30\ub2a5\uc740 \uccab \uc2dc\ub3c4 \uae30\uc900 5\ud68c\uc758 \uc81c\ud55c\uc744 \ub450\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ubb34\ubd84\ubcc4\ud55c \uc2dc\ub3c4\ub294 \uc548\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h3",{id:"\uae54\ub054\ud558\uc9c0-\uc54a\uc740-\uacb0\ub860"},"\uae54\ub054\ud558\uc9c0 \uc54a\uc740 \uacb0\ub860..."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aws-cli"),"\ub97c \ud1b5\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"test-failover"),"\ub97c \uc2e4\ud589\ud558\uba74 \ud074\ub7ec\uc2a4\ud130\uac00 \ub0b4\ub824\uac11\ub2c8\ub2e4. \ud574\ub2f9 \uac2d\uc740 1\ubd84 \uc815\ub3c4 \ub418\ub294\ub370\uc694. \uc704 \ubb38\uc11c\uc5d0\uc11c \uc598\uae30\ud55c ",(0,i.kt)("strong",{parentName:"p"},"\uba87 \ucd08\uc758 \ub2e4\uc6b4\ud0c0\uc784\ubcf4\ub2e4 \ub9ce\uc740 \uc2dc\uac04\uc774 \uc18c\uc694"),"\ub428\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud560 \ubc29\ubc95\uc740 \ub531\ud788 \uc5c6\ub294 \uac78\ub85c \ubcf4\uc5ec '\uc11c\ube44\uc2a4 \uc6b4\uc601\uc5d0\uc11c \uc788\uc5b4 \ub2e4\uc6b4\ud0c0\uc784\uc744 \ucd5c\uc18c\ud654 \ud588\ub2e4'\ub77c\ub294 \uac83\uc5d0 \uc758\uc758\ub97c \ub450\uace0 \ud574\ub2f9 \uc774\uc288\ub97c \ub9c8\ubb34\ub9ac \uc9d3\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. \uae30\uc874\uc5d0\uc11c\ub294 10\ubd84\uc815\ub3c4\uc758 \ub2e4\uc6b4\ud0c0\uc784\uc774 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub2e4\ub9cc, \ud074\ub7ec\uc2a4\ud130\uac00 \ub0b4\ub824\uac00\ub294\uac8c \uc544\ub2cc \uc0e4\ub4dc\uc758 \ub178\ub4dc\ub4e4\uc774 \ubcc0\uacbd\ub418\uac70\ub098 \uc7ac\ubc30\uce58\ub418\ub294 \uac83\uc740 \ub2e4\uc6b4\ud0c0\uc784\uc774 \uc544\uc608 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud639\uc2dc \ub2e4\ub978 \ubc29\ubc95\uc774 \uc788\uc73c\uba74 \uacf5\uc720\ud574\uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4 :)")),(0,i.kt)("h3",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac...?!"),(0,i.kt)("p",null,"\uc635\uc158\uc744 \ucd94\uac00\ud558\uace0 \ubc30\ud3ec\ub97c \uba87 \ubc88 \ud574\ubcf4\ub2c8, \ubc30\ud3ec \uc911 \ub2e4\uc74c \uc5d0\ub7ec\ub85c\uadf8\uc640 \ud568\uaed8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uac00 \ub0b4\ub824\uac00\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ud574\ub2f9 \ubc84\uc804\uc740 lettuce ",(0,i.kt)("inlineCode",{parentName:"p"},"5.1.1"),"\uc5d0\uc11c \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ERROR: Failed to submit a listener notification task. Event loop shut down?\njava.util.concurrent.RejectedExecutionException: event executor terminated\n    at io.netty.util.concurrent.SingleThreadEventExecutor.reject(SingleThreadEventExecutor.java:845)\n    at io.netty.util.concurrent.SingleThreadEventExecutor.offerTask(SingleThreadEventExecutor.java:328)\n    at io.netty.util.concurrent.SingleThreadEventExecutor.addTask(SingleThreadEventExecutor.java:321)\n    at io.netty.util.concurrent.SingleThreadEventExecutor.execute(SingleThreadEventExecutor.java:756)\n    at io.netty.util.concurrent.DefaultPromise.safeExecute(DefaultPromise.java:768)\n    at io.netty.util.concurrent.DefaultPromise.notifyListeners(DefaultPromise.java:432)\n    at io.netty.util.concurrent.DefaultPromise.addListener(DefaultPromise.java:162)\n    at io.netty.channel.DefaultChannelPromise.addListener(DefaultChannelPromise.java:95)\n    at io.netty.channel.DefaultChannelPromise.addListener(DefaultChannelPromise.java:30)\n...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jstack"),"\uc744 \ud655\uc778\ud574\ubcf4\ub2c8, \ud574\ub2f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ubc84\uc5d0 thread \uc911 ",(0,i.kt)("inlineCode",{parentName:"p"},"WAITING"),"\uc774 \uc874\uc7ac\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 stack\uc740 shutdown\uc2dc\uc5d0 \uc4f0\ub808\ub4dc \uacbd\ud569\uc774 \ubc1c\uc0dd\ud558\uba74\uc11c \uc0dd\uae34 \ubb38\uc81c\ub85c \ubcf4\uc600\ub294\ub370\uc694. (\uc544\uc27d\uac8c\ub3c4... \ub85c\uadf8\uac00 \uc720\uc2e4\ub418\uc5b4 \ucca8\ubd80\ud558\uc9c0 \ubabb \ud588\uc2b5\ub2c8\ub2e4.) \uc774\ub294 lettuce \uc800\uc7a5\uc18c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lettuce-io/lettuce-core/issues/989"},"issue#989"),"\ub97c \ud1b5\ud574 \ubc14\ub85c \ud574\uacb0\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. "),(0,i.kt)("p",null,"\ud574\ub2f9 \uc774\uc288\uc758 \ucee4\ubc0b \ub85c\uadf8\ub97c \uc7a0\uae50 \uc0b4\ud3b4\ubcf4\uc790\uba74, eventloop\uac00 \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud558\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lettuce-io/lettuce-core/commit/75506b8489094b7ad584a3da7e5e7c9eaec5bd39#diff-786974f002247796101b7c31ad0a26c363adc3c02df789d8981c4e2455c52ebaR262"},"\ubc29\uc5b4\ucf54\ub4dc"),"\uac00 \ucd94\uac00\ub41c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private boolean isEventLoopActive() {\n\n    EventExecutorGroup eventExecutors = clientResources.eventExecutorGroup();\n\n    return !eventExecutors.isShuttingDown();\n}\n")),(0,i.kt)("p",null,"\uc800\ud76c\ub294 \uc774\uac83\uc744 ",(0,i.kt)("inlineCode",{parentName:"p"},"5.2.0"),"\uc5d0 \ud574\uacb0\ub41c \uac83\uc73c\ub85c \ubcf4\uc600\uc73c\ub098, \uadf8\ub0e5 \ub9c8\uc774\ub108 \ucd5c\uc2e0\ubc84\uc804(",(0,i.kt)("inlineCode",{parentName:"p"},"5.3.7"),")\uae4c\uc9c0 \uc62c\ub824\uc11c \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. \ub2e4\ud589\ud788 \ubc30\ud3ec\uc2dc\uc5d0 \uc704 \ud604\uc0c1\uc774 \ud574\uacb0\ub418\uc5b4 \uc548\uc815\uc801\uc778 \uc2a4\ubb34\uc2a4\ud558\uac8c(?) \ubc30\ud3ec\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ko/elasticache/elasticache-maintenance/"},"https://aws.amazon.com/ko/elasticache/elasticache-maintenance/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lettuce.io/core/release/reference/#redis-cluster.refreshing-the-cluster-topology-view"},"https://lettuce.io/core/release/reference/#redis-cluster.refreshing-the-cluster-topology-view")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/elasticache/test-failover.html"},"https://docs.aws.amazon.com/cli/latest/reference/elasticache/test-failover.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/lettuce-io/lettuce-core/issues/989"},"https://github.com/lettuce-io/lettuce-core/issues/989"))))}h.isMDXComponent=!0}}]);