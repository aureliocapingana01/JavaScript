let numerosMegaSena = document.getElementById('numerosMegaSena')
let numerosEscolhidos = []
let botaoJogar = document.getElementById('jogo')

numerosMegaSena.addEventListener('click', function(corDeFundo){
    corDeFundo.target.style.background = "red"

    numerosEscolhidos.push(corDeFundo.target.innerHTML)
       if(numerosEscolhidos.length > 6){
           alert("Escolha somente 6 numeros")
           corDeFundo.target.style.background = "#bbbbbb"
           botaoJogar.disabled = false
           return
       }
       validaNumerosEscolhido()
})
function validaNumerosEscolhido(){
    if(numerosEscolhidos.length == 6){
        botaoJogar.disabled = false
    }
}