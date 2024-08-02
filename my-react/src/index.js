import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js 를 import 해서 
import App from './App3';
import reportWebVitals from './reportWebVitals';

// legacy_createStore 를 createStore 라는 이름으로 사용하기 (store)를 만들 함수
import { legacy_createStore as createStore } from 'redux'
// store (저장소) 공급자
import { Provider } from 'react-redux'

// store 에서 관리될 state 의 초기값
const initialState = {
  userName : null,
  isLogin : false
}
//reducer 함수
const reducer = (state = initialState, action)=>{
  let newState
  if(action.type === "UPDATE_USER"){
    newState = {
      ...state,
      userName : action.payload
    }
  }else if(action.type === "SET_LOGIN"){
    newState = {
      ...state,
      isLogin : action.payload
    }
  }else{
    newState = state
  }
  return newState
}
//reducer 함수를 전달하면서 store(저장소) 를 만든다
const store = createStore(reducer)

//id 가 root 인 곳에 UI 출력하기 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
