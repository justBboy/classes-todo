var todoList = [];
var createBtn = document.getElementById("create-btn");
var closeBtn = document.getElementById("close-modal");

function revealModal() {
    var modal = document.getElementById("modal");
    modal.classList.add("show");
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
}

createBtn.addEventListener("click", revealModal);
closeBtn.addEventListener("click", closeModal);