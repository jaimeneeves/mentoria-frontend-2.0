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
