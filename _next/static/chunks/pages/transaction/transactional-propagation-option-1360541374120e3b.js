(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419],{4779:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transaction/transactional-propagation-option",function(){return t(3677)}])},3677:function(n,e,t){"use strict";t.r(e),t.d(e,{__toc:function(){return c}});var i=t(5893),a=t(2673),o=t(373),s=t(8426);t(9128);var r=t(2643);let c=[{depth:2,value:"트랜잭션 전파 옵션",id:"트랜잭션-전파-옵션"},{depth:3,value:"REQUIRED",id:"required"},{depth:3,value:"REQUIRED_NEW",id:"required_new"},{depth:3,value:"SUPPORT",id:"support"},{depth:3,value:"NOT_SUPPORT",id:"not_support"},{depth:3,value:"MANDATORY",id:"mandatory"},{depth:3,value:"NEVER",id:"never"},{depth:3,value:"NESTED",id:"nested"}];function _createMdxContent(n){let e=Object.assign({h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li"},(0,r.a)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"트랜잭션-전파-옵션",children:"트랜잭션 전파 옵션"}),"\n",(0,i.jsxs)(e.p,{children:["트랜잭션 전파 옵션은 여러가지가 있습니다. 그 중 가장 많이 쓰이는 것는 ",(0,i.jsx)(e.code,{children:"REQUIRED"}),", ",(0,i.jsx)(e.code,{children:"REQUIRED_NEW"})," 입니다. 이 외에도 여러가지 전파 옵션이 있는데, 특수한 케이스에 대해 대응 방안이 될수 있도록 하기 위해 여러가지 트랜잭션 전파옵션들을 간략하게 정리해봅니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(e.h3,{id:"required",children:"REQUIRED"}),"\n",(0,i.jsxs)(e.p,{children:["가장 많이 사용하는 기본설정입니다. 기존 트랜잭션이 없으면 생성하고 있으면 기존 트랜잭션에 참여합니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 새로운 트랜잭션을 생성합니다."}),"\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 있음 : 새로운 트랜잭션을 생성합니다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"required_new",children:"REQUIRED_NEW"}),"\n",(0,i.jsx)(e.p,{children:"기존 트랜잭션에서 파생되었더라도, 또는 합류할 기존 트랜잭션이 있더라도 항상 새로운 트랜잭션을 생성한다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 새로운 트랜잭션을 생성한다."}),"\n",(0,i.jsxs)(e.li,{children:["기존 트랜잭션 있음 : 새로운 트랜잭션을 생성한다.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"REQUIRED"})," 를 사용할 때에는 새로운 트랜잭션에 참여 했음에 유의해서 봐야 합니다. (같은 트랜잭션으로 처리되지 않습니다.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"support",children:"SUPPORT"}),"\n",(0,i.jsx)(e.p,{children:"트랜잭션을 지원한다는 의미입니다. 기존 트랜잭션이 없으면 없는 대로 진행하고 기존 트랜잭션이 있으면 참여합니다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 트랜잭션 없이 진행"}),"\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 있음 : 기존 트랜잭션에 참여"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"not_support",children:"NOT_SUPPORT"}),"\n",(0,i.jsx)(e.p,{children:"트랜잭션을 지원하지 않는다는 의미입니다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 트랜잭션 없이 진행합니다."}),"\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 있음 : 트랜잭션 없이 진행합니다.(이미 있는 기존 트랜잭션은 보류합니다)."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"mandatory",children:"MANDATORY"}),"\n",(0,i.jsx)(e.p,{children:"의무사항입니다. 트랜잭션이 반드시 있어야 합니다. 기존 트랜잭션이 없으면 예외가 발생합니다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["기존 트랜잭션 없음 : ",(0,i.jsx)(e.code,{children:"IllegalTransactionStateException"})," 예외 발생"]}),"\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 있음 : 기존 트랜잭션에 참여한다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"never",children:"NEVER"}),"\n",(0,i.jsx)(e.p,{children:"트랜잭션을 사용하지 않는다는 의미입니다. 기존 트랜잭션이 있으면 예외가 발생합니다. 기존 트랜잭션도 허용하지 않는 강한 부정의 의미로 이해하면 됩니다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 트랜잭션 없이 진행합니다."}),"\n",(0,i.jsxs)(e.li,{children:["기존 트랜잭션 있음 : ",(0,i.jsx)(e.code,{children:"IllegalTransactionStateException"})," 예외가 발생합니다."]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(e.h3,{id:"nested",children:"NESTED"}),"\n",(0,i.jsx)(e.p,{children:"중첩 트랜잭션은 외부 트랜잭션의 영향을 받지만, 중첩 트랜잭션은 외부에 영향을 주지 않습니다."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 없음 : 새로운 트랜잭션을 생성합니다."}),"\n",(0,i.jsx)(e.li,{children:"기존 트랜잭션 있음 : 중첩 트랜잭션을 생성합니다."}),"\n"]}),"\n",(0,i.jsx)("br",{})]})}let d={MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(_createMdxContent,{...n})}):_createMdxContent(n)},pageOpts:{filePath:"pages/transaction/transactional-propagation-option.mdx",route:"/transaction/transactional-propagation-option",timestamp:1709622041e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"MdxPage",name:"mysql-architecture",route:"/mysql-architecture"},{kind:"MdxPage",name:"mysql-index",route:"/mysql-index"},{kind:"MdxPage",name:"normalization-denormalization",route:"/normalization-denormalization"},{kind:"MdxPage",name:"query-cache",route:"/query-cache"},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"intro",route:"/transaction/intro"},{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"transactional-annotation",route:"/transaction/transactional-annotation"},{kind:"MdxPage",name:"transactional-propagation-option",route:"/transaction/transactional-propagation-option"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{intro:"소개","what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙 (ACID)","transaction-isolation-level":"트랜잭션 격리수준","transactional-annotation":"스프링의 @Transactional","transactional-propagation-option":"트랜잭션 전파 옵션"}}]},{kind:"MdxPage",name:"uuid-vs-auto-increment",route:"/uuid-vs-auto-increment"},{kind:"Folder",name:"when-you-choose-dbms",route:"/when-you-choose-dbms",children:[{kind:"MdxPage",name:"sometimes-nosql-is-better-choice",route:"/when-you-choose-dbms/sometimes-nosql-is-better-choice"},{kind:"MdxPage",name:"when-you-choose-mysql-postgresql",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql"},{kind:"Meta",data:{"when-you-choose-mysql-postgresql":"MySQL, PostgreSQL 선택시 고려해볼 것들","sometimes-nosql-is-better-choice":"NoSQL이 더 좋은 선택일 경우 (feat. Subset 패턴)"}}]},{kind:"Meta",data:{index:"Introduction","mysql-index":"인덱스","normalization-denormalization":"정규화, 반정규화",transaction:"트랜잭션","mysql-architecture":"MySQL 구조","memory-disk-wal":"Memory vs Disk, WAL","query-cache":"쿼리 캐시","when-you-choose-dbms":"DBMS 별 선택이 필요할 때","uuid-vs-auto-increment":"UUID vs Auto Increment",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Transactional Propagation Option",headings:c},pageNextRoute:"/transaction/transactional-propagation-option",nextraLayout:o.ZP,themeConfig:s.Z};e.default=(0,a.j)(d)},8426:function(n,e,t){"use strict";var i=t(5893);t(7294);let a={logo:(0,i.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};e.Z=a},5789:function(){}},function(n){n.O(0,[774,796,888,179],function(){return n(n.s=4779)}),_N_E=n.O()}]);