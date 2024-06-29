"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[4125],{42331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(74848),s=t(28453);const o={title:"Spring Boot - Data JPA",slug:"2018/01/09/spring-boot-data-jpa",date:new Date("2018-01-09T23:52:42.000Z"),category:["spring"],tags:["spring","spring-boot","data-jpa"]},a=void 0,i={permalink:"/2018/01/09/spring-boot-data-jpa",source:"@site/blog/spring-boot-data-jpa.md",title:"Spring Boot - Data JPA",description:"Spring Boot\uc5d0\uc11c \uac04\ub2e8\ud55c \uc124\uc815\uc73c\ub85c Hibernate\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",date:"2018-01-09T23:52:42.000Z",tags:[{inline:!0,label:"spring",permalink:"/tags/spring"},{inline:!0,label:"spring-boot",permalink:"/tags/spring-boot"},{inline:!0,label:"data-jpa",permalink:"/tags/data-jpa"}],readingTime:1.495,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - Data JPA",slug:"2018/01/09/spring-boot-data-jpa",date:"2018-01-09T23:52:42.000Z",category:["spring"],tags:["spring","spring-boot","data-jpa"]},unlisted:!1,prevItem:{title:"Spring Boot - Validation",permalink:"/2018/01/14/spring-boot-hibernate-validation"},nextItem:{title:"Spring Boot - \uc2dc\uc791\ud558\uae30",permalink:"/2018/01/08/spring-boot-start"}},l={authorsImageUrls:[]},p=[{value:"JPA? Hibernate?",id:"jpa-hibernate",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Properties",id:"properties",level:3},{value:"Entity",id:"entity",level:3},{value:"Repository",id:"repository",level:3},{value:"Test Code",id:"test-code",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Spring Boot\uc5d0\uc11c \uac04\ub2e8\ud55c \uc124\uc815\uc73c\ub85c Hibernate\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"jpa-hibernate",children:"JPA? Hibernate?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JPA"}),": Java Persistence API\uc758 \uc904\uc784\ub9d0\ub85c, \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uad00\ub9ac\ub97c \ud45c\ud604\ud558\ub294 \uc790\ubc14 API\uc774\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Hibernate"}),": \uc790\ubc14\ub97c \uc704\ud55c \uc624\ud508\uc18c\uc2a4 ORM(Object-relational mapping) \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud55c\ub2e4. \ubc84\uc804 3.2\uc640 \uadf8 \uc774\ud6c4 \ubc84\uc804\uc5d0\uc11c\ub294 JPA\ub97c \uc704\ud55c \uad6c\ud604\uc744 \uc81c\uacf5\ud55c\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data JPA"}),": JPA\uae30\ubc18\uc758 Repository\ub97c \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d Spring Data\uc5d0\uc11c \uc81c\uacf5\ud55c\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"dependency",children:"Dependency"}),"\n",(0,r.jsx)(n.p,{children:"\uac04\ub2e8\ud55c \uc608\uc81c\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 h2\ub97c \uc0ac\uc6a9\ud558\uaca0\ub2e4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n\tcompile('org.springframework.boot:spring-boot-starter-data-jpa')\n\tcompile('org.projectlombok:lombok')\n\truntime('com.h2database:h2')\n\ttestCompile('org.springframework.boot:spring-boot-starter-test')\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"spring.jpa.database=H2\n\nspring.datasource.driver-class-name=org.h2.Driver\nspring.datasource.url=jdbc:h2:mem:test;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE\n"})}),"\n",(0,r.jsx)(n.h3,{id:"entity",children:"Entity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Entity\n@Data\n@AllArgsConstructor\npublic class Customer {\n\t\n\t@Id\n\t@GeneratedValue(strategy=GenerationType.AUTO)\n\tprivate Long idx;\n\t\n\t@Column(length=50)\n\tprivate String name;\n\t\n\t@Column(length=14)\n\tprivate String tel;\n\t\n\tprivate String etc;\n\n\tprotected Customer() {}\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@Entity"}),"\ub294 \ud574\ub2f9 \ud074\ub798\uc2a4\uac00 JPA\uc758 Entity\uc784\uc744 \ub098\ud0c0\ub0b8\ub2e4."]}),"\n",(0,r.jsx)(n.h3,{id:"repository",children:"Repository"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"public interface CustomerRepository extends JpaRepository<Customer, Long> {\n    \n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"JpaRepository"}),"\ub97c \uc0c1\uc18d\ubc1b\ub294 \uac83 \ub9cc\uc73c\ub85c\ub3c4 \uae30\ubcf8\uc801\uc778 CRUD\uac00 \uac00\ub2a5\ud558\ub2e4. \ub610\ud55c, ",(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation",children:"query-creation"}),"\uc744 \uc774\uc6a9\ud558\uc5ec \ucffc\ub9ac\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4.`"]}),"\n",(0,r.jsx)(n.h3,{id:"test-code",children:"Test Code"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@RunWith(SpringRunner.class)\n@DataJpaTest\npublic class CustomerRepositoryTests {\n\n    @Autowired \n    private CustomerRepository repository;\n\n    private Customer customer() {\n        return new Customer("heo won chul", "010-xxxx-xxxx", "developer");\n    }\n    \n    @Test\n    public void test_insert() {\n        assertEquals(repository.save(customer().getIdx()), customer().getIdx());\n    }\n\n    @Test\n    public void test_select() {\n        assertNull(repository.findOne(1L));\n    }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);