//Modal

import 'bootstrap/dist/css/bootstrap.css'

import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

function App7() {
    //모달창을 띄울지 여부를 상태값으로 관리하기
    const [isModalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    return (
        <Container>
            <h3>Modal Test Page</h3>
            <Button variant='success' onClick={()=>setModalShow(true)}>Look Closer</Button> &nbsp;
            <MyModal show={isModalShow} onHide={handleClose}/>
        </Container>
    );
}

function MyModal(props) {

    return (
      <>
        <Modal show={props.show} onHide={props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={props.onHide}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default App7;