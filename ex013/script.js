let array = [];
let i = 0;
let temporario = document.getElementById('temp');
let res = document.getElementById('res');
function adicionar(){
    temporario.innerText = '';
    let numero = document.getElementById('inum');
    if(numero.value.length == 0){
        alert("Insira um número!");
    } else{
        array[i] = Number(numero.value);
        i++;
        for(let cont = 0; cont < array.length; cont++){
            temporario.innerText += ` ${array[cont]} `;
        }
    }
}
function Imprimir(){
    let maior = array[0];
    let menor = array[0];
    let posMaior = 0;
    let posMenor = 0;
    for(let cont = 0; cont < array.length; cont++){
        if(array[cont] > maior){
            maior = array[cont];
            posMaior = cont;
        }
        if(array[cont] < menor){
            menor = array[cont];
            posMenor = cont;
        }
    }
    res.innerHTML = `<p>O maior valor é ${maior} na posição ${posMaior}.</p>`;
    res.innerHTML += `<p>O menor valor é ${menor} na posição ${posMenor}.</p>`;
    
}