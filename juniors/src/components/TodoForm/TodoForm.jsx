import Button from '../Button/Button'
import InputField from '../InputField/InputField'

import {useForm} from 'react-hook-form'

import styles from './styles.module.css'
import { useMemo } from 'react'

// TODO: Etapa 2 — importe useForm do react-hook-form
// import { useForm } from 'react-hook-form'

export default function TodoForm({ onAdd }) {
  // TODO: Etapa 2 — substitua os estados abaixo pelo useForm
  // const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const {control, register, formState: {errors}, handleSubmit} = useForm()

  function onSubmit() {
    console.log('teste')
    onAdd()

    // TODO: Etapa 2 — leia o valor do input, valide (mínimo 3 chars) e chame onAdd
    // TODO: Etapa 2 — exiba mensagem de erro se inválido
    // TODO: Etapa 2 — limpe o input após submissão válida
  }

  const currentError = useMemo(() => {
    if(errors?.task?.type === 'required') {
      return 'campo obrigatorio'
    }
  }, [errors])
  console.log(errors)

  return (
    /* BUG Etapa 1: sem espaçamento entre os elementos */
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/* BUG Etapa 1: título com hierarquia tipográfica invertida */}
      <h1 className={styles.todoTitle}>Adicione suas tarefas abaixo:</h1>

      <InputField
        label="Tarefa"
        placeholder="Tarefa aqui"
        helpText="This is a help text"
        {...register('task', {required: true})}
        error={currentError}
      />

      <Button>Adicionar</Button>
    </form>
  )
}
