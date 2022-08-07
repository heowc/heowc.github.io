"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"Spring Boot - Validation",slug:"2018/01/14/spring-boot-hibernate-validation",date:new Date("2018-01-14T22:26:30.000Z"),category:["spring-boot"],tags:["spring","spring-boot","hibernate-validation"]},o=void 0,l={permalink:"/2018/01/14/spring-boot-hibernate-validation",source:"@site/blog/spring-boot-hibernate-validation.md",title:"Spring Boot - Validation",description:"\ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc99d\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub3c4\uc640\uc904 \uc218 \uc788\ub2e4.",date:"2018-01-14T22:26:30.000Z",formattedDate:"2018\ub144 1\uc6d4 14\uc77c",tags:[{label:"spring",permalink:"/tags/spring"},{label:"spring-boot",permalink:"/tags/spring-boot"},{label:"hibernate-validation",permalink:"/tags/hibernate-validation"}],readingTime:2.67,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Spring Boot - Validation",slug:"2018/01/14/spring-boot-hibernate-validation",date:"2018-01-14T22:26:30.000Z",category:["spring-boot"],tags:["spring","spring-boot","hibernate-validation"]},prevItem:{title:"Spring Boot - Cache",permalink:"/2018/02/05/spring-boot-cache"},nextItem:{title:"Spring Boot - Data JPA",permalink:"/2018/01/09/spring-boot-data-jpa"}},p={authorsImageUrls:[]},s=[{value:"bean-validation? hibernate-validator?",id:"bean-validation-hibernate-validator",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Entity",id:"entity",level:3},{value:"Controller",id:"controller",level:3},{value:"Custom Validation",id:"custom-validation",level:3},{value:"@interface \uc815\uc758",id:"interface-\uc815\uc758",level:4},{value:"ConstraintValidator \uad6c\ud604",id:"constraintvalidator-\uad6c\ud604",level:4},{value:"\ud65c\uc6a9",id:"\ud65c\uc6a9",level:4},{value:"Test Code",id:"test-code",level:3},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ub370\uc774\ud130\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc99d\uc744 \ud6a8\uacfc\uc801\uc73c\ub85c \ub3c4\uc640\uc904 \uc218 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"bean-validation-hibernate-validator"},"bean-validation? hibernate-validator?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bean-validation"),": ",(0,r.kt)("a",{parentName:"p",href:"https://jcp.org/en/jsr/detail?id=380"},"JSR-380"),", \uc560\ub178\ud14c\uc774\uc158\uc744 \uc774\uc6a9\ud558\uc5ec bean \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \uc704\ud55c Java API \uc2a4\ud399"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hibernate-validator"),": Bean Validation\uc744 \uad6c\ud604\ud55c Java API"),(0,r.kt)("h3",{id:"dependency"},"Dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"dependencies { \n    compile('org.springframework.boot:spring-boot-starter-web') \n    compile('org.springframework.boot:spring-boot-starter-validation') \n    compile('org.projectlombok:lombok')\n    runtime('com.h2database:h2')\n    testCompile('org.springframework.boot:spring-boot-starter-test')\n}\n")),(0,r.kt)("h3",{id:"entity"},"Entity"),(0,r.kt)("p",null,"\uc560\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc27d\uac8c Entity\uc5d0 \ub300\ud55c \uc720\ud6a8\uc131 \uac80\uc0ac\ub97c \ud560 \uc218 \uc788\ub2e4. \ud574\ub2f9 \uc560\ub178\ud14c\uc774\uc158\uc740 javax.validation.constraints\ud328\ud0a4\uc9c0\uc5d0 \uc815\uc758\ub418\uc5b4 \uc788\uc73c\uba70, \uc774\ub97c \uc544\ub798\uc640 \uac19\uc774 \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Data\npublic class Member {\n\n    private Long idx;\n    \n    @NotNull(message="name null")\n    private String name;\n    \n    @Min(value=14, message="min 14")\n    private Integer age;\n    \n    @NotNull(message="tel null")\n    private String tel;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NotNull"),": null \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Min"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@Max"),": \ucd5c\uc18c\uac12, \ucd5c\ub300\uac12 \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Size"),": \ubc94\uc704 \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Email"),": e-mail \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@AssertTrue"),": true \uac80\uc99d"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@NotEmpty"),": null\uc774\ub098 size\uac00 0 \uac80\uc99d (String, Collection)\n",(0,r.kt)("inlineCode",{parentName:"p"},"@NotBlank"),": null\uc774\ub098 whitespace \uac80\uc99d (String)\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Positive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@PositiveOrZero"),": \uc22b\uc790 \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Negative"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@NegativeOrZero"),": \uc22b\uc790 \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Past"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@PastOrPresent"),": \ub0a0\uc9dc \uac80\uc99d\n",(0,r.kt)("inlineCode",{parentName:"p"},"@Future"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@FutureOrPresent"),": \ub0a0\uc9dc \uac80\uc99d"),(0,r.kt)("h3",{id:"controller"},"Controller"),(0,r.kt)("p",null,"\uac80\uc99d\ud558\uace0\uc790 \ud558\ub294 Entity\uc5d0 @Valid\ub97c \ubd99\uc774\uba70, \uc774\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c \ubc1b\uae30 \uc704\ud574 BindingResult\ub97c \ucd94\uac00\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping("member")\npublic class MemberController {\n\n    private final static Logger logger = Logger.getLogger(MemberController.class);\n    private final static int ZERO = 0;\n    \n    //...\n        \n    @PostMapping\n    public ResponseEntity<?> add(@Valid @RequestBody Member member, BindingResult bindingResult){\n        if(bindingResult.hasErrors()){\n            String errorMessage = bindingResult.getAllErrors().get(ZERO).getDefaultMessage();\n            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST); \n        }\n        return new ResponseEntity<>(member, HttpStatus.OK);\n    }\n}\n')),(0,r.kt)("h3",{id:"custom-validation"},"Custom Validation"),(0,r.kt)("p",null,"\uc81c\uacf5\ud574\uc8fc\ub294 \uc560\ub178\ud14c\uc774\uc158\ub3c4 \ub9ce\uc9c0\ub9cc \uc0ac\uc6a9\uc790 \uc815\uc758 \uac80\uc99d \uc560\ub178\ud14c\uc774\uc158\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294 \uc0c1\ud669\uc774 \uc788\uc744 \uc218 \uc788\ub2e4."),(0,r.kt)("h4",{id:"interface-\uc815\uc758"},"@interface \uc815\uc758"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Documented\n@Constraint(validatedBy = PhoneValidator.class)\n@Target( { ElementType.METHOD, ElementType.FIELD })\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface Phone {\n    String message() default "Invalid phone number";\n    Class<?>[] groups() default {};\n    Class<? extends Payload>[] payload() default {};\n}\n')),(0,r.kt)("h4",{id:"constraintvalidator-\uad6c\ud604"},"ConstraintValidator \uad6c\ud604"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class PhoneValidator implements ConstraintValidator<Phone, String> {\n\n    @Override\n    public void initialize(Phone phone) {\n    \n    }\n \n    @Override\n    public boolean isValid(String field, ConstraintValidatorContext cxt) {\n        return field != null && field.matches("[0-9]+")\n                && (field.length() > 8) && (field.length() < 14);\n    }\n}\n')),(0,r.kt)("h4",{id:"\ud65c\uc6a9"},"\ud65c\uc6a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Phone\nprivate String phone;\n")),(0,r.kt)("h3",{id:"test-code"},"Test Code"),(0,r.kt)("p",null,"\uc790\uc138\ud55c \ucf54\ub4dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootValidator/src/test/java/com/example/web/MemberControllerTest.java"},"GitHub"),"\uc744 \ucc38\uace0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@RunWith(SpringRunner.class)\n@WebMvcTest(MemberController.class)\npublic class MemberControllerTest {\n\n    @Autowired\n    private MockMvc mvc;\n\n    @Autowired\n    private ObjectMapper objectMapper;\n\n    // ...\n\n    @Test\n    public void test_success() throws Exception {\n        Member member = new Member(TEST_NAME, TEST_AGE, TEST_PHONE);\n        String memberToJson = objectMapper.writeValueAsString(member);\n\n        mockRequest(memberToJson, status().isOk(), memberToJson);\n    }\n\n    // ...\n\n    private void mockRequest(String memberToJson, ResultMatcher matcher, String result) throws Exception {\n        mvc.perform(post(TEST_END_POINT)\n                .content(memberToJson)\n                .contentType(MediaType.APPLICATION_JSON_UTF8)\n                .accept(MediaType.APPLICATION_JSON_UTF8))\n                .andExpect(matcher)\n                .andExpect(content().json(result));\n    }\n}\n")),(0,r.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootValidator"},"SpringBootSample / SpringBootValidator"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.baeldung.com/spring-mvc-custom-validator"},"Baeldung / spring-mvc-custom-validator")))}d.isMDXComponent=!0}}]);