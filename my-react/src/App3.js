import React, { useState } from 'react';

function App3() {
    // item 이 3개 들어있는 배열을 초기값으로 전달한 state
    const [ names, setNames ] = useState(["김구라","해골","원숭이"])

    return (
        <div>
            <h1>배열을 state 로 관리</h1>
            <button onClick={()=>{
                // spread 연산자 사용
                // setNames([...names,"새이름"])
                
                //names 배열에 새로운 아이템이 추가된 새로운 배열 얻어내기
                setNames( names.concat("새이름"))
            }}>이름 추가</button>
            <ul>
                {/* '임시로' index 값을 key 값에 넣어준다 */}
                {names.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

export default App3;