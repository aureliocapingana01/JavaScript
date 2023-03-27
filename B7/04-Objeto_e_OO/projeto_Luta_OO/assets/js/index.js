
let log = new Log(document.querySelector('.log'))
let char = new Sorcerer('Desejo')
let monster = new BigMonster('sonho')

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()