/*
Uso do Map:

let lista = [45, 5, 12, 2, 7, 20]
let lista2 = []

lista2 = lista.map((item) => {
    return item * 2
})

let res = lista2
console.log(res)

*/

// Uso do filter

let lista = [45, 5, 12, 2, 7, 20]
let lista2 = []

lista2 = lista.filter((number) => {
    return (number >= 20) ? true : false
})

let res = lista2
console.log(res)