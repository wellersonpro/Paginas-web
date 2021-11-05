function somar(){
    var camp1 = document.querySelector('input#campo1')
    var camp2 = document.querySelector('input#campo2')
    var re = document.querySelector('p#result')
    var ca1 = Number(camp1.value)
    var ca2 = Number(camp2.value)
    var s = ca1 + ca2
    re.innerHTML = `O resultado é ${s}`
}

function subtrair(){
    var camp3 = document.querySelector('input#campo3')
    var camp4 = document.querySelector('input#campo4')
    var re2 = document.getElementById('result2')
    var ca3 = Number(camp3.value)
    var ca4 = Number(camp4.value)
    var subt = ca3 - ca4
    re2.innerHTML = `O resultado é ${subt}` 
}

function multiplicar(){
    var camp5 = document.querySelector('input#campo5')
    var camp6 = document.querySelector('input#campo6')
    var ca5 = Number(camp5.value)
    var ca6 = Number(camp6.value)
    var multi = ca5 * ca6
    var re3 = document.querySelector('p#result3')
    re3.innerHTML = `O resultado é ${multi}`
}

function divisao(){
    var camp7 = document.querySelector('input#campo7')
    var camp8 = document.querySelector('input#campo8')
    var ca7 = Number(camp7.value)
    var ca8 = Number(camp8.value)
    var divi = ca7 / ca8
    var re4 = document.querySelector('p#result4')
    re4.innerHTML = `O resultado é ${divi}`
}