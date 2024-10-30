const btalgreia = document.querySelector('#btalegria')
const bttristeza = document.querySelector('#bttristeza')
const btnojinho = document.querySelector('#btnojinho')
const btraiva = document.querySelector('#btraiva')
//event

btalgreia.addEventListener('click',ale)
bttristeza.addEventListener('click',eza)
btnojinho.addEventListener('click',jinho)
btraiva.addEventListener('click',iva)
alvo.addEventListener('dblclick',volta)

//função

function ale(){
    alvo.src = "imagem/download (6).jpg"
}
function eza(){
    alvo.src = "imagem/download (9).jpg"
}
function jinho(){
    alvo.src = "imagem/download (7).jpg"
}
function iva(){
    alvo.src = "imagem/download (8).jpg"
}
function volta(){
    alvo.src = "imagem/silhueta.png"
}