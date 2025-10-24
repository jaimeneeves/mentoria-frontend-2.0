🎨 ENCONTRO 4 – Mini Projeto Final: To-Do List

> 🚀 Colocando tudo em prática num projeto real.

## 🎯 Objetivos

- Unir tudo que foi aprendido.
- Criar uma aplicação completa com **interatividade e persistência**.

## 🗂️ Estrutura Base

HTML com input, botão e lista:

```html
<main class="todo">
  <h1>Minhas Tarefas</h1>

  <div class="input-group">
    <input id="input-task" type="text" placeholder="Digite uma tarefa">
    <button id="btn-add">Adicionar</button>
  </div>

  <ul id="task-list"></ul>

  <p id="counter"></p>
</main>
```

## ⚙️ Adicionando Itens

```js
const btnAdd = document.getElementById('btn-add');
const inputTask = document.getElementById('input-task');
const taskList = document.getElementById('task-list');
const counter = document.getElementById('counter');
const tasks = [];

btnAdd.addEventListener('click', () => {
  const text = input.value;
  tasks.push({ text, done: false });
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = tasks.map(task => `
    <li class="${task.done ? 'done' : ''}">${task.text}</li>
  `).join('');
  counter.textContent = `Total: ${tasks.length} tarefas`;
}
```

💡 Cada tarefa é um objeto no array tasks.

## 💾 Salvando no localStorage

```js
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks.push(...JSON.parse(saved));
    renderTasks();
  }
}
loadTasks();

btnAdd.addEventListener('click', () => {
  const text = input.value;
  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();
});
```


Agora é com você! Consulte a página do exemplo para ver as funcionalidades sugeridas e instruções extras: [projeto-exemplo/README.md](projeto-exemplo/README.md) (clique para abrir).