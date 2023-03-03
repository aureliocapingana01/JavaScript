// Funcao dentro de outra funcao

const addSquares = (a, b) => {
    const square = (x) => {
        return x * x
    }

    return square(a) + square(b)
}

console.log(addSquares(2,3))