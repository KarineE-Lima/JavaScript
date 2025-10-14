let resultado = document.getElementById('res');
let vetor = [2, -1, 4, 8, 9, 18, 22, 16, 14];

function Buscar(){
    let num_buscado = document.getElementById('inum');
    if(num_buscado.value.length == 0){
        alert("Insira um valor!");
    } else {
        num_buscado = Number(num_buscado.value);
        let busca = -1;
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i] == num_buscado){
                busca = i;
                break;
            }
        }
        if(busca < 0){
            resultado.innerHTML = `<p>O valor ${num_buscado} não se encontra no vetor.</p>`
        } else{
            resultado.innerHTML = `<p>O valor ${num_buscado} se encontra na posição ${busca} do vetor.</p>`
        }
        
    }
}