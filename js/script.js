var fotosDrinks
var fotosCardapios
var iFoto = 0
var temporizador
var botaoVoltar = document.getElementById("btnVoltar")
var botaoAvancar = document.getElementById("btnAvancar")
const temCarrossel = 5000 // 10 segundos (tempo em milisegundos)
const path_drinks = "img/drinks/"  // Aqui é a variavel do caminho da pasta das img dos drinks
const path_cardapios = "img/cardapios/" // Aqui é a variavel do caminho da pasta das img dos cardápios
const moldura_drinks = document.getElementById("drinks")
const moldura_cardapio = document.getElementById("cardapio")
const nomeProduto = document.querySelector("h3")
const precoProduto = document.querySelector("h4")

window.onload = iniciar

function iniciar() {

    fotosDrinks = ["carrossel-drinks-1.jpeg", "carrossel-drinks-2.jpeg", "carrossel-drinks-3.jpeg", "carrossel-drinks-4.jpeg"]
    fotosCardapios = ["carrossel-cardapio-1.jpeg", "carrossel-cardapio-2.jpg", "carrossel-cardapio-3.jpg", "carrossel-cardapio-4.jpg"]

    moldura_drinks.src = `img/drinks/${fotosDrinks[0]}`
    moldura_cardapio.src = `img/cardapios/${fotosCardapios[0]}`

    botaoAvancar.onclick = bAvancar
    botaoVoltar.onclick = bVoltar
    carrossel() 
    automatico()
}

function bAvancar() {
    iFoto++
    if (iFoto >= fotosCardapios.length) {
         iFoto = 0
    }
         carrossel()
}

function bVoltar() {
    iFoto--
    if (iFoto < 0) {
        iFoto = fotosCardapios.length - 1
    }
        carrossel() 
}

function automatico() {

    clearInterval(temporizador)
    temporizador = setInterval(carrosselAuto, temCarrossel)

}

function carrosselAuto() {
    iFoto++
    if (iFoto >= fotosDrinks.length) {
         iFoto = 0
    }
    moldura_drinks.src = path_drinks + fotosDrinks[iFoto]
}

function carrossel() {
    moldura_cardapio.src = path_cardapios + fotosCardapios[iFoto]
}