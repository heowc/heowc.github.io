"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3382],{89598:function(t,e,n){var r=n(67294);e.Z=function(t){var e=t.id,a=void 0===e?"demo-terminal":e,i=t.command,o=t.respond,p=t.prompt,l=void 0===p?"$":p,m=t.windowTitle,s=void 0===m?"bash":m,u=t.minHeight,g=void 0===u?"100px":u,c=t.onCompleteDelay,k=void 0===c?0:c;return(0,r.useEffect)((function(){var t=n(72210);n(47215),n(65831);var e=new t("#"+a);e.openApp("terminal",{minHeight:g,windowTitle:s,promptString:l});for(var r=i.split(";"),p=0;p<r.length;p++)e.command(r[p],{onCompleteDelay:k});e.respond(o),e.end()})),r.createElement(r.Fragment,null,r.createElement("div",{id:a,style:{minHeight:g}}),r.createElement("br",null),r.createElement("br",null))}},84202:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(89598),["components"]),p={title:"Spring Boot - \uc2dc\uc791\ud558\uae30",slug:"2018/01/08/spring-boot-start",date:new Date("2018-01-08T21:51:59.000Z"),category:["spring"],tags:["spring","spring-boot"]},l=void 0,m={permalink:"/2018/01/08/spring-boot-start",source:"@site/blog/spring-boot-start.mdx",title:"Spring Boot - \uc2dc\uc791\ud558\uae30",description:"Spring Boot\ub294 \uc801\uc740 \uc124\uc815\ub9cc\uc73c\ub85c \ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.",date:"2018-01-08T21:51:59.000Z",formattedDate:"2018\ub144 1\uc6d4 8\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"spring-boot",permalink:"/tags/spring-boot"}],readingTime:1.21,truncated:!0,authors:[],frontMatter:{title:"Spring Boot - \uc2dc\uc791\ud558\uae30",slug:"2018/01/08/spring-boot-start",date:"2018-01-08T21:51:59.000Z",category:["spring"],tags:["spring","spring-boot"]},prevItem:{title:"Spring Boot - Data JPA",permalink:"/2018/01/09/spring-boot-data-jpa"}},s={authorsImageUrls:[]},u=[{value:"\uae30\ub2a5",id:"\uae30\ub2a5",level:3},{value:"\uc900\ube44\uc0ac\ud56d",id:"\uc900\ube44\uc0ac\ud56d",level:3},{value:"\uc124\uce58\ud558\uae30",id:"\uc124\uce58\ud558\uae30",level:3},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"\uc2e4\ud589",id:"\uc2e4\ud589",level:3}],g={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Spring Boot\ub294 \uc801\uc740 \uc124\uc815\ub9cc\uc73c\ub85c \ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.")),(0,i.kt)("h3",{id:"\uae30\ub2a5"},"\uae30\ub2a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd \uc2e4\ud589\ud615 Spring \uc560\ud50c\ub9ac\ucf00\uc774\uc158"),(0,i.kt)("li",{parentName:"ul"},"Tomcat, Jetty \ub610\ub294 Undertow\uc744 \ub0b4\uc7a5"),(0,i.kt)("li",{parentName:"ul"},"Maven \uad6c\uc131\uc744 \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud55c \u2018starter\u2019 POM \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ul"},"\uac00\ub2a5\ud55c \uacbd\uc6b0, \uc790\ub3d9\uc73c\ub85c Spring \uc124\uc815"),(0,i.kt)("li",{parentName:"ul"},"Metric, Health check \ubc0f Externalized \uad6c\uc131\uacfc \uac19\uc740 \ud504\ub85c\ub355\uc158 \uae30\ub2a5\uc744 \uc81c\uacf5")),(0,i.kt)("h3",{id:"\uc900\ube44\uc0ac\ud56d"},"\uc900\ube44\uc0ac\ud56d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JDK 1.8 \uc774\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"IDE(Eclipse, STS, Intellij)")),(0,i.kt)("h3",{id:"\uc124\uce58\ud558\uae30"},"\uc124\uce58\ud558\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://start.spring.io/"},"Spring Initializr")," \uc811\uc18d (\ube4c\ub4dc \ud234, \uc5b8\uc5b4, \ubc84\uc804, \ub514\ud39c\ub358\uc2dc)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started-installing-the-cli"},"Spring Boot CLI"))),(0,i.kt)("h3",{id:"\uc124\uc815"},"\uc124\uc815"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"application.properties"),"\uc774\ub098 ",(0,i.kt)("inlineCode",{parentName:"li"},"application.yml"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \uc124\uc815\uc744 \ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html"},"common-application-properties"))),(0,i.kt)("h3",{id:"\uc2e4\ud589"},"\uc2e4\ud589"),(0,i.kt)("p",null,"{% gdemo",(0,i.kt)("em",{parentName:"p"},"terminal './mvnw spring-boot:run ",(0,i.kt)("span",{style:"color:hsla(0,0%,100%,.5)"},"# ./gradlew bootRun"),"' '250px' %}\n.   ____          "),"            ",(0,i.kt)("strong",{parentName:"p"}," _ ",(0,i.kt)("em",{parentName:"strong"},"\n/","\\"," / ")),"'",(0,i.kt)("em",{parentName:"p"}," __ ")," ",(0,i.kt)("em",{parentName:"p"},"("),")",(0,i.kt)("em",{parentName:"p"}," __  __ ")," \\ \\ \\ \\\n( ( )","_",(0,i.kt)("strong",{parentName:"p"}," | '",(0,i.kt)("em",{parentName:"strong"}," | '"),"| | '",(0,i.kt)("em",{parentName:"strong"}," \\/ "),"` | \\ \\ \\ \\\n","\\","/  _"),")| |",(0,i.kt)("em",{parentName:"p"},")| | | | | || ("),"| |  ) ) ) )\n'  |_",(0,i.kt)("strong",{parentName:"p"},"_| ."),"|",(0,i.kt)("em",{parentName:"p"},"| |"),"|",(0,i.kt)("em",{parentName:"p"},"| |"),"_",(0,i.kt)("em",{parentName:"p"},", | / / / /\n=========|"),"|==============|",(0,i.kt)("em",{parentName:"p"},"__/=/"),"/",(0,i.kt)("em",{parentName:"p"},"/"),"/\n:: Spring Boot ::        (v2.1.0.RELEASE)\n{% endgdemo_terminal %}"))}c.isMDXComponent=!0},65831:function(t,e,n){n.r(e)}}]);