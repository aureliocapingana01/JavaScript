let user = document.querySelector('#nome').innerHTML = prompt('Digite o seu nome: ')

document.querySelector('#nome').style.color = 'red'


let msg = Number(prompt('ver mensagem escondida ? 1 - Sim / 2 - Não'))

if ( msg == 1) {
  let novoElemento = document.createElement('h2')
    novoElemento.innerHTML = 'Eu sou o novo elemento <br> criado por JavaScript'
    document.body.appendChild(novoElemento)
    
    novoElemento.style.color = 'green'
}

