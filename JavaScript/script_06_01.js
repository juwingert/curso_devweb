console.log('teste')

let el4 = document.querySelector('#titulo > i > u')
el4.style.color = 'red'
el4.style.backgroundColor = 'gray'

let imagem = document.querySelector('#noticias')
console.log(imagem)

let dois = document.querySelectorAll('h1 > strong')[1]
dois.innerText = imagem.alt

document.querySelector('#titulo').style.backgroundColor = 'teal'
document.querySelector('titulo > i').style.backgroundColor = 'white'
