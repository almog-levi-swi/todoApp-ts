import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import './App.css';

interface Todo {
  id: string,
  text: string
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([{id: 'ff1', text: 'finish course'}, {id: 'ff2', text: 'clean home'}]);


  const onAddTodoHandler = (text: string) => {
    console.log(text);
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
  }

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos([...newTodos]);
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodoHandler} />
      <TodoList items={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
