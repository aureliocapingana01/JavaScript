for (let i = 0; i < 10; i++) {
    // console.log(i)
}

const cars = ['Ferrari', 'Mercedes', 'Tesla', 'BMW', 'Poche']

//  Usando o For
for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i])
}


//  Usando o For Of
for (let car of cars) {
    // console.log(car)
}


//  Usando o ForEach
cars.forEach((car, index) => {
    // console.log(index, car)
})


//  Usando o For In
const person = {
    name : 'Aurélio',
    age : 30
}
for (data in person) {
    console.log(person[data])
}