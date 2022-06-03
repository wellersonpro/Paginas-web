function alternar() {
    let conjuntoDeTags = document.getElementsByName('conjunto');
    let botaoLight = document.querySelector('input#Light');
    console.log(conjuntoDeTags);

    conjuntoDeTags[0].setAttribute('class', 'dark01');
    conjuntoDeTags[1].setAttribute('class', 'dark02');
    conjuntoDeTags[2].setAttribute('class', 'dark03');
    conjuntoDeTags[3].setAttribute('class', 'dark04');
    conjuntoDeTags[4].setAttribute('class', 'dark04');
    conjuntoDeTags[5].setAttribute('class', 'dark05');
    conjuntoDeTags[6].setAttribute('class', 'dark06');
    conjuntoDeTags[7].setAttribute('class', 'dark07');
    conjuntoDeTags[8].setAttribute('class', 'dark02');
    conjuntoDeTags[9].setAttribute('class', 'dark02');
    conjuntoDeTags[10].setAttribute('class', 'dark02');
    conjuntoDeTags[11].setAttribute('class', 'dark02');
    conjuntoDeTags[12].setAttribute('class', 'dark02');
    conjuntoDeTags[13].setAttribute('class', 'dark02');

    conjuntoDeTags[14].removeAttribute('class');
    conjuntoDeTags[14].setAttribute('class', 'dark08');
    conjuntoDeTags[15].setAttribute('class', 'dark09');
    conjuntoDeTags[16].setAttribute('class', 'dark09');
    conjuntoDeTags[17].setAttribute('class', 'dark09');
    conjuntoDeTags[18].setAttribute('class', 'dark09');
    conjuntoDeTags[19].setAttribute('class', 'dark02');

    conjuntoDeTags[20].removeAttribute('class');
    conjuntoDeTags[20].setAttribute('class', 'dark08');
    conjuntoDeTags[21].setAttribute('class', 'dark09');
    conjuntoDeTags[22].setAttribute('class', 'dark09');
    conjuntoDeTags[23].setAttribute('class', 'dark09');
    conjuntoDeTags[24].setAttribute('class', 'dark09');
    conjuntoDeTags[25].setAttribute('class', 'dark02');

    conjuntoDeTags[26].removeAttribute('class');
    conjuntoDeTags[26].setAttribute('class', 'dark08');
    conjuntoDeTags[27].setAttribute('class', 'dark09');
    conjuntoDeTags[28].setAttribute('class', 'dark09');
    conjuntoDeTags[29].setAttribute('class', 'dark09');
    conjuntoDeTags[30].setAttribute('class', 'dark09');
    conjuntoDeTags[31].setAttribute('class', 'dark02');

    conjuntoDeTags[32].removeAttribute('class');
    conjuntoDeTags[32].setAttribute('class', 'dark08');
    conjuntoDeTags[33].setAttribute('class', 'dark09');
    conjuntoDeTags[34].setAttribute('class', 'dark09');
    conjuntoDeTags[35].setAttribute('class', 'dark09');
    conjuntoDeTags[36].setAttribute('class', 'dark09');
    conjuntoDeTags[37].setAttribute('class', 'dark02');

    conjuntoDeTags[38].removeAttribute('class');
    conjuntoDeTags[38].setAttribute('class', 'dark08');
    conjuntoDeTags[39].setAttribute('class', 'dark09');
    conjuntoDeTags[40].setAttribute('class', 'dark09');
    conjuntoDeTags[41].setAttribute('class', 'dark09');
    conjuntoDeTags[42].setAttribute('class', 'dark09');
    conjuntoDeTags[43].setAttribute('class', 'dark02');

    conjuntoDeTags[44].setAttribute('class', 'dark10');

    conjuntoDeTags[45].setAttribute('class', 'dark11');
    conjuntoDeTags[46].setAttribute('class', 'dark02');
    conjuntoDeTags[47].setAttribute('class', 'dark12');
    conjuntoDeTags[48].setAttribute('class', 'dark13');

    conjuntoDeTags[49].setAttribute('class', 'dark14');
    conjuntoDeTags[50].setAttribute('class', 'dark15');
    conjuntoDeTags[51].setAttribute('class', 'dark15');

    botaoLight.addEventListener("click", function (retornar) {
        retornar.preventDefault();

        conjuntoDeTags[0].removeAttribute('class', 'dark01');
        conjuntoDeTags[1].removeAttribute('class', 'dark02');
        conjuntoDeTags[2].removeAttribute('class', 'dark03');
        conjuntoDeTags[3].removeAttribute('class', 'dark04');
        conjuntoDeTags[4].removeAttribute('class', 'dark04');
        conjuntoDeTags[5].removeAttribute('class', 'dark05');
        conjuntoDeTags[6].removeAttribute('class', 'dark06');
        conjuntoDeTags[7].removeAttribute('class', 'dark07');
        conjuntoDeTags[8].removeAttribute('class', 'dark02');
        conjuntoDeTags[9].removeAttribute('class', 'dark02');
        conjuntoDeTags[10].removeAttribute('class', 'dark02');
        conjuntoDeTags[11].removeAttribute('class', 'dark02');
        conjuntoDeTags[12].removeAttribute('class', 'dark02');
        conjuntoDeTags[13].removeAttribute('class', 'dark02');

        conjuntoDeTags[14].removeAttribute('class');
        conjuntoDeTags[14].setAttribute('class', 'Light');
        conjuntoDeTags[15].removeAttribute('class');
        conjuntoDeTags[16].removeAttribute('class');
        conjuntoDeTags[17].removeAttribute('class');
        conjuntoDeTags[18].removeAttribute('class');
        conjuntoDeTags[19].removeAttribute('class');

        conjuntoDeTags[20].removeAttribute('class');
        conjuntoDeTags[20].setAttribute('class', 'Light');
        conjuntoDeTags[21].removeAttribute('class');
        conjuntoDeTags[22].removeAttribute('class');
        conjuntoDeTags[23].removeAttribute('class');
        conjuntoDeTags[24].removeAttribute('class');
        conjuntoDeTags[25].removeAttribute('class');

        conjuntoDeTags[26].removeAttribute('class');
        conjuntoDeTags[26].setAttribute('class', 'Light');
        conjuntoDeTags[27].removeAttribute('class');
        conjuntoDeTags[28].removeAttribute('class');
        conjuntoDeTags[29].removeAttribute('class');
        conjuntoDeTags[30].removeAttribute('class');
        conjuntoDeTags[31].removeAttribute('class');

        conjuntoDeTags[32].removeAttribute('class');
        conjuntoDeTags[32].setAttribute('class', 'Light');
        conjuntoDeTags[33].removeAttribute('class');
        conjuntoDeTags[34].removeAttribute('class');
        conjuntoDeTags[35].removeAttribute('class');
        conjuntoDeTags[36].removeAttribute('class');
        conjuntoDeTags[37].removeAttribute('class');

        conjuntoDeTags[38].removeAttribute('class');
        conjuntoDeTags[38].setAttribute('class', 'Light');
        conjuntoDeTags[39].removeAttribute('class');
        conjuntoDeTags[40].removeAttribute('class');
        conjuntoDeTags[41].removeAttribute('class');
        conjuntoDeTags[42].removeAttribute('class');
        conjuntoDeTags[43].removeAttribute('class');

        conjuntoDeTags[44].removeAttribute('class');

        conjuntoDeTags[45].removeAttribute('class');
        conjuntoDeTags[46].removeAttribute('class');
        conjuntoDeTags[47].removeAttribute('class');
        conjuntoDeTags[48].removeAttribute('class');

        conjuntoDeTags[49].removeAttribute('class');
        conjuntoDeTags[50].removeAttribute('class');
        conjuntoDeTags[51].removeAttribute('class');
    })
}

function soma01() {
    // Pegando os valores dos inputs e adicionando cada um em uma variável.
    let portugues01 = document.querySelector('input#portugues01');
    let portugues02 = document.querySelector('input#portugues02');
    let portugues03 = document.querySelector('input#portugues03');
    let portugues04 = document.querySelector('input#portugues04');
    let mediaPortugues = document.querySelector('p#mediaPortugues');
    let nomeDoAluno = document.querySelector('input#aluno').value;

    /*
    Essas variáveis são então convertidas para o tipo númerico e armazenadas cada uma dentro de uma variável 
    que são somadas, divididas e apresentadas tela.
    */
    let portugues1 = Number(portugues01.value);
    let portugues2 = Number(portugues02.value);
    let portugues3 = Number(portugues03.value);
    let portugues4 = Number(portugues04.value);
    let media = (portugues1 + portugues2 + portugues3 + portugues4) / 4;
    mediaPortugues.innerHTML = `${media.toFixed(1)}`;



    let matematica01 = document.querySelector('input#matematica01');
    let matematica02 = document.querySelector('input#matematica02');
    let matematica03 = document.querySelector('input#matematica03');
    let matematica04 = document.querySelector('input#matematica04');
    let mediaMatematica = document.querySelector('p#mediaMatematica');

    let matematica1 = Number(matematica01.value);
    let matematica2 = Number(matematica02.value);
    let matematica3 = Number(matematica03.value);
    let matematica4 = Number(matematica04.value);
    let media02 = (matematica1 + matematica2 + matematica3 + matematica4) / 4;
    mediaMatematica.innerHTML = `${media02.toFixed(1)}`;



    let biologia01 = document.querySelector('input#biologia01');
    let biologia02 = document.querySelector('input#biologia02');
    let biologia03 = document.querySelector('input#biologia03');
    let biologia04 = document.querySelector('input#biologia04');
    let mediaBiologia = document.querySelector('p#mediaBiologia');

    let biologia1 = Number(biologia01.value);
    let biologia2 = Number(biologia02.value);
    let biologia3 = Number(biologia03.value);
    let biologia4 = Number(biologia04.value);
    let media03 = (biologia1 + biologia2 + biologia3 + biologia4) / 4;
    mediaBiologia.innerHTML = `${media03.toFixed(1)}`;



    let historia01 = document.querySelector('input#historia01');
    let historia02 = document.querySelector('input#historia02');
    let historia03 = document.querySelector('input#historia03');
    let historia04 = document.querySelector('input#historia04');
    let mediaHistoria = document.querySelector('p#mediaHistoria');

    let historia1 = Number(historia01.value);
    let historia2 = Number(historia02.value);
    let historia3 = Number(historia03.value);
    let historia4 = Number(historia04.value);
    let media04 = (historia1 + historia2 + historia3 + historia4) / 4;
    mediaHistoria.innerHTML = `${media04.toFixed(1)}`;



    let geografia01 = document.querySelector('input#geografia01');
    let geografia02 = document.querySelector('input#geografia02');
    let geografia03 = document.querySelector('input#geografia03');
    let geografia04 = document.querySelector('input#geografia04');
    let mediaGeografia = document.querySelector('p#mediaGeografia');

    let geografia1 = Number(geografia01.value);
    let geografia2 = Number(geografia02.value);
    let geografia3 = Number(geografia03.value);
    let geografia4 = Number(geografia04.value);
    let media05 = (geografia1 + geografia2 + geografia3 + geografia4) / 4;
    mediaGeografia.innerHTML = `${media05.toFixed(1)}`;



    let img = document.querySelector('img.fotoresultado') // Tag imagem vazia.
    let p = document.querySelector('p.sit'); // Campo de texto da situação do aluno.

    // O botão de resultado final quando clicado, vai chamar a function para analisar as notas informadas.
    final.addEventListener("click", function (result) {
        result.preventDefault();

        if (media >= 7 && media02 >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/aprovado.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'apr');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} aprovado`
        }

        else if (media < 7 && media >= 5 && media02 >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/recuperacao.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rec');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} em recuperação`
        }

        else if (media02 < 7 && media02 >= 5 && media >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/recuperacao.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rec');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} em recuperação`
        }

        else if (media03 < 7 && media03 >= 5 && media02 >= 7 && media >= 7 && media04 >= 7 && media05 >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/recuperacao.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rec');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} em recuperação`
        }

        else if (media04 < 7 && media04 >= 5 && media03 >= 7 && media02 >= 7 && media >= 7 && media05 >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/recuperacao.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rec');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} em recuperação`
        }

        else if (media05 < 7 && media05 >= 5 && media04 >= 7 && media03 >= 7 && media02 >= 7 && media >= 7) {
            img.removeAttribute('src');
            img.setAttribute('src', 'imagens/recuperacao.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rec');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} em recuperação`
        }

        else {
            img.removeAttribute('src')
            img.setAttribute('src', 'imagens/reprovado.png');
            p.removeAttribute('id');
            p.setAttribute('id', 'rep');
            p.innerHTML = ''
            p.innerHTML += `Aluno(a) ${nomeDoAluno} Reprovado`
        }
        p.appendChild(img);
    })
}