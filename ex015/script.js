let vetor = [];
let i = 0;
let temporario = document.getElementById('temp');
let resultado = document.getElementById('res');

function Incluir(){
    temporario.innerText = '';
    let num = document.getElementById('inum');
    if(num.value.length == 0){
        alert("Insira o valor no array!");
    } else {
        vetor[i] = Number(num.value);
        i++;
        for(let cont = 0; cont < vetor.length; cont++)
            temporario.innerText += ` ${vetor[cont]} `;
    }
}

function moda(a){
    let mais = 0;
    let max = 0;
    for(let j = 0; j < a.length; j++){
        let atual = a[j];
        let qtd_atual = 0;
        for(let k = 0; k < a.length; k++){
            if(atual == a[k])
                qtd_atual++;
        }
        if(qtd_atual > max){
            max = qtd_atual;
            mais = atual;
        }
    }
    return mais;
}
function media(a){
    let qtd = a.length;
    let soma = 0;
    for(let cont = 0; cont < qtd; cont++)
        soma += a[cont];
    return soma /= qtd;
}
function mediana(a){
    a.sort((x, y) => x - y);
    let meio = Number.parseInt(a.length / 2);
    if(a.length % 2 == 0){
        let m1 = a[meio - 1];
        let m2 = a[meio];
        return (m1 + m2) / 2;
    } else {
        return a[meio];
    }

}
function Gerar(){
    resultado.innerHTML = `<p>A moda é ${moda(vetor)}.</p>`;
    resultado.innerHTML += `<p>A média é ${media(vetor)}.</p>`;
    resultado.innerHTML += `<p>A mediana é ${mediana(vetor)}.</p>`;
}