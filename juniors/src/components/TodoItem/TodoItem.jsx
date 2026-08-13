// BUG Etapa 1: sem estilos para o estado `done` (sem riscado, sem cor diferente)

export default function TodoItem({ todo, onCheck }) {
  return (
    <li>
      {/* BUG Etapa 1: checkbox sem estilo personalizado */}
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onCheck(todo.id)}
      />
      {/* BUG Etapa 1: texto sem line-through quando done === true */}
      <span>{todo.text}</span>
    </li>
  )
}
