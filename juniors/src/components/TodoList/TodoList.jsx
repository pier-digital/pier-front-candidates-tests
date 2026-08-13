import TodoItem from '../TodoItem/TodoItem'

import styles from './styles.module.css'

export default function TodoList({ todos, onCheck }) {
  return (
    // BUG Etapa 1: sem espaçamento entre os itens
    <ul className={styles.todoList}>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCheck={onCheck} />
      ))}
    </ul>
  )
}
