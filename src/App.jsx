import { useState } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']);
  let [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => {
          setModal(!modal);
        }}>모달창</button>

        {modal === true ? <Modal className="bg_yellow" 구이름={구이름[0]} 구이름변경={구이름변경} 변경내용={'경기도'}/> : null}
        {/*
          부모 -> 자식 state 전송 방법
          1. <자식컴포넌트 작명={부모컴포넌트의 state명} />
          2. 자식컴포넌트에서 props(파라미터)로 받아서 사용
        */}
      </div>
    </>
  )
}

function Modal(props){
  return(
    <>
    <div className={`modal ${props.className}`}>
      <h2>{props.구이름}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.구이름변경((prev) => {
          const copy = [...prev];
          copy[0] = props.변경내용;
          return copy;
        });
      }}>글 수정</button>
    </div>
    </>
  )
}

export default App;