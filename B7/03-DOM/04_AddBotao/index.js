const clicou = () => {
    alert('[OPA] Clicou no botão...')

    //Adicionar um novo item
    
   const teste = document.querySelector('#teste')
   const ul = teste.querySelector('ul')

    //Add coisa antes ou depois do elemento
    //Cria um botao com JS

    const newButton = document.createElement('button')
    newButton.innerHTML = 'Enviar'
    ul.after(newButton)
}

document.querySelector('.botao').addEventListener('click', clicou)