const input = document.querySelector('input')
const lista = document.querySelector('ul')

const handlKeyUp = (e) => {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        lista.appendChild(newLi)

        input.value = ''
    }
}

input.addEventListener('keyup', handlKeyUp)