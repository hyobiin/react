import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']);
  let [변경내용] = useState(['하남시', '여주', '파주']);
  let [modal, setModal] = useState([false, false, false]);
  let [like, setLike] = useState([0, 0, 3]);

  return (
    <>
      <div>
        {구이름.map((a, index) =>
          <Div key={index}
            index={index}
            구이름={구이름}
            setModal={setModal}
            like={like[index]}
            setLike={setLike}
          />
        )}

        {modal.map((isOpen, index) => isOpen ? (
          <Modal
            key={index}
            className={'bg_yellow'}
            index={index}
            구이름={구이름[index]}
            변경내용={변경내용[index]}
          />
        ) : null)}
      </div>
    </>
  )
}

function Div({ index, 구이름, setModal, like, setLike }){
  return(
    <>
      <div style={{ marginTop: '10px' }}>
        <span>{구이름[index]}</span>
        <button onClick={() => {
          console.log(4)
          setLike(like + 1);
        }}>💙 <span>{like}</span></button>
        <button onClick={() => {
            setModal((prev) => {
              const updatedModal = [...prev];
              updatedModal[index] = !prev[index];
              return updatedModal;
            });
          }}>모달창</button>
      </div>
    </>
  )
}

function Modal({ className, 구이름, 변경내용 }){
  const [title, setTitle] = useState(구이름); // 구이름을 담아 줄 useState 추가

  const handleUpdate = () => {
    setTitle(변경내용); // 변경내용을 title에 담아줌
  };

  return(
    <>
    <div className={`modal ${className}`}>
      <h2>{title}</h2> {/* 새로 선언한 title을 사용 */}
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={handleUpdate}>글 수정</button>
    </div>
    </>
  )
}

export default App;