import { useState } from 'react'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']);
  let [state, setState] = useState({ 좋아요1: 0, 좋아요2: 0, 좋아요3: 0 });

  return (
    <>
      {/* map 사용 */}
      {구이름.map((a, i) =>
      <span key={[a + i]} style={{ color: 'blue' }}>
        <span onClick={() =>
          setState({...state, [`좋아요${i + 1}`]: state[`좋아요${i + 1}`] + 1})
        }>눌러봐</span> {state[`좋아요${i + 1}`]}
      </span>
      )}
    </>
  )
}

export default App;