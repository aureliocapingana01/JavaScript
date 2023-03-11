const clicou = () => {
    alert('[OPA] Clicou no botão...')

    //Adicionar um novo item
    
   const teste = document.querySelector('#teste')
   const ul = teste.querySelector('ul')

    //Add coisa antes ou depois do elemento
    //Cria uma nova lista

   let newul = document.createElement('ul')

   for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li')
    newLi.innerHTML = 'Item Novo ' + (i+1)    
    newul.append(newLi)
   }

   ul.after(newul)
}   

//Chamar a função
document.querySelector('.botao').addEventListener('click', clicou)