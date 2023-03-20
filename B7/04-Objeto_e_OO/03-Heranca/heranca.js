class Person {
    _age = 0

    constructor(name) {
        this.name = name
    }
}

class Studant extends Person {
    constructor(name, id) {
        super(name)
        this.id = id
    }

    set age(x) {
        if (typeof x == 'number') {
            this._age = x
            console.log(`Olá ${newStudant.name}, voce tem ${newStudant.age}`)
        }
    }
}

let newStudant = new Studant(prompt('Digite deu nome'))
newStudant.age = Number(prompt('Digite sua idade'))
