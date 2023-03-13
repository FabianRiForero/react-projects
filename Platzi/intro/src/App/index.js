import React from 'react'
import { TodoContextProvider } from '../components/TodoContext';
import './App.css'
import AppUI from './AppUI';

const App = () => {
  return (
    <TodoContextProvider>
      <AppUI />
    </TodoContextProvider>
  )
}

export default App