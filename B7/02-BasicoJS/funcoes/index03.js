
/* Exercicio: função para calcular porcentagem entre dois numeros */

function calc(n1, n2) {
    return (n2 / n1) * 100
}

let x = 50
let y = 11
let porcentagem = calc(x, y)
console.log(`${porcentagem}% de ${x} é ${y}`)
