"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[9945],{79584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(87462),o=(t(67294),t(3905));t(95657);const r={title:"Spring Boot - AOP",slug:"2018/02/07/spring-boot-aop",date:new Date("2018-02-07T23:48:38.000Z"),category:["spring"],tags:["spring","spring-boot","aop"]},l=void 0,a={permalink:"/en/2018/02/07/spring-boot-aop",source:"@site/blog/spring-boot-aop.md",title:"Spring Boot - AOP",description:"AOP\ub294 Aspect Orient Programming \uad00\uc810 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc73c\ub85c, \uae30\ub2a5\uc744 \ube44\uc9c0\ub2c8\uc2a4 \ub85c\uc9c1\uacfc \uacf5\ud1b5 \ubaa8\ub4c8\ub85c \uad6c\ubd84\ud55c \ud6c4\uc5d0 \ud544\uc694\ud55c \uc2dc\uc810\uc5d0 \ube44\uc9c0\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc0bd\uc785\ud558\uc5ec \uc2e4\ud589\ub418\uac8c\ub054 \ub3c4\uc640\uc900\ub2e4.",date:"2018-02-07T23:48:38.000Z",formattedDate:"February 7, 2018",tags:[{label:"spring",permalink:"/en/tags/spring"},{label:"spring-boot",permalink:"/en/tags/spring-boot"},{label:"aop",permalink:"/en/tags/aop"}],readingTime:2.915,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - AOP",slug:"2018/02/07/spring-boot-aop",date:"2018-02-07T23:48:38.000Z",category:["spring"],tags:["spring","spring-boot","aop"]},prevItem:{title:"Thread Pool \uc774\ud574\ud558\uae30",permalink:"/en/2018/02/08/thread-pool"},nextItem:{title:"Spring Boot - Interceptor",permalink:"/en/2018/02/06/spring-boot-interceptor"}},g={authorsImageUrls:[]},p=[{value:"\uc5b8\uc81c \uc0ac\uc6a9\ub418\ub294\uac00?",id:"\uc5b8\uc81c-\uc0ac\uc6a9\ub418\ub294\uac00",level:3},{value:"\uad6c\uc131\uc694\uc18c",id:"\uad6c\uc131\uc694\uc18c",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Config",id:"config",level:3},{value:"Aspect",id:"aspect",level:3},{value:"Controller, Service",id:"controller-service",level:3},{value:"Controller",id:"controller",level:4},{value:"Service",id:"service",level:4},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],A={toc:p},s="wrapper";function c(e){let{components:n,...r}=e;return(0,o.kt)(s,(0,i.Z)({},A,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"AOP"),"\ub294 Aspect Orient Programming \uad00\uc810 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc73c\ub85c, \uae30\ub2a5\uc744 \ube44\uc9c0\ub2c8\uc2a4 \ub85c\uc9c1\uacfc \uacf5\ud1b5 \ubaa8\ub4c8\ub85c \uad6c\ubd84\ud55c \ud6c4\uc5d0 \ud544\uc694\ud55c \uc2dc\uc810\uc5d0 \ube44\uc9c0\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc0bd\uc785\ud558\uc5ec \uc2e4\ud589\ub418\uac8c\ub054 \ub3c4\uc640\uc900\ub2e4. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alt intro",src:t(49498).Z,width:"400",height:"303"})),(0,o.kt)("h3",{id:"\uc5b8\uc81c-\uc0ac\uc6a9\ub418\ub294\uac00"},"\uc5b8\uc81c \uc0ac\uc6a9\ub418\ub294\uac00?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \uac80\uc0ac"),(0,o.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158 \ucc98\ub9ac"),(0,o.kt)("li",{parentName:"ul"},"\ub85c\uae45"),(0,o.kt)("li",{parentName:"ul"},"\uc608\uc678 \ubc18\ud658"),(0,o.kt)("li",{parentName:"ul"},"\uac80\uc99d"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"\uc2e4 \uc608\ub85c, ",(0,o.kt)("inlineCode",{parentName:"p"},"@Transactional"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@Cache"),"\uac19\uc740 \uc560\ub178\ud14c\uc774\uc158\ub4e4\uc740 AOP\ub97c \ud65c\uc6a9\ud558\uc5ec \ub3d9\uc791\ud558\uac8c \ub41c\ub2e4."),(0,o.kt)("h3",{id:"\uad6c\uc131\uc694\uc18c"},"\uad6c\uc131\uc694\uc18c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JoinPoint"),": \ubaa8\ub4c8\uc758 \uae30\ub2a5\uc774 \uc0bd\uc785\ub418\uc5b4 \ub3d9\uc791\ud560 \uc218 \uc788\ub294 \uc2e4\ud589 \uac00\ub2a5\ud55c \ud2b9\uc815 \uc704\uce58"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PointCut"),": \uc5b4\ub5a4 \ud074\ub798\uc2a4\uc758 \uc5b4\ub290 JoinPoint\ub97c \uc0ac\uc6a9\ud560 \uac83\uc778\uc9c0\ub97c \uacb0\uc815"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Advice"),": \uac01 JoinPoint\uc5d0 \uc0bd\uc785\ub418\uc5b4\uc838 \ub3d9\uc791\ud560 \uc218 \uc788\ub294 \ucf54\ub4dc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Interceptor"),": InterceptorChain \ubc29\uc2dd\uc758 AOP \ud234\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\ub85c \uc8fc\ub85c \ud55c\uac1c\uc758 \ud638\ucd9c \uba54\uc18c\ub4dc\ub97c \uac00\uc9c0\ub294 Advice"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Weaving"),": PointCut\uc5d0 \uc758\ud574\uc11c \uacb0\uc815\ub41c JoinPoint\uc5d0 \uc9c0\uc815\ub41c Advice\ub97c \uc0bd\uc785\ud558\ub294 \uacfc\uc815(CrossCutting) "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Introduction"),": \uc815\uc801\uc778 \ubc29\uc2dd\uc758 AOP \uae30\uc220"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Aspect"),": PointCut + Advice + (Introduction)")),(0,o.kt)("h3",{id:"dependency"},"Dependency"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JDK DynamicProxy"),"\ub97c \uc774\uc6a9\ud558\uc5ec AOP \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"AspectJ"),"\ub97c \uc0ac\uc6a9\ud574\ubcf4\ub3c4\ub85d \ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies { \n    compile('org.springframework.boot:spring-boot-starter-web')\n    compile('org.springframework.boot:spring-boot-starter-aop') \n    testCompile('org.springframework.boot:spring-boot-starter-test') \n} \n")),(0,o.kt)("h3",{id:"config"},"Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableAspectJAutoProxy\npublic class AspectJConfig {\n}\n")),(0,o.kt)("h3",{id:"aspect"},"Aspect"),(0,o.kt)("p",null,"\uad6c\uc131\uc694\uc18c\ub4e4\uc744 \uc801\uc808\ud788 \ud65c\uc6a9\ud558\uc5ec \ub85c\uadf8\ub97c \ucc0d\uc5b4\ubcfc \uc218 \uc788\ub3c4\ub85d ",(0,o.kt)("inlineCode",{parentName:"p"},"Aspect"),"\ub97c \ub9cc\ub4e0\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Aspect\n@Component\npublic class TestAspect {\n\n    private static final Logger logger = LoggerFactory.getLogger(TestAspect.class);\n    \n    @Before("execution(* com.example.service.*.*Aop(..))")\n    public void onBeforeHandler(JoinPoint joinPoint) {\n        logger.info("=============== onBeforeThing");\n    }\n    \n    @After("execution(* com.example.service.*.*Aop(..))")\n    public void onAfterHandler(JoinPoint joinPoint) {\n        logger.info("=============== onAfterHandler");\n    }\n    \n    @AfterReturning(pointcut = "execution(* com.example.service.*.*Aop(..))",\n                    returning = "str")\n    public void onAfterReturningHandler(JoinPoint joinPoint, Object str) {\n        logger.info("@AfterReturning : " + str);\n        logger.info("=============== onAfterReturningHandler");\n    }\n    \n    @Pointcut("execution(* com.example.service.*.*Aop(..))")\n    public void onPointcut(JoinPoint joinPoint) {\n        logger.info("=============== onPointcut");\n    }\n}\n')),(0,o.kt)("h3",{id:"controller-service"},"Controller, Service"),(0,o.kt)("p",null,"\ub531\ud788 ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),"\uc640 ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),"\uac00 \ud544\uc694\ud55c \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc, \ub85c\uadf8 \uacb0\uacfc\ub97c \ubcf4\uae30 \uc704\ud574\uc11c \uac04\ub2e8\ud558\uac8c \ub9cc\ub4e4\uc5b4 \ubcf4\uc790."),(0,o.kt)("h4",{id:"controller"},"Controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\npublic class TestController {\n\n    @Autowired\n    private TestService service;\n\n    @GetMapping(value = "/noAop")\n    public String noAop(){\n        return service.test();\n    }\n    \n    @GetMapping(value = "/aop")\n    public String aop(){\n        return service.testAop();\n    }\n}\n')),(0,o.kt)("h4",{id:"service"},"Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Service\npublic class TestServiceImpl implements TestService {\n\n    private static final Logger logger = LoggerFactory.getLogger(TestServiceImpl.class);\n    \n    @Override\n    public String test() {\n        String msg = "Hello, Spring Boot No AOP";\n        logger.info(msg);\n        return msg;\n    }\n    \n    @Override\n    public String testAop() {\n        String msg = "Hello, Spring Boot AOP";\n        logger.info(msg);\n        return msg;\n    }\n}\n')),(0,o.kt)("h4",{id:"\uacb0\uacfc"},"\uacb0\uacfc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080/aop\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"~: =============== onBeforeThing\n~ : Hello, Spring Boot AOP\n~ : =============== onAfterHandler\n~ : @AfterReturning : Hello, Spring Boot AOP\n~ : =============== onAfterReturningHandler\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"http://localhost:8080/noAop\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"~ : Hello, Spring Boot No AOP\n")),(0,o.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootAOP"},"SpringBootSample / SpringBootAop"))))}c.isMDXComponent=!0},49498:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEvCAMAAABc/WdeAAAC8VBMVEVHcEwyfZEyfZIzgJQ1e401Xoszf5QzfZQyfpI1YIsyfZEyfZExfZE0gZU9k6lCnrY8k6kyfZEzgJRBm7M4jaMyfJEyf5MyfZEzf5RCn7dKrshKrcgzgZZDoblJq8U5jaNKrcdBnLM1XYs+cII0Y4w0XIk2X441XIo0XIk4YpI3YI81XIpBbqM5YpJKe7RFdq1Ogr5Ogr9Ngb1Ngr04Y5M2Xos0XIo0Xoo1XIo0Yos0fpMyc440fZE1XIo/a548a5w1dJRKgbhJgbY3gJs2gZk/f6VMgLw8f6E/nLNLgrlhj8V6oM6BpdFPg75QhL/a5fG4zeXA0ujI2OuIqtRYicKeutxThsCOr9ZvmcqxyOOqw+CVtNhCb6U2X441XYpKfLVGfLAxfZE1XYuIRjSNNTKMNDKNNTOMNTKONTONNTKYOjeUODanQj+3SkezSUXCT0zBT0ycJyGNNTNMaXg0fY5xiTlJeHWMNTKMNDKMNTN7Q0ZAdodAoLhAm7M7gYpQZXM/nbWNNDKNNTOMNTOcTU5GeotNd4dBfI50aHKmQj9lbXo5k6q8TUrDTkupV1ezVFLBTkunWFi9UE5Od4ewVVXATUrJZWLal5XdnZzRfnvEVlPYkI7gpaPMbmvViIbx2Nfiq6rsycjCUk/nubjGXVrqwsHPd3TksrCNNTKwSEWiQD6PNjSONjSRNzWCQkRWY2+LNDJYeGFnUlo9eYOFOztyijxxiTxziz1viTp0jT5yiz18lkN7lUOSsVKBnEaXtlWdvVicvFhyiTxtiUFviDxyij1yij13j0BsjU1Bnrg+h5BKg3Q/m7VxiT2UslJ/o1lCiY1GiomLq1VdknRXk36bu1aGokucvViLsWKStV+JsGRjmXibu1qZuluPtGCdvVecvFeevlygv2CiwWOlwmevyXnY5b3T4rXJ2qS0zYLO3qyqxnC80o7k7dHe6cenxGvC1plyiTyKpk1SjXuLpkxyijxyijxkiFBpiUpyij1dhldV5BoWAAAA+3RSTlMAI8T/uBTQ/HoGixsu2f///zHl//8CC6XO////5v//////DzxyTuOOSe32jP/z////////9gRLZZeo7dDcsf///f/////////////////////////////////////lYv//idACFUuRIOik++7//////wkMJpMWLlJ2tcH2///44v/GELH///////////////////////////////////////////////8o///V1+br9TNcS6U9OmfDQvbM/ff//////ylLjhCt6+///+//sf//////////////////////////////////////////////Jv///wyIzsrbIK2F1hgAAA3cSURBVHgB7NYFroQwAIThdXd3d3f3vf+ZnjuzXlJeMv8FhuYLUJ2Q9AYjzGTWiU9vgVtWm/Alu8OKj+XUaTyX2+MF+SxqPLk/gMaCIUdY9FIkGoLHium1DxJPJBOKguqApNKKsWQik1UDxJNLJBRT+f8BklOmHohySy0QZQQhCEEIQhBxEYQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQghYKmQAhSLJm1BEKQcqVq1hAIQWr1RtOsJRCCtNpYhCCSQDpdLEIQWSA9LEIQWSD9ARYhiCyQHhYhiDQQLEIQeSBYhCDyQHpDLEIQOSBvIiMsQhAJIOAdkQlCEPCOyAQhCHhHJIIQBIhIBSEIEJEPQpA3kVHVLB2EIFe+I+OHC/tPgoyFFz4JYhc9VTgBYtGHb3zmyTfIxbtWZDp7uPkCgyzmM/HNrRhkKX5qhUFuP9a68QZy1TtSWI82j7Y1YhDrdiO+rRGD7MRP7XwQxHj7sVr7NwbwjgCQ1uDRDkcMctwPxHd4ZsdOVNyGgTAAcxUIfY3SQjk6mQXaB2jVVmM7knVYx3bf/zEaO2xNYAJLV0EszA9EyOEKH79G8Xce5Ae2jvrJgvz6n58Fe/aOfHrHg8Arc7wJ8hua53gTBFrn4SbIERqEObXeIgjcBHl4EyDM7bcTiIDwHekPIiB8R/qDCAjgNtm7gQgI35F+IALCd6Q/iIDwHekPIiCAm0hPEAFh/rN3BREQ5tTqDCIg/GTfQZRSCC8NKhSQ5h25AtE0kB7hZZk0aQG5Q0d2EBxOxs7Dv6+vljWIl481o7MnhwLSviM7iHJW+zDraYoRwPsJATD6OK6b1eD8aHu+FYQGswhI4+AmsoMYr9KsKYSgl2yCxpGKKTq6nF30NWeK5+eXDuGUBeQuHXl/3RDr66mmainlHJOtibwzNFhylkjTTJRgSxSQe+TL5287yMlaS6paH82gVJpTzVFh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"}}]);