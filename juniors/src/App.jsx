import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

import style from './app.module.css'

const initialTodos = [
  { id: 1, text: 'Comprar leite', done: false },
  { id: 2, text: 'Estudar React', done: false },
  { id: 3, text: 'Fazer exercícios', done: false },
]

export default function App() {
  // TODO: Etapa 3 — mova initialTodos para um estado com useState
  const [initialTodos, setInitialTodos] = useState([''])

  function handleAddTodo(text) {
    // TODO: Etapa 3 — adicione a nova tarefa ao estado
    setInitialTodos((oldState) => (
      [
        ...oldState,
        {
          id: 2,
          text: 'texto qualquer',
          done: false
        }
      ]

    ))
  }

  function handleCheckTask(id) {
    // TODO: Etapa 3 — atualize o campo `done` da tarefa com o id recebido
    setInitialTodos((oldState) => {
      return oldState.map((initialTodo) => {
        if(initialTodo.id === id) {[
          ...oldState,
          initialTodo.done: true
        ]
        }
      })
    })
  }

  return (
    /* BUG Etapa 1: sem container centralizado — envolva o conteúdo em um div
       com largura máxima e centralizado na página */
    <div className={style.appContainer}>
      {/* BUG Etapa 1: a lista aparece antes do título e do formulário */}
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={initialTodos} onCheck={handleCheckTask} />

    </div>
  )
}
