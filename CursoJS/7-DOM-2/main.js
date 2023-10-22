const itens =document.querySelector('.items')
// console.log(itens)

// itens.remove()

//  para pega o primeiro elemento
itens.firstElementChild.remove()

//  para pegar o ultimo elemento
itens.lastElementChild.remove()

// para trocar o texto do elemento
itens.children[0].textContent = 'Segundo item'

const button = document.querySelector('.btn')
button.style.background = '#255413'
button.style.color = '#fff'

// Para pegar o input
const input = document.querySelector('#name')
console.log(input)
input.style.background = '#854424'
input.style.color = '#444578'
