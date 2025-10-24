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
