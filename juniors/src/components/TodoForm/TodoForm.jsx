import Button from '../Button/Button'
import InputField from '../InputField/InputField'

// TODO: Etapa 2 — importe useForm do react-hook-form
// import { useForm } from 'react-hook-form'

export default function TodoForm({ onAdd }) {
  // TODO: Etapa 2 — substitua os estados abaixo pelo useForm
  // const { register, handleSubmit, reset, formState: { errors } } = useForm()

  function onSubmit(e) {
    e.preventDefault()
    // TODO: Etapa 2 — leia o valor do input, valide (mínimo 3 chars) e chame onAdd
    // TODO: Etapa 2 — exiba mensagem de erro se inválido
    // TODO: Etapa 2 — limpe o input após submissão válida
  }

  return (
    /* BUG Etapa 1: sem espaçamento entre os elementos */
    <form onSubmit={onSubmit}>
      {/* BUG Etapa 1: título com hierarquia tipográfica invertida */}
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Adicione suas tarefas abaixo:</p>

      <InputField
        label="Tarefa"
        placeholder="Tarefa aqui"
        helpText="This is a help text"
        /* TODO: Etapa 2 — passe error e {...register('task')} */
      />

      <Button>Adicionar</Button>
    </form>
  )
}
