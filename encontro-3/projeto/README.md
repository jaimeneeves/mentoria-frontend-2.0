# 🧠 Encontro 3 – Componentização e Reutilização

> 🔁 Escrevendo menos e fazendo mais.

---

## 🎯 Objetivo

Criar um **sistema de cards reutilizáveis** usando funções JavaScript.

O objetivo é entender o que é um **componente** (mesmo sem React) e como reutilizar código.

---

## 🧰 Instruções

1. O HTML e o CSS estão prontos.  
2. No **`script.js`**, você deve:
   - Criar uma função `createCard()` que recebe dados (ex: título, categoria, imagem).  
   - Essa função deve retornar um bloco de HTML (card).  
   - Reutilizar a função para gerar vários cards dinamicamente.

---

## 💡 Dica

- Funções podem **retornar strings** de HTML ou **elementos criados via `createElement()`**.  
- Use loops (`forEach`) para percorrer arrays de dados.  
- Experimente usar `dataset` para identificar o tipo de card (ex: `data-type="curso"`).

---

## 📂 Estrutura

```encontro-3/
│── index.html
│── style.css
│── script.js
│── README.md
```
- `index.html`: Estrutura básica da página.
- `style.css`: Estilos para a página.
- `script.js`: Lógica para criar e renderizar os cards.
- `README.md`: Documentação do projeto.


---

## 🧠 Desafio Extra

- Reutilize a função para criar diferentes tipos de cards (curso, aluno, projeto).  
- Adicione um evento de clique que destaque o card selecionado.

---

> 💬 *Esse encontro é a base para pensar em componentes reutilizáveis — um conceito central em frameworks modernos.*
