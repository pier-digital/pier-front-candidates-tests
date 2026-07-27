# Teste Técnico — Front-end Junior

Bem-vindo ao teste técnico! Você vai trabalhar em um projeto React com Tailwind CSS.

O template já está criado, mas ele tem problemas intencionais de layout e funcionalidade. **Sua missão é corrigi-los em 3 etapas**, implementando o resultado final a partir de um layout no Figma.

Para estilizar, você pode usar **styled-components** (já instalado como dependência) **ou CSS Modules** (crie um arquivo `.module.css` e importe-o no componente). Escolha a abordagem com a qual se sentir mais confortável — o critério é o resultado visual, não a ferramenta.

---

## Layout de referência

O resultado esperado está documentado no Figma:

**Link:** https://www.figma.com/design/jnjBQqwEWLM7VwNsxNdT04/-14--Teste-junior?node-id=1-285&m=dev&t=QkQDoeUQ9xk8ktix-1
**Senha:** vale a pena ser honesto

Use o Figma como referência visual para cores, espaçamentos, tipografia e comportamentos de estado (ex: estado de erro do input).

---

## Como começar

O projeto está disponível no CodeSandbox. Você pode editar diretamente no browser, sem precisar instalar nada.

O único arquivo que você precisa editar é o **`src/App.jsx`**.

---

## As 3 Etapas

### Etapa 1 — Ajustar o Layout

O layout atual está propositalmente bagunçado. Seu objetivo é deixá-lo limpo e fiel ao design do Figma.

Problemas para corrigir:
- A lista de tarefas aparece antes do título e do formulário — reorganize a ordem
- O título `<h1>` está com fonte minúscula e o parágrafo com fonte gigante — corrija a hierarquia tipográfica
- Não há container centralizado — envolva o conteúdo em um `<div>` centralizado com largura máxima
- O botão "Registrar" e o botão "X" têm `style` inline com cores ruins — substitua por estilos corretos seguindo o Figma
- O input não tem borda nem espaçamento visível — estilize-o conforme o Figma (label, borda arredondada, estado de erro)
- Não há espaçamento entre os elementos — adicione espaçamento adequado

> **Dica:** Remova todos os atributos `style={{...}}` inline e substitua por styled-components ou CSS Modules. Consulte o Figma para os valores de cor e espaçamento.

---

### Etapa 2 — Gerenciamento do Formulário

O formulário existe mas não faz nada ao ser submetido. Implemente:

1. **Controle do input** — crie um estado com `useState` e conecte ao `<input>` via `value` e `onChange`
2. **Validação** — ao submeter, valide:
   - O campo não pode estar vazio
   - O texto deve ter no mínimo **3 caracteres**
3. **Mensagem de erro** — exiba a mensagem de erro abaixo do input (veja o estado de erro no Figma: borda vermelha + texto de help em vermelho)
4. **Limpeza** — limpe o input e o erro após uma submissão válida

> Os comentários `// TODO: Etapa 2` no código indicam exatamente onde trabalhar.

---

### Etapa 3 — Renderização e Gerenciamento da Todo List

A lista atual é estática (hardcoded) e o botão de excluir não funciona. Implemente:

1. **Estado da lista** — mova `initialTodos` para um `useState`
2. **Adicionar tarefa** — conecte o submit do formulário para adicionar a nova tarefa ao estado
3. **Excluir tarefa** — implemente `handleDelete` usando `filter()` para remover o item pelo `id`
4. **Renderização dinâmica** — a lista deve refletir o estado em tempo real (veja o estilo dos itens no Figma: texto + ícone de lixeira à direita, separados por linha)

> Os comentários `// TODO: Etapa 3` no código indicam exatamente onde trabalhar.

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
