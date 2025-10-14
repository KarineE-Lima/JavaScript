function gerar(){
    let numero = document.getElementById('inum');
    let resultado = document.getElementById('res');
    if(numero.value.length == 0){
        alert("Insira um número!");
    } else {
        numero = Number.parseInt(numero.value);
        let divisoes = 0;
        for(let divisor = 1; divisor <= numero; divisor++){
            divisoes += (numero % divisor == 0)? 1 : 0;
        }
        if(divisoes == 2){
            resultado.innerHTML = `<p>O número ${numero} é primo.</p>`;
        } else {
            resultado.innerHTML = `<p>O número ${numero} NÃO é primo.</p>`;
        }
    }
}