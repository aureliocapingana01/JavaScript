class Person {

    _age = 0
    steps = 0

    constructor(name) {
       this.name =  name
    }

    // funcao para dar passos
    takeAStep() {
        this.steps++
    }
    // Uso do get, retorna o valor que quero
    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
            console.log(`${new1.name}, tem ${new1.age} anos`)
        }
        else {
            console.log('Digite somente numeros')
        }
    }
}

let new1 = new Person(prompt('Digite o seu nome'))
// let new1 = new Person('Aurélio')


new1.age = Number(prompt('Digite sua idade'))

// invocar a funcao para o passos
new1.takeAStep()
// console.log(`${new1.name}, tem ${new1.age} anos`)