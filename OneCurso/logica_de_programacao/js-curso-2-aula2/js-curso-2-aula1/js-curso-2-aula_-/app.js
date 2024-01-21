let = numeroSecreto = numeroAleatorio() 
let tentativas = 1


/* Funcao com parametro, para exibir os texto */
/* Fução com parametro */
const exibirTexto = (tag, texto) => {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirMsgInicial() {
    exibirTexto('h1', 'Bem vindo ao Jogo')
    exibirTexto('p', 'Escolha um número entre 1 á 10')
}

exibirMsgInicial()

/* Fução sem retorno */
function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Parabéns')
        let msgTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

        let mensagemTentativas = `você descubriu o número secreto, com ${tentativas} ${msgTentativa}`
        exibirTexto('p', mensagemTentativas)

        document.querySelector('#reiniciar').removeAttribute('disabled')
    }
    else {
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O você número secreto é menor')
        }
        else {
            exibirTexto('p', 'O você número secreto é maior')
        }
        tentativas++

        limparCampo()
    }
}

/* Fução com retorno */
function numeroAleatorio() {
   return parseInt(Math.random() * 100 + 1)
}

/*Funcao para limpar o campo */
const limparCampo = () => {
    chute = document.querySelector('input')
    chute.value = ''
}

/* Funcao para reiniciar o jogo assim que acerta */
const reiniciarJogo = () => {
    numeroSecreto = numeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMsgInicial()
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}