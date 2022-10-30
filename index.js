const tasklist = document.querySelector("#tasks");
const btnNew = document.querySelector("#newTask");

function createNewTask() {
  let text = document.querySelector("#task").value;
  document.querySelector("#task").value = "";
  let newTask = document.createElement("li");
  newTask.innerHTML = `<button class="delete"></button><span>${text}</span>`;
  newTask.children[0].addEventListener("click", (e) => {
    tasklist.removeChild(e.target.parentElement);
  });
  tasklist.appendChild(newTask);
}

btnNew.addEventListener("click", createNewTask);
window.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    createNewTask();
  }
});
