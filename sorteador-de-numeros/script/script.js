function sortear() {
    let qtdeNumeros = document.querySelector('input#qtd')
    let primeiro = document.querySelector('input#inicio')
    let ultimo = document.querySelector('input#fim')
    let resposta = document.querySelector('p#resposta')

    let qtdNum = Number(qtdeNumeros.value)
    let inicio = Number(primeiro.value)
    let fim = Number(ultimo.value)

    if (inicio > fim) {
        [fim, inicio] = [inicio, fim]
    }

    let sorteados = []
    for (let i = 1; i <= qtdNum; i++) {
        sorteados.push(parseInt(Math.random() * (fim - inicio + 1)) + inicio)
    }

    resposta.innerHTML = `${sorteados.join(' - ')}`
}