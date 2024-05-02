(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{746:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/unique-key-in-distributed-system",function(){return i(7680)}])},7680:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return h},default:function(){return x}});var t=i(5893),s=i(2673),a=i(373),r=i(8426);i(9128);var d=i(2643),l={src:"/docs-mysql-essential/_next/static/media/multiple-master-1.345a2655.png",height:197,width:669,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAHElEQVR42gVAwREAAARq/3kLxcOBcvUooOKs7wGK6g99gbl1pwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},o={src:"/docs-mysql-essential/_next/static/media/uuid-1.cb7cde08.png",height:299,width:691,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAIUlEQVR42gWAwQkAMAwC3X/cKPTyCBa1l7lWy8OA7I2ZfDvFFzwU/HZzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},c={src:"/docs-mysql-essential/_next/static/media/snowflake-1.d39e362d.png",height:241,width:1210,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAAAAABA/8IxAAAAGklEQVR42gWAMQ0AAAzC8G94tDxLkF4hzKE8jCEPlX294y0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2};let h=[{depth:2,value:"분산시스템에서의 유일키 발급 방식 설계",id:"분산시스템에서의-유일키-발급-방식-설계"},{depth:2,value:"참고자료",id:"참고자료"},{depth:2,value:"전제조건",id:"전제조건"},{depth:2,value:"가능한 방법들",id:"가능한-방법들"},{depth:2,value:"1. 다중 마스터 기반 유일키 발급",id:"1-다중-마스터-기반-유일키-발급"},{depth:2,value:"2. UUID (Universally Unique Identifier)",id:"2-uuid-universally-unique-identifier"},{depth:2,value:"3. 스노우 플레이크 방식 유일키 발급",id:"3-스노우-플레이크-방식-유일키-발급"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",code:"code",ul:"ul",li:"li",a:"a",img:"img"},(0,d.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"분산시스템에서의-유일키-발급-방식-설계",children:"분산시스템에서의 유일키 발급 방식 설계"}),"\n",(0,t.jsxs)(n.p,{children:["1기의 Database 만 바라보는 것이 아닌 분산시스템에서 유일키 발급하는 여러가지 방식에 대해 정리합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["분산시스템은 꼭 필요한 것이 아닙니다. 하나의 관계형 데이터베이스로만 처리해야 데이터 작업의 경우도 있습니다. 이 경우 Rate Limiter 를 잘 구현해서 유입량을 조절하는 방식으로 적용 가능합니다. 이 때 Rate Limiter 는 어느 언어에서든 개발이 가능하며, 스프링 프레임워크에서는 Gateway 에서 Rate Limiter 를 지원합니다. 비용을 아낄 수 있다면 가장 좋은 선택이 될 것 같습니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["이번 글에서는 모든 트래픽을 받아야만 하는 경우에 대해 분산시스템이 존재할 경우 분산시스템에서의 유일키 발급 방식을 정리합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["유일키 발급 시스템이 중요한 이유는, 여러 개의 요청이 동시에 몰렸을 때, 이 것을 Write Behind 방식으로 요청의 대기열을 만들어서 처리할 때 각각의 요청을 유일키를 발급해서 처리합니다. 예를 들면 쿠폰이나 티켓을 발급하는 경우를 예로 들 수 있습니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["또는 채팅과 같은 시스템을 개발할 때, 시간 순으로 데이터를 정렬해서 가져와야 하는 경우가 있습니다. 이런 경우에도 유일키 발급 시스템을 따로 구축한다면 좋을 수 있습니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["이 경우 UUID 를 쓰는 경우도 있고 각자 시스템에 맞는 유일키를 발급해서 Redis 등과 같은 캐시 내의 Set, List 에 쌓아서 처리할 수 있습니다. 제일 유명한 사례는 트위터의 스노우 플레이크 방식 입니다. 스네이크 플로우의 방식을 꼭 따르지 않아도 되고 ",(0,t.jsx)(n.code,{children:"시간(정수 또는 문자열)+상품코드+별도의 데이터 Range"})," 와 같은 방식으로 유일키를 생성해낼 수도 있고 실무에서도 실제로 많이 쓰이는 방식일 것으로 보입니다. 이번 문서에서는 Snowflake 는 뭔지를 가장 마지막에 알아보고, 유일키 발급 시스템을 구축할 때 어떤 내용들을 고민하게 되는지를 정리해봅니다."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"참고자료",children:"참고자료"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Snowflake_ID",children:"Snowflake ID - wikipedia.org"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.google.com/search?q=%ED%8A%B8%EC%9C%84%ED%84%B0+%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%94%8C%EB%A0%88%EC%9D%B4%ED%81%AC&oq=%ED%8A%B8%EC%9C%84%ED%84%B0+%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%94%8C%EB%A0%88%EC%9D%B4%ED%81%AC&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIKCAEQABiABBiiBDIICAIQABgIGB7SAQg2ODY5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",children:"트위터의 스노우 플레이크"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://product.kyobobook.co.kr/detail/S000001033116",children:"가상 면접 사례로 배우는 대규모 시스템 설계"})}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"전제조건",children:"전제조건"}),"\n",(0,t.jsx)(n.p,{children:"만약 아래의 전제조건이 있을 때를 가정해보겠습니다."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ID 는 유일해야 한다."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ID 는 숫자로만 구성되어야 한다."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ID 는 64 비트로 표현될 수 있다."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ID 는 발급날짜 순으로 정렬 가능해야 한다."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"초당 10000 개의 ID 를 만들수 있어야 한다."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"분산 시스템에서 적용 가능해야 한다."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"가능한-방법들",children:"가능한 방법들"}),"\n",(0,t.jsx)(n.p,{children:"분산시스템에서는 불가능"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["티켓 서버 (Ticket Server)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"auto increment"})," 를 사용하는 단일 Database 를 사용하는 방식이며, Database 가 SPOF (Single-Point-Of-Failure) 에 빠질수 있습니다."]}),"\n",(0,t.jsx)(n.li,{children:"분산시스템까지는 필요하지 않거나 비용 문제로 트래픽을 많이 받을 필요가 없다면 앞단에 Gateway 등을 두어서 Rate Limiter 를 적용해서 유입량을 조절하는 방식으로도 우회가 가능하다면, 이 방식을 사용하는 것이 권장됩니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"분산시스템에서 고려 가능한 방식"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"다중 마스터 기반 유일키 발급"}),"\n",(0,t.jsx)(n.li,{children:"UUID (Universally Unique Identifier)"}),"\n",(0,t.jsx)(n.li,{children:"트위터 스노우 플레이크 (twitter snowflak) 접근 방식"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"1-다중-마스터-기반-유일키-발급",children:"1. 다중 마스터 기반 유일키 발급"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{placeholder:"blur",src:l})}),"\n",(0,t.jsxs)(n.p,{children:["여러 개의 데이터베이스로부터 채번을 하는 방식입니다. 위의 그림에서 ",(0,t.jsx)(n.code,{children:"MySQL#1"})," 은 홀수 키를 발급하고, ",(0,t.jsx)(n.code,{children:"MySQL#2"})," 는 짝수 키를 발급합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.p,{children:"이 방식은 아래와 같은 단점들이 있습니다."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"여러 데이터 센터에 걸쳐 규모를 늘리기 쉽지 않다"}),"\n",(0,t.jsx)(n.li,{children:"ID 의 유일성은 보장되지만 그 값이 시간흐름에 맞춰서 커지는지 여부는 보장하기 어렵다."}),"\n",(0,t.jsx)(n.li,{children:"서버를 추가하거나 삭제할 때 잘 동작할지 보장하기 어렵다."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"2-uuid-universally-unique-identifier",children:"2. UUID (Universally Unique Identifier)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90",children:"UUID - ko.wikipedia.org"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["UUID 는 유일성이 보장되는 키를 표현하는 방식입니다. 128 비트의 문자 또는 숫자로 구별되고, UUID 는 충돌 가능성이 굉장히 낮습니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["UUID 는 중복된 UUID 가 생길 확률을 50%로 끌어올리려면 초당 10개의 UUID 를 86년 동안 계속해서 생성해야 합니다. (",(0,t.jsx)(n.a,{href:"https://ko.wikipedia.org/wiki/%EB%B2%94%EC%9A%A9_%EA%B3%A0%EC%9C%A0_%EC%8B%9D%EB%B3%84%EC%9E%90",children:"UUID - ko.wikipedia.org"})," 내의 Collisions 절 참고)"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{placeholder:"blur",src:o})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"3-스노우-플레이크-방식-유일키-발급",children:"3. 스노우 플레이크 방식 유일키 발급"}),"\n",(0,t.jsxs)(n.p,{children:["트위터에서는 스노우플레이크(snowflake) 라는 방식의 ID 생성기법을 사용합니다. 트위터에서 고안했다고 해서 뭔가 거창해보이지만, 이 글을 읽는 독자분들도 여러분들의 시스템에 맞는 유일키 조합을 만들어낼 수 있습니다. 스노우 플레이크에 꼭 맞도록 끼워맞춰서 실무에 도입할 필요까지는 없습니다. 스노우플레이크 방식의 유일키 생성 방식은 아이디어로만 참고하셔도 됩니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.p,{children:"스노우플레이크 방식의 유일키는 아래아 같은 형식을 갖습니다."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{placeholder:"blur",src:c})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"스노우플레이크 방식은 128 bit 의 자리를 갖습니다."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1bit (사인(sign) 비트) : 1bit 의 자리를 가지며, 음수, 양수를 구별하기 위해 비워둡니다."}),"\n",(0,t.jsx)(n.li,{children:"41 bit (타임스탬프) : 41 bit 의 자리를 가집니다. 기원 시각(epoch) 이후로 몇 밀리초가 지났는지를 의미하는 값 입니다."}),"\n",(0,t.jsx)(n.li,{children:"5 bit (데이터센터 ID) : 5 bit 의 자리를 가집니다. 2^5 = 32 이므로 32개의 데이터센터를 지칭할 수 있습니다."}),"\n",(0,t.jsx)(n.li,{children:"5 bit (서버 ID) : 5 bit 의 자리를 가집니다. 데이터센터 당 32 개의 할당할 수 있습니다."}),"\n",(0,t.jsx)(n.li,{children:"12bit (일련번호) : 위에서 언급한 각종 번호들 외에도 일련번호를 지정해줍니다. ID 생성시 마다 일련번호가 1 씩 증가합니다. 그리고 1ms 뒤에는 다시 0 으로 초기화합니다. 즉, 밀리세컨드 안에서 몇번째 요청인지를 식별하는 일련번호 입니다."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["데이터 센터 ID 에 대해 서버 ID에 대해 생성된 키 값과 타임스탬프를 조합하기에 동일 시간에 발생한 타임스탬프에 대해 여러개의 서버에서 발생한 고유한 요청들을 식별할 수 있게 되며, 1ms 내에 발생한 요청들을 데이터센터 ID, 서버 ID 별로 구별할 수 있기 때문에 유일함을 보장 가능합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["이렇게 생성한 유일키는 동시성 처리 시 Write Behind 방식으로 Request 대기열을 쌓아둘 때 각각의 Request 를 유일하게 식별할 수 있다는 점에서 유용합니다.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)("br",{})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/unique-key-in-distributed-system.mdx",route:"/unique-key-in-distributed-system",timestamp:1714632087e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"jpa-vs-mybatis-jdbctemplate",route:"/jpa-vs-mybatis-jdbctemplate"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"MdxPage",name:"mysql-architecture",route:"/mysql-architecture"},{kind:"MdxPage",name:"mysql-index",route:"/mysql-index"},{kind:"MdxPage",name:"normalization-denormalization",route:"/normalization-denormalization"},{kind:"MdxPage",name:"query-cache",route:"/query-cache"},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"intro",route:"/transaction/intro"},{kind:"MdxPage",name:"transaction-be-careful",route:"/transaction/transaction-be-careful"},{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"transactional-annotation",route:"/transaction/transactional-annotation"},{kind:"MdxPage",name:"transactional-propagation-option",route:"/transaction/transactional-propagation-option"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{intro:"소개","what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙 (ACID)","transaction-isolation-level":"트랜잭션 격리수준","transaction-be-careful":"트랜잭션 사용시 주의점","transactional-annotation":"스프링의 @Transactional","transactional-propagation-option":"트랜잭션 전파 옵션"}}]},{kind:"MdxPage",name:"unique-key-in-distributed-system",route:"/unique-key-in-distributed-system"},{kind:"MdxPage",name:"uuid-vs-auto-increment",route:"/uuid-vs-auto-increment"},{kind:"Folder",name:"when-you-choose-dbms",route:"/when-you-choose-dbms",children:[{kind:"MdxPage",name:"sometimes-nosql-is-better-choice",route:"/when-you-choose-dbms/sometimes-nosql-is-better-choice"},{kind:"MdxPage",name:"when-you-choose-mysql-postgresql",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql"},{kind:"Meta",data:{"when-you-choose-mysql-postgresql":"MySQL, PostgreSQL 선택시 고려해볼 것들","sometimes-nosql-is-better-choice":"NoSQL이 더 좋은 선택일 경우 (feat. Subset 패턴)"}}]},{kind:"Meta",data:{index:"Introduction","mysql-index":"인덱스","normalization-denormalization":"정규화, 반정규화",transaction:"트랜잭션","mysql-architecture":"MySQL 구조","memory-disk-wal":"Memory vs Disk, WAL","query-cache":"쿼리 캐시","when-you-choose-dbms":"DBMS 별 선택이 필요할 때","uuid-vs-auto-increment":"UUID vs Auto Increment","unique-key-in-distributed-system":"분산시스템에서의 유일키 생성 방식","jpa-vs-mybatis-jdbctemplate":"JPA vs Mybatis, JdbcTemplate",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Unique Key in Distributed System",headings:h},pageNextRoute:"/unique-key-in-distributed-system",nextraLayout:a.ZP,themeConfig:r.Z};var x=(0,s.j)(u)},8426:function(e,n,i){"use strict";var t=i(5893);i(7294);let s={logo:(0,t.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};n.Z=s},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=746)}),_N_E=e.O()}]);