document.querySelector('#botao').addEventListener('click', () => {
    // alert('O botão foi clicado')

 fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(`Status ${response.status}`)
        return response.json()
    })
    .then((json) => {
        alert(`Titulo do promeiro post 
        ${json[0].title}`)
    })
    .catch(() => { // expor o erro
        alert("Deu erro na requisição...")

    })
    .finally(() => {
        alert("Acabou...")
    })
})


// Usando o metodo POST Para inserir informaçoes

const inserir = document.querySelector('#inserir').addEventListener('click', () => {

   fetch ('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {'content-Type': 'application/json'},

          body: JSON.stringify({
               title: 'Titulo do texto',
               body: 'Corpo do teste',
               userId: 99
           })
        } 
    ) 
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        console.log(json)
    })
})