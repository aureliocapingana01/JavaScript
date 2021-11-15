var n = document.getElementById('nome')
var t1 = document.getElementById('tn1')
var t2 = document.getElementById('tn2')

function calcular() {

    var res = document.getElementById('res')
    var nome = (n.value)
    var prova1 = Number(t1.value)
    var prova2 = Number(t2.value)
    var nota = prova1 + prova2
    var final = nota / 2
    res.innerHTML = `A sua ota é ${final}`

    if(t1.value.length == 0 || t2.value.length == 0 || n.value.length == 0){
        alert("[ERRO] preencha as notas")
        return false
    }

    if(final >= 7){
        res.innerHTML += `, Estas <strong>Aprovado</strong>`
    }
    else if(final < 7 && final >= 5.5){
        res.innerHTML += `, Farás o  <strong>Exame Final</strong>`
    }
    else if(final < 5.5 && final >= 4){
        res.innerHTML += `, Estas com <strong>Repita o Ano</strong>`
    }
    else{
        res.innerHTML += `, Estas <strong>Reprovado</strong>`
    }
    }
    function exame(){
    var fim = document.getElementById('fim')
    var tn = document.getElementById('tnx')
    var nome = (n.value)
    var prova1 = Number(t1.value)
    var prova2 = Number(t2.value)
    var pexame = Number(tn.value)
    var nota = prova1+prova2
    var final = nota/2
    var nfinal = (pexame + final)/2
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
