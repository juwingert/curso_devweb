function newElement(local) {
    if (local == 'l'){

    let newElement = document.createElement('span')   
    newElement.className = 'newElement'
    newElement.innerText = 'dobre a esquerda'     

    let id = document.querySelector('#left') 
    id.insertAdjacentElement('beforebegin', newElement)

    }
    

}

