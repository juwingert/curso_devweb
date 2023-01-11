let p = document.querySelector('p')

console.log(p.className)

p.className = 'p2'

console.log(p.className)

p.className = 'p2 espaco'

console.log(p.className)

console.log(p.classList)

p.classList.add('p3')

p.classList.remove('p2')

p.classList

p.classList.toggle('margem')

// Image.classList.toggle('exibirImagem')

if(p.classList.contains('espaco')){
    console.log('tem espaço')
}