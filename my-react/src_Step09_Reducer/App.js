// App.css 적용하기 (내부 css)
import './App.css'
import Friends from './components/Friends';

import MyCounter from './components/MyCounter';
import MyCounter2 from './components/MyCounter2';

//함수형 component
function App() {

  return (
    <div className="container">
      <h1>인덱스 페이지 입니다</h1>
      <MyCounter/>
      <MyCounter2/>
      <Friends/>
    </div>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
