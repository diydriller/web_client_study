# DOM(Docment Object Model)

## 1. 정의
* 웹페이지의 모든 내용을 객체로 나타내는것으로 html 요소간 계층관계를 반영하여 노드들을 트리구조로 나타낸다.  
* 프로그래밍 언어가 dom에 접근 할 수 있는 API를 제공해서 문서 구조 , 내용 , 스타일을 변경할 수 있게 한다.
### 노드
* document node : dom 트리의 최상위 노드로 document객체이다.
* element node : html 요소를 나타내는 노드로 html 요소간 계층관계를 통해 웹페이지의 구조를 나타낸다.
* attribute node : html 요소의 attribute를 나타내는 노드로 element node와 형제관계를 이룬다.
* text node : html 요소의 text를 나타내는 노드로 element node와 자식관계를 이룬다.

## 2. 브라우저 렌더링 과정
1) html 파일을 순차적으로 파싱하며 dom을 생성한다.
    * css를 로드하는 링크태그나 스타일 태그를 만나면 dom 생성을 중단하고 csssom을 생성한다.
    * script 태그를 만나면 dom 생성을 중단하고 제어권을 rendering engine에서 javascript engine으로 넘기며 javascipt 코드를 실행한다.
2) csssom과 dom을 합쳐서 render tree를 만든다.
3) 레이아웃을 만들고 페인팅을 한다.

## 3. virtual dom
* dom에 변화가 생기면 렌더링과정을 반복하기때문에 비효율적이다.
* virtual dom은 이전 dom과 내용을 비교해서 바뀐 부분만 실제 dom에 반영하기때문에
불필요한 렌더링을 줄일 수 있다.

## 인터뷰
### css 태그를 상단에 위치시키고 script 태그를 하단에 위치시키는 이유?
* html 파서는 css 태그를 만나면 중단되기때문에 상단에 위치시킨다. script 태그는 html 파서를 중단시키고 생성되지 않은 dom을 조작하는 것은 불가능하기때문에 하단에 위치시킨다.




