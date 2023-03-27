
const createPerson = (name, lastName, age) => {
    return {
        name,
        lastName,
        age,
        getFullNmae() {
        return `${this.name} ${this.lastName}`
        }
    }
}
// objeto não tem um construtor somente classes
let person1 = createPerson('Aurélio', 'Capingana', 30)
let person2 = createPerson('Ana', 'Capingana', 22)

console.log(person1.getFullNmae())