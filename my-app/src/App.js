import { useState } from 'react';
import './App.css';

const INITIAL_STATE = [
  {id: 1, header: "Kod Yaz", Completed: false},
  {id: 2, header: "React Geliştirmeye devam et..", Completed: true},
];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [NewHeader, SetHeader] = useState("");
  return (
    <div className="to-do">
      <img src="https://i.hizliresim.com/smeuxdx.png" alt="To-Do" />
      <h3>~ i will do today ~</h3>
      <ul className="toDoList">
        {list.map(item => (
           <div key={item.id}onClick={() => {
            setList(list.map(it => it.id === item.id ? {...it,Completed: !it.Completed}: it))
          }}className={item.Completed ? "Completed" : ""}>{item.header}</div>
        ))}
      </ul>
      <form action="">
        <input value = {NewHeader} onChange= {e => SetHeader(e.target.value)} type="text" placeholder='Add New ToDo'/>
        <button onClick={() => {
          setList([
            ...list,
            {id: Date.now(), header: NewHeader, Completed: false}
            ]); 
            SetHeader("");
          }}>Add</button> 
          <button onClick={() => setList(list.filter(item => !item.Completed))}>Clear</button>
      </form>
    </div>
  );
}

export default App;