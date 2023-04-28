const result = document.querySelector(".result")
const calculatorBtns = document.querySelectorAll(".btn")

function addCaractersInResult(button) {
    let caracter = button.target.innerHTML
    
    if( caracter == "X" ) {
        caracter = "*"
    } else if( caracter == "," ) {
        caracter = "."
    }

    if( caracter == "AC"){
        clearAllCaracters();
        return
    } else if( caracter == "C" ) {
        deletCaracter();
        return
    } else if( caracter == "=" ) {
        doOperation();
        return
    }

    result.innerHTML += caracter;
}
calculatorBtns.forEach( buttons => buttons.addEventListener("click", addCaractersInResult))

function clearAllCaracters() {
    result.innerHTML = ""
}

function deletCaracter() {
    const allCaracters = result.innerHTML
    result.innerHTML = allCaracters.substring(0, allCaracters.length - 1)
}

function doOperation() {
    if(result.innerHTML != ""){
        result.innerHTML = eval(result.innerHTML)
    }    
}