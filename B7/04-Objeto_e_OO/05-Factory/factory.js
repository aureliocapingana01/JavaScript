class Person {
    age = 0

    constructor(name) {
        this.name = name
    }
}

// factory é uma funcao que cria um objeto daquilo que eu quero cria
const createPerson = (name, age) => {
    let newPerson = new Person(name)
    newPerson.age = age
    return newPerson

}

let newPerson = createPerson('Aurelio', 30)
console.log(`${newPerson.name} tem ${newPerson.age} anos`)