// Ordenação de Array

/*

let champions = ['Espanha', 'Alemanha', 'França', 'Argentina']

// sort() ordena alfabeticamente o array

champions.sort()
// champions.reverse()
console.log(champions)

*/

let cars =  [
    { brand : 'Fiat', year : 2022},
    { brand : 'BMW', year : 2012},
    { brand : 'Ferrari', year : 2018},
    { brand : 'Safary', year : 2023}
]

/*
cars.sort((a, b) => {

    if(a.year > b.year){
        return 1
    }
    else if (a.year < b.year){
        return -1
    }
    else {
        return 0
    }
})
*/

cars.sort((a, b) => a.year - b.year)
console.log(cars[0])