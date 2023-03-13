import React from 'react'
import './CreateTodoButton.css'

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = () => setOpenModal(prev => !prev);
  return <button className="CreateTodoButton" onClick={onClickButton}>+</button>
}