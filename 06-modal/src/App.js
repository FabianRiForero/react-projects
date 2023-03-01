import React from 'react';
import './App.css';
import { openModal, openModalAccount } from './components/OpenModal';

const App = () => {
  const handleOpenModal = () => {
    openModal();
  }
  const handleOpenModal2 = () => {
    openModalAccount();
  }
  return (
    <div className='App'>
      <button onClick={handleOpenModal}>Settings</button>
      <button onClick={handleOpenModal2}>Account</button>
    </div>
  )
}

export default App