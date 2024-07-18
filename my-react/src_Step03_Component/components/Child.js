// src/components/Child.js

import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>     
                <button onClick={(e)=>{
                    e.target.innerText="clicked!"
                }}>Click</button>
            </div>
        );
    }
}

export default Child;