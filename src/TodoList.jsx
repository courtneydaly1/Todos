import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from './NewTodoForm';

function TodoList(){
  const [todo, setTodo] = useState([]);
  
  const add = newTodo =>{
    setTodo(todos => [...todos, newTodo]);
  };

  const update= (id, updatedTask) => {
    setTodo(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };
  
  const remove = id => {
    setTodo(todo => todo.filter(todo =>todo.id !==id))
  };

  const todoComponents = todo.map(todo => (
    <Todo
        key = {todo.id}
        id= {todo.id}
        task= {todo.task}
        handleRemove = {remove}
        handleUpdate= {update}
    />
  ));

  return (
    <div>
        <NewTodoForm addTodo={add} />
        <ul>{todoComponents}</ul>
    </div>
  )
}

export default TodoList;