let lista = ['camiseta', 'tenis', 'celular', 'livros']
let usuario = prompt('Digite um objeto: ')

const procurar = (lista, usuario) => {
    if(lista.includes(usuario)) {
        alert('Encontrou')
    }
    else{
        alert('Lamento')
    } 
}

procurar(lista, usuario)