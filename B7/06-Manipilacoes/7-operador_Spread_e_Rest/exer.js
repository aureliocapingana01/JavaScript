const add = (names, ...newNames) => {
    let newConjunt = [
        ...names,
        ...newNames
    ]
    return newConjunt
} 

let names = [
    'Aurélio',
    'Castro',
    'Ana'
]

let outros = add(names, 'Manasses', 'Israesl', 'Benicio')

console.log(outros)