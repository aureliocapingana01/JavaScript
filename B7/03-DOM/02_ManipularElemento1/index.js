const clicou = () => {
    alert('[OPA] Clicou no botão...')

    // const teste = document.querySelector('#teste')
    // console.log(teste.children)


    //Adicionar um novo item
    
   const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    let newLi = document.createElement('li')
    newLi.innerHTML = "Item adicionado"
    ul.appendChild(newLi)
}

document.querySelector('.botao').addEventListener('click', clicou)