let resultado = document.getElementById('res');
function Gerar(){
    resultado.innerHTML = '';
    let string = document.getElementById('istring');
    let invertido = '';
    if(string.value.length == 0){
        alert("Insira uma palavra ou um texto!");
    } else {
        for(let i = (string.value.length - 1); i >= 0; i--){
            invertido += string.value[i];
        }
        resultado.innerHTML = `<p>O texto <strong>${string.value}</strong> invertido fica:</p>`;
        resultado.innerHTML += `<p><strong>${invertido}</strong></p>`;
        string.value = '';
    }
}