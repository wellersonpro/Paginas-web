function alternar() {
    let secaoBotoes = document.querySelector('section#btn');
    let secaoCalculo = document.querySelector('section#calculo');
    let secaoResultado = document.querySelector('section#resultado');
    let botaoLight = document.querySelector('input#Light');
    let botaoDark = document.querySelector('input#Dark');
    let aluno = document.querySelector('label#nomeDoAluno');
    let campoAluno = document.querySelector('input#aluno');
    /*let thMateria = document.querySelector('th#dado1');*/
    let todosThs = document.getElementsByTagName('th');
    let todosInputsNumber = document.getElementsByName('disciplinas');
    let materias = document.getElementsByName('cadaMateria');
    let todasMedias = document.getElementsByName('cadaMedia');
    let botaoCalcularMedia = document.querySelector('input#botao');
    let tituloRespostaFinal = document.querySelector('p#tituloResposta');
    this.final = document.getElementsByName('final'); // Botão de resultado final.

    secaoBotoes.removeAttribute('id');
    secaoBotoes.setAttribute('id', 'btnDark');

    secaoCalculo.removeAttribute('id');
    secaoCalculo.setAttribute('id', 'calculoDark');

    secaoResultado.removeAttribute('id');
    secaoResultado.setAttribute('id', 'resultadoDark');

    botaoLight.removeAttribute('id');
    botaoLight.setAttribute('id', 'Dark01');

    botaoDark.removeAttribute('id');
    botaoDark.setAttribute('id', 'Dark02');

    aluno.removeAttribute('id');
    aluno.setAttribute('id', 'Dark03');

    campoAluno.removeAttribute('id');
    campoAluno.setAttribute('id', 'Dark04');

    /*thMateria.removeAttribute('id');
    thMateria.setAttribute('id', 'Dark05');*/

    
    todosThs[0].removeAttribute('id');
    todosThs[0].setAttribute('id', 'Dark05');

    todosThs[1].removeAttribute('class');
    todosThs[1].setAttribute('class', 'Dark06');

    todosThs[2].removeAttribute('class');
    todosThs[2].setAttribute('class', 'Dark06');

    todosThs[3].removeAttribute('class');
    todosThs[3].setAttribute('class', 'Dark06');

    todosThs[4].removeAttribute('class');
    todosThs[4].setAttribute('class', 'Dark06');

    todosThs[5].removeAttribute('class');
    todosThs[5].setAttribute('class', 'Dark06');
    
    todosInputsNumber[0].removeAttribute('class');
    todosInputsNumber[0].setAttribute('class', 'Dark07');

    todosInputsNumber[1].removeAttribute('class');
    todosInputsNumber[1].setAttribute('class', 'Dark07');

    todosInputsNumber[2].removeAttribute('class');
    todosInputsNumber[2].setAttribute('class', 'Dark07');

    todosInputsNumber[3].removeAttribute('class');
    todosInputsNumber[3].setAttribute('class', 'Dark07');

    todosInputsNumber[4].removeAttribute('class');
    todosInputsNumber[4].setAttribute('class', 'Dark07');

    todosInputsNumber[5].removeAttribute('class');
    todosInputsNumber[5].setAttribute('class', 'Dark07');

    todosInputsNumber[6].removeAttribute('class');
    todosInputsNumber[6].setAttribute('class', 'Dark07');

    todosInputsNumber[7].removeAttribute('class');
    todosInputsNumber[7].setAttribute('class', 'Dark07');

    todosInputsNumber[8].removeAttribute('class');
    todosInputsNumber[8].setAttribute('class', 'Dark07');

    todosInputsNumber[9].removeAttribute('class');
    todosInputsNumber[9].setAttribute('class', 'Dark07');

    todosInputsNumber[10].removeAttribute('class');
    todosInputsNumber[10].setAttribute('class', 'Dark07');

    todosInputsNumber[11].removeAttribute('class');
    todosInputsNumber[11].setAttribute('class', 'Dark07');

    todosInputsNumber[12].removeAttribute('class');
    todosInputsNumber[12].setAttribute('class', 'Dark07');

    todosInputsNumber[13].removeAttribute('class');
    todosInputsNumber[13].setAttribute('class', 'Dark07');

    todosInputsNumber[14].removeAttribute('class');
    todosInputsNumber[14].setAttribute('class', 'Dark07');

    todosInputsNumber[15].removeAttribute('class');
    todosInputsNumber[15].setAttribute('class', 'Dark07');

    todosInputsNumber[16].removeAttribute('class');
    todosInputsNumber[16].setAttribute('class', 'Dark07');

    todosInputsNumber[17].removeAttribute('class');
    todosInputsNumber[17].setAttribute('class', 'Dark07');

    todosInputsNumber[18].removeAttribute('class');
    todosInputsNumber[18].setAttribute('class', 'Dark07');

    todosInputsNumber[19].removeAttribute('class');
    todosInputsNumber[19].setAttribute('class', 'Dark07');

    materias[0].removeAttribute('class');
    materias[0].setAttribute('class', 'Dark08');

    materias[1].removeAttribute('class');
    materias[1].setAttribute('class', 'Dark08');

    materias[2].removeAttribute('class');
    materias[2].setAttribute('class', 'Dark08');

    materias[3].removeAttribute('class');
    materias[3].setAttribute('class', 'Dark08');

    materias[4].removeAttribute('class');
    materias[4].setAttribute('class', 'Dark08');

    todasMedias[0].removeAttribute('class');
    todasMedias[0].setAttribute('class', 'Dark09');

    todasMedias[1].removeAttribute('class');
    todasMedias[1].setAttribute('class', 'Dark09');

    todasMedias[2].removeAttribute('class');
    todasMedias[2].setAttribute('class', 'Dark09');

    todasMedias[3].removeAttribute('class');
    todasMedias[3].setAttribute('class', 'Dark09');

    todasMedias[4].removeAttribute('class');
    todasMedias[4].setAttribute('class', 'Dark09');

    botaoCalcularMedia.removeAttribute('id');
    botaoCalcularMedia.setAttribute('id', 'Dark10');

    tituloRespostaFinal.removeAttribute('id');
    tituloRespostaFinal.setAttribute('id', 'Dark11');

    this.final[0].removeAttribute('id');
    this.final[0].setAttribute('id', 'Dark12');
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