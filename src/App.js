import React from 'react';
import {useState} from 'react';
import './App.css';

function ToDo({index,value}) {
  return (
    <div className={'todo-text'} index={index}>{value}</div>
  );
}
function ToDoForm({addItem}) {
  const [Item, setItem] = useState('');
  const handleChange = (e)=>{
    setItem(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Item) return;
    addItem(Item);
    setItem('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name='value' type='text' value={Item} onChange={handleChange} />
      <input type='submit' value='Submit'/>
    </form>
  );
}
function App() {
  const [toDo, setToDo] = useState([
    {
      text:'watch star wars',
      completed:false
    },
    {
      text:'draw sketch',
      completed:false
    },
    {
      text:'study',
      completed:false
    }
  ])

  const addItem = (item)=>{
    setToDo([{text:item,completed:false},...toDo]);
    alert(item);
  }
  return (
    <div className="App">
     {toDo.map((item,i)=>(
       <ToDo key={i} index={i} value={item.text}/>
     ))}
     <ToDoForm addItem={addItem}/>
    </div>
  );
}

export default App;
