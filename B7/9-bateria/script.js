document.body.addEventListener('keyup', (e)=> {
   playSound(e.code.toLowerCase())
})

const playSound = (sound) => {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    
    if(audioElement) {
        audioElement.play()
    }

    if(keyElement) {
        keyElement.classList.add('active')
    }
}