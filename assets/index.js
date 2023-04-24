const result = document.querySelector(".result")
const calculatorBtns = document.querySelectorAll(".btn")
const operationBtn = document.querySelector(".operar")

function addCaractersInResult(evento) {
    let caracter = evento.target.innerHTML

    if( caracter == "AC"){
        clearAllCaracters();
        return
    } else if( caracter == "C" ) {
        deletCaracter();
        return
    } else if( caracter == "=" ) {
        return
    }

    if( caracter == "X" ) {
        caracter = "*"
    } else if( caracter == "," ) {
        caracter = "."
    }

    result.innerHTML += caracter;
}
calculatorBtns.forEach( buttons => buttons.addEventListener("click", addCaractersInResult))

function clearAllCaracters() {
    result.innerHTML = ""
}

function deletCaracter() {
    let allCaracters = result.innerHTML
    result.innerHTML = allCaracters.substring(0, allCaracters.length - 1)
}

operationBtn.addEventListener("click", () => {
    result.innerHTML = eval(result.innerHTML)
})