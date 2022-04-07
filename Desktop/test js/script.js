let button = document.querySelector(".tab-modal");
let modal = document.querySelector('.modal');
let buttonD = document.getElementById("myBtn")

buttonD.addEventListener("click", () => {
    console.log("sami");
    modal.classList.toggle("hidden")
})

button.addEventListener('click', () => {

    modal.classList.toggle('nav-active');
});

























// const openModal = function () {
//     button.classList.remove('modal');
//     console.log('open modal')
//     document.toggle('modal')

// };
// button.addEventListener('click', openModal)