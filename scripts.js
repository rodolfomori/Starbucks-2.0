/*  
    JavaScript NÃO é Java
    Variáveis (Qualquer Linguagem de Programação)

    - Algoritmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [ ] Trocar a cor de fundo
        [ ] Trocar a imagem principal

    - Funções 
      - Pedacinhos de código QUE, só executam quando são chamados
*/

// HTML = document
// QuerySeclector -> Selecionar ou Puxar o que eu pedir

let circulo = document.querySelector('.circulo')
let imagem = document.querySelector('.copo')


function trocarACor(cor){
    circulo.style.background = cor
}

function trocarImagem(endereco){
    imagem.src = endereco
}