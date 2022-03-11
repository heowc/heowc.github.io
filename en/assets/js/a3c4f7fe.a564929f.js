(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2986],{36462:function(i,e,t){"use strict";t.r(e),t.d(e,{assets:function(){return g},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return E}});var I=t(87462),A=t(63366),n=(t(67294),t(3905)),o=t(93456),l=["components"],a={title:"Spring Boot - CORS",slug:"2018/03/13/spring-boot-cors",date:new Date("2018-03-13T20:02:00.000Z"),category:["spring"],tags:["spring","spring-boot","cors"]},r=void 0,c={permalink:"/en/2018/03/13/spring-boot-cors",source:"@site/blog/spring-boot-cors.md",title:"Spring Boot - CORS",description:"\ube0c\ub77c\uc6b0\uc800 \ucd08\uae30\uc5d0 \ubcf4\uc548\uc0c1\uc758 \uc774\uc720\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ub0b4\uc5d0\uc11c \uc2dc\uc791\ub41c \uad50\ucc29 \ucd9c\ucc98 HTTP \uc694\uccad\uc744 \uc81c\ud55c\ud558\ub294\ub370, \uc774\ub97c SOP(Same-Origin Policy, \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45)\ub77c \ud55c\ub2e4.",date:"2018-03-13T20:02:00.000Z",formattedDate:"March 13, 2018",tags:[{label:"spring",permalink:"/en/tags/spring"},{label:"spring-boot",permalink:"/en/tags/spring-boot"},{label:"cors",permalink:"/en/tags/cors"}],readingTime:2.755,truncated:!0,authors:[],frontMatter:{title:"Spring Boot - CORS",slug:"2018/03/13/spring-boot-cors",date:"2018-03-13T20:02:00.000Z",category:["spring"],tags:["spring","spring-boot","cors"]},prevItem:{title:"Java 8 - Time API",permalink:"/en/2018/03/18/java8-time-package"},nextItem:{title:"\uac1c\ubc1c \uc18d\ub3c4\ub97c \ub192\uc5ec\uc8fc\ub294 \uc18c\uc18c\ud55c \ud301 (Chrome)",permalink:"/en/2018/02/13/tip-chrome-extension"}},g={authorsImageUrls:[]},E=[{value:"\ub3d9\uc77c \ucd9c\ucc98?",id:"\ub3d9\uc77c-\ucd9c\ucc98",level:3},{value:"CORS",id:"cors",level:3},{value:"CORS \ub3d9\uc791\uacfc\uc815",id:"cors-\ub3d9\uc791\uacfc\uc815",level:4},{value:"Spring Boot\uc5d0\uc11c \ud65c\uc6a9 \ud574\ubcf4\uae30",id:"spring-boot\uc5d0\uc11c-\ud65c\uc6a9-\ud574\ubcf4\uae30",level:3},{value:"Controller \uc9c0\uc815",id:"controller-\uc9c0\uc815",level:4},{value:"Global\ud558\uac8c \uc9c0\uc815",id:"global\ud558\uac8c-\uc9c0\uc815",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],R={toc:E};function p(i){var e=i.components,a=(0,A.Z)(i,l);return(0,n.kt)("wrapper",(0,I.Z)({},R,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ube0c\ub77c\uc6b0\uc800 \ucd08\uae30\uc5d0 \ubcf4\uc548\uc0c1\uc758 \uc774\uc720\ub85c \uc2a4\ud06c\ub9bd\ud2b8 \ub0b4\uc5d0\uc11c \uc2dc\uc791\ub41c \uad50\ucc29 \ucd9c\ucc98 HTTP \uc694\uccad\uc744 \uc81c\ud55c\ud558\ub294\ub370, \uc774\ub97c ",(0,n.kt)("strong",{parentName:"p"},"SOP(Same-Origin Policy, \ub3d9\uc77c \ucd9c\ucc98 \uc815\ucc45)"),"\ub77c \ud55c\ub2e4.")),(0,n.kt)("h3",{id:"\ub3d9\uc77c-\ucd9c\ucc98"},"\ub3d9\uc77c \ucd9c\ucc98?"),(0,n.kt)("p",null,"SOP\ub294 \ub450 Origin \uac04\uc5d0 \ud504\ub85c\ud1a0\ucf5c, \ud3ec\ud2b8, \ud638\uc2a4\ud2b8\uac00 \uac19\uc544\uc57c \ub3d9\uc77c Origin\ub77c\uace0 \ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,n.kt)("a",{parentName:"p",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"http://www.heowc.com"))," \uc774\ub77c\ub294 URL\uc774 \uc788\ub2e4\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uc0c1\ud669\uc774 \ubc1c\uc0dd\ud55c\ub2e4."),(0,n.kt)(o.Mermaid,{chart:"    graph LR\n        H1[http://www.heowc.com/user] --\x3e|\uc131\uacf5| H[http://www.heowc.com]\n        H2[https://www.heowc.com] -.->|\uc2e4\ud328 - \ud504\ub85c\ud1a0\ucf5c \uc0c1\uc774|H[http://www.heowc.com]\n        H3[http://www.heowc.com:8080] -.->|\uc2e4\ud328 - \ud3ec\ud2b8 \uc0c1\uc774| H[http://www.heowc.com]\n        H4[http://blog.heowc.com] -.->|\uc2e4\ud328 - \ud638\uc2a4\ud2b8 \uc0c1\uc774| H[http://www.heowc.com]",mdxType:"Mermaid"}),(0,n.kt)("h3",{id:"cors"},"CORS"),(0,n.kt)("p",null,"\uadf8\ub798\uc11c \uc774\ub97c \ubcf4\uc644\ud558\uae30 \uc704\ud574 \ube0c\ub77c\uc6b0\uc800\uce21\uc5d0\uc11c JSONP\ub97c \uc0ac\uc6a9\ud558\uac70\ub098, \uc11c\ubc84\uce21\uc5d0\uc11c ",(0,n.kt)("strong",{parentName:"p"},"CORS"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud574\uacb0\ud560 \uc218 \uc788\ub2e4. \uc5ec\uae30\uc11c ",(0,n.kt)("strong",{parentName:"p"},"CORS(Cross-Origin Resource Sharing)")," \ub780, \uc6f9 \uc11c\ubc84 \ub3c4\uba54\uc778\uac04 \uc561\uc138\uc2a4 \uc81c\uc5b4 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uc5ec \ubcf4\uc548 \ub3c4\uba54\uc778\uac04 \ub370\uc774\ud130 \uc804\uc1a1\uc744 \uac00\ub2a5\ud558\uac8c \ud574\uc900\ub2e4."),(0,n.kt)("h4",{id:"cors-\ub3d9\uc791\uacfc\uc815"},"CORS \ub3d9\uc791\uacfc\uc815"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"pre-flight : \uc2e4\uc81c \uc694\uccad\ud558\ub824\ub294 \uacbd\ub85c\uc640 \uac19\uc740 URL\uc5d0 \ub300\ud574 OPTIONS\ub85c \uc694\uccad\uc744 \ub0a0\ub824\ubcf4\uace0 \uc694\uccad\uac00\ub2a5\ud55c\uc9c0 \ud655\uc778"),(0,n.kt)("li",{parentName:"ol"},"\uc2e4\uc81c \uc694\uccad")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"Alt CORS \ub3d9\uc791\uacfc\uc815",src:t(53904).Z,width:"400",height:"295"})),(0,n.kt)("h3",{id:"spring-boot\uc5d0\uc11c-\ud65c\uc6a9-\ud574\ubcf4\uae30"},"Spring Boot\uc5d0\uc11c \ud65c\uc6a9 \ud574\ubcf4\uae30"),(0,n.kt)("p",null,"\uc6b0\uc120, \uc11c\ubc84\uc5d0\uc11c\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc740 \ud0a4\ub97c ",(0,n.kt)("strong",{parentName:"p"},"header"),"\uc5d0 \ubcf4\ub0b4\uc918\uc57c \ud55c\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Orgin")," : \uc694\uccad\uc744 \ubcf4\ub0b4\ub294 \ud398\uc774\uc9c0\uc758 \ucd9c\ucc98 (*, \ub3c4\uba54\uc778)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods")," : \uc694\uccad\uc744 \ud5c8\uc6a9\ud558\ub294 \uba54\uc18c\ub4dc (Default : GET, POST, HEAD)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Max-Age")," : \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c pre-flight\uc758 \uc694\uccad \uacb0\uacfc\ub97c \uc800\uc7a5\ud560 \uc2dc\uac04 \uc9c0\uc815. \ud574\ub2f9 \uc2dc\uac04 \ub3d9\uc548\uc740 pre-flight\ub97c \ub2e4\uc2dc \uc694\uccad\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers")," : \uc694\uccad\uc744 \ud5c8\uc6a9\ud558\ub294 \ud5e4\ub354")),(0,n.kt)("p",null,"\uadf8\ub9ac\uace0 Spring\uacfc Spring Boot\uc5d0\uc11c\ub294 \uc544\ub798\uc758 2\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c ",(0,n.kt)("strong",{parentName:"p"},"CORS"),"\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("h4",{id:"controller-\uc9c0\uc815"},"Controller \uc9c0\uc815"),(0,n.kt)("p",null,"\uac1c\ubcc4\uc801\uc73c\ub85c \ud5c8\uc6a9\ud558\ub294 \ubc29\ubc95\uc73c\ub85c\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"@CrossOrigin"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@CrossOrigin("*")\n@GetMapping("{value}")\npublic String get(@PathVariable String value) {\n    return value;\n}\n')),(0,n.kt)("h4",{id:"global\ud558\uac8c-\uc9c0\uc815"},"Global\ud558\uac8c \uc9c0\uc815"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WebMvcConfigurer"),"\ub97c \uad6c\ud604\ud558\uac70\ub098 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,n.kt)("inlineCode",{parentName:"p"},"@Bean"),"\uc73c\ub85c \ub4f1\ub85d\ud558\uc5ec ",(0,n.kt)("inlineCode",{parentName:"p"},"addCorsMappings"),"\uc5d0 \uc6d0\ud558\ub294 path\ub97c \ucd94\uac00\ud558\uba74 \ub41c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic WebMvcConfigurer webMvcConfigurer() {\n    return new WebMvcConfigurer() {\n        @Override\n        public void addCorsMappings(CorsRegistry registry) {\n            registry.addMapping("/message/**")\n                    .allowedOrigins("*")\n                    .allowedMethods(HttpMethod.POST.name())\n                    .allowCredentials(false)\n                    .maxAge(3600);\n        }\n    };\n}\n')),(0,n.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootCors"},"SpringBootSample / SpringBootCors")))}p.isMDXComponent=!0},11748:function(i,e,t){var I={"./locale":89234,"./locale.js":89234};function A(i){var e=n(i);return t(e)}function n(i){if(!t.o(I,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return I[i]}A.keys=function(){return Object.keys(I)},A.resolve=n,i.exports=A,A.id=11748},53904:function(i,e){"use strict";e.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4QA6RXhpZgAATU0AKgAAAAgAA1EQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEnAZADASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAYFAQMEAgf/xABUEAABAwIDAgQQCggEBQQDAAABAAIDBBEFBhIhMRMWUVUUIjI2QVJWYXF1kZKUs7TRFRc0NXSBk9LT4QcjM0JUlaKxU3KhwSRihLLDJURGY+Pw8f/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAIREBAAIBBAIDAQAAAAAAAAAAAAECEQMSEzEhMiJRgWH/2gAMAwEAAhEDEQA/AP2HHcwSYfUw4dh1M2rxSdhkbG9+iOKMGxkkdY2bfYABdx2DskYJ48uOrjDgzL7dIwp7gO9cy7V6IumzvmFztrmR0kbSew3Q828pJWmtqUiYzLK15icQw9OeO6PB/wCUP/FTTnjujwf+UP8AxVuIrcdVd9mHpzx3R4P/ACh/4qac8d0eD/yh/wCKtxE46m+zD0547o8H/lD/AMVNOeO6PB/5Q/8AFW530Tjqb7MPTnjujwf+UP8AxU0547o8H/lD/wAVbiJx1N9mJpzx3R4P/KH/AIq+48VzZg7XVOIuocYpGjVKyjp3QTsaN7mtLnB9ht03BPY5FsLlvVt8ITjqb5bNHV09fRw1dLK2WnnYJI5G7nNIuCu9TOQgG5VjjAsyOpqWMHI0TvACplztxERAREQfL3tjY573BrWi5cTYAcqjH5ix3G2cPgMNFSUDtsNVXtc91Q3tmxttpaewXG5G2y089yOjyLjRY4gmke245DsP+hQMbE0RsaGsYA1oHYA2BaUrE9qXtMdMjhc8c64F6DL99OFzxzrgXoMv31sItOOrPfZj8LnjnXAvQZfvpwueOdcC9Bl++thE46m+zH4XPHOuBegy/fThc8c64F6DL99bCJx1N9mPwueOdcC9Bl++nC5451wL0GX762ETjqb7Mfhc8c64F6DL99BNnhpBOJ4C637popRf69a2ETjqb7OcEzFNV1zsLxWkbR4k2PhWCOTXFURg2L43WB2Ei7SARcbwbqgURiZ0Y/lmVux4xB0YP/K6CTUPrsPIrcbljaMS1rOYERFVYREQFwSGgkmwHZK5WFnSV8OScckjcWvFDNYjsdKUGRLmPG8bBly9FR01BqIjra4OeagDZqZG21mcjiRfeBbaunhc8c64F6DL99alNEyGkgijaGsjjYxrR2AGgALtW8acMJvLH4XPHOuBegy/fThc8c64F6DL99bCKeOpvsx+FzxzrgXoMv304XPHOuBegy/fWwicdTfZj8LnjnXAvQZfvpwueOdcC9Bl++thE46m+zH4XPHOuBegy/fThc8c64F6DL99bCJx1N9mOJs8A3+FMCPe6BlF/wCta2DZiqJ8QGFYvSMpMQMZkidE/XDUsFtRYSAQRcXaRcXB2javpYuPXZXZdmabSMxiFocOR7XtcPrCrakRGU1vOfLvh69Mx+Ck9W9aazIevTMfgpPVvWmrU9Vb+wp3O2LRYblmtj6KdT1lTTyMo9Nw58gAs1pH723YN57CoksDvANjfaFaUQga3O2KRZrrsLpYaKWOn4bTG5pEp4JrXuHVXN2l1jpAuBa+1dWJZ+r6Weglhjo+g6x4mibM0te6mdMI2OuXDptN37AbAi9htV3XVUOH0FTXTt/V08TpnlrQXWa0nZ37LJixitp6R1bjmG01HQtg4bhoZuGMV7Wje3SDqNxbTcE7ORV8/a3j6S9djXwfmGsqoqyprqplVOI6KOqkZKwMY4iN9MQWmLpb8I2x2gr1DM+JVcFUyOuwmsgiwuoq5ZqNkgDi0ABgOrpSC7aQTu7B3auJZ5wmiw2qq4RNLVQwyuNO6mka9hjtcS7Lxi5aLnZtWjSZhwqrxN2FwzA1TdbdPBEMc5ti9rXWs4tvtAT9PxC4pnXFzQ1UNLWYfC9kz4SI43mamjjLDwzyXW0kHSfDe++36cw6mNOtj7gHWwdK7vjvHeF001FT0bZmwRhomlfM++27nm7t/Yv2Ny9CmImETIuW9UPCuFy3qh4VZV1ZE62f+sq/XvVKprInWz/1lX696pVyT26Y6ERESIiIJvP3WHjP0Z3+y7HdWfCuvP3WHjP0Z3+y7HdWfCttJlquERFqyeaur6TDKN9XXVDKenYQHSP3AkgDykgLmhrqXE6QVVDUMqICSBJGbi42EHkI5CszNlDWYhl98FCyR9QJ4JWtilbG+zJWuOlztgNgbX7KnaHLeNuqGyScNTAOrZ4nS1TXyiaRkYjfMY+leQ5riLAgAC6rMzlaIjC+0kfunyJYncD5F+aw5TzHI79TJUYbBOxlJPE7EDO5jS28s7XXNiXtbYb7EnZey9FTgGZZYcKq3RyS4gZ5KiribXaIY3ue09hwNg1tgWk9kaTe6Zn6Mf1+haXbOlO3dsXC/NsPypmY4mz4TqJ5aU1rH1RbVaRO0OeS4WfqGwtFrN32sbXX6T2FMTlExgREUoZOLfPWWvGf/hlVv2FEYt89Za8Z/wDhlVv2Fz6ns3p0IiKi4iIgKfzz1iY79Bl/7SqBT+eesTHfoMv/AGlB8R/smf5R/ZfS+Y/2TP8AKP7L6XW5RERBnyY7hMWKNwyTEaZtc4gCAv6Yki4HJcjcN60dLr20m/gUZXYXjr8aqTQUracT1IlNUKlrqd7Q0AOfC4F3DCwAc2wuAb9hZmB5Ux4R08GMPndTdGRPqI+i+rDYpA94LXk2c4s2XF7X0hVzK2Ifo2kncCfqSxAvY2X55iGWszz4Zo6IdLJDOynETZ9s9LG12lxu5o1uc4EguHUjb2Fu5RwbEMMZWTYtNLNWSuja2R85fdjYmDdew6YOvsud6ZMKVERWVFi5g/b4B45pv7PW0sXMH7fAPHNN/Z6rf1Wr274evTMfgpPVvWmsrF5G4BmyeurDweHYpFEzol2xkU8eoBrz+6HNcLE7LtI7IWm17HNDmvYQdoIcCCo058JvHl9IuLt7YeUJdvbDyhXUfE8MVTTywTMEkUrCx7HbnNIsQfqWIMo0T6SSmqazEaphhEETp6i7oGAhw0EAbQWtOo3PSjat67e2HlCXb2w8oUYT5TM+R6CojqNdfifD1TJI6uobOBJUtfa4f0trCwtYC27sleuhynhuHY5Li1Pwomkc92g6dIc/qiDp1beQkgXNgtu7e2HlCXb2w8oTEGZcouLt7YeUJdvbDyhShyuW9UPCvm7e2b5QvFiWMUWEwiWolDpHG0VPGdUs7+wxjRtJP/8AVGUvVkTrZ/6yq9e9Uqxcp4bU4VlulpqwNFW7XNO1puGvkeXuaD2bF1vqW0uWe3RAiIiRERBN5+6w8Z+jO/2XY7qz4V68yYY/GctYjh0Tg2Wop3sYTuDrbL969lh4Ri0WL012jg6yPpKqldskgkHVNc3fv3HcRYha6UstSGgi50P7R3kTQ/tHeRasnCLnQ/tHeRND+0d5EHCLnQ/tHeRc6H9o7yIPlFzof2jvImh/aO8iDhFzof2jvIudDu1d5EGPi3z1lrxn/wCGVW43KGjkZjmbMOp6NwmgwqV1TVzMN2Mk0OYyK+4u6cuI7AAvvCuVhqTmW9OhERUXEREBT+eesTHfoMv/AGlUCzsdw74XwDEMNDww1VPJCHHc0uaQD5UGbH+yZ/lH9l9LMwTFGYlSthkHBYjTtEdXSOP6yGQCxuOy07w7cQQtXQ7tXeRdUTlzTD5RfWh3anyJod2p8iIfKL60O7U+RNDu1PkQfKL60O7U+RNDu1PkQfKL60O7U+RNDu1PkQfKxcw/t8A8c039nrc0O7V3kWFK5mP5lw3D6J4ljw6qbW1s0Zu2Ita4Mjvu1uLr27Abt3hVvPxWr2uZYo54nRSxtkjeLOY8XBHIQd6wnZHys5xJy/htzyU7QqBFzuhP8Rsq9z+HejtTiNlXufw70dqoEQT/ABGyr3P4d6O1ccRsrW638O9HaqFDuQQGWsn5cqajHhNglDIIsUkjjDoQdLQyMgDkFyfKt/iNlXufw70dq68p/Kcx+OJfVxqkQT/EbKvc/h3o7U4jZV7n8O9HaqBEE/xFyt3P4d6O1ezDst4LhMxmw/CqKllItwkULWutyXtdaiICIiAiIgIiICycUyzguNStlxHC6WplaLCR8Y1gcmobbLWRBNfF9lTmSm/q96fF9lTmSm/q96pUQTXxfZU5kpv6venxfZU5kpv6veqVEH59mrJWXKLCYJafCYI3ur6SMlpcLtdOxrhv3EEj61t/F9lTmSm/q967M6/MlN4yovaI1RIJr4vsqcyU39XvT4vsqcyU39XvVKiCa+L7KnMlN/V70+L7Kl/mSlPeIJH91Sog6KOipcPpmU1HTxU8DBZscTA1rfAAu9EQEREBERAREQZeKZcwbGnNfiWGUtU9gs18sYLgOQHfZZ3xf5U5io/MPvVKiCa+L/KnMVH5h96fF/lTmKj8w+9UqIJr4v8AKnMVH5h96ws4ZKy3Q5ddPTYPSxS9FUrdTAQbOnja4b+yCR9a/QlN5761n/TKP2mJBxxAypzFR+Yfenxf5U5io/MPvVKEQTXxf5U5io/MPvT4v8qcxUfmH3qlRBNfF/lTmKi8w+9btFQ0mHUraaipoaaBnUxwsDGj6gvQiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIsPFcwigdUwQ00ktVC1knBmwDmOcGgg37JJA77TfYg3EWTQ442umfEyjnaYoi+W+k6SHObp2Habsdu2buVeCPOlC6Gle6GVjp3kaCWlzAC0EkA3uC4DTv37EFKiwIc0MnjPB4fVGZxHAwksvKCHm4N7DZG7f3uVfOG5hqK6GkmdTMDJ3iLSCdQfwIktt7+oIKFEG5EBERAREQTudfmSm8ZUXtEaolO51+ZKbxlRe0RqiQEREBERAREQEREBERAREQEREBERAU3nvrWf9Mo/aYlSKbz31rP+mUftMSCkCIEQEREBERAREQEREBDuRDuQQmDY5Nh2J5igjwPFa0HFpHcLSRxln7OPZ0zwb/UtfjXU9ymYPsofxUyn8pzH44l9XGqSw5EE3xrqe5TMH2UP4qca6nuUzB9lD+KqSw5EsORBN8a6nuUzB9lD+KnGup7lMwfZQ/iqksORLDkQTfGup7lMwfZQ/irxy4vHNK6WTJeOukebucYYbnd/wDb/wAo8isLDkSw5EEjHjbYXSOiydjzDJ1ZbFENXTF3+LyucfrXmZV0rNOnJeYLtk4QOLYyS7ZvJmuR0rdh2bByK3sORLDkQRcmIU0kBhdkrHdBa1vSxxAgNvaxEtx1TvKV1R1ghLWwZWzJFCwl0cTI4QGHgxHcfrL7GjZ3yrmw5EsORBNDNVSABxUzBs/+qH8Vc8a6nuUzB9lD+KqSw5EsORBN8a6nuUzB9lD+KnGup7lMwfZQ/iqksORLDkQTfGup7lMwfZQ/ir4mzdVRwyPGVceBa0kaoobbB2f1qp7DkXBAO8IPyGi/SDXZzy9SGqyxiFAPhCiPRRF6d3/ER7nGx8gPhX6+pzOgAwSmAG7EqL2iNUaAiIgIiICIiAiIgIiICIiAiIgIiICm899az/plH7TEqRTee+tZ/wBMo/aYkFIEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIiAiIgIiICIiAiIgIiIJ3OvzJTeMqL2iNUSnc6/MlN4yovaI1Q3Qcol1m4/Ty1eX8Rp6dmuaWmexjb2uS0gBBo627No299eSTFKGKq6GfUxibSHaL3Nje3l0nyKcflOolhmINNTPfCWRRwklsN3NJa0kbnBpvs/eOxdYyfUimkAmgbNJo6baS0ASDTcAbBwgtsG7cEFdNUwwaeFlazU4MGo7ydwXMc8UpkEcjHmN2h+k30nkPIdqjOL01fmB5qKKLoaKRzpZpmm9ReUPaCNxAAsPq3bl7qPLEsGBVmGydDEzyxyOe2/TgBmrVs/wCQjwFBUahyjlS4O5ScuVqp2J1tQ2ojdFLtaxxsHtuw8E4AdSA0jedh3b148PyxiwpaincaeiifLVPbwUjiYy8FjQ0WtpFgb9/cEFs+aKOMyPka1gBcXE7LDaSut9ZTsbE4zMtL+zsb69l9lt+xSPFCqMdM3VThw4Rsmp+prI3/ALrW6AOU3GnaeyFo1GEVTqPDaaNkcZjpXU7uCPSRu6QgjcbdIRu7KDdp62mq4nyQTNkjY9zHOadgc02Iv3iu64va+3kWAMuMOF0lC9lO6KKrfUSs09K8EvNrdk3cN/Is05SrzPq6Ob8lbFq1HeIgwt3XLSQXdV2d19qCx1A2sRt2jvrgPabWcDfdt3qVflmpmxClqP1EELIw11PDIQ2OxddrTpBs7VtsW7tx2Lopcq11P0A5ppWvppHAHVqDYzbZbQNTth6YaTuuTtQWWtp7I323r4E8RndAHt4VrQ4svtAJIB/0Ki6HKVXRyVdVVmGS1Lphjgu5zZBY6wLAAktHf5SVtYRQ1sFTSyVbGiVtI41D2m7XTSPD3Ad4EHyhBvKbz31rP+mUftMSopJGxxukeQGtBJPIAo7MuNYZjmTHVOF19NWQmro+ngkDrf8AEx77bvrQWYRAiAiIgIiICIiAiIgIdyIdyCbyn8pzH44l9XGqRTeU/lOY/HEvq41SICIiAiIgIiICIiAiIgIiICIiAiIgmc+QRVWXI6eeNskMuIUbHsducDUR3BX1xByrzFR+Z+a+s6/MlN4yovaI1RIJviDlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJviBlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJviDlTmKj8z804g5U5io/M/NUiIJmT9H2VXxuZ8CUjdQIuG7QpSv/RtlnJuWXT4XQnozoqkaaqZ5fIQamK/eH1AL9RU3nvrWf9Mo/aYkFIEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIiAiIgIiICIiAiIgIiIJ3OvzJTeMqL2iNUSnc6/MlN4yovaI1RICIuuSaKJzGySMa55s0OcAXHkHKg7EXQ6tpWC7qmEDpt7x+6LnyDevNR41QV9L0TT1AMFr63DSALA9nvOB+tBoIvA/GsNjZUOfWwNbT24UueBpuAb+Dpht769T6iGPq5o29KX9M4DpRvPgQdqLpNXTh2kzxBxZrsXi+nl8HfXIqYHcHaaM8L+zs4dP4OVB2ougVtKWB/RMOku0B3CCxdyeHvL7FREeEtKw8F1dnDpdl9vIg7EXhjxeilqqemZLeaojMsbdJu5gAJd3h0w8q7+jKbRI/oiLTGbPdrFmnkPIg70XU6pgY57XTRtcxutwLgNLeU8g764NXThwaZ4gSzhLax1PbeDvoO5F0CspnaLVER4Rpcyzx0wG8jlC4krqaKn4d07OCvbW03G+3Y75+pB6FN5761n/TKP2mJUim899az/AKZR+0xIKQIgRAREQEREBERAREQEO5EO5BN5T+U5j8cS+rjVIpvKfynMfjiX1capEBERAREQEREBERAREQEREBERAREQTudPmWm8ZUXtEa1HYzhjMVjws19P0fIHObTCQGQgC5OneAsnO7WvwKBjhdrsRogRyjoiNYzP0QZQizC3GIKGSN9na4BK4xSFw3kE3B7OwoLy6wMbwaoxPF6OWNsAhZBLHJJIzU9hc6Mgs5HdIdvgXxxCyxzTF57/AHpxCyxzTF57/eg8r8nEy0pZOwMYwtkaGkAnW59wB2SXWPLbs7l8TZYqKOCKSmbHVOhItBoAa7ZGNoJAt+rJtykci9vELLHNMXnv96cQssc0xee/3oM2hyVJDgzYZDStqXRuD7Q3bcsY0N/ygs3ci18UwA4i6eUPjZM+GFjDp3FkheRftTcAjvLq4hZY5pi89/vTiFljmmLz3+9Bl12TqvoMspX073upeBkEjS4Sm+wEE20i+8WNhbs7PdxXmL2P4Wnbrdqk0xH9TZ+u0Xa33Hl395d3ELLHNMXnv96cQssc0xee/wB6DyPye+OkijppKdkkb4nMdwRAYWxhjiANhvbcd/8AqvRR5YkpG4oDU6+i4nxMdtv0xcbu74LrfV9S++IWWOaYvPf704hZY5pi89/vQd+H4M+PGDiswY2V8AYYg25YdLAQHcnSHyrOkyeRR8HBPGx4EZIDNLXua6QkutvuJPK1eriFljmmLz3+9OIWWOaYvPf70HS7K0opKilZNDpe2JzJSw8JqZo6Uu29IdG7bv723pGT3gsaJIHRmldDOHh54QnVYb9gBdsIsbCy9nELLHNMXnv96cQssc0xee/3oMyoyZXVMcDJK2DpWBrjwZuAC/YLW1bHWueQ7Nq9kuA1QdiEcEUbaZ1OIKZjQGhrn2ErxbcOlbs33DuVd/ELLHNMXnv96cQssc0xee/3oKIbABtU5nrrWf8ATKP2mJc8Qssc0xee/wB6x8z5YwbBsvyVOH0LIJjU0jC5rnHYamLZtPeQXYRAiAiIgIiICIiAiIgIdyIdyCbyn8pzH44l9XGqRTeU/lOY/HEvq41SICIiAiIgIiICIiAiIgIiICIiAiIgnc6/MlN4yovaI1RKdzr8yU3jKi9ojVEgIiICIiAiIgIiICIiAiIgIiICIiApvPfWs/6ZR+0xKkU3nvrWf9Mo/aYkFIEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIiAiIgIiICIiAiIgIiIJ3OvzJTeMqL2iNUSnc6/MlN4yovaI1RICIiAiIgIiysbxuPBYGSPhfLq1HSwi+lou427Oz/9CDVRTlXmeSCOOojw+SSjdLIwymRoJaxj3OcBv3stY2XbW5pp6KTS6nldpmdG+1rgN0gutvPVj/VBvIsHjGIMNoqqpp3EzRSSyGPqY2sF3HbtPeC6Bm+J1MJWUNQ9zSTK1pb0jQWjVckauqG7kPIgpUU9U5tpaenbJwEpc9sZYzYNWoOdv7wYf9F1uzWZKttPTUEjiZoWDhXhhMclunAO2wv/AHGxBSoiICIiApvPfWs/6ZR+0xKkU3nvrWf9Mo/aYkFIEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIiAiIgIiICIiAiIgIiIJnPj5IsuRyRQmaRuIUZbEHBpeeiI9lzsH1r6+HMw9yNT6dB95fWdfmSm8ZUXtEaokE0cczF2MoVH118HvT4czJ3ITfzCD3qlRBMnHMy9jKEv14hD71x8OZm7kX/wAxhVOiCYOOZn7GUH/XiUK8VfUY3ikbY67I7Z2tuAHYnFuIsRs7BG8birREEO9uKymQvyJGeEfrcHYnHYmxF7W5Cb8tyus0uIGJkRyFCWMcXAHFGG5JBN9m25AO2+0BXiIJAVOOlkbOJUGmNrmMa7Eo9gdvHU7ivFU0WKVVE2ldkuJrGO1Nc3FW6gbg3uW7doG++4civEQQ7abExFLG3JFK1srg9/8A6qASRe20N2bzsHKQvt8WLvnMzsl0hkOnb8KjpdJBFuk2bWjdyBWqIJv4VzUd2WKUeHFB+GnwrmvuZo/5oPw1SIgm/hPNh3ZboR4cU/8Axp8J5t7nKD+aH8JUiIJr4Rzcf/j2Ggd/FHfhKAbjX6QMRy5KzM2A0tNRitpQKoycHKR0THb9Xtv4elX7IpvPXWs/6ZR+0xIKQIgRAREQEREBERAREQEO5EO5BN5T+U5j8cS+rjVIpvKfynMfjiX1capEBERAREQEREBERAREQEREBERAREQTudfmSm8ZUXtEaolO51+ZKbxlRe0RqiQEREBERAREQEREBERAREQEREBERAU3nvrWf9Mo/aYlSKbz31rP+mUftMSCkCIEQEREBERAREQEREBDuRDuQTeU/lOY/HEvq41SKbyn8pzH44l9XGqRAREQEREBERAREQEREBERAREQEREE7nX5kpvGVF7RGqJTmdSBgdOSQAMSorkm3/uI13xZxy7PjLsJhxijlrmMMj4mSh2kAgG5GwHaNl7oNxF5fhOh/jab7VvvT4Tof42m+1b70HqReX4Tof42m+1b70+E6H+NpvtW+9B6l4ZMYw6J87JK2FroG6pQX9SN3+48q+/hKh/jab7VvvU5Ng9DJikleMbhbJqc+K5YdDi9j9pvtALBsFtnf2oN2nx3DKqSoZFWRk07g2S5t2Gm45R07dvfX0MZoHVbaWOobJMZeCLWG+l1nHb5pHhWFUYXTVFQ6U4/COEN5BaPaDweob9lzE3wXPhClwjDqfGxiTsZikc17nNYXMGwlx2m+3q+8Ng2b0G8/GcNj4TXWwDg5eBfd46V/anvrrfmDCGNLn4lTNAkMVzIBdwvcDl3HyHkWPX4ThdbAI/hSJjhPLLq4Ru6S+ptg4dg/kV434JBHWRvpccpYoeEe4sAZZrXMLTpbe2o32kWGwbN9wqJcZw2B8zJa6nY6G3CAvF23IAv4SQPrHKjcZw172sbXQEui4YdOOotfV4LAn6lhswnC46iJwxaLgKeQSwRa2dIdTXOu693XLB4Lnfst0zYFhcwYw4xE2Lod0EgY9odIDqtch20Auva28bCNoIVVNVQVkDZ6eVssTtzmm4K7ljYR8H4VRmEYhTyPe90j38IBqcd+8k+Ule/4Tof42m+1b70HqReX4Tof42m+1b70+E6H+NpvtW+9B6lN5761n/TKP2mJbXwnQ/xtN9q33qfzrWU1Rll7IaiGRwq6M2Y8E26Ji5EFUEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgIiICIiAiIgIiICIiAiIgIiIJrPMbJsAhjlY18b8Romua4XDgaiPYQvLT/owydS407FIMCpWSujdG6LQDCbkG/Bm7Qdm8WXtzr8yU3jKi9ojVEgxuKOWu5/CvQ4/cnFHLXc/hXocfuWyiDG4o5a7n8K9Dj9ycUctdz+Fehx+5bKIMbijlvufwr0OP3JxRy33P4V6HH7lsogxuKOW+5/CvQ4/cnFHLfc/hXocfuWyiDG4o5b7n8K9Dj9ycUctdz+Fehx+5bKIMbijlrufwr0OP3JxRy33P4V6HH7lsogxuKOW+5/CvQ4/cnFHLXc/hXocfuWyiDG4o5a7n8K9Dj9ycUctdz+Fehx+5bKIMbijlrufwr0OP3LEzbgOD4Zl2SegwqhpZjVUjTJBTsY4jomLZcDcrRTee+tZ/wBMo/aYkFIEQIgIiICIiAiIgIiICHciHcgm8p/Kcx+OJfVxqkU3lP5TmPxxL6uNUiAiIgXRScOLVzJJKmZ9W6Lo18DWuETYS0SloDSBruAOz3124dmipq8Ro6WWia3h42Oe5jyQ0vYXixNrgAWPfQU6KYrMz1MWJ9BU9NTudJU9DR8JKQ5pFrucANjSDs5dnKvMzNtTwD6gxQ6XASNbJJpDWiFr3NDrbXEk2QWCKUObnmvkpWwQjUSInvksG2kDCX9kC7ux2di+MIx6vrKSmqppInAzwwvZGAWu13uWu7I6ZtjyN76CuRTeJZlmoquphjp4H8EeDa10pDy/S12oi2xnTWvyr0YjjkuH1kUDooXWYx0gMhDnF7iy0YttsRc96yDcRR7s4VcVEySSgjMzi11o5CWhpiEtrkDbY25OyvRxnqgZ5DRw8DHFNLYSnVZkhjAOywuRcnsDlQVCKWbmKuqJX08cdMwxujjkmY8vBc+XQCwW2i19/Z2dhbeF1UlTDOJTd0VRLFqta4a42/0t5EHuREQTudfmSm8ZUXtEaolO51+ZKbxlRe0RqiQEREBERAREQEREBERAREQEREBERAU3nvrWf9Mo/aYlSKbz31rP+mUftMSCkCIEQEREBERAREQEREBDuRDuQfm0smb46fMZylDhktR8Ly6+jHuDh+rj6gdST/mK9+W5f0iPy9SOxKDCOjS08L0TJI2S+o7wxunydha2U/lOY/HEvq41SIJrVnb/AAMv/bTfdTVnb/By/wDbTfdVKiCY05ztboXLtr3tws2/l6lfIizgJGyCjy3wjW6Gu4Sa4byA6NyqUQS3BZw4Uy9B5b4Q2Bfwk2o23bdHYXDoM3PaGuoctFoIcAXykAjceo3hVSIJM0ubC6Rxw/LJdKLSEulu/wAPSbV1jDs0iobO2gy417S0t0zTgAtBA2abbA4qwRBLGLODpDIaPLZkLdJcZJrkb7X0bly+POMkjHvpMuOey+hzpJiW332OnYqhEEq+DN0jQ19DlpzQQQHPlIuNx6jsL70ZyF7UuXdtwf1s3Z3/ALqp0QST6PNj6foc0OWxFYDS2WZoFjcWs3Zt2rsgizlTR8HDTZfa3U51uHnO0kknqeUlVKIJrVnb/Ay/9tN91NWdv8DL/wBtN91UqIIHMzs0/B9J8IRYMKb4Ro9RgllL/lEdrXaBvV8FO51+ZKbxlRe0RqiQEREBERAREQEREBERAREQEREBERAU3nvrWf8ATKP2mJUim899az/plH7TEgpAiBEBERAREQEREBERAQ7kRBN5T+U5j8cS+rjVIiICIiAiIgIiICIiAiIgIiICIiAiIgnc6fMlN4yovaI1RIiAiIgIiICIiAiIgIiICIiAiIgIiICm89daz/plH7TGiIKQIiICIiAiIg//2Q=="}}]);