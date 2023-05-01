/*
const mostrar = () => {
    let imagem = document.getElementById('imagem').files[0]

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 250;
    img.height = 350

    document.getElementById('area').appendChild(img)
}

*/

// Usando Thumbnails com FileReader

const mostrar = () => {
    let reader = new FileReader()
    let imagem = document.getElementById('imagem').files[0]

    reader.onloadend = () => {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 250

        document.getElementById('area').appendChild(img)
    }

    reader.readAsDataURL(imagem)
}