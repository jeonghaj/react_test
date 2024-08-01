import { useState } from "react";


function MyCounter() {

    //- 버튼을 누르면 숫자가 1씩 감소 + 버튼을 누르면 숫자가 1씩 증가되도록
    const [ count, setCount] = useState(0);
    const minus = ()=>{ setCount(count - 1)}
    const plus = ()=>{ setCount(count + 1)}
    return (
        <div>
            <button onClick={minus}>-</button>
            <strong>{count}</strong>
            <button onClick={plus}>+</button>            
        </div>
    );
}

export default MyCounter;