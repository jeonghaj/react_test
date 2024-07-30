import React from 'react';

// 특정 component 에만 적용될 외부 css 파일을 만들때는 xxx.module.css 형태로 만들어야한다
// import 된 myCss 는 object 이다.
// - object 의 구조
// { 클래스명 : "변형된 클래스명", ...}
import myCss from './css/study.module.css'

function study(props) {
    //myCss 는 object 이다.
    console.log(myCss)
    return (
        <div>
            <h3>Study</h3>

            <div className={myCss.box}>Study.js box</div>

            {/* 케밥케이스의 선택자명을 사용할때는 대괄호로 감싸서 ['선택자명'] */}
            <p className={myCss['bg-yellow']}>노란 배경</p>

            {/* 두가지 class 연결 // 연결연산자 사용해서 공백을 사이에 둔다 */}
            <div className={myCss.box + ' ' + myCss['bg-yellow']}>box</div>

            {/* back tick 을 사용해서 ${}으로 javascript 영역을 만든다.  */}
            <div className={`${myCss.box} ${myCss['bg-yellow']}`}>box</div>
        </div>
    );
}

export default study;