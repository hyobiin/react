import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0)

  let post = '강남'; //변수
  let [구이름, b] = useState(['강남구', '송파구', '서초구']); //state // 구이름-> state의 값, b-> state를 변경하는 함수
  // 변수와 state의 차이 -> 변수는 자동적으로 값이 변경되지 않음(내가 바꿔줘야 함), state는 값이 변경되면 자동으로 재렌더링 됨

  let [좋아요, 좋아요변경] = useState(0);
  let [좋아요2, 좋아요변경2] = useState(0);
  // 하나로 합치기
  let [state, setState] = useState({ 좋아요: 0, 좋아요2: 0 });


  function like(){
    좋아요변경(좋아요 + 1);
  }

  function initialization(){
    좋아요변경(0);
  }

  return (
    <>
      <div className="test" style={ { color:'red', fontSixze:'16px' } }>
        <span>{ 구이름[0] } <span onClick={() => setState(좋아요 + 1)}>눌러봐</span> {좋아요} <span onClick={() => setState(0)}>초기화</span></span>
        <span>{ 구이름[1] } <span onClick={() => 좋아요변경2(좋아요2 + 1)}>눌러봐</span> {좋아요2} <span onClick={() => 좋아요변경2(0)}>초기화</span></span>
        <span>{ 구이름[2] }</span>
      </div>
    </>
  )
}

export default App;
