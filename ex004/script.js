
function gerar(){
    let numero = document.getElementById('inum');
    let res = document.getElementById('res');
    res.innerText = '';
    if(numero.value.length == 0){
        alert("Insira um valor válido!");
    }else{
        let valor = Number.parseInt(numero.value);
        let notas = [100, 50, 20, 10, 5, 2, 1];
        let qtd_nota = [];
        for(var i = 0; i < notas.length; i++){
            qtd_nota[i] = Number.parseInt(valor / notas[i]);
            valor %= notas[i];
        }
        res.innerHTML = `<p>As notas a serem sacadas: </p>`;
        for(var i = 0; i < qtd_nota.length; i++){
            if(qtd_nota[i] != 0){
                res.innerHTML += `<p>${qtd_nota[i]} nota(s) de ${notas[i]} reais.</p>`;
            }
        }
    }
}
