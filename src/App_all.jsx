import { useState } from 'react'
import './App.css'

function App() {
  let [구이름, 구이름변경] = useState(['강남구', '송파구', '서초구']); //state // 구이름-> state의 값, b-> state를 변경하는 함수
  // 변수와 state의 차이 -> 변수는 자동적으로 값이 변경되지 않음(내가 바꿔줘야 함), state는 값이 변경되면 자동으로 재렌더링 됨

  // 하나로 합치기
  let [state, setState] = useState({ 좋아요1: 0, 좋아요2: 0, 좋아요3: 0 });

  let [나이, 나이변경] = useState([
      ['민수', 20],
      ['영희', 32],
      ['순신', 5],
      ['맹구', 1],
  ]);

  let [modal, setModal] = useState(false);

  [1,2,3].map(function(a){
    return '123456'
  });

  return (
    <>
      <div className="test">
        <button onClick={()=>
          {
            let copy = [...구이름];
            copy.sort();
            구이름변경(copy);
          }
        }>가나다순</button>
        <span>{ 구이름[0] }
          <span onClick={() => {
            let newName = [...구이름];
            newName[0] = '강동구';
            구이름변경(newName);
          }}>변경</span>
          <span onClick={() =>
            setState({...state, 좋아요: state.좋아요 + 1})
            // ...state(스프레드 연산자)는 state의 값을 그대로 복사 (업데이트에서 불변성을 유지하며 특정 속성 값만 변경)
          }>눌러봐</span> {state.좋아요}
          <span onClick={() =>
            setState({...state, 좋아요:0})
          }>초기화</span>
        </span>

        {/* map 사용 */}
        {구이름.map((a, i) =>
        <span key={[a + i]} style={{ color: 'blue' }}>
          <span onClick={() =>
            setState({...state, [`좋아요${i + 1}`]: state[`좋아요${i + 1}`] + 1})
          }>눌러봐</span> {state[`좋아요${i + 1}`]}
        </span>
        )}


        <span>{ 구이름[1] }
          <span onClick={() =>
            setState({...state, 좋아요2: state.좋아요2 + 1})
          }>눌러봐</span> {state.좋아요2}
          <span onClick={() => {
            setState({...state, 좋아요2: 0})
          }}>초기화</span>
        </span>

        <span>{ 구이름[2] }</span>

        <button onClick={() => {
          let name = [...나이];
          name.sort((a, b) => a[0].localeCompare(b[0])); // 이름 기준으로 가나다순 정렬
          // name.sort((a, b) => b[0].localeCompare(a[0])); // 이름 기준으로 가나다순 내림차순 정렬
          나이변경(name);
        }}>이름 정렬</button>

        <button onClick={() => {
          let age = [...나이];
          age.sort((a, b) => a[1] - b[1]); // 나이 기준으로 오름차순 정렬
          // age.sort((a, b) => b[1] - a[1]); // 나이 기준으로 내림차순 정렬
          나이변경(age);
        }}>나이 정렬</button>

        <ul>
          <li>{나이[0][0]}: {나이[0][1]}</li>
          <li>{나이[1][0]}: {나이[1][1]}</li>
          <li>{나이[2][0]}: {나이[2][1]}</li>
          <li>{나이[3][0]}: {나이[3][1]}</li>
          {/* 일반 태그 map 사용 */}
          {나이.map((item, index) => <li key={index}>{item[0]}: {item[1]}</li>)}

          <Li key={0} a={0} b={0} c={1} 나이={나이}/>
          <Li key={1} a={1} b={0} c={1} 나이={나이}/>
          <Li key={2} a={2} b={0} c={1} 나이={나이}/>
          <Li key={3} a={3} b={0} c={1} 나이={나이}/>
          {/* 컴포넌트 map 사용 */}
          {나이.map((item, index) => (
            <Li key={index} a={index} b={0} c={1} 나이={나이} />
          ))}
        </ul>

        <button onClick={() => {
          setModal(!modal);
        }}>모달창</button>

        {modal === true ? <Modal /> : null}
      </div>
    </>
  )
}

function Li({a,b,c,나이}){
  return(
    <>
      <li>{나이[a][b]} : {나이[a][c]}</li>
    </>
  )
}

function Modal(){
  return(
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;