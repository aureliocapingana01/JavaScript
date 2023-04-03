document.querySelector('#botao').addEventListener('click', async () => {

 let res = await fetch('https://jsonplaceholder.typicode.com/posts')
 let json = await res.json()
    alert(`Titulo do promeiro post ${json[0].title}`)

    alert('Clicou no botão')
})


// Usando o metodo POST Para inserir informaçoes

const inserir = document.querySelector('#inserir').addEventListener('click', async () => {

   let res = await fetch ('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {'content-Type': 'application/json'},

          body: JSON.stringify({
               title: 'async / await',
               body: 'usando async e await para requisição',
               userId: 990
           })
        } 
    ) 

    let json = await res.json()
    console.log(json)

})