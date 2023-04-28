let timer

const rodar = () => {
    timer = setTimeout (() => {
        document.querySelector('.demo').innerHTML = 'Rodou...'
    }, 2000)   
}
const parar = () => {
    clearTimeout(timer)
}


let numbers = [1,2,3,4]
let outros = [...numbers,5,6,7,8]
console.log(outros)