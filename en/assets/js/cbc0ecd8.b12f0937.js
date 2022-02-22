"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3320],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Spring Boot - Data JPA",slug:"2018/01/09/spring-boot-data-jpa",date:new Date("2018-01-09T23:52:42.000Z"),category:["spring"],tags:["spring","spring-boot","data-jpa"]},l=void 0,s={permalink:"/en/2018/01/09/spring-boot-data-jpa",source:"@site/blog/spring-boot-data-jpa.md",title:"Spring Boot - Data JPA",description:"Spring Boot\uc5d0\uc11c \uac04\ub2e8\ud55c \uc124\uc815\uc73c\ub85c Hibernate\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",date:"2018-01-09T23:52:42.000Z",formattedDate:"January 9, 2018",tags:[{label:"spring",permalink:"/en/tags/spring"},{label:"spring-boot",permalink:"/en/tags/spring-boot"},{label:"data-jpa",permalink:"/en/tags/data-jpa"}],readingTime:1.495,truncated:!0,authors:[],frontMatter:{title:"Spring Boot - Data JPA",slug:"2018/01/09/spring-boot-data-jpa",date:"2018-01-09T23:52:42.000Z",category:["spring"],tags:["spring","spring-boot","data-jpa"]},prevItem:{title:"Spring Boot - Validation",permalink:"/en/2018/01/14/spring-boot-hibernate-validation"},nextItem:{title:"Spring Boot - \uc2dc\uc791\ud558\uae30",permalink:"/en/2018/01/08/spring-boot-start"}},c={authorsImageUrls:[]},u=[{value:"JPA? Hibernate?",id:"jpa-hibernate",children:[],level:3},{value:"Dependency",id:"dependency",children:[],level:3},{value:"Properties",id:"properties",children:[],level:3},{value:"Entity",id:"entity",children:[],level:3},{value:"Repository",id:"repository",children:[],level:3},{value:"Test Code",id:"test-code",children:[],level:3}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Spring Boot\uc5d0\uc11c \uac04\ub2e8\ud55c \uc124\uc815\uc73c\ub85c Hibernate\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,o.kt)("h3",{id:"jpa-hibernate"},"JPA? Hibernate?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JPA"),": Java Persistence API\uc758 \uc904\uc784\ub9d0\ub85c, \uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uad00\ub9ac\ub97c \ud45c\ud604\ud558\ub294 \uc790\ubc14 API\uc774\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hibernate"),": \uc790\ubc14\ub97c \uc704\ud55c \uc624\ud508\uc18c\uc2a4 ORM(Object-relational mapping) \ud504\ub808\uc784\uc6cc\ud06c\ub97c \uc81c\uacf5\ud55c\ub2e4. \ubc84\uc804 3.2\uc640 \uadf8 \uc774\ud6c4 \ubc84\uc804\uc5d0\uc11c\ub294 JPA\ub97c \uc704\ud55c \uad6c\ud604\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data JPA"),": JPA\uae30\ubc18\uc758 Repository\ub97c \uc27d\uac8c \uad6c\ud604\ud560 \uc218 \uc788\ub3c4\ub85d Spring Data\uc5d0\uc11c \uc81c\uacf5\ud55c\ub2e4."),(0,o.kt)("h3",{id:"dependency"},"Dependency"),(0,o.kt)("p",null,"\uac04\ub2e8\ud55c \uc608\uc81c\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 h2\ub97c \uc0ac\uc6a9\ud558\uaca0\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    compile('org.springframework.boot:spring-boot-starter-data-jpa')\n    compile('org.projectlombok:lombok')\n    runtime('com.h2database:h2')\n    testCompile('org.springframework.boot:spring-boot-starter-test')\n}\n")),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"spring.jpa.database=H2\n\nspring.datasource.driver-class-name=org.h2.Driver\nspring.datasource.url=jdbc:h2:mem:test;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE\n")),(0,o.kt)("h3",{id:"entity"},"Entity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\n@Data\n@AllArgsConstructor\npublic class Customer {\n    \n    @Id\n    @GeneratedValue(strategy=GenerationType.AUTO)\n    private Long idx;\n    \n    @Column(length=50)\n    private String name;\n    \n    @Column(length=14)\n    private String tel;\n    \n    private String etc;\n\n    protected Customer() {}\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@Entity"),"\ub294 \ud574\ub2f9 \ud074\ub798\uc2a4\uac00 JPA\uc758 Entity\uc784\uc744 \ub098\ud0c0\ub0b8\ub2e4."),(0,o.kt)("h3",{id:"repository"},"Repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface CustomerRepository extends JpaRepository<Customer, Long> {\n    \n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JpaRepository"),"\ub97c \uc0c1\uc18d\ubc1b\ub294 \uac83 \ub9cc\uc73c\ub85c\ub3c4 \uae30\ubcf8\uc801\uc778 CRUD\uac00 \uac00\ub2a5\ud558\ub2e4. \ub610\ud55c, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation"},"query-creation"),"\uc744 \uc774\uc6a9\ud558\uc5ec \ucffc\ub9ac\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4.`"),(0,o.kt)("h3",{id:"test-code"},"Test Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@RunWith(SpringRunner.class)\n@DataJpaTest\npublic class CustomerRepositoryTests {\n\n    @Autowired \n    private CustomerRepository repository;\n\n    private Customer customer() {\n        return new Customer("heo won chul", "010-xxxx-xxxx", "developer");\n    }\n    \n    @Test\n    public void test_insert() {\n        assertEquals(repository.save(customer().getIdx()), customer().getIdx());\n    }\n\n    @Test\n    public void test_select() {\n        assertNull(repository.findOne(1L));\n    }\n}\n')))}g.isMDXComponent=!0}}]);