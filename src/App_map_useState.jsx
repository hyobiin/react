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

        {modal === true ? <Modal
          className="bg_yellow"
          index={0}
          구이름={구이름}
          구이름변경={구이름변경}
          변경내용={'경기도'}
        /> : null}
      </div>
    </>
  )
}

function Modal({ className, index, 구이름, 구이름변경, 변경내용 }){
  const handleUpdate = () => {
    구이름변경((prev) => ({
      ...prev,
      [index]: 변경내용,
    }));
  };

  return(
    <>
    <div className={`modal ${className}`}>
      <h2>{구이름[index]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={handleUpdate}>글 수정</button>
    </div>
    </>
  )
}

export default App;