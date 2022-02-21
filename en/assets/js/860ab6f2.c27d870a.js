"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3470],{89598:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.id,l=void 0===n?"demo-terminal":n,o=e.command,r=e.respond,i=e.prompt,s=void 0===i?"$":i,u=e.windowTitle,m=void 0===u?"bash":u,d=e.minHeight,p=void 0===d?"100px":d,c=e.onCompleteDelay,g=void 0===c?0:c;return(0,a.useEffect)((function(){var e=t(72210);t(47215),t(65831);var n=new e("#"+l);n.openApp("terminal",{minHeight:p,windowTitle:m,promptString:s});for(var a=o.split(";"),i=0;i<a.length;i++)n.command(a[i],{onCompleteDelay:g});n.respond(r),n.end()})),a.createElement(a.Fragment,null,a.createElement("div",{id:l,style:{minHeight:p}}),a.createElement("br",null),a.createElement("br",null))}},83704:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=t(87462),l=t(63366),o=(t(67294),t(3905)),r=(t(89598),["components"]),i={title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",slug:"2021/05/23/amazone-linux-log-issue",date:new Date("2021-05-23T18:00:00.000Z"),category:["linux"],tags:["linux","amazonelinux","systemd","systemd-journald","rsyslog","log"]},s={permalink:"/en/2021/05/23/amazone-linux-log-issue",source:"@site/blog/amazone-linux-log-issue.mdx",title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",description:"\uac1c\ubc1c \ucd08\uae30, \uac1c\ubc1c\uc11c\ubc84\uc5d0\uc11c /var/log\uc5d0 \uc0c1\ub2f9\ud788 \ub9ce\uc740 \ub370\uc774\ud130\uac00 \uc313\uc774\uba74\uc11c \uace8\uce58\uac00 \uc544\ud508 \uc801\uc774 \uc788\ub2e4. \ub9ac\ub205\uc2a4\uc5d0 \ub300\ud574 \ub9ce\uc740 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \ub2e4\ud589\ud788 \ud300\uc6d0\uc758 \ub3c4\uc6c0\uc73c\ub85c \ube68\ub9ac \ud574\uacb0 \ubc29\ubc95\uc744 \uc54c\uac8c \ub418\uc5c8\uc9c0\ub9cc, \ubaa8\ub974\ub294 \ub0b4\uc6a9\uc774 \uc788\uc5b4 \uc774\ub97c \ube14\ub85c\uae45\ud558\uc5ec \uae30\ub85d\ud574\ub450\ub824 \ud55c\ub2e4.",date:"2021-05-23T18:00:00.000Z",formattedDate:"May 23, 2021",tags:[{label:"linux",permalink:"/en/tags/linux"},{label:"amazonelinux",permalink:"/en/tags/amazonelinux"},{label:"systemd",permalink:"/en/tags/systemd"},{label:"systemd-journald",permalink:"/en/tags/systemd-journald"},{label:"rsyslog",permalink:"/en/tags/rsyslog"},{label:"log",permalink:"/en/tags/log"}],readingTime:6.905,truncated:!0,prevItem:{title:"MySQL \uc778\ub371\uc2a4 \ud1b5\uacc4",permalink:"/en/2021/06/17/mysql-index-statistics"},nextItem:{title:"AWS Aurora DB Cluster - FailOver \ub300\uc751\ud558\uae30",permalink:"/en/2021/02/13/aurora-cluster-failover"}},u=[],m={toc:u};function d(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uac1c\ubc1c \ucd08\uae30, \uac1c\ubc1c\uc11c\ubc84\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log"),"\uc5d0 \uc0c1\ub2f9\ud788 \ub9ce\uc740 \ub370\uc774\ud130\uac00 \uc313\uc774\uba74\uc11c \uace8\uce58\uac00 \uc544\ud508 \uc801\uc774 \uc788\ub2e4. \ub9ac\ub205\uc2a4\uc5d0 \ub300\ud574 \ub9ce\uc740 \uc9c0\uc2dd\uc774 \uc5c6\ub294 \uc0c1\ud669\uc5d0\uc11c \ub2e4\ud589\ud788 \ud300\uc6d0\uc758 \ub3c4\uc6c0\uc73c\ub85c \ube68\ub9ac \ud574\uacb0 \ubc29\ubc95\uc744 \uc54c\uac8c \ub418\uc5c8\uc9c0\ub9cc, \ubaa8\ub974\ub294 \ub0b4\uc6a9\uc774 \uc788\uc5b4 \uc774\ub97c \ube14\ub85c\uae45\ud558\uc5ec \uae30\ub85d\ud574\ub450\ub824 \ud55c\ub2e4.")))}d.isMDXComponent=!0},65831:function(e,n,t){t.r(n)}}]);