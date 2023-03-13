import React from 'react'
import './TodoItem.css'

export const TodoItem = ({ todo, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}`} onClick={onComplete}>√</span>
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>{todo.text}</p>
      <span className="Icon Icon-delete" onClick={onDelete}>X</span>
    </li>
  )
}