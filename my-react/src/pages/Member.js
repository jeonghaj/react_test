import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


function Member() {

    // 회원 목록 상태값 관리
    const [members, setMembers] = useState([]);
    // Member Component 가 활성화 되는 시전에 호출되는 함수 등록
    // useEffect (함수, 빈배열) 함수는 component 가 활성화 될때 최초 1번 호출된다. (개발환경:2번)
    useEffect(()=>{
        //해당 Component 에서 필요한 준비작업을 하는 부분
        axios.get("/members")
        .then(res => setMembers(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <>
            &nbsp; <Link to="/members/new">Add Member</Link>
            <h1>Member List</h1>
            <table>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>주소</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map(item=>
                            <tr key={item.num}>
                                <td>{item.num}</td>    
                                <td>{item.name}</td>    
                                <td>{item.addr}</td> 
                            </tr>)
                        }
                    </tbody>
                </table>
            </table>
        </>
    );
}

export default Member;