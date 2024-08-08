import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";


function Member() {

    const navigate = useNavigate();

    // 회원 목록 상태값 관리
    const [members, setMembers] = useState([])

    const refresh = ()=>{
        axios.get("/members")
        .then(res => setMembers(res.data))
        .catch(err => console.log(err))
    }

    // Member Component 가 활성화 되는 시전에 호출되는 함수 등록
    // useEffect (함수, 빈배열) 함수는 component 가 활성화 될때 최초 1번 호출된다. (개발환경:2번)
    useEffect(()=>{
        //해당 Component 에서 필요한 준비작업을 하는 부분
        axios.get("/members")
        .then(res => setMembers(res.data))
        .catch(err => console.log(err))
    }, [])
    
    //삭제 버튼을 눌렀을때 호출되는 함수
    const handleDelete = (num)=>{
        axios.delete("/members/"+num)
        .then(res=>{
            if(res.data.isSuccess){
                //화면 리프레시
                refresh();
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <>
            &nbsp; <Link to="/members/new">Add Member</Link>
            <h1>Member List</h1>
                <Table striped bordered size="sm">
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
                                <td>
                                    <button class="btn btn-info" onClick={()=>{
                                        navigate(`/members/${item.num}/edit`)
                                    }}>Edit</button>
                                </td>
                                <td>
                                    <button class="btn btn-danger" onClick={()=>{handleDelete(item.num)}}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
        </>
    );
}

export default Member;