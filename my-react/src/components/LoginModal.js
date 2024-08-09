// src/components/LoginModal.js

import axios from "axios";
import { decodeToken } from "jsontokens";
import { useState } from "react";
import { Alert, Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";


//부모 component 로 부터 전달 받은 props 가 함수의 매개 변수에 전달된다.
function LoginModal(props) {
    //입력한 userName 과 password 를 상태값으로 관리
    const [state, setState]=useState({})
    //아이디 혹은 비밀번호가 일치하지 않는 경우 에러 정보를 출력하기 위해 
    const [isError, setError]=useState(false)
    //input 요소에 문자열을 입력했을때 호출되는 함수 
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const dispatch=useDispatch()
    //로그인 버튼을 눌렀을때 실행할 함수
    const handleLogin = ()=>{
        axios.post("/auth", state)
        .then(res=>{
            //로그인 성공이면 여기가 실행되면서 jwt 가 발급된다
            console.log(res.data)
            //토큰일 localStorage 에 저장
            localStorage.token = res.data
            //에러정보 없앤다
            setError(false)
            //토큰을 디코딩해서 사용자 정보를 얻어온다
            const result = decodeToken(localStorage.token.substring(7))
            //토큰에 저장된 주제(subject) 얻어내기
            const userName = result.payload.sub
            //로그인된 userName 변경
            dispatch({type:"UPDATE_USER", payload:userName})
            //로그인 모당창 숨기기
            dispatch({type:"LOGIN_MODAL", payload:false})
            //axios 의 header 에 인증정보를 기본으로 가지고 갈 수 있도록 설정
            axios.defaults.headers.common["Authorization"]=localStorage.token
        })
        .catch(error=>{
            //아이디 혹은 비밀번호가 틀리면 여기가 실행
            setError(true)
        })
    }

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.message}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="userName" label="User Name" className="mb-3">
                    <Form.Control onChange={handleChange} name="userName" type="text" placeholder="User Name..."/>
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                    <Form.Control onChange={handleChange}  name="password" type="text" placeholder="Password..."/>
                </FloatingLabel>
                {
                    isError && <Alert variant="danger">아이디 혹은 비밀번호가 틀려요</Alert>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleLogin}>로그인</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;