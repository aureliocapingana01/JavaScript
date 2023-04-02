const user = {
    name: '',
    email: '',
    level: '1'
}

let userNormal = {
    ...user,
    name: 'Aurelio',
    email: 'aurelio@gmail.com'
}

let userAdm = {
    ...user,
    name: 'Capingana',
    email: 'capingana@gmail.com',
    level: 2
}

console.log(userAdm)