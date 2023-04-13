const todosOsBtns = document.querySelectorAll(".btn");
const btnsApagar = document.querySelectorAll('.btnApagar')
const telaResultado = document.querySelector(".telaResultado p");

function adicionarCaracters(event) {
    const botaoClicado = event.target.innerText;

    if (botaoClicado == "=" || botaoClicado == "AC" || botaoClicado == "backspace"){
        apagarCaracters(botaoClicado);
        return
    }

    telaResultado.innerHTML += botaoClicado;
}

function apagarCaracters(btn){
    const totalCaracters = telaResultado.innerHTML
    const arrayCaracters = Array.from(totalCaracters)
    if(btn == "AC"){
        telaResultado.innerHTML = ""
    } else if(btn == "backspace"){
        
    };
}


todosOsBtns.forEach((btns) => {
    btns.addEventListener("click", adicionarCaracters);
});