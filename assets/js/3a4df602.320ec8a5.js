"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[1398],{82223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),l=r(95657);const p={title:"Spring Boot - Interceptor",slug:"2018/02/06/spring-boot-interceptor",date:new Date("2018-02-06T21:04:21.000Z"),category:["spring"],tags:["spring","spring-boot","interceptor"]},a=void 0,i={permalink:"/2018/02/06/spring-boot-interceptor",source:"@site/blog/spring-boot-interceptor.md",title:"Spring Boot - Interceptor",description:"Interceptor\ub294 \uac00\ub85c\ucc44\ub294 \uac83, \uc694\uaca9\uae30 \ub77c\ub294 \ub73b\uc774\ub2e4.",date:"2018-02-06T21:04:21.000Z",formattedDate:"2018\ub144 2\uc6d4 6\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"spring-boot",permalink:"/tags/spring-boot"},{label:"interceptor",permalink:"/tags/interceptor"}],readingTime:2.6,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - Interceptor",slug:"2018/02/06/spring-boot-interceptor",date:"2018-02-06T21:04:21.000Z",category:["spring"],tags:["spring","spring-boot","interceptor"]},prevItem:{title:"Spring Boot - AOP",permalink:"/2018/02/07/spring-boot-aop"},nextItem:{title:"Spring Boot - Cache",permalink:"/2018/02/05/spring-boot-cache"}},c={authorsImageUrls:[]},s=[{value:"Dependency",id:"dependency",level:3},{value:"Interceptor",id:"interceptor",level:3},{value:"Config",id:"config",level:3},{value:"Controller",id:"controller",level:3},{value:"IndexController (\ucc38\uace0)",id:"indexcontroller-\ucc38\uace0",level:4},{value:"UserController (\ucc38\uace0)",id:"usercontroller-\ucc38\uace0",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:4},{value:"\uadf8 \uc678",id:"\uadf8-\uc678",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],d={toc:s},g="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Interceptor"),"\ub294 \uac00\ub85c\ucc44\ub294 \uac83, \uc694\uaca9\uae30 \ub77c\ub294 \ub73b\uc774\ub2e4.")),(0,o.kt)(l.G,{chart:"    graph LR\n        V[View] --\x3e C[Controller]\n        V[View] --\x3e I[Interceptor]\n        I[Interceptor] --\x3e C[Controller]  ",mdxType:"Mermaid"}),(0,o.kt)("p",null,"\ub2e4\uc2dc \ub9d0\ud574\uc11c, Url Mapping\ub41c Controller\ub97c \uac70\uce58\ub294 \uc804, \ud6c4 \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uc694\uc18c\ub97c \ub9d0\ud558\uba70 \uc138\uc158 \uac80\uc99d, \ub85c\uadf8 \ucc98\ub9ac \uac19\uc740 \ud589\uc704\uac00 \uac04\ub2e8\ud55c \uc608\uc2dc\uac00 \ub420 \uc218 \uc788\ub2e4."),(0,o.kt)("h3",{id:"dependency"},"Dependency"),(0,o.kt)("p",null,"Interceptor\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-webmvc"),"\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4. Spring Boot\uc5d0\uc11c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-web"),"\uc744 \uac00\uc838\uc634\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies { \n    compile('org.springframework.boot:spring-boot-starter-web') \n    testCompile('org.springframework.boot:spring-boot-starter-test') \n}\n")),(0,o.kt)("h3",{id:"interceptor"},"Interceptor"),(0,o.kt)("p",null,"\uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerInterceptor"),"\uc774\uace0, \uc774\ub97c \uad6c\ud604\ud560 \uc218 \ud574\ub3c4 \ub418\uc9c0\ub9cc, \ucd94\uc0c1 \ud074\ub798\uc2a4\uc778 ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerInterceptorAdapter"),"\ub97c \uad6c\ud604\ud560 \uc218\ub3c4 \uc788\ub2e4. Java 1.8 \ubd80\ud130\ub294 \uad73\uc774 ",(0,o.kt)("inlineCode",{parentName:"p"},"HandlerInterceptorAdapter"),"\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4. \ud558\uc9c0\ub9cc, \uc608\uc2dc\ub97c \uc704\ud574 \ubaa8\ub450 \uad6c\ud604 \ud574\ubcf8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class HttpInterceptor extends HandlerInterceptor {\n\n    private static final Logger logger = Logger.getLogger(HttpInterceptor.class);\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request,\n                             HttpServletResponse response,\n                             Object handler) {\n        logger.info("================ Before Method");\n        return true;\n    }\n    \n    @Override\n    public void postHandle( HttpServletRequest request,\n                            HttpServletResponse response,\n                            Object handler,\n                            ModelAndView modelAndView) {\n        logger.info("================ Method Executed");\n    }\n    \n    @Override\n    public void afterCompletion(HttpServletRequest request,\n                                HttpServletResponse response, \n                                Object handler, \n                                Exception ex) {\n        logger.info("================ Method Completed");\n    }\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preHandle()")," : \ub9f5\ud551\ub418\uae30 \uc804 \ucc98\ub9ac\ub97c \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postHandle()")," : \ub9f5\ud551\ub418\uace0\ub09c \ud6c4 \ucc98\ub9ac\ub97c \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"afterCompletion()")," : \ubaa8\ub4e0 \uc791\uc5c5\uc774 \uc644\ub8cc\ub41c \ud6c4 \uc2e4\ud589 \ub429\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("p",null,"Interceptor\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud574\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"WebMvcConfigurer"),"\ub97c \uc774\uc6a9\ud55c\ub2e4. Interceptor\ub97c \ub4f1\ub85d\ud55c \ud6c4 \uc801\uc6a9\ud560 \uacbd\ub85c, \uc81c\uc678\ud560 \uacbd\ub85c\ub97c \uc9c0\uc815\ud574\uc904 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class WebMvcConfig implements WebMvcConfigurer {\n\n    @Autowired\n    @Qualifier(value = "httpInterceptor")\n    private HandlerInterceptor interceptor;\n\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(interceptor)\n                .addPathPatterns("/**")\n                .excludePathPatterns("/user/**");\n    }\n}\n')),(0,o.kt)("h3",{id:"controller"},"Controller"),(0,o.kt)("p",null,"Test\ub97c \uc704\ud574 \ucf58\uc194\uc5d0 \ud574\ub2f9 \ub85c\uadf8\ub97c \ucc0d\uc5b4\ubcf4\uc790."),(0,o.kt)("h4",{id:"indexcontroller-\ucc38\uace0"},"IndexController (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/controller/IndexController.java"},"\ucc38\uace0"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080\n")),(0,o.kt)("h4",{id:"usercontroller-\ucc38\uace0"},"UserController (",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/controller/UserController.java"},"\ucc38\uace0"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080/user\n")),(0,o.kt)("h4",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"~~ : Hello, User!\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"~~ : ================ Before Method\n~~ : Hello, Spring Boot Interceptor\n~~ : ================ Method Executed\n~~ : ================ Method Completed\n")),(0,o.kt)("h3",{id:"\uadf8-\uc678"},"\uadf8 \uc678"),(0,o.kt)("p",null,"Interceptor \ud6c4\ucc98\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uac12\uc744 \uac00\uacf5\ud558\uac70\ub098 header\uc5d0 \ud0a4\uac12\uc744 \ucd94\uac00\ud558\ub294 \ub4f1\uc758 \uc791\uc5c5\uc744 \ud560 \uc218 \uc5c6\ub2e4. (\ud574\ub3c4 header\uc5d0\uc11c \ud574\ub2f9 \ud0a4\uac12\uc744 \ucc3e\uc544\ubcfc \uc218 \uc5c6\ub2e4.) \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"ResponseBodyAdvice"),"\ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4.(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/advice/HttpResponseAdvice.java"},"\ucc38\uace0"),")"),(0,o.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootInterceptor"},"SpringBootSample / SpringBootInterceptor")))}u.isMDXComponent=!0}}]);