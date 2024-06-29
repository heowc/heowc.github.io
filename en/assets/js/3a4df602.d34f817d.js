"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[1321],{12036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(74848),o=n(28453);const l={title:"Spring Boot - Interceptor",slug:"2018/02/06/spring-boot-interceptor",date:new Date("2018-02-06T21:04:21.000Z"),category:["spring"],tags:["spring","spring-boot","interceptor"]},i=void 0,c={permalink:"/en/2018/02/06/spring-boot-interceptor",source:"@site/blog/spring-boot-interceptor.md",title:"Spring Boot - Interceptor",description:"Interceptor\ub294 \uac00\ub85c\ucc44\ub294 \uac83, \uc694\uaca9\uae30 \ub77c\ub294 \ub73b\uc774\ub2e4.",date:"2018-02-06T21:04:21.000Z",tags:[{inline:!0,label:"spring",permalink:"/en/tags/spring"},{inline:!0,label:"spring-boot",permalink:"/en/tags/spring-boot"},{inline:!0,label:"interceptor",permalink:"/en/tags/interceptor"}],readingTime:2.6,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - Interceptor",slug:"2018/02/06/spring-boot-interceptor",date:"2018-02-06T21:04:21.000Z",category:["spring"],tags:["spring","spring-boot","interceptor"]},unlisted:!1,prevItem:{title:"Spring Boot - AOP",permalink:"/en/2018/02/07/spring-boot-aop"},nextItem:{title:"Spring Boot - Cache",permalink:"/en/2018/02/05/spring-boot-cache"}},s={authorsImageUrls:[]},p=[{value:"Dependency",id:"dependency",level:3},{value:"Interceptor",id:"interceptor",level:3},{value:"Config",id:"config",level:3},{value:"Controller",id:"controller",level:3},{value:"IndexController (\ucc38\uace0)",id:"indexcontroller-\ucc38\uace0",level:4},{value:"UserController (\ucc38\uace0)",id:"usercontroller-\ucc38\uace0",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:4},{value:"\uadf8 \uc678",id:"\uadf8-\uc678",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Interceptor"}),"\ub294 \uac00\ub85c\ucc44\ub294 \uac83, \uc694\uaca9\uae30 \ub77c\ub294 \ub73b\uc774\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(t.mermaid,{value:"    graph LR\n        V[View] --\x3e C[Controller]\n        V[View] --\x3e I[Interceptor]\n        I[Interceptor] --\x3e C[Controller]  "}),"\n",(0,r.jsx)(t.p,{children:"\ub2e4\uc2dc \ub9d0\ud574\uc11c, Url Mapping\ub41c Controller\ub97c \uac70\uce58\ub294 \uc804, \ud6c4 \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uc694\uc18c\ub97c \ub9d0\ud558\uba70 \uc138\uc158 \uac80\uc99d, \ub85c\uadf8 \ucc98\ub9ac \uac19\uc740 \ud589\uc704\uac00 \uac04\ub2e8\ud55c \uc608\uc2dc\uac00 \ub420 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(t.h3,{id:"dependency",children:"Dependency"}),"\n",(0,r.jsxs)(t.p,{children:["Interceptor\ub294 ",(0,r.jsx)(t.code,{children:"spring-webmvc"}),"\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub2e4. Spring Boot\uc5d0\uc11c\ub294 ",(0,r.jsx)(t.code,{children:"spring-boot-starter-web"}),"\uc744 \uac00\uc838\uc634\uc73c\ub85c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"dependencies { \n    compile('org.springframework.boot:spring-boot-starter-web') \n    testCompile('org.springframework.boot:spring-boot-starter-test') \n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"interceptor",children:"Interceptor"}),"\n",(0,r.jsxs)(t.p,{children:["\uae30\ubcf8 \uc778\ud130\ud398\uc774\uc2a4\ub294 ",(0,r.jsx)(t.code,{children:"HandlerInterceptor"}),"\uc774\uace0, \uc774\ub97c \uad6c\ud604\ud560 \uc218 \ud574\ub3c4 \ub418\uc9c0\ub9cc, \ucd94\uc0c1 \ud074\ub798\uc2a4\uc778 ",(0,r.jsx)(t.code,{children:"HandlerInterceptorAdapter"}),"\ub97c \uad6c\ud604\ud560 \uc218\ub3c4 \uc788\ub2e4. Java 1.8 \ubd80\ud130\ub294 \uad73\uc774 ",(0,r.jsx)(t.code,{children:"HandlerInterceptorAdapter"}),"\ub97c \uc774\uc6a9\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4. \ud558\uc9c0\ub9cc, \uc608\uc2dc\ub97c \uc704\ud574 \ubaa8\ub450 \uad6c\ud604 \ud574\ubcf8\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@Component\npublic class HttpInterceptor extends HandlerInterceptor {\n\n\tprivate static final Logger logger = Logger.getLogger(HttpInterceptor.class);\n\t\n\t@Override\n\tpublic boolean preHandle(HttpServletRequest request,\n\t\t\t\t\t\t\t HttpServletResponse response,\n\t\t\t\t\t\t\t Object handler) {\n\t\tlogger.info("================ Before Method");\n\t\treturn true;\n\t}\n\t\n\t@Override\n\tpublic void postHandle( HttpServletRequest request,\n\t\t\t\t\t\t\tHttpServletResponse response,\n\t\t\t\t\t\t\tObject handler,\n\t\t\t\t\t\t\tModelAndView modelAndView) {\n\t\tlogger.info("================ Method Executed");\n\t}\n\t\n\t@Override\n\tpublic void afterCompletion(HttpServletRequest request,\n\t\t\t\t\t\t\t\tHttpServletResponse response, \n\t\t\t\t\t\t\t\tObject handler, \n\t\t\t\t\t\t\t\tException ex) {\n\t\tlogger.info("================ Method Completed");\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"preHandle()"})," : \ub9f5\ud551\ub418\uae30 \uc804 \ucc98\ub9ac\ub97c \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"postHandle()"})," : \ub9f5\ud551\ub418\uace0\ub09c \ud6c4 \ucc98\ub9ac\ub97c \ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"afterCompletion()"})," : \ubaa8\ub4e0 \uc791\uc5c5\uc774 \uc644\ub8cc\ub41c \ud6c4 \uc2e4\ud589 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,r.jsxs)(t.p,{children:["Interceptor\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud574\uc11c ",(0,r.jsx)(t.code,{children:"WebMvcConfigurer"}),"\ub97c \uc774\uc6a9\ud55c\ub2e4. Interceptor\ub97c \ub4f1\ub85d\ud55c \ud6c4 \uc801\uc6a9\ud560 \uacbd\ub85c, \uc81c\uc678\ud560 \uacbd\ub85c\ub97c \uc9c0\uc815\ud574\uc904 \uc218 \uc788\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'@Configuration\npublic class WebMvcConfig implements WebMvcConfigurer {\n\n\t@Autowired\n\t@Qualifier(value = "httpInterceptor")\n\tprivate HandlerInterceptor interceptor;\n\n\t@Override\n\tpublic void addInterceptors(InterceptorRegistry registry) {\n\t\tregistry.addInterceptor(interceptor)\n\t\t\t\t.addPathPatterns("/**")\n\t\t\t\t.excludePathPatterns("/user/**");\n\t}\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"controller",children:"Controller"}),"\n",(0,r.jsx)(t.p,{children:"Test\ub97c \uc704\ud574 \ucf58\uc194\uc5d0 \ud574\ub2f9 \ub85c\uadf8\ub97c \ucc0d\uc5b4\ubcf4\uc790."}),"\n",(0,r.jsxs)(t.h4,{id:"indexcontroller-\ucc38\uace0",children:["IndexController (",(0,r.jsx)(t.a,{href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/controller/IndexController.java",children:"\ucc38\uace0"}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"http://localhost:8080\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"usercontroller-\ucc38\uace0",children:["UserController (",(0,r.jsx)(t.a,{href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/controller/UserController.java",children:"\ucc38\uace0"}),")"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"http://localhost:8080/user\n"})}),"\n",(0,r.jsx)(t.h4,{id:"\uacb0\uacfc",children:"\uacb0\uacfc"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"~~ : Hello, User!\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"~~ : ================ Before Method\n~~ : Hello, Spring Boot Interceptor\n~~ : ================ Method Executed\n~~ : ================ Method Completed\n"})}),"\n",(0,r.jsx)(t.h3,{id:"\uadf8-\uc678",children:"\uadf8 \uc678"}),"\n",(0,r.jsxs)(t.p,{children:["Interceptor \ud6c4\ucc98\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uac12\uc744 \uac00\uacf5\ud558\uac70\ub098 header\uc5d0 \ud0a4\uac12\uc744 \ucd94\uac00\ud558\ub294 \ub4f1\uc758 \uc791\uc5c5\uc744 \ud560 \uc218 \uc5c6\ub2e4. (\ud574\ub3c4 header\uc5d0\uc11c \ud574\ub2f9 \ud0a4\uac12\uc744 \ucc3e\uc544\ubcfc \uc218 \uc5c6\ub2e4.) \uc774\ub7f0 \uacbd\uc6b0\uc5d0\ub294 ",(0,r.jsx)(t.code,{children:"ResponseBodyAdvice"}),"\ub97c \uad6c\ud604\ud574\uc57c \ud55c\ub2e4.(",(0,r.jsx)(t.a,{href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootInterceptor/src/main/java/com/example/advice/HttpResponseAdvice.java",children:"\ucc38\uace0"}),")"]}),"\n",(0,r.jsx)(t.h3,{id:"\ucc38\uace0",children:"\ucc38\uace0"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootInterceptor",children:"SpringBootSample / SpringBootInterceptor"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},l=r.createContext(o);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);