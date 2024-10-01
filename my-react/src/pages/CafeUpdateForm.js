import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { initEditor } from "../editor/SmartEditor";


function CafeUpdateForm() {
    const { num } = useParams()

    const inputTitle = useRef()
    const inputContent = useRef()
    const navigate = useNavigate()

    const [savedData, setSavedData] = useState({})
    //취소 버튼을 누르면
    const handleCancel = () => {
        //처음에 받아온 내용으로 리셋
        inputTitle.current.value = savedData.title
        inputContent.current.value = savedData.content
    }
    //SmartEditor 에 작성한 내용을 textarea 의 value 로 넣어 줄때 필요한 함수
    const [editorTool, setEditorTool] = useState([])

    useEffect(() => {
        //initEditor() 함수를 호출하면서 SmartEditor 로 변환할 textarea 의 id 를 전달
        //textarea 가 SmartEditor 로 변경되면서 에디터 tool 객체가 리턴된다.  
        setEditorTool(initEditor("content")); // initEditor() 함수를 호출해야 SmartEditor 가 초기화된다.
    }, [])

    useEffect(() => {

        axios.get(`/cafes/${num}/edit`)
            .then(res => {
                //글 정보가 들어있는 object
                console.log(res.data)
                setSavedData(res.data)
                inputTitle.current.value = res.data.title
                inputContent.current.value = res.data.content
            })
            .catch(err => console.log(err))

            const handleResize = ()=>{
                //리사이즈 될때마다 초기화를 다시한다
                setEditorTool(initEditor("content"))
            }
            //windoq 가 resize 될때마다 동작할 리스너 함수 등록하기
            window.addEventListener("resize", handleResize)
            console.log("CafeUpdateForm 이 활성화 됨")

            // useEffect()함수 안에서 리턴해주는 함수는 해당 컴포넌트가 비활성화 되는 시점에 호출된다.
            // 따라서 해당 컴포는트에서 무언가 마무리 작업을 할께 있으면 리턴해주는 함수 안에서 작업하면 된다.
            return ()=>{
                console.log("Return 되는 함수")
                window.addEventListener("resize", handleResize)
            }
    }, [])  

    return (
        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/cafes">Cafe</Link></li>
                    <li className="breadcrumb-item active">Detail</li>
                </ol>
            </nav>
            <h3>글 수정 양식 입니다.</h3>
            <Form>
                <FloatingLabel label="제목" className="mb-3" controlId="title">
                    <Form.Control ref={inputTitle} type="text" placeholder="제목 입력" />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control ref={inputContent} as="textarea" rows="10" style={{ height: "300px" }} />
                </Form.Group>
                <Button type="submit" onClick={(e) => {
                    //폼 제출 막기(새로고침 방지)
                    e.preventDefault()
                    //에디터 tool 을 이용해서 SmartEditor 에 입력한 내용을 textarea 의 value 값으로 반환
                    editorTool.exec()
                    //입력한 제목과 내용을 읽어와서
                    const title = inputTitle.current.value
                    const content = inputContent.current.value

                    //axios 를 이용해서 api 서버에 전송
                    axios.put(`/cafes/${num}`, { title, content })
                        .then(res => {
                            console.log(res.data)
                            alert("수정했습니다")
                            //해당 글 자세히 보기로 이동
                            navigate(`/cafes/${num}`)
                        })
                        .catch(err => console.log(err))

                }}>수정 확인</Button>
                <Button onClick={handleCancel} className="btn btn-danger">취소</Button>
            </Form>
        </>
    );
}

export default CafeUpdateForm;