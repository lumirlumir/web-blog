<!-- markdownlint-disable MD003 MD004 MD024 MD029 MD033 MD035 MD046 MD049 MD050 MD055-->
# 마크다운(***Markdown***)의 모든 것

***Markdown*** 파일의 확장자는 `.md`로 끝난다. 개발을 하다 보면 `README.md`라는 이름의 파일을 한 번쯤 만나게 되는데, 이것이 가장 대표적인 ***Markdown*** 파일이라 할 수 있다.

***Markdown***과 비슷하지만 문법이 좀 더 복잡한 `.adoc` 확장자의 ***AsciiDoc*** 문법도 있으며, 좀 더 다양한 형태의 문서를 만들 수 있다.
다만, 문법이 훨씬 복잡하고 지원 플랫폼이 적어 사용에 제약이 많다.

## 1. ***Markdown***에 대하여

### 1-1. ***Markdown***이란?

[***Markdown***](https://www.markdownguide.org/getting-started/)은 텍스트 기반의 마크업 언어로 2004년 존 그루버에 의해 만들어졌다. 쉽게 읽고 쓸 수 있으며, ***HTML***로 변환이 용이하다. 특수문자와 기호를 이용한 간단한 구조의 문법을 사용하여, 웹에서 보다 빠르게 콘텐츠를 작성하고 직관적으로 인식할 수 있다.

***Markdown***이 각광받기 시작한 이유는 ***Github*** 덕분이다. ***Repository***에 대한 정보를 기록하는 `README.md`는 ***Github***를 사용하는 사람이라면 가장 먼저 접하게 되는 문서이다. ***Markdown***을 통해 설치방법, 소스코드 설명, 이슈 등을 간단하게 기록하고 가독성을 높일 수 있다는 강점이 부각되면서 점점 여러 곳으로 퍼지게 된다.

***Markdown***에는 ***HTML Tag***를 삽입하여 활용할 수 있다. (단, 모든 ***Tag***가 지원되는 것은 아니다.) 문서상에 더욱 풍부한 표현을 원할 때 활용하면 좋다.

이때, ***Markdown*** 문서의 표현 방식은 ***CSS***설정에 따라 달라진다. 따라서, 어떤 플랫폼(***Github***, ***VScode***, ***Velog***, ***Discord*** 등등)을 사용하느냐에 따라 표현 방식에 차이가 있을 수 있다.

### 1-2. 마크다운의 장ㆍ단점

#### 1-2-1. 장점

- 문법이 쉽고 간결하다.
- 모든 것에 사용할 수 있다. (웹 사이트, 문서, 메모 등)
- 별도의 도구 없이 대부분의 환경에서 작성 가능하다. (메모장에서도 가능)
- 다양한 형태로 변환이 가능하다.
- 텍스트로 저장되기 때문에 용량이 적어 보관이 용이하다.
- 텍스트이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
- 지원하는 프로그램과 플랫폼이 다양하다.

#### 1-2-2. 단점

- 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
- 모든 ***HTML*** 문법을 대체하지 못한다.

## 2. ***Markdown*** 사용법(문법)

각 ***Markdown*** 문법은 ***HTML*** 태그로 변환되어 브라우저에 출력된다. 모든 ***HTML*** 태그를 지원하는 것은 아니며, 일부 중요한 문법만을 제공한다.

### 2-1. 제목(Headings)

`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` 태그로 변환되는 제목을 표현한다.

책에서 목차는 여러 단계가 있지만 책 제목은 하나인 것처럼, 하나의 마크다운 파일에서는 하나의 `<h1>`(대제목)만을 사용해야 한다.

#### 2-1-1. ATX style

글머리는 1-6까지 지원한다. (`<h1>`-`<h6>`)

`#`으로 시작한다.

- 입력

  ```text
  # This is ATX style H1
  ## This is ATX style H2
  ### This is ATX style H3
  #### This is ATX style H4
  ##### This is ATX style H5
  ###### This is ATX style H6
  ####### This is ATX style H7(지원되지 않음)
  ```

- 출력

  <!-- markdownlint-disable-next-line -->
  # This is ATX style H1
  <!-- markdownlint-disable-next-line -->
  ## This is ATX style H2
  <!-- markdownlint-disable-next-line -->
  ### This is ATX style H3
  <!-- markdownlint-disable-next-line -->
  #### This is ATX style H4
  <!-- markdownlint-disable-next-line -->
  ##### This is ATX style H5
  <!-- markdownlint-disable-next-line -->
  ###### This is ATX style H6
  <!-- markdownlint-disable-next-line -->
  ####### This is H7(지원되지 않음)

#### 2-1-2. Closed ATX style

글머리는 1-6까지 지원한다. (`<h1>`-`<h6>`)

`#`으로 시작하고, `#`으로 끝난다.

- 입력

  ```text
  # This is Closed ATX style H1 #
  ## This is Closed ATX style H2 ##
  ### This is Closed ATX style H3 ###
  #### This is Closed ATX style H4 ####
  ##### This is Closed ATX style H5 #####
  ###### This is Closed ATX style H6 ######
  ####### This is Closed ATX style H7(지원되지 않음) #######
  ```

- 출력

  <!-- markdownlint-disable-next-line -->
  # This is Closed ATX style H1 #
  <!-- markdownlint-disable-next-line -->
  ## This is Closed ATX style H2 ##
  <!-- markdownlint-disable-next-line -->
  ### This is Closed ATX style H3 ###
  <!-- markdownlint-disable-next-line -->
  #### This is Closed ATX style H4 ####
  <!-- markdownlint-disable-next-line -->
  ##### This is Closed ATX style H5 #####
  <!-- markdownlint-disable-next-line -->
  ###### This is Closed ATX style H6 ######
  <!-- markdownlint-disable-next-line -->
  ####### This is Closed ATX style H7(지원되지 않음) #######

#### 2-1-3. Setext style

글머리는 1-2까지만 지원한다. (`<h1>`-`<h2>`)

`=`과 `-`를 이용한다.

##### 2-1-3-1. 큰 제목: `<h1>`

`=`의 개수는 상관 없다.

- 입력

  ```text
  This is Setext style H1
  =============

  This is Setext style H1
  =
  ```

- 출력

  <!-- markdownlint-disable-next-line -->
  This is Setext style H1
  =============

  <!-- markdownlint-disable-next-line -->
  This is Setext style H1
  =

<!-- markdownlint-disable-next-line -->
##### 2-1-3-2. 작은 제목: `<h2>`

`-`의 개수는 상관 없다.

- 입력

  ```text
  This is Setext style H2
  -------------

  This is Setext style H2
  -
  ```

- 출력

  <!-- markdownlint-disable-next-line -->
  This is Setext style H2
  -------------

  <!-- markdownlint-disable-next-line -->
  This is Setext style H2
  -

### 2-2. 줄 바꿈(Line Breaks)

줄 바꿈(Line Breaks)을 위해서는 문장 마지막에 2칸 이상 띄어쓰기(<code>  </code>)를 입력하거나, 문장 마지막에 ***HTML*** `<br>` 태그를 직접 입력한다.

#### 2-2-1. Markdown style

문장 마지막에 2칸 이상 띄어쓰기(<code>  </code>)를 한다.

- 입력

  ```text
  - 줄 바꿈을 하기 위해서는 문장 마지막에 2칸 이상 띄어쓰기 해야한다.
    이렇게

  - 줄 바꿈을 하기 위해서는 문장 마지막에 2칸 이상 띄어쓰기 해야한다.__\\ 띄어쓰기
    이렇게
  ```

- 출력

  - 줄 바꿈을 하기 위해서는 문장 마지막에 2칸 이상 띄어쓰기 해야한다.
    이렇게

  - 줄 바꿈을 하기 위해서는 문장 마지막에 2칸 이상 띄어쓰기 해야한다.  \
    이렇게

#### 2-2-2. HTML style

***HTML*** `<br>` 태그를 직접 입력한다.

- 입력

  ```html
  - 줄 바꿈을 하기 위해서는 문장 마지막에 `<br>` 태그를 입력 해야한다.
    이렇게

  - 줄 바꿈을 하기 위해서는 문장 마지막에 `<br>` 태그를 입력 해야한다. <br>
    이렇게
  ```

- 출력

  - 줄 바꿈을 하기 위해서는 문장 마지막에 `<br>` 태그를 입력 해야한다.
    이렇게

  - 줄 바꿈을 하기 위해서는 문장 마지막에 `<br>` 태그를 입력 해야한다. <br>
    이렇게

### 2-3. 수평선(Horizontal Rules)

`-`, `_`, `*` 각 기호를 3개 이상 입력해, `<hr>` 태그로 변환되는 '수평선(Horizontal Rules)'을 표현한다.

단, `-`를 사용할 경우, 제목(Headings)으로 인식할 수 있으니, 이전 라인은 비워두어야 한다.

***Markdown*** 문서를 미리보기로 출력할 때, *페이지 나누기* 용도로 많이 사용한다.

#### 2-3-1. `-` style

- 입력

  ```text
  ---

  - - -

  -----
  ```

- 출력

  ---

  - - -

  -----

#### 2-3-2. `_` style

- 입력

  ```text
  ___

  _ _ _

  _____
  ```

- 출력

  ___

  _ _ _

  _____

#### 2-3-3. `*` style

- 입력

  ```text
  ***

  * * *

  *****
  ```

- 출력

  ***

  * * *

  *****

### 2-4. 주석(Comments)

`[//]: #`, `<!-- -->` 기호를 사용해, 주석(Comment)을 표현한다.

#### 2-4-1. Markdown style

`[//]: #` 기호를 사용한다.

- 입력

  ```markdown
  -- 시작 --

  [//]: # (안녕하세요.)
  [//]: # "안녕하세요."
  [//]: # '안녕하세요.'

  -- 종료 --
  ```

- 출력

  -- 시작 --

  [//]: # (안녕하세요.)
  [//]: # "안녕하세요."
  [//]: # '안녕하세요.'

  -- 종료 --

#### 2-4-2. HTML style

***HTML***에서 이용하는 `<!-- -->` 기호를 사용한다.

- 입력

  ```html
  -- 시작 --

  <!-- (안녕하세요.) -->
  <!-- "안녕하세요." -->
  <!-- '안녕하세요.' -->

  -- 종료 --
  ```

- 출력

  -- 시작 --

  <!-- (안녕하세요.) -->
  <!-- "안녕하세요." -->
  <!-- '안녕하세요.' -->

  -- 종료 --

### 2-5. 강조(Emphasis)

각각 `<em>`(기울임), `<strong>`(두꺼움), `<del>`(취소선) 태그로 변환되는 '강조(Emphasis)'를 표현한다.

***Markdown***에서 지원하지 않는 밑줄을 추가하려면, ***HTML*** `<u></u>`(밑줄) 태그를 직접 사용할 수 있다.

#### 2-5-1. 기울임(이태릭체)

`*` 또는 `_` 기호로 감싼다.

- 입력

  ```text
  - *single asterisk*
  - _single underscore_
  ```

- 출력

  - *single asterisk*
  - _single underscore_

#### 2-5-2. 두꺼움(진하게)

`**` 또는 `__` 기호로 감싼다.

- 입력

  ```text
  - **double asterisks**
  - __double underscores__
  ```

- 출력

  - **double asterisks**
  - __double underscores__

#### 2-5-3. 취소선

`~~` 기호로 감싼다.

- 입력

  ```text
  - ~~double tildes~~
  ```

- 출력
  - ~~double tildes~~

#### 2-5-4. 혼합

위에서 설명한 모든 내용을 섞어서 사용할 수 있다.

- 입력

  ```text
  - ~~***Mixed***~~
  ```

- 출력
  - ~~***Mixed***~~

### 2-6. 인용문(Blockquotes)

`<blockquote>` 태그로 변환되는 '인용문(Blockquotes)'을 표현한다.

`>` 기호를 사용하며, 중첩된 인용문(Nested blockquotes)을 만들 수 있다.

인용문 내부에 다른 ***Markdown*** 요소를 포함할 수 있다. (제목, 리스트, 코드 블록 등등)

- 입력

  ```text
  > This is a first blockquote.
  > > This is a second blockquote.
  > > > This is a third blockquote.
  ```

- 출력

  > This is a first blockquote.
  > > This is a second blockquote.
  > > > This is a third blockquote.

- 입력

  ```text
  > ### This is H3
  >
  > - List
  >
  >   ```JavaScript
  >   code
  >   ```
  ```

- 출력

  > ### This is H3
  >
  > - List
  >
  >   ```JavaScript
  >   code
  >   ```
  >

### 2-7. 목록(Lists)

`<ol>`, `<ul>`, `<li>` 태그로 변환되는 '목록(List)'을 표현한다.

`1.` 로 시작하는 항목을 작성하면 `<ol>`로 변환되며, `-`로 시작하는 항목을 작성하면 `<ul>`로 변환된다. 이때, 순서 있는 목록과 순서 없는 목록을 혼합하여 사용해도 된다.

들여쓰기를 통해 하위 목록을 작성할 수 있다.

#### 2-7-1. 순서 있는 목록(Ordered Lists)

숫자(`0, 1, 2, 3, ...`)와 점(`.`)을 사용한다. 이때, `0.`부터 시작해도 되고 `1.`부터 시작해도 된다.

들여쓰기를 하면 모양이 바뀐다. (***Github*** 기준 숫자, 로마자, 알파벳 순서)

어떤 번호를 입력해도 순서가 오름차순으로 정의된다.

- 입력

  ```markdown
  1. 첫번째
      1. 첫번째의 첫번째
      2. 첫번째의 두번째
  2. 두번째
  3. 세번째
  ```

- 출력(출력을 들여쓰기 한 채로 작성하여, 숫자가 아닌 로마자로 시작하는 것.)

  1. 첫번째
      1. 첫번째의 첫번째
      2. 첫번째의 두번째
  2. 두번째
  3. 세번째

- 입력

  ```markdown
  1. 첫번째
      1. 첫번째의 첫번째
      1. 첫번째의 두번째
  3. 세번째
  2. 두번째
  ```

- 출력

  1. 첫번째
      1. 첫번째의 첫번째
      1. 첫번째의 두번째
  3. 세번째
  2. 두번째

#### 2-7-2. 순서 없는 목록(Unordered Lists)

`-`, `*`, `+` 기호를 사용한다.

들여쓰기를 하면 모양이 바뀐다.

혼합해서 사용하는 것도 가능하다.

- 입력

  ```markdown
  - 빨강
    - 녹색
      - 파랑

  * 빨강
    * 녹색
      * 파랑

  + 빨강
    + 녹색
      + 파랑
  ```

- 출력
  - 빨강
    - 녹색
      - 파랑

  * 빨강
    * 녹색
      * 파랑

  + 빨강
    + 녹색
      + 파랑

- 입력

  ```markdown
  * 1단계
    - 2단계
      + 3단계
        + 4단계
  ```

- 출력

  * 1단계
    - 2단계
      + 3단계
        + 4단계

### 2-8. 링크(Links, Anchor)

`<a>`로 변환되는 '링크(Links, Anchor)'를 표현한다.

이때, '링크'는 현재 탭에서 열리는 것이 기본이지만, 새 탭에서 열리게 할 수도 있다.

#### 2-8-1. 외부 링크

2가지 형식이 존재한다.

`"설명 Optional Title"`의 내용은 해당 링크 위로 마우스를 ***Hovering*** 하였을 때 나타난다.

```markdown
[제목 Title](링크 Link)
```

```markdown
[제목 Title](링크 Link "설명 Optional Title")
```

- 입력

  ```markdown
  - [Google](https://www.google.com)
  - [Naver](https://www.naver.com)

  - [Google](https://www.google.com "Hello Google")
  - [Naver](https://www.naver.com "Hello Naver")
  ```

- 출력

  - [Google](https://www.google.com)
  - [Naver](https://www.naver.com)

  - [Google](https://www.google.com "Hello Google")
  - [Naver](https://www.naver.com "Hello Naver")

#### 2-8-2. 참조 링크

2가지 형식이 존재한다.

```markdown
[제목 Title][참조 Reference]

[참조 Reference]: 링크 Link
```

```markdown
[제목 Title][참조 Reference]

[참조 Reference]: 링크 Link "설명 Optional Title"
```

- 입력

  ```text
  - [Google][GoogleRef1]
  - [Naver][NaverRef1]

  - [Google][GoogleRef2]
  - [Naver][NaverRef2]

  [GoogleRef1]: https://www.google.com
  [NaverRef1]: https://www.naver.com

  [GoogleRef2]: https://www.google.com "Hello Google"
  [NaverRef2]: https://www.naver.com "Hello Naver"
  ```

- 출력

  - [Google][GoogleRef1]
  - [Naver][NaverRef1]

  - [Google][GoogleRef2]
  - [Naver][NaverRef2]

  [GoogleRef1]: https://www.google.com
  [NaverRef1]: https://www.naver.com

  [GoogleRef2]: https://www.google.com "Hello Google"
  [NaverRef2]: https://www.naver.com "Hello Naver"

- 입력

  ```text
  - 문서 안에서 [참조 링크]를 그대로 사용할 수도 있다.

  [참조 링크]: https://www.naver.com "Hello Naver"
  ```

- 출력

  - 문서 안에서 [참조 링크]를 그대로 사용할 수도 있다.

  [참조 링크]: https://www.naver.com "Hello Naver"

#### 2-8-3. 자동 연결

문서 내 `URL`이나 `E-mail Address`는 꺽쇠 괄호(`<>`) 없이도 자동으로 링크를 형성한다.

꺾쇠 괄호(`<>`, Angle Brackets)안에 `URL`이나 `E-mail Address`를 집어넣어도 된다.

- 입력

  ```markdown
  - 외부링크: https://www.google.com
  - 외부링크: <https://www.google.com>
  - 이메일링크: address@example.com
  - 이메일링크: <address@example.com>
  ```

- 출력
  <!-- markdownlint-disable-next-line -->
  - 외부링크: https://www.google.com
  - 외부링크: <https://www.google.com>
  <!-- markdownlint-disable-next-line -->
  - 이메일링크: address@example.com
  - 이메일링크: <address@example.com>

#### 2-8-4. 내부(해시) 링크

##### 2-8-4-1. Markdown style

```markdown
[제목 Title](#이동할제목heading)
```

괄호 안의 링크를 쓸 때, 띄어쓰기는 `-`로 연결하고, 영어는 모두 소문자로 작성해야 한다.

- 입력

  ```text
  - [1. ***Markdown***에 대하여](#1-markdown에-대하여)

  - [2. ***Markdown*** 사용법(문법)](#2-markdown-사용법문법)

  - [3. ***Markdown*** 에디터](#3-markdown-에디터)
  ```

- 출력

  - [1. ***Markdown***에 대하여](#1-markdown에-대하여)

  - [2. ***Markdown*** 사용법(문법)](#2-markdown-사용법문법)

  - [3. ***Markdown*** 에디터](#3-markdown-에디터)

##### 2-8-4-2. HTML style

- 입력

  ```html
  <a id="bookmark">bookmark</a>

  [Link to bookmark](#bookmark)
  ```

- 출력

  <a id="bookmark">bookmark</a>

  [Link to bookmark](#bookmark)

### 2-9. 이미지(Images)

`<img>`로 변환되는 '이미지(Images)'를 표현한다.

링크와 문법이 비슷하지만, 앞에 `!`를 추가해야 한다.

#### 2-9-1. Markdown style

##### 2-9-1-1. 외부 이미지

```markdown
![대체 텍스트 Alt text](링크 Link)
```

```markdown
![대체 텍스트 Alt text](링크 Link "설명 Optional Title")
```

- 입력

  ```markdown
  ![석촌호수 러버덕](1.png)
  ![석촌호수 러버덕](1.png "RubberDuck")
  ```

- 출력

  ![석촌호수 러버덕](1.png)
  ![석촌호수 러버덕](1.png "RubberDuck")

##### 2-9-1-2. 참조 이미지

```markdown
![대체 텍스트 Alt text][참조 Reference]

[참조 Reference]: 링크 Link
```

```markdown
![대체 텍스트 Alt text][참조 Reference]

[참조 Reference]: 링크 Link "설명 Optional Title"
```

- 입력

  ```markdown
  ![석촌호수 러버덕][Ref1]
  ![석촌호수 러버덕][Ref2]

  [Ref1]: 1.png
  [Ref2]: 1.png "RubberDuck"
  ```

- 출력
  ![석촌호수 러버덕][Ref1]
  ![석촌호수 러버덕][Ref2]

  [Ref1]: 1.png
  [Ref2]: 1.png "RubberDuck"

##### 2-9-1-3. 이미지에 링크 추가

***Markdown style*** 이미지 문법 코드를 링크 문법 코드로 감싸준다.

- 입력

  ```markdown
  [![석촌호수 러버덕](1.png "RubberDuck Wiki")](https://en.wikipedia.org/wiki/Rubber_duck)
  ```

- 출력
  [![석촌호수 러버덕](1.png "RubberDuck Wiki")](https://en.wikipedia.org/wiki/Rubber_duck)

#### 2-9-2. HTML style

***Markdown style***은 사이즈 조절 기능이 없기 때문에, ***HTML*** `<img src="" width="" height="" title="" alt=""></img>` 태그를 이용한다.

- 입력

  ```html
  <img src="1.png" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br>
  <img src="1.png" width="40%" height="30%" title="%(비율) 크기 설정" alt="RubberDuck"></img>
  ```

- 출력

  <img src="1.png" width="450px" height="300px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br>
  <img src="1.png" width="40%" height="30%" title="%(비율) 크기 설정" alt="RubberDuck"></img>

### 2-10. 코드(Codes)

`<pre>`, `<code>` 태그로 변환되는 '코드(Codes)'를 표현한다.

주로 <code>\`</code>(백틱) 기호를 사용한다.

#### 2-10-1. 인라인(Inline)

강조할 코드를 <code>\`</code>(백틱) 기호로 감싸 '인라인(Inline)' 코드를 표현한다.

- 입력

  ```markdown
  `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있다.
  ```

- 출력

  `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있다.

#### 2-10-2. 블록(Block)

##### 2-10-2-1. Markdown style

###### 2-10-2-1-1. <code>\`</code>(백틱) 또는 `~` 기호 사용

<code>\`</code> 또는 `~`을 3번 이상 입력하고 언어(코드) 이름을 명시해, 코드 '블록(Block)'를 표현한다. 코드 블록의 시작 <code>\`</code>(`~`) 개수와 종료 <code>\`</code>(`~`) 개수는 같아야 한다.

***Github***에서는 언어(코드) 이름을 명시하면, [문법강조(Syntax highlighting)](https://docs.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks#syntax-highlighting)가 가능하다.

- 입력

  <pre><code>```java
  public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
  ```</code></pre>

- 출력

  ```java
  public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
  ```

###### 2-10-2-1-2. 들여쓰기 사용

'4개의 공백' 또는 '하나의 탭'으로 들여쓰기를 만나면 변환되기 시작하여, 들여쓰지 않은 행을 만날때까지 변환이 계속된다.

- 입력

  ```text
  This is a normal paragraph:

      This is a code block.

  end code block.
  ```

- 출력

  This is a normal paragraph:

      This is a code block.

  end code block.

한줄 띄어쓰지 않으면 인식이 제대로 안되는 문제가 발생한다.

- 입력

  ```text
  This is a normal paragraph:
      This is a code block.
  end code block.
  ```

- 출력

  This is a normal paragraph:
      This is a code block.
  end code block.

##### 2-10-2-2. HTML style

`<pre><code>{code}</code></pre>` 태그를 이용한다.

- 입력

  ```html
  <pre>
  <code>
  public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
  </code>
  </pre>
  ```

- 출력

  <pre><code>public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }</code></pre>

### 2-11. Backslash(`\`) Escapes

특수문자를 표현할 때, 표시될 문자 앞에 `\`를 넣고 특수문자를 쓰면 된다.

예를 들어, 백틱(<code>\`</code>) 기호는 코드를 표현할 때 사용하는 문법 기능을 가지므로, 백틱 기호 자체를 출력하려면 기호에 이스케이프(Escape) 처리가 필요하다.

아래와 같이 `\` 기호와 함께 작성하면, 백틱 기호를 출력할 수 있다. 또한 <code>\`</code>에서 인라인 코드 강조를 위해, `<code>` 태그를 활용할 수도 있다.

- 입력

  ```markdown
  - \`
  - <code>\`</code>
  ```

- 출력

  - \`
  - <code>\`</code>

- 입력

  ```markdown
  * 특수문자 출력안됨
  - 특수문자 출력안됨

  \* 특수문자 출력

  \- 특수문자 출력
  ```

- 출력

  * 특수문자 출력안됨
  - 특수문자 출력안됨

  \* 특수문자 출력

  \- 특수문자 출력

- 입력

  ```markdown
  \*literal asterisks\*

  \#hash mark\#

  \[square brackets\]

  \|vertical bar\|
  ```

- 출력

  \*literal asterisks\*

  \#hash mark\#

  \[square brackets\]

  \|vertical bar\|

### 2-12. 표(Table)

`<table>` 태그로 변환되는 '표(Table)'를 표현한다.

헤더와 셀을 구분하기 위해, 3개 이상의 `-`(Hyphen/Dash) 기호를 사용한다.

헤더와 셀을 구분하면서, `:`(Colons) 기호로 셀(열/칸) 안의 내용을 정렬할 수 있다.

- `---`, `:---`: 좌측 정렬
- `:---:`: 가운데 정렬
- `---:`: 우측 정렬

가장 좌측과 가장 우측에 있는 `|`(Vertical Bar) 기호는 생략 가능하다. (플랫폼에 따라 생략 불가능한 경우도 존재.)

- 입력

  ```text
  테이블 생성

  |헤더1|헤더2|헤더3|헤더4|
  |---|---|---|---|
  |셀1|셀2|셀3|셀4|
  |셀5|셀6|셀7|셀8|
  |셀9|셀10|셀11|셀12|

  헤더1|헤더2|헤더3|헤더4
  ---|---|---|---
  셀1|셀2|셀3|셀4
  셀5|셀6|셀7|셀8
  셀9|셀10|셀11|셀12
  ```

- 출력

  테이블 생성

  |헤더1|헤더2|헤더3|헤더4|
  |---|---|---|---|
  |셀1|셀2|셀3|셀4|
  |셀5|셀6|셀7|셀8|
  |셀9|셀10|셀11|셀12|

  헤더1|헤더2|헤더3|헤더4
  ---|---|---|---
  셀1|셀2|셀3|셀4
  셀5|셀6|셀7|셀8
  셀9|셀10|셀11|셀12

- 입력

  ```markdown
  테이블 정렬

  헤더1|헤더2|헤더3
  :---|:---:|---:
  Left|Center|Right
  셀1|셀2|셀3
  셀4|셀5|셀6
  셀7|셀8|셀9
  ```

- 출력

  테이블 정렬

  헤더1|헤더2|헤더3
  :---|:---:|---:
  Left|Center|Right
  셀1|셀2|셀3
  셀4|셀5|셀6
  셀7|셀8|셀9

### 2-13. 체크 리스트(Check Lists)

줄 앞에 `- [x]`를 써서 완료된 리스트 표시.

줄 앞에 `- [ ]`를 써서 미완료된 리스트 표시.

체크 리스트 안에서 강조 외에 여러 기능을 사용할 수 있다.

일반적으로, ***Github***를 비롯한 몇몇 플랫폼에서만 지원하는 기능이다. (모든 플랫폼에서 지원하는 기능이 아니다.)

- 입력

  ```markdown
  - [x] this is a completed item
  - [ ] this is an incompleted item
  ```

- 출력

  - [x] this is a completed item
  - [ ] this is an incompleted item

- 입력

  ```markdown
  - [x] @mentions, #refs, [links](link), **formatting**, and <del>tags</del> supported
  ```

- 출력

  - [x] @mentions, #refs, [links](link), **formatting**, and <del>tags</del> supported

### 2-14. 수학 식(수식, 표현식)

***Github***를 비롯한 소수의 플랫폼에서만 지원하는 기능이다. (2022년 5월 19일 부터 ***Github***에서 수학 식 렌더링을 공식 제공한다.)

***Github***의 수학 식 렌더링 기능은 ***JavaScript***기반 디스플레이 엔진 오픈소스인 ***MathJax***를 사용한다. ***MathJax***는 광범위한 ***LaTeX*** 매크로와 유용한 접근성 확장을 지원한다.

렌더링 된 결과는 ***CHTML*** 또는 ***SVG*** 형식을 지원한다. 즉, 수학 식을 ***LaTex*** 문법으로 작성했을 경우 ***HTML*** 또는 ***SVG*** 형태로 변경된다.

또한, 다이어그램 렌더링은 ***Github Issues***, ***Github Discussions***, ***Pull Request***, ***Wiki*** 및 ***Markdown*** 파일에서 사용할 수 있다.

`inline` 혹은 `block` 형태로 작성할 수 있다.

#### 2-14-1. 인라인(Inline)

식을 달러(`$`) 기호로 묶으면 된다.

참고로, 달러 기호를 수학 식과 동일한 줄에 문자로 표시하려면, 구분 기호가 아닌 `$`를 이스케이프하여 줄이 올바르게 렌더링되도록 해야 한다. (수학 식 내에서 명시적 `$` 앞에 `\` 기호를 추가한다.)

- 입력

  ```text
  This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$
  ```

- 출력

  This sentence uses `$` delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$

#### 2-14-2. 블록(Block)

주변 텍스트와 별개로 수학 식을 추가하기 위해 사용한다.

수학 식을 블록으로 추가하려면, 새 줄을 시작하고 식을 이중 달러(`$$`) 기호로 구분한다.

- 입력

  ```text
  **The Cauchy-Schwarz Inequality**
  $$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$
  ```

- 출력

  **The Cauchy-Schwarz Inequality**
  $$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

### 2-15. 원시 HTML

마크다운 문법 대신, ***HTML***을 직접 사용(Raw HTML)할 수 있다.
앞서 살펴본 밑줄 `<u></u>` 추가와 같이, 마크다운 문법에서 지원하지 않는 기능을 사용할 때 유용하다. 단, 모든 HTML 태그가 지원되는 것은 아니니 유의해야 한다.

## 3. ***Markdown*** 에디터

### 3-1. 메모장

***Markdown***은 문법이 쉬워, 에디터를 사용할 필요 없이 메모장에서 작업을 해도 무리가 없다. 다만, 작업 속도 향상을 위해 ***VScode***와 같은 에디터를 사용할 것을 추천한다.

에디터는 ***Markdown***을 실시간 렌더링하여 화면상에 보여주며, 단축키 등을 활용하여 빠르게 사용할 수 있다.

### 3-2. VScode

#### 3-2-1. Original

***VScode***에 아무런 확장을 설치하지 않더라도, 기본 적으로 제공되는 ***Markdown Preview***를 이용할 수 있다. 다만, ***Github***의 ***Markdown***에서 지원되는 일부 기능을 사용할 수 없고, 테마 스타일도 약간 다르다.

#### 3-2-2. Extension: Dark Github Markdown Pack

***VScode***에서 ***Github***의 ***Markdown*** 테마 스타일로 ***Markdown Preview***를 이용할 수 있게 해주는 확장 팩이다. 아래는 해당 확장 팩에 대한 설명이다.

- Dark Github Markdown Preview — CSS that makes the Markdown preview match Github's dark themed style.
- Markdown Emoji — Adds :emoji: support to the Markdown preview.
- Markdown Checkboxes — Adds - [ ] tasklist support to the Markdown preview
- Markdown yaml Preamble — Adds support for rendering the yaml frontmatter as a table. Be sure to set "markdown.previewFrontMatter": "show"

### 3-3. Typora

군더더기 없는 디자인이 매력적인 무료 에디터이다. 일일이 타이핑했던 문법을 자동으로 완성하여 작업시간 단축할 수 있다. ***Markdown***을 처음 사용하는 분들에게 추천한다.

## 4. ***Markdown*** 활용

***Markdown***은 지원되는 모든 곳에서 사용할 수 있다. 예를 들어, ***Github***, ***Velog*** 등의 블로그 서비스, ***WordPress***, ***Slack***(슬랙), ***Notion***(노션), ***Discord***  등이 있다.

또한, ***MS Word***에도 적용할 수 있다. View 영역의 항목을 그대로 붙여 넣거나, ***HTML*** 내보내기 등으로 생성한 파일을 불러오는 형태로 사용한다. 적용한 ***Heading***을 ***MS Word***가 읽어 들이면서 목차에 적용하기 때문에, 목차를 손쉽게 만들 수 있다.

그리고, 마크다운의 각 문법은 ***HTML***로 변환되어 ***CSS***와 함께 출력되기 때문에, 화면에 표시되는 모양은 사용하는 곳의 스타일 구성에 따라 달라진다. 따라서, 눈에 보이는 스타일이 아닌 각 문법의 의미에 맞게 사용해야 한다.

## Reference

- <https://www.heropy.dev/p/B74sNE>
- <https://jaime-note.tistory.com/343>
- <https://gist.github.com/ihoneymon/652be052a0727ad59601>
- <https://inpa.tistory.com/entry/MarkDown-%F0%9F%93%9A-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%AC%B8%EB%B2%95-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC#table_%ED%85%8C%EC%9D%B4%EB%B8%94>
- <https://github.com/DavidAnson/markdownlint/tree/v0.33.0?tab=readme-ov-file#readme>
- <https://docs.github.com/ko/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions>
