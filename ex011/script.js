function eh_primo(num){
    let divisoes = 0;
    for(let divisor = 1; divisor <= num; divisor++)
        divisoes += (num % divisor == 0) ? 1 : 0;
    if(divisoes == 2){
        return true;
    } else {
        return false;
    }
}
function gerar(){
    let numero = document.getElementById('inum');
    let resultado = document.getElementById('res');
    resultado.innerText = '';
    if(numero.value.length == 0 || Number(numero.value) % 2 != 0 || Number(numero.value) <= 2){
        alert("Insira um número par maior que dois!");
    } else {
        numero = Number.parseInt(numero.value);
        let primo1, primo2, soma = 0;
        for(primo1 = 2; primo1 < numero; primo1++){
            if(eh_primo(primo1)){
                primo2 = numero - primo1;
                if(eh_primo(primo2)){
                    resultado.innerHTML = `<p>${primo1} + ${primo2} = ${numero}.</p>`
                    break;
                }
            }
        }
    }
}