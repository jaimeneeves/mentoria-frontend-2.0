# 🧩 ENCONTRO 1 – JavaScript Moderno na Prática

> 🧠 Entendendo o poder do JS e como organizar melhor o código

---

## 🎯 Objetivos
- Relembrar variáveis, funções e eventos.  
- Usar **funções modernas** e **template literals**.  
- Atualizar dinamicamente o conteúdo da tela (conceito de estado).  

---


## 📘 Conteúdo por Slide

### 🖥️ Slide 1 – Introdução

**Tema:** JavaScript moderno na prática.  
**Mensagem principal:** O JS é o motor que dá vida ao HTML e CSS.

---

### ⚙️ Slide 2 – Funções Modernas

**Arrow Functions:**

```js
const saudacao = (nome) => `Olá, ${nome}!`;
console.log(saudacao("Jaime"));
```

**Parâmetros Padrão:**

```js
const multiplicar = (a, b = 1) => a * b;
console.log(multiplicar(5, 2));
console.log(multiplicar(5));
```

```html
<button id="btn">Clique</button>
<script>
// Função normal — THIS aponta pro elemento no addEventListener
document.getElementById('btn').addEventListener('click', function () {
  this.textContent = 'Cliquei com function()';
});

// Arrow — THIS não muda (herda do escopo externo), então NÃO é o botão
document.getElementById('btn').addEventListener('click', (e) => {
  // e.target é a forma correta aqui
  e.target.style.background = '#2563eb';
  e.target.textContent = 'Cliquei com arrow';
});
</script>
```

💡 Arrow functions são mais curtas e não mudam o valor do this.


📹 **Material de apoio:** [Arrow vs Function no DOM: Entenda o THIS de uma vez!](https://www.youtube.com/watch?v=WIYFOAwSu9E)

### 🧩 Slide 3 – Template Literals


**Interpolação de strings:**

```js
const nome = "Jaime";
const idade = 30;
const apresentacao = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(apresentacao);
```

💡 Use crases (`) para unir texto e variáveis de forma elegante.

### 🖥️ Slide 4 – Manipulação Dinâmica do DOM

**Acessando e alterando elementos:**

```js
const titulo = document.querySelector('h1');
titulo.textContent = 'Mentoria Frontend 2.0';
```

💡 querySelector() seleciona o elemento e textContent muda o texto.

**Exemplo prático: Atualizando um card de usuário**

```html
<div id="user-card">
  <h2 id="user-name">Nome: Jaime</h2>
  <p id="user-age">Idade: 30</p>
</div>
<script>
  const nome = "Jaime";
  const idade = 30;
  document.getElementById('user-name').textContent = `Nome: ${nome}`;
  document.getElementById('user-age').textContent = `Idade: ${idade}`;
</script>
```

### 🧠 Conceito de Estado

**O que é estado?**

O estado é a informação que muda ao longo do tempo em uma aplicação. Ele pode incluir dados como:

- Informações do usuário (nome, idade, etc.)
- Itens em um carrinho de compras
- Dados de formulários

**Por que o estado é importante?**

Gerenciar o estado de forma eficiente é crucial para criar aplicações interativas e responsivas. Quando o estado muda, a interface do usuário deve ser atualizada para refletir essas mudanças.

**Exemplo prático:**

```html
<div id="app">
  <h1 id="title">Título</h1>
  <button id="update-btn">Atualizar Título</button>
</div>
<script>
  let title = "Título Original";
  document.getElementById('title').textContent = title;

  document.getElementById('update-btn').addEventListener('click', () => {
    title = "Título Atualizado";
    document.getElementById('title').textContent = title;
  });
</script>

### 🧰 Atividade Prática

> Criar um card de usuário dinâmico.

- Inputs para nome, profissão e imagem.
- Botão que atualiza o card ao clicar.

💪 O JavaScript conecta os dados da sua lógica ao que o usuário vê.