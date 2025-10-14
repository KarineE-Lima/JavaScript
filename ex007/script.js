
function gerar(){
    let tipo = document.getElementsByName('pulv');
    let area = document.getElementById('iarea');
    let res = document.getElementById('res');
    let desconto = 0;
    res.innerText = '';
    if(area.value.length == 0){
        alert("Insira a área!");
    } else{
        area = Number(area.value);
        let valor = 0;
        if(tipo[0].checked){
            valor = 50;
        } else if(tipo[1].checked){
            valor = 100;
        } else if(tipo[2].checked){
            valor = 150;
        } else if(tipo[3].checked){
            valor = 250;
        } else {
            alert("Marque uma das opções abaixo!");
        }
        let total = area * valor;
        if(area >= 1000){
            total -= total * 0.05;
        }
        if(total > 750){
            total -= total * 0.1;
        }
        if(valor != 0)
            res.innerHTML = `<p>O custo total é de ${total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`;
    }
}
