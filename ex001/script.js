
function gerar(){
    let numero = document.getElementById('inum');
    let result = document.getElementById('res');
    let numer = Number(numero.value);
    if(numero.value.length == 0){
        window.alert("Insira algo!!");
    } else {
        let sucessor = numer + 1;
        let antecessor = numer - 1;
        result.innerHTML = `<p>O sucessor do número ${numer} é ${sucessor} e o ancessor é ${antecessor}.</p>`;
    }
}