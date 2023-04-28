// Operador Spread

/* Primeiro Exemplo


let numbers = [1,2,3,4]
let outros = [...numbers,5,6,7,8]
console.log(outros)

*/

const addInfo = (info) => {
    let newInfo = {
        ...info,
        status: 812,
        token: 'Ganhou uma bolada',
        data: '0222-02-02'
    }
    return newInfo
}

const info = {
    nome: 'Aurélio', 
    sobrenome: 'Capingana'
}

console.log(addInfo(info))