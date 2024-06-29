"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3846],{13581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),o=t(28453);const r={title:"Spring Boot - Cache",slug:"2018/02/05/spring-boot-cache",date:new Date("2018-02-05T20:04:01.000Z"),category:["spring"],tags:["spring","spring-boot","cache"]},s=void 0,c={permalink:"/2018/02/05/spring-boot-cache",source:"@site/blog/spring-boot-cache.md",title:"Spring Boot - Cache",description:"\uce90\uc2dc(cache, \ubb38\ud654\uc5b4: \uce90\uc26c, \uace0\uc18d\uc644\ucda9\uae30, \uace0\uc18d\uc644\ucda9\uae30\uc5b5\uae30)\ub294 \ucef4\ud4e8\ud130 \uacfc\ud559\uc5d0\uc11c \ub370\uc774\ud130\ub098 \uac12\uc744 \ubbf8\ub9ac \ubcf5\uc0ac\ud574 \ub193\ub294 \uc784\uc2dc \uc7a5\uc18c\ub97c \uac00\ub9ac\ud0a8\ub2e4.",date:"2018-02-05T20:04:01.000Z",tags:[{inline:!0,label:"spring",permalink:"/tags/spring"},{inline:!0,label:"spring-boot",permalink:"/tags/spring-boot"},{inline:!0,label:"cache",permalink:"/tags/cache"}],readingTime:3.515,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - Cache",slug:"2018/02/05/spring-boot-cache",date:"2018-02-05T20:04:01.000Z",category:["spring"],tags:["spring","spring-boot","cache"]},unlisted:!1,prevItem:{title:"Spring Boot - Interceptor",permalink:"/2018/02/06/spring-boot-interceptor"},nextItem:{title:"Spring Boot - Validation",permalink:"/2018/01/14/spring-boot-hibernate-validation"}},l={authorsImageUrls:[]},a=[{value:"\uc5b8\uc81c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uae4c?",id:"\uc5b8\uc81c-\uc0ac\uc6a9\ud558\uba74-\uc88b\uc744\uae4c",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Config",id:"config",level:3},{value:"Component",id:"component",level:3},{value:"Test Code",id:"test-code",level:3},{value:"\uacb0\uacfc",id:"\uacb0\uacfc",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"**\uce90\uc2dc(cache, \ubb38\ud654\uc5b4: \uce90\uc26c, \uace0\uc18d\uc644\ucda9\uae30, \uace0\uc18d\uc644\ucda9\uae30\uc5b5\uae30)**\ub294 \ucef4\ud4e8\ud130 \uacfc\ud559\uc5d0\uc11c \ub370\uc774\ud130\ub098 \uac12\uc744 \ubbf8\ub9ac \ubcf5\uc0ac\ud574 \ub193\ub294 \uc784\uc2dc \uc7a5\uc18c\ub97c \uac00\ub9ac\ud0a8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"    graph LR\n        C1[Client] --\x3e App[Spring Boot Application]\n        C2[Client] --\x3e App[Spring Boot Application]\n        C3[Client] --\x3e App[Spring Boot Application]\n        C4[Client] --\x3e App[Spring Boot Application]\n        App[Spring Boot Application] --\x3e|Connection| D[DB]\n        App[Spring Boot Application] -.->|No Connection| D[DB]\n        App[Spring Boot Application] -.->|No Connection| D[DB]\n        App[Spring Boot Application] -.->|No Connection| D[DB]"}),"\n",(0,i.jsxs)(n.p,{children:["Spring\uc758 \uc7a5\uc810 \uc911 PSA(Portable Service Abstractions)\ub77c\ub294 \uac83\uc774 \uc788\ub2e4. \uc774\ub294 \uc26c\uc6b4 \uc11c\ube44\uc2a4 \ucd94\uc0c1\ud654\ub77c\uace0 \ud558\ub294\ub370, \uac01\uac01\uc758 \uc678\ubd80 \uc11c\ube44\uc2a4\ub97c \uac04\ub2e8\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub9cc\uc73c\ub85c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4\uc788\ub2e4. Cache\uc5d0\uc11c\ub294 Redis, Ehcache, ConcurrentMap \ub4f1\uc744 ",(0,i.jsx)(n.code,{children:"CacheManager"})," \uc778\ud130\ud398\uc774\uc2a4\ub85c \ucd94\uc0c1\ud654\ub418\uc5b4 \uc788\uace0, ",(0,i.jsx)(n.code,{children:"CacheManager"})," \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ub610 \ub2e4\ub978 cache \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"\uc5b8\uc81c-\uc0ac\uc6a9\ud558\uba74-\uc88b\uc744\uae4c",children:"\uc5b8\uc81c \uc0ac\uc6a9\ud558\uba74 \uc88b\uc744\uae4c?"}),"\n",(0,i.jsx)(n.p,{children:"\uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc740 \uba54\ub274\uac00 \ub2e8\uc801\uc778 \uc608\uc2dc\uac00 \ub420 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt example",src:t(83415).A+"",width:"636",height:"288"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubb34\uac70\uc6b4 \ube44\uc988\ub2c8\uc988 \ub85c\uc9c1\uc744 \uc218\ud589\ud560 \ub584"}),"\n",(0,i.jsx)(n.li,{children:"\uc8fc\uae30\uc801\uc73c\ub85c\ub098 \uc5b8\uc81c\ub098 \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \uac00\uc9c8 \ub584"}),"\n",(0,i.jsx)(n.li,{children:"RDB\uc5d0 \ub300\ud55c \ubd80\ud558\ub97c \ubd84\uc0b0\ud558\uace0\uc790 \ud560 \ub54c"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dependency",children:"Dependency"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"dependencies { \n    compile('org.springframework.boot:spring-boot-starter-cache')\n    testCompile('org.springframework.boot:spring-boot-starter-test') \n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@EnableCaching"}),"\uc744 \uba85\uc2dc\ud574\uc8fc\uba74 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uace0 \ucd94\uac00\uc801\uc778 \uc124\uc815\uc774 \uc5c6\ub2e4\uba74 ",(0,i.jsx)(n.code,{children:"ConcurrentMap"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec Caching\ud558\uac8c \ub41c\ub2e4. \ub610\ud55c ",(0,i.jsx)(n.strong,{children:"Redis"}),"\ub098 ",(0,i.jsx)(n.strong,{children:"Ehcache"})," \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uac00\ud558\uba74 Spring Boot\uc758 ",(0,i.jsx)(n.strong,{children:"Auto Detect"})," \uae30\ub2a5\uc73c\ub85c \uc778\ud574 \ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc790\ub3d9\uc801\uc73c\ub85c \uc774\uc6a9\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Configuration\n@EnableCaching\npublic CacheConfig {\n    \n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"component",children:"Component"}),"\n",(0,i.jsx)(n.p,{children:"\ubb34\uac70\uc6b4 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uace0 \uc57d 3\ucd08\uc758 sleep\uc744 \uc8fc\ub3c4\ub85d \ud574\ubcf4\uc790.\n\uc544\ub798 \ucf54\ub4dc\ub97c \uac04\ub2e8\ud788 \uc124\uba85\ud558\uc790\uba74, book\uc774\ub77c\ub294 \uce90\uc2dc \uc601\uc5ed\uc5d0 isbn\uc744 \ud0a4\ub85c \uac16\ub294 \ub370\uc774\ud130\ub97c Caching \ud574\ub450\ub294 \uac83\uc774\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Component\npublic class SimpleBookRepository implements BookRepository {\n\n\tprivate static final Logger logger = LoggerFactory.getLogger(SimpleBookRepository.class);\n\t\n\t@Override\n\t@Cacheable(value="book", key="#isbn")\n\tpublic Book getByIsbn(String isbn) {\n\t\tsimulateSlowService();\n\t\treturn new Book(isbn, "Some book");\n\t}\n\n\tprivate void simulateSlowService() {\n\t\ttry {\n\t\t\tlong time = 3000L;\n\t\t\tThread.sleep(time);\n\t\t} catch (InterruptedException e) {\n\t\t\tthrow new IllegalStateException(e);\n\t\t}\n\t}\n\n\t@Override\n\t@CacheEvict(value="book", key="#isbn")\n\tpublic void refresh(String isbn) {\n\t\tlogger.info("cache clear => " + isbn);\n\t}\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Cacheable"}),": \uce90\uc2dc \uc0dd\uc131"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"value: \uce90\uc2dc \uc774\ub984"}),"\n",(0,i.jsx)(n.li,{children:"key: \ud0a4"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@CacheEvict"}),": \uce90\uae30 \ucd08\uae30\ud654"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"value: \uce90\uc2dc \uc774\ub984"}),"\n",(0,i.jsx)(n.li,{children:"key: \ud0a4"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"test-code",children:"Test Code"}),"\n",(0,i.jsx)(n.p,{children:"\ub85c\uc9c1\uc5d0 \ub300\ud55c \uc18c\uc694\uc2dc\uac04\uc744 \uce21\uc815\ud574 \ubcf4\uc558\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class SpringBootCacheApplicationTests {\n\n\t@Autowired\n\tprivate BookRepository repository;\n\n\tprivate long startTime;\n\tprivate long endTime;\n\t\n\tprivate static final Logger logger = LoggerFactory.getLogger(SpringBootCacheApplicationTests.class);\n\t\n\t@Before\n\tpublic void onBefore() {\n\t\tstartTime = System.currentTimeMillis();\n\t}\n\t\n\t@After\n\tpublic void onAfter() {\n\t\tendTime = System.currentTimeMillis();\n\t\tlogger.info("\uc18c\uc694\uc2dc\uac04: {}ms", endTime - startTime);\n\t}\n\t\n\t@Test\n\tpublic void test1() {\n\t\trepository.getByIsbn("a");\n\t}\n\n\t@Test\n\tpublic void test2() {\n\t\trepository.getByIsbn("a");\n\t}\n\t\n\n\t@Test\n\tpublic void test3() {\n\t\trepository.getByIsbn("b");\n\t}\n\t\n\t@Test\n\tpublic void test4() {\n\t\trepository.getByIsbn("a");\n\t}\n\t\n\t@Test\n\tpublic void test5() {\n\t\trepository.refresh("a");\n\t\trepository.getByIsbn("a");\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\uacb0\uacfc",children:"\uacb0\uacfc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\uc18c\uc694\uc2dc\uac04: 3215ms\n\uc18c\uc694\uc2dc\uac04: 10ms\n\uc18c\uc694\uc2dc\uac04: 3006ms\n\uc18c\uc694\uc2dc\uac04: 8ms\ncache clear => a\n\uc18c\uc694\uc2dc\uac04: 3017ms\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\ucc38\uace0",children:"\ucc38\uace0"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootCache",children:"SpringBootSample / SpringBootCache"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},83415:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/example-87f7a6d9fe888a6b71b063f6ddd3dcbd.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);