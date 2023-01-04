
/* Funcão para acesso */

function acesso(usuario, senha){
    if(usuario === "aurelio" && senha === 123){
        console.log(`Seja Bem-Vindo ao Yeah ${usuario}`)
    }
    else{
        console.log(`Acesso negado`)
    }
    return acesso
}
let usuario = "aurelio"
let senha = 12
acesso(usuario, senha)