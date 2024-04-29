(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{8548:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transaction/transactional-annotation",function(){return e(5353)}])},5353:function(n,s,e){"use strict";e.r(s),e.d(s,{__toc:function(){return c}});var a=e(5893),i=e(2673),l=e(373),r=e(8426);e(9128);var t=e(2643);let c=[{depth:2,value:"스프링의 @Transactional",id:"스프링의-transactional"},{depth:2,value:"SQL Transaction",id:"sql-transaction"},{depth:2,value:"TransactionTemplate, @Transactional",id:"transactiontemplate-transactional"},{depth:2,value:"@Transactional",id:"transactional"},{depth:3,value:"스프링의 @Transactional",id:"스프링의-transactional-1"},{depth:3,value:"@Transactional 메서드는 프록시 객체에서 실행",id:"transactional-메서드는-프록시-객체에서-실행"},{depth:3,value:"@Transactional 사용 시 내부호출, 상속관계에 유의",id:"transactional-사용-시-내부호출-상속관계에-유의"},{depth:2,value:"Exception 발생 시 스프링의 커밋/롤백 정책",id:"exception-발생-시-스프링의-커밋롤백-정책"},{depth:2,value:"@Transactional 의 옵션들",id:"transactional-의-옵션들"},{depth:3,value:"롤백",id:"롤백"},{depth:3,value:"isolation",id:"isolation"},{depth:3,value:"timeout",id:"timeout"},{depth:3,value:"readOnly",id:"readonly"},{depth:2,value:"@Transactional 기반 테스트",id:"transactional-기반-테스트"},{depth:3,value:"테스트코드 작성시 사용하는 @Transactional",id:"테스트코드-작성시-사용하는-transactional"},{depth:3,value:"@Commint, @Rollback",id:"commint-rollback"},{depth:3,value:"테스트 코드 실행 시 Database",id:"테스트-코드-실행-시-database"},{depth:4,value:"h2 memory Database",id:"h2-memory-database"},{depth:4,value:"TestContainers",id:"testcontainers"},{depth:3,value:"트랜잭션 단위 테스트는 어떤식으로 하는지",id:"트랜잭션-단위-테스트는-어떤식으로-하는지"},{depth:4,value:"행위 기반 검증",id:"행위-기반-검증"},{depth:4,value:"결과 기반 검증",id:"결과-기반-검증"}];function _createMdxContent(n){let s=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",blockquote:"blockquote",a:"a",strong:"strong",h4:"h4"},(0,t.a)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"스프링의-transactional",children:"스프링의 @Transactional"}),"\n",(0,a.jsx)(s.p,{children:"아래와 같이 댓글을 insert 하고, 집계 테이블을 카운트하는 SQL 이 있다고 해보겠습니다. 댓글 추가 시에는 본문에 대한 댓글 집계 테이블을 업데이트 해줍니다."}),"\n",(0,a.jsx)(s.pre,{"data-language":"sql","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"sql","data-theme":"default",children:[(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"START TRANSACTION"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- (1) 댓글 작성 "})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"INSERT INTO"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" comment ("})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    title, content, author_id, updated_dt"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"VALUES"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Hello'"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Great Hello World'"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'2024-02-28'"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- (2) 원글에 대한 댓글 개수 카운팅"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"INSERT INTO"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" content_comment_cnt("})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    content_id, comment_cnt"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"VALUES"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"ON"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" DUPLICATE "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"KEY"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"UPDATE"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"     comment_cnt "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" comment_cnt "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- (3) 사용자 활동 기록 추가"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"INSERT INTO"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" user_activity_history("})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    activity_type, created_dt"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"VALUES"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'CREATE_COMMENT'"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'2024-02-28 19:30:30'"})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:" "}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"COMMIT"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["(1) 까지는 런타임 에러 없이 잘 수행되었다고 가정하겠습니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["(2) 에서는 댓글 개수 카운팅을 진행해서 본문에 대한 댓글 개수를 업데이트 해줍니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["(3) 에서는 사용자 활동 기록을 추가합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["그런데 만약 ",(0,a.jsx)(s.code,{children:"(3)"})," 에서 테이블에 데이터를 insert 하는 도중에 ",(0,a.jsx)(s.code,{children:"activity_type"})," 의 글자수 제한을 넘어서서 INSERT 에러가 났을 경우에는 어떻게 해야 하는 것일까요?",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["사용자 활동 기록이 중요하고, 활동기록 없이는 댓글 역시도 의미가 없는 비즈니스 규칙을 세워둔 상태라면 같은 트랜잭션에 있는 (1) 댓글 작성, (2) 원글에 대한 댓글 개수 카운팅, (3) 사용자 활동 기록 추가가 모두 롤백되어야 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["이렇게 하나의 트랜잭션 안에서 여러 연산을 수행할 때 하나의 트랜잭션에 있는 연산들은 마치 하나의 연산인 것처럼 하나가 실패하면 모두 실패해서 롤백처리해야 하는 것을 트랜잭션의 원자성이라는 개념이라고 이야기합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.h2,{id:"sql-transaction",children:"SQL Transaction"}),"\n",(0,a.jsxs)(s.p,{children:["SQL 로도 Transaction 을 수행할 수 있습니다. 예를 들면 아래와 같이 ",(0,a.jsx)(s.code,{children:"START TRANSACTION"})," 과 ",(0,a.jsx)(s.code,{children:"COMMIT"})," 사이에 필요한 SQL을 작성해주면 됩니다."]}),"\n",(0,a.jsx)(s.pre,{"data-language":"SQL","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"SQL","data-theme":"default",children:[(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"START TRANSACTION;"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"// 필요한 연산들 작성"})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"COMMIT;"})})]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"transactiontemplate-transactional",children:"TransactionTemplate, @Transactional"}),"\n",(0,a.jsx)(s.p,{children:"스프링에서는 Transaction 을 처리할 때 전처리, 후처리(커밋, 롤백, 자원회수 등)코드로 인한 보일러 플레이트 코드들이 양산되지 않고 효과적으로 애플리케이션의 코드 들이 관리될 수 있도록 아래의 두가지 방식으로 트랜잭션 기능을 제공합니다."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"TransactionTemplate 에 람다 형태로 후처리를 위한 callback 메서드를 전달"}),"\n",(0,a.jsx)(s.li,{children:"@Transactional 기반의 선언형 트랜잭션 처리 코드 사용"}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"transactional",children:"@Transactional"}),"\n",(0,a.jsxs)(s.p,{children:["사실 이번 문서 페이지에 ",(0,a.jsx)(s.code,{children:"@Transactional"})," 을 정리할지말지 굉장히 고민했습니다. 기본적인 원칙들을 정리할 때 필요한 예제들도 많고 짧게 정리하고 넘어가면 또 뭔가 이상하기도 해서였습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["고민을 거듭해본 결과 이번 문서에서는 가급적 간단한 내용들만을 다루기로 했습니다. MySQL 이라는 주제에서 벗어날 수도 있기 때문에 추후 별도의 jpa, querydsl 개념을 정리하는 카테고리를 정리할지 고민해봐야 할 것 같습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.h3,{id:"스프링의-transactional-1",children:"스프링의 @Transactional"}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 은 javax 에서 제공하는 @Transactional 도 있고 Spring 에서 제공하는 @Transactional 도 있습니다. 스프링의 @Transactional 은 javax 에서 제공하는 @Transactional 에 비해 제공되는 기능이나 트랜잭션 전파 옵션 역시 다양하고 강력하게 제공되고 있기 때문에 가급적 스프링의 @Transactional 을 사용하는 것을 권장 드립니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"transactional-메서드는-프록시-객체에서-실행",children:"@Transactional 메서드는 프록시 객체에서 실행"}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 을 명시한 메서드는 스프링에 의해서 내부적으로는 해당 메서드가 속한 클래스를 상속(extends)받은 새로운 확장 클래스 객체를 생성하고 이것을 프록시 객체로 사용합니다. 이 프록시 객체가 실제로 Database 연산을 수행하고 Commit, Rollback, Resource 반납 등의 연산을 수행하게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["Spring Data 는 AOP 기반으로 ",(0,a.jsx)(s.code,{children:"@Transactional"})," 이 붙은 메서드/클래스/인터페이스에 대해 커넥션획득,Commit, Rollback, 자원반납 등의 작업을 전처리/후처리 하도록 되어 있습니다. 이런 동작으로 인해 간단하게 우리가 작성한 코드의 메서드 위에 ",(0,a.jsx)(s.code,{children:"@Transactional"})," 을 붙이는 것 만으로 해당 메서드 내의 연산은 마치 하나의 연산인 것처럼 원자적 연산을 할 수 있게 됩니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["이번 문서에서는 프록시 객체에 대해 가급적 단순하게 설명했습니다. 실제로는 Proxy 객체를 만들어내는 방식은 조금 복잡합니다. Proxy 라이브러리로 알려진 cglib 등을 이용해서 프록시를 수행합니다.",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"transactional-사용-시-내부호출-상속관계에-유의",children:"@Transactional 사용 시 내부호출, 상속관계에 유의"}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 이 적용된 메서드는 AOP 기반으로 동작하기 때문에 실제 객체를 상속(확장)받은 가짜 객체인 프록시객체를 기반으로 동작합니다. 따라서 해당 프록시의 메서드가 아닌 실제 객체의 메서드를 호출할 경우 @Transactional 이 적용되지 않는 이슈가 발생할 수 있습니다. @Transactional 연산의 원리를 이해하고 있지 못하거나 기억하고 있지 못한 경우 @Transactional 안에 많은 코드를 길게 늘여서 쓰는 안좋은 경우도 있습니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 이 언제 합류하고 언제 별도로 수행할 수 있도록 하는지는 트랜잭션 전파 옵션을 통해 해결이 가능합니다. 트랜잭션 전파 옵션에 관해서는 ",(0,a.jsx)(s.a,{href:"https://chagchagchag.github.io/docs-mysql-essential/transaction/transactional-propagation-option/",children:"트랜잭션 전파옵션"})," 문서를 참고해주세요. @Transactional 에 대한 기본 원칙은 아래와 같습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["클래스레벨에 @Transactional","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["클래스레벨에 @Transactional 이 적용되면 모든 public 메서드에 @Transactional 자동 적용",(0,a.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["@Transactional 덮어쓰기","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"최 하위레벨에서 덮어쓴 선언이 최종 @Transactional 선언이 됩니다."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["인터페이스에 @Transactional","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"인터페이스에도 @Transactional 이 적용될 수 있습니다."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"예외케이스) 같은 클래스 내 non-tx 메서드 → tx 메서드 호출하는 경우"}),(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["트랜잭션이 적용이 안되는 예외 케이스도 있습니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["같은 클래스 내에 @Transactional 을 적용하지 않은 일반 메서드에서 @Transactional 이 적용된 메서드를 호출하는 경우, 프록시 객체에서 트랜잭셔널 메서드를 호출하는 것이 아니라 실제 객체에서 트랜잭셔널 메서드를 호출하게 되기에 트랜잭셔널이 적용되지 않습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.p,{children:"요약해보면, Transactional 이 적용되지 않은 일반 메서드에서 같은 클래스내의 @Transactional 적용된 메서드를 객체 내에서 내부 호출하는 경우 트랜잭셔널 프록시를 거치지 못하게 됩니다. 즉, 이 경우에는 트랜잭셔널이 적용되지 않습니다."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["e.g.","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"가짜 객체의 일반 메서드 A 호출 → 가짜객체는 실제 객체의 일반메서드 A 호출 →실제 객체의 일반 메서드A에서 @Transactional 메서드 AA 호출 → @Transactional 적용 안됨"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["이것과 관련해서는 예전에 정리해둔 문서가 있고 원리를 설명해두긴 했던 문서인데 정말 너무 길어서 여기서 설명하기에는 무리입니다. 추후 별도의 카테고리를 추가해 정리해두도록 하겠습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 이 적용된 메서드는 가급적 테스트 코드를 작성해서 실제로 하나의 트랜잭션안에서 수행됨을 보장하는지를 테스트하는 코드도 꼭 작성하는 것이 필요합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"exception-발생-시-스프링의-커밋롤백-정책",children:"Exception 발생 시 스프링의 커밋/롤백 정책"}),"\n",(0,a.jsx)(s.p,{children:"체크드, 언체크드 예외인지에 따라서 아래와 같이 커밋/롤백 여부가 달라집니다."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["언체크 예외(Unchecked Exception)","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://docs.oracle.com/javase/9/docs/api/java/lang/RuntimeException.html",children:"RuntimeException (Java SE 9 & JDK 9 )"})}),"\n",(0,a.jsx)(s.li,{children:"스프링은 언체크 예외에 대해서 트랜잭션을 롤백합니다."}),"\n",(0,a.jsx)(s.li,{children:"언체크 예외는 복구 불가능한 예외로 여깁니다."}),"\n",(0,a.jsx)(s.li,{children:"e.g. RuntimeException, Error"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["체크 예외(Checked Exception)","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/index.html?java/lang/Exception.html",children:"Exception (Java Platform SE 8 )"})}),"\n",(0,a.jsx)(s.li,{children:"스프링은 체크 예외 발생시 트랜잭션을 롤백하지 않습니다.(커밋합니다.)"}),"\n",(0,a.jsx)(s.li,{children:"복구가 가능한 예외로 간주하고 여기에 대한 처리 코드를 정의해주어야 합니다."}),"\n",(0,a.jsxs)(s.li,{children:["체크 예외는 반드시 ",(0,a.jsx)(s.code,{children:"catch{...}"})," 구문을 작성하기에 ",(0,a.jsx)(s.code,{children:"catch {...}"})," 내에서 복구 로직을 정의해줍니다."]}),"\n",(0,a.jsx)(s.li,{children:"e.g. 주문 시도 시 결제사 API 장애로 인해 실패시 주문은 성공시키고, 결제 대기 중으로 처리해야 할 경우"}),"\n",(0,a.jsx)(s.li,{children:"e.g. Exception.class"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["다만 체크 예외를 사용하더라도 ",(0,a.jsx)(s.code,{children:"@Transactional"})," 에 rollbackFor 옵션에 원하는 예외 클래스를 지정하면, 예외가 발생하면 롤백을 합니다. (오버라이딩하는 느낌이라고 생각하시면 될 것 같습니다.)",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["이러한 언체크 예외, 체크 예외는 아래와 같이 비즈니스 예외, 시스템 예외로 나누어서 기준을 마련해두는 것이 프로젝트 초기 작업 시에 혼선을 방지할 수 있어서 유리합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.p,{children:"비즈니스 예외 (체크 예외)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"비즈니스 예외의 의미가 있을 때 사용"}),"\n",(0,a.jsx)(s.li,{children:"체크예외로 취급"}),"\n",(0,a.jsx)(s.li,{children:"비즈니스 적으로 예외가 발생한 것은 Checked 되어야 한다는 의미."}),"\n",(0,a.jsx)(s.li,{children:"비즈니스 적으로 예외가 발생하는 것은 어떤 상태에서 어떤 이유로 예외가 발생되었는지 기록이 되어야 하기에 예외가 발생하더라도 커밋이 되는 Checked Exception 을 사용합니다. (=체크를 한다는 의미)"}),"\n",(0,a.jsx)(s.li,{children:"e.g. 예를 들어 환전 후 주식을 매수하는 로직이 있을 경우 환전 후 주식을 매수하려는 순간에 환율이 또 바뀌어서 잔고가 부족해서 주식 매수가 안될 때가 있습니다. 이런 경우 Checked Exception 을 통해서 명시적인 예외를 처리한 경우로 들 수 있습니다."}),"\n",(0,a.jsx)(s.li,{children:"e.g. 주문 후 결제 API 실패 시, 주문을 실패한 것이 아니라 결제 대기 중으로 처리해야 할 경우"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"시스템 예외 (언체크 예외)"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"복구할 수 없는 예외는 커밋이 되어야 하지 말아야 함."}),"\n",(0,a.jsx)(s.li,{children:"언체크드 예외로 취급합니다."}),"\n",(0,a.jsx)(s.li,{children:"예를 들면 네트워크 유실 등의 예외가 발생하면, 커밋이 발생하지 않도록 롤백 처리를 해주어야 합니다."}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"transactional-의-옵션들",children:"@Transactional 의 옵션들"}),"\n",(0,a.jsx)(s.h3,{id:"롤백",children:"롤백"}),"\n",(0,a.jsx)(s.p,{children:"스프링은 UncheckedException 발생시에 트랜잭션을 롤백합니다. CheckedException 발생시에는 롤백하지 않고 커밋합니다. 그런데 이런 원칙에 예외를 두는 것 또한 가능합니다. 바로 rollbackFor, noRollbackFor 옵션을 명시해서 특정 익셉션에 대해서 롤백을 하지 않도록 하거나 특정 익셉션에 대해서 롤백을 하도록 지정하는 것이 가능합니다."}),"\n",(0,a.jsx)(s.p,{children:"e.g. 체크드 익셉션이 롤백을 수행하도록 지정"}),"\n",(0,a.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"java","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Transactional"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(rollbackFor "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Exception"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"class"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.p,{children:"e.g. 언체크드 익셉션이 롤백을 수행하지 않도록 지정"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"MyHelloPrintException"})," 은 RuntimeException 클래스를 상속받은 예외 클래스입니다. Runtime Exception 은 UncheckedException 이기에 예외 발생시 롤백을 하겠지만, 아래 코드에서 noRollbackFor 에 ",(0,a.jsx)(s.code,{children:"MyHelloPrintException"})," 을 명시했으므로 ",(0,a.jsx)(s.code,{children:"MyHelloPrintException"})," 이 발생했을 때 예외가 발생하지 않게 됩니다."]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,a.jsx)(s.code,{"data-language":"java","data-theme":"default",children:(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Transactional"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(noRallbackFor "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"MyHelloPrintException"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"class"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"isolation",children:"isolation"}),"\n",(0,a.jsx)(s.p,{children:"트랜잭션 격리수준입니다. 실무에서 실제로 DBMS의 트랜잭션 격리수준을 수정할일은 크게 많지 않습니다."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"DEFAULT"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"데이터베이스에서 설정하는 격리수준에 맞춰서 따라감"}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"DBMS에 설정된 기본 설정값 그대로 그냥 따라감"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"READ_UNCOMMITTED"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"READ_COMMITTED"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"REPEATABLE_READ"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"SERIALIZABLE"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"timeout",children:"timeout"}),"\n",(0,a.jsxs)(s.p,{children:["트랜잭션 수행 시간에 대한 타임아웃을 지정합니다. 특정 시간 동안 트랜잭션에 지정한 작업이 완료되지 않으면 종료되도록 지정합니다. 운영환경에 따라 동작하는 경우도 있고 그렇지 않은 경우도 있기에 직접 확인 후에 사용하는 것이 필요합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"readonly",children:"readOnly"}),"\n",(0,a.jsxs)(s.p,{children:["@Transactional 선언시 ",(0,a.jsx)(s.code,{children:"readOnly = true"})," 를 주면 읽기 전용 트랜잭션 내에서 해당 메서드가 실행됩니다."]}),"\n",(0,a.jsxs)(s.p,{children:["readOnly =true 옵션은 드라이버나 데이터베이스에 따라 정상동작하지 않는 경우가 있습니다. 이 부분에 주의하시기 바랍니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["readOnly 옵션을 사용하면 읽기에서 라이브러리,JDBC드라이버, 데이터베이스 레벨에서 성능 최적화가 발생할 수 있습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["예를 들어 JPA 와 같은 라이브러리에서는 읽기전용트랜잭션에서는 엔티티의 변경감지 기능을 수행하지 ㅇ낳기에 스냅샷 객체를 생성하지 않습니다. 읽기와 수정 작업시에 데이터 괴리가 염려되는 로직에서는 읽기 로직에 readOnly 를 사용하는 것도 좋은 방법입니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h2,{id:"transactional-기반-테스트",children:"@Transactional 기반 테스트"}),"\n",(0,a.jsx)(s.h3,{id:"테스트코드-작성시-사용하는-transactional",children:"테스트코드 작성시 사용하는 @Transactional"}),"\n",(0,a.jsx)(s.p,{children:"테스트 코드에는 일반적으로 아래와 같이 @Transactional 을 적용해주는 편입니다."}),"\n",(0,a.jsx)(s.pre,{"data-language":"java","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"java","data-theme":"default",children:[(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"Transactional"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"@"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"SpringBootTest"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"public"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DoSomeTest"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ... "})]}),"\n",(0,a.jsx)(s.span,{className:"line",children:(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,a.jsxs)(s.p,{children:["테스트 수행시 테스트 클래스에 @Transactional 을 적용하면 해당 테스트에서 Database 에 적용된 사항은 묵시적으로 롤백됩니다. 이렇게 내부적으로 기본옵션으로 롤백되게끔 되어 있는 이유는 하나의 테스트에서 변경한 내용이 그대로 유지될 경우 다른 테스트 수행 시에 테스트에 영향을 줄 수 있기 때문입니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.h3,{id:"commint-rollback",children:"@Commint, @Rollback"}),"\n",(0,a.jsxs)(s.p,{children:["권장되지는 않는 방법이지만, 필요할 경우도 있기에 정리해봅니다. @Transactional 을 명시했더라도 테스트 코드에서 롤백이 되지 않도록 하는 2가지 방법으로는 @Commit, @Rollback(value=false) 를 사용하는 경우를 예로 들 수 있습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"@Transactional"})," 을 테스트 메서드 또는 클래스에 설정했더라도 테스트 메서드에 @Commit 을 적용했을 경우에는 롤백이 수행되지 않고 커밋이 수행되게 됩니다. @Rollback(value = false) 를 메서드/클래스에 적용할 경우에도 테스트 종료 후 롤백 대신 커밋이 호출되게 됩니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"테스트-코드-실행-시-database",children:"테스트 코드 실행 시 Database"}),"\n",(0,a.jsx)(s.h4,{id:"h2-memory-database",children:"h2 memory Database"}),"\n",(0,a.jsx)(s.p,{children:"인메모리 h2 Database 만으로도 테스트가 가능한 경우가 있습니다. 그런 경우라면 아래와 같이 설정해줍니다."}),"\n",(0,a.jsx)(s.pre,{"data-language":"properties","data-theme":"default",children:(0,a.jsxs)(s.code,{"data-language":"properties","data-theme":"default",children:[(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spring.profiles.active="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"test"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spring.datasoruce.url="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"jdbc:h2:mem:db"}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:";DB_CLOSE_DELAY=1"})]}),"\n",(0,a.jsxs)(s.span,{className:"line",children:[(0,a.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"spring.datasource.username="}),(0,a.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"sa"})]})]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"testcontainers",children:"TestContainers"}),"\n",(0,a.jsxs)(s.p,{children:["하지만, JdbcTemplate 이나 MyBatis, Querydsl 을 이용해서 쿼리 최적화가 된 쿼리를 수행할 경우에는 MySQL, PostgreSQL, Oracle 과 같은 DBMS 에서 지원하는 SQL 이 H2 Database 의 일부 문법과 호환이 되지 않아서 h2 Database 에서 진행이 안되는 경우가 있습니다. 이런 경우 testcontainers 를 사용하면 됩니다. 옛날에는 Spring 에서 testcontainers 를 공식으로 채택하지 않아서 불편한점이 있었지만 최근에는 testcontainers 가 spring boot 에서 공식지원됩니다. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["TestContainers 는 Java 코드로도 생성할 수 있지만, docker-compose 기반의 mysql 도커 정의 파일을 만들어두고 이 docker-compose 파일 기반으로 테스트를 할 수 있도록 할수도 있습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["이번 글에서는 글의 지면상 TestContainers 를 사용하는 방법에 대해서는 설명을 생략합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h3,{id:"트랜잭션-단위-테스트는-어떤식으로-하는지",children:"트랜잭션 단위 테스트는 어떤식으로 하는지"}),"\n",(0,a.jsxs)(s.p,{children:["취업을 준비중이라 다른 문서도 정리해야하기에 바빠서 많은 내용을 쓰지는 못하지만 기본적인 내용만 적어보면 이렇습니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(s.h4,{id:"행위-기반-검증",children:"행위 기반 검증"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"when : @Transactional 이 적용된 메서드 내에서 Exception 이 발생하는 상황을 Mockito 를 이용해서 가정"}),"\n",(0,a.jsxs)(s.li,{children:["then : @Transacitonal 이 적용된 해당 메서드 내에서 예외 발생 이후의 그 다음리안의 로직들이 실행되는지를 테스트 코드에서 Mockito.verify() 를 통해 호출여부를 검증","\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"여기까지는 실행되어야 하고"}),"\n",(0,a.jsx)(s.li,{children:"여기까지는 실행이 되지 말아야 한다"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(s.h4,{id:"결과-기반-검증",children:"결과 기반 검증"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"given : @Transactional 이 적용된 메서드 수행 전에 특정 데이터가 저장된 상황을 가정해서 데이터를 저장"}),"\n",(0,a.jsx)(s.li,{children:"when : @Transactional 이 적용된 메서드 내에서 Exception 이 발생하는 상황을 Mockito 를 이용해서 가정"}),"\n",(0,a.jsx)(s.li,{children:"then : @Transacitonal 이 적용된 해당 메서드의 예외 발생 이후에 대해 테스트 코드에서 Assertion 을 통해서 특정값이 원하는 값이 되는지 검증"}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["행위 기반 검증의 경우 내부 메서드의 로직이 변화하면 테스트 메서드가 깨질 경우도 있다는 점을 유념하고 계셔야 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.p,{children:["이 외에도 여러가지 방법이 있을 수 있습니다. 제가 생각해냈던 트랜잭션 단위의 롤백, 커밋을 검증하는 방법들은 위의 두 방법인데요. 이 방법들 외에도 여러 방법들이 있지 않을까 싶습니다. 위의 방법이 정해진 방법은 아닙니다. 실무에서는 꼭 직접 생각해서 관련 코드의 상황에 따라 다른 테스트 코드를 직접 생각해서 만들어내야 합니다.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)("br",{})]})}let o={MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),n.components);return s?(0,a.jsx)(s,{...n,children:(0,a.jsx)(_createMdxContent,{...n})}):_createMdxContent(n)},pageOpts:{filePath:"pages/transaction/transactional-annotation.mdx",route:"/transaction/transactional-annotation",timestamp:1714375028e3,pageMap:[{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"jpa-vs-mybatis-jdbctemplate",route:"/jpa-vs-mybatis-jdbctemplate"},{kind:"MdxPage",name:"memory-disk-wal",route:"/memory-disk-wal"},{kind:"MdxPage",name:"mysql-architecture",route:"/mysql-architecture"},{kind:"MdxPage",name:"mysql-index",route:"/mysql-index"},{kind:"MdxPage",name:"normalization-denormalization",route:"/normalization-denormalization"},{kind:"MdxPage",name:"query-cache",route:"/query-cache"},{kind:"Folder",name:"transaction",route:"/transaction",children:[{kind:"MdxPage",name:"intro",route:"/transaction/intro"},{kind:"MdxPage",name:"transaction-be-careful",route:"/transaction/transaction-be-careful"},{kind:"MdxPage",name:"transaction-isolation-level",route:"/transaction/transaction-isolation-level"},{kind:"MdxPage",name:"transactional-annotation",route:"/transaction/transactional-annotation"},{kind:"MdxPage",name:"transactional-propagation-option",route:"/transaction/transactional-propagation-option"},{kind:"MdxPage",name:"what-is-acid",route:"/transaction/what-is-acid"},{kind:"MdxPage",name:"what-is-mvcc",route:"/transaction/what-is-mvcc"},{kind:"Meta",data:{intro:"소개","what-is-mvcc":"MVCC","what-is-acid":"트랜잭션의 기본 4원칙 (ACID)","transaction-isolation-level":"트랜잭션 격리수준","transaction-be-careful":"트랜잭션 사용시 주의점","transactional-annotation":"스프링의 @Transactional","transactional-propagation-option":"트랜잭션 전파 옵션"}}]},{kind:"MdxPage",name:"uuid-vs-auto-increment",route:"/uuid-vs-auto-increment"},{kind:"Folder",name:"when-you-choose-dbms",route:"/when-you-choose-dbms",children:[{kind:"MdxPage",name:"sometimes-nosql-is-better-choice",route:"/when-you-choose-dbms/sometimes-nosql-is-better-choice"},{kind:"MdxPage",name:"when-you-choose-mysql-postgresql",route:"/when-you-choose-dbms/when-you-choose-mysql-postgresql"},{kind:"Meta",data:{"when-you-choose-mysql-postgresql":"MySQL, PostgreSQL 선택시 고려해볼 것들","sometimes-nosql-is-better-choice":"NoSQL이 더 좋은 선택일 경우 (feat. Subset 패턴)"}}]},{kind:"Meta",data:{index:"Introduction","mysql-index":"인덱스","normalization-denormalization":"정규화, 반정규화",transaction:"트랜잭션","mysql-architecture":"MySQL 구조","memory-disk-wal":"Memory vs Disk, WAL","query-cache":"쿼리 캐시","when-you-choose-dbms":"DBMS 별 선택이 필요할 때","uuid-vs-auto-increment":"UUID vs Auto Increment","jpa-vs-mybatis-jdbctemplate":"JPA vs Mybatis, JdbcTemplate",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"-",newWindow:!0}}}],flexsearch:{codeblocks:!0},title:"Transactional Annotation",headings:c},pageNextRoute:"/transaction/transactional-annotation",nextraLayout:l.ZP,themeConfig:r.Z};s.default=(0,i.j)(o)},8426:function(n,s,e){"use strict";var a=e(5893);e(7294);let i={logo:(0,a.jsx)("span",{children:"My Project"}),project:{link:"https://github.com/chagchagchag/docs-mysql-essential"},docsRepositoryBase:"https://github.com/chagchagchag/docs-mysql-essential",footer:{text:"Nextra Docs Template"}};s.Z=i},5789:function(){}},function(n){n.O(0,[774,796,888,179],function(){return n(n.s=8548)}),_N_E=n.O()}]);