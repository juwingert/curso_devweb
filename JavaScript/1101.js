function alterarTexto(){
    document.querySelector('h1').textContent = 'texto alterado no onclick'

}

document.querySelector('p').onclick = function () {
    document.querySelector('h1').textContent = 'Texto alterado no parágrafo'
}