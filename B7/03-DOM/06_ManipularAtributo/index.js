 //Manipular atributos
const clicou = () => {
    // alert('[OPA] Clicou no botão...')

    const input = document.querySelector('input')
    const  botao = document.querySelector('.botao')

    //pegar o  atributos
    // console.log(input.getAttribute('type'))


    //Ver se tem o  atributos
   /*
    if (input.hasAttribute('name')) {
        console.log('Sim tem')
    }
    else{
        console.log('Não tem')
    }
    */


    //Bota ou alterar atributo
    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
        botao.innerHTML = "Mostra Senha"
    }
    else {
        input.setAttribute('type', 'text')
        botao.innerHTML = 'Ocultar Senha'
    }
}   
