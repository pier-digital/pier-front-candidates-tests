import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

const initialTodos = [
  { id: 1, text: 'Comprar leite', done: false },
  { id: 2, text: 'Estudar React', done: false },
  { id: 3, text: 'Fazer exercícios', done: false },
]

export default function App() {
  // TODO: Etapa 3 — mova initialTodos para um estado com useState

  const todos = initialTodos

  function handleAddTodo(text) {
    // TODO: Etapa 3 — adicione a nova tarefa ao estado
    console.log('nova tarefa:', text)
  }

  function handleCheckTask(id) {
    // TODO: Etapa 3 — atualize o campo `done` da tarefa com o id recebido
    console.log('toggle tarefa:', id)
  }

  return (
    /* BUG Etapa 1: sem container centralizado — envolva o conteúdo em um div
       com largura máxima e centralizado na página */
    <div>
      {/* BUG Etapa 1: a lista aparece antes do título e do formulário */}
      <TodoList todos={todos} onCheck={handleCheckTask} />

      <TodoForm onAdd={handleAddTodo} />
    </div>
  )
}
