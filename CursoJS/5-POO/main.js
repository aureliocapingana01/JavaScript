//  A class pode ter vários metodos

//  Uma class
class Person {
    constructor(firstName, lestName,  age) {
        this.firstName = firstName,
        this.lestName = lestName,
        this.age = age
    }

    //  metodo da class
    getFullName() {
        return `${this.firstName} ${this.lestName}`
    }

    //  metodo static
    static study() {
        console.log('yeah I study')
    }
}

//  instaciar a class
const person = new Person('Aurélio', 'Capingana', 22);
// console.log(person)

console.log(person.getFullName())

Person.study()