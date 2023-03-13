import React, { useContext } from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import TodoContext from '../components/TodoContext'
import { Modal } from '../components/Modal'
import { TodoForm } from '../components/TodoForm'

const AppUI = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>{({ loading, error, searchedTodos, completeTodos, deleteTodos }) => (
        <TodoList>
          {error && <p>Error</p>}
          {loading && <p>Cargando ...</p>}
          {!loading && !searchedTodos.length && <p>Cargando ...</p>}
          {searchedTodos.map(todo => <TodoItem key={todo.text} todo={todo} onComplete={() => completeTodos(todo.text)} onDelete={deleteTodos} />)}
        </TodoList>
      )}</TodoContext.Consumer>
      {!!openModal && <Modal>
        <TodoForm />
      </Modal>}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </>
  )
}

export default AppUI