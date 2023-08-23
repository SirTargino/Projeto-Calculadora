const input = document.getElementById("texto")
const mostraConta = document.getElementById("conta")

var valorUm = 0
var valorDois = 0

var opAtual = 0

const botoesNumericos = [
    document.getElementById("btn0"),
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
    document.getElementById("btn5"),
    document.getElementById("btn6"),
    document.getElementById("btn7"),
    document.getElementById("btn8"),
    document.getElementById("btn9")
]

const botoesFuncionais = [
    document.getElementById("dot"),
    document.getElementById("clear")
]

const botoesOp = [
    document.getElementById("soma"),
    document.getElementById("subtr"),
    document.getElementById("mult"),
    document.getElementById("divide")
]

const igual = document.getElementById("igual")

for (let i = 0; i < botoesNumericos.length; i++) {
    botoesNumericos[i].addEventListener("click", function(){
        input.value += i
    })
}

botoesFuncionais[0].addEventListener("click", function(){
    input.value += "."
})

botoesFuncionais[1].addEventListener("click", function(){
    valorUm = 0
    valorDois = 0
    input.value = ""
    mostraConta.innerText = ""
})

botoesOp[0].addEventListener("click", function soma(){
    opAtual = 1
    if (valorUm == 0) {
        valorUm = Number(input.value)
        input.value = ""
    }else if(valorUm !== 0){
        valorDois = Number(input.value)
        mostraConta.innerText = valorUm + " + " + valorDois
        input.value = ""

        input.value = valorUm+valorDois
        valorUm = 0
        valorDois = 0
    }
})

botoesOp[1].addEventListener("click", function sub(){
    opAtual = 2
    if (valorUm == 0) {
        valorUm = Number(input.value)
        input.value = ""
    }else if(valorUm !== 0){
        valorDois = Number(input.value)
        input.value = ""
        
        input.value = valorUm-valorDois
        valorUm = 0
        valorDois = 0
    }
})

botoesOp[2].addEventListener("click", function vezes(){
    opAtual = 3
    if (valorUm == 0) {
        valorUm = Number(input.value)
        input.value = ""
    }else if(valorUm !== 0){
        valorDois = Number(input.value)
        input.value = ""
        
        input.value = valorUm*valorDois
        valorUm = 0
        valorDois = 0
    }
})

botoesOp[3].addEventListener("click", function divd(){
    opAtual = 4
    if (valorUm == 0) {
        valorUm = Number(input.value)
        input.value = ""
    }else if(valorUm !== 0){
        valorDois = Number(input.value)
        input.value = ""
        
        input.value = valorUm/valorDois
        valorUm = 0
        valorDois = 0
    }
})

igual.addEventListener("click", function(){
    if(opAtual == 0){
        input.value = valorUm
        valorUm = 0
        valorDois = 0
    }else if(opAtual == 1){
        mostraConta.innerText = valorUm + " + " + Number(input.value)
        input.value = valorUm + Number(input.value)
        valorUm = 0
        valorDois = 0
    }else if(opAtual == 2){
        mostraConta.innerText = valorUm + " - " + Number(input.value)
        input.value = valorUm - Number(input.value)
        valorUm = 0
        valorDois = 0
    }else if(opAtual == 3){
        mostraConta.innerText = valorUm + " x " + Number(input.value)
        input.value = valorUm * Number(input.value)
        valorUm = 0
        valorDois = 0
    }else if(opAtual == 4){
        mostraConta.innerText = valorUm + " ÷ " + Number(input.value)
        input.value = valorUm / Number(input.value)
        valorUm = 0
        valorDois = 0
    }
})