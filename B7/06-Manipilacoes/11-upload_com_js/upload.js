// Fazer upload de arquivo com js

const enviar = async () => {

  let arquivo = document.getElementById('arquivo').files[0]  

  let body = new FormData()
  body.append('title', 'baaaaa laaaa')
  body.append('arquivo', arquivo)

  let req = await fetch('https://www.opentime.com.br', {
    method: 'POST',
    body: body,
    headers: {
        'content-Type': 'multipart/form-data'
    }  
});
}