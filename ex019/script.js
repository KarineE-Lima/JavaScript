const pos = document.getElementsByClassName('item')

const reinicia = document.querySelector('input')

const res = document.getElementById('res')

let rodada = 0

let ativo = true

reinicia.addEventListener('click', function(){
    for(let k = 0; k < 9; k++){
        pos[k].innerHTML = ''
        ativo = true
        rodada = 0
        res.innerText = ''
    }
})

for(let j = 0; j < 9; j++){
    pos[j].addEventListener('click', function(){
        add_pos(j)
    })
    
}
function iguais(v1, v2, v3){
    if(v1 == v2 && v2 == v3 && v3 != '')
        return true
    return false
}
function verificaVitoria(jogador){
    const condicoes = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                       [0, 3, 6], [1, 4, 7], [2, 5, 8],
                        [0, 4, 8], [2, 4, 6]]
    let d = (jogador == 'X')? 1 : 2
    for(let k = 0; k < 8; k++){
        if(iguais(pos[condicoes[k][0]].textContent, pos[condicoes[k][1]].textContent, pos[condicoes[k][2]].textContent)){
            res.innerHTML = `<p>Jogador ${d} venceu!</p>`
            ativo = false
            for(let j = 0; j < 9; j++){
                if(j != condicoes[k][0] && j != condicoes[k][1] && j != condicoes[k][2])
                    pos[j].innerText = ''
            }
        }
    
    }
}
function posicoes_vazias(){
    let vazia = 0
    for(let k = 0; k < 9; k++){
        if(pos[k].textContent == '')
            vazia++
    }
    return vazia
}
function valida_pos(i){
    if(pos[i].textContent == 'O' || pos[i].textContent == 'X')
        return false
    return true
}
function add_pos(i){
    if(ativo){
        let jogador = (rodada % 2 == 0)? "X" : "O"
        if(valida_pos(i)){
            pos[i].innerHTML = `<p>${jogador}</p>`
            rodada++
        } else{
            alert(`Insira ${jogador} na posição vazia`)
        }

        verificaVitoria(jogador)

        if(!posicoes_vazias() && rodada == 9 && ativo){
            res.innerHTML = "<p>Empate!</p>"
            ativo = false
        }
    }
}

