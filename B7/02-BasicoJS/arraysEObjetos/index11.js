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

let nationality = country.every((value) => {
    return value.length > 7

})
console.log(nationality)