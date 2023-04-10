/*
////////////Uso do Map:

let lista = [45, 5, 12, 2, 7, 20]
let lista2 = []

lista2 = lista.map((item) => {
    return item * 2
})

let res = lista2
console.log(res)

*/

///////////////// Uso do filter

/*
let lista = [45, 5, 12, 2, 7, 20]
let lista2 = []

lista2 = lista.filter((number) => {
    return (number >= 20) ? true : false
})

let res = lista2
console.log(res)
*/


/////////// Uso do find

let lista = [
    {id: 1, nome: 'Aurélio', sobrenome: 'Capingana'},
    {id: 2, nome: 'Afonso', sobrenome: 'Cameia'},
    {id: 3, nome: 'Beatriz', sobrenome: 'Camargo'},  
    {id: 4, nome: 'Ana', sobrenome: 'Canjala'}
]

const pessoa = lista.find((item) => {
    return (item.nome == 'Afonso') ? true : false
})

const res = pessoa
console.log(res)