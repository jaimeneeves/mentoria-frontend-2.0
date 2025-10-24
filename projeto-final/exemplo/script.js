const input = document.querySelector("#input-task");
const btnAdd = document.querySelector("#btn-add");
const list = document.querySelector("#task-list");
const counter = document.querySelector("#counter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.toggle("done", task.done);

    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button data-index="${index}" class="btn-done">✔️</button>
        <button data-index="${index}" class="btn-remove">❌</button>
      </div>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  updateCounter();
}

function updateCounter() {
  const pendentes = tasks.filter(t => !t.done).length;
  counter.textContent = `Tarefas pendentes: ${pendentes}`;
}

btnAdd.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ text, done: false });
  input.value = "";
  renderTasks();
});

list.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  if (e.target.classList.contains("btn-remove")) {
    tasks.splice(index, 1);
  } else if (e.target.classList.contains("btn-done")) {
    tasks[index].done = !tasks[index].done;
  }
  renderTasks();
});

renderTasks();
