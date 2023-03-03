
/* Calcular o preco do imovel */

function CalcularImovel(metragem, quartos) {
    let m2 = 3000
    let  preco = 0
    
    switch (quartos) {
        case 1:
            preco = metragem * m2
            break;
        case 2:
            preco = metragem * (m2 * 1.2)
            break;
        case 3:
            preco = metragem * (m2 * 1.5)
            break;
        default:
            if(preco = 4) {
                preco = undefined
            }
            break;
    }
    return preco
}

let metragem = 123
let quartos = 4
let preco = CalcularImovel(metragem, quartos)
console.log(`A casa custa R$ ${preco}`)