# Teste Técnico — Front-end Junior

Bem-vindo ao teste técnico! Você vai trabalhar em um projeto React.

O template já está criado, mas ele tem problemas intencionais de layout e funcionalidade. **Sua missão é corrigi-los em 3 etapas**, implementando o resultado final a partir de um layout no Figma.

Para estilizar, você pode usar **styled-components** (já instalado como dependência) **ou CSS Modules** (crie um arquivo `.module.css` ou `.module.scss` e importe-o no componente). Escolha a abordagem com a qual se sentir mais confortável — o critério é o resultado visual, não a ferramenta.

---

## Layout de referência

O resultado esperado está documentado no Figma:

**Link:** https://www.figma.com/design/jnjBQqwEWLM7VwNsxNdT04/-14--Teste-junior?node-id=1-285&m=dev&t=QkQDoeUQ9xk8ktix-1  
**Senha:** `valeapenaserhonesto`

Use o Figma como referência visual para cores, espaçamentos, tipografia e comportamentos de estado (ex: estado de erro do input).

---

## Como começar

```bash
yarn install
yarn dev
```

---

## Estrutura do projeto

```
src/
├── App.jsx                        # Componente raiz — estado e composição
└── components/
    ├── Button/
    │   ├── Button.jsx             # ✅ Pronto
    │   └── Button.module.scss
    ├── InputField/
    │   ├── InputField.jsx         # ✅ Pronto (normal + estado de erro)
    │   └── InputField.module.scss
    ├── TodoForm/
    │   └── TodoForm.jsx           # ⚠️ Bugs de layout + lógica para implementar
    ├── TodoItem/
    │   └── TodoItem.jsx           # ⚠️ Bugs de layout para corrigir
    └── TodoList/
        └── TodoList.jsx           # ⚠️ Bug de layout para corrigir
```

Os componentes `Button` e `InputField` já estão implementados e podem ser usados como referência de estilo.

---

## As 3 Etapas

### Etapa 1 — Ajustar o Layout

O layout atual está propositalmente bagunçado. Seu objetivo é deixá-lo limpo e fiel ao design do Figma.

Problemas para corrigir (veja os comentários `// BUG Etapa 1` no código):

- **`App.jsx`** — A lista de tarefas aparece antes do título e do formulário — reorganize a ordem
- **`App.jsx`** — Não há container centralizado — envolva o conteúdo em um `<div>` centralizado com largura máxima
- **`TodoForm.jsx`** — O título está com tag e tamanho errados — corrija para um `<h1>` com a tipografia correta do Figma
- **`TodoForm.jsx`** — Não há espaçamento entre os elementos do formulário — adicione espaçamento adequado
- **`TodoList.jsx`** — Não há espaçamento entre os itens da lista
- **`TodoItem.jsx`** — O item não tem estilo para o estado concluído — quando `done === true`, aplique `text-decoration: line-through` e a cor correspondente no Figma

> **Dica:** Use styled-components ou CSS Modules para os estilos. Consulte o Figma para os valores de cor e espaçamento. Os componentes `Button` e `InputField` já são bons exemplos de como estilizar com StyledComponents, mas se quiser usar CSS-Modules, css puro, etc fique a votande..

---

### Etapa 2 — Gerenciamento do Formulário

O formulário existe mas não faz nada ao ser submetido. Implemente em **`TodoForm.jsx`**:

1. **Controle do input** — use `react-hook-form` (já instalado) para gerenciar o campo (ou se quiser instalar outro ou fazer na mão, sinta-se a vontade)
2. **Validação** — ao submeter, valide:
   - O campo não pode estar vazio
   - O texto deve ter no mínimo **3 caracteres**
   - OBS: Pode usar um schema aqui - YUP, Zod, etc
3. **Mensagem de erro** — exiba a mensagem de erro no `InputField` (prop `error`) — veja o estado de erro no Figma: borda laranja-avermelhada + texto de help em laranja-avermelhado
4. **Limpeza** — limpe o input e o erro após uma submissão válida

> Os comentários `// TODO: Etapa 2` em `TodoForm.jsx` indicam exatamente onde trabalhar.

---

### Etapa 3 — Renderização e Gerenciamento da Todo List

A lista atual é estática (hardcoded). Implemente em **`App.jsx`**:

1. **Estado da lista** — mova `initialTodos` para um `useState`
2. **Adicionar tarefa** — conecte o submit do formulário para adicionar a nova tarefa ao estado
3. **Finalizar tarefa** — implemente `handleCheckTask` para alternar o campo `done` da tarefa pelo `id`
4. **Renderização dinâmica** — a lista deve refletir o estado em tempo real

> Os comentários `// TODO: Etapa 3` em `App.jsx` indicam exatamente onde trabalhar.

---

## Critérios de Avaliação

| Critério | O que observamos |
|---|---|
| Fidelidade ao layout | Proximidade com o design do Figma (cores, espaçamentos, estados) |
| Gerenciamento de estado | Uso correto de `useState`, imutabilidade |
| Validação | Cobertura dos casos, feedback claro para o usuário |
| Clareza do código | Nomes de variáveis, organização, sem código morto |

---

## Dúvidas?

Se tiver qualquer dúvida sobre o enunciado, entre em contato com o recrutador. Boa sorte!
