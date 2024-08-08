import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function MemberForm() {
    //리액트 페이지 이동을 javascript 할때 사용하는 함수
    const navigate = useNavigate()

    //입력한 이름과 주소를 상태값으로 관리
    const [state, setState] = useState({})

    //이름 혹은 주소를 입력했을때 호출되는 함수
    const handleChange = (e) => {
        // Change event 가 읽어낸 요소에 입력한 값을 state 값으로 반영한다.
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = () => {
        // state 로 관리되는 object 를 전송한다(요청의 body 에 json 문자열을 전달)
        axios.post("/members", state)
            .then(res => {
                console.log(res.data)
                alert(res.data.name + "님의 정보가 추가되었습니다.")
                // 현재 위치는 /members/new 인데 /members 로 이동하면 회원목록이 나온다. 
                navigate("/members")
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="name" placeholder="Input Name" onChange={handleChange} value={state.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="addr">
                    <Form.Label column sm={2}>Address</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="addr" placeholder="Input Name" onChange={handleChange} value={state.addr} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handleSave} variant='primary'>Save</Button>
                    </Col>
                </Form.Group>
            </Form>

            <h1>Add Member Form</h1>
            <input onChange={handleChange} name="name" type="text" placeholder="이름 입력" />
            <br />
            <input onChange={handleChange} name="addr" type="text" placeholder="주소 입력" />
            <button onClick={handleSave}>Save</button>
        </>
    );
}

export default MemberForm;