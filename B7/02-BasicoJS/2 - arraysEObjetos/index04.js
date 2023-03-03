/*

// Como acessa objetos

let person = {
    name : 'Aurélio',
    age: 30,
    country : 'Angolana',
    bill : {
        number : 12345,
        balance : 'R$ 50.000',
        password : 9876
    },
    card : ['bronze', 'silver', 'gold']
}
person.name = 'Capingana'
person.bill. password = 5522
person.card.unshift('iron')
// unshift add elemento na 1 lugar no array
console.log(person.card)

*/

let person = {
    name : 'Aurélio',
    age : 30,
    nationality : [
        'Angolana', 'Brasileira'
    ],
    accounts : [
        {BancodoBrasil : 12345,
         balance : 'R$ 50.000'
        },

        {BanriSul : 20111,
         balance : 'R$ 22.200'
        },

        {Caixa : 85422,
         balance : 'R$ 80.230'
        }
    ]
}

console.log(person.accounts)