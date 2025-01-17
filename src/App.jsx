import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']);
  let [like, setLike] = useState([0, 0, 3]);
  let [입력값, 입력값변경] = useState('');

  useEffect(() => {
    console.log(like);
  }, [like])

  // 행 추가 함수
  const btnAdd = () => {
    if (입력값.trim() === '') {
      return; // 입력값이 비어있을 때는 아무 것도 추가하지 않음
    }
    const 구이름추가 = [...구이름, 입력값]; // 기존 구이름 배열에 새 값 추가
    구이름변경(구이름추가); // 상태 업데이트하여 새로운 배열로 변경

    const like추가 = [...like, 0]; // 기존 like 배열에 새 값 추가
    setLike(like추가); // 상태 업데이트하여 새로운 배열로 변경

    입력값변경(''); // 입력값 초기화
  };

  return (
    <>
      <div>
        {구이름.map((a, index) =>
          <Div key={index}
            index={index}
            구이름={구이름}
            like={like[index]}
            setLike={setLike}
          />
        )}
      </div>

      <input
        type="text"
        value={입력값}
        onChange={(e) => 입력값변경(e.target.value)} // 입력값 상태 업데이트
      />
      <button onClick={btnAdd}>행 추가</button>
    </>
  )
}

function Div({ index, 구이름, like, setLike }){
  const likeCount = (e) => {
    e.stopPropagation();
    setLike((prevLikes) => {
      const updateLikes = [...prevLikes];
      updateLikes[index] = updateLikes[index] + 1;
      return updateLikes;
    })
  };

  return(
    <>
      <div style={{ marginTop: '10px' }} onClick={() => { console.log(5); }}>
        <span>{구이름[index]}</span>
        <button onClick={likeCount}>💙 <span>{like}</span></button>
      </div>
    </>
  )
}

export default App;