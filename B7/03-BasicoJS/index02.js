 
 /*** 1 Funcão com retorno */
/*
function nomeCompleto(nome, sobrenome){
    return `O novo cliente é ${nome} ${sobrenome}`
}
let completo = nomeCompleto('Aurélio', 'Capingana')

console.log(completo)

*/

/*** 2 Funcao com retorno condicional */ 

function maiorDeIdade(idade) {
    if(idade >= 18) {
        return true
    }
    else{
        return false
    }
}

let maior = maiorDeIdade(18)
console.log(`Ele tem ${maior}`)