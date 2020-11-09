import React, { useState, useEffect } from 'react';
import './App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/Todolist';

function App() {
	//State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
//USE EFFECT 
useEffect(() => {
	filterHandler();
}, [todos, status]);
  //functions
  const filterHandler = () => {
	  switch(status){
		  case 'completed': 
			  setFilteredTodos(todos.filter(todo => todo.completed === true));
			  break;
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false))
			default: 
				setFilteredTodos(todos);
				break;
	  }
  }
  return (
    <div className="App">
      <header>
  <h1>Sailesh's Todo List</h1>
      </header>
      <Form inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
		setInputText={setInputText}
		setStatus={setStatus}
		filteredTodos={filteredTodos} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;