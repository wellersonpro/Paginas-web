function soma01() {
    let portugues01 = document.querySelector('input#portugues01');
    let portugues02 = document.querySelector('input#portugues02');
    let portugues03 = document.querySelector('input#portugues03');
    let portugues04 = document.querySelector('input#portugues04');
    let mediaPortugues = document.querySelector('p#mediaPortugues');

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



    let img = document.querySelector('img.fotoresultado')
    let final = document.querySelector('input#final');
    let p = document.querySelector('p.sit');
    final.addEventListener("click", function (result) {
        result.preventDefault();

            if (media >= 7 && media02 >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/aprovado.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'apr');
                p.innerHTML = ''
                p.innerHTML += 'Aluno aprovado'
            }

            else if (media < 7 && media >= 5 && media02 >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/recuperacao.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rec');
                p.innerHTML = ''
                p.innerHTML += 'Aluno em recuperação'
            }

            else if (media02 < 7 && media02 >= 5 && media >= 7 && media03 >= 7 && media04 >= 7 && media05 >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/recuperacao.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rec');
                p.innerHTML = ''
                p.innerHTML += 'Aluno em recuperação'
            }

            else if (media03 < 7 && media03 >= 5 && media02 >= 7 && media >= 7 && media04 >= 7 && media05 >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/recuperacao.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rec');
                p.innerHTML = ''
                p.innerHTML += 'Aluno em recuperação'
            }

            else if (media04 < 7 && media04 >= 5 && media03 >= 7 && media02 >= 7 && media >= 7 && media05 >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/recuperacao.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rec');
                p.innerHTML = ''
                p.innerHTML += 'Aluno em recuperação'
            }

            else if (media05 < 7 && media05 >= 5 && media04 >= 7 && media03 >= 7 && media02 >= 7 && media >= 7) {
                img.removeAttribute('src');
                img.setAttribute('src', 'imagens/recuperacao.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rec');
                p.innerHTML = ''
                p.innerHTML += 'Aluno em recuperação'
            }

            else {
                img.removeAttribute('src')
                img.setAttribute('src', 'imagens/reprovado.png');
                p.removeAttribute('id');
                p.setAttribute('id', 'rep');
                p.innerHTML = ''
                p.innerHTML += 'Aluno Reprovado'
            }
        p.appendChild(img);
    })
}