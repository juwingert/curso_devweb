let el = document.querySelector('h3')

if (el.hasAttribute('id')){
    console.log('existe')
}

if (el.hasAttribute('class')){
    console.log('existe class')
}

console.log(el.getAttribute('id'))

el.setAttribute('alt', 'noticia')
let img = document.querySelector('img')

console.log(img.attributes)
let el2 = document.querySelectorAll('p')

for (let i = 0; i < el2.length ; i++){
    if ( i % 2 == 0){
        el2[i].setAttribute('class', 'estilo')
    }
}

