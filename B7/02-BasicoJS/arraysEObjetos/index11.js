// Interação de Array

let country = [
    'Angola', 'Brasil', 'Portugal', 'Mocambique'
]

/*

let nationality = country.filter((national) => {
     return  national.length == 6
    })
console.log(nationality)

*/

/*


let nationality = country.every((value) => {
    return value.length > 5
// o every retorna verdadeira se todos os itens do array satisfazerem a condicao 
})
if(nationality) {
    console.log(`A nacionalidade é ${nationality}`)
}
else{
    console.log('ERRO')
}

*/


// o some retorna verdadeira se alguns itens satisfazerem a codicao 


if(country.includes('Angola')) {
    console.log(`Você é de nacioanlidade`)
}
else {
    console.log('nao tem teu pais')
}

