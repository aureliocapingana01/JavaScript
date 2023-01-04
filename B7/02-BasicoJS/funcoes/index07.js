
/* Variavel dentro de funcao */
/*
let count = 0
function add() {
    count ++
}
add()
add()

 console.log(count)

*/

// Funcao dentro de funcao com arrayFunction

const addSquares = (a, b) => {

    const square = (x) => {
        return x * x
    }

    return square(a) + square(b)
}

console.log(addSquares(3, 3))