const todosOsBtns = document.querySelectorAll('.btn');
const telaResultado = document.querySelector('.telaResultado p')

function adicionarCaracters(event) {
    const botaoClicado = event.target.innerText

    if(botaoClicado == "=" || botaoClicado == "AC" || botaoClicado == "backspace") return

    telaResultado.innerHTML += botaoClicado

    return botaoClicado
}



todosOsBtns.forEach((btns) => {
    btns.addEventListener('click', adicionarCaracters)
})