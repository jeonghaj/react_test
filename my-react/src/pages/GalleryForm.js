// src/pages/GalleryForm.js

import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";


function GalleryForm() {

    const dropZone = useRef()
    const imageInput = useRef()
    const [imageData , setImageData] = useState([])

    const dropZoneStyle={
        minHeight:"300px",
        border:"3px solid #cecece",
        borderRadius:"10px",
        display:"flex",
        justfyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        flexWrap:"wrap",
        rowGap:"10px",
        columnGap:"10px"
    }

    const selectedStyle={
        width:"200px",
        borderRadius:"10px"
    }

    const handleDrop = (e)=>{
        e.preventDefault()
       
        //drop 된 파일의 정보가 들어 있는 배열얻어내기
		const files=e.dataTransfer.files;
			
        //이미지 파일만 담을 배열 
        const imageFiles=[];
			
        //javascript 반복문
        for(let i=0; i<files.length; i++){
            //i 번째 File 객체
            const tmp=files[i];
            //이미지 파일인지 여부를 알아내서 이미지 파일이 아니면 동작하지 않도록 설정
            const reg=/image/;
            if(!reg.test(tmp.type)){ //파일의 type 이 만일 정규표현식을 통과하지 못하면
                console.log("이미지 파일이 아닙니다")
                continue; //반복문 수행을 계속 이어간다 
            }
           
            //이미지 파일을 배열에 누적시킨다 
            imageFiles.push(tmp);
            //파일로 부터 데이터를 읽어들일 객체 생성
            const reader=new FileReader();
            //파일을 DataURL 형식의 문자열로 읽어들이기
            reader.readAsDataURL(tmp);
            //로딩이 완료(파일데이터를 모드 읽었을때) 되었을때 실행할 함수 등록
            reader.onload=(event)=>{
                //읽은 파일 데이터 얻어내기 
                const data=event.target.result;
                //배열에서 읽은 이미지 파일에 해당하는 파일을 찾아서 
                const result=imageFiles.map(item=>{
                    if(item.name === tmp.name){
                        item.dataUrl = data // dataUrl 이라는 방에 읽은 이미지 데이터를 넣어준다
                    }
                    return item
                })
                // state 변경하기 
                setImageData(result)
            };
        }
        
        //DataTransfer 객체 생성
        const dataTransfer = new DataTransfer();
        // imageFiles 배열에 들어 있는 선택된 이미지 파일을 DataTransfer 객체에 모두 넣어주기  
        imageFiles.forEach(item => dataTransfer.items.add(item));
        
        // input type="file" 에 DataTransfer 객체에 담긴 파일 목록을 넣어주기 
        imageInput.current.files=dataTransfer.files;
    }

    return (
        <>
            <Form.Group className="mb-3" controlId="caption">
                <Form.Label>설명</Form.Label>
                <Form.Control type="text" name="caption" placeholder="설명 입력..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>이미지</Form.Label>
                <Form.Control ref={imageInput} type="file" name="image" accept="image/*" multiple/>
            </Form.Group>
            <div ref={dropZone} onDragOver={(e)=>e.preventDefault()} 
                onDrop={handleDrop} style={dropZoneStyle} className="mb-3">
                {
                    imageData.map(item=><img style={selectedStyle} key={item.name} src={item.dataUrl} alt={item.name}/>)
                }
            </div>
            <Button variant="success">업로드</Button>
        </>
    );
}

export default GalleryForm;