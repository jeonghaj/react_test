import axios from "axios";
import { useRef, useState } from "react";


function App3() {
    const inputTitle = useRef()
    const inputFile = useRef()
    const [previewImage, setPreviewImage] = useState();
    const [imageData, setImageData] = useState({});
    
    const handleUpload = ()=>{
        const formData = new FormData()
        formData.append("title", inputTitle.current.value)
        formData.append("image", inputFile.current.files[0])

        axios.post("/image/upload2", formData, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        .then(res=>{
            console.log(res.data)
            setImageData(res.data)
        })
        .catch(error=>{})

    }

    const handleChange = ()=>{
        const file = inputFile.current.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        //다 읽었을때 실행할 함수 
        reader.onload = (event)=>{
            //읽은 이미지 데이터
            const data = event.target.result
            console.log(data)
            setPreviewImage(data)
        }
    }
    // img 요소에 적용할 인라인 css object
    const imgStyle = {
        width:"200px",
        "border-radius":"10px"
    }

    return (
        <div>
            <h3>이미지 업로드 테스트</h3>
            <p>
                이미지를 선택하면 선택된 이미지가 바로 보이도록 하고
                업로드 버튼을 누르면 spring boot 서버에 입력한 제목과 이미지가
                전송되도록 프로그래밍 하시오
                요청 url은 "image/upload2" 로 설정
            </p>
            <input ref={inputTitle} type="text" placeholder="제목"/>
            <br />
            <input ref={inputFile} type="file" accept="image/*" onChange={handleChange}/>
            <br />
            <strong>{imageData.title}</strong>
            <br />
            {
            previewImage &&    
            <img style={imgStyle} src={previewImage} alt="이미지 미리보기" />
            }
            <br />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default App3;