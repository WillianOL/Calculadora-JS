const todosOsBtns = document.querySelectorAll(".btn");
const btnsApagar = document.querySelectorAll(".btnApagar");
const telaResultado = document.querySelector(".telaResultado p");
const caracterOperacao = document.querySelectorAll(".caracterEspecial");

function adicionarCaracters(event) {
    const botaoClicado = event.target.innerText;

    if (
        botaoClicado == "=" ||
        botaoClicado == "AC" ||
        botaoClicado == "backspace"
    ) {
        apagarCaracters(botaoClicado);
        return;
    }

    telaResultado.innerHTML += botaoClicado;
}

function apagarCaracters(btn) {
    const totalCaracters = telaResultado.innerHTML;
    if (btn == "AC") {
        telaResultado.innerHTML = "";
    } else if (btn == "backspace") {
        const removeUltimoCaracter = totalCaracters.substring(0, totalCaracters.length - 1);
        telaResultado.innerHTML = removeUltimoCaracter;
    }
}

function operacao(btn) {
    
}

caracterOperacao.forEach((btns) => {
    btns.addEventListener("click", operacao);
});

todosOsBtns.forEach((btns) => {
    btns.addEventListener("click", adicionarCaracters);
});
