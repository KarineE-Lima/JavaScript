function gerar_numero(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function gerarCorHexa(){
    let cores = "ABCDEF0123456789"
    let cor_hexa = "#";
    let min = 0;
    let max = 16;
    for(let i = 1; i <= 6; i++){
        cor_hexa += cores[gerar_numero(min, max)]
    }
    return cor_hexa

}
function gerarPaleta(){
    const elementos = document.getElementsByClassName('item')
    for(let i = 0; i < 5; i++){
        let cor = gerarCorHexa();
        elementos[i].style.backgroundColor =`${cor}`
        elementos[i].innerHTML = `<p>${cor}<\p>`
    }
    
}
function copiar(){
    // usar api navigator.clipboard.writeText
}
