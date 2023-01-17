# wanted-pre-onboarding-challenge-fe-1

<a href="https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api#-%EC%9B%90%ED%8B%B0%EB%93%9C-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9-%EC%B1%8C%EB%A6%B0%EC%A7%80-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%BD%94%EC%8A%A4-%EC%82%AC%EC%A0%84%EA%B3%BC%EC%A0%9C-%EC%95%88%EB%82%B4--api">원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제</a>

## 기능
 - 로그인
 - 회원가입
 - todo CRUD
 
 ### 로그인
 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/76c215161413651.63c651fe055e3.gif" width="600px"/>
 
 ### 회원가입
 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bd62a5161413651.63c651fe037fc.gif" width="600px"/>
 
 ### todo CRUD
 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7755ff161413651.63c651fe07a12.gif" width="600px"/>
 
 
##  사용언어
- react(CRA)
- typescript
- react-query
- styled-component

## 파일구조
<pre>
<code>
│  App.test.tsx
│  App.tsx
│  index.css
│  index.tsx
│  Portal.tsx
│  react-app-env.d.ts
│  reportWebVitals.ts
│  setupTests.ts
│
├─api
│      todoApi.ts
│      userApi.ts
│
├─components
│  ├─common
│  │      Button.tsx
│  │      ConfirmModal.tsx
│  │      NoticeMesseage.tsx
│  │
│  ├─form
│  │      JoinUser.tsx
│  │      LoginUser.tsx
│  │      RegisterTodo.tsx
│  │      UpdateTodo.tsx
│  │
│  └─layout
│      ├─home
│      │      HeaderLogined.tsx
│      │      HeaderLogout.tsx
│      │      MainLogined.tsx
│      │      MainLogout.tsx
│      │
│      └─todo
│              TodoItem.tsx
│              TodoItemDetail.tsx
│              TodoList.tsx
│
├─hooks
│      Todo_query.tsx
│      User_query.tsx
│
├─pages
│  │  MainPage.tsx
│  │  MainPageHeader.tsx
│  │
│  ├─auth
│  │      JoinPage.tsx
│  │      LoginPage.tsx
│  │
│  ├─error
│  │      ErrorPage_500.tsx
│  │
│  └─todo
│          TodoListDetailPage.tsx
│          TodoListPage.tsx
│
├─router
│      Router.tsx
│
├─styles
│      GlobalStyle.tsx
│      imgSource.ts
│      styleUtils.ts
│
└─types
        buttonCustom.ts
        todolistType.ts
        userManageType.ts

    </code>
    </pre>
    
## project 실행
<pre>
  <code>
  npm instaull 
  npm start
  </code>
</pre>
