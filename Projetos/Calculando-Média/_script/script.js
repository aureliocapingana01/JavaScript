let n = document.getElementById('nome')
let t1 = document.getElementById('tn1')
let t2 = document.getElementById('tn2')

function calcular() {

    let res = document.getElementById('res')
    let nome = (n.value)
    let prova1 = Number(t1.value)
    let prova2 = Number(t2.value)
    let nota = prova1 + prova2
    let final = nota / 2
    res.innerHTML = `A sua nota é ${final}`

    if(t1.value.length == 0 || t2.value.length == 0 || n.value.length == 0){
        alert("[ERRO] preencha as notas")
        return false
    }

    if(final >= 7){
        res.innerHTML += `, Estas <strong>Aprovado</strong>`
    }
    else if(final < 7 && final >= 6.5){
        res.innerHTML += `, Farás o  <strong>Exame Final</strong>`
    }
    else if(final < 6.5 && final >= 4){
        res.innerHTML += `, Estas com <strong>Repita o Ano</strong>`
    }
    else{
        res.innerHTML += `, Estas <strong>Reprovado</strong>`
    }
    }
    function exame(){
    let fim = document.getElementById('fim')
    let tn = document.getElementById('tnx')
    let nome = (n.value)
    let prova1 = Number(t1.value)
    let prova2 = Number(t2.value)
    let pexame = Number(tn.value)
    let nota = prova1+prova2
    let final = nota/2
    let nfinal = (pexame + final)/2
    fim.innerHTML = ``
    
    if(final < 5.5 || pexame.value.length == 0){
        alert("[ERRO]")
        fim.innerHTML += `...`
    }
    
    if(nfinal >= 8){
        fim.innerHTML += `, Estas <strong>Aprovado</strong>`
    }
    else{
        fim.innerHTML += `, Estas <strong>Reprovado</strong>`
    }
    fim.innerHTML = `Olá <strong>${nome}</strong>, a nota do seu <strong>Exame final</strong> é <strong>${nfinal}</strong>`
}
