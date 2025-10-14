function gerar(){
    let numero = document.getElementById('inum');
    let resultado = document.getElementById('res');
    if(numero.value.length == 0 || Number(numero.value) < 1 || Number(numero.value) > 999){
        alert("Insira um número de 1 a 999!");
    } else {
        numero = Number.parseInt(numero.value);
        let centena = Number.parseInt(numero / 100);
        let dezena = Number.parseInt((numero % 100) / 10);
        let unidade = (numero % 10);
        let extenso = '';
        if(centena == 1 && numero % 100 == 0){
            extenso += 'cem';
        } else {
            switch(centena){
                case 1: extenso += 'Cento';
                    break;
                case 2: extenso += 'Duzentos'; 
                    break;
                case 3: extenso += 'Trezentos';
                    break;
                case 4: extenso += 'Quatrocentos';
                    break;
                case 5: extenso += 'Quinhentos'; 
                    break;
                case 6: extenso += 'Seicentos';
                    break;
                case 7: extenso += 'Setecentos';
                    break;
                case 8: extenso += 'Oitocentos'; 
                    break;
                case 9: extenso += 'Novecentos';
                    break;
            }
        }
        if(centena != 0 && numero % 100 != 0){
            extenso += ' e ';
        }
        if(dezena == 1 && numero % 10 != 0){
            switch(unidade){
                case 1: extenso += 'onze';
                    break;
                case 2: extenso += 'doze'; 
                    break;
                case 3: extenso += 'treze';
                    break;
                case 4: extenso += 'catorze';
                    break;
                case 5: extenso += 'quinze'; 
                    break;
                case 6: extenso += 'dezeseis';
                    break;
                case 7: extenso += 'dezesete';
                    break;
                case 8: extenso += 'dezoito'; 
                    break;
                case 9: extenso += 'deznove';
                    break;
            }
        } else {
            switch(dezena){
                case 1: extenso += 'dez';
                    break;
                case 2: extenso += 'vinte'; 
                    break;
                case 3: extenso += 'trinta';
                    break;
                case 4: extenso += 'quarenta';
                    break;
                case 5: extenso += 'cinquenta'; 
                    break;
                case 6: extenso += 'sessenta';
                    break;
                case 7: extenso += 'setenta';
                    break;
                case 8: extenso += 'oitenta'; 
                    break;
                case 9: extenso += 'noventa';
                    break;
            }
        }
        if(dezena != 0 && dezena != 1 && numero % 10 != 0){
            extenso += ' e ';
        }
        if(dezena != 1){
            switch(unidade){
                case 1: extenso += 'um';
                    break;
                case 2: extenso += 'dois'; 
                    break;
                case 3: extenso += 'tres';
                    break;
                case 4: extenso += 'quatro';
                    break;
                case 5: extenso += 'cinco'; 
                    break;
                case 6: extenso += 'seis';
                    break;
                case 7: extenso += 'sete';
                    break;
                case 8: extenso += 'oito'; 
                    break;
                case 9: extenso += 'nove';
                    break;
            }
        }
        resultado.innerHTML = `<p>${extenso}</p>`;
    }
}