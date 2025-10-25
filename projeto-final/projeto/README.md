# 📝 Projeto Final – To-Do List Interativa

> 🚀 Colocando tudo em prática: HTML, CSS e JavaScript dinâmico!

Este projeto é o desafio final da **Mentoria Frontend 2.0 – Nível Intermediário**, e tem como objetivo aplicar os principais conceitos aprendidos durante os quatro encontros.

Você vai criar uma aplicação interativa de **lista de tarefas (To-Do List)** com adição, remoção, conclusão e persistência de dados no navegador.

---

## 🎯 Objetivo do Projeto

Desenvolver uma aplicação simples, mas completa, que envolva:

- Manipulação de **DOM** com JavaScript puro.  
- Uso de **eventos** (click, input).  
- Armazenamento de dados com **localStorage**.  
- Boas práticas de **organização e componentização**.  
- Estrutura de código **limpa e reutilizável**.

---

## ⚙️ Funcionalidades Esperadas

- ✅ Adicionar uma nova tarefa à lista ao clicar no botão ou pressionar "Enter".
- ✅ Editar tarefas existentes - Permitir clicar em uma tarefa e editar o texto.
- ✅ Remover tarefas da lista.
- ✅ Marcar como concluída - Clicar em uma tarefa para marcar/desmarcar como concluída.
- ✅ Exibir contador de tarefas pendentes e concluídas.
- ✅ Salvar tarefas no **localStorage** para persistência entre sessões.
- ✅ Filtros de visualização - Adicionar botões: "Todas", "Pendentes", "Concluídas".

---

## 🧩 Estrutura de Arquivos

```
projeto-final/
│── index.html
│── style.css
│── script.js
│── README.md
```
- `index.html`: Estrutura básica da aplicação.  
- `style.css`: Estilos para a interface.
- `script.js`: Lógica da aplicação em JavaScript.  
- `README.md`: Documentação do projeto.


---

## 🧠 Lógica Principal

1. **Capturar os elementos do DOM** (`input`, `button`, `ul`).  
2. **Armazenar tarefas** em um array local e sincronizar com o `localStorage`.  
3. **Renderizar dinamicamente** a lista no HTML.  
4. **Lidar com eventos de clique** para adicionar e remover tarefas.  
5. **Atualizar automaticamente** o estado da aplicação sempre que algo mudar.

---

## 🧰 Exemplo de Estrutura HTML

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

---

## 🧾 Entrega Final

Envie o link do seu repositório GitHub (ou CodePen / Vercel) com o projeto funcionando.
Certifique-se de que:

- O HTML está indentado e sem erros.  
- O CSS segue boas práticas de estilo.
- O JavaScript está organizado e utiliza boas práticas de programação.
