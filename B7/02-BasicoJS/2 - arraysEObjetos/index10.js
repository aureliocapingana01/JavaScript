// Ordenação de Array



// let champions = ['Espanha', 'Alemanha', 'França', 'Argentina']

// sort() ordena alfabeticamente o array

// champions.sort()
// champions.reverse()
// console.log(champions)





let cars =  [
    { brand : 'Fiat', year : 2018},
    { brand : 'BMW', year : 2021},
    { brand : 'Ferrari', year : 2023},
    { brand : 'Safary', year : 2015},
    { brand : 'Lamborgini', year : 2022}
]

cars.sort((a, b) => a.year - b.year)
// cars.sort((a, b) => {
//     if(a.year > b.year){
//         return 1
//     }
//     else if (a.year < b.year){
//         return -1
//     }
//     else {
//         return 0
//     }
// })

// cars.sort((a, b) => a.year - b.year)
console.log(cars)