const abrirModal = document.querySelector("#open-modal");
const fecharModal = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[abrirModal, fecharModal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})