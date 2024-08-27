import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, Pagination } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ConfirmModal from "../components/ConfirmModal";


function GalleryDetail() {
    // "/gallery/:num" 에서 num 에 해당하는 경로 파라미터 값 읽어오기
    const { num } = useParams()
    // gallery 하나의 정보를 상태값으로 관리
    const [state, setState] = useState(null);
    //로그인된 사용자명이 store 에 있는지 읽어와 본다. 
    const userName=useSelector(state=>state.userName)

    /*
        useEffect() 에 전달한 함수는 Component 가 활성화 되는 시점에 1번 호출되고
        num 이 변경될때마다 다시 호출된다.
        [num] 이 아니라 빈 배열 [] 을 넣어주면 페이지가 로딩되는 시점 1번만 호출된다.
    */
    useEffect(() => {
        axios.get(`/gallery/${num}`)
            .then(res => {
                console.log(res.data)
                //서버로 부터 응답된 갤러리 정보를 state 에 반영한다.
                setState(res.data)
            })
            .catch(err => console.log(err))

    }, [num])
    // Confirm Modal 을 띄울지 여부를 상태값으로 관리
    const [confirmShow, setConfirmShow] = useState(false)

    const navigate = useNavigate();

    const handleYes = ()=>{
        //삭제 요청을 한다.
        axios.delete(`/gallery/${num}`)
        .then(res=>{
            console.log(res)
            //삭제후에 겔러리 목록 보기로 이동
            navigate("/gallery")
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleNo = ()=>{
        setConfirmShow(false)
    }

    return (
        <>
            <ConfirmModal show={confirmShow} message={"삭제하시겠습니까?"} yes={handleYes} no={handleNo}/>
            <h3>Gallery 자세히 보기 페이지</h3>
            <Link to={"/gallery"}>갤러리로 돌아가기</Link>
            {   // state 값이 null 이 아닐때 페이지를 랜더링
                state &&
                <>
                    <Pagination>
                        <Pagination.Item disabled={state.prevNum === 0} as={Link} to={`/gallery/${state.prevNum}`}>&larr; 이전글</Pagination.Item>
                        <Pagination.Item disabled={state.nextNum === 0} as={Link} to={`/gallery/${state.nextNum}`}>다음글 &rarr;</Pagination.Item>
                    </Pagination>
                    <Card>
                        <Card.Img variant="top" src={`/upload/images/${state.saveFileName}`} />
                        <CardBody>
                            <Card.Text>{state.caption}</Card.Text>
                            <Card.Text>writer : {state.writer}</Card.Text>
                            <Card.Text>{state.regdate}</Card.Text>
                            {
                                userName === state.writer &&
                                <Button variant="warning" onClick={()=>{setConfirmShow(true)}}>Delete</Button>
                            }
                        </CardBody>
                    </Card>
                </>
            }


        </>
    );
}

export default GalleryDetail;