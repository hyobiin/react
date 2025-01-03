import { useState } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']); //state // 구이름-> state의 값, b-> state를 변경하는 함수
  // 변수와 state의 차이 -> 변수는 자동적으로 값이 변경되지 않음(내가 바꿔줘야 함), state는 값이 변경되면 자동으로 재렌더링 됨

  // 하나로 합치기
  let [state, setState] = useState({ 좋아요: 0, 좋아요2: 0 });

  return (
    <>
      <div className="test">
        <span>{ 구이름[0] }
          <span onClick={() => {
            let newName = [...구이름];
            newName[0] = '강동구';
            구이름변경(newName);
          }}>변경</span><span onClick={() =>
            setState({...state, 좋아요: state.좋아요 + 1})
            // ...state(스프레드 연산자)는 state의 값을 그대로 복사 (업데이트에서 불변성을 유지하며 특정 속성 값만 변경)
          }>눌러봐</span> {state.좋아요} <span onClick={() =>
          setState({...state, 좋아요:0})
          }>초기화</span></span>


        <span>{ 구이름[1] }
          <span onClick={() =>
            setState({...state, 좋아요2: state.좋아요2 + 1})
          }>눌러봐</span> {state.좋아요2}
          <span onClick={() => {
            setState({...state, 좋아요2: 0})
          }}>초기화</span>
        </span>
      </div>
    </>
  )
}

export default App;
