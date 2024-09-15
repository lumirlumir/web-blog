# `path` 모듈

`path`란, Node.js의 기본 내장 모듈이다.

파일과 폴더의 경로 작업을 위한 기능을 제공한다.

## 1. 불러오기

아래와 같은 코드를 통해 `path` 모듈을 불러올 수 있다.

```javascript
const path = require("path");
```

## 2. Method

### 2-1. `path.normalize()`

경로를 가장 짧은 방식으로 최적화하여 저장한다.

- 입력

```javascript
const path = require("path");

const myPath = path.normalize("/this/is//a/my/.././path/normalize");

console.log(myPath);
```

- 출력

```text
/this/is/a/path/normalize
```

### 2-2. `path.join()`

String 형식의 인자들을 현재 운영체제에 맞게 경로를 지정한다.

- 입력

```javascript
const path = require("path");

const myPath = path.join("/this", "is", "a", "////path//", "join");

console.log(myPath);
```

- 출력

```text
/this/is/a/path/join
```

### 2-3. `path.resolve()`

String형식의 인자들을 합쳐서, 운영체제에 맞게 경로를 지정함과 동시에, 최적화까지 같이 한다.

- 입력

```javascript
const path = require("path");

const myPath = path.resolve("/this", "is/a", "../.", "path", "resolve");

console.log(myPath);
```

- 출력

```text
/this/is/path/resolve
```

- 입력

```javascript
const path = require("path");

const myPath = path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");

console.log(myPath);
```

- 출력

```text
현재위치/wwwroot/static_files/gif/image.gif
```

### 2-4. `path.dirname()`

현재 작업 폴더 경로 출력하기.

- 입력

```javascript
const path = require("path");

const myPath = path.dirname("/foo/bar/baz/asdf/image.png");

console.log(myPath);
```

- 출력

```text
/foo/bar/baz/asdf
```

### 2-5. `path.basename()`

현재 작업 파일 이름 출력하기.

- 입력

```javascript
const path = require("path");

const myPath = path.basename("/foo/bar/baz/asdf/image.png");

console.log(myPath);
```

- 출력

```text
image.png
```

### 2-6. `path.extname()`

파일 형식 가져오기. 확장자를 반환한다.

- 입력

```javascript
const path = require("path");

const myPath = path.extname("/home/user/dir/file.txt");

console.log(myPath);
```

- 출력

```text
.txt
```

### 2-7. `path.parse()`

경로를 분석해서, 형식에 따라 나누고 분류한다.

- 입력

```javascript
const path = require("path");

const myPath = path.parse("/home/user/dir/file.txt");

console.log(myPath);
```

- 출력

```text
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
```

## Reference

- <https://nodejs.org/api/path.html>
- <https://defineall.tistory.com/655>
