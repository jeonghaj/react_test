import { useState } from 'react';
// App.css 적용하기 (내부 css)
import './App.css'

//함수형 component
function App2() {
  console.log("App2 함수 호출")

  //여러개의 값을 한번에 관리할 수 있는 object 로 상태값 관리하기
  const [ state, setState] = useState({
    count:0,
    myName:"Kim"
  })
  
  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <button onClick={()=>{
        setState({
            ...state, // 기존의 상태값을 펼쳐 놓고
            count:state.count+1 //수정할 값만 수정된 
        }) //새로운 object 로 상태값을 변경한다.
      }}>{state.count}</button>
      
      <p>내이름은</p><strong>{state.myName}</strong>
      <br />
      <button onClick={()=>{
        setState({
            ...state,
            myName:"Monkey"
        })
      }}>이름 변경</button>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App2;