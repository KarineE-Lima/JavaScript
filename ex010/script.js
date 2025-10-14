function gerar(){
    let numero = document.getElementById('inum');
    let resultado = document.getElementById('res');
    resultado.innerText = '';
    if(numero.value.length == 0){
        alert("Insira um número!");
    } else {
        numero = Number.parseInt(numero.value);
        let parar = 0;
        for(let prod = 1; prod < numero && parar == 0; prod++){
            let mult = 1;
            for(let cont = 0; cont < 3; cont++){
                mult *= (prod + cont);
            }
            if(mult == numero){
                resultado.innerHTML = `<p>O número ${numero} é triangular.</p>`;
                parar = 1;
            }
        }
        if(parar == 0){
            resultado.innerHTML = `<p>O número ${numero} NÃO é triangular.</p>`;
        }
    }
}