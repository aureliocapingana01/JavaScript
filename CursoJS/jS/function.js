
let numero1 = Number(prompt('Digite o primeiro número: '))
let numero2 = Number(prompt('Digite o segundo número: '))
let operador = prompt(
    'Escolha o operador \n 1-[Soma] \n 2-[Subtrair] \n 3-[Multiplicar] \n 4-[Dividir]'
    )


const operacaoMatematica = () => {
    if (operador == 1) {
        return numero1 + numero2
    }
    else if (operador == 2) {
       if (numero1 >= numero2 && numero2 != 0) {
        return numero1 - numero2
       }
       else {
        return 'Erro, tente mais tarde'
       }
    }
    else if (operador == 3) {
        return numero1 * numero2
    }
    else if (operador == 4) {
        if (numero1 >= numero2 && numero2 != 0) {
            return numero1 / numero2
        }
        else {
            return 'Erro, tente mais tarde'
        }
    }
    else {
        return 'ERRO, ESCOLHA UMA DAS OPCOES ACIMA'
    }

}

console.log(operacaoMatematica())