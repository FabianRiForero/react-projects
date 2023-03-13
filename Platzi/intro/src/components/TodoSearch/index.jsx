import React, { useContext } from 'react'
import TodoContext from '../TodoContext';
import './TodoSearch.css'

export const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext);
  const onSearchValueChange = e => setSearch(e.target.value);
  return <input className="TodoSearch" placeholder="Cebolla" value={search} onChange={onSearchValueChange} />;
}