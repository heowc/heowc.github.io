"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3868],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,_=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(_,s(s({ref:t},d),{},{components:n})):a.createElement(_,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={title:"MySQL \uc778\ub371\uc2a4 \ud1b5\uacc4",slug:"2021/06/17/mysql-index-statistics",date:new Date("2021-06-17T13:00:00.000Z"),categories:["mysql"],tags:["mysql","index","index-statistics"]},o={permalink:"/2021/06/17/mysql-index-statistics",source:"@site/blog/mysql-index-statistics.md",title:"MySQL \uc778\ub371\uc2a4 \ud1b5\uacc4",description:"\ucffc\ub9ac\ub97c \uc2e4\ud589\uc2dc\uc5d0 \uc608\uc0c1\ud588\ub358 \uc778\ub371\uc2a4\ub97c \ud0c0\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc744 \uc54c\uc544\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.",date:"2021-06-17T13:00:00.000Z",formattedDate:"2021\ub144 6\uc6d4 17\uc77c",tags:[{label:"mysql",permalink:"/tags/mysql"},{label:"index",permalink:"/tags/index"},{label:"index-statistics",permalink:"/tags/index-statistics"}],readingTime:4.7,truncated:!0,prevItem:{title:"Spring WebSocket (with STOMP)",permalink:"/2021/07/15/spring-websocket-with-stomp"},nextItem:{title:"Amazon Linux\uc5d0\uc11c /var/log\uac00 \uaf49\ucc28\ub294 \uc774\uc288",permalink:"/2021/05/23/amazone-linux-log-issue"}},p=[{value:"\ud14c\uc774\ube14 \uc0dd\uc131",id:"\ud14c\uc774\ube14-\uc0dd\uc131",children:[]},{value:"explain",id:"explain",children:[]},{value:"innodb_index_stats",id:"innodb_index_stats",children:[]},{value:"\uc778\ub371\uc2a4 \ud1b5\uacc4 \uad6c\uc131\ubc95",id:"\uc778\ub371\uc2a4-\ud1b5\uacc4-\uad6c\uc131\ubc95",children:[]},{value:"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?",id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c\ud560\uae4c",children:[]},{value:"\ucc38\uace0",id:"\ucc38\uace0",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucffc\ub9ac\ub97c \uc2e4\ud589\uc2dc\uc5d0 \uc608\uc0c1\ud588\ub358 \uc778\ub371\uc2a4\ub97c \ud0c0\uc9c0 \uc54a\ub294 \ud604\uc0c1\uc744 \uc54c\uc544\ubcf4\uace0\uc790 \ud569\ub2c8\ub2e4.")),(0,i.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \ud14c\uc774\ube14\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc790."),(0,i.kt)("h3",{id:"\ud14c\uc774\ube14-\uc0dd\uc131"},"\ud14c\uc774\ube14 \uc0dd\uc131"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `payment_history` (\n    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT, -- \uacb0\uc81c id\n    `user_id` varchar(100) DEFAULT NULL, -- \uc720\uc800 \uc815\ubcf4\n    `status` varchar(10) DEFAULT NULL, -- \uacb0\uc81c \uc0c1\ud0dc\n    ...\n    PRIMARY KEY (`id`),\n    KEY `idx_user_id` (`user_id`),\n    KEY `idx_user_id_status` (`user_id`, `status`),\n    ...\n)\n")),(0,i.kt)("h3",{id:"explain"},"explain"),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc74c\uacfc \uac19\uc740 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud55c\ub2e4\uba74 \uc5b4\ub5a4 \uc778\ub371\uc2a4\ub97c \ud0c0\uac8c \ub420\uae4c\uc694?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  *\nFROM    `payment_history`\nWHERE   `user_id` = 'AAAAAAA'\nAND     `status` = 'Completed'\n")),(0,i.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc2e4\ud589 \uacc4\ud68d\uc744 \uc608\uc0c1\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"... | possible_keys                   | key                | ... | rows  | ...\n------------------------------------------------------------------------\n... | idx_user_id, idx_user_id_status | idx_user_id_status | ... | 17714 | ...\n")),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc \uacbd\uc6b0\uc5d0 \ub530\ub77c, \uc774\ub294 \ub2e4\ub978 \uc2e4\ud589 \uacc4\ud68d \uacb0\uacfc\uac00 \ub3c4\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"... | possible_keys                   | key                | ... | rows  | ...\n------------------------------------------------------------------------\n... | idx_user_id, idx_user_id_status | idx_user_id        | ... | 16670 | ...\n")),(0,i.kt)("p",null,"\uadf8 \uc774\uc720\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uc635\ud2f0\ub9c8\uc774\uc800\uac00 \uc608\uc0c1\uacfc \ub2e4\ub978 \uc778\ub371\uc2a4\ub97c \ud0d0\uc0c9"),"\ud588\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \uc635\ud2f0\ub9c8\uc774\uc800\ub294 \ucd5c\uc801\uc758 \uc2e4\ud589\uacc4\ud68d\uc744 \uc138\uc6b0\uae30 \uc704\ud574 \uc778\ub371\uc2a4 \ud1b5\uacc4 \uc815\ubcf4\ub97c \uc758\uc874\ud558\uac8c \ub418\ub294\ub370, MySQL \uac19\uc740 \uacbd\uc6b0\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-persistent-stats.html#innodb-index-stats-table"},(0,i.kt)("inlineCode",{parentName:"a"},"mysql.innodb_index_stats"))," \ub77c\ub294 \ud14c\uc774\ube14\uc5d0\uc11c \ud574\ub2f9 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"innodb_index_stats"},"innodb_index_stats"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  *\nFROM    `mysql.innodb_index_stats`\nWHERE   `database_name` = 'test' \nAND     `table_name` = 'payment_history';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"... | table_name      | index_name         | ... | stat_name    | stat_value | ... | stat_description\n-------------------------------------------------------------------------------------------------------------------------\n... | payment_history | PRIMARY            | ... | n_diff_pfx01 |        ... | ... | id\n... | payment_history | PRIMARY            | ... | n_leaf_pages |        ... | ... | Number of leaf pages in the index\n... | payment_history | PRIMARY            | ... | size         |        ... | ... | Number of pages in the index\n... | payment_history | idx_user_id        | ... | n_diff_pfx01 |  1,360,401 | ... | id\n... | payment_history | idx_user_id        | ... | n_diff_pfx02 | 17,432,752 | ... | user_id,id\n... | payment_history | idx_user_id        | ... | n_leaf_pages |     66,084 | ... | Number of leaf pages in the index\n... | payment_history | idx_user_id        | ... | size         |     75,904 | ... | Number of pages in the index\n... | payment_history | idx_user_id_status | ... | n_diff_pfx01 |  1,566,677 | ... | user_id\n... | payment_history | idx_user_id_status | ... | n_diff_pfx02 |  1,660,688 | ... | user_id,status\n... | payment_history | idx_user_id_status | ... | n_diff_pfx03 | 15,970,551 | ... | user_id,status,id\n... | payment_history | idx_user_id_status | ... | n_leaf_pages |     81,288 | ... | Number of leaf pages in the index\n... | payment_history | idx_user_id_status | ... | size         |     93,540 | ... | Number of pages in the index\n")),(0,i.kt)("p",null,"\uc5ec\uae30\uc11c \uac01 \uc778\ub371\uc2a4\uc5d0 \ub300\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"stat_value"),"\ub97c \ubcf4\uace0 \ub300\ub7b5\uc801\uc73c\ub85c \ud310\ub2e8\ud560 \uc218 \uc788\ub294\uac74, \uc704 \ucffc\ub9ac\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"idx_user_id"),"\ub97c \ud0d0\uc0c9\ud558\ub294 \uac83\uc774 \ubcf4\ub2e4 \ube60\ub974\ub2e4\ub294 \uac83\uc744 \uae30\ub300\ud560 \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc778\ub371\uc2a4-\ud1b5\uacc4-\uad6c\uc131\ubc95"},"\uc778\ub371\uc2a4 \ud1b5\uacc4 \uad6c\uc131\ubc95"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-performance-optimizer-statistics.html"},"https://dev.mysql.com/doc/refman/5.6/en/innodb-performance-optimizer-statistics.html"))),(0,i.kt)("h4",{id:"1-innodb_stats_persistenton"},"1. innodb_stats_persistent=ON"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-parameters.html#sysvar_innodb_stats_persistent"},"innodb_stats_persistent"),"\uc740 MySQL 5.6.2\uc5d0\uc11c \uc0dd\uacbc\uc73c\uba70, 5.6.6\ubd80\ud130 \uae30\ubcf8\uac12\uc774 ON\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-parameters.html#sysvar_innodb_stats_auto_recalc"},"innodb_stats_auto_recalc"),"\uc740 \uc790\ub3d9 \uacc4\uc0b0 \uc5ec\ubd80\ub97c \uc9c0\uc815\ud558\ub294 \uc635\uc158\uc785\ub2c8\ub2e4. (\uae30\ubcf8\uac12\uc740 ON) \ud14c\uc774\ube14\uc758 10% \ubcc0\uacbd\uc774 \uc788\uc744 \ub54c \uc7ac\uacc4\uc0b0\uc744 \ud558\ub294\ub370, \uc544\uc27d\uac8c\ub3c4 \uc774 \uac12\uc740 \ud558\ub4dc\ucf54\ub529 \ub418\uc5b4\uc788\uc5b4 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mysql/mysql-server/blob/5.6/storage/innobase/row/row0mysql.cc#L1106"},"mysql/mysql-server"),")"),(0,i.kt)("h4",{id:"2-innodb_stats_persistentoff"},"2. innodb_stats_persistent=OFF"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-parameters.html#sysvar_innodb_stats_on_metadata"},"innodb_stats_on_metadata"),"\uc744 ON\ud558\uba74 \ub2e4\uc74c \ucffc\ub9ac\uc2dc \uc7ac\uacc4\uc0b0\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (\uae30\ubcf8\uac12\uc740 OFF)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SHOW TABLE STATUS"),(0,i.kt)("li",{parentName:"ul"},"SHOW INDEX"),(0,i.kt)("li",{parentName:"ul"},"INFORMATION_SCHEMA.TABLES"),(0,i.kt)("li",{parentName:"ul"},"INFORMATION_SCHEMA.STATISTICS")),(0,i.kt)("h4",{id:"3-analyze-table-table_name"},"3. ANALYZE TABLE {table_name}"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/analyze-table.html"},"ANALYZE TABLE {table_name}")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\uc778\ub371\uc2a4 \ud1b5\uacc4 \ud14c\uc774\ube14\uc744 \uc7ac\uacc4\uc0b0\ud569\ub2c8\ub2e4.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud558\uc9c0\ub9cc \uc5ed\uc2dc \ub9c9\uc4f0\ub294\uac8c \uc544\ub2cc \uac83\uc774... \ub108\ubb34 \ub290\ub9ac\uae30\ub3c4 \ud558\uace0 \ud14c\uc774\ube14 read lock\uc774 \uac78\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc870\uc2ec\ud574\uc11c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"During the analysis, the table is locked with a read lock for InnoDB and MyISAM."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ub610\ud55c \uc7ac\uacc4\uc0b0\ud55c\ub2e4\uace0 \uc88b\uc544\uc9c4\ub2e4\ub294 \ubcf4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uacb0\uad6d \ub79c\ub364\uc73c\ub85c \uc0d8\ud50c\ub9c1\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \uc88b\uc544\uc9c8 \uc218\ub3c4, \ub098\ube60\uc9c8 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("h3",{id:"\uadf8\ub807\ub2e4\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c\ud560\uae4c"},"\uadf8\ub807\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud560\uae4c?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14 \ubcc4\ub85c ",(0,i.kt)("inlineCode",{parentName:"li"},"innodb_stats_persistent_sample_pages"),"\ub97c \uc870\uc808\ud558\uc790"),(0,i.kt)("li",{parentName:"ul"},"\uc801\uc808\ud788 ",(0,i.kt)("inlineCode",{parentName:"li"},"ANALYZE TABLE"),"\ub97c \uc0ac\uc6a9\ud558\uc790")),(0,i.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-performance-optimizer-statistics.html"},"https://dev.mysql.com/doc/refman/5.6/en/innodb-performance-optimizer-statistics.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.6/en/innodb-analyze-table-complexity.html"},"https://dev.mysql.com/doc/refman/5.6/en/innodb-analyze-table-complexity.html"))))}m.isMDXComponent=!0}}]);