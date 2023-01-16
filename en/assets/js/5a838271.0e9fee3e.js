"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3425],{1238:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=t(7462),n=(t(7294),t(3905));t(828);const i={title:"Java 8 - Time API",slug:"2018/03/18/java8-time-package",date:new Date("2018-03-18T19:55:41.000Z"),category:["java"],tags:["java8","time"]},o=void 0,r={permalink:"/en/2018/03/18/java8-time-package",source:"@site/blog/java8-time-package.md",title:"Java 8 - Time API",description:"Java 8\uc5d0\uc11c\ub294 \uc0c8\ub85c\uc6b4 \ub0a0\uc9dc API\uac00 \ucd94\uac00\ub418\uc5c8\ub2e4.",date:"2018-03-18T19:55:41.000Z",formattedDate:"March 18, 2018",tags:[{label:"java8",permalink:"/en/tags/java-8"},{label:"time",permalink:"/en/tags/time"}],readingTime:3.155,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Java 8 - Time API",slug:"2018/03/18/java8-time-package",date:"2018-03-18T19:55:41.000Z",category:["java"],tags:["java8","time"]},prevItem:{title:"Spring Camp 2018 \ud6c4\uae30",permalink:"/en/2018/04/25/spring-camp-2018-review"},nextItem:{title:"Spring Boot - CORS",permalink:"/en/2018/03/13/spring-boot-cors"}},m={authorsImageUrls:[]},p=[{value:"API \ub9db\ubcf4\uae30",id:"api-\ub9db\ubcf4\uae30",level:3},{value:"\ud604\uc7ac\uc2dc\uac04",id:"\ud604\uc7ac\uc2dc\uac04",level:4},{value:"\ucd08\uae30\ud654",id:"\ucd08\uae30\ud654",level:4},{value:"\ubcc0\uacbd",id:"\ubcc0\uacbd",level:4},{value:"\uc5f0\uc0b0",id:"\uc5f0\uc0b0",level:4},{value:"\ube44\uad50",id:"\ube44\uad50",level:4},{value:"etc",id:"etc",level:4},{value:"<code>Period</code>\uc640 <code>Duration</code>",id:"period\uc640-duration",level:4},{value:"Query",id:"query",level:4},{value:"format",id:"format",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],c={toc:p};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Java 8\uc5d0\uc11c\ub294 \uc0c8\ub85c\uc6b4 \ub0a0\uc9dc API\uac00 \ucd94\uac00\ub418\uc5c8\ub2e4.")),(0,n.kt)("p",null,"\uae30\uc874 \ub808\uac70\uc2dc \ucf54\ub4dc \uc911, ",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),"\uac00 \uc788\ub2e4. \ubb3c\ub860 ",(0,n.kt)("inlineCode",{parentName:"p"},"Calender"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub418\uc9c0\ub9cc Java 8\uc5d0\uc11c \uc0c8\ub85c\uc6b4 ",(0,n.kt)("strong",{parentName:"p"},"Time API"),"\uac00 \ub098\uc654\uc73c\ub2c8 \uc774\ub97c \uc368\ubcf4\ub3c4\ub85d \ud558\uc790. \ud575\uc2ec \ud074\ub798\uc2a4\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LocalTime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LocalDate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"LocalDateTime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ZoneDateTIme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"..."))),(0,n.kt)("h3",{id:"api-\ub9db\ubcf4\uae30"},"API \ub9db\ubcf4\uae30"),(0,n.kt)("p",null,"\uac04\ub2e8\ud788 API\ub97c \uc0b4\ud3b4\ubcf4\uae30\ub85c \ud558\uc790. \uac1c\uc778\uc801\uc778 \uc0dd\uac01\uc774\uc9c0\ub9cc \uae30\uc874 \uad00\ub828 API\ubcf4\ub2e4 \ub2e4\uc591\ud55c \uba54\uc18c\ub4dc\ub97c \uc81c\uacf5\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \ud3b8\ud558\ub2e4\ub294 \ub290\ub08c\uc744 \ubc1b\uc558\ub2e4."),(0,n.kt)("h4",{id:"\ud604\uc7ac\uc2dc\uac04"},"\ud604\uc7ac\uc2dc\uac04"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalTime.now(); // ex) 20:00:00\nLocalDate.now(); //  ex) 2018-03-18\nLocalDateTime.now(); // 2017-03-18T20:00:00\n")),(0,n.kt)("h4",{id:"\ucd08\uae30\ud654"},"\ucd08\uae30\ud654"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalTime.of(20, 0, 0); // 20:00:00\nLocalDate.of(2018, 3, 18); // 2017-02-07\nLocalDateTime(LocalDate.of(2018, 3, 18), LocalTime.of(20,0,0)); // 2017-02-07T20:00:00\n")),(0,n.kt)("h4",{id:"\ubcc0\uacbd"},"\ubcc0\uacbd"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"withXXXX()"),"\ub97c \uc774\uc6a9\ud558\uc5ec \uac12\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalDateTime localDateTime = LocalDateTime.now(); //  2018-03-18T20:00:00\nlocalDateTime.withYear(2016); // 2016-03-18T20:00:00\n")),(0,n.kt)("h4",{id:"\uc5f0\uc0b0"},"\uc5f0\uc0b0"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"plusXXXX()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"minusXXXX()"),"\ub97c \uc774\uc6a9\ud558\uc5ec \uc5f0\uc0b0\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalDateTime localDateTime = LocalDateTime.now(); //  2018-03-18T20:00:00\n \nlocalDateTime.plusDays(1); //  2018-03-19T20:00:00\nlocalDateTime.minusDays(1); //  2018-03-17T20:00:00\n")),(0,n.kt)("h4",{id:"\ube44\uad50"},"\ube44\uad50"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"isAfter()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"isBefore()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"isEqual()")," \ub4f1 \uc774 \uc788\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalDateTime localDateTime = LocalDateTime.now(); //  2018-03-18T20:00:00\nLocalDateTIme compareDateTime = localDateTime.plusDays(1); //  2018-03-19T20:00:00\n \nlocalDateTime.isBefore(compareDateTime); // true\n")),(0,n.kt)("h4",{id:"etc"},"etc"),(0,n.kt)("p",null,"\uadf8 \uc678\uc5d0\ub3c4 \uac04\ub2e8\ud55c \uba54\uc18c\ub4dc\ub4e4\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalDateTime localDateTime = LocalDateTime.now();  // 2017-02-07T20:00:00\n \nlocalDateTime.getYear(); // 2017\nlocalDateTime.getDayOfYear(); // 38 (\ub144 \uae30\uc900\uc73c\ub85c 38\uc77c\uc9f8)\nlocalDateTime.getDayOfMonth(); // 7 (\ub2ec \uae30\uc900\uc73c\ub85c 7\uc77c\uc9f8)\nlocalDateTime.getDayOfWeek(); // TUSEDAY (\uc8fc \uae30\uc900\uc73c\ub85c \ud654 \uc694\uc77c)\nlocalDateTime.getMonth(); // FEBRUARY \nlocalDateTime.getMonthValue(); // 2\nlocalDateTime.isLeapYear(); // false (\uc724\ub144 \uc5ec\ubd80)\n")),(0,n.kt)("h4",{id:"period\uc640-duration"},(0,n.kt)("inlineCode",{parentName:"h4"},"Period"),"\uc640 ",(0,n.kt)("inlineCode",{parentName:"h4"},"Duration")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Period"),"\uc640 ",(0,n.kt)("inlineCode",{parentName:"p"},"Duration"),"\ub294 \ub0a0\uc9dc\uc758 \ucc28\uc774\ub97c \ud45c\ud604\ud574\uc8fc\ub294 \ud074\ub798\uc2a4\uc774\ub2e4. \ucc28\uc774\uac00 \uc788\ub2e4\uba74, ",(0,n.kt)("inlineCode",{parentName:"p"},"Period"),"\ub294 \uae30\uac04(\ub144,\uc6d4,\uc77c)\uc744 \uad6c\ud560 \ub54c \uc0ac\uc6a9 \ud560 \uc218 \uc788\uace0, ",(0,n.kt)("inlineCode",{parentName:"p"},"Duration"),"\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"Period"),"\ubcf4\ub2e4 \uc138\uc138\ud558\uac8c \uc2dc\uac04, \ubd84, \ucd08 \ub2e8\uc704\uae4c\uc9c0 \uac00\ub2a5\ud558\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"LocalDate localDate = LocalDateTime.now(); //  2017-02-07\nLocalDate compareDate = localDate.plusDays(1) //  2017-02-08\n\n// 1.\nPeriod period = localDateTime.until(compareDate)\nperiod.getDays() // 1\n\n// 2.\nPeriod period = Period.between(locaDate, compareDate)\nperiod.getDays() // 1\n\n\nLocalDateTime localDateTime = LocalDateTime.now() //  2017-02-07T20:00:00\nLocalDateTime compareDateTime = localDateTime.plusDays(1) //  2017-02-08T20:00:00\n\nDuration duration = Duration.between(localDateTime, compareDateTime)\nduration.toMinutes() // -1 * (24 * 60) -> \ud558\ub8e8 \ucc28\uc774\ub97c \ubd84 \ub2e8\uc704\ub85c \ud45c\uc2dc\n")),(0,n.kt)("h4",{id:"query"},"Query"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TemporalQuery<R>"),"\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// ex) 2\uc6d4\uc774\ub77c\uba74 \ucc38, \uc544\ub2c8\uba74 \uac70\uc9d3\nTemporalQuery<Boolean> query = t -> t.get(ChronoField.MONTH_OF_YEAR) == Month.FEBRUARY.getValue();\n\nLocalDateTime localDateTime = LocalDateTime.now() //  2018-03-18T20:00:00\nlocalDateTime.query(query) // true\n")),(0,n.kt)("h4",{id:"format"},"format"),(0,n.kt)("p",null,"\uae30\uc874(",(0,n.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Calender"),") \ud074\ub798\uc2a4\uc5d0\uc11c\ub294 \ud615\uc2dd \ud074\ub798\uc2a4\uc778 ",(0,n.kt)("inlineCode",{parentName:"p"},"SimpleDateFormat"),"\ub85c \ud328\ud134\uc744 \ubcc0\uacbd\ud588\uc9c0\ub9cc, ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTimeFormatter"),"\ub85c \ud328\ud134\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'LocalDate localDate = LocalDate.of(2017, 2, 7) // 2017-02-07\nDateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy\ub144 MM\uc6d4 dd\uc77c")\nlocalDate.format(formatter) // 2017\ub144 02\uc6d4 07\ub144\n')),(0,n.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,n.kt)("p",null,"\uc774\uc678\uc5d0\ub3c4 ",(0,n.kt)("inlineCode",{parentName:"p"},"TemporalAdjusters"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ubcf4\ub2e4 \uc138\ubd80\uc801\uc778 \ub0a0\uc9dc \ucc98\ub9ac\ub97c \ud574\ubcfc \uc218 \uc788\ub2e4.\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/heowc/Java8Sample/tree/master/Java8TimeAPI/src/sample"},"Java8Sample - Java8TimeAPI")))}u.isMDXComponent=!0}}]);