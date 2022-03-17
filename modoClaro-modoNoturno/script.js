function modoNoturno() {
    /* Adicionando as tags dentro de variáveis. */
    let secao = document.querySelector('section#exemplo');
    let h1 = document.querySelector('h1#titulo');
    let paragrafo = document.querySelector('p#texto');
    let botaoClaro = document.querySelector('input#modoClaro');
    let botaoNoturno = document.querySelector('input#modoNoturno');

    /* Removendo as ids das tags através das variáveis. */
    secao.removeAttribute('id');
    h1.removeAttribute('id');
    paragrafo.removeAttribute('id');
    botaoClaro.removeAttribute('id');
    botaoNoturno.removeAttribute('id');

    /* Adicionando as ids configuradas no CSS para ficar em modo noturno. */
    secao.setAttribute('id', 'exemplo02');
    h1.setAttribute('id', 'titulo02');
    paragrafo.setAttribute('id', 'texto02');
    botaoClaro.setAttribute('id', 'modoClaro02');
    botaoNoturno.setAttribute('id', 'modoNoturno02');

    /* Configurado o botão de modo claro para remover as ids de modo 
    noturno e adicionar as de modo claro. */
    botaoClaro.addEventListener('click', function (param) {
        param.preventDefault();

        secao.removeAttribute('id');
        h1.removeAttribute('id');
        paragrafo.removeAttribute('id');
        botaoClaro.removeAttribute('id');
        botaoNoturno.removeAttribute('id');

        secao.setAttribute('id', 'exemplo');
        h1.setAttribute('id', 'titulo');
        paragrafo.setAttribute('id', 'texto');
        botaoClaro.setAttribute('id', 'modoClaro');
        botaoNoturno.setAttribute('id', 'modoNoturno');
    })
}