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
    temporario.innerText = '';
    let pares = [];
    let j = 0;
    for(let cont = 0; cont < array.length; cont++){
        if(array[cont] % 2 == 0)
            pares[j++] = array[cont];
    }
    res.innerHTML = `<p>Quantidade de pares: ${pares.length}</p>`;
    res.innerHTML += "<p>Lista dos pares: </p>";
    for(cont = 0; cont < pares.length; cont++){
        res.innerText += ` ${pares[cont]} `;
    }
}