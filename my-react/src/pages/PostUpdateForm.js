import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";


function PostUpdateForm() {

    const [ state, setState ] = useState({
        id:0,
        title:"",
        author:""
    });

    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleSave = ()=>{
        axios.post("/posts", state)
        .then(res=>console.log(state.author + "의 글이 저장되었습니다."))
        .catch(err=>console.log(err))
    }
    return (
        <>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="title" placeholder="Input Title" onChange={handleChange} value={state.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="addr">
                    <Form.Label column sm={2}>Address</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name="author" placeholder="Input Author" onChange={handleChange} value={state.addr} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handleSave} variant='primary'>Save</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
}

export default PostUpdateForm;