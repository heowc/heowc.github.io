"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[6183],{94210:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2461",slug:"2019/02/12/using-mysql-jdbc-to-handle-large-table-2",date:new Date("2019-02-12T23:30:00.000Z"),category:["mysql"],tags:["mysql","jdbc","batch-insert"]},s=void 0,i={permalink:"/en/2019/02/12/using-mysql-jdbc-to-handle-large-table-2",source:"@site/blog/using-mysql-jdbc-to-handle-large-table-2.md",title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2461",description:"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc368\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?",date:"2019-02-12T23:30:00.000Z",formattedDate:"February 12, 2019",tags:[{label:"mysql",permalink:"/en/tags/mysql"},{label:"jdbc",permalink:"/en/tags/jdbc"},{label:"batch-insert",permalink:"/en/tags/batch-insert"}],readingTime:3.22,hasTruncateMarker:!0,authors:[],frontMatter:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2461",slug:"2019/02/12/using-mysql-jdbc-to-handle-large-table-2",date:"2019-02-12T23:30:00.000Z",category:["mysql"],tags:["mysql","jdbc","batch-insert"]},prevItem:{title:"Spring Camp 2019 \ud6c4\uae30",permalink:"/en/2019/04/28/spring-camp-2019-review"},nextItem:{title:"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460",permalink:"/en/2019/02/09/using-mysql-jdbc-to-handle-large-table-1"}},p={authorsImageUrls:[]},c=[{value:"\uc65c \uc774\ub7f0 \uc791\uc5c5\uc774 \ud544\uc694\ub85c \ud558\ub294\uac00?",id:"\uc65c-\uc774\ub7f0-\uc791\uc5c5\uc774-\ud544\uc694\ub85c-\ud558\ub294\uac00",level:3},{value:"BatchInsert",id:"batchinsert",level:3},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:3},{value:"spring.properties",id:"springproperties",level:4},{value:"Application.java",id:"applicationjava",level:4},{value:"\uc18c\uc694\uc2dc\uac04 \uce21\uc815",id:"\uc18c\uc694\uc2dc\uac04-\uce21\uc815",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],o={toc:c},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ud55c \ubc88\uc5d0 \ub9ce\uc740 \ub370\uc774\ud130 \uc368\uc57c \ud55c\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?")),(0,r.kt)("h3",{id:"\uc65c-\uc774\ub7f0-\uc791\uc5c5\uc774-\ud544\uc694\ub85c-\ud558\ub294\uac00"},"\uc65c \uc774\ub7f0 \uc791\uc5c5\uc774 \ud544\uc694\ub85c \ud558\ub294\uac00?"),(0,r.kt)("p",null,"\uc544\ub9c8 \uc8fc\ubcc0\uc5d0\uc11c \uc81c\uc77c \uac04\ub2e8\ud558\uac8c \ucc3e\uc744 \uc218 \uc788\ub294 \uc0c1\ud669\uc740 ",(0,r.kt)("strong",{parentName:"p"},"\uc5d1\uc140 \ud30c\uc77c \uc5c5\ub85c\ub4dc"),"\uac00 \uc788\uc744 \uc218 \uc788\ub2e4. \ub9ce\uac8c\ub294 \uc218 \ub9cc\uac74, \uc218 \uc2ed\ub9cc\uac74\uae4c\uc9c0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc0bd\uc785(",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),")\ub97c \ud558\ub294 \uac83\uc778\ub370 \uc5f4\ub2f9 \uc0bd\uc785\ud558\uac8c \ub41c\ub2e4\uba74 \uad49\uc7a5\ud788 \uc624\ub79c \uc791\uc5c5\uc774 \ub420 \uc218 \uc788\ub2e4."),(0,r.kt)("h3",{id:"batchinsert"},"BatchInsert"),(0,r.kt)("p",null,"\uc774\ub97c \ubcf4\ud1b5 ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchInsert")," \ub610\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"BulkInsert")," \ub77c\uace0 \ub9d0\ud558\ub294\ub370, \uc5ec\ub7ec Insert \uad6c\ubb38\uc744 \ud558\ub098\ub85c \ud558\ub098\uc758 Insert \uad6c\ubb38\uc73c\ub85c \uc791\uc5c5\ud558\ub3c4\ub85d \ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \uadf8\uc640 \ub354\ubd88\uc5b4 \uc18d\ub3c4\ub3c4 \ube60\ub974\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uba74, \ub2e4\uc74c \ucffc\ub9ac\ub4e4\uc774"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO message (`content`, `status`, `created_by`, `created_at`,`last_modified_at`)\nVALUES (:content, :status, :created_by, :created_at, :last_modified_at);\nINSERT INTO message (`content`, `status`, `created_by`, `created_at`,`last_modified_at`)\nVALUES (:content, :status, :created_by, :created_at, :last_modified_at);\nINSERT INTO message (`content`, `status`, `created_by`, `created_at`,`last_modified_at`)\nVALUES (:content, :status, :created_by, :created_at, :last_modified_at);\n// ...\n")),(0,r.kt)("p",null,"\uc544\ub798\uc758 \ucffc\ub9ac\ub85c \ub300\uccb4\ub420 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO message (`content`, `status`, `created_by`, `created_at`,`last_modified_at`) \nVALUES (:content, :status, :created_by, :created_at, :last_modified_at)\n, (:content, :status, :created_by, :created_at, :last_modified_at)\n, (:content, :status, :created_by, :created_at, :last_modified_at)\n, ...;\n")),(0,r.kt)("h3",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,r.kt)("p",null,"\uc774\uc804\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"/2019/02/09/using-mysql-jdbc-to-handle-large-table-1/"},"MySQL - \ud070 \ud14c\uc774\ube14\uc744 \ub2e4\ub8e8\ub294 jdbc \ud65c\uc6a9\ubc95 \u2460"),"\ub97c \ubd84\uc11d\ud558\uba74\uc11c \uc791\uc131\ud588\ub358 \uac04\ub2e8\ud55c \uc608\uc81c\uc774\ub2e4. \ub0b4\uc6a9\uc740 ",(0,r.kt)("strong",{parentName:"p"},"10\ub9cc\uac74\uc758 \ub370\uc774\ud130\ub97c 100\uac1c\uc529 ",(0,r.kt)("inlineCode",{parentName:"strong"},"batchInsert")," \ud558\ub294 \ucf54\ub4dc")," \uc774\ub2e4."),(0,r.kt)("h4",{id:"springproperties"},"spring.properties"),(0,r.kt)("p",null,"MySQL Driver\uc758 \uacbd\uc6b0, ",(0,r.kt)("inlineCode",{parentName:"p"},"rewriteBatchedStatements=true")," \uc635\uc158\uc744 \ucd94\uac00\ud574\uc57c \ud55c\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.url=jdbc:mysql://localhost:3306/test?rewriteBatchedStatements=true\n# ...\n")),(0,r.kt)("h4",{id:"applicationjava"},"Application.java"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApplicationRunner"),"\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\ub529 \uc2dc\uc5d0 \ucd5c\ucd08 \uc791\uc5c5\uc744 \uc815\uc758\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc774\ub2e4. \uc911\uc810\uc801\uc73c\ub85c \ubd10\uc57c\ud55c \uacf3\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"jdbcTemplate.batchUpdate(...)")," \ubd80\ubd84\uc774\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"batchList"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize"),"\ub9cc\ud07c \ucc98\ub9ac\ud574\uc8fc\uace0 \uc788\ub2e4. (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spring-projects/spring-framework/blob/5.1.x/spring-jdbc/src/main/java/org/springframework/jdbc/core/JdbcTemplate.java#L1023"},"\ucc38\uace0"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static final String INSERT_SQL = "INSERT INTO push_message (`content`, `status`, `created_by`, `created_at`, `last_modified_at`) VALUES (?, ?, ?, ?, ?)";\n\n@Autowired\nprivate JdbcTemplate jdbcTemplate;\n\n@Bean\npublic ApplicationRunner runner() {\n    return args -> {\n        int insertCount = 100_000;\n        int batchSize = 100;\n\n        List<PushMessage> batchList = IntStream.range(0, insertCount)\n                .mapToObj(i -> new PushMessage("content" + i, "wait", "heowc", LocalDateTime.now(), LocalDateTime.now()))\n                .collect(Collectors.toList());\n\n        StopWatch stopWatch = new StopWatch();\n        stopWatch.start();\n        jdbcTemplate.batchUpdate(INSERT_SQL, batchList, batchSize, (ps, arg) -> {\n            ps.setString(1, arg.getContent());\n            ps.setString(2, arg.getStatus());\n            ps.setString(3, arg.getCreatedBy());\n            ps.setTimestamp(4, Timestamp.valueOf(arg.getCreatedAt()));\n            ps.setTimestamp(5, Timestamp.valueOf(arg.getLastModifiedAt()));\n        });\n        stopWatch.stop();\n        System.out.println(stopWatch.prettyPrint());\n    };\n}\n')),(0,r.kt)("h3",{id:"\uc18c\uc694\uc2dc\uac04-\uce21\uc815"},"\uc18c\uc694\uc2dc\uac04 \uce21\uc815"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"rewriteBatchedStatements"),(0,r.kt)("th",{parentName:"tr",align:null},"batch size"),(0,r.kt)("th",{parentName:"tr",align:null},"time(ms)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"2500ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"O"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"5000ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"200000ms")))),(0,r.kt)("p",null,"\uc5ed\uc2dc\ub098 \ud558\ub4dc\uc6e8\uc5b4 \uc0ac\uc591, \ud658\uacbd\ub9c8\ub2e4 \ub2e4\ub974\uaca0\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"rewriteBatchedStatements")," \uc5ec\ubd80\uc5d0 \ub530\ub77c ",(0,r.kt)("inlineCode",{parentName:"p"},"batch size"),"\uc5d0 \ub530\ub77c \uc18d\ub3c4 \ucc28\uc774\uac00 \ub9ce\uc774 \ub0ac\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc774\uac83\ub3c4 \uc5ed\uc2dc \ud328\ud0b7\uc744 \ubd84\uc11d\ud574\ubcf4\uba74, Length\uac00 16388\uc778 \ud328\ud0b7\uc744 \ubcfc \uc218 \uc788\ub294\ub370 ",(0,r.kt)("inlineCode",{parentName:"p"},"net_buffer_length"),"\uc758 \uae30\ubcf8\uac12(16384)\uacfc \uad00\ub828\uc774 \uc788\ub2e4. \uc774\ub97c \uc801\uc808\ud788 \ub298\ub9ac\ub294 \uac83\ub3c4 \uc18d\ub3c4 \ud5a5\uc0c1\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub2e4(?)")),(0,r.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/heowc/mysql-fetch-test"},"https://github.com/heowc/mysql-fetch-test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html"},"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-configuration-properties.html"))))}m.isMDXComponent=!0}}]);