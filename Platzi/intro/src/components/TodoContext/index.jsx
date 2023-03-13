import React, { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
  }

  const addTodos = text => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  }

  const completeTodos = text => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  }

  const deleteTodos = text => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }

  return <TodoContext.Provider value={{ loading, error, completedTodos, deleteTodos, search, searchedTodos, setSearch, totalTodos, completeTodos, openModal, setOpenModal, addTodos }}>{children}</TodoContext.Provider>
}

export default TodoContext