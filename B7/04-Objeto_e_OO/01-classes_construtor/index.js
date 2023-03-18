class Person {

    steps = 0

    constructor(name, age) {
       this.name =  name
       this.age = age
    }

    // funcao para dar passos
    takeAStep() {
        this.steps++
    }
}

let new1 = new Person('Aurélio', 30)
let new2 = new Person('Ana0', 24)
let new3 = new Person('Afonso', 65)

// invocar a funcao para o passos
new1.takeAStep()
console.log(`Passos de ${new1.name}, de ${new1.age} anos é ${new1.steps}`)