// src/App5.js

import { useState } from "react";

function App5() {

    //string, array, number type 을 상태값으로 관리하기
    const [state, setState] = useState({
        inputName:"",
        names:[],
        seq:1
    })

    return (
        <div>
            <input type="text" onChange={(e)=>{
                setState({
                    ...state, //기존의 값을 유지하면서
                    inputName:e.target.value //입력한 값을 inputName 에 반영한다.
                })
            }} placeholder="이름 입력..."/>

            {/* names 에 이름과 key 값을 가진 object type의 data를 넣을것 */}
            <button onClick={(e)=>{
                setState({
                    ...state,
                    names:[...state.names, {name:state.inputName, id:state.seq}],
                    seq:state.seq+1
                })
            }}>추가</button>
            <ul>
                {state.names.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
            {JSON.stringify(state)}
        </div>
    );
}

export default App5;