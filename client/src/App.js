import './App.css';
import ToDoItem from './components/ToDoItem';
import Header from './components/Header';
import Edit from './components/Edit';
import { useState } from 'react';

function App() {

  const Lista = [
    {
      id : 0,
      status : false,
      content : 'abastecer o carro',
      date: '29/01/2023',
    },
    {
      id:1,
      status : false,
      content : 'Praia',
      date: '29/01/2023',
    },
    {
      id:2,
      status : true,
      content : 'Mandara',
      date: '29/01/2023',
    },
    {
      id:3,
      status : true,
      content : 'BeachTenis',
      date: '29/01/2023',
    },
    {
      id:4,
      status : true,
      content : 'Jantar',
      date: '29/01/2023',
    },
  ]

  const [edit,setEdit]=useState(20)

  return (
    <div className="App">
      <Header></Header>
      {/* <Edit></Edit> */}
      <div className='Body'>
        {
          Lista.map(
            (item)=>{
                if(edit===item.id) return <Edit item={item} setEdit={setEdit}/>
                else            return <ToDoItem item={item} setEdit={setEdit}/>
              }
            
          )
        }
      </div>
    </div>
  );
}

export default App;
