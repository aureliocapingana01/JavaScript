
/* Funcão para acesso */

function acesso(usuario, senha){
    if(usuario === "AURELIO" && senha === 123){
        console.log(`Seja Bem-Vindo ao Yeah ${usuario}`)
    }
    else{
        console.log(`Acesso negado`)
    }
    // return acesso
}
let usuario = "aurelio".toUpperCase()
let senha = 123
acesso(usuario, senha)