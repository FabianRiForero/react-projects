import React, { useContext, useState } from 'react'
import TodoContext from '../TodoContext';
import './TodoForm.css';

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodos, setOpenModal } = useContext(TodoContext);

  const onChange = e => setNewTodoValue(e.target.value);
  const onCancel = () => setOpenModal(prev => !prev);
  const onSubmit = e => {
    e.preventDefault();
    addTodos(newTodoValue);
    setOpenModal(prev => !prev);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder='Cortar la cebolla para el almuerzo' />
      <div className='TodoForm-buttonContainer'>
        <button type='button' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
        <button type='submit' className='TodoForm-button TodoForm-button-add'>Añadir</button>
      </div>
    </form>
  )
}