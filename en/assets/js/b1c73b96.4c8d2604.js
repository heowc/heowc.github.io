"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2928],{28578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));t(95657);const a={title:"Spring - @Autowired\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294 \uac78\uae4c?",slug:"2020/07/04/how-does-autowired-work",date:new Date("2020-07-04T18:00:00.000Z"),category:["spring"],tags:["spring","BeanPostProcessor","autowired"]},s=void 0,i={permalink:"/en/2020/07/04/how-does-autowired-work",source:"@site/blog/how-does-autowired-work.md",title:"Spring - @Autowired\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294 \uac78\uae4c?",description:"@Autowired\uc758 \ub3d9\uc791 \uc6d0\ub9ac\ub97c \uac04\ub2e8\ud558\uac8c \uc774\ud574\ud574\ubcf4\uc790.",date:"2020-07-04T18:00:00.000Z",formattedDate:"July 4, 2020",tags:[{label:"spring",permalink:"/en/tags/spring"},{label:"BeanPostProcessor",permalink:"/en/tags/bean-post-processor"},{label:"autowired",permalink:"/en/tags/autowired"}],readingTime:3.085,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring - @Autowired\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294 \uac78\uae4c?",slug:"2020/07/04/how-does-autowired-work",date:"2020-07-04T18:00:00.000Z",category:["spring"],tags:["spring","BeanPostProcessor","autowired"]},prevItem:{title:"Network JSON Filter \uc18c\uac1c (Chrome Extension)",permalink:"/en/2020/10/21/introduction-network-json-filter-as-chrome-extension"},nextItem:{title:"AWS - SES \uc0ac\uc6a9 \ud6c4\uae30",permalink:"/en/2020/04/11/aws-ses-review"}},p={authorsImageUrls:[]},c=[{value:"\ucee4\uc2a4\ud140 BeanPostProcessor \ub9cc\ub4e4\uc5b4\ubcf4\uae30",id:"\ucee4\uc2a4\ud140-beanpostprocessor-\ub9cc\ub4e4\uc5b4\ubcf4\uae30",level:4}],l={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\uc758 \ub3d9\uc791 \uc6d0\ub9ac\ub97c \uac04\ub2e8\ud558\uac8c \uc774\ud574\ud574\ubcf4\uc790.")),(0,r.kt)("p",null,"\uc2a4\ud504\ub9c1\uc5d0\uc11c Bean\uc73c\ub85c \ub4f1\ub85d\ub41c \uac1d\uccb4\uc5d0 \ud2b9\uc815 Bean\uc5d0 \ub300\ud55c \uc758\uc874\uc131\uc744 \uc8fc\uc785\ud560 \ub54c, \uc2a4\ud504\ub9c1\uc5d0\uc11c \uc81c\uacf5(",(0,r.kt)("inlineCode",{parentName:"p"},"@Autowired"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value"),")\ud558\ub294 \ud639\uc740 \uc790\ubc14 \uc81c\uacf5(",(0,r.kt)("inlineCode",{parentName:"p"},"@Inject"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Resource"),")\ud558\ub294 \uc560\ub178\ud14c\uc774\uc158\ub4e4\uc774 \uc5b4\ub5a4 \uc6d0\ub9ac\ub85c \uc8fc\uc785\uc774 \ub418\ub294 \uac83?\uc5d0 \ub300\ud55c \uad81\uae08\uc99d\uc774 \uc0dd\uacbc\ub2e4. \uadf8\uac83\uc740 \ubc14\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor")," \uc774\ub77c\ub294 \ud074\ub798\uc2a4\uc5d0 \ud574\ub2f5\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\ub294 \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108 \uc548\uc5d0\uc11c \ub9cc\ub4e0 bean\uc5d0 \uc804/\ud6c4\ucc98\ub9ac \uc791\uc5c5\uc744 \ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e0 \uc778\ud130\ud398\uc774\uc2a4\uc774\ub2e4. \uc5ec\ub7ec \uad6c\ud604\uccb4\ub4e4\uc744 \ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"AutowiredAnnotationBeanPostProcessor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CommonAnnotationBeanPostProcessor")," \ub4f1\ub4f1 \ub2e4\uc591\ud55c BeanPostProcessor\ub4e4\uc774 \uc874\uc7ac\ud558\uba70, \uc11c\ub4dc\ud30c\ud2f0 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc911\uc5d0\uc11c\ub3c4 \uc2a4\ud504\ub9c1 \uc704\uc5d0\uc11c \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\ub97c \ucd94\uac00\ub85c \uc81c\uacf5\ud558\uae30\ub3c4 \ud55c\ub2e4. (",(0,r.kt)("inlineCode",{parentName:"p"},"MeterRegistryBeanPostProcessor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ArmeriaBeanPostProcessor"),", ...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface BeanPostProcessor {\n    // \ube48 \uc0dd\uc131 \uc774\uc804\uc5d0 \uc2e4\ud589\ub418\ub294 \uba54\uc18c\ub4dc\n    Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException;\n    // \ube48 \uc0dd\uc131 \uc774\ud6c4\uc5d0 \uc2e4\ud589\ub418\ub294 \uba54\uc18c\ub4dc\n    Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException;\n}\n")),(0,r.kt)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\ub294 \uad49\uc7a5\ud788 \uae54\ub054\ud558\uace0 \ub2e8\uc21c\ud558\ub2e4. "),(0,r.kt)("p",null,"\uadf8\ub807\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"BeanPostProcessor"),"\uc758 \uc0dd\uc131\uc2dc\uc810\uc740 \uc5b8\uc81c\uc77c\uae4c? \ucf54\ub4dc\ub97c \ub4e4\uc5ec\ub2e4 \ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework/blob/5.2.x/spring-context/src/main/java/org/springframework/context/support/AbstractApplicationContext.java#L535"},"https://github.com/spring-projects/spring-framework/blob/5.2.x/spring-context/src/main/java/org/springframework/context/support/AbstractApplicationContext.java#L535")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void refresh() throws BeansException, IllegalStateException {\n    synchronized (this.startupShutdownMonitor) {\n        // Prepare this context for refreshing.\n        prepareRefresh();\n\n        // Tell the subclass to refresh the internal bean factory.\n        ConfigurableListableBeanFactory beanFactory = obtainFreshBeanFactory();\n\n        // Prepare the bean factory for use in this context.\n        prepareBeanFactory(beanFactory);\n\n        try {\n            // Allows post-processing of the bean factory in context subclasses.\n            postProcessBeanFactory(beanFactory);\n\n            // Invoke factory processors registered as beans in the context.\n            invokeBeanFactoryPostProcessors(beanFactory);\n\n            // Register bean processors that intercept bean creation.\n            registerBeanPostProcessors(beanFactory);\n\n        ...\n")),(0,r.kt)("p",null,"\ud638\ucd9c \uc2dc\uc810\ub9cc \ub193\uace0 \ubcf4\uc790\uba74 Bean \uc791\uc5c5 \uc774\uc804\uc5d0 BeanPostProcessor\uc5d0 \ub300\ud55c \uc791\uc5c5\uc744 \ud55c \ud6c4\uc5d0 Bean \uc791\uc5c5\uc774 \ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4. "),(0,r.kt)("h4",{id:"\ucee4\uc2a4\ud140-beanpostprocessor-\ub9cc\ub4e4\uc5b4\ubcf4\uae30"},"\ucee4\uc2a4\ud140 BeanPostProcessor \ub9cc\ub4e4\uc5b4\ubcf4\uae30"),(0,r.kt)("p",null,"\uac04\ub2e8\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc640 \ucee4\uc2a4\ud140 BeanPostProcessor\ub97c \uc900\ube44\ud558\uc790."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Component\npublic class Person {\n\n    private String name;\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getName() {\n        return name;\n    }\n}\n\n// ...\n\n@Configuration\npublic MyBeanPostProcessor implements BeanPostProcessor {\n\n    @Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        if (bean instanceof Person) {\n            Person heowc = (Person) bean;\n            heowc.setName("heowc");\n        }\n        return bean;\n    }\n\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        return bean;\n    }\n}\n')),(0,r.kt)("p",null,"\uac04\ub2e8\ud558\uac8c \uc774\ub984\uc744 \ud544\ub4dc\ub85c \uac16\ub294 Person\uc774\ub77c\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5c8\ub2e4. \uadf8\ub9ac\uace0 \uc774\uac83\uc774 Bean\uc73c\ub85c \ub4f1\ub85d\uc774 \ub41c\ub2e4\uba74, Person \uac1d\uccb4 name \ud544\ub4dc\uc5d0 'heowc'\ub97c \ucd08\uae30\ud654\ud574\uc8fc\ub294 \ucf54\ub4dc\ub2e4. \uc774\ub97c \ud14c\uc2a4\ud2b8\ud55c \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootTest\nclass MyBeanPostProcessorTest {\n\n    @Autowired\n    private Person heowc;\n\n    @Test\n    void test_personInjection() {\n        assertThat(heowc.getName()).isEqualTo("heowc");\n    }\n}\n')))}m.isMDXComponent=!0}}]);