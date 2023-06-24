const readPosts = async() => {
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...'

    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await res.json()

    if (json.length > 0) {
        postArea.innerHTML = ''

        for (let i in json) {
            let postHtml = `<div><h1> ${json[i].title} </h1> ${json[i].body} <hr/></div>`
            postArea.innerHTML += postHtml
        }

    }
    else {
        postArea.innerHTML = 'Nenhum post para exibir'
    }
}

// Funcao para exikbir o novo post

const addNewPost = async(title, body) => {
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 99
            })
        }
    );

    document.querySelector('#bodyField').value = ''
    document.querySelector('#titleField').value = ''

    readPosts()
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#bodyField').value
    let body = document.querySelector('#titleField').value

    if (title && body) {
        addNewPost(title, body)
    }
    else {
        alert("Preencha todos os campos")
    }
})


readPosts()