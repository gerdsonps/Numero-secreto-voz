const menorValor = 1
const maiorValor = 1000
let numeroSorteado = parseInt(Math.random() * (maiorValor - menorValor + 1) + menorValor)

function gerarNumero() {
    return numeroSorteado
}

function alterarValoresHtml() {
document.querySelector("#menor-valor").innerHTML = menorValor 
document.querySelector("#maior-valor").innerHTML = maiorValor   

}
    
console.log(gerarNumero())
alterarValoresHtml()


