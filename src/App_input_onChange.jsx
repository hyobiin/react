import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let [입력값, 입력값변경] = useState('');

  // 상태가 변경된 이후 실행되는 useEffect
  useEffect(() => {
    console.log(입력값);
  }, [입력값]); // 입력값이 변경될 때마다 실행

  return (
    <>
      <input
        onChange={(e) => {
          입력값변경(e.target.value); // 상태 업데이트
        }}
      />
    </>
  );
}

export default App;