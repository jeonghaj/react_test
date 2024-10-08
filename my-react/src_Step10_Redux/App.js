// App.css 적용하기 (내부 css)
import { useRef } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';

//함수형 component
function App() {

  const inputName = useRef();
  //redux store 에 action 을 발행할 함수 hook
  const dispatch = useDispatch();
  // redux store 에서 관리되는 state 값을 전달받아서 필요한 값을 변수(상수에) 담기
  const userName = useSelector((state) => {
    // 여기서 리턴하는 값의 useSelector() 함수의 리턴값이 된다(userName 에 대입될 값)
    return state.userName
  })
  const isLogin = useSelector(state => state.isLogin)

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      {
        isLogin ?
        <>      
        <p><strong>{userName}</strong>님 로그인중</p>
        <button onClick={()=>{
          dispatch({type:"SET_LOGIN", payload:false})
        }}>로그아웃</button>
        </>
        : 
        <> 
          <input ref={inputName} type="text" placeholder='사용자명' />  &nbsp;
          <button onClick={() => {
            //action을 만들어서
            const action = { type: "UPDATE_USER", payload: inputName.current.value }
            // redux store 에 action 을 발행한다
            dispatch(action)
            dispatch({ type: "SET_LOGIN", payload: true })
          }}>로그인</button>
        </>  
      }

    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
