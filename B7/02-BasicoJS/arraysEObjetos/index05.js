 // Funcao dentro de objeto

 let person = {
    name : 'Aurélio',
    lastName : 'Capingana',
    age : 30,
    fullName : function () {
        return `${this.name} ${this.lastName} tem ${this.age} anos de idade`
    }
 }

 console.log(person.fullName())