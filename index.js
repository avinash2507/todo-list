const formcom = document.querySelector(".form");
let list = JSON.parse(localStorage.getItem("list"));

console.log("list");
const inputcom = document.querySelector(".input");
const ulcomp = document.querySelector(".list");
formcom.addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(inputcom.value);
  toDoList();
});

list.forEach(task => {
    return toDoList(task);
});
function toDoList(task) {
  let newTask = inputcom.value;
  if (task) {
    newTask = task.name;
  }
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulcomp.appendChild(liEl);
  inputcom.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = ` <i class="fa-solid fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);
  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });
  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}
function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
   list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
