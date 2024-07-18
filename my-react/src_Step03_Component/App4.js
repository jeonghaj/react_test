

import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Button } from 'react-bootstrap';

class App4 extends Component {
    render() {
        return (
            <div>
                <h1>React Bootstrap component 사용</h1>
                {/* button component */}
                <Button variant='primary'>Button1</Button>
                <Button variant='success'>Button1</Button>
                <Button variant='warning'>Button1</Button>
                
            </div>
        );
    }
}

export default App4;        