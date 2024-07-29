import React, { useState } from 'react';

function App4() {
    // boolean 값을 상태값으로 관리하기
    const [ isShow, setShow ] = useState(true)

    //체크박스의 체크상태가 바뀔때 마다 호출되는 함수
    const handleChange = (e)=>{
        // e.target 은 input type="checkbox" 의 참조값이고 
        // e.target.checked 는 체크박스의 체크여부를 얻어낸다 true/false
        // 그 값을 상태값에 반영하기
        setShow(e.target.checked)
    }

    return (
        <div>
            <h3>check box 의 체크상태를 상태값에 반영</h3>
            <input type="checkbox" checked={isShow} onChange={handleChange}/>
            { isShow && <p>로그인이 필요 합니다</p>}
            <h3>boolean, undefined, null 은 랜더링 되지 않는다.</h3>
            <p>
                true : {true}           <br />
                false : {false}         <br />
                undefined : {undefined} <br />
                null : {null}           <br />
            </p>
            <p>
                { <strong>여보세요</strong>}
            </p>
            <p>
                {/* '안녕하세요' 출력 */}
                {true && <strong>안녕하세요</strong>}
            </p>
            <p>
                {/* false 가 남는다 = 아무것도 출력되지않음 */}
                {false && <strong>또 만났네요</strong>} 
            </p>
        </div>
    );
}

export default App4;