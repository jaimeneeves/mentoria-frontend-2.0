// 🧩 Encontro 1 – JavaScript Moderno na Prática
// Objetivo: Atualizar dinamicamente o card com dados do usuário.

// 1️⃣ Capturar os elementos do DOM (inputs, botão e card)

// 2️⃣ Criar uma função que atualize o conteúdo do card
//     - Mudar nome, profissão e imagem conforme os inputs

// 3️⃣ Adicionar um evento de clique no botão "Atualizar Card"
//     - Ao clicar, chamar a função de atualização

// 4️⃣ (Opcional) Criar um estado inicial (objeto com dados padrão)

// 💡 Dica: use textContent para textos e src para imagem.

// --- REMOVE OS CÓDIGOS ABAIXO ---

// Estado inicial do card
const state = {
  name: "Nome do Usuário",
  job: "Profissão",
  img: "https://avatar.iran.liara.run/public/27"
};

// Elementos
const nameEl = document.querySelector("#user-name");
const jobEl = document.querySelector("#user-job");
const imgEl = document.querySelector("#user-img");

const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-job");
const inputImg = document.querySelector("#input-img");
const btnUpdate = document.querySelector("#btn-update");

// Função para atualizar o card
const updateCard = () => {
  state.name = inputName.value || state.name;
  state.job = inputJob.value || state.job;
  state.img = inputImg.value || state.img;

  renderCard();
};

// Função de renderização
const renderCard = () => {
  nameEl.textContent = state.name;
  jobEl.textContent = state.job;
  imgEl.src = state.img;
};

// Evento de clique
btnUpdate.addEventListener("click", updateCard);

// Render inicial
renderCard();
