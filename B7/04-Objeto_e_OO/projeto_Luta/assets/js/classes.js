// Criar classes e persoangens

class Character {

    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name) {
        this.name = name
    }

    get life() {
        return this._life
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

class LittleMonster extends Character {
    constructor(name) {
        super(name)
        this.life = 50
        this.attack = 5
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character {
    constructor(name) {
        super(name)
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1El = fighter1El
        this.fighter2El = fighter2El
    }

    start() {
        this.update()
    }
    update() {
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name

        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name
    }
}