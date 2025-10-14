let resultado = document.getElementById('res');
function Contar(){
    let string = document.getElementById('istring');
    resultado.innerHTML = '';
    if(string.value.length == 0){
        alert('Por favor, insira um texto ou palavra!');
    } else{
        let vogais = 0;
        let texto = string.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        for(let i = 0; i < string.value.length; i++){
            if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u')
                vogais++;
        }
        resultado.innerHTML = `A quantidade de vogais em <strong>${string.value}</strong> é: <strong>${vogais}</strong>`;
        string.value = '';
    }
}