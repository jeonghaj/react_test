import React, { Component } from 'react';

class App3 extends Component {
    state={
        names:[],
        inputName:""
    }
    //목록 받아오기
    getData = ()=>{
        const data = ["김구라","해골","원숭이"]
        //받아온 데이터로 상태를 변경하기
        this.setState({
            names:data
        })
    }
    //목록에 배열 추가하기
    addData = ()=>{
        // 기존의 배열에 새로운 item이 추가된 새로운 배열을 얻어내는 방법 1
        const newArray = this.state.names.concat("새이름")
        // 기존의 배열에 새로운 item이 추가된 새로운 배열을 얻어내는 방법 2
        const newArray2 = [...this.state.names,"새이름"]
        this.setState({
            names:[...this.state.names,this.state.inputName]
        })
    }

    render() {
        return (
            <div>
                <h3>배열을 상태값으로 가지는 예제</h3>
                <p>{this.state.names}</p>
                <button onClick={this.getData}>GET LIST</button>

                <br />

                <input type="text" placeholder='이름 입력' onChange={(e)=>{
                    this.setState({
                        inputName:e.target.value
                    })
                }}/>
                <button onClick={this.addData}>추가</button>

                <ul>
                    {this.state.names.map(item => <li>{item}</li>)}
                </ul>

            </div>
        );
    }
}

export default App3;