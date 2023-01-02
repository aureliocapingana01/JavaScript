var numerosMegaSena = document.getElementById('numerosMegaSena')
var numerosEscolhidos = []
var botaoJogar = document.getElementById('jogo')

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
        jogo.disabled = false
    }
}
var numerosSelecionados = []
var resultado = ""
var numerosSorteados = document.getElementById('numerosSorteados')
botaoJogar.addEventListener('click', numeros_aleatorio)

function numeros_aleatorio(){
    if(resultado != "")
       resultado = "";

       while(numerosSelecionados.length < 6){
          var aleatorio = Math.floor(Math.random()*60+1)

          if(numerosSelecionados.indexOf(aleatorio) == -1){
              resultado += aleatorio + " "
              numerosSelecionados.push(aleatorio)
          }
       }

       numerosSorteados.innerHTML = "os numeros foram +  resultado + parabéns"
}