// ⚙️ Encontro 2 – Arrays, Objetos e Interatividade
// Objetivo: Exibir uma lista dinâmica de itens e aplicar filtros.

// 1️⃣ Criar um array de objetos (ex: cursos, filmes ou produtos)
//     - Cada objeto deve ter propriedades como nome e categoria

// 2️⃣ Criar uma função que renderize a lista de itens na tela
//     - Usar forEach, map ou innerHTML para gerar o conteúdo

// 3️⃣ Criar botões de filtro (ex: “Mostrar só JavaScript”)
//     - Adicionar eventos que filtram o array com filter()

// 4️⃣ (Opcional) Criar um botão “Mostrar tudo” que reseta a lista

// 💡 Dica: use template literals para montar o HTML dinamicamente.


// --- REMOVE OS CÓDIGOS ABAIXO ---

const courses = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
];

const listEl = document.createElement("ul");
document.body.appendChild(listEl);

function renderList(filter = "all") {
  listEl.innerHTML = "";

  const filtered = filter === "all" 
    ? courses 
    : courses.filter(c => c.category === filter);

  filtered.forEach(course => {
    const li = document.createElement("li");
    li.textContent = `${course.name} - ${course.category}`;
    listEl.appendChild(li);
  });
}

renderList();

const btnFrontend = document.createElement("button");
btnFrontend.textContent = "Mostrar só Frontend";
btnFrontend.addEventListener("click", () => renderList("Frontend"));
document.body.appendChild(btnFrontend);
