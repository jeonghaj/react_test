import { useState } from "react";


function App6() {

    const [state, setState] = useState({
        names:[],
        seq:1
    })

    let inputName = null;

    return (
        <div>
            <input ref={(refValue)=>{
                //이 함수의 매개변수에 참조값이 전달된다.
                console.log(refValue)
                //매개변수에 전달된 값을 지역변수에 담는다
                inputName = refValue
            }} type="text" placeholder="이름 입력"/>

            <button onClick={()=>{
                //버튼을 눌렀을때 input 요소에 입력한 value 를 읽어오려면 input 요소의 참조값이 필요하다  
                setState({
                    ...state,
                    names:[...state.names, {name:inputName.value, id:state.seq}],
                    seq:state.seq+1
                })
            }}>추가</button>
            <br />
            {JSON.stringify(state)}
        </div>
    );
}

export default App6;