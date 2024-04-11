(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{8446:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/when-you-choose-dbms/when-you-choose-mysql-postgresql",function(){return s(9474)}])},9474:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return o}});var i=s(5893),r=s(2673),l=s(373),t=s(8426);s(9128);var d=s(2643);let o=[{depth:2,value:"MySQL, PostgreSQL 선택시 고려해볼 것들",id:"mysql-postgresql-선택시-고려해볼-것들"},{depth:2,value:"참고",id:"참고"},{depth:2,value:"RDBMS, ORDBMS",id:"rdbms-ordbms"},{depth:2,value:"멀티스레드 vs 멀티프로세스",id:"멀티스레드-vs-멀티프로세스"},{depth:2,value:"PostgreSQL 의 단순 CRUD 성능 ↓ 복잡한 쿼리 ↑",id:"postgresql-의-단순-crud-성능--복잡한-쿼리-"},{depth:2,value:"MVCC 지원방식",id:"mvcc-지원방식"},{depth:2,value:"Update 방식 : PostgreSQL 은 Insert/Select 위주의 서비스에 적합",id:"update-방식--postgresql-은-insertselect-위주의-서비스에-적합"},{depth:2,value:"지원되는 JOIN",id:"지원되는-join"},{depth:2,value:"Parallel Query for SELECT",id:"parallel-query-for-select"},{depth:2,value:"테이블 기본 구성 인덱스",id:"테이블-기본-구성-인덱스"},{depth:2,value:"성능비교",id:"성능비교"},{depth:3,value:"PostgreSQL 의 Partial Index",id:"postgresql-의-partial-index"},{depth:3,value:"Secondary Index 생성",id:"secondary-index-생성"},{depth:2,value:"그 밖의 PostgreSQL 특징들",id:"그-밖의-postgresql-특징들"},{depth:3,value:"SP",id:"sp"},{depth:3,value:"PostGIS",id:"postgis"},{depth:3,value:"Vaccum",id:"vaccum"},{depth:3,value:"Materialized View 지원",id:"materialized-view-지원"},{depth:3,value:"상속 기능",id:"상속-기능"},{depth:4,value:"다양한 사용자 기반 활용 가능",id:"다양한-사용자-기반-활용-가능"},{depth:4,value:"pg_trgm",id:"pg_trgm"},{depth:3,value:"PostgreSQL 을 사용하면 좋은 경우 및 단점들",id:"postgresql-을-사용하면-좋은-경우-및-단점들"},{depth:3,value:"PostgreSQL 에 비해 MySQL 을 고려해야 하는 경우",id:"postgresql-에-비해-mysql-을-고려해야-하는-경우"},{depth:3,value:"MySQL 의 장단점",id:"mysql-의-장단점"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",h3:"h3",strong:"strong",blockquote:"blockquote",code:"code",h4:"h4"},(0,d.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"mysql-postgresql-선택시-고려해볼-것들",children:"MySQL, PostgreSQL 선택시 고려해볼 것들"}),"\n",(0,i.jsxs)(n.p,{children:["개인적으로 느끼기에는 PostgreSQL 은 관리성 측면의 소형 DB이거나 어드민 DB, 고난이도 쿼리를 위한 정산 용도의 별도 DBMS 인 경우에 사용하기에 유리한 측면이 있는 것 같고, MySQL 의 경우 트래픽이 다소 발생하는 B2C 계열에 적합하다는 느낌입니다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"참고",children:"참고"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://techblog.woowahan.com/6550/",children:"우아한 형제들 기술블로그 - Aurora MySQL vs Aurora PostgreSQL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://smoh.tistory.com/370",children:"MySQL vs PostgreSQL 비교"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://velog.io/@jisoo1170/Oracle-MySQL-PostgreSQL-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80",children:"Oracle, MySQL, PostgreSQL 차이점은?"})}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"rdbms-ordbms",children:"RDBMS, ORDBMS"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL 은 객체 관계형 DB다. (ORDBMS)"}),"\n",(0,i.jsx)(n.li,{children:"테이블 상속기능이 제공된다. 자식 테이블은 부모테이블로부터 컬럼을 상속받아 사용가능하다."}),"\n",(0,i.jsx)(n.li,{children:"기본적으로는 관계형 데이터베이스지만, 객체 데이터베이스와 연관되는 기능(테이블 상속/함수 오버로딩) 역시 포함하고 있다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"멀티스레드-vs-멀티프로세스",children:"멀티스레드 vs 멀티프로세스"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL 은 멀티 프로세스 방식이다."}),"\n",(0,i.jsx)(n.li,{children:"MySQL 은 멀티 스레드 방식이다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"postgresql-의-단순-crud-성능--복잡한-쿼리-",children:"PostgreSQL 의 단순 CRUD 성능 ↓ 복잡한 쿼리 ↑"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL은 단순 CRUD시에 MySQL에 비해서 성능이 떨어진다."}),"\n",(0,i.jsx)(n.li,{children:"PostgreSQL 은 복잡한 쿼리를 요구하거나 대규모 서비스에 특화되어 있다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"mvcc-지원방식",children:"MVCC 지원방식"}),"\n",(0,i.jsx)(n.p,{children:"MySQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Undo Segment 방식"}),"\n",(0,i.jsx)(n.li,{children:"최신 데이터는 기존 데이터 블록의 레코드에 반영한다."}),"\n",(0,i.jsx)(n.li,{children:"변경 전의 값은 undo 영역이라는 별도의 공간에 저장하고, 갱신에 대한 버전관리를 한다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"PostgreSQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MGA 방식"}),"\n",(0,i.jsx)(n.li,{children:"튜플을 Update 할 때 새로운 값으로 replce 하지 않고 이전 튜플은 유효범위를 마킹해서 처리하는 방식"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"update-방식--postgresql-은-insertselect-위주의-서비스에-적합",children:"Update 방식 : PostgreSQL 은 Insert/Select 위주의 서비스에 적합"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL 은 Update 를 그대로 수행한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 은 Insert & Delete (삭제표시) 를 수행한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL 은 UPDATE 시 내부적으로는 새 행이 INSERT 되고 이전 데이터는 삭제 표시된다."}),"\n",(0,i.jsx)(n.li,{children:"모든 인덱스에는 보통 행의 실제 위치값에 대한 링크가 표기된다. 따라서 행이 업데이트 되면 변경된 위치값 (새로 추가된 행)에 대한 인덱스 정보도 업데이트가 필요하다. 이런 과정 때문에 UPDATE 시에는 MySQL 보다 성능이 떨어지게 된다."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 은 Update 시 변경 전 값을 삭제 마크 처리한 후 새로운 행을 INSERT 한다. 새롭게 INSERT 된 값이 변경 후의 값이 된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["이런 이유로 PostgreSQL은 보통 Insert, Select 위주의 서비스에 사용되는 것이 선호된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"지원되는-join",children:"지원되는 JOIN"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL 은 NL JOIN, HASH JOIN 을 지원한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 은 NL JOIN, HASH JOIN, SORT JOIN 을 지원한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"parallel-query-for-select",children:"Parallel Query for SELECT"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL 5.7.2.09.2 버전부터 지원되기 시작했다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 9.6 버전부터 지원되기 시작했다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL 은 오래 전부터(9버전) 대부분의 SELECT 쿼리에서 parallel 기능이 지원되고 있다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"테이블-기본-구성-인덱스",children:"테이블 기본 구성 인덱스"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL 은 기본키에 대해 Clustered Index를 지원한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 은 기본키에 대해 Non Clustered Index 가 적용된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"성능비교",children:"성능비교"}),"\n",(0,i.jsx)(n.h3,{id:"postgresql-의-partial-index",children:"PostgreSQL 의 Partial Index"}),"\n",(0,i.jsxs)(n.p,{children:["PostgreSQL 에는 전체데이터의 부분 집합에 대해서만 인덱스를 생성하는 Partial Index 라는 기능이 있다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["특정 범위에 대해서만 인덱싱을 하는 기능이다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["대량 데이터의 일부 값/범위에 대해 인덱스를 생성할 경우 인덱스 크기도 작고 관리하는 리소스도 줄일 수 있다는 장점이 있다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["조회 시에는 PostgreSQL의 성능과 MySQL의 조회성능이 큰 차이를 보여주지 않았다고 한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["인덱스 크기를 확인해보면, PostgreSQL 의 크기가 10배정도 더 작다. 필요한 부분만 인덱스를 생성하기 때문에 저장공간에 대한 이점이 크며, 데이터 삭제,추가,갱신에 따른 인덱스 유지관리 비용도 절약된다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"secondary-index-생성",children:"Secondary Index 생성"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"참고) online ddl 은 꽤 부담스러운 작업에 속한다."})}),"\n",(0,i.jsx)(n.p,{children:"테이블에 이미 저장되어 있는 데이터가 많기에 시간소요 예측이 힘들고, 작업이 실패한다면 rollback 작업에 따른 위험도도 크다."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"시간예측을 할때는 보통 백업 데이터로 테스트를 진행하지만, 라이브 환경에서는 시간 소요가 더 오래 걸리는 경우가 많다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"이미 존재하는 테이블에 인덱스,컬럼 추가작업 시의 성능 실험"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"Aurora MySQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"100G 테이블의 인덱스, 컬럼 추가를 하는 데에 1시간이 넘는 시간이 소요된다."}),"\n",(0,i.jsx)(n.li,{children:"100G 만 넘어도 인댁스/컬럼 추가시 1시간이 넘게 소요된다."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Aurora PostgreSQL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"200G 테이블의 인덱스,컬럼 추가를 하는 데에 40분 만에 인덱스 추가가 완료되고 컬럼 추가는 바로 된다."}),"\n",(0,i.jsx)(n.li,{children:"PostgreSQL 의 online DDL 컬럼 추가는 시스템 카탈로그에 추가될 정보만 반영하므로 꽤 빠른 작업이 가능하다."}),"\n",(0,i.jsx)(n.li,{children:"시스템 카탈로그는 meta data 를 저장하는 역할을 수행한다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"그-밖의-postgresql-특징들",children:"그 밖의 PostgreSQL 특징들"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SP"}),"\n",(0,i.jsx)(n.li,{children:"Vaccum"}),"\n",(0,i.jsx)(n.li,{children:"PostGIS"}),"\n",(0,i.jsx)(n.li,{children:"Materialized View"}),"\n",(0,i.jsx)(n.li,{children:"상속기능"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pg_trgm"})}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"sp",children:"SP"}),"\n",(0,i.jsxs)(n.p,{children:["c/c++, Java, Javascript, .Net, R, Perl, Python, Ruby, Tcl 등으로 PostgreSQL 에 SP 생성이 가능하다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"postgis",children:"PostGIS"}),"\n",(0,i.jsxs)(n.p,{children:["geographic object를 지원 가능하다. oracle의 GIS 와 성능이 비견할 정도로 뛰어나다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.h3,{id:"vaccum",children:"Vaccum"}),"\n",(0,i.jsx)(n.p,{children:"PostgreSQL 은 MVCC 를 MGA 방식으로 구현한다."}),"\n",(0,i.jsx)(n.p,{children:"그래서 UPDATE , DELETE시에 물리적으로 공간을 UPDATE하여 사용하지 않고 새로운 영역을 할당하여 사용하게 된다."}),"\n",(0,i.jsx)(n.p,{children:"즉 이전 공간이 재사용 될 수 없는 dead tuple 상태로 저장공간을 두게 되어서 이러한 현상이 지속될 경우, 공간 부족 및 데이터IO의 비효율을 유발하여 성능저하의 원인이 된다."}),"\n",(0,i.jsxs)(n.p,{children:["따라서, 주기적으로 vacuum 기능을 수행하여 재사용 가능하도록 관리해 주어야 한다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"materialized-view-지원",children:"Materialized View 지원"}),"\n",(0,i.jsxs)(n.p,{children:["일반 View 와는 다르게 snapshot이라고 불리는 Materialized View는 view 생성 시 설정한 조건의 쿼리 결과를 별도의 공간에 저장하고 쿼리가 실행될 때 미리 저장된 결과를 보여주어 성능을 향상시킨다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["실시간 노출 필요성이 적은 통계성 쿼리나, 자주 update 되지 않는 테이블에 생성할 때 성능효과를 볼 수 있다.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"상속-기능",children:"상속 기능"}),"\n",(0,i.jsx)(n.p,{children:"부모테이블을 생성 후 상속기능을 이용해 하위 테이블을 만들 수 있다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"하위 테이블은 상속받은 부모테이블의 컬럼을 제외한 컬럼만 추가로 생성하면 된다."}),"\n",(0,i.jsx)(n.li,{children:"상위 테이블에서 조회 시 기본적으로 하위 테이블의 데이터까지 모두 조회 가능하다."}),"\n",(0,i.jsx)(n.li,{children:"데이터 변경 시에도 하위 테이블까지 모두 반영된다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h4,{id:"다양한-사용자-기반-활용-가능",children:"다양한 사용자 기반 활용 가능"}),"\n",(0,i.jsx)(n.p,{children:"연산자, 복합 자료형, 집계함수, 자료형 변환자, 확장 기능 등 다양한 데이터베이스 객체를 사용자가 임의로 만들 수 있는 기능을 제공한다."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h4,{id:"pg_trgm",children:(0,i.jsx)(n.code,{children:"pg_trgm"})}),"\n",(0,i.jsx)(n.p,{children:"trigram매칭을 기반으로 한 모듈로 데이터 간 유사성 파악 및 like %pattern%(3자이상) 인덱스 검색이 가능하다."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"postgresql-을-사용하면-좋은-경우-및-단점들",children:"PostgreSQL 을 사용하면 좋은 경우 및 단점들"}),"\n",(0,i.jsxs)(n.p,{children:["(부가적으로 조금 더 참고한자료 : ",(0,i.jsx)(n.a,{href:"https://velog.io/@jisoo1170/Oracle-MySQL-PostgreSQL-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80",children:"Oracle, MySQL, PostgreSQL 차이점"}),")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"테이블 상속 기능등을 활용하고 싶은 경우"}),"\n",(0,i.jsx)(n.li,{children:"확장성, 호환성이 필요한 경우 PostgreSQL 이 필요하다."}),"\n",(0,i.jsxs)(n.li,{children:["Materialized View, ",(0,i.jsx)(n.code,{children:"pg_trgm"}),", Sort Join 등과 같은 검색에 유용한 기능을 사용하고자 할 때"]}),"\n",(0,i.jsx)(n.li,{children:"PostGIS 를 지원한다."}),"\n",(0,i.jsxs)(n.li,{children:["Insert/Select 위주의 서비스에 적합","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Update가 잦은 경우는 PostgreSQL 에서는 성능이 불안정)"}),"\n",(0,i.jsx)(n.li,{children:"새로운 행을 insert 한 후에 과거의 행은 delete 마크를 붙이기에 update가 잦으면 계속해서 과거의 행의 양이 계속 늘어난다. 이것을 dead tuple 이라고 부른다. 이런 현상으로 인해 Vaccum 을 주기적으로 수행해줘야 한다."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["다양한 join 방법을 제공한다.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"nested loop join, hash join, sort merge join"}),"\n",(0,i.jsx)(n.li,{children:"결합할 데이터가 많을 경우는 Hash Join, Merge Join 을 사용한다."}),"\n",(0,i.jsx)(n.li,{children:"데이터가 이미 정렬되어 있는 경우 Sort Merge 를 사용"}),"\n",(0,i.jsx)(n.li,{children:"데이터가 정렬되어 있지 않다면 Hash Join 이 권장된다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"부가적인 장점"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"컬럼 추가 등과 같은 online ddl 사용시 MySQL에 비해 월등히 성능이 우월하다."}),"\n",(0,i.jsx)(n.li,{children:"데이터베이스 클러스터 백업 기능을 제공한다."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"클러스터 : 디스크로부터 데이터를 읽어오는 시간을 줄이기 위해 자주 사용되는 테이블의 데이터를 디스크의 가까운 위치에 저장시키는 방법"}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"단점 역시 있다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"update를 할 때, 과거 행을 삭제된 표시를 하고 변경된 데이터를 가진 새로운 행을 추가하는 형태라서 update가 느리다."}),"\n",(0,i.jsx)(n.li,{children:"처리 속도를 빠르게 하기 위해 여러 CPU를 활용하여 쿼리를 실행한다."}),"\n",(0,i.jsx)(n.li,{children:"설정이 복잡하다. 광범위한 기능들과 표준 SQL에 대한 강력한 준수로 인해 PostgreSQL은 간단한 데이터베이스 설정에 대해서도 많은 설정이 필요하다."}),"\n",(0,i.jsx)(n.li,{children:"속도가 중요하고 읽기 작업이 많으면 MySQL 이 더 실용적인 선택이 될 수 있다."}),"\n",(0,i.jsxs)(n.li,{children:["단순한 레플리케이션 작업에는 적합하지 않다.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PostgreSQL에서도 레플리케이션을 잘 제공하고 있지만 여전히 비교적 새로운 기능이다."}),"\n",(0,i.jsx)(n.li,{children:"레플리케이션은 MySQL 에서 더 성숙한 기능이고 많은 사용자들이 필요한 데이터베이스 및 시스템 관리 경험이 부족한 사용자들은 MySQL 의 레플리케이션 기능을 구현하는 것이 더 쉽다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"postgresql-에-비해-mysql-을-고려해야-하는-경우",children:"PostgreSQL 에 비해 MySQL 을 고려해야 하는 경우"}),"\n",(0,i.jsx)(n.p,{children:"Update 가 잦은 경우"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MVCC 수행시 Update 가 잦은 경우 dead tuple 들이 자주 발생하는 이유로 Database 머신 내에서 Disk Full 등과 같은 이슈가 자주 발생한다. 따라서 PostgreSQL을 사용할 때 Vaccum을 자주 수행해줘야 한다는 단점이 있다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"멀티 스레드 기반의 Database 엔진을 사용하고자 할때"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MySQL 은 멀티스레드 기반의 엔진이다."}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h3,{id:"mysql-의-장단점",children:"MySQL 의 장단점"}),"\n",(0,i.jsx)(n.p,{children:"오픈소스로 무료로 사용가능하다."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"top n개의 레코드를 가지고 오는 케이스에 특화되어 있다."}),"\n",(0,i.jsx)(n.li,{children:"update 성능이 postgre보다 우수하다."}),"\n",(0,i.jsx)(n.li,{children:"Nested Loop Join만 지원한다."}),"\n",(0,i.jsx)(n.li,{children:"복잡한 알고리즘은 가급적 지원하지 않는다."}),"\n",(0,i.jsx)(n.li,{children:"문자열 비교에서 대소 문자를 구분하지 않는다."}),"\n",(0,i.jsx)(n.li,{children:"간단한 처리 속도를 향상 시키는 것을 추구함"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"간단한 데이터 트랜잭션을 위한 데이터베이스가 필요한 웹 기반 프로젝트에 널리 사용된다. 로드가 많거나 복잡한 쿼리는 성능이 저하된다."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nested Loop Join"})," 바깥 테이블의 처리 범위를 하나씩 접근하면서 추출된 값으로 안쪽 테이블을 조인하는 방식이다."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"중첩 루프문과 동일한 원리"}),"\n",(0,i.jsx)(n.li,{children:"좁은 범위에 유리하다."}),"\n",(0,i.jsx)(n.li,{children:"순차적으로 처리한다."}),"\n"]}),"\n"]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/when-you-choose-dbms/when-you-choose-mysql-postgresql.mdx",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql",timestamp:1712810425e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"jpa-vs-mybatis-jdbctemplate",route:"/jpa-vs-mybatis-jdbctemplate"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"MdxPage",name:"mysql-architecture",route:"/mysql-architecture"},{kind:"MdxPage",name:"mysql-index",route:"/mysql-index"},{kind:"MdxPage",name:"normalization-denormalization",route:"/normalization-denormalization"},{kind:"MdxPage",name:"query-cache",route:"/query-cache"},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"intro",route:"/transaction/intro"},{kind:"MdxPage",name:"transaction-be-careful",route:"/transaction/transaction-be-careful"},{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"transactional-annotation",route:"/transaction/transactional-annotation"},{kind:"MdxPage",name:"transactional-propagation-option",route:"/transaction/transactional-propagation-option"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{intro:"소개","what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙 (ACID)","transaction-isolation-level":"트랜잭션 격리수준","transaction-be-careful":"트랜잭션 사용시 주의점","transactional-annotation":"스프링의 @Transactional","transactional-propagation-option":"트랜잭션 전파 옵션"}}]},{kind:"MdxPage",name:"uuid-vs-auto-increment",route:"/uuid-vs-auto-increment"},{kind:"Folder",name:"when-you-choose-dbms",route:"/when-you-choose-dbms",children:[{kind:"MdxPage",name:"sometimes-nosql-is-better-choice",route:"/when-you-choose-dbms/sometimes-nosql-is-better-choice"},{kind:"MdxPage",name:"when-you-choose-mysql-postgresql",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql"},{kind:"Meta",data:{"when-you-choose-mysql-postgresql":"MySQL, PostgreSQL 선택시 고려해볼 것들","sometimes-nosql-is-better-choice":"NoSQL이 더 좋은 선택일 경우 (feat. Subset 패턴)"}}]},{kind:"Meta",data:{index:"Introduction","mysql-index":"인덱스","normalization-denormalization":"정규화, 반정규화",transaction:"트랜잭션","mysql-architecture":"MySQL 구조","memory-disk-wal":"Memory vs Disk, WAL","query-cache":"쿼리 캐시","when-you-choose-dbms":"DBMS 별 선택이 필요할 때","uuid-vs-auto-increment":"UUID vs Auto Increment","jpa-vs-mybatis-jdbctemplate":"JPA vs Mybatis, JdbcTemplate",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"When You Choose Mysql Postgresql",headings:o},pageNextRoute:"/when-you-choose-dbms/when-you-choose-mysql-postgresql",nextraLayout:l.ZP,themeConfig:t.Z};n.default=(0,r.j)(c)},8426:function(e,n,s){"use strict";var i=s(5893);s(7294);let r={logo:(0,i.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};n.Z=r},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=8446)}),_N_E=e.O()}]);