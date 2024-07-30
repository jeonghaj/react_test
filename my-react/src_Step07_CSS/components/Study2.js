import React from 'react';
import myCss from './css/study.module.css'
// classnames 를 import 해서 cn 이라는 이름으로 사용
import cn from 'classnames'
// 외부 css 를 바인딩해서 사용하게 도와주는 binder import
import binder from 'classnames/bind'

const cx = binder.bind(myCss)

function study2(props) {
    //myCss 는 object 이다.
    console.log(myCss)
    return (
        <div>
            <h3>Study2</h3>
            <div className={cx('box')}>Study.js box</div>
            <p className={cx('bg-yellow')}>노란 배경</p>
            
            <div className={cx('box','bg-yellow')}>box</div>
            {/* object type 작성 가능 true=적용 / false=미적용 boolean 값으로 상태 관리 가능 */}
            <div className={cx({box:true, 'bg-yellow':false})}>box</div>
        </div>
    );
}

export default study2;