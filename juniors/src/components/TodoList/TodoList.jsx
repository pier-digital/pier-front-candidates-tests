import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ todos, onCheck }) {
  return (
    // BUG Etapa 1: sem espaçamento entre os itens
    <ul style={{ listStyle: 'none' }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onCheck={onCheck} />
      ))}
    </ul>
  )
}
