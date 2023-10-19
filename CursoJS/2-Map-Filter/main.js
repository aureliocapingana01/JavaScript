//  Usando o map 
const numbers = [1, 3, 5, 7]

const numberMult = numbers.map((number) => {
    return (
        number * 2
    )
})

// console.log(numberMult)


//  Usando o Filtter
const ages = [25, 30, 55, 7, 18, 82, 3]

const everAges = ages.filter((age) => {
    return age % 2  === 0
})

console.log(everAges)

// Usando o Reduce
const sumOfAges = ages.reduce((age, sum) => {
    return sum + age
}, 0)

console.log(sumOfAges)