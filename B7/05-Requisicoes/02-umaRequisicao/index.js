document.querySelector('#botao').addEventListener('click', () => {
    alert('O botão foi clicado')

 fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json[0])
    })

})