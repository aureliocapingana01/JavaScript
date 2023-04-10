let timer

const comecar = () => {
     timer = setInterval(showTime)
}
const parar = () => {
    clearInterval(timer)
}

const showTime = () => {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let text = h+':'+m+':'+s

    document.querySelector('.demo').innerHTML = text
}

