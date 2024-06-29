"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3493],{51602:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(74848),t=r(28453);const l={title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",slug:"2021/02/13/aurora-cluster-failover",date:new Date("2021-02-13T17:19:00.000Z"),category:["aurora"],tags:["aws","aurora","failover"]},s=void 0,i={permalink:"/2021/02/13/aurora-cluster-failover",source:"@site/blog/aurora-cluster-failover.md",title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",description:"\ucd5c\uadfc \ud68c\uc0ac\uc5d0\uc11c \uc624\ub85c\ub77c\ub514\ube44\ub97c \uc2a4\ucf00\uc77c \uc5c5\ud558\uae30 \uc704\ud574\uc11c failover \ud14c\uc2a4\ud2b8\ub97c \ud558\ub2e4\uac00 \uc788\uc5c8\ub358 \uc774\uc288\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4.",date:"2021-02-13T17:19:00.000Z",tags:[{inline:!0,label:"aws",permalink:"/tags/aws"},{inline:!0,label:"aurora",permalink:"/tags/aurora"},{inline:!0,label:"failover",permalink:"/tags/failover"}],readingTime:6.07,hasTruncateMarker:!0,authors:[],frontMatter:{title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",slug:"2021/02/13/aurora-cluster-failover",date:"2021-02-13T17:19:00.000Z",category:["aurora"],tags:["aws","aurora","failover"]},unlisted:!1,prevItem:{title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",permalink:"/2021/05/23/amazone-linux-log-issue"},nextItem:{title:"2020\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/2020/12/27/2020-develop-retrospection"}},o={authorsImageUrls:[]},c=[{value:"\uc9c4\ud589 \ud50c\ub85c\uc6b0",id:"\uc9c4\ud589-\ud50c\ub85c\uc6b0",level:4},{value:"\uc5d0\ub7ec \ubc1c\uc0dd",id:"\uc5d0\ub7ec-\ubc1c\uc0dd",level:4},{value:"\ud574\uacb0\ubc29\ubc95",id:"\ud574\uacb0\ubc29\ubc95",level:4},{value:"1. \ud074\ub7ec\uc2a4\ud130 \ub77c\uc774\ud130 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ud65c\uc6a9",id:"1-\ud074\ub7ec\uc2a4\ud130-\ub77c\uc774\ud130-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\ud65c\uc6a9",level:5},{value:"2. DNS\ub97c \uacfc\ub3c4\ud558\uac8c \uce90\uc2dc\ud558\uc9c0 \uc54a\uc74c",id:"2-dns\ub97c-\uacfc\ub3c4\ud558\uac8c-\uce90\uc2dc\ud558\uc9c0-\uc54a\uc74c",level:5},{value:"3. \uc2a4\ub9c8\ud2b8 \ub4dc\ub77c\uc774\ubc84 \uc0ac\uc6a9",id:"3-\uc2a4\ub9c8\ud2b8-\ub4dc\ub77c\uc774\ubc84-\uc0ac\uc6a9",level:5},{value:"\ub610 \ub2e4\ub978 \uc774\uc288",id:"\ub610-\ub2e4\ub978-\uc774\uc288",level:4},{value:"mysql-connector",id:"mysql-connector",level:5},{value:"mariadb-connector",id:"mariadb-connector",level:5},{value:"mybatis - typeHandler",id:"mybatis---typehandler",level:5}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\ucd5c\uadfc \ud68c\uc0ac\uc5d0\uc11c \uc624\ub85c\ub77c\ub514\ube44\ub97c \uc2a4\ucf00\uc77c \uc5c5\ud558\uae30 \uc704\ud574\uc11c failover \ud14c\uc2a4\ud2b8\ub97c \ud558\ub2e4\uac00 \uc788\uc5c8\ub358 \uc774\uc288\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h4,{id:"\uc9c4\ud589-\ud50c\ub85c\uc6b0",children:"\uc9c4\ud589 \ud50c\ub85c\uc6b0"}),"\n",(0,a.jsx)(n.p,{children:"\uc9c4\ud589\ud588\ub358 \ud50c\ub85c\uc6b0\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"slave \uc2a4\ucf00\uc77c \uc5c5\nslave\ub97c master\ub85c \uc2b9\uaca9(failover)\nslave \uc2a4\ucf00\uc77c \uc5c5\n"})}),"\n",(0,a.jsx)(n.h4,{id:"\uc5d0\ub7ec-\ubc1c\uc0dd",children:"\uc5d0\ub7ec \ubc1c\uc0dd"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"1\ubc88\uc758 \uacbd\uc6b0,"})," \uc778\uc2a4\ud134\uc2a4\uac00 \ub0b4\ub824\uac14\ub2e4 \uc62c\ub77c\uc624\uae30 \ub54c\ubb38\uc5d0 \uc7a0\uc2dc \ub3d9\uc548 slave\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, cluster end-point\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 \uc790\ub3d9\uc801\uc73c\ub85c slave\ub85c \uac00\ub358 \ud2b8\ub798\ud53d\uc774 master\ub97c \ubc14\ub77c\ubcf4\uac8c \ub429\ub2c8\ub2e4.\n",(0,a.jsx)(n.strong,{children:"2\ubc88\uc758 \uacbd\uc6b0,"})," master\uc640 slave\uac00 \ubc14\ub00c\ub2c8 \uc544\uc8fc \uc7a0\uae50\uc758 \uc21c\ub2e8\uc774 \uc788\uaca0\uc9c0\ub9cc \uc774\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c \ucee4\ub125\uc158\uc774 \ub2e4\uc2dc \ub9fa\uc5b4 \uc815\uc0c1 \ub3d9\uc791\ud560\uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc... 2\ubc88\uc744 \uc9c4\ud589\ud568\uacfc \ub3d9\uc2dc\uc5d0 \uc11c\ubc84\uc5d0\uc11c\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \uc608\uc678\uac00 \ucd9c\ub825\ub418\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"The MySQL server is running with the --read-only option so it cannot execute this statement\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\uc790\ub3d9\uc73c\ub85c \ucee4\ub0b5\uc158\uc744 \ub2e4\uc2dc \ub9fa\uc5b4\uc904\uaebc\ub780 \uc0dd\uac01\uc774 \ud2c0\ub838\uace0, \uad6c\uae00\ub9c1\uc744 \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uac8c\uc2dc\ubb3c\uc744 \ucc3e\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n(\ucc38\uace0: ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/ko/premiumsupport/knowledge-center/aurora-mysql-db-cluser-read-only-error/",children:"https://aws.amazon.com/ko/premiumsupport/knowledge-center/aurora-mysql-db-cluser-read-only-error/"}),")"]}),"\n",(0,a.jsx)(n.h4,{id:"\ud574\uacb0\ubc29\ubc95",children:"\ud574\uacb0\ubc29\ubc95"}),"\n",(0,a.jsx)(n.h5,{id:"1-\ud074\ub7ec\uc2a4\ud130-\ub77c\uc774\ud130-\uc5d4\ub4dc\ud3ec\uc778\ud2b8-\ud65c\uc6a9",children:"1. \ud074\ub7ec\uc2a4\ud130 \ub77c\uc774\ud130 \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \ud65c\uc6a9"}),"\n",(0,a.jsx)(n.p,{children:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \uc774\ubbf8 cluster endpoint\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9\uc774 \uc548\ub418\ub294 \ub0b4\uc6a9\uc774\uc600\uc2b5\ub2c8\ub2e4. \ud639\uc2dc instance endpoint\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 cluster endpoint\ub97c \uc0ac\uc6a9\ud558\uae38 \uad8c\uc7a5\ub4dc\ub9bd\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h5,{id:"2-dns\ub97c-\uacfc\ub3c4\ud558\uac8c-\uce90\uc2dc\ud558\uc9c0-\uc54a\uc74c",children:"2. DNS\ub97c \uacfc\ub3c4\ud558\uac8c \uce90\uc2dc\ud558\uc9c0 \uc54a\uc74c"}),"\n",(0,a.jsxs)(n.p,{children:["\uc774\ubc88\uc5d0 \uc54c\uac8c\ub41c \uc0ac\uc2e4\uc774\uc9c0\ub9cc JVM \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \uc2e4\ud589\ub41c \uc774\uc6b0\uc5d0 DNS \uce90\uc2dc\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\ub294 jdk \uad6c\ud604\uccb4 \ub9c8\ub2e4 \uc635\uc158\uc774 \ub2e4\ub974\ub2e4\uace0 \uc54c\uace0 \uc788\uc9c0\ub9cc \uc624\ub77c\ud074 jdk\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\ub294 \uc774\ub97c \ubb34\uae30\ud55c\uc73c\ub85c \uac00\uc9c0\uac8c \ub429\ub2c8\ub2e4. \ubcc0\uacbd\uc774 \ub418\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc598\uae30\uc8e0. \uadf8\ub798\uc11c \uc6b0\ub9ac\ub294 ",(0,a.jsx)(n.code,{children:"networkaddress.cache.ttl"}),"\ub97c \ucd94\uac00\ud558\uc5ec \ud14c\uc2a4\ud2b8 \ud574\ubcf4\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4\ub9cc... \ub3d9\uc77c\ud55c \uc608\uc678\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.h5,{id:"3-\uc2a4\ub9c8\ud2b8-\ub4dc\ub77c\uc774\ubc84-\uc0ac\uc6a9",children:"3. \uc2a4\ub9c8\ud2b8 \ub4dc\ub77c\uc774\ubc84 \uc0ac\uc6a9"}),"\n",(0,a.jsxs)(n.p,{children:["\ub9c8\uc9c0\ub9c9 \ubc29\ubc95\uc73c\ub85c \ucee4\ub125\ud130\ub97c \ubcc0\uacbd\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \ucee4\ub125\ud130\ub294 ",(0,a.jsx)(n.code,{children:"mysql-connector"}),"\uc600\uace0, \uc774\ub97c ",(0,a.jsx)(n.code,{children:"mariadb-connector"}),"\ub85c \ubcc0\uacbd\ud558\ub294 \uac83\uc774\uc600\uc2b5\ub2c8\ub2e4. \uc870\uae08 \ub354 \ucc3e\uc544\ubcf4\ub2c8 ",(0,a.jsx)(n.code,{children:"mariadb-connector"}),"\uc5d0\ub294 ",(0,a.jsx)(n.code,{children:"mysql-connector"}),"\uc640 \ub2ec\ub9ac failover\uc5d0 \ub300\ud55c \ub300\uc751\uc774 \uac00\ub2a5\ud55c \uc635\uc158\uc744 \uc81c\uacf5\ud574\uc8fc\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\n(\ucc38\uace0: ",(0,a.jsx)(n.a,{href:"https://mariadb.com/kb/en/failover-and-high-availability-with-mariadb-connector-j/#specifics-for-amazon-aurora",children:"https://mariadb.com/kb/en/failover-and-high-availability-with-mariadb-connector-j/#specifics-for-amazon-aurora"}),")"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"jdbc:mysql:aurora:.....\n"})}),"\n",(0,a.jsxs)(n.p,{children:["AWS \ucee4\ubba4\ub2c8\ud2f0\uc5d0\ub3c4 \uc9c8\ubb38\uc744 \ub0a8\uacbc\uc9c0\ub9cc \ub300\ub2e4\uc218\uc758 \ubd84\ub4e4\uc774 ",(0,a.jsx)(n.code,{children:"mariadb-connector"}),"\ub85c \ubcc0\uacbd\ud574\uc11c \ud574\uacb0\ud588\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \uc774\uc81c\ub294 \ub9c8\uc9c0\ub9c9\uc77c\uac70\ub77c\uace0 \uc0dd\uac01\ud558\uace0 \ud14c\uc2a4\ud2b8\ub97c \ud588\uace0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4..! \uc870\uae08 \ub354 \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\ub2c8 \uc2e4\ud328 \uc2dc\uc5d0 \ub0b4\ubd80\uc801\uc73c\ub85c \ucee4\ub0b5\uc158\uc744 \ub2e4\uc2dc \ub9fa\ub294 \uacfc\uc815\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h4,{id:"\ub610-\ub2e4\ub978-\uc774\uc288",children:"\ub610 \ub2e4\ub978 \uc774\uc288"}),"\n",(0,a.jsx)(n.p,{children:"\ucee4\ub0b5\uc158\uc5d0 \ub300\ud55c \ubd80\ubd84\uc740 \ud574\uacb0\ud588\uc9c0\ub9cc... \ub2e4\ub978 \uc608\uc678\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. connector\ub97c \ubcc0\uacbd\ud568\uc73c\ub85c\uc368 \ubc1c\uc0dd\ud55c \ubb38\uc81c\uc778\ub370\uc694. \uc774\ub7f0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uad6c\ub098 \ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:["\uc548\ud0c0\uae4c\uc6b4 \ud604\uc2e4\uc774\uc9c0\ub9cc \uc11c\ube44\uc2a4\uc5d0\uc11c ",(0,a.jsxs)(n.strong,{children:["SQL Mapper\uc778 ",(0,a.jsx)(n.code,{children:"Mybatis"}),"\ub97c \uc0ac\uc6a9"]}),"\ud558\uba70, ",(0,a.jsx)(n.strong,{children:"datetime\uc758 \uceec\ub7fc \uac12\uc744 String\uc73c\ub85c \ubc1b\ub294 \ucf00\uc774\uc2a4"}),"\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uae30\uc874 ",(0,a.jsx)(n.code,{children:"mysql-connector"}),"\uc5d0\uc11c\ub294 \uc774 \uac12\uc774 ",(0,a.jsx)(n.code,{children:"2021-02-07 17:19:00"}),"\uc73c\ub85c \ud560\ub2f9 \ub410\uc5c8\ub2e4\uba74, ",(0,a.jsx)(n.code,{children:"mariadb-connector"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,a.jsx)(n.code,{children:"2021-02-07 17:19:00.0"}),"\uc73c\ub85c \ud560\ub2f9 \ub429\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"AS-IS:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"mysql-connector"}),"\n",(0,a.jsx)(n.li,{children:"2021-02-07 17:19:00"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"TO-BE"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"mariadb-connector"}),"\n",(0,a.jsx)(n.li,{children:"2021-02-07 17:19:00.0"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\uc5b4\ub5bb\uac8c \ub41c \uc77c\uae4c\uc694? \uc7a0\uae50 \ucf54\ub4dc\ub97c \ub514\ubc84\uae45\ud574\ubcf4\ub2c8 \uc774\ub294 \ucee4\ub125\ud130 \uad6c\ud604\uccb4\uc758 \ucc28\uc774\uc5d0\uc11c \uc11c\ub85c \ub2e4\ub978 \uc751\ub2f5\uc744 \uc8fc\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.h5,{id:"mysql-connector",children:"mysql-connector"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mysql/mysql-connector-j/blob/18bbd5e68195d0da083cbd5bd0d05d76320df7cd/src/main/core-impl/java/com/mysql/cj/result/StringValueFactory.java#L95...L98",children:"https://github.com/mysql/mysql-connector-j/blob/18bbd5e68195d0da083cbd5bd0d05d76320df7cd/src/main/core-impl/java/com/mysql/cj/result/StringValueFactory.java#L95...L98"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public String createFromTimestamp(InternalTimestamp its) {\n    return String.format("%s %s", createFromDate(its), // 2021-02-07 17:19:00\n    createFromTime(new InternalTime(its.getHours(), its.getMinutes(), its.getSeconds(), its.getNanos(), its.getScale())));\n}\n'})}),"\n",(0,a.jsx)(n.h5,{id:"mariadb-connector",children:"mariadb-connector"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mariadb-corporation/mariadb-connector-j/blob/2.7.1/src/main/java/org/mariadb/jdbc/internal/com/read/resultset/rowprotocol/TextRowProtocol.java#L216...L225",children:"https://github.com/mariadb-corporation/mariadb-connector-j/blob/2.7.1/src/main/java/org/mariadb/jdbc/internal/com/read/resultset/rowprotocol/TextRowProtocol.java#L216...L225"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"case DATETIME:\n    Timestamp timestamp = getInternalTimestamp(columnInfo, cal, timeZone);\n    if (timestamp == null) {\n      if ((lastValueNull & BIT_LAST_ZERO_DATE) != 0) {\n        lastValueNull ^= BIT_LAST_ZERO_DATE;\n        return new String(buf, pos, length, StandardCharsets.UTF_8);\n      }\n      return null;\n    }\n    return timestamp.toString(); // 2021-02-07 17:19:00.0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\ub300\ub7b5\uc801\uc73c\ub85c \uc815\ub9ac\ud558\uc790\uba74, ",(0,a.jsx)(n.code,{children:"mysql-connector"}),"\ub294 \ub0b4\ubd80\uc801\uc73c\ub85c String.format\uc744 \uc0ac\uc6a9\ud558\uc5ec ",(0,a.jsx)(n.code,{children:"YYYY-MM-dd HH:mm:ss"})," \ud615\ud0dc\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \ub4ef \ubcf4\uc785\ub2c8\ub2e4. \ubc18\uba74, ",(0,a.jsx)(n.code,{children:"mariadb-connector"}),"\ub294 ",(0,a.jsx)(n.code,{children:"Timestamp.toString()"}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.h5,{id:"mybatis---typehandler",children:"mybatis - typeHandler"}),"\n",(0,a.jsxs)(n.p,{children:["\uc6b0\ub9ac\ub294 \uc774\uac83 \ub54c\ubb38\uc5d0 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uac74\ub4dc\ub294 \uac83\uc740 \ud06c\ub9ac\ud2f0\uceec\ud55c \uc774\uc288\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4\uace0 \ud310\ub2e8\ud558\uc5ec \uace0\ubbfc \ub05d\uc5d0 Mybatis\uc758 ",(0,a.jsx)(n.a,{href:"https://mybatis.org/mybatis-3/ko/configuration.html#typeHandlers",children:"TypeHandler"}),"\ub97c \uc774\uc6a9\ud558\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4. (JPA\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,a.jsx)(n.a,{href:"https://www.baeldung.com/jpa-attribute-converters",children:(0,a.jsx)(n.code,{children:"AttributeConverter"})}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,a.jsx)(n.p,{children:"\uc774\ubbf8 \uae30\ubcf8\uc801\uc778 typeHandler\ub85c \uad6c\ud604\ub418\uc5b4 \uc788\ub294 \uac83\uc744 \uc5b4\ub290\uc815\ub3c4 \ucee4\uc2a4\ud140\ud558\uba74 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc218\uc815\ud558\uc9c0 \uc54a\uace0\ub3c4 \uac04\ub2e8\ud788 \ucee4\ub125\ud130 \ubcc0\uacbd \uc774\uc288\ub97c \uc218\uc815\ud560 \uc218 \uc788\uc5c8\uace0, \uc131\uacf5\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub97c \uc644\ub8cc\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(96540);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);