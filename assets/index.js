const todosOsBtns = document.querySelectorAll(".btn");
const telaResultado = document.querySelector(".telaResultado p");
let botaoClicado;

function adicionarCaracters(event) {
    botaoClicado = event.target.innerText;

    if (
        botaoClicado == "=" ||
        botaoClicado == "AC" ||
        botaoClicado == "backspace"
    )
        return;

    telaResultado.innerHTML += botaoClicado;
}

function apagarCaracter() {
    const bntApagarTudo = document.querySelector(".btnApagarTudo");
    const btnApagarCaracter = document.querySelector(".apagarCaracter");
}

todosOsBtns.forEach((btns) => {
    btns.addEventListener("click", adicionarCaracters);
});
