import React, { useReducer } from 'react';

/*
    [순수 함수]
    동일한 인자가 들어오면 항상 같은 값이 나와야하고
    return 값으로만 소통하고 데이터베이스 호출이나 HTTP 호출 등
    외부의 데이터 구조를 변형하는 호출을 허용하지 않는 함수이다.
*/
// 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환하는 순수 함수
const reducer = (state, action)=>{
    //새로운 상태값을 담을 변수
    let newState
    //action 값에 따라 분기
    if(action === "minus"){
        //새로운 상태값을 만들어서
        newState = { ...state, count : state.count -1}
    }else if(action === "plus"){
        newState = { ...state, count : state.count +1}
    }else{
        newState = state
    }
    //리턴해준다
    return newState
}

function MyCounter2() {
    // [상태값, 상태를 변형할 함수]  = useReducer (리듀서 함수, 초기값)
    const [state, dispatch] = useReducer(reducer, {count:0});

    return (
        <div>
            <button onClick={()=>{
                // "minus" action 을 발행(dispatch)해서 상태값을 변경
                dispatch("minus") // 결과적으로 등록된 리듀서 함수가 호출된다
            }}>-</button>
            <strong>{state.count}</strong>
            <button onClick={()=>{ dispatch("plus")}}>+</button>
        </div>
    );
}

export default MyCounter2;