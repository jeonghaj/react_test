import React, { useReducer, useRef } from 'react';

const reducer = (state, action) =>{
    let newState
    //어떤 로직에 의해서 새로운 상태값을 만들어서 리턴
    if( action.type === "add"){
        newState = {
            ...state,
            // friends:[...state.friends, {id:state.seq, names:action.payload}],
            friends:state.friends.concat({id:state.seq, names:action.payload}),
            seq:state.seq+1
                    }
    } else if( action.type === "romove"){
        newState = {
            ...state,
             friends:state.friends.filter((item) => item.id !== action.payload)
    }
    return newState
}

//초기 상태값
const initState = {
    seq:0,
    friends:[]
}

function Friends(props) {

    const [state, dispatch] = useReducer(reducer, initState)
    const inputName = useRef();

    return (
        <div>
            <input ref={inputName} type="text" placeholder='친구 이름 입력'/>
            <button onClick={()=>{
                //입력한 이름을 추가하는 action 을 dispatch 한다 (동작을 발행한다.)
                // inputName.current 라는 방에 참조값 (input 요소)이 들어있다.
                const name = inputName.current.value;
                // 발생할 action 을 object 로 만든다.
                const action = {type:"add", payload:name};
                //action 발생하기
                dispatch(action);
                // diapatch({type:"add", payload:inputName.current.value})
            }}>추가</button>
            <ul>
                {state.friends.map(item =>
                <li key={item.id}>
                    {item.names} <button onClick={()=>{  
                        dispatch({type:"remove", payload:item.id})
                    }}>-</button>
                </li>)}
            </ul>
        </div>
    );
}

export default Friends;