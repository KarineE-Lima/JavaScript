
function gerar(){
    let renda = document.getElementById('irenda');
    let valor_emp = document.getElementById('iempres');
    let prest = document.getElementById('iparcela');
    let res = document.getElementById('res');
    if(renda.value.length == 0 || valor_emp.value.length == 0 || renda.value.length == 0){
        alert("Preencha todos os campos!");
    } else{
        let max_emp = Number(renda.value) * 10;
        let max_parc = Number(renda.value) * 0.3;
        let val_parc = Number(valor_emp.value) / Number(prest.value);
        if(Number(valor_emp.value) <= max_emp && val_parc <= max_parc){
            res.innerHTML = "<p>O empréstimo será concedido, pois atende aos requesitos</p>";
            res.innerHTML = `<p>O valor das parcelas será de <strong>${val_parc.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</strong>.</p>`
        } else{
            res.innerHTML = `<p>O empréstimo não será concedido pois não atende aos requisitos, seu pobre!</p>`;
        }
    }
}
