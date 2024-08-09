import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AlertModal from './AlertModal';

function BsNavBar() {
    // 로그인된 사용자명이 있는지 store 에서 읽어와 본다.
    const userName = useSelector(state=>state.userName)
    //action 을 dispatch 할 수 있는 함수
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //"로그아웃 되었습니다" 모달을 띠울지 여부
    const [alertShow, setAlertShow] = useState(false)

    const handleLogOut = ()=>{
        //localStorage 에서 token 을 삭제한다
        delete localStorage.token
        // userName 을 null 로 변경
        dispatch({type:"UPDATE_USER", payload: null})
        //최상위 경로로 이동
        navigate("/")
        setAlertShow(true)
    }

    const handleYes = ()=>{
        setAlertShow(false)
    }
    
    return (
        <>
        <AlertModal show={alertShow} message={"Logged Out"} yes={handleYes}/>
        <Navbar expand="md" className='bg-warning mb-2'>
            <Container>
                <Navbar.Brand>Acorn</Navbar.Brand>
                <Navbar.Toggle aria-controls='one'/>
                <Navbar.Collapse id='one'>
                    <Nav className='me-auto'>
                        {/* 
                        react-bootstrap 의 Nav.Link 를 as 속성을 이용해서
                        react-router-dom 의 NavLink 역할을 하게 할 수 있다.
                         */}
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/members">Member</Nav.Link>
                        {/* boot10 */}
                        <Nav.Link as={NavLink} to="/posts">Post</Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                    </Nav>
                    {
                        userName ? 
                        <>
                            <Nav>
                                <NavLink>{userName}</NavLink>
                                <span className='navbar-text'>Signed in</span>
                            </Nav>
                            <Button variant='outline-primary' onClick={handleLogOut}>Log Out</Button>
                        </>
                        :
                        <Button variant='success' onClick={()=>{
                            //로그인 모달을 띄우는 action 을 dispatch 한다.
                            const action = {type:"LOGIN_MODAL", payload:{ show:true, message:"Login From"}}
                            dispatch(action)
                        }}>Sign in</Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default BsNavBar;