// Factory com programação Funcional

const creatPerson =  (name, age) => {
    return {
        name,
        age
    }
}

let person1 = creatPerson('Aurélio', 30)
let person2 = creatPerson('Ana', 22)

console.log(person1)