console.log("test")
let button = document.querySelector(".btn2-modal");
let modal = document.querySelector('.modal');
let butto = document.getElementById("btn")


butto.addEventListener("click", () => {
    console.log("test button");
    modal.classList.toggle("hidden");
})

button.addEventListener("click", () => {
    console.log("test")
    modal.classList.toggle('modal');
});