import React, { Component } from 'react';

class App extends Component {
  //상태값(state) 정의하기 (javs 클래스 안에 필드를 정의하는 느낌으로 만든다)
  state={
    count:0
  }
  //멤버함수 추가
  //화살표 함수로 만들어야지 자기자신의 참조값을 가질 수 있다.
  clicked = () => {
    this.setState({
      count : this.state.count-5
    })
  }
  //App 클래스안에 속해있는 멤버 함수(메소드)
  render() {
    // render() 함수안에서 리턴한 jsx로 화면구성이 된다.
    return (
      <div>
          <h1>Index Page</h1>
          <button onClick={()=>{
            // //count 값이 1 증가된 새로운 object 를 만들어서
            // const newObj={count:this.state.count+1};
            // //상태값을 바꿀때 호출하는 함수를 이용해서 상태값을 변경한다.
            // this.setState(newObj);
            
            //state 는 object  // setState() 함수를 호출하면서 새로운 object 를 넣어주어야 ui가 자동으로 업데이트된다.
            this.setState({
              count : this.state.count+10
            })
          }}>{this.state.count}</button>
          <button onClick={this.clicked}>{this.state.count}</button>
          <p>현재 count 값 :  <strong>{this.state.count}</strong></p>
      </div>
    );
  }
}

export default App;