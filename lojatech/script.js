function verificar() {
    let item = document.querySelector('input#item');
    let lista = document.querySelector('div#lista');
    let botao = document.querySelector('input#verificar')
    let cod = Number(item.value);

    /*botao.addEventListener("click", function)*/

        switch(cod) {
            case 01:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Capa de Celular, Quantidade: 10</p>`
                break
            case 02:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Fone de Ouvido, Quantidade: 15</p>`
                break
            case 05:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Teclado Gamer, Quantidade: 5</p>`
                break
            case 10:
                lista.innerHTML = ''
                lista.innerHTML += `<p>HD500GB, Quantidade: 4</p>`
                break
            case 12:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Mouse Pad, Quantidade: 18</p>`
                break
            case 15:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Mouse, Quantidade: 15</p>`
                break
            case 16:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Pen Drive 8GB, Quantidade: 25</p>`
                break
            case 17:
                lista.innerHTML = ''
                lista.innerHTML += `<p>Pendrive 16GB, Quantidade: 30</p>`
                break
        }
}