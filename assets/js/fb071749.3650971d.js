"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[7693],{89598:function(n,t,e){var a=e(67294);t.Z=function(n){var t=n.id,o=void 0===t?"demo-terminal":t,i=n.command,r=n.respond,l=n.prompt,s=void 0===l?"$":l,m=n.windowTitle,p=void 0===m?"bash":m,d=n.minHeight,c=void 0===d?"100px":d,u=n.onCompleteDelay,g=void 0===u?0:u;return(0,a.useEffect)((function(){var n=e(72210);e(47215),e(65831);var t=new n("#"+o);t.openApp("terminal",{minHeight:c,windowTitle:p,promptString:s});for(var a=i.split(";"),l=0;l<a.length;l++)t.command(a[l],{onCompleteDelay:g});t.respond(r),t.end()})),a.createElement(a.Fragment,null,a.createElement("div",{id:o,style:{minHeight:c}}),a.createElement("br",null),a.createElement("br",null))}},48352:function(n,t,e){e.r(t),e.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=e(87462),o=e(63366),i=(e(67294),e(3905)),r=e(89598),l=["components"],s={title:"Spring Boot - testContainer\ub97c \ud65c\uc6a9\ud55c AWS DynamoDB \ud14c\uc2a4\ud2b8",slug:"2019/01/16/spring-boot-dynamodb-using-testcontainer",date:new Date("2019-01-16T21:30:00.000Z"),category:["spring-boot"],tags:["spring-boot","test-container","integration-test","aws","dynamodb"]},m=void 0,p={permalink:"/2019/01/16/spring-boot-dynamodb-using-testcontainer",source:"@site/blog/spring-boot-dynamodb-using-testcontainer.mdx",title:"Spring Boot - testContainer\ub97c \ud65c\uc6a9\ud55c AWS DynamoDB \ud14c\uc2a4\ud2b8",description:"Amazon DynamoDB\ub97c \ube44\uc6a9 \uc9c0\ubd88\uc5c6\uc774 \uc27d\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud558\ub824\uace0 \ud55c\ub2e4.",date:"2019-01-16T21:30:00.000Z",formattedDate:"2019\ub144 1\uc6d4 16\uc77c",tags:[{label:"spring-boot",permalink:"/tags/spring-boot"},{label:"test-container",permalink:"/tags/test-container"},{label:"integration-test",permalink:"/tags/integration-test"},{label:"aws",permalink:"/tags/aws"},{label:"dynamodb",permalink:"/tags/dynamodb"}],readingTime:4.835,truncated:!0,authors:[],frontMatter:{title:"Spring Boot - testContainer\ub97c \ud65c\uc6a9\ud55c AWS DynamoDB \ud14c\uc2a4\ud2b8",slug:"2019/01/16/spring-boot-dynamodb-using-testcontainer",date:"2019-01-16T21:30:00.000Z",category:["spring-boot"],tags:["spring-boot","test-container","integration-test","aws","dynamodb"]},prevItem:{title:"GitHub Action\uc744 \ud65c\uc6a9\ud55c GitHub Page \ubc30\ud3ec",permalink:"/2019/02/03/deploy-gh-page-with-github-action"},nextItem:{title:"Spring Boot - \uc548\uc804\ud558\uac8c \uc885\ub8cc\uc2dc\ud0a4\uae30",permalink:"/2018/12/27/spring-boot-graceful-shutdown"}},d={authorsImageUrls:[]},c=[{value:"Amazon DynamoDB\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?",id:"amazon-dynamodb\ub780-\ubb34\uc5c7\uc785\ub2c8\uae4c",level:3},{value:"\ud658\uacbd \uad6c\uc131\ud558\uae30",id:"\ud658\uacbd-\uad6c\uc131\ud558\uae30",level:3},{value:"Docker Container \uc2e4\ud589",id:"docker-container-\uc2e4\ud589",level:4},{value:"Spring Boot \uc124\uc815",id:"spring-boot-\uc124\uc815",level:3},{value:"\ub514\ud39c\ub358\uc2dc \ucd94\uac00",id:"\ub514\ud39c\ub358\uc2dc-\ucd94\uac00",level:4},{value:"<code>AmazonDynamoDB</code> \ube48 \ub4f1\ub85d",id:"amazondynamodb-\ube48-\ub4f1\ub85d",level:4},{value:"\ud14c\uc2a4\ud2b8 \uc791\uc131\ud558\uae30",id:"\ud14c\uc2a4\ud2b8-\uc791\uc131\ud558\uae30",level:4},{value:"testcontainers \uc801\uc6a9",id:"testcontainers-\uc801\uc6a9",level:3},{value:"\ub514\ud39c\ub358\uc2dc \ucd94\uac00",id:"\ub514\ud39c\ub358\uc2dc-\ucd94\uac00-1",level:4},{value:"<code>AbstractIntegrationTest</code> \uc791\uc131",id:"abstractintegrationtest-\uc791\uc131",level:4},{value:"\ud14c\uc2a4\ud2b8 \uc791\uc131\ud558\uae30 (\uc218\uc815)",id:"\ud14c\uc2a4\ud2b8-\uc791\uc131\ud558\uae30-\uc218\uc815",level:4},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:3}],u={toc:c};function g(n){var t=n.components,e=(0,o.Z)(n,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Amazon DynamoDB"),"\ub97c \ube44\uc6a9 \uc9c0\ubd88\uc5c6\uc774 \uc27d\uac8c \ud14c\uc2a4\ud2b8\ud558\ub294 \ubc29\ubc95\uc744 \uc18c\uac1c\ud558\ub824\uace0 \ud55c\ub2e4.")),(0,i.kt)("h3",{id:"amazon-dynamodb\ub780-\ubb34\uc5c7\uc785\ub2c8\uae4c"},"Amazon DynamoDB\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?"),(0,i.kt)("p",null,"\uc6b0\uc120, ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon DynamoDB"),"\uac00 \ubb34\uc5c7\uc778\uc9c0 \ucc3e\uc544\ubcf4\uc790. \uacf5\uc2dd\ubb38\uc11c\uc5d0\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc801\ud600\uc788\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"AWS \uacf5\uc2dd\ubb38\uc11c - Amazon DynamoDB\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Amazon DynamoDB\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\uc885\ud569 \uad00\ub9ac\ud615 NoSQL \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc11c\ube44\uc2a4"),"\ub85c\uc11c \uc6d0\ud65c\ud55c \ud655\uc7a5\uc131\uacfc \ud568\uaed8 \ube60\ub974\uace0 \uc608\uce21 \uac00\ub2a5\ud55c \uc131\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. DynamoDB\ub97c \uc0ac\uc6a9\ud558\uba74 \ubd84\uc0b0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \uc6b4\uc601\ud558\uace0 \uc870\uc815\ud558\ub294 \ub370 \ub530\ub978 \uad00\ub9ac \ubd80\ub2f4\uc744 \uc904\uc77c \uc218 \uc788\uc73c\ubbc0\ub85c \ud558\ub4dc\uc6e8\uc5b4 \ud504\ub85c\ube44\uc800\ub2dd, \uc124\uc815 \ubc0f \uad6c\uc131, \ubcf5\uc81c, \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ud328\uce58 \ub610\ub294 \ud074\ub7ec\uc2a4\ud130 \uc870\uc815..."))),(0,i.kt)("h3",{id:"\ud658\uacbd-\uad6c\uc131\ud558\uae30"},"\ud658\uacbd \uad6c\uc131\ud558\uae30"),(0,i.kt)("p",null,"\uac1c\ubc1c \ud504\ub85c\uc138\uc2a4\uc0c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"qa"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," \uac19\uc774 \uc601\uc5ed\uc744 \ub098\ub204\uc5b4 \uad6c\uc131\ud558\ub294 \uac83\uc774 \ubcf4\ud1b5\uc774\ub2e4. \uadf8\ub7ec\ub2e4\ubcf4\ub2c8 \uac01 \uc601\uc5ed\ub9c8\ub2e4 \ubcc4\ub3c4\uc758 \uc778\uc2a4\ud134\uc2a4\uac00 \ud544\uc694\ud558\uac8c \ub418\uace0 \ubd88\uac00\ud53c\ud558\uac8c \ud074\ub77c\uc6b0\ub4dc \ube44\uc6a9\uc774 \ub298\uc5b4\ub098\uac8c \uc0c1\ud669\uc5d0 \uc9c1\uba74\ud558\uac8c \ub41c\ub2e4. \ud558\uc9c0\ub9cc, Amazon DynamoDB\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uc9c0 \uc54a\uace0\ub3c4 \ud14c\uc2a4\ud2b8 \uac00\ub2a5\ud558\ub3c4\ub85d \uc81c\uacf5\ud55c\ub2e4. ",(0,i.kt)("strong",{parentName:"p"},"\uc989, \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294\ub2e4.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"jar \ud30c\uc77c\uc744 \uc81c\uacf5\ud558\uc5ec java\uac00 \uc788\ub294 \ud658\uacbd\uc5d0\uc11c \uc2e4\ud589 [",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html"},"link"),"]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"docker container \uc2e4\ud589")," [",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/amazon/dynamodb-local/"},"link"),"]")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," \uc815\ub3c4\ub294 \ub370\uc774\ud130\uac00 \ud718\ubc1c\uc131\uc73c\ub85c \uc788\uc5b4\ub3c4 \ub418\ub294 \ubd80\ubd84\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4.")),(0,i.kt)("h4",{id:"docker-container-\uc2e4\ud589"},"Docker Container \uc2e4\ud589"),(0,i.kt)("p",null,"DockerHub\uc5d0 ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/amazon/dynamodb-local/"},(0,i.kt)("inlineCode",{parentName:"a"},"amazon/dynamodb-local"))," \ud37c\ube14\ub9ad \uc774\ubbf8\uc9c0\ub85c \uc81c\uacf5\ub418\uace0 \uc788\ub2e4."),(0,i.kt)(r.Z,{id:"demo-docker-run",command:"docker run -p 8000:8000 amazon/dynamodb-local",respond:"Initializing DynamoDB Local with the following configuration:\nPort:\t8000\nInMemory:\ttrue\nDbPath:\tnull\nSharedDb:\tfalse\nshouldDelayTransientStatuses:\tfalse\nCorsParams:\t*",minHeight:"240px",onCompleteDelay:100,mdxType:"GDemoTerminal"}),(0,i.kt)("h3",{id:"spring-boot-\uc124\uc815"},"Spring Boot \uc124\uc815"),(0,i.kt)("h4",{id:"\ub514\ud39c\ub358\uc2dc-\ucd94\uac00"},"\ub514\ud39c\ub358\uc2dc \ucd94\uac00"),(0,i.kt)("p",null,"DynamoDB\ub97c \ud3ec\ud568\ud55c \ub2e4\ub978 \uc11c\ube44\uc2a4(ex. Amazon S3, Amazon RedShift, ...)\ub97c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc81c\uacf5\ud55c\ub2e4. \uc774\ub97c \ub514\ud39c\ub358\uc2dc\ub85c \ucd94\uac00\ud55c\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"compile('com.amazonaws:aws-java-sdk-dynamodb:1.11.466')\n// ...\n")),(0,i.kt)("h4",{id:"amazondynamodb-\ube48-\ub4f1\ub85d"},(0,i.kt)("inlineCode",{parentName:"h4"},"AmazonDynamoDB")," \ube48 \ub4f1\ub85d"),(0,i.kt)("p",null,"DynamoDB\uc5d0 \uc561\uc138\uc2a4\ud560 \ud074\ub798\uc2a4\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"AmazonDynamoDB"),"\ub97c \ube48\uc73c\ub85c \ub4f1\ub85d\ud574\uc900\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class DynamoDBConfig {\n\n    @Bean\n    public AmazonDynamoDB amazonDynamoDB(\n            @Value("${aws.region}") String region,\n            @Value("${aws.dynamo.endpoint}") String dynamoEndpoint,\n            @Value("${aws.access-key}") String accessKey,\n            @Value("${aws.secret-key}") String secretKey) {\n        return AmazonDynamoDBClientBuilder.standard()\n                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(dynamoEndpoint, region))\n                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))\n                .build();\n    }\n}\n')),(0,i.kt)("h4",{id:"\ud14c\uc2a4\ud2b8-\uc791\uc131\ud558\uae30"},"\ud14c\uc2a4\ud2b8 \uc791\uc131\ud558\uae30"),(0,i.kt)("p",null,"\ub2f9\uc5f0\ud55c \uc598\uae30\uc9c0\ub9cc ",(0,i.kt)("inlineCode",{parentName:"p"},"AmazonDynamoDB"),"\ub97c \ube48\uc73c\ub85c \ub4f1\ub85d\ud574\ub450\uc5c8\uae30 \ub54c\ubb38\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\ub97c \ud65c\uc6a9\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\ub97c \uc8fc\uc785\ubc1b\uc744 \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uba74 \ub41c\ub2e4. \ucf54\ub4dc\ub294 \ub3c4\ucee4\ub97c \ud65c\uc6a9\ud558\ub4e0, \uc2e4\uc81c AWS \uc778\uc2a4\ud134\uc2a4\ub97c \ud65c\uc6a9\ud558\ub4e0 \ub3d9\uc77c\ud558\ubbc0\ub85c AWS \uacf5\uc2dd\ubb38\uc11c\uc758 \uc608\uc81c\ub97c \ucc38\uace0\ud558\uac70\ub098, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/heowc/SpringBootSample/blob/master/SpringBootDynamo/src/test/java/com/example/SpringBootDynamoApplicationTests.java"},"\uac04\ub2e8\ud55c CRUD \uc608\uc81c"),"\uac00 \uc788\uc73c\ub2c8 \ucc38\uace0\ud558\uc790."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class SpringBootDynamoApplicationTests {\n\n    // ...\n\n    @Autowired\n    private AmazonDynamoDB dynamoDB;\n\n    // ...\n}\n")),(0,i.kt)("p",null,"\ud558\uc9c0\ub9cc, \ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \ub9e4\ubc88 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run -p 8000:8000 amazon/dynamodb-local"),"\ub97c \uce58\ub294 \uac83\uc740 \uadc0\ucc2e\uae30\ub3c4 \ud558\uace0 \uc57d\uac04(?) \uc218\ub3d9\uc801\uc774\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"testcontainers"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("h3",{id:"testcontainers-\uc801\uc6a9"},"testcontainers \uc801\uc6a9"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"testcontainers")),"\ub294 \uc790\ubc14\ucf54\ub4dc\uc5d0\uc11c docker container\ub97c \uc2e4\ud589\uc2dc\ucf1c\uc8fc\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc774\ub2e4. \uc9c1\uc811 ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),"\uc744 \uc2e4\ud589\uc2dc\ud0ac \uc218 \ub3c4 \uc788\uace0, ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uc774\ub098 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\uc744 \ud65c\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4. \ubb3c\ub860, docker\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc5b4\uc57c \ud55c\ub2e4."),(0,i.kt)("h4",{id:"\ub514\ud39c\ub358\uc2dc-\ucd94\uac00-1"},"\ub514\ud39c\ub358\uc2dc \ucd94\uac00"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"testCompile('org.testcontainers:testcontainers:1.10.2')\n// ...\n")),(0,i.kt)("h4",{id:"abstractintegrationtest-\uc791\uc131"},(0,i.kt)("inlineCode",{parentName:"h4"},"AbstractIntegrationTest")," \uc791\uc131"),(0,i.kt)("p",null,"\ub2e4\ud589\ud788 Spring Boot\uc5d0\uc11c \ud65c\uc6a9 \uac00\ub2a5\ud55c \uc608\uc81c \uc0d8\ud50c\uc744 \uc81c\uacf5\ud55c\ub2e4. \uc544\ub798 \uc0d8\ud50c\uc744 \ucc38\uace0\ud558\uc5ec \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud574\ubcfc \uc218 \uc788\ub2e4.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/testcontainers/testcontainers-java-examples/blob/master/spring-boot/src/test/java/com/example/AbstractIntegrationTest.java"},"testcontainers/testcontainers-java-examples - AbstractIntegrationTest")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// ...\npublic abstract class AbstractIntegrationTest {\n\n    private static final String DOCKER_IMAGE = "amazon/dynamodb-local";\n    private static final String DOCKER_TAG = "latest";\n    private static final int EXPOSED_PORT = 8000;\n\n    @ClassRule\n    public static GenericContainer dynamodb =\n            new GenericContainer(String.format("%s:%s", DOCKER_IMAGE, DOCKER_TAG)).withExposedPorts(EXPOSED_PORT);\n\n    public static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {\n        @Override\n        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {\n            String endpoint = String.format("aws.dynamo.endpoint=http://%s:%s",\n                    dynamodb.getContainerIpAddress(),\n                    dynamodb.getMappedPort(EXPOSED_PORT));\n\n        // ...\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc608\uc81c\uc5d0\ub3c4 \ub098\uc640\uc788\ub4ef\uc774, \ub2e4\ub978 docker container\ub3c4 \ud65c\uc6a9 \uac00\ub2a5\ud558\ub2e4.")),(0,i.kt)("h4",{id:"\ud14c\uc2a4\ud2b8-\uc791\uc131\ud558\uae30-\uc218\uc815"},"\ud14c\uc2a4\ud2b8 \uc791\uc131\ud558\uae30 (\uc218\uc815)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// ...\npublic class SpringBootDynamoApplicationTests extends AbstractIntegrationTest {\n    // ...\n}\n")),(0,i.kt)("h3",{id:"\ucc38\uace0"},"\ucc38\uace0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/amazon/dynamodb-local/"},"https://hub.docker.com/r/amazon/dynamodb-local/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/"},"https://www.testcontainers.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/heowc/SpringBootSample/tree/master/SpringBootDynamo"},"https://github.com/heowc/SpringBootSample/tree/master/SpringBootDynamo"))))}g.isMDXComponent=!0},65831:function(n,t,e){e.r(t)}}]);