// Interação de Array

let country = [
    'China','Angola', 'Brasil', 'Portugal', 'Mocambique'
]

// let nationality = country.filter((item) => item.length <= 6)

// nationality.sort()

// console.log(nationality)



// o every retorna verdadeira se todos os itens do array satisfazerem a condicao 

// let nationality = country.every((value) => {
//     return value.length >= 5
// })
// if(nationality) {
//     console.log(`A nacionalidade é ${nationality}`)
// }
// else{
//     console.log('ERRO')
// }

// o some retorna verdadeira se alguns itens satisfazerem a codicao 

if(country.includes('Angola')) {
    console.log(`Você é de nacioanlidade Angolana`)
}
else {
    console.log('nao tem teu pais')
}

