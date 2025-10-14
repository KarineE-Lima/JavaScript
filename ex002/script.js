
function gerar(){
    let numero = document.getElementById('inum');
    let result = document.getElementById('res');
    let numer = Number.parseInt(numero.value);
    if(numero.value.length == 0){
        window.alert("Insira algo!!");
    } else {
        let cent = Number.parseInt(numer / 100);
        let dez = Number.parseInt((numer % 100) / 10);
        let uni = numer % 10;
        let invertido = uni * 100 + dez * 10 + cent;
        result.innerHTML = `<p>O número ${numer} invertido é ${invertido}.</p>`;
    }
}
