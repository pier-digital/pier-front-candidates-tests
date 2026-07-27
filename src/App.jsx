import { useState } from "react";

/*
  AVISO: Este arquivo contém problemas intencionais de layout e funcionalidade.
  Seu trabalho é corrigi-los nas 3 etapas descritas no README.
  Não apague os comentários "TODO" — eles guiam cada etapa.

  ESTILIZAÇÃO: Você pode usar styled-components (já instalado como dependência) OU CSS Modules
  (crie um arquivo App.module.css e importe-o aqui). Escolha a abordagem com a qual se sentir mais confortável.
*/

// Dados iniciais hardcoded — NÃO interativos ainda (Etapa 3)
const initialTodos = [
  { id: 1, text: "Comprar leite" },
  { id: 2, text: "Estudar React" },
  { id: 3, text: "Fazer exercícios" },
];

export default function App() {
  // TODO: Etapa 2 — Crie um estado para controlar o valor do input
  // Exemplo: const [inputValue, setInputValue] = useState("");

  // TODO: Etapa 2 — Crie um estado para armazenar a mensagem de erro
  // Exemplo: const [error, setError] = useState("");

  // TODO: Etapa 3 — Mova initialTodos para um estado com useState
  // Exemplo: const [todos, setTodos] = useState(initialTodos);

  // TODO: Etapa 2 — Implemente a lógica de submit
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Etapa 2 — Valide: campo não pode ser vazio e deve ter mínimo 3 caracteres
    // Se inválido, atualize o estado de erro e retorne sem adicionar
    // Se válido, limpe o erro e o input

    // TODO: Etapa 3 — Adicione a nova tarefa ao estado de todos
    // Dica: use setTodos para criar um novo array com a nova tarefa no final
  }

  // TODO: Etapa 3 — Implemente a exclusão de tarefas
  function handleDelete(id) {
    // TODO: Etapa 3 — Filtre o array de todos removendo o item com o id recebido
    // Dica: use setTodos com um filter()
  }

  return (
    // PROBLEMA INTENCIONAL (Etapa 1): sem container centralizado, sem padding
    <div>

      {/* PROBLEMA INTENCIONAL (Etapa 1): a lista aparece ANTES do título e formulário */}
      <ul>
        {initialTodos.map((todo) => (
          // PROBLEMA INTENCIONAL (Etapa 1): cores e tamanhos com style inline
          <li key={todo.id} style={{ color: "green", fontSize: "20px", listStyle: "none" }}>
            {todo.text}
            {/* PROBLEMA INTENCIONAL (Etapa 1): botão sem estilo, margem absurda */}
            <button
              style={{ background: "red", color: "white", marginLeft: "999px", border: "none" }}
              onClick={() => handleDelete(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {/* PROBLEMA INTENCIONAL (Etapa 1): h1 com fonte pequena, parágrafo com fonte gigante */}
      <h1 style={{ fontSize: "10px", fontWeight: "normal", color: "#aaa" }}>
        MINHA LISTA DE TAREFAS
      </h1>
      <p style={{ fontSize: "28px", fontWeight: "900" }}>
        Adicione suas tarefas abaixo:
      </p>

      {/* PROBLEMA INTENCIONAL (Etapa 1): formulário sem espaçamento, sem estrutura */}
      <form onSubmit={handleSubmit}>
        {/* TODO: Etapa 2 — Adicione value={inputValue} e onChange para controlar o input */}
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          style={{ border: "none", outline: "none" }}
        />

        {/* TODO: Etapa 2 — Renderize a mensagem de erro aqui quando o estado de erro não estiver vazio */}

        {/* PROBLEMA INTENCIONAL (Etapa 1): botão sem padding, cor vermelha crua */}
        <button
          type="submit"
          style={{ background: "#ff0000", color: "white", padding: "0px", border: "none" }}
        >
          Registrar
        </button>
      </form>

    </div>
  );
}
