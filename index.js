
let btn1 = document.getElementById("btn1")
let resultado = document.getElementById("resultado-fibonacci")

function verificarFibonacci() {
    let fiboSequence = [0, 1]
    let number = parseFloat(document.getElementById("number").value)

    for (let i = 2; fiboSequence[fiboSequence.length - 1] < number; i++) {
        let nextFib = fiboSequence[i - 1] + fiboSequence[i - 2]
        fiboSequence.push(nextFib)
    }

    if (fiboSequence.includes(number)) {
        resultado.innerHTML +=`O número ${number} pertence à sequência de Fibonacci. <br>`
    } else {
        resultado.innerHTML +=`O número ${number} não pertence à sequência de Fibonacci.<br>`
    }
}
btn1.addEventListener("click", verificarFibonacci)

let btn2 = document.getElementById("btn2");
let resultadoString = document.getElementById("resultado-string");

function verificarString() {
    let texto = document.getElementById("texto").value
    let quantidade = 0
    let lowertexto = texto.toLowerCase()
    resultadoString.innerHTML = ""

    for (let i = 0; i < lowertexto.length; i++) {
        if (lowertexto[i] === "a"){
            quantidade++
        }
    }

    if (quantidade > 0) {
        resultadoString.innerHTML += `A letra "a" aparece ${quantidade} vez(es) na String.<br>`
    } else {
        resultadoString.innerHTML += `A letra "a" não foi encontrada na String.<br>`
    }
}
btn2.addEventListener("click", verificarString)