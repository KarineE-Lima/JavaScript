
function gerar(){
    let quantidade = document.getElementById('ilitros');
    let res = document.getElementById('res');
    let tipo = document.getElementsByName('combustivel');
    res.innerText = '';
    if(quantidade.value.length == 0){
        alert("Insira a quantidade!");
    }else{
        let desconto = 0;
        let preco = 0;
        let aparecer = 0;
        if(tipo[0].checked){
            preco = 2.7;
            if(Number(quantidade.value)<= 25){
                desconto = preco*0.03;
            } else{
                desconto = preco * 0.05;
            }
        } else if(tipo[1].checked){
            preco = 1.9;
            if(Number(quantidade.value)<= 25){
                desconto = preco * 0.02;
            } else{
                desconto = preco * 0.04;
            }
        } else {
            alert("Insira o tipo de combustivel!");
            aparecer = 1;
        }
        if(aparecer == 0){
            let valor_pago = Number(quantidade.value) * (preco - desconto);
            res.innerHTML = `<p>O valor a ser pago é ${valor_pago.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}.</p>`;
            //res.innerHTML = "<p>Hello World!</p>";
        }
    }
    
}
