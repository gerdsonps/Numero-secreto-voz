function seChuteValido(chute) {
    const mensagemValidacao = document.querySelector('.texto-numero')
    
    if (chuteInvalido(chute)) {
        mensagemValidacao.innerHTML = 'Ops! Você precisa falar um número válido.'
        document.querySelector('.box').innerHTML = '👀'
        return
    } 

    if (chuteMaiorOuoMenor(chute)) {
        document.querySelector('.box').innerHTML = '😒'
        document.querySelector('.texto-numero').innerHTML = `O número secreto precisa estar entre ${menorValor} e ${maiorValor}`
        return
    } 
}

function chuteInvalido(chute) {
    return Number.isNaN(Number(chute));
}

function chuteMaiorOuoMenor (numero) {
    return numero > maiorValor || numero < menorValor
}

function acertouNumero () {
    document.body.innerHTML =
        `<h1>Parabéns, você acertou! 👌</h1>
         <h2>O número secreto era: ${numeroSorteado}</h2>
         <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
        
}

document.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})