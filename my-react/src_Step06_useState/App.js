import { useState } from 'react';
// App.css 적용하기 (내부 css)
import './App.css'

//함수형 component
function App() {
  console.log("App 함수 호출")
  // userState() 함수를 호출하면 호출한 위치에 Array type 의 data 가 리턴된다.

  // useState() 함수는 배열을 리턴한다.
  // [ 상태값, 상태값을 바꿀 함수] 구조이다
  // useState(상태값의 초기값)
  const [count, setCount] = useState(2)

  // useState 함수를 이용해서 이름의 초기값은 "Kim" 버튼을 누르면 "Monkey" 로 바뀌도록
  const [ myName, changeMyName] = useState("Kim")
  
  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>{count}</button>
      
      <p>내이름은</p><strong>{myName}</strong>
      <br />
      <button onClick={()=>{
        changeMyName("Monkey")
      }}>이름 변경</button>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
