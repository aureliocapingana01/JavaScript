let char = new Knight('Aurelio')
let monster = new LittleMonster('dificuldade')

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

stage.start()