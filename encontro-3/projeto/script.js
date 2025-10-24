// 🧠 Encontro 3 – Componentização e Reutilização
// Objetivo: Criar uma função que gere cards dinâmicos e reutilizáveis.

// 1️⃣ Criar uma função createCard(dados)
//     - Essa função deve retornar um bloco de HTML (card)

// 2️⃣ Criar um array com diferentes tipos de dados
//     - Ex: cursos, alunos, projetos

// 3️⃣ Percorrer o array e gerar os cards dinamicamente
//     - Usar forEach e inserir os cards no container principal

// 4️⃣ (Opcional) Adicionar eventos em cada card
//     - Ex: clique para destacar o card selecionado

// 💡 Dica: tente usar dataset (data-type) para identificar o tipo do card.

// --- REMOVE OS CÓDIGOS ABAIXO ---

function createCard({ title, category }) {
  const card = document.createElement("div");
  card.className = "card mb-3";
  card.innerHTML = `
    <h3>${title}</h3>
    <p>${category}</p>
  `;
  return card;
}

const container = document.createElement("section");
document.body.appendChild(container);

const items = [
  { title: "Curso de JS", category: "Frontend" },
  { title: "Curso de Node", category: "Backend" },
];

items.forEach(item => {
  const card = createCard(item);
  container.appendChild(card);
});
