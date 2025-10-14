
function gerar(){
    let numero = document.getElementById('inum');
    let res = document.getElementById('res');
    if(numero.value.length == 0){
        alert("Insira um número!");
    }else{
        let decimal = Number.parseInt(numero.value);
        let binario = 0;
        let pot = 0;
        for(pot = 0; decimal >= 1; pot++){
            binario += (decimal % 2) * (10** pot);
            decimal = Number.parseInt(decimal/ 2);
        }
        res.innerHTML = `<p>O número informado em binário é ${binario}.</p>`;
    }
}
