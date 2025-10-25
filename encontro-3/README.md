# 🧠 ENCONTRO 3 – Componentização e Reutilização

> 🔁 Escrevendo menos e fazendo mais.

---

## 🎯 Objetivos

- Entender o conceito de componentes.
- Criar funções que retornam blocos de HTML reutilizáveis.
- Gerar conteúdo dinâmico com base em dados estruturados.

---

## 📘 Conteúdo por Slide

### 🖥️ Introdução

**Tema:** Componentização no desenvolvimento web.  
**Mensagem principal:** Componentes ajudam a organizar e reutilizar código.

---

### 🧩 O que são Componentes?
Componentes são blocos de código independentes que encapsulam estrutura, estilo e comportamento. Eles facilitam a manutenção e reutilização em diferentes partes da aplicação.

**Exemplo: Função Componente Simples**

<!-- os exemplos a seguir não devem usar o React como base, mas sim JS Vanilla -->

```js
function Botao(texto) {
  return `<button>${texto}</button>`;
}
console.log(Botao('Clique aqui')); // <button>Clique aqui</button>
```

```js
function Cartao(titulo, conteudo) {
  return `
    <div class="cartao">
      <h2>${titulo}</h2>
      <p>${conteudo}</p>
    </div>
  `;
}
console.log(Cartao('Bem-vindo', 'Este é um cartão de exemplo.'));
```

```js
const produtos = [
  { nome: 'Teclado', preco: 120 },
  { nome: 'Mouse', preco: 80 },
];
function ProdutoCard(produto) {
  return `
    <div class="produto-card">
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco}</p>
    </div>
  `;
}
const listaProdutos = produtos.map(ProdutoCard).join('');
console.log(listaProdutos);
```

```js
function createCard(title) {
  const div = document.createElement("div");
  div.className = "card";
  div.textContent = title;
  return div;
}
const container = document.getElementById("container");
const card1 = createCard("Card 1");
container.appendChild(card1);
```

<!-- os exemplos de reutilização -->

```js
function Alerta(mensagem, tipo) {
  const cores = {
    sucesso: 'green',
    erro: 'red',
    aviso: 'yellow'
  };
  return `<div style="color: ${cores[tipo]}">${mensagem}</div>`;
}
console.log(Alerta('Operação bem-sucedida!', 'sucesso'));
console.log(Alerta('Ocorreu um erro.', 'erro'));
```

<!-- os exemplos de reutilização com array -->

```js
const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 28 },
  { nome: 'Carla', idade: 22 }
];
function UsuarioCard(usuario) {
  return `
    <div class="usuario-card">
      <h4>${usuario.nome}</h4>
      <p>Idade: ${usuario.idade}</p>
    </div>
  `;
}

const listaUsuarios = usuarios.map(UsuarioCard).join('');
console.log(listaUsuarios);
```

```js
function TarefaItem(tarefa) {
  return `
    <li class="${tarefa.concluida ? 'concluida' : ''}">
      ${tarefa.titulo}
    </li>
  `;
}
const tarefas = [
  { titulo: 'Estudar JavaScript', concluida: false },
  { titulo: 'Fazer exercícios', concluida: true },
];
const listaTarefas = tarefas.map(TarefaItem).join('');
console.log(listaTarefas);
```

## Eventos Delegados

```js
const listaTarefas = document.getElementById('lista-tarefas');
listaTarefas.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('concluida');
  }
});
```
💡 `event.target` mostra quem disparou o evento — útil em listas dinâmicas.

```html 
<ul id="lista-tarefas">
  <li>Estudar JavaScript</li>
  <li>Fazer exercícios</li>
</ul>
```

---

### 📊 Trabalhando com Dados Estruturados

```js
const tarefas = [
  { titulo: 'Estudar JavaScript', concluida: false },
  { titulo: 'Fazer exercícios', concluida: true },
];
function TarefaItem(tarefa) {
  return `
    <li class="${tarefa.concluida ? 'concluida' : ''}">
      ${tarefa.titulo}
    </li>
  `;
}
const listaTarefas = tarefas.map(TarefaItem).join('');
console.log(listaTarefas);
```

### 🧰 Atividade Prática

A Atividade prática está detalhada no arquivo [projeto/README.md](projeto/README.md).

---

## 💡 Conexão com o projeto final:

> A lógica de componentização que desenvolvemos aqui será aplicada diretamente na criação dos cards de tarefas do Sistema Kanban, tornando o código modular, reutilizável e mais fácil de manter.