// Criar classes e persoangens


const character = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...character,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        name,
        life: 50,
        maxLife: 50,
        attack: 14,
        defense: 3
    }
}

const createLittleMonster = () => {
    return {
        ...character,
        name: 'Little Monster',
        life: 45,
        maxLife: 45,
        attack: 5,
        defense: 5
    }
}

const createBigMonster = () => {
    return {
        ...character,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,
    
    start (fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1,
        this.fighter2 = fighter2,
        this.fighter1El = fighter1El,
        this.fighter2El = fighter2El,

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => 
        this.doAttack(this.fighter1, this.fighter2)),

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => 
        this.doAttack(this.fighter2, this.fighter1)), 
        
        this.upudate();
    },
    upudate() {
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - 
        ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - 
        ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
    },

    doAttack(attacking, attacked) {
        if (attacking.life <= 0 || attacked.life <= 0) {
            console.log('Atacando cachorro morto') 
            return 
          }
  
          const attackFactor = (Math.random() * 2).toFixed(2)
          // console.log(attackFactor)
          const defenseFactor =  (Math.random() * 2).toFixed(2)
  
          const actaulAttack = attacking.attack * attackFactor
          const attualDefense = attacking.defense * defenseFactor
  
          if ( actaulAttack > attualDefense ) {
              attacked.life -= actaulAttack
              attacked.life = attacked.life < 0 ? 0 : attacked.life
              console.log(`${attacking.name} causou ${actaulAttack.toFixed(2)} de dano em 
              ${attacked.name}`) 
          }
          else {
              console.log(`${attacked.name} conseguiu defender`)
          };
          
         this.update()
    }
}


