import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function BsNavBar() {
    // 로그인된 사용자명이 있는지 store 에서 읽어와 본다.
    const userName = useSelector(state=>state.userName)
    
    return (
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
                    </Nav>
                    {
                        userName ? 
                        <>
                            <Nav>
                                <NavLink>{userName}</NavLink>
                                <span className='navbar-text'>Signed in</span>
                            </Nav>
                            <Button variant='outline-primary'>Log Out</Button>
                        </>
                        :
                        <Button variant='success'>Sign in</Button>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BsNavBar;