const todosOsBtns = document.querySelectorAll(".btn");
const btnsApagar = document.querySelectorAll('.btnApagar')
const telaResultado = document.querySelector(".telaResultado p");

function adicionarCaracters(event) {
    const botaoClicado = event.target.innerText;

    if (botaoClicado == "AC" || botaoClicado == "backspace"){
        apagarCaracters(botaoClicado);
        return
    } else if(botaoClicado == "="){
        operacao()
        return
    }

    telaResultado.innerHTML += botaoClicado;
}

function apagarCaracters(btn){
    const totalCaracters = telaResultado.innerHTML
    if(btn == "AC"){
        telaResultado.innerHTML = ""
    } else if(btn == "backspace"){
        const removeUltimoCaracter = totalCaracters.substring(0, totalCaracters.length - 1)
        telaResultado.innerHTML = removeUltimoCaracter
    };
}


todosOsBtns.forEach((btns) => {
    btns.addEventListener("click", adicionarCaracters);
});