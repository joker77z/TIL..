
internet = web이 아니였다.
internet service에서
메일이나 파일전송이나 검색이나 채팅이 가능했지만
이제는 web에서 다 가능하다.

## WWW(World Wide Web)
웹의 창시자는 `팀 버너스 리`다.

### 최초의 웹은 어떻게 탄생했을까?
connect.연결을 위해서
처음엔 이동할 때 자료보관(관리)를 쉽게하기 위해.

WonderWorld 

<br>

## Back-End / Front-End
### BE
Server, Database, Application Layer(뒷단영역)

### FE
Client, Web Browser, Presentation Layer(화면영역)

<br>

## Front-End
javascript를 다 잘한다고 하면 html, css로 차별을 둘 수 있다.

### HTML
건강한 신체

### CSS
스타일링

### Javascript
스마트한 두뇌

> 프레임워크 vs 라이브러리 차이를 명확히 알아두자.
리액트는 프레임워크인가 라이브러리인가?

<Br>

## Web standard
Wolrd Wide Web Consortiums

<b>제프리 젤드만의 웹표준 가이드 :</b>
웹브라우저의 역사, 전쟁 일들을 재밌게 볼 수 있다.

<br>

## Web Accessibility
접근성의 힘은 보편함이 있다.
장애인이건 비장애인이건 누구든 웹에 접근할 수 있게 보장해야 한다.

Tim Berners Lee -

> 항상 사용자 입장에서 생각할 수 있어야 한다.
일례로 구독서비스 회사에 입사하는 한 학생이 장애인을 들을 위해 접근성을 이렇게 개선하고 싶다. 라고해서 합격했다고 한다.

시각 장애 - 전맹(아예 보지 못한다 - 소리 나오게), 저시력(반응형)

이외에 청각 장애, 지체 장애, 뇌변병 장애도 있다.

## 환경에 대한 이해

다양한 플랫폼, SEO 등

> 접근성은 누가 요구하지 않아도 개발해놔야 나중에 덩치 커졌을 때 힘든 것을 막을 수 있다.

> 버튼은 버튼으로 만든다.

> 접근성이 법으로 제정되어 있지만 잘 지켜지지 않는다.

# 2번째 시간

카카오나 네이버는 크로스 브라우징을 더 따진다.
IE, chrome, firefox, safari
다양한 브라우저 체크 필요.

## 익스텐션 다운받기

### lighthouse 
사용방법 직접 알아보자.

### VisBug
가고싶은 업체 UI클론코딩할 때 매우 유용하다. 사이즈 측정 가능.

### IE Tab
IE에서 어떻게 보이는지 확인 가능.

### Gitzip For Github
깃헙 레포에서 전체 다운이 아니라 일부만 다운받을 수 있게 해준다.

# 세번째 시간

lorem 한글로 사용하기
view - 커맨드팔렛 - extension open folder에 다운받은 폴더 넣기.


./css/main.md 하고 cmd 클릭하면 파일이 생성된다.

```html
<!DOCTYPE html>
<!-- 이 부분에 ko도 가능 ko-KR도 가능. -->
<html lang="ko-KR"> 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹카페</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    
</body>
</html>
```
HTML5 / html 4.0.1 / xhtml 1.0 셋다 표준이다.
가장 마지막에 표준된 것이 HTML5이다.

대기업의 경우 보수적이어서 ES5를 사용한다. ES6를 100% 믿기 힘들기 때문이다.

html5가 업데이트 굉장히 안됬는데 flash같은 써드파티(플러그인) ria기술이 붙었다. (reach 인터넷 어플리케이션)
html5에서 플러그인 없이 어플리케이션, 플래쉬가 구동된다. ria기술같이 표준이 아닌 것은 배제되는 분위기 됌.

XML은 Extensible 로 시작한다.
원래 데이터 전송할 때 표준으로 사용했다.

XML은 확장이 된다. 이걸 HTML에 적용한 것.
느슨한 약점을 개선하기 위해 등장.

싱글사이드태그 : 속성을 안넣을수도있다.

html3.2때 center font 이런 시멘틱이 아닌 꾸미는 태그가 등장. 프레젠테이션 규칙이 들어갔다.
구조와 디자인이 섞였다.

4버전에서 center 등 태그는 권장하지 않는 것으로 하면서 css로 분리하기 시작.

html은 너무 느슨해서 협업이 힘들다 (소대문자를 섞어쓸 수 있기 때문)
XML은 소문자만 허용한다. 시작하면반드시종료. 속성이 있으면 값 가져야하는 등 엄격하다.
이런 방식으로 HTML을 재정의 한다. xhtml 1.0으로 재정의


<!-- 
    DTD3가지 모드 존재했다. 5는 하나로 통합되있다.
 -->

http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd 이 사이트로 들어가보면 다양한 태그를 볼 수 있다.


Html5는 컨텐츠 모델이 중요하다.
a는 인터렉티브, 트랜스페런트(투명) 모델이다.

html5는 계속 변하고 있다.

제목을 만나는 순간 바운더리(윤곽선)이 결정나는데 아웃라인알고리즘이라는 개념이 html5에 도입된다.

html5에서 가장 크게 변한 부분이다. 컨텐츠 모델, 아웃라인 알고리즘.

API : 다양한 것이 있는데 application cache 써서 오프라인에서도 미리 봤던것을 계속볼수있게해줌.

뒤에 닫혀있는 태그를 권하고, 소문자만 쓰는 것을 권한다. 두번째 /> 엠프티 엘리먼트 태그 권유.
논리속성 html방식 위에것을 권유.
html은 "표를 사용.

엔티티 네임이나 엔티티 코드로 변환해서 마크업하는게 좋다.
&는 &amp; &#38;

<!DOCTYPE html> html5은 버전번호를 명시하지않고 심플하게 이렇게만 되있다.

meta charset="utf-8" 이 방법 ㄱㅊ

- mdn도 좋지만
- html표준 리딩 스탠다드로 찾아봐야 한다.


# 네번째 시간
웹카페 만들기

둘 중 하나를 많이 사용한다.
레이아웃 자유도는 4단이 훨씬 높다.


## 3단 레이아웃 구조
헤더(네비게이션을 쓴다면 헤더영역안에 포함시켜서 배치)
메인
푸터

## 4단 레이아웃 구조
헤더
네비게이션
메인
푸터

3단으로 만들어도 충분하다고 판단.
상단 네비게이션 있는데만 header

꽃이깜빡거리는 부분은 헤더가 아니다. 이것을 처리하기 위해

헤더(+네비게이션)
비주얼
메인
푸터

커피와 우측에 있는 문구는 푸터는 아닌 것 같다. 슬로건이라는 레이아웃을 추가해줄거다.

3단 레이아웃 - > 5단으로 만든다. 컨텐츠로 분석.

헤더
비주얼
메인
슬로건
푸터

시안으로 베이스 하다보면 컨텐츠 구조관점이랑 비주얼 관점이랑 차이가 날 때가 많다. 컨텐츠 관점으로 시도해보고 비주얼 관점으로도 만들어보고 속도높이고 장단점도 비교해보면 좋다.

container로 이 5단 레이아웃을 묶기로 해봤다.
container쓰면 flex, grid로 배치할 때 좋다.
만약 container가 없으면 body한테 줘야된다.
혹시 flex, grid를 쓰지 않더라도 공통적인 것을 컨트롤할 때 유리하다.

container의미의 html태그는 없다. 이 때 division을 사용하자.
div를 쓰고 클래스는 container를 준다. 되도록이면 id를 사용하지 말고 class로 사용하자.
나중에 유지보수가 힘들어진다.

id는 form에서 중요한 역할, wai-aria를 사용할 때도 중요.
wai-aria는 접근성을 위해 보조기기를 사용하는 사람들을 위해.
탐색이 용이해진다.(header, main, footer article, 이런거쓰면)
div는 탐색이 어렵다. 
이미 만든 페이지가 있는데 div로 다 만들었다면 div [role="banner"]를 할당해주면
role = waiarea의 역할을 해준다.

근데 header쓰는게 간단하니까 그냥 header썼으면 좋겠다.

.점 뒤에는 클래스명이다.

    div.container
        header.header(header는 여러번 사용 가능.)
            nav.navigation 
            <!-- gnb : global navigation bar / lnb : local navigation bar 를 쓰기도 한다. -->

    div.visual
    main.main(html5에서 새롭게 추가된 태그. 한번만 사용.)
    article.slogan(article은 블로그 글 올릴 때 포스트 같은거. 독립된 정보.)
    <!-- section 과 article 둘 중 하나로 사용하면 된다. 크게 비중두지 말자. -->
    footer.footer
section안에 header도 쓸 수 있다. 본문의 헤더라는 의미.

이게바로 <b>구조설계</b>다. 초반에는 구조를 그려보고 하자. 공부할 때는 꼭 짜보자.

.container>header.header+div.visual+main.main+article.slogan+footer.footer

.container 로 만들어주고

header.header{헤더}


전체적인 틀은 만들었으니
header에 있는 전체정보를 마크업한다.

성격별로 구분하는 것이 필요하다.

1. 로고
> h1 > a(부모) -> img태그(자식)를 사용할 것이다.
전체를 대상으로 h1~h6을 짜기로 해서 h1을 여기다 사용하겠다.
꼭 이렇게 안해도 되고 메인에서 사용하기로 했다면 메인에서 h1을 사용하면 된다.

> img에 alt를 넣지 않으면 크롬 익스텐션 중에 헤딩스맵에 보면 1 - 하고 아무것도없다.

> 대체 텍스트에는 KBD Bank라고 쓰면 크브드라고 읽는다. K.B.D. Bank라고 써야 한다.

> 대체 텍스트에 이미지라는 말 넣지마라. 스크린 리더가 이미지라고 읽어준다. Web Cafe 이런식으로 띄어쓰기 해서 써주면 된다. 링크도 링크라고 자동으로 읽어준다.

> 홈 ~ 커맨드팔레트 - emmet에서 ul.member-service>li*>a[href="test"]

2. 텍스트링크모음 (홈/로그인/회원가입 등)
> 링크 하나 하나가 item이다. a태그로 묶는데 이 a태그를 li로 묶고 이걸 ul로 또 묶는다.
즉, ul(부모).memberservice > li(하나의 자식) > a 홈.
           > li(하나의 자식) > a 로그인.

PC(타이틀 케이스)
CC
KC
SC

MemberService (단어첫글자. 파스칼케이스, 타이틀케이스)
memberService (카멜케이스)
member-Service (Kebab?Case)
member_service (스네이크 케이스, 케밥 케이스. 이번에 웹카페에서는 이 방법을 사용하자.)
리액트에서는 파스칼케이스르 사용할 거임.

3. 메뉴(네비게이션)

순서도 중요하다.
만약 메뉴보다 로그인이 먼저 로그인해야된다는 기준으로 
중요한 서비스가 더 위로 한다.


웹 카페 - 개발자모드(익스텐션) - CSS를 제거해보자.


점진적인 향상 (프로그레시브 인헨스먼트) 반대도 있다. 조사해보자.
베이스 기술부터 만들면서 쌓아나가는 것.


### 시멘틱 마크업

사람도 이해하는 코드

기계도 이해하는 코드

나아가 기계처리가 가능한 코드.



CSS를 약간 써본다.
그래서 일단 메인으로 넘어간다.
메뉴구성은 복잡해서 내일한다.

3열로 나눈다.

    main
        div.group.g1
        div.group.g2
        div.group.g3

