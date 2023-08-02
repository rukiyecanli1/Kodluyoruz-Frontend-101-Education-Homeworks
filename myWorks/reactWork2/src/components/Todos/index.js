import {useState, useEffect} from 'react';

import './styles.css';
import Input from './Input';
import List from './List';
import Buttons from './Buttons';
import EndFooter from './EndFooter';


function Todos() {

  const [filteredValue, setFilteredValue] = useState(0);

//kayıtlarımızın ekleneceği state:
  const [todos, setTodos] = useState([ 
    {
      name: "Learn JavaScript",
     state1: false
    },
    {
      name: "Learn React",
     state1: false
    },
    {
    name: "Have a Life",
     state1: false
    }
  ]);

   const [activeTodos, setActiveTodos] = useState([{
 
   }]);

  const [completedTodos, setCompletedTodos] = useState([{

  }]);



//   useEffect(() =>{
//    // Form sayfasında addContact ile listeye ekleme işlemi yapıldıktan sonra
//    // listedeki değişikliği ekranda görmek için useEffect kullanıyoruz
//    console.log(todos);
// }, [todos])
  
  return (
    <div className='todoapp'>
     
      {/* <Input addTodo = {setTodos} todosss = {todos}/> */}
      <Input todosss={todos} addTodo={setTodos}/>
      <List  todosss = {todos} addTodo = {setTodos} active = {activeTodos} completed = {completedTodos} filteredVal = {filteredValue}/>
      <Buttons todosss = {todos} active = {activeTodos} setActive = {setActiveTodos} completed = {completedTodos} setCompleted = {setCompletedTodos} setFilteredVal = {setFilteredValue}/>
      <EndFooter/>
    </div>
  );
}

export default Todos;
