"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[6027],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={title:"Hibernate NativeQuery HHH-14778 issue (with Postgres)",slug:"2021/11/27/hibernate-nativequery-bug-with-postgres",date:new Date("2021-11-27T22:00:00.000Z"),category:["hibernate"],tags:["hibernate","native-query","postgres","orm","bug"]},o=void 0,s={permalink:"/en/2021/11/27/hibernate-nativequery-bug-with-postgres",source:"@site/blog/hibernate-nativequery-bug-with-postgres.md",title:"Hibernate NativeQuery HHH-14778 issue (with Postgres)",description:"Postgres \ud658\uacbd\uc5d0\uc11c Hibernate NativeQuery\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0dd\uae30\ub294 \ubc84\uadf8\ub97c \ub514\ubc84\uae45\ud574\ubcf8 \ub098\ub984\uc758 \uacb0\uacfc(?)\ub97c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4.",date:"2021-11-27T22:00:00.000Z",formattedDate:"November 27, 2021",tags:[{label:"hibernate",permalink:"/en/tags/hibernate"},{label:"native-query",permalink:"/en/tags/native-query"},{label:"postgres",permalink:"/en/tags/postgres"},{label:"orm",permalink:"/en/tags/orm"},{label:"bug",permalink:"/en/tags/bug"}],readingTime:6.635,truncated:!0,authors:[],frontMatter:{title:"Hibernate NativeQuery HHH-14778 issue (with Postgres)",slug:"2021/11/27/hibernate-nativequery-bug-with-postgres",date:"2021-11-27T22:00:00.000Z",category:["hibernate"],tags:["hibernate","native-query","postgres","orm","bug"]},prevItem:{title:"2021\ub144 \uac1c\ubc1c \ud68c\uace0",permalink:"/en/2021/12/29/2021-develop-retrospection"},nextItem:{title:"ElastiCache Maintenance",permalink:"/en/2021/07/22/elasticache-maintenance"}},u={authorsImageUrls:[]},c=[{value:"\ubc84\uadf8 \uc7ac\ud604",id:"\ubc84\uadf8-\uc7ac\ud604",children:[],level:4},{value:"\ubd84\uc11d",id:"\ubd84\uc11d",children:[{value:"<code>QueryParameterBindingsImpl</code>",id:"queryparameterbindingsimpl",children:[],level:5},{value:"<code>VarbinaryTypeDescriptor</code> (<code>BasicBinder</code>)",id:"varbinarytypedescriptor-basicbinder",children:[],level:5},{value:"<code>PgPrepareStatement</code>",id:"pgpreparestatement",children:[],level:5},{value:"\ubd84\uc11d \uc815\ub9ac",id:"\ubd84\uc11d-\uc815\ub9ac",children:[],level:5}],level:4},{value:"\ud574\uacb0\ubc29\ubc95",id:"\ud574\uacb0\ubc29\ubc95",children:[{value:"1. NamedQuery\ub85c \ubcc0\uacbd",id:"1-namedquery\ub85c-\ubcc0\uacbd",children:[],level:5},{value:"2. \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub418, \ud30c\ub77c\ubbf8\ud130\ub97c <code>TypedParameterValue</code>\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785 \ucd94\ub860\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ubcc0\uacbd",id:"2-\ub124\uc774\ud2f0\ube0c-\ucffc\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub418-\ud30c\ub77c\ubbf8\ud130\ub97c-typedparametervalue\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ud0c0\uc785-\ucd94\ub860\uc774-\uac00\ub2a5\ud558\ub3c4\ub85d-\ubcc0\uacbd",children:[],level:5},{value:"3. \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub418, \ucffc\ub9ac\uc5d0\uc11c \uac15\uc81c \uce90\uc2a4\ud305\uc744 \ud55c\ub2e4.",id:"3-\ub124\uc774\ud2f0\ube0c-\ucffc\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub418-\ucffc\ub9ac\uc5d0\uc11c-\uac15\uc81c-\uce90\uc2a4\ud305\uc744-\ud55c\ub2e4",children:[],level:5},{value:"4. <code>PrepareStatement</code>\uc5d0 \uc9c1\uc811 \uc561\uc138\uc2a4\ud558\uae30",id:"4-preparestatement\uc5d0-\uc9c1\uc811-\uc561\uc138\uc2a4\ud558\uae30",children:[],level:5}],level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",children:[],level:4}],d={toc:c};function m(e){var t=e.components,p=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Postgres \ud658\uacbd\uc5d0\uc11c Hibernate NativeQuery\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0dd\uae30\ub294 \ubc84\uadf8\ub97c \ub514\ubc84\uae45\ud574\ubcf8 \ub098\ub984\uc758 \uacb0\uacfc(?)\ub97c \uacf5\uc720\ud574\ubd05\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\ubc84\uadf8-\uc7ac\ud604"},"\ubc84\uadf8 \uc7ac\ud604"),(0,i.kt)("p",null,"\uc6b0\uc120, \ub2e4\uc74c\uacfc \uac19\uc740 \ud14c\uc774\ube14\uc774 \uc874\uc7ac\ud55c\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc790."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-postgresql"},"create table message (\n    id int8 generated by default as identity,\n    body varchar(255), \n    count int8, \n    primary key (id)\n)\n")),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 \ub2e4\uc74c\uacfc \uac19\uc740 hibernate \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud558\uba74 \ud14c\uc2a4\ud2b8\ub294 \uc2e4\ud328\ud569\ub2c8\ub2e4. \uc774 \ubc84\uadf8\ub294 Postgres\uc5d0\uc11c\ub9cc \ubc1c\uc0dd\ud558\ub294\ub370\uc694.\n\ubcf4\ub2e4 \uc790\uc138\ud55c \ub0b4\uc6a9\uc744 \uc544\ub798\uc11c \uc124\uba85\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'class ApplicationTests {\n    \n    @Autowired\n    private EntityManager entityManager;\n\n    @Test\n    void nativeQuery() {\n        assertThatThrownBy(() -> {\n            final Long id = 1L;\n            final Query query =\n                    entityManager.createNativeQuery("UPDATE message SET count = :count WHERE id = :id")\n                                 .setParameter("count", null)\n                                 .setParameter("id", id);\n            query.executeUpdate();\n        })\n        .hasCauseInstanceOf(SQLGrammarException.class)\n        .hasRootCauseMessage(\n                "ERROR: column \\"count\\" is of type bigint but expression is of type bytea\\n" +\n                "  Hint: You will need to rewrite or cast the expression.\\n" +\n                "  Position: 28");\n    }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc704 \ubc84\uadf8\ub294 \ud558\uc774\ubc84\ub124\uc774\ud2b8 \uc774\uc288\ub85c \uba87 \ub2ec\uc804\uc5d0 \ub9ac\ud3ec\ud305\ub418\uc5b4 \uc788\uc73c\ub2c8 \ucc38\uace0\ubc14\ub78d\ub2c8\ub2e4.\n(\ucc38\uace0: ",(0,i.kt)("a",{parentName:"p",href:"https://hibernate.atlassian.net/browse/HHH-14778"},"https://hibernate.atlassian.net/browse/HHH-14778"),")")),(0,i.kt)("p",null,"\uc704 \uc5d0\ub7ec\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"query.executeUpdate()")," \uc2dc\uc810\uc5d0 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc5b4\ub514\uac00 \uc5b4\ub5bb\uac8c \ubb38\uc81c\uc77c\uae4c\uc694? \ud83e\udd14"),(0,i.kt)("h4",{id:"\ubd84\uc11d"},"\ubd84\uc11d"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'ERROR: column \\"count\\" is of type bigint but expression is of type bytea')),(0,i.kt)("p",null,"\uba54\uc2dc\uc9c0\ub97c \ubcf4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"bytea"),"\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint"),"\ub97c \ud45c\ud604\ud560 \uc218 \uc5c6\ub2e4(?)\uace0 \ud569\ub2c8\ub2e4. \uacb0\uad6d \ud558\uc774\ubc84\ub124\uc774\ud2b8\uc5d0\uc11c count \ud30c\ub77c\ubbf8\ud130\ub97c ",(0,i.kt)("inlineCode",{parentName:"p"},"bytea"),"\uc73c\ub85c \uc778\uc2dd\ud558\uc5ec \ucffc\ub9ac\ub97c \uc2e4\ud589\ud55c\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. (",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareStatement"),"\ub97c \ub9cc\ub4e4\uac8c \ub418\ub294 \uac83\uc774\uc9c0\uc694.)"),(0,i.kt)("h5",{id:"queryparameterbindingsimpl"},(0,i.kt)("inlineCode",{parentName:"h5"},"QueryParameterBindingsImpl")),(0,i.kt)("p",null,"\uadf8\ub807\uac8c \ud558\uc774\ubc84\ub124\uc774\ud2b8\ub97c \ubd84\uc11d\ud574\ubcf4\uba74\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c \ucc3e\uc558\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt QueryParameterBindingsImpl",src:n(84003).Z,width:"600",height:"367"})),(0,i.kt)("p",null,"\ucffc\ub9ac\ub97c \ubd84\uc11d\ud558\uace0 \uc801\uc808\ud55c \ud0c0\uc785\uc744 \ubc14\uc778\ub529\ud558\uae30 \uc704\ud574 \ucd94\ub860\ud558\uace0 \uc801\uc808\ud55c \ubc14\uc778\ub354\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"bindType"),"\uc744 \uc815\uc758\ud558\ub294\ub370\uc694. \uacb0\uad6d \uc801\uc808\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"bindType"),"\uc744 \ucc3e\uc9c0 \ubabb\ud560 \uacbd\uc6b0, ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableType.INSTANCE"),"\ub85c \ucd08\uae30\ud654\ud558\uac8c \ub429\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"SerializableType.INSTANCE"),"\uc740 \uc544\ub798\uc640 \uac19\uc740 \ud0c0\uc785\uc744 \uac16\uac8c\ub429\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"java type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Serializable")),(0,i.kt)("li",{parentName:"ul"},"sql type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Types.VARBINARY")," (bytea)")),(0,i.kt)("h5",{id:"varbinarytypedescriptor-basicbinder"},(0,i.kt)("inlineCode",{parentName:"h5"},"VarbinaryTypeDescriptor")," (",(0,i.kt)("inlineCode",{parentName:"h5"},"BasicBinder"),")"),(0,i.kt)("p",null,"\uc2e4\uc81c \ucffc\ub9ac\uc5d0 \ud30c\ub77c\ubbf8\ud130\ub4e4\uc744 \ubc14\uc778\ub529\ud558\uae30 \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareStatement"),"\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uc14b\ud305\uc744 \ud569\ub2c8\ub2e4. \uc778\uc790\ub85c \ub118\uc5b4\uac00\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlDescriptor"),"\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"VarbinaryTypeDescriptor"),"\uc778 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alt VarbinaryTypeDescriptor",src:n(85176).Z,width:"600",height:"353"})),(0,i.kt)("h5",{id:"pgpreparestatement"},(0,i.kt)("inlineCode",{parentName:"h5"},"PgPrepareStatement")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pgjdbc/pgjdbc/blob/release/42.2/pgjdbc/src/main/java/org/postgresql/jdbc/PgPreparedStatement.java#L189...L268"},"PgPrepareStatement"),"\ub294 \uc804\ub2ec\ubc1b\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlType"),"\uc73c\ub85c \ucf00\uc774\uc2a4\ubcc4\ub85c \ud30c\ub77c\ubbf8\ud130\uc5d0 \ubc18\uc601\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacfc\uc815\ub54c\ubb38\uc5d0 \ud14c\uc2a4\ud2b8\uac00 \uae68\uc9c4 \uac83\uc778\ub370\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void setNull(int parameterIndex, int sqlType) throws SQLException {\n    \n    int oid;\n    switch (sqlType) {\n      case Types.SQLXML:\n        oid = Oid.XML;\n        break;\n      case Types.INTEGER:\n        oid = Oid.INT4;\n        break;\n\n    // ...\n")),(0,i.kt)("p",null,"\uadf8\ub807\ub2e4\uba74, mysql\uc5d0\uc11c\ub294 \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud558\uae38\ub798 \ubb38\uc81c\uac00 \ub418\uc9c0 \uc54a\uc744\uae4c\uc694?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void setNull(int parameterIndex, int sqlType) throws SQLException {\n    synchronized (checkClosed().getConnectionMutex()) {\n        ((PreparedQuery<?>) this.query).getQueryBindings().setNull(getCoreParameterIndex(parameterIndex)); // MySQL ignores sqlType\n    }\n}\n")),(0,i.kt)("p",null,"mysql\uc758 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mysql/mysql-connector-j/blob/release/8.0/src/main/user-impl/java/com/mysql/cj/jdbc/ClientPreparedStatement.java#L1671...L1676"},"ClientPreparedStatement"),"\ub97c \uc0b4\ud3b4\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlType"),"\uc744 \ubb34\uc2dc\ud558\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ud83e\udd14"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucc38\uace0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"ServerPreparedStatement"),"\ub3c4 ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientPreparedStatement"),"\ub97c \uc0c1\uc18d\ubc1b\uc558\uae30 \ub54c\ubb38\uc5d0 \ub3d9\uc77c\ud55c \ub3d9\uc791\uc744 \ud569\ub2c8\ub2e4.")),(0,i.kt)("h5",{id:"\ubd84\uc11d-\uc815\ub9ac"},"\ubd84\uc11d \uc815\ub9ac"),(0,i.kt)("p",null,"\uacb0\uad6d, \ud558\uc774\ubc84\ub124\uc774\ud2b8\uc5d0\uc11c ",(0,i.kt)("strong",{parentName:"p"},"\uac01 \ub4dc\ub77c\uc774\ubc84\uc758 \ud638\ud658\uc131 \ubb38\uc81c\ub85c \uc778\ud55c \ubc84\uadf8"),"\ub77c\uace0 \ubcfc \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4. (\uac1c\uc778\uc801\uc73c\ub85c\ub294 postgres\uac00 \ub354 \uc815\uad50\ud55c \uac83 \uac19\uc2b5\ub2c8\ub2e4\ub9cc...) \uadf8\ub7f0\ub370 \ud55c\ud3b8\uc73c\ub85c\ub294 HQL\uac19\uc740 \uc5d4\ud2f0\ud2f0\ub85c \ucffc\ub9ac\ub97c \uc791\uc131\ud558\uba74 \ud0c0\uc785 \ucd94\ub860\uc774 \uac00\ub2a5\ud558\uc9c0\ub9cc, \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub294 \uc5b4\ub5bb\uac8c \uac00\ub2a5\ud560\uae4c \ub77c\ub294 \uc0dd\uac01\uc774 \ub4e4\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\ub807\ub354\ub77c\ub3c4 \uc6b0\ub9ac\ub294 \ubc84\uadf8\ub97c \ud1f4\uce58(?)\ub97c \ud574\uc57c\ud558\ub2c8 \ud574\uacb0\ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\ud574\uacb0\ubc29\ubc95"},"\ud574\uacb0\ubc29\ubc95"),(0,i.kt)("h5",{id:"1-namedquery\ub85c-\ubcc0\uacbd"},"1. NamedQuery\ub85c \ubcc0\uacbd"),(0,i.kt)("p",null,"\uc6b0\ub9ac\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"NamedQuery"),"\ub85c \ubcc0\uacbd\ud558\uc5ec, \uc774\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@NamedQuery(\n        name = "fixedCount",\n        query = "UPDATE Message m SET m.count = :count WHERE m.id = :id"\n)\npublic class Message { ...\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final Long id = 1L;\nfinal Query query = entityManager.createNamedQuery("fixedCount") // <--\n                                 .setParameter("count", null)\n                                 .setParameter("id", id);\nquery.executeUpdate();\n')),(0,i.kt)("h5",{id:"2-\ub124\uc774\ud2f0\ube0c-\ucffc\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub418-\ud30c\ub77c\ubbf8\ud130\ub97c-typedparametervalue\ub97c-\uc0ac\uc6a9\ud558\uc5ec-\ud0c0\uc785-\ucd94\ub860\uc774-\uac00\ub2a5\ud558\ub3c4\ub85d-\ubcc0\uacbd"},"2. \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub418, \ud30c\ub77c\ubbf8\ud130\ub97c ",(0,i.kt)("inlineCode",{parentName:"h5"},"TypedParameterValue"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud0c0\uc785 \ucd94\ub860\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ubcc0\uacbd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setParameter"),"\ub97c \uc0b4\ud3b4\ubcf4\ub2e4\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"TypedParameterValue"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ud0c0\uc785\uc744 \ucd94\ub860\uc774 \uac00\ub2a5\ud558\ub2e4\ub294 \uac83\uc744 \uc54c\uac8c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hibernate/hibernate-orm/blob/5.5/hibernate-core/src/main/java/org/hibernate/query/internal/AbstractProducedQuery.java#L449...L462"},"AbstractProducedQuery"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final Long id = 1L;\nfinal Query query =\n        entityManager.createNativeQuery("UPDATE message SET count = :count WHERE id = :id")\n                     .setParameter("count", new TypedParameterValue(LongType.INSTANCE, null)) // <--\n                     .setParameter("id", id);\nquery.executeUpdate();\n')),(0,i.kt)("h5",{id:"3-\ub124\uc774\ud2f0\ube0c-\ucffc\ub9ac\ub97c-\uc0ac\uc6a9\ud558\ub418-\ucffc\ub9ac\uc5d0\uc11c-\uac15\uc81c-\uce90\uc2a4\ud305\uc744-\ud55c\ub2e4"},"3. \ub124\uc774\ud2f0\ube0c \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub418, \ucffc\ub9ac\uc5d0\uc11c \uac15\uc81c \uce90\uc2a4\ud305\uc744 \ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774\ubbf8 \uc6b0\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"bytea"),"\ub85c \ubc14\uc778\ub529\ub418\ub2e4\ub294 \uac83\uc744 \uc54c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \uc778\uc9c0\ud558\uace0 \uc788\ub2e4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"cast()"),"\ud568\uc218\ub97c \ud1b5\ud574 \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uc774\ub294 \ubc84\uadf8\uac00 \uc218\uc815\ub418\uac70\ub098 \ud558\uc774\ubc84\ub124\uc774\ud2b8 \ub0b4\ubd80 \ub85c\uc9c1\uc5d0 \uc758\uc874\ud558\ub294 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,i.kt)("strong",{parentName:"p"},"\uc88b\uc740 \ubc29\ubc95\uc740 \uc544\ub2cc \ub4ef \ud569\ub2c8\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'final Long id = 1L;\nfinal Query query =\n        entityManager.createNativeQuery("UPDATE message SET count = cast(cast(:count as text) as bigint) WHERE id = :id")\n                     .setParameter("count", new TypedParameterValue(LongType.INSTANCE, null))\n                     .setParameter("id", id);\nquery.executeUpdate();\n')),(0,i.kt)("h5",{id:"4-preparestatement\uc5d0-\uc9c1\uc811-\uc561\uc138\uc2a4\ud558\uae30"},"4. ",(0,i.kt)("inlineCode",{parentName:"h5"},"PrepareStatement"),"\uc5d0 \uc9c1\uc811 \uc561\uc138\uc2a4\ud558\uae30"),(0,i.kt)("p",null,"\ud558\uc774\ubc84\ub124\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0, ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Session"),"\uc744 \uaebc\ub0b4\uc5b4 ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection"),"\uc744 \uc9c1\uc811 \ud578\ub4e4\ub9c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"final Session session = entityManager.unwrap(Session.class);\nsession.doWork((connection) -> ...);\n")),(0,i.kt)("p",null,"\uadf8\ub7ec\ubbc0\ub85c \uc6b0\ub9ac\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"PrepareStatement"),"\uc5d0 \uc9c1\uc811 \ud0c0\uc785\uc744 \uae30\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'session.doWork(connection -> {\n    try (final PreparedStatement ps = connection.prepareStatement("UPDATE message SET count = ? WHERE id = ?")) {\n        ps.setNull(1, Types.INTEGER);\n        ps.setLong(2, id);\n        ps.executeUpdate();\n    }\n});\n')),(0,i.kt)("p",null,"\ud574\ub2f9 \ucf54\ub4dc\ub4e4\uc740 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/heowc-scratch/hibernate_postgres_HHH-14778"},"hibernate_postgres_HHH-14778"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hibernate.atlassian.net/browse/HHH-14778"},"https://hibernate.atlassian.net/browse/HHH-14778")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/heowc-scratch/hibernate_postgres_HHH-14778"},"https://github.com/heowc-scratch/hibernate_postgres_HHH-14778")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hibernate/hibernate-orm"},"https://github.com/hibernate/hibernate-orm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mysql/mysql-connector-j"},"https://github.com/mysql/mysql-connector-j")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pgjdbc/pgjdbc"},"https://github.com/pgjdbc/pgjdbc"))))}m.isMDXComponent=!0},84003:function(e,t,n){t.Z=n.p+"assets/images/QueryParameterBindingsImpl-a988bd1cf1d026efde9dd43b62016ff9.png"},85176:function(e,t,n){t.Z=n.p+"assets/images/VarbinaryTypeDescriptor-19d58cae80c49c6295fc77e1532aa966.png"}}]);