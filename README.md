## 1. 페이지 이동
- useNavigate() 또는 Link 사용.
## 2. 404 페이지 설정
- Path="*": 존재하지 않는 경로에 대해 404 페이지 설정.
## 3. Nested Routes (서브 경로)
- 여러 페이지가 필요한 경우 예: /about/member
- <Outlet>: Nested routes 안의 element를 어디에 보여줄지 표기.
## 4. URL 파라미터
<Route path="/detail:id" element={<Detail shoes={shoes} />} />: :id에 아무 값이나 넣어도 Detail 페이지로 전환됨.

## 5. 스타일 컴포넌트
- `npm install styled-components`
- **장점**:
  1. CSS 파일을 따로 열 필요 없음.
  2. 스타일이 다른 JS 파일로 오염되지 않음.
  3. 오염 방지를 위해 `컴포넌트명.module.css`를 사용하여 컴포넌트 단위로 스타일링 가능.
  4. 페이지 로딩 시간 단축.
- **단점**:
  - CSS 관리가 어려움.

## 컴포넌트의 Lifecycle
1. **Mount**: 페이지에 장착
2. **Update**: 가끔 업데이트
3. **Unmount**: 필요 없으면 제거

## useEffect
- **사용 시점**: mount, update 시 코드 실행.
- **특징**:
  - `useEffect` 안의 코드는 HTML 렌더링 후에 동작.
  - 복잡한 연산이 필요한 경우 유용.
  - 주로 서버에서 데이터 가져오기, 타이머 장착 등.

### 예제 코드:
```javascript
useEffect(() => {
  // 서버로 데이터 요청하는 코드
  return () => {
    // 기존 데이터 요청 제거 코드
  }
}, []);
```

## 에러 해결
- alert is not a function TypeError: alert is not a function 오류 발생 시 window.alert로 변경하여 해결.

## 리액트와 서버 통신
- AJAX 사용 시 `npm install axios` 설치.

## 전환 애니메이션
1. 애니메이션 동작 전 `className` 만들기.
2. 애니메이션 동작 후 `className` 만들기.
3. `className`에 `transition` 속성 추가.
4. 원하는 시점에 2번 `className` 부착.

## Props 대안
- **Props**는 부모 자식 간에 전송 가능하지만, 중첩된 컴포넌트가 있으면 두 번 전송해야 함.
- **해결 방법**:
  1. **Context API**: 리액트 기본 문법이나 실무에서 잘 사용하지 않음.
  2. **Redux** 등 외부 라이브러리 사용.

## Redux 사용법
1. `npm install @reduxjs/toolkit react-redux` 설치.
2. `store.js` 파일 생성.
3. `index.js` 파일에 `<Provider store={store}>` 추가.

## Redux 사용하는 이유
- 컴포넌트 간 state 공유가 편해짐.

## Redux의 state 변경법
1. State를 수정해주는 함수 만들기.
2. store.js에 해당 함수 실행 요청 (`export`).
3. `Dispatch`로 state 변경 함수 호출.

## Local Storage vs Session Storage

### Local Storage
- **Key : value** 형태로 저장 가능 `{name:kim}`
- 최대 5MB 문자까지만 저장 가능
- 사이트 재 접속해도 남아 있음 (브라우저 청소하면 삭제됨)

**사용법**
- 저장: `localStorage.setItem('이름', '값')`
- 출력: `localStorage.getItem('이름')`
- 삭제: `localStorage.removeItem('이름')`
- 수정: 꺼내서 수정 후 다시 저장

**Array/Object 저장 방법**
- 직접 저장 불가. JSON으로 변환 후 저장: `JSON.stringify(arrayOrObject)`

### Session Storage
- 브라우저를 끄면 데이터 날아감

## React-query
- 설치: `npm install react-query`

## Lazy Import
리액트 코드 빌드 시, 모든 컴포넌트가 하나의 파일로 묶여 로딩 속도가 느려질 수 있음.

**해결 방법**
- 필요할 때만 import: `React.lazy`
- 예시:
  ```javascript
  const Detail = React.lazy(() => import('./Detail'));
  const Cart = React.lazy(() => import('./Cart'));
  ```
- 이렇게 하면 해당 컴포넌트가 필요할 때만 로드하여 초기 로딩 속도 개선

## Memo

컴포넌트의 불필요한 재렌더링을 방지. props가 변할 때만 재렌더링함.

### 사용법
1. `memo`를 import.
2. 원하는 컴포넌트를 `memo`로 감싸서 정의.

### 예시
```javascript
import React, { memo } from 'react';

const MyComponent = memo(function MyComponent(props) {
  // 컴포넌트 내용
});
```