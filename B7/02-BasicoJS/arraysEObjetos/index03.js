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

console.log(`O cliente ${person.name} de nacionalidade ${person.country} conta numero ${person.bill.number} tem o saldo de ${person.bill.balance} tem como cartão de credito ${person.card[1]}`)
