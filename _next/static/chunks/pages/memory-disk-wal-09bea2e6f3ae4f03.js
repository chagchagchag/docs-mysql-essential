(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{9650:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memory-disk-wal",function(){return t(3612)}])},3612:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return c}});var a=t(5893),i=t(2673),s=t(373),o=t(8426);t(9128);var r=t(2643);let c=[{depth:2,value:"Memory vs Disk, WAL",id:"memory-vs-disk-wal"},{depth:2,value:"참고",id:"참고"},{depth:2,value:"메모리 쓰기 시 장애를 보완 - WAL",id:"메모리-쓰기-시-장애를-보완---wal"},{depth:2,value:"저장장치 별 Latency",id:"저장장치-별-latency"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",strong:"strong",code:"code"},(0,r.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"memory-vs-disk-wal",children:"Memory vs Disk, WAL"}),"\n",(0,a.jsxs)(n.p,{children:["데이터베이스는 디스크에 데이터를 기록합니다. 그런데 디스크는 메모리에 비해 I/O 작업 비용이 꽤 큽니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["이런 이유로 데이터베이스는 메모리를 이용해서 메모리 캐시 히트율을 높여서 디스크로의 접근을 최소화합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["하지만 데이터베이스가 메모리만 사용할 수는 없습니다. 메모리의 가격이 디스크보다 비싸기에 메모리를 방대하게 사용하는 것은 쉽지 않습니다. 또한 메모리는 휘발성을 가진 저장장치이기에 메모리가 off 되었을 때에 대책이 필요합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["이런 이유로 메모리에 데이터를 쓰기 전에 디스크에 쿼리 기록을 남깁니다. 그리고 디스크에는 랜덤접근보다는 순차접근이 효율적이기에 쿼리 로그는 순차 접근 방식으로 기록되며, 현재 읽고 있는 위치를 기록하게 됩니다. 이렇게 되면 장애 발생시 마지막으로 읽었던 위치의 쿼리 로그와 여러 정보들을 조합해서 메모리와 디스크 사이의 데이터 불일치문제를 해결할 수 있게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["이번 문서에서는 이 과정에 대해 세부적으로 설명합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h2,{id:"참고",children:"참고"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://dev.mysql.com/blog-archive/mysql-8-0-new-lock-free-scalable-wal-design/",children:"MySQL 8.0: New Lock free, scalable WAL design"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"크롬 구글 번역기를 사용하시기를 강추합니다!!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"메모리-쓰기-시-장애를-보완---wal",children:"메모리 쓰기 시 장애를 보완 - WAL"}),"\n",(0,a.jsxs)(n.p,{children:["데이터베이스의 데이터는 최종적으로 디스크에 저장됩니다. 디스크는 메모리에 비해 성능이 많이 떨어집니다. 따라서 데이터베이스 성능에 있어서 핵심으로 두는 중점사항은 ",(0,a.jsx)(n.strong,{children:'"디스크로의 랜덤I/O 를 최소화하는 것"'})," 입니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["디스크 접근에는 순차 I/O 와 랜덤 I/O 가 있습니다. 순차 I/O는 가장 마지막에 읽었던 위치만 알고 있으면 되기에 쓰기 위치를 파악하는데에 있어서 많은 시간이 소요되지 않습니다. 랜덤 I/O 의 경우 원하는 데이터의 위치를 찾은 후 그 위치에 쓰기/수정 작업을 해야 하는데 이때 디스크에 접근하는 비용이 메모리에 접근하는 것에 비해 꽤 큽니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.p,{children:["이런 경우 ",(0,a.jsx)(n.strong,{children:"디스크에 접근하는 횟수를 줄이는 대신 메모리에 캐시 히트율을 높인다면 쓰기에 소요되는 비용이 줄어듭니다."})," 하지만 이 경우 ",(0,a.jsx)(n.strong,{children:"메모리의 데이터가 유실될 수 있다는 점"})," 역시 고려해야 합니다. ",(0,a.jsx)(n.strong,{children:"데이터베이스에 장애가 발생하면, 메모리에 있는 내용들은 디스크에 반영되지 않기에"})," 디스크의 내용과 메모리의 내용이 일치하지 않는 상황이 발생할 수 있습니다. 이런 이유로 대부분의 ",(0,a.jsxs)(n.strong,{children:["데이터베이스는 이런 경우에 대비해 ",(0,a.jsx)(n.code,{children:"WAL(Write Ahead Log)"})," 기반으로 동작"]}),"합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://ko.wikipedia.org/wiki/%EB%A1%9C%EA%B7%B8_%EC%84%A0%ED%96%89_%EA%B8%B0%EC%9E%85",children:"WAL (Write Ahead Log)"})}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["데이터베이스는 쿼리 수행 전에 어떤 쿼리를 사용하는지 실행하려 했던 쿼리들의 기록을 ",(0,a.jsx)(n.strong,{children:"디스크에 순차기록"}),"을 해둡니다. 따라서 장애 등으로 인해 수행되지 않은 쿼리 들은 이 WAL 이라는 곳에서 읽어서 장애를 복구할 때 WAL에 쌓아둔 실행되지 않는 쿼리를 디스크에 반영합니다. 이렇게 해서 유실될 수 있는 쿼리 요청으로 인해 장애 직전 메모리에 남아있었던 결과와 디스크에 기록된 내용들이 달라질 수 있는 문제로 인한 데이터의 싱크가 깨지는 현상을 해결이 가능합니다. 이렇게 실행하려는 쿼리의 기록을 디스크에 순차 기록을 해두어 데이터의 싱크가 깨지는 현상을 방지하는 기술을 ",(0,a.jsx)(n.code,{children:"WAL(Write Ahead Log)"})," 라고 부릅니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h2,{id:"저장장치-별-latency",children:"저장장치 별 Latency"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://colin-scott.github.io/personal_website/research/interactive_latency.html",children:"Latency Numbers Every Programmer Should Know"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://gist.github.com/jboner/2841832",children:"gist.github.com/jboner/latency.txt"})}),"\n"]}),"\n",(0,a.jsx)("br",{})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/memory-disk-wal.mdx",route:"/memory-disk-wal",timestamp:1712807704e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"jpa-vs-mybatis-jdbctemplate",route:"/jpa-vs-mybatis-jdbctemplate"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"MdxPage",name:"mysql-architecture",route:"/mysql-architecture"},{kind:"MdxPage",name:"mysql-index",route:"/mysql-index"},{kind:"MdxPage",name:"normalization-denormalization",route:"/normalization-denormalization"},{kind:"MdxPage",name:"query-cache",route:"/query-cache"},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"intro",route:"/transaction/intro"},{kind:"MdxPage",name:"transaction-be-careful",route:"/transaction/transaction-be-careful"},{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"transactional-annotation",route:"/transaction/transactional-annotation"},{kind:"MdxPage",name:"transactional-propagation-option",route:"/transaction/transactional-propagation-option"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{intro:"소개","what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙 (ACID)","transaction-isolation-level":"트랜잭션 격리수준","transaction-be-careful":"트랜잭션 사용시 주의점","transactional-annotation":"스프링의 @Transactional","transactional-propagation-option":"트랜잭션 전파 옵션"}}]},{kind:"MdxPage",name:"uuid-vs-auto-increment",route:"/uuid-vs-auto-increment"},{kind:"Folder",name:"when-you-choose-dbms",route:"/when-you-choose-dbms",children:[{kind:"MdxPage",name:"sometimes-nosql-is-better-choice",route:"/when-you-choose-dbms/sometimes-nosql-is-better-choice"},{kind:"MdxPage",name:"when-you-choose-mysql-postgresql",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql"},{kind:"Meta",data:{"when-you-choose-mysql-postgresql":"MySQL, PostgreSQL 선택시 고려해볼 것들","sometimes-nosql-is-better-choice":"NoSQL이 더 좋은 선택일 경우 (feat. Subset 패턴)"}}]},{kind:"Meta",data:{index:"Introduction","mysql-index":"인덱스","normalization-denormalization":"정규화, 반정규화",transaction:"트랜잭션","mysql-architecture":"MySQL 구조","memory-disk-wal":"Memory vs Disk, WAL","query-cache":"쿼리 캐시","when-you-choose-dbms":"DBMS 별 선택이 필요할 때","uuid-vs-auto-increment":"UUID vs Auto Increment","jpa-vs-mybatis-jdbctemplate":"JPA vs Mybatis, JdbcTemplate",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Memory Disk Wal",headings:c},pageNextRoute:"/memory-disk-wal",nextraLayout:s.ZP,themeConfig:o.Z};n.default=(0,i.j)(d)},8426:function(e,n,t){"use strict";var a=t(5893);t(7294);let i={logo:(0,a.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};n.Z=i},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=9650)}),_N_E=e.O()}]);