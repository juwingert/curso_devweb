//selecionar o elemento
let div = document.querySelector('.container')

//adicionar antes da div
div.before('AAAAA')

//adicionar antes do conteúdo
div.prepend('BBBBB')


//adicionar depois do conteúdo
div.append('CCCCC')


//adicionar depois da div
div.after('DDDD')

let agua = document.querySelector('#cachorro')

//maneira alternativa para inserir elementos:
//-insertAdjacentText
//-insertAdjacentHTML
//-insertAdjacentElement

agua.insertAdjacentText('beforebegin', 'AAAAA')
agua.insertAdjacentHTML('afterbegin', '<u>BBBB</u>')

let el = document.createElement('span')
el.innerText = 'CCCCC'
el.className = 'ex'
agua.insertAdjacentElement('beforeend', el)

agua.insertAdjacentText('afterend', 'DDDDD')
agua.insertAdjacentHTML('afterend', '<b>DDDDD</b>')

let el2 = document.createElement('span')
el2.innerText = 'DDDDD'
el2.className = 'ex'
agua.insertAdjacentElement('afterend', el2)
