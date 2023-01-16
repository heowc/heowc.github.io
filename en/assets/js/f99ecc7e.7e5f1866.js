"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[9997],{9598:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(7294);const a=t=>{let{id:e="demo-terminal",command:a,respond:l,prompt:r="$",windowTitle:i="bash",minHeight:p="100px",onCompleteDelay:s=0}=t;return(0,o.useEffect)((()=>{const t=n(2210);n(7215),n(5831);let o=new t(`#${e}`);o.openApp("terminal",{minHeight:p,windowTitle:i,promptString:r});let u=a.split(";");for(let e=0;e<u.length;e++)o.command(u[e],{onCompleteDelay:s});o.respond(l),o.end()})),o.createElement(o.Fragment,null,o.createElement("div",{id:e,style:{minHeight:p}}),o.createElement("br",null),o.createElement("br",null))}},1902:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),l=(n(828),n(9598));const r={title:"Spring Boot - \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\uae30",slug:"2018/12/27/spring-boot-graceful-shutdown",date:new Date("2018-12-28T00:51:00.000Z"),category:["spring-boot"],tags:["spring-boot","graceful-shutdown","shutdown"]},i=void 0,p={permalink:"/en/2018/12/27/spring-boot-graceful-shutdown",source:"@site/blog/spring-boot-graceful-shutdown.mdx",title:"Spring Boot - \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\uae30",description:"Spring Boot\ub97c \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc18c\uac1c\uc774\ub2e4.",date:"2018-12-28T00:51:00.000Z",formattedDate:"December 28, 2018",tags:[{label:"spring-boot",permalink:"/en/tags/spring-boot"},{label:"graceful-shutdown",permalink:"/en/tags/graceful-shutdown"},{label:"shutdown",permalink:"/en/tags/shutdown"}],readingTime:5.33,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\uae30",slug:"2018/12/27/spring-boot-graceful-shutdown",date:"2018-12-28T00:51:00.000Z",category:["spring-boot"],tags:["spring-boot","graceful-shutdown","shutdown"]},prevItem:{title:"Spring Boot - testContainer\ub97c \ud65c\uc6a9\ud55c AWS DynamoDB \ud14c\uc2a4\ud2b8",permalink:"/en/2019/01/16/spring-boot-dynamodb-using-testcontainer"},nextItem:{title:"2018\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/en/2018/12/24/2018-develop-retrospection"}},s={authorsImageUrls:[]},u=[{value:"kill \uba85\ub839\uc5b4",id:"kill-\uba85\ub839\uc5b4",level:3},{value:"\uc65c \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc744\uae4c?",id:"\uc65c-\uad8c\uc7a5\ud558\uc9c0-\uc54a\uc744\uae4c",level:4},{value:"\uadf8\ub807\ub2e4\uba74 \uc548\uc804\ud558\uac8c \uc8fd\uc774\ub294 \ubc29\ubc95\uc740 \ubb58\uae4c...?",id:"\uadf8\ub807\ub2e4\uba74-\uc548\uc804\ud558\uac8c-\uc8fd\uc774\ub294-\ubc29\ubc95\uc740-\ubb58\uae4c",level:4},{value:"Spring Boot \uc885\ub8cc\uc2dc\ud0a4\uae30",id:"spring-boot-\uc885\ub8cc\uc2dc\ud0a4\uae30",level:3},{value:"\uc900\ube44\ud558\uae30",id:"\uc900\ube44\ud558\uae30",level:4},{value:"Spring - ContextClosedEvent",id:"spring---contextclosedevent",level:4},{value:"PID \uad6c\ud558\uae30",id:"pid-\uad6c\ud558\uae30",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],c={toc:u};function d(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Spring Boot\ub97c \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc18c\uac1c\uc774\ub2e4.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u203b \uc77d\uae30 \uc804 \ucc38\uace0!!\nSpring Boot 2.3.0.RELEASE \uc774\ud6c4\uc5d0\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"server.shutdown=graceful")," \uc18d\uc131\uc744 \ucd94\uac00\ud558\uc5ec \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0ac \uc218 \uc788\ub2e4.\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.3.0.RELEASE/reference/html/spring-boot-features.html#boot-features-graceful-shutdown"},"spring-boot-features.html#boot-features-graceful-shutdown"))),(0,a.kt)("h3",{id:"kill-\uba85\ub839\uc5b4"},"kill \uba85\ub839\uc5b4"),(0,a.kt)("p",null,"\uc6b0\uc120, Spring Boot\ub97c \uc885\ub8cc\uc2dc\ud0a4\uae30 \ub0b4\uc6a9\uc744 \uc5b8\uae09\ud558\uae30 \uc774\uc804\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"p"},"kill"),"\uc774\ub77c\ub294 \ub9ac\ub205\uc2a4 \uba85\ub839\uc5b4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc790."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kill"),"\uc740 \uc758\ubbf8\ud558\ub294 \ubc14\uc640 \uac19\uc774 \uc8fd\uc774\ub294(?) \uac83\uacfc \uc5f0\uad00\uc774 \uc788\ub2e4. \uc774\uac83\uc740 ",(0,a.kt)("strong",{parentName:"p"},"\ud504\ub85c\uc138\uc2a4\ub97c \uc8fd\uc774\ub294 \uba85\ub839\uc5b4"),"\uc73c\ub85c \ud504\ub85c\uc138\uc2a4\uac00 \uc2dc\uc791\ub418\uba74 \ubd80\uc5ec\ub418\ub294 PID(\ud504\ub85c\uc138\uc2a4 ID)\ub97c \ud65c\uc6a9\ud558\uba74 \ub41c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kill -9 PID\n")),(0,a.kt)("p",null,"\uc704 \uba85\ub839\uc5b4\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uc885\ub8cc\uc2dc\ud0ac \ub54c \uc0ac\uc6a9\ud558\ub294 \uba85\ub839\uc5b4\ub85c \ub9ce\uc740 \ube14\ub85c\uadf8\ub098 \uc2a4\ud0dd\uc624\ubc84\ud50c\ub85c\uc6b0\uc5d0\uc11c \uac00\uc7a5 \ub9ce\uc774 \uc5b8\uae09\ub418\ub294 \uba85\ub839\uc5b4\uc774\uc790 \ub098 \ub610\ud55c \uc8fc\ub85c \uc0ac\uc6a9\ud558\ub358 \uba85\ub839\uc5b4\uc774\ub2e4. \ud558\uc9c0\ub9cc \uc704 \uba85\ub839\uc5b4\ub294 \uad8c\uc7a5\ud558\uc9c0 \uc54a\ub294 \ubc29\ubc95\uc774\ub2e4."),(0,a.kt)("h4",{id:"\uc65c-\uad8c\uc7a5\ud558\uc9c0-\uc54a\uc744\uae4c"},"\uc65c \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc744\uae4c?"),(0,a.kt)("p",null,"\uc5ec\uae30\uc11c ",(0,a.kt)("strong",{parentName:"p"},"\uc22b\uc790 9\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud558\ub294 \ud578\ub4e4\ub7ec\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \ud504\ub85c\uc138\uc2a4\ub97c \ubc14\ub85c \uc8fd\uc774\uaca0\ub2e4"),"\ub294 \uc758\ubbf8\uc774\ub2e4. \ub9cc\uc57d, \uc2e4\ud589 \uc911\uc778 \uc4f0\ub808\ub4dc\uac00 \uc788\ub354\ub77c\ub3c4 \uc774\ub97c \ubb34\uc2dc\ud558\uace0 \uc911\ub2e8\ud558\ub294\ub370 \ud639\uc2dc\ub77c\ub3c4 \uad49\uc7a5\ud788 \uc911\uc694\ud55c \uc791\uc5c5 \uc911 \uc774\ub77c\uba74 \ucd5c\uc545\uc758 \uc0c1\ud669\uc774 \uc77c\uc5b4\ub0a0 \uc218 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc22b\uc790\ub294 9 \uc774\uc678\uc5d0\ub3c4 \ub2e4\ub978 \uc22b\uc790\ub3c4 \uc874\uc7ac\ud558\uba70 \ub2e4\ub978 \uc758\ubbf8\ub97c \uac16\uace0 \uc788\ub2e4.")),(0,a.kt)(l.Z,{id:"demo-kill",command:"kill -l",respond:" 1) SIGHUP\t 2) SIGINT\t 3) SIGQUIT\t 4) SIGILL\n  5) SIGTRAP\t 6) SIGABRT\t 7) SIGEMT\t 8) SIGFPE\n  9) SIGKILL\t10) SIGBUS\t11) SIGSEGV\t12) SIGSYS\n 13) SIGPIPE\t14) SIGALRM\t15) SIGTERM\t16) SIGURG\n 17) SIGSTOP\t18) SIGTSTP\t19) SIGCONT\t20) SIGCHLD\n 21) SIGTTIN\t22) SIGTTOU\t23) SIGIO\t24) SIGXCPU\n 25) SIGXFSZ\t26) SIGVTALRM\t27) SIGPROF\t28) SIGWINCH\n 29) SIGINFO\t30) SIGUSR1\t31) SIGUSR2",minHeight:"300x",onCompleteDelay:100,mdxType:"GDemoTerminal"}),(0,a.kt)("h4",{id:"\uadf8\ub807\ub2e4\uba74-\uc548\uc804\ud558\uac8c-\uc8fd\uc774\ub294-\ubc29\ubc95\uc740-\ubb58\uae4c"},"\uadf8\ub807\ub2e4\uba74 \uc548\uc804\ud558\uac8c \uc8fd\uc774\ub294 \ubc29\ubc95\uc740 \ubb58\uae4c...?"),(0,a.kt)("p",null,"tomcat \uc885\ub8cc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ucc3e\uc544\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$TOMCAT_HOME/bin/shutdown.sh\n$TOMCAT_HOME/bin/catalina.sh stop\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# https://github.com/apache/tomcat/blob/ffc4b76e42fd39d88c9417d0ba2b3d697c16f5b5/bin/catalina.sh#L543\nkill -15 `cat "$CATALINA_PID"` >/dev/null 2>&1\n')),(0,a.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 1(INT), 2(HUP), 15(TERM)\ub97c \uc774\uc6a9\ud558\uc5ec \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud558\ub294 \ud578\ub4e4\ub7ec \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uace0 \uc548\uc804\ud558\uac8c \uc885\ub8cc\uac00 \uac00\ub2a5\ud558\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},"\uc77c\ubc18\uc801\uc73c\ub85c 15\ub97c \uc0ac\uc6a9"),"\ud55c\ub2e4."),(0,a.kt)("h3",{id:"spring-boot-\uc885\ub8cc\uc2dc\ud0a4\uae30"},"Spring Boot \uc885\ub8cc\uc2dc\ud0a4\uae30"),(0,a.kt)("h4",{id:"\uc900\ube44\ud558\uae30"},"\uc900\ube44\ud558\uae30"),(0,a.kt)("p",null,"\uc6b0\uc120 \ud3b8\ub9ac\ud55c \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \uae34 \uc791\uc5c5 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uae30 \uc704\ud55c \uba54\uc18c\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@GetMapping\npublic String pause() throws InterruptedException {\n    Thread.sleep(5_000L);\n    return "Process finished";\n}\n')),(0,a.kt)("p",null,"\uadf8\ub9ac\uace0 \uae34 \uc791\uc5c5 \uc911\uac04\uc5d0 Spring Boot \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc885\ub8cc\uc2dc\ucf1c \ubcf4\uaca0\ub2e4. \ucd94\uce21\uc73c\ub85c\ub294 5\ucd08\ub97c \uae30\ub2e4\ub838\ub2e4\uac00 'Process finished'\ub77c\ub294 \ubb38\uad6c\uac00 \ud45c\uc2dc\ub420 \uac83\uc774\ub77c\uace0 \uc608\uc0c1\ub41c\ub2e4. \ud558\uc9c0\ub9cc, \uc608\uc0c1\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:8080\n")),(0,a.kt)("p",null,"5000ms \uc774\ub0b4\uc5d0 \uc544\ub798 \uba85\ub839\uc5b4 \uc2e4\ud589\ud558\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kill -15 PID\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt error \ubc1c\uc0dd",src:n(2524).Z,width:"1356",height:"876"})),(0,a.kt)("p",null,"\uadf8 \uc774\uc720\ub294 \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud560 \ud578\ub4e4\ub7ec\ub294 \uc8fc\uc5b4\uc84c\uc9c0\ub9cc ",(0,a.kt)("strong",{parentName:"p"},"Spring Boot\uc5d0\uc11c \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud558\ub294 \ud578\ub4e4\ub7ec \ucf54\ub4dc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38"),"\uc774\ub2e4."),(0,a.kt)("h4",{id:"spring---contextclosedevent"},"Spring - ContextClosedEvent"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ContextClosedEvent"),"\ub97c \ud65c\uc6a9\ud574\uc11c \ub9ac\uc18c\uc2a4\ub97c \uc815\ub9ac\ud558\ub294 \ud578\ub4e4\ub7ec \ucf54\ub4dc\ub97c \ucd94\uac00 \ud560 \uc218 \uc788\uace0, \uc774 \ubc29\ubc95\uc740 '",(0,a.kt)("a",{parentName:"p",href:"http://blog.marcosbarbero.com/graceful-shutdown-spring-boot-apps/"},"Marcos Barbero's Blog"),"'\ub97c \ucc38\uace0\ud558\uc600\ub2e4. \uac04\ub2e8\ud788 \uc124\uba85\ud558\uc790\uba74, request\uc5d0 \ud65c\uc6a9\ub418\ub294 ThreadPool\ub97c \ub9ac\uc18c\uc2a4\uac00 \uc815\ub9ac\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub9b0 \ud6c4 \ub0b4\ub9b0\ub2e4. \uadf8 \uc774\ud6c4\uc5d0\ub3c4 \ub0b4\ub824\uac00\uc9c0 \uc54a\ub294\ub2e4\uba74 \uac15\uc81c\ub85c \ub0b4\ub824\ubc84\ub9ac\ub294 \ucf54\ub4dc\uc774\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onApplicationEvent(ContextClosedEvent event) {\n    this.connector.pause();\n    Executor executor = this.connector.getProtocolHandler().getExecutor();\n    if (executor instanceof ThreadPoolExecutor) {\n        try {\n            ThreadPoolExecutor threadPoolExecutor = (ThreadPoolExecutor) executor;\n            threadPoolExecutor.shutdown();\n            if (!threadPoolExecutor.awaitTermination(TIMEOUT, TimeUnit.SECONDS)) {\n                log.warn("Tomcat thread pool did not shut down gracefully within "\n                        + TIMEOUT + " seconds. Proceeding with forceful shutdown");\n\n                threadPoolExecutor.shutdownNow();\n\n                if (!threadPoolExecutor.awaitTermination(TIMEOUT, TimeUnit.SECONDS)) {\n                    log.error("Tomcat thread pool did not terminate");\n                }\n            }\n        } catch (InterruptedException ex) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n')),(0,a.kt)("h4",{id:"pid-\uad6c\ud558\uae30"},"PID \uad6c\ud558\uae30"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"PID\ub294 \uc5b4\ub514\uc11c \uc5bb\uc744 \uc218 \uc788\uc744\uae4c?")),(0,a.kt)("p",null,"\uc5ec\ub7ec\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uaca0\uc9c0\ub9cc Spring Boot\uc5d0\uc11c\ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"ApplicationPidFileWriter"),"\ub77c\ub294 \ud074\ub798\uc2a4\ub97c \uc81c\uacf5\ud574\uc8fc\uace0 \uc788\uc73c\uba70 \uc774\ub97c \uc774\uc6a9\ud788\uc5ec pid\uac00 \ub2f4\uae34 \ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5b4\uc900\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#deployment-install"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud558\uc790."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    SpringApplication application = new SpringApplicationBuilder()\n            .sources(SpringBootGracefulShutdownApplication.class)\n            .listeners(new ApplicationPidFileWriter("./application.pid"))\n            .build();\n\n    application.run(args);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"application.pid"),"\ub294 jar\ud30c\uc77c\uacfc \uac19\uc740 \uacbd\ub85c\uc5d0 \ub9cc\ub4e4\uc5b4\uc9c4\ub2e4."),(0,a.kt)(l.Z,{id:"demo-ls",command:"ls",respond:"application.pid\t\tspring-boot-graceful-shutdown-0.0.1-SNAPSHOT.jar",minHeight:"80px",onCompleteDelay:100,mdxType:"GDemoTerminal"}),(0,a.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootGracefulShutdown"},"SpringBootSample - SpringBootGracefulShutdown")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://blog.marcosbarbero.com/graceful-shutdown-spring-boot-apps/"},"http://blog.marcosbarbero.com/graceful-shutdown-spring-boot-apps/"))))}d.isMDXComponent=!0},5831:(t,e,n)=>{n.r(e)},2524:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/error-c15c65cad09f19bd5c2936bc2319f709.png"}}]);