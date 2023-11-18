const numeroSorteadoConvertido = numeroSorteado + 0

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

document.querySelector('.texto-numero').innerHTML = 'Vamos começar? Fale um número.'


function onSpeak(e) {
    const numeroFalado = e.results[0][0].transcript;
    seChuteValido(numeroFalado)

    const mensagem = document.querySelector('.texto-numero');
    const numeroFaladoConvertido = parseInt(numeroFalado);

    document.querySelector('.box').innerHTML = numeroFalado;

    if (numeroSorteadoConvertido < numeroFaladoConvertido) {
        mensagem.innerHTML = `O número secreto é menor <i class="fa-solid fa-down-long"></i>`;
    } else if (numeroSorteadoConvertido > numeroFaladoConvertido) {
        mensagem.innerHTML = `O número secreto é maior <i class="fa-solid fa-up-long"></i>`;
    } else if (numeroSorteadoConvertido === numeroFaladoConvertido) {
        acertouNumero()
    }

    seChuteValido(numeroFalado)
}

recognition.addEventListener('end', () => recognition.start())


