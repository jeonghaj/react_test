import { useSelector } from "react-redux";


function Fortune() {

    const isLogin = useSelector(state=>state.isLogin)

    return (
        <div>
            {/* isLogin 이 true 면 우측 context 출력 / false 면 로딩되지 않는다 */}
            { isLogin && <p>로그인 중 입니다</p>}
            <p>오늘의 운세 : 동쪽으로 가면 귀인을 만납니다.</p>
        </div>
    );
}

export default Fortune;