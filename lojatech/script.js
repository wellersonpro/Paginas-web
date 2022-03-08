function adicionar() {
    /*let capaDeCelular = 20;
    let foneDeOuvido = 25.20;
    let tecladoGamer = 35.80;
    let HD500GB = 280;
    let mousePad = 12.45;
    let Mouse = 27;
    let penDrive8GB = 30;
    let penDrive16GB = 45.20;*/

    let codigo = document.querySelector('input#pedido');
    let quantidade = document.querySelector('input#qtd');
    let lista = document.querySelector('div#lista');

    let cod = Number(codigo.value);
    let qtd = Number(quantidade.value);

    switch(cod) {
        case 01:
            let produto01 = qtd * 20;
            lista.innerHTML += `<p>Produto: Capa de Celular, Preço: ${produto01.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
        case 02:
            let produto02 = qtd * 25.20;
            lista.innerHTML += `<p>Produto: Fone de Ouvido, Preço: ${produto02.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
        case 05:
            let produto05 = qtd * 35.80;
            lista.innerHTML += `<p>Produto: Teclado Gamer, Preço: ${produto05.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
        case 10:
            let produto10 = qtd * 280;
            lista.innerHTML += `<p>Produto: HD500GB, Preço: ${produto10.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
        case 12:
            let produto12 = qtd * 12.45;
            lista.innerHTML += `<p>Produto: Mouse Pad, Preço: ${produto12.toFixed(2)}</p>`
            lista.innerHMTL += `<hr>`
            break
        case 15:
            let produto15 = qtd * 27;
            lista.innerHTML += `<p>Produto: Mouse, Preço: ${produto15.toFixed(2)}</p>`
            lista.innerHMTL += `<hr>`
            break
        case 16:
            let produto16 = qtd * 30;
            lista.innerHTML += `<p>Produto: Pendrive 8GB, Preço ${produto16.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
        case 17:
            let produto17 = qtd * 45.20;
            lista.innerHTML += `<p>Produto: Pendrive 16GB, Preço ${produto17.toFixed(2)}</p>`
            lista.innerHTML += `<hr>`
            break
    }
}