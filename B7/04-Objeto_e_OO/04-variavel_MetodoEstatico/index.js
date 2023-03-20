class Person {

    static hands = 2
    age = 0

    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`Olá eu sou o ${this.name} e tenho ${Person.hands} maos`)
    }
}

let newPerson = new Person('Aurélio')
newPerson.sayHi()