(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[597],{1809:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/database-index/notitle",function(){return n(7726)}])},7726:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a},default:function(){return o}});var r=n(5893),i=n(2673),l=n(373),d=n(8426);n(9128);var t=n(2643),c={src:"/docs-mysql-essential/_next/static/media/1.6b2084fc.png",height:672,width:1456,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAUklEQVR42hWLsRGAMAzE/E4Ks/8K1EzASlASA7afIN2pE7Z9fZJXMDL9HWamClJw+An5ycrb3WxRVRGCxZiSDU0gVTXb0fuIERXAv1EIwWxD+wCmMC+vqYPbGAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},h={src:"/docs-mysql-essential/_next/static/media/2.6952ae43.png",height:648,width:1460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42jXLuw5AMABA0f7/71hNiATpUIRGS71CPCIerVJDWdzpLgekhMEwjTE1TMeF0a2U7SPLQ4CwBkZ4WTf1PFyc3TAdXHwDpLzEKbXWWVFjWvXj7KME5xXQf4TVn94PHqCElu0LfTlVy3cQOuUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4};let a=[{depth:2,value:"메모리 쓰기 시 장애를 보완 - WAL",id:"메모리-쓰기-시-장애를-보완---wal"},{depth:2,value:"저장장치 별 Latency",id:"저장장치-별-latency"},{depth:2,value:"인덱스",id:"인덱스"},{depth:3,value:"인덱스를 사용하는 이유",id:"인덱스를-사용하는-이유"},{depth:3,value:"인덱스 자료구조의 원리",id:"인덱스-자료구조의-원리"},{depth:2,value:"B+ Tree - 인덱스의 자료구조",id:"b-tree---인덱스의-자료구조"},{depth:3,value:"B+Tree 학습자료",id:"btree-학습자료"},{depth:3,value:"여러가지 자료구조들과의 비교",id:"여러가지-자료구조들과의-비교"},{depth:3,value:"B+Tree",id:"btree"},{depth:3,value:"mysql 의 B+Tree",id:"mysql-의-btree"},{depth:2,value:"클러스터 인덱스",id:"클러스터-인덱스"},{depth:3,value:"클러스터 인덱스, 장단점",id:"클러스터-인덱스-장단점"},{depth:3,value:"인덱스 역시 PK로 이뤄져 있으며 클러스터 인덱스로 구성",id:"인덱스-역시-pk로-이뤄져-있으며-클러스터-인덱스로-구성"},{depth:2,value:"커버링 인덱스",id:"커버링-인덱스"},{depth:2,value:"인덱스 사용 시 주의해야 하는 점들",id:"인덱스-사용-시-주의해야-하는-점들"},{depth:3,value:"인덱스 필드 가공은 피하는 것이 좋다",id:"인덱스-필드-가공은-피하는-것이-좋다"},{depth:3,value:"복합인덱스 사용시에는 복합된 컬럼을 모두 사용해야만 인덱스를 조회하게 된다",id:"복합인덱스-사용시에는-복합된-컬럼을-모두-사용해야만-인덱스를-조회하게-된다"},{depth:3,value:"기본적으로 하나의 쿼리는 하나의 인덱스만 탄다",id:"기본적으로-하나의-쿼리는-하나의-인덱스만-탄다"}];function _createMdxContent(e){let s=Object.assign({h2:"h2",p:"p",strong:"strong",code:"code",ul:"ul",li:"li",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",img:"img",pre:"pre",span:"span"},(0,t.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"메모리-쓰기-시-장애를-보완---wal",children:"메모리 쓰기 시 장애를 보완 - WAL"}),"\n",(0,r.jsxs)(s.p,{children:["데이터베이스의 데이터는 최종적으로 디스크에 저장됩니다. 디스크는 메모리에 비해 성능이 많이 떨어집니다. 따라서 데이터베이스 성능에 있어서 핵심으로 두는 중점사항은 ",(0,r.jsx)(s.strong,{children:'"디스크로의 랜덤I/O 를 최소화하는 것"'})," 입니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["디스크 접근에는 순차 I/O 와 랜덤 I/O 가 있습니다. 순차 I/O는 가장 마지막에 읽었던 위치만 알고 있으면 되기에 쓰기 위치를 파악하는데에 있어서 많은 시간이 소요되지 않습니다. 랜덤 I/O 의 경우 원하는 데이터의 위치를 찾은 후 그 위치에 쓰기/수정 작업을 해야 하는데 이때 디스크에 접근하는 비용이 메모리에 접근하는 것에 비해 꽤 큽니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["이런 경우 ",(0,r.jsx)(s.strong,{children:"디스크에 접근하는 횟수를 줄이는 대신 메모리에 캐시 히트율을 높인다면 쓰기에 소요되는 비용이 줄어듭니다."})," 하지만 이 경우 메모리의 데이터가 유실될 수 있다는 점 역시 고려해야 합니다. 데이터베이스에 장애가 발생하면, 메모리에 있는 내용들은 디스크에 반영되지 않기에 디스크의 내용과 메모리의 내용이 일치하지 않는 상황이 발생할 수 있습니다. 이런 이유로 대부분의 데이터베이스는 이런 경우에 대비해 ",(0,r.jsx)(s.code,{children:"WAL(Write Ahead Log)"})," 기반으로 동작합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://ko.wikipedia.org/wiki/%EB%A1%9C%EA%B7%B8_%EC%84%A0%ED%96%89_%EA%B8%B0%EC%9E%85",children:"WAL (Write Ahead Log)"})}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["데이터베이스는 쿼리 수행 전에 어떤 쿼리를 사용하는지 실행하려 했던 쿼리들의 기록을 ",(0,r.jsx)(s.strong,{children:"디스크에 순차기록"}),"을 해둡니다. 따라서 장애 등으로 인해 수행되지 않은 쿼리 들은 이 WAL 이라는 곳에서 읽어서 장애를 복구할 때 WAL에 쌓아둔 실행되지 않는 쿼리를 디스크에 반영합니다. 이렇게 해서 유실될 수 있는 쿼리 요청으로 인해 장애 직전 메모리에 남아있었던 결과와 디스크에 기록된 내용들이 달라질 수 있는 문제로 인한 데이터의 싱크가 깨지는 현상을 해결이 가능합니다. 이렇게 실행하려는 쿼리의 기록을 디스크에 순차 기록을 해두어 데이터의 싱크가 깨지는 현상을 방지하는 기술을 ",(0,r.jsx)(s.code,{children:"WAL(Write Ahead Log)"})," 라고 부릅니다. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h2,{id:"저장장치-별-latency",children:"저장장치 별 Latency"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://colin-scott.github.io/personal_website/research/interactive_latency.html",children:"Latency Numbers Every Programmer Should Know"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://gist.github.com/jboner/2841832",children:"gist.github.com/jboner/latency.txt"})}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"인덱스",children:"인덱스"}),"\n",(0,r.jsxs)(s.p,{children:["예를 들어 아래와 같은 데이터가 있습니다. 문자",(0,r.jsx)(s.code,{children:"C"})," 를 찾으려면 끝까지 모두 읽어야 합니다."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"D"})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Z"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"B"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"A"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"K"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"C"})})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["이번에는 위의 데이터를 오름차순으로 정렬했습니다. 정렬된 표에서는 ",(0,r.jsx)(s.code,{children:"C"})," 가 3번째에 있다는 사실이 확실하기에 더 빠르게 읽어올 수 있습니다."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.th,{children:"A"})})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"B"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"C"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"D"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"K"})}),(0,r.jsx)(s.tr,{children:(0,r.jsx)(s.td,{children:"Z"})})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"인덱스를-사용하는-이유",children:"인덱스를 사용하는 이유"}),"\n",(0,r.jsxs)(s.p,{children:["무작위로 데이터의 위치를 O(N)으로 탐색하기 보다는 이렇게 정렬된 자료구조를 통해 데이터를 접근한다면 데이터를 탐색해야 하는 범위가 축소되기에 데이터의 접근 속도가 월등히 빨라지게 됩니다. ",(0,r.jsx)(s.strong,{children:"즉, 인덱스를 사용하는 이유는 '인덱스의 탐색 범위'를 줄여서 접근 속도를 최적화하기 위해서입니다."}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h3,{id:"인덱스-자료구조의-원리",children:"인덱스 자료구조의 원리"}),"\n",(0,r.jsxs)(s.p,{children:["인덱스는 하나의 자료구조입니다. 데이터의 주소들을 특정 순서로 기억하고 있는 하나의 목차와 같은 역할을 합니다. 예를 들어 아래와 같은 테이블이 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"데이터 주소"}),(0,r.jsx)(s.th,{children:"Ticker"}),(0,r.jsx)(s.th,{children:"회사명"}),(0,r.jsx)(s.th,{children:"시가총액"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"MSFT"}),(0,r.jsx)(s.td,{children:"Microsoft"}),(0,r.jsx)(s.td,{children:"3.049 T"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"Nvdia"}),(0,r.jsx)(s.td,{children:"1.97 T"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"AAPL"}),(0,r.jsx)(s.td,{children:"Apple"}),(0,r.jsx)(s.td,{children:"2.818 T"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"만약 위의 데이터를 시가총액이 가장 낮은 회사를 찾는다거나 시가 총액이 가장 높은 회사를 찾는 다거나 하는 조회를 하려면 아래와 같은 자료구조를 미리 만들어두면 조회 성능상에 이점이 생깁니다."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"시가총액"}),(0,r.jsx)(s.th,{children:"데이터 주소"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1.97 T"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2.818 T"}),(0,r.jsx)(s.td,{children:"3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3.049 T"}),(0,r.jsx)(s.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["만약 시가총액이 가장 낮은 회사를 찾아야 할 경우 가장 맨 처음에 나타난 ",(0,r.jsx)(s.code,{children:"1.97T"})," 에 대한 데이터는 데이터 주소가 2 이고 데이터 주소 2 에 대한 원본 데이터를 확인해보면 ",(0,r.jsx)(s.code,{children:"NVDA"})," 인 것을 확인 가능합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["만약 시가총액이 가장 높은 회사를 찾아야 한다면 가장 마지막에서 첫번째 데이터를 읽으면 되고, ",(0,r.jsx)(s.code,{children:"3.049 T"})," 에 대해 데이터 주소가 1인데 데이터 주소 1에 대한 원본데이터를 확인해서 ",(0,r.jsx)(s.code,{children:"MSFT"})," 라는 것을 확인 가능합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h2,{id:"b-tree---인덱스의-자료구조",children:"B+ Tree - 인덱스의 자료구조"}),"\n",(0,r.jsx)(s.h3,{id:"btree-학습자료",children:"B+Tree 학습자료"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html",children:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"})}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"여러가지-자료구조들과의-비교",children:"여러가지 자료구조들과의 비교"}),"\n",(0,r.jsx)(s.p,{children:"List"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"정렬되지 않았을 때 : O(n)"}),"\n",(0,r.jsx)(s.li,{children:"정렬된 리스트에서는 : O(logN)"}),"\n",(0,r.jsx)(s.li,{children:"정렬되지 않은 리스트의 정렬 시간 복잡도는 : 평균 (Mlog(N))"}),"\n",(0,r.jsx)(s.li,{children:"ArrayList와 같은 구조일 경우 삽입/삭제 시 비용이 높다."}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"HashMap"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"단건 검색 속도 : O(1)"}),"\n",(0,r.jsx)(s.li,{children:"범위 탐색 : O(N)"}),"\n",(0,r.jsx)(s.li,{children:"전방 일치 탐색 불가 (e.g. like 'AB%')"}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"Tree"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"트리의 높이에 따라 시간복잡도가 결정된다."}),"\n",(0,r.jsx)(s.li,{children:"트리의 높이를 최소화 하는 것이 중요"}),"\n",(0,r.jsx)(s.li,{children:"한쪽으로 노드가 치우치지 않도록 하는 균형잡힌 트리를 사용"}),"\n",(0,r.jsx)(s.li,{children:"e.g. Red Black Tree, B+Tree, ..."}),"\n",(0,r.jsx)(s.li,{children:"Red Black Tree 는 각 노드가 하나의 데이터 역할을 하고, B+Tree 의 각 노드는 리프노드의 주소 역할을 수행"}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"btree",children:"B+Tree"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"B+Tree"})," 는 데이터 자체는 하나의 링크드리스트로 구성되어 있고, 이 링크드 리스트는 트리의 리프로 구성되어 있습니다. 그리고 이 데이터의 주소로 구성된 트리를 이진탐색하면서 원하는 위치를 찾기에, 리프노드에 구성된 링크드 리스트에서 원하는 위치를 빠르게 찾아낼 수 있습니다."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{placeholder:"blur",src:c})}),"\n",(0,r.jsxs)(s.p,{children:["예를 들면 1~17 까지의 데이터를 추가할 때 위와 같이 B+Tree 가 생성됩니다. 가장 마지막 리프노드에 ",(0,r.jsx)(s.code,{children:"1~17"})," 데이터가 이어져있고, 각각의 트리는 데이터의 주소를 이진탐색할 수 있도록 구성되어 있음을 확인 가능합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["데이터가 insert 될 때 어떻게 동작하는지는 ",(0,r.jsx)(s.a,{href:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html",children:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"})," 에서 확인 가능합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"B+Tree 는 기본적으로 아래의 성격을 가집니다."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"삽입/삭제 시 항상 균형을 유지"}),"\n",(0,r.jsx)(s.li,{children:"하나의 노드가 여러개의 자식 노드를 가지는 것 가능"}),"\n",(0,r.jsx)(s.li,{children:"리프노드에만 데이터가 존재하기에 연속적인 데이터에 접근 시에 장점을 가짐"}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"mysql-의-btree",children:"mysql 의 B+Tree"}),"\n",(0,r.jsxs)(s.p,{children:["mysql의 인덱스는 B+Tree 의 리프노드에 PK를 가지고 있습니다. 참고로 Oracle 에서는 B+Tree 의 리프노드에 데이터의 주소를 가지고 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["이렇게 PK를 B+Tree 의 리프노드에 가지고 있는 것은 PK를 클러스터드 인덱스로 가지고 있기에 용이한 구조임을 유추할 수 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["아래의 그림은 ",(0,r.jsx)(s.code,{children:"Canada"})," 라는 인덱스 키를 검색할 때 B-Tree 의 주소를 어떻게 검색하는지 절차를 그림으로 그린 것입니다."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{placeholder:"blur",src:h})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"클러스터-인덱스",children:"클러스터 인덱스"}),"\n",(0,r.jsxs)(s.p,{children:["MySQL 의 PK 는 클러스터 인덱스로 이루어져 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["MySQL 의 PK가 아닌 일반 인덱스 역시 MySQL의 B+Tree 는 PK기반으로 구성하기에 일반 인덱스 역시 내부적으로는 PK를 가지며 클러스터 인덱스로 구성되어 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"클러스터-인덱스-장단점",children:"클러스터 인덱스, 장단점"}),"\n",(0,r.jsx)(s.p,{children:"클러스터 인덱스라는 것은 인덱스가 특정 범위를 두고 모여 있는 인덱스라는 것을 의미합니다. 클러스터 인덱스의 장점은 데이터의 지역성이 이뤄지기 때문에 데이터 조회시 조금 더 빠른 성능을 낼 수 있다는 점입니다. 반면, 데이터가 새로 들어올 때 재조정을 해야 할수도 있기 때문에 클러스터 인덱스가 리빌드 될 때의 오버헤드는 단점이 될 수 있습니다."}),"\n",(0,r.jsx)(s.p,{children:"예를 들어 아래와 같은 데이터가 있다고 해보겠습니다."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"클러스터 인덱스 키"}),(0,r.jsx)(s.th,{children:"데이터 주소"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"B"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"300"}),(0,r.jsx)(s.td,{children:"C"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"D"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["이 상황에서 아래와 같이 새로운 데이터인 ",(0,r.jsx)(s.code,{children:"400"})," 이 들어오는 경우에는 ",(0,r.jsx)(s.code,{children:"500"})," 에 해당하는 클러스터 인덱스 키에 대한 데이터 주소는 재배치 됩니다."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"클러스터 인덱스 키"}),(0,r.jsx)(s.th,{children:"데이터 주소"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"100"}),(0,r.jsx)(s.td,{children:"A"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200"}),(0,r.jsx)(s.td,{children:"B"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"300"}),(0,r.jsx)(s.td,{children:"C"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"400 (새로들어옴)"}),(0,r.jsx)(s.td,{children:"D"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500"}),(0,r.jsx)(s.td,{children:"E"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["이렇게 적은 데이터에서는 조금만 이동되었지만, 데이터가 많아지면 재배치할 데이터들이 많아지게 됩니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h3,{id:"인덱스-역시-pk로-이뤄져-있으며-클러스터-인덱스로-구성",children:"인덱스 역시 PK로 이뤄져 있으며 클러스터 인덱스로 구성"}),"\n",(0,r.jsxs)(s.p,{children:["MySQL 의 PK가 아닌 일반 인덱스 역시 MySQL의 B+Tree 는 PK기반으로 구성하기에 일반 인덱스 역시 내부적으로는 PK를 가지며 클러스터 인덱스로 구성되어 있습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"커버링-인덱스",children:"커버링 인덱스"}),"\n",(0,r.jsxs)(s.p,{children:["커버링 인덱스는 데이터가 담긴 테이블을 직접 접근하지 않고도 인덱스로만 원하는 데이터에 접근할 수 있도록 구성한 인덱스를 의미합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.p,{children:"예를 들어 아래와 같은 데이터가 있다고 해보겠습니다."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"id(PK)"}),(0,r.jsx)(s.th,{children:"ticker"}),(0,r.jsx)(s.th,{children:"market_cap"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"AAPL"}),(0,r.jsx)(s.td,{children:"2.818"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"META"}),(0,r.jsx)(s.td,{children:"1.234"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"MSFT"}),(0,r.jsx)(s.td,{children:"3.049"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"1.97"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["그리고 시가총액인 ",(0,r.jsx)(s.code,{children:"market_cap"})," 에 대한 인덱스가 아래와 같이 구성되어 있다고 해보겠습니다."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"market_cap"}),(0,r.jsx)(s.th,{children:"id(PK)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1.234"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1.97"}),(0,r.jsx)(s.td,{children:"4"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2.818"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3.049"}),(0,r.jsx)(s.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"이 때 아래와 같은 SQL은 테이블을 탐색하지 않고도 인덱스만으로도 원하는 데이터를 인출해올 수 있습니다."}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"아래의 SQL 역시 원본 테이블을 탐색하지 않고도 인덱스만으로도 원하는 데이터를 인출해올 수 있습니다."}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id, market_cap"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"그런데 이때 Ticker 데이터 역시 가져와야 하는 상황이 있습니다. 이런 경우에는 아래와 같은 SQL 을  사용한다면 커버링 인덱스를 거치게 되어서 데이터를 필요한 데이터만 접근해서 조회해오기에 효율적으로 조회할 수 있습니다."}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" A.id, A.ticker, A.market_cap"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols A"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"INNER JOIN"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id, market_cap"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") B"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ON"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" A.id "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" B.id"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["커버링 인덱스를 사용하게 되면 order by, offset, limit 등을 사용하는 것으로 인한 불필요한 데이터 블록에 대한 접근을 커버링 인덱스를 이용해서 최소화할 수 있게 됩니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h2,{id:"인덱스-사용-시-주의해야-하는-점들",children:"인덱스 사용 시 주의해야 하는 점들"}),"\n",(0,r.jsx)(s.p,{children:"인덱스 사용 시 주의해야 할 점은 아래와 같습니다"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"인덱스 필드 가공은 피하는 것이 좋다"}),"\n",(0,r.jsx)(s.li,{children:"복합인덱스 사용시에는 복합된 컬럼을 모두 사용해야만 인덱스를 조회하게 된다"}),"\n",(0,r.jsx)(s.li,{children:"기본적으로 하나의 쿼리는 하나의 인덱스만 탄다"}),"\n"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["SQL에 대해서 인덱스가 동작하지 않는 경우가 있을 수 있기 때문에, 성능이 중요한 쿼리일 경우 ",(0,r.jsx)(s.code,{children:"explain"})," 을 통해서 확인하는 습관을 들이는 것을 추천합니다. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["또한 무작정 인덱스를 사용한다고 해서 항상 성능이 향상된다는 고정관념 역시 탈피해야 하고 무분별한 인덱스 추가작업 인지 역시 충분히 고민을 해봐야 합니다. 인덱스를 사용하면 조회속도에 이점을 얻을 수는 있지만, 새로운 데이터 추가 시에 데이터베이스 내부적으로는 커버링 인덱스, B+Tree 의 데이터 위치들을 재정렬하는 등의 작업들이 일어납니다. 너무 과도한 인덱스 사용보다는 꼭 필요한 필드를 인덱스로 선택해서 사용하는 것을 권장합니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.p,{children:["흔히 인덱스를 사용하는 것에 대해 ",(0,r.jsx)(s.code,{children:"쓰기를 희생하고 조회를 얻는 것"})," 이라는 이야기를 합니다. 이 말을 떠올려서 꼭 필요한 곳에 인덱스를 사용하도록 고민을 해봐야 할 것 같습니다.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"인덱스-필드-가공은-피하는-것이-좋다",children:"인덱스 필드 가공은 피하는 것이 좋다"}),"\n",(0,r.jsx)(s.p,{children:"인덱스 필드를 가공하면 인덱스를 타지 못하게 됩니다."}),"\n",(0,r.jsxs)(s.p,{children:["예를 들어 아래의 테이블이 있다고 하겠습니다. ",(0,r.jsx)(s.code,{children:"market_cap"})," 필드는 ",(0,r.jsx)(s.code,{children:"biginteger"})," 타입으로 선언되어 있습니다."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"id(PK)"}),(0,r.jsx)(s.th,{children:"ticker"}),(0,r.jsx)(s.th,{children:"market_cap (indexed)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"AAPL"}),(0,r.jsx)(s.td,{children:"2.818"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"META"}),(0,r.jsx)(s.td,{children:"1.234"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"MSFT"}),(0,r.jsx)(s.td,{children:"3.049"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"1.97"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"그리고 아래의 쿼리는 인덱스를 타지 못합니다. 자료형이 다르기 때문입니다. 이렇게 자료형이 다른 경우 옵티마이저는 내부적으로  to string 처리를 하게 되어서 인덱스를 통한 검색이 이뤄지지 않습니다."}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'2.818'"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"아래의 쿼리 역시 인덱스를 타지 못합니다. 인덱스 필드를 가공하고 있기 때문입니다."}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"818"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"복합인덱스-사용시에는-복합된-컬럼을-모두-사용해야만-인덱스를-조회하게-된다",children:"복합인덱스 사용시에는 복합된 컬럼을 모두 사용해야만 인덱스를 조회하게 된다"}),"\n",(0,r.jsx)(s.p,{children:"예를 들어 아래와 같은 테이블이 있다고 해보겠습니다. 복합 인덱스로 ticker, marekt_cap 기반의 복합인덱스를 구성했습니다."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"id(PK)"}),(0,r.jsx)(s.th,{children:"ticker(indexed a1)"}),(0,r.jsx)(s.th,{children:"market_cap (indexed a2)"}),(0,r.jsx)(s.th,{children:"ceo"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"AAPL"}),(0,r.jsx)(s.td,{children:"2.818"}),(0,r.jsx)(s.td,{children:"Tim Cook"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"META"}),(0,r.jsx)(s.td,{children:"1.234"}),(0,r.jsx)(s.td,{children:"Mark Zuckerberg"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"MSFT"}),(0,r.jsx)(s.td,{children:"3.049"}),(0,r.jsx)(s.td,{children:"Satya Nadella"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"1.97"}),(0,r.jsx)(s.td,{children:"Jen-Hsun Huang"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.p,{children:"이 경우 인덱스는 아래와 같이 구성됩니다."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"id(PK)"}),(0,r.jsx)(s.th,{children:"ticker(indexed a1)"}),(0,r.jsx)(s.th,{children:"market_cap (indexed a2)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"AAPL"}),(0,r.jsx)(s.td,{children:"2.818"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"META"}),(0,r.jsx)(s.td,{children:"1.234"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"MSFT"}),(0,r.jsx)(s.td,{children:"3.049"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"NVDA"}),(0,r.jsx)(s.td,{children:"1.97"})]})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["복합인덱스 조합은 ",(0,r.jsx)(s.code,{children:"{ ticker, market_cap }"})," 조합에 대해서 ",(0,r.jsx)(s.code,{children:"ticker"})," 에 대해 먼저 정렬된 행에 대해서 ",(0,r.jsx)(s.code,{children:"market_cap"})," 에 대해 정렬한 결과를 인덱스로 가지고 있는데, 만약 아래의 쿼리를 수행한다면 아래의 쿼리는 인덱스를 거치지 못하게 됩니다."]}),"\n",(0,r.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SELECT"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" id, ticker, market_cap"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"FROM"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" stock_symbols"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"WHERE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" market_cap "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(s.p,{children:["왜냐하면 ",(0,r.jsx)(s.code,{children:"market_cap"})," 은 복합 키 내에 보조적인 역할을 할 뿐이기에 ",(0,r.jsx)(s.code,{children:"market_cap > 1"})," 처럼 ",(0,r.jsx)(s.code,{children:"market_cap"})," 필드 하나에 대해서만 위치를 조회하는 것은 전혀 인덱스를 거치지 못합니다."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s.h3,{id:"기본적으로-하나의-쿼리는-하나의-인덱스만-탄다",children:"기본적으로 하나의 쿼리는 하나의 인덱스만 탄다"}),"\n",(0,r.jsxs)(s.p,{children:["하나의 쿼리는 하나의 인덱스만 탑니다. 여러 인덱스 테이블을 동시에 탐색하는 것은 기본적으로는 불가능하며, ",(0,r.jsx)(s.code,{children:"index merge hint"})," 를 사용한다면 가능하기는 합니다. 따라서 ",(0,r.jsx)(s.code,{children:"where"})," , ",(0,r.jsx)(s.code,{children:"order by"})," , ",(0,r.jsx)(s.code,{children:"group by"})," 를 사용하는 쿼리에서는 인덱스를 잘 고려해야 합니다.",(0,r.jsx)("br",{})]})]})}let x={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/database-index/notitle.mdx",route:"/database-index/notitle",timestamp:1708857106e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"database-index",route:"/database-index",children:[{kind:"MdxPage",name:"cluster-index",route:"/database-index/cluster-index"},{kind:"MdxPage",name:"covering-index",route:"/database-index/covering-index"},{kind:"MdxPage",name:"important-things-when-using-index",route:"/database-index/important-things-when-using-index"},{kind:"MdxPage",name:"notitle",route:"/database-index/notitle"},{kind:"MdxPage",name:"what-is-index",route:"/database-index/what-is-index"},{kind:"Meta",data:{notitle:"무제","what-is-index":"index 기본 원리, 자료구조","cluster-index":"클러스터 인덱스","covering-index":"커버링 인덱스","important-things-when-using-index":"인덱스의 주의해야 할 점들"}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"Folder",name:"primary-things",route:"/primary-things",children:[{kind:"MdxPage",name:"normalization-denormalization",route:"/primary-things/normalization-denormalization"},{kind:"Meta",data:{"normalization-denormalization":"정규화, 비정규화"}}]},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{"what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙","transaction-isolation-level":"트랜잭션 격리수준"}}]},{kind:"Meta",data:{index:"Introduction","memory-disk-wal":"Memory vs Disk, WAL","database-index":"인덱스",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Notitle",headings:a},pageNextRoute:"/database-index/notitle",nextraLayout:l.ZP,themeConfig:d.Z};var o=(0,i.j)(x)},8426:function(e,s,n){"use strict";var r=n(5893);n(7294);let i={logo:(0,r.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};s.Z=i},5789:function(){}},function(e){e.O(0,[774,796,888,179],function(){return e(e.s=1809)}),_N_E=e.O()}]);