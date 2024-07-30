import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// cn 함수를 이용해서 클래스를 좀 더 편하게 제어할 수 있다.
import cn from 'classnames'
//binder import
import binder from 'classnames/bind'

function App2(props) {
    //버튼의 색상을 상태값으로 관리 하기 위해 useState 사용
    const [color, setColor] = useState("");
    //체크박스의 체크여부(버튼을 크게만들지 여부) 를 상태값으로 관리
    const [isLarge, setIsLarge] = useState(false);

    //1.적용할 클래스를 value 값으로 가지고 있는 object 를 만들어서
    const btnStyle = {
        default:"btn btn-info",
        large:"btn btn-info btn-lg"
    }
    //2. binder 를 이용해서 바인딩한 함수를 얻어낸다
    const cx = binder.bind(btnStyle);


    return (
        <div className='container'>
            
            <h1>classnames, classnames/bind 사용해보기</h1>
            <select  onChange={(e)=>{
                setColor(e.target.value)
            }}>
                <option value="">선택</option>
                <option value="btn-primary">Blue</option>
                <option value="btn-success">Green</option>
                <option value="btn-danger">Red</option>
            </select>
            <br />
            <button className={'btn'+' '+color}>Button</button> &nbsp;
            <button className={`btn ${color}`}>Button2</button> &nbsp;
            <button className={cn('btn', color)}>Button3</button>
            <br />
            {/* 체크박스를 체크하면 추가/ 해제하면 제거 (조건부 제어) */}
            <label>
                Bigger <input type="checkbox" onChange={(e)=>{
                    setIsLarge(e.target.checked)
                }}/>
            </label>
            <p>isChecked : <strong>{JSON.stringify(isLarge)}</strong></p>
            <button className={'btn btn-primary ' + (isLarge ? 'btn-lg' : '')}>Button</button>
            <button className={`btn btn-success ${isLarge ? 'btn-lg' : ''}`}>Button</button>
            <button className={cn('btn', 'btn-info', {'btn-lg' : isLarge})}>Button</button>
            <br />
            {/* binder 함수 cx 사용 */}
            <button className={cx({default:!isLarge, large:isLarge})}>cxButton</button>
            <button className={cx(!isLarge ? 'default' : 'large')}>cxButton2</button>
        </div>
    );
}

export default App2;