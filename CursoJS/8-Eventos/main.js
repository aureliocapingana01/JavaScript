const buttonClick = document.querySelector('#submit-button')
// console.log(buttonClick)
buttonClick.addEventListener("click",(e) => {
    e.preventDefault()
    // console.log('Clickei no bottão')
} )

const myForm = document.querySelector("#my-form")
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')

const itens = document.querySelector('.items')
// console.log(itens)

buttonClick.addEventListener("click",(e) => {
    e.preventDefault()
    const nomeValue = inputName.value
    const emailValue = inputEmail.value

    if( nomeValue === '' || emailValue === '') {
        return myForm.style.background = "red"
    }
    // console.log(myForm)
    myForm.style.background = "green"
    // nomeValue = ''
    // emailValue = ''
    itens.firstElementChild.textContent = nomeValue;
    itens.children[1].textContent = emailValue

} )

inputName.addEventListener("change", (e) => {
    // console.log(e.target.value)
})