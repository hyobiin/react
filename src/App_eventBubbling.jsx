import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']);
  let [like, setLike] = useState([0, 0, 3]);

  useEffect(() => {
    console.log(like);
  }, [like])

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