function soma01() {
    let portugues01 = document.querySelector('input#portugues01');
    let portugues02 = document.querySelector('input#portugues02');
    let mediaPortugues = document.querySelector('p#mediaPortugues');

    let portugues1 = Number(portugues01.value);
    let portugues2 = Number(portugues02.value);
    let media = (portugues1 + portugues2) / 2;
    mediaPortugues.innerHTML = `${media}`;



    let matematica01 = document.querySelector('input#matematica01');
    let matematica02 = document.querySelector('input#matematica02');
    let mediaMatematica = document.querySelector('p#mediaMatematica');

    let matematica1 = Number(matematica01.value);
    let matematica2 = Number(matematica02.value);
    let media02 = (matematica1 + matematica2) / 2;
    mediaMatematica.innerHTML = `${media02}`;



    let biologia01 = document.querySelector('input#biologia01');
    let biologia02 = document.querySelector('input#biologia02');
    let mediaBiologia = document.querySelector('p#mediaBiologia');

    let biologia1 = Number(biologia01.value);
    let biologia2 = Number(biologia02.value);
    let media03 = (biologia1 + biologia2) / 2;
    mediaBiologia.innerHTML = `${media03}`;



    let historia01 = document.querySelector('input#historia01');
    let historia02 = document.querySelector('input#historia02');
    let mediaHistoria = document.querySelector('p#mediaHistoria');

    let historia1 = Number(historia01.value);
    let historia2 = Number(historia02.value);
    let media04 = (historia1 + historia2) / 2;
    mediaHistoria.innerHTML = `${media04}`;



    let geografia01 = document.querySelector('input#geografia01');
    let geografia02 = document.querySelector('input#geografia02');
    let mediaGeografia = document.querySelector('p#mediaGeografia');

    let geografia1 = Number(geografia01.value);
    let geografia2 = Number(geografia02.value);
    this.media05 = (geografia1 + geografia2) / 2;
    mediaGeografia.innerHTML = `${media05}`;



    let img = document.querySelector('img#fotoresultado')
    let final = document.querySelector('input#final');
    let apr = document.querySelector('p#apr');
    let rec = document.querySelector('p#rec');
    final.addEventListener("click", function (result) {
        result.preventDefault();

        if (media05 == 0) {
            alert('Insira a nota de Geografia');
        } else {
            if (media05 >= 7) {
                img.setAttribute('src', 'imagens/aprovado.png');
                apr.innerHTML = `Aluno aprovado`
            }

            else if (media < 7) {
                img.setAttribute('src', 'imagens/recuperacao.png');
                rec.innerHTML = `Aluno em recuperação`
            }
        }apr.appendChild(img), rec.appendChild(img);
    })
}