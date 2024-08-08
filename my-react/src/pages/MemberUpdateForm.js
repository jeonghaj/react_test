// src/pages/MemberUpdateForm.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, InputGroup, Row, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function MemberUpdateForm() {

    const navigate = useNavigate()

    /*
        경로 파라미터  /members/:num/edit  에서 num 값 읽어오기
    */
    const { num } = useParams()  // 모든 파라미터가 object 안에 파라미터명으로 들어 있다. 

    //수정할 회원의 정보를 state 로 관리
    const [state, setState] = useState({
        num: 0,
        name: "",
        addr: ""
    })

    useEffect(() => {
        //컴포넌트가 활성화 되는 시점에 수정할 회원의 번호를 이용해서 수정할 회원의 정보를 로딩한다
        axios.get("/members/" + num)
            .then(res => setState(res.data))
            .catch(error => console.log(error))
    }, [])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    //수정확인 버튼을 눌렀을때 
    const handleSave = () => {
        axios.put("/members/" + num, state)
            .then(res => navigate("/members"))
            .catch(error => console.log(error))
    }

    return (
        <>
            <h1>회원정보 수정 양식</h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="name" placeholder="Input Name" onChange={handleChange} value={state.name}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="addr">
                    <Form.Label column sm={2}>Address</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="addr" placeholder="Input Name" onChange={handleChange} value={state.addr}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handleSave} variant='primary'>Save</Button>
                    </Col>
                </Form.Group>
            </Form>

            <input onChange={handleChange} type="text" name="name" value={state.name} />
            <input onChange={handleChange} type="text" name="addr" value={state.addr} />
            <button onClick={handleSave}>수정확인</button>
        </>
    );
}

export default MemberUpdateForm;