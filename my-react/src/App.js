// import 된 css는 모든 Component 에서 공통적으로 사용할 수 있다. (default 동작)
import './App.css'
import Play from './components/Play.js'
import Study from './components/Study.js'
import Study2 from './components/Study2.js';

function App() {

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <div className="box">App.js box</div>
      <Play/>
      <Study/>
      <Study2/>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
