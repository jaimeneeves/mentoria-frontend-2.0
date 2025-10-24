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
