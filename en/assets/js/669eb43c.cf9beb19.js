"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[2342],{89598:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=e=>{let{id:t="demo-terminal",command:n,respond:o,prompt:i="$",windowTitle:s="bash",minHeight:r="100px",onCompleteDelay:m=0}=e;return(0,l.useEffect)((()=>{const e=a(72210);a(47215),a(65831);let l=new e("#"+t);l.openApp("terminal",{minHeight:r,windowTitle:s,promptString:i});let d=n.split(";");for(let t=0;t<d.length;t++)l.command(d[t],{onCompleteDelay:m});l.respond(o),l.end()})),l.createElement(l.Fragment,null,l.createElement("div",{id:t,style:{minHeight:r}}),l.createElement("br",null),l.createElement("br",null))}},30858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var l=a(87462),n=(a(67294),a(3905)),o=a(89598);const i={title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",slug:"2021/05/23/amazone-linux-log-issue",date:new Date("2021-05-23T18:00:00.000Z"),category:["linux"],tags:["linux","amazonelinux","systemd","systemd-journald","rsyslog","log"]},s=void 0,r={permalink:"/en/2021/05/23/amazone-linux-log-issue",source:"@site/blog/amazone-linux-log-issue.mdx",title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",description:"\uac1c\ubc1c \ucd08\uae30, \uac1c\ubc1c\uc11c\ubc84\uc5d0\uc11c /var/log\uc5d0 \uc0c1\ub2f9\ud788 \ub9ce\uc740 \ub370\uc774\ud130\uac00 \uc313\uc774\uba74\uc11c \uace8\uce58\uac00 \uc544\ud508 \uc801\uc774 \uc788\ub2e4. \ub9ac\ub205\uc2a4\uc5d0 \ub300\ud574 \ub9ce\uc740 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \ub2e4\ud589\ud788 \ud300\uc6d0\uc758 \ub3c4\uc6c0\uc73c\ub85c \ube68\ub9ac \ud574\uacb0 \ubc29\ubc95\uc744 \uc54c\uac8c \ub418\uc5c8\uc9c0\ub9cc, \ubaa8\ub974\ub294 \ub0b4\uc6a9\uc774 \uc788\uc5b4 \uc774\ub97c \ube14\ub85c\uae45\ud558\uc5ec \uae30\ub85d\ud574\ub450\ub824 \ud55c\ub2e4.",date:"2021-05-23T18:00:00.000Z",formattedDate:"May 23, 2021",tags:[{label:"linux",permalink:"/en/tags/linux"},{label:"amazonelinux",permalink:"/en/tags/amazonelinux"},{label:"systemd",permalink:"/en/tags/systemd"},{label:"systemd-journald",permalink:"/en/tags/systemd-journald"},{label:"rsyslog",permalink:"/en/tags/rsyslog"},{label:"log",permalink:"/en/tags/log"}],readingTime:6.905,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",slug:"2021/05/23/amazone-linux-log-issue",date:"2021-05-23T18:00:00.000Z",category:["linux"],tags:["linux","amazonelinux","systemd","systemd-journald","rsyslog","log"]},prevItem:{title:"MySQL \uc778\ub371\uc2a4 \ud1b5\uacc4",permalink:"/en/2021/06/17/mysql-index-statistics"},nextItem:{title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",permalink:"/en/2021/02/13/aurora-cluster-failover"}},m={authorsImageUrls:[]},d=[{value:"Amazone Linux2",id:"amazone-linux2",level:2},{value:"systemd",id:"systemd",level:2},{value:"<code>systemd</code> \uc774\ub780?",id:"systemd-\uc774\ub780",level:3},{value:"<code>systemd</code> \uad6c\uc870",id:"systemd-\uad6c\uc870",level:3},{value:"<code>systemd</code> \ub85c\uae45 \uc2dc\uc2a4\ud15c",id:"systemd-\ub85c\uae45-\uc2dc\uc2a4\ud15c",level:2},{value:"\uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ub85c\uae45 \uc11c\ube44\uc2a4 \ud655\uc778\ud574\ubcf4\uae30",id:"\uc0ac\uc6a9\ud558\uace0-\uc788\ub294-\ub85c\uae45-\uc11c\ube44\uc2a4-\ud655\uc778\ud574\ubcf4\uae30",level:3},{value:"systemd-journald",id:"systemd-journald",level:3},{value:"rsyslog",id:"rsyslog",level:3},{value:"Input Module(imjournal)",id:"input-moduleimjournal",level:4},{value:"logrotate",id:"logrotate",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uac1c\ubc1c \ucd08\uae30, \uac1c\ubc1c\uc11c\ubc84\uc5d0\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log"),"\uc5d0 \uc0c1\ub2f9\ud788 \ub9ce\uc740 \ub370\uc774\ud130\uac00 \uc313\uc774\uba74\uc11c \uace8\uce58\uac00 \uc544\ud508 \uc801\uc774 \uc788\ub2e4. \ub9ac\ub205\uc2a4\uc5d0 \ub300\ud574 \ub9ce\uc740 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \ub2e4\ud589\ud788 \ud300\uc6d0\uc758 \ub3c4\uc6c0\uc73c\ub85c \ube68\ub9ac \ud574\uacb0 \ubc29\ubc95\uc744 \uc54c\uac8c \ub418\uc5c8\uc9c0\ub9cc, \ubaa8\ub974\ub294 \ub0b4\uc6a9\uc774 \uc788\uc5b4 \uc774\ub97c \ube14\ub85c\uae45\ud558\uc5ec \uae30\ub85d\ud574\ub450\ub824 \ud55c\ub2e4.")),(0,n.kt)("p",null,"\ub9ac\ub205\uc2a4\uc5d0\uc11c\ub294 \ub0b4\ubd80\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8\uc5d0 \ub300\ud55c \ub85c\uadf8\ub97c \uad00\ub9ac\ud558\ub294 \uc2dc\uc2a4\ud15c\uc774 \uc874\uc7ac\ud55c\ub2e4. \uc77c\ub2e8 \ud55c \ub188(?)\ub9cc \ud30c\ubcf4\uace0\uc790 \ud68c\uc0ac\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"amazon linux2"),"\uc758 \ub85c\uae45 \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubcf4\uace0\uc790 \ud55c\ub2e4."),(0,n.kt)("h2",{id:"amazone-linux2"},"Amazone Linux2"),(0,n.kt)("p",null,"\uacf5\uc2dd\ubb38\uc11c\ub294 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/amazon-linux-ami-basics.html"},"\uc5ec\uae30"),"\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Amazon Linux\ub294 CentOS\ucc98\ub7fc RedHat\uacc4\uc5f4\uc758 \ub9ac\ub205\uc2a4\uc774\ub2e4.")),(0,n.kt)("h2",{id:"systemd"},"systemd"),(0,n.kt)("h3",{id:"systemd-\uc774\ub780"},(0,n.kt)("inlineCode",{parentName:"h3"},"systemd")," \uc774\ub780?"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\uc704\ud0a4\ud53c\ub514\uc544 - ",(0,n.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://ko.wikipedia.org/wiki/Systemd"},"https://ko.wikipedia.org/wiki/Systemd")),(0,n.kt)("p",{parentName:"admonition"},"systemd\ub294 \uc77c\ubd80 \ub9ac\ub205\uc2a4 \ubc30\ud3ec\ud310\uc5d0\uc11c \uc720\ub2c9\uc2a4 \uc2dc\uc2a4\ud15c V\ub098 BSD init \uc2dc\uc2a4\ud15c \ub300\uc2e0 \uc0ac\uc6a9\uc790 \uacf5\uac04\uc744 \ubd80\ud2b8\uc2a4\ud2b8\ub798\ud551\ud558\uace0 \ucd5c\uc885\uc801\uc73c\ub85c \ubaa8\ub4e0 \ud504\ub85c\uc138\uc2a4\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 init \uc2dc\uc2a4\ud15c\uc774\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Amazone Linux2"),"\ub294 systemd\ub97c ",(0,n.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/Init"},"init \uc2dc\uc2a4\ud15c"),"\uc73c\ub85c \ucc44\ud0dd\ud558\uc5ec \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4. \uc5ec\uae30\uc11c ",(0,n.kt)("strong",{parentName:"p"},"init \uc2dc\uc2a4\ud15c\uc774\ub780 \ucef4\ud4e8\ud130 \uc2dc\uc2a4\ud15c\uc758 \ubd80\ud305 \uacfc\uc815 \uc911 \ucd5c\ucd08\uc758 \ud504\ub85c\uc138\uc2a4"),"\uc774\ub2e4."),(0,n.kt)("h3",{id:"systemd-\uad6c\uc870"},(0,n.kt)("inlineCode",{parentName:"h3"},"systemd")," \uad6c\uc870"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt systemd-components",src:a(25184).Z,width:"720",height:"405"})),(0,n.kt)("p",null,"\uc704 \uadf8\ub9bc\uacfc \uac19\uc740 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4. \uc774 \uae00\uc5d0\uc11c \ubaa8\ub450 \uc5b8\uae09\ud558\uae30 \uc5b4\ub835\uae30\ub3c4 \ud558\uace0 \uc774\uc288\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ubd10\uc57c\ud588\ub358 \ubd80\ubd84\ub9cc \uc5b8\uae09\ud574\ubcf4\uace0\uc790 \ud55c\ub2e4."),(0,n.kt)("h2",{id:"systemd-\ub85c\uae45-\uc2dc\uc2a4\ud15c"},(0,n.kt)("inlineCode",{parentName:"h2"},"systemd")," \ub85c\uae45 \uc2dc\uc2a4\ud15c"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\uc704\ud0a4\ud53c\ub514\uc544(Systemd#journald) - ",(0,n.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://en.wikipedia.org/wiki/Systemd#journald"},"https://en.wikipedia.org/wiki/Systemd#journald")),(0,n.kt)("p",{parentName:"admonition"},"systemd-journald is a daemon responsible for event logging, with append-only binary files serving as its logfiles. The system administrator may choose whether to log system events with systemd-journald, syslog-ng or rsyslog. The potential for corruption of the binary format has led to much heated debate")),(0,n.kt)("h3",{id:"\uc0ac\uc6a9\ud558\uace0-\uc788\ub294-\ub85c\uae45-\uc11c\ube44\uc2a4-\ud655\uc778\ud574\ubcf4\uae30"},"\uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \ub85c\uae45 \uc11c\ube44\uc2a4 \ud655\uc778\ud574\ubcf4\uae30"),(0,n.kt)(o.Z,{id:"demo-systemctl",command:"systemctl list-units --type=service",respond:"UNIT                              LOAD   ACTIVE SUB     DESCRIPTION\n...\nrsyslog.service                   loaded active running System Logging Service\n...\nsystemd-journal-flush.service     loaded active exited  Flush Journal to Persistent Storag\nsystemd-journald.service          loaded active running Journal Service\n...",minHeight:"240px",onCompleteDelay:300,mdxType:"GDemoTerminal"}),(0,n.kt)("p",null,"\ud604\uc7ac \uc2e4\ud589 \uc911\uc778 ",(0,n.kt)("strong",{parentName:"p"},"systemd-journald"),", ",(0,n.kt)("strong",{parentName:"p"},"rsyslog"),"\ub97c \ucc3e\uc544\ubcf4\uc790!"),(0,n.kt)("h3",{id:"systemd-journald"},"systemd-journald"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html"},"https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html")),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c\uc758 \uc804\ubc18\uc801\uc778 \ub85c\uadf8\ub97c \uc218\uc9d1 \ubc0f \uc800\uc7a5\ud558\ub294 \ub370\ubaac \uc11c\ube44\uc2a4"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/var/log/journal")," \ud558\uc704\uc5d0 \ubc14\uc774\ub108\ub9ac \ud615\ud0dc\ub85c \uc313\uc784"),(0,n.kt)("li",{parentName:"ul"},"\uc124\uc815 \ud30c\uc77c: ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/systemd/journald.conf")),(0,n.kt)("li",{parentName:"ul"},"\uad00\ub828\ub41c \uc11c\ube44\uc2a4 \ubc0f \ub3c4\uad6c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"systemd-journald.service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"systemd-journal-flush.service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"journalctl"))))),(0,n.kt)("h3",{id:"rsyslog"},"rsyslog"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.fluentd.org/"},"fluentd"),"\uc640 \ud761\uc0ac\ud55c \ub3c4\uad6c\ub77c\uace0 \ub290\uaef4\uc9d0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rsyslog.com"},"https://www.rsyslog.com")),(0,n.kt)("li",{parentName:"ul"},"\uc124\uc815 \ud30c\uc77c: ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/rsyslog.conf")),(0,n.kt)("li",{parentName:"ul"},"input/output/parser \ubaa8\ub4c8\uc744 \uc124\uc815\ud558\uc5ec \ub85c\uae45\ud560 \uc218 \uc788\uc74c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rsyslog.com/plugins/"},"https://www.rsyslog.com/plugins/")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"amazonlinux2"),"\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 input \uc124\uc815\uc774 \uae30\ubcf8\uc73c\ub85c \ub418\uc5b4 \uc788\uc74c (",(0,n.kt)("inlineCode",{parentName:"li"},"uxsock"),",",(0,n.kt)("inlineCode",{parentName:"li"},"journal"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GitHub\uc5d0\uc11c ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rsyslog/rsyslog/blob/91885676001c9df1c2c91514d144cf71755d5d14/platform/redhat/centos/rsyslog.conf"},"rsyslog/rsyslog - rsyslog.conf"),"\ub97c \ucc3e\uc544\ubcf4\ub2c8 \uae30\ubcf8 \uc124\uc815 \ud30c\uc77c\uc778 \uac83\uc73c\ub85c \ubcf4\uc784"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rsyslog.com/doc/v8-stable/configuration/modules/imuxsock.html"},"https://www.rsyslog.com/doc/v8-stable/configuration/modules/imuxsock.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rsyslog.com/doc/v8-stable/configuration/modules/imjournal.html"},"https://www.rsyslog.com/doc/v8-stable/configuration/modules/imjournal.html"))))),(0,n.kt)(o.Z,{id:"demo-rsyslog_conf",command:"cat /etc/rsyslog.conf",respond:"...\n# The imjournal module bellow is now used as a message source instead of imuxsock.\n$ModLoad imuxsock # provides support for local system logging (e.g. via logger command)\n$ModLoad imjournal # provides access to the systemd journal\n#$ModLoad imklog # reads kernel messages (the same are read from journald)\n#$ModLoad immark  # provides --MARK-- message capability\n...",minHeight:"220px",onCompleteDelay:300,mdxType:"GDemoTerminal"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc804\ubd80 \ucc3e\uc544\ubcf4\uc9c4 \uc54a\uc558\uc9c0\ub9cc Output Module\uc5d0\ub294 \uae30\ubcf8 \ub0b4\uc7a5 \ubaa8\ub4c8\uc774 \uc874\uc7ac (",(0,n.kt)("inlineCode",{parentName:"li"},"omusrmsg"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"omfile"),")")),(0,n.kt)("h4",{id:"input-moduleimjournal"},"Input Module(imjournal)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"imjournal\uc73c\ub85c\ub3c4 imklog\uc640 \ub3d9\uc77c\ud558\uac8c \ucee4\ub110 \ub85c\uadf8\ub97c \uc77d\uc744 \uc218 \uc788\ub2e4\uace0 \ud568")),(0,n.kt)(o.Z,{id:"demo-logger",command:"logger -s log test",respond:"<13>May 23 07:54:54 XXXXXX: log test",minHeight:"60px",mdxType:"GDemoTerminal"}),(0,n.kt)(o.Z,{id:"demo-tail",command:"tail -1 /var/log/messages",respond:"May 23 07:54:54 ip-XXXXXXXXXXXXXXX XXXXXX: log test",minHeight:"80px",mdxType:"GDemoTerminal"}),(0,n.kt)("h2",{id:"logrotate"},"logrotate"),(0,n.kt)("p",null,"\uadf8\ub7f0\ub370 ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/messages")," \ub97c \uac80\uc0c9\ud574\ubcf4\uba74 \ub0a0\uc9dc\ubcc4\ub85c rotate\ub418\ub294 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4. \ub610 \uc774\uac74 \uc5b4\ub5a4 \uc11c\ube44\uc2a4\uac00 \uc774\ub97c \ucc98\ub9ac\ud558\ub294 \uac83 \uc77c\uae4c?"),(0,n.kt)(o.Z,{id:"demo-ls-message",command:"ls -al /var/log/messages*",respond:"-rw------- 1 root root   37437  5\uc6d4 23 08:01 /var/log/messages\n-rw------- 1 root root   37437  5\uc6d4 23 03:44 /var/log/messages-20210523",minHeight:"100px",mdxType:"GDemoTerminal"}),(0,n.kt)("p",null,"\uadf8\uac83\uc774 \ubc14\ub85c ",(0,n.kt)("a",{parentName:"p",href:"https://linux.die.net/man/8/logrotate"},"logrotate"),"\ub77c\ub294 \ub140\uc11d\uc774\ub2e4. \uc694\uc57d\ud558\uc790\uba74, ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/cron.daily/logrotate")," \uc774 \uc2a4\ud06c\ub9bd\ud2b8\uac00 \ub9e4\uc77c \uc2e4\ud589\ub418\uba74\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.conf"),"\uacfc ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/")," \ud558\uc704\uc5d0 \ud30c\uc77c\ub4e4\uc758 \uc124\uc815\uc73c\ub85c rotate\uac00 \ub418\ub294 \uac83\uc778\ub370, \uc790\uc138\ud55c \uc124\uba85\uc740 ",(0,n.kt)("a",{parentName:"p",href:"https://server-talk.tistory.com/271"},"\uc774 \ube14\ub85c\uadf8"),"\uc5d0 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc5b4 \uc774\ub97c \ub300\uc2e0\ud55c\ub2e4."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\uc2e4\uc81c\ub85c ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/syslog")," \uc124\uc815\uc744 \ud655\uc778 \ud574\ubcf4\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/messages"),"\uac00 rotate \ub418\ub294 \ubaa9\ub85d\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4.")),(0,n.kt)(o.Z,{id:"demo-cat",command:"cat /etc/logrotate.d/syslog",respond:"/var/log/cron\n/var/log/maillog\n/var/log/messages\n/var/log/secure\n...",minHeight:"200px",mdxType:"GDemoTerminal"}),(0,n.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\uc2dc\uc2a4\ud15c \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uba74 systemd-journald\uac00 \uc774\ub97c \uc218\uc9d1"),(0,n.kt)("li",{parentName:"ol"},"systemd-journald\uc5d0\uc11c \ubc14\uc774\ub108\ub9ac \ud615\ud0dc\ub85c \ub85c\uadf8 \ud30c\uc77c\uc744 \ub9cc\ub4ec"),(0,n.kt)("li",{parentName:"ol"},"rsyslog(input module=imjournal)\uc73c\ub85c systemd-journald\uc5d0\uc11c syslog\ub85c \uad6c\uc870\ud654\ub41c \ub85c\uadf8\ub97c \uac00\uc838\uc634"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"/var/log")," \ud558\uc704\uc5d0 rule\uc5d0 \ub9de\ub294 \ub85c\uadf8\ub85c \ucd9c\ub825"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"/var/log")," \ud558\uc704 \ub85c\uadf8\ub4e4\uc740 logrotate\ub85c \uc778\ud574 \ub9e4\uc77c rotate")),(0,n.kt)("h2",{id:"\ub290\ub080\uc810"},"\ub290\ub080\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/var/log"),"\uc5d0 \uad49\uc7a5\ud788 \ub2e4\uc591\ud55c \ub85c\uadf8\uac00 \uc313\uc774\ub294 \uac83\uc744 \uc54c\uac8c\ub418\uc5c8\ub2e4. (\ubd80\ud305, \uba54\uc77c, \uba54\uc2dc\uc9c0, ... \ub4f1\ub4f1)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"systemd"),"\uc5d0 \uae30\ubcf8\uc801\uc778 \ub85c\uadf8 \uc2dc\uc2a4\ud15c\ub9cc\uc73c\ub85c\ub3c4 \ub2e4\uc591\ud55c \ub85c\uadf8\ub97c \uac00\uacf5 \ubc0f \ucc98\ub9ac\ub97c \ud560 \uc218 \uc788\ub2e4. \uadf8\ub807\uae30 \ub584\ubb38\uc5d0 \uc774\ub97c \uc0dd\uac01\ud558\uc9c0 \uc54a\uace0 \ubcc4\ub3c4\uc758 \ub85c\uadf8\ub97c \uac00\uacf5\ud55c\ub2e4\uace0 \uc791\uc5c5\uc744 \ucd94\uac00\ud558\uba74, \uc774\uc911\uc73c\ub85c \uc791\uc5c5\ud558\uac8c \ub418\ub294 \uac83\uc774\ub77c\uace0 \ud310\ub2e8\ub41c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"systemd-journald"),"\uc744 \uc0ac\uc6a9\ud558\uba74 ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/log/journal"),"\uc5d0 \ubc14\uc774\ub108\ub9ac \ud615\ud0dc\ub85c \ub85c\uadf8\uac00 \uc313\uc774\ub294\ub370 \uc774\uac8c \ub9de\ub294 \uac83\uc77c\uae4c? \ud83e\udd14",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"journalctl"),"\uc73c\ub85c\ub3c4 \ubcfc \uc218 \uc788\uc9c0\ub9cc, ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/log/messages"),"\uc5d0 \uc313\uc774\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ucda9\ubd84\ud558\uc9c0 \uc54a\ub098\ub77c\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4. (\uc774\uac83\ub3c4 \uc774\uc911 \uc791\uc5c5\uc774\uc9c0 \uc54a\ub098...? \ud83e\udd14)"))),(0,n.kt)("li",{parentName:"ul"},"(java) \ubb34\uc2ec\ucf54 logback\uc758 console appender\uc73c\ub85c \uc124\uc815\ud574\ub450\uace0 \uc11c\ubc84\uc5d0 \ubc18\uc601\ud558\uba74, ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/log/messages"),"\uc5d0 \uc313\uc774\ub294 \uac83\uc744 \uacbd\ud5d8\ud588\ub2e4. \ud83e\udd23"),(0,n.kt)("li",{parentName:"ul"},"\ud604\uc7ac \uc11c\ube44\uc2a4\uc758 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\uadf8\ub97c ",(0,n.kt)("inlineCode",{parentName:"li"},"crontab"),"\uc73c\ub85c \ubcc4\ub3c4\uc758 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ub4f1\ub85d\ud558\uc5ec rotate\ud558\uace0 \uc788\ub294\ub370 ",(0,n.kt)("inlineCode",{parentName:"li"},"logrotate"),"\uc73c\ub85c \ucc98\ub9ac\ud558\uba74 \ubcf4\ub2e4 \uae54\ub054\ud55c \ucc98\ub9ac\uac00 \ub418\uc9c0 \uc54a\uc744\uae4c \uc2f6\ub2e4.")))}u.isMDXComponent=!0},65831:(e,t,a)=>{a.r(t)},25184:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/Systemd_components-10de7e9713e740ba7c3d0ee25eb6bfcb.png"}}]);