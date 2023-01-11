function newElement(local) {
    if (local == 'l'){

    let newElement = document.createElement('span')   
    newElement.className = 'newElement'
    newElement.innerText = 'dobre à esquerda'     

    let id = document.querySelector('#left') 
    id.insertAdjacentElement('beforebegin', newElement)

    }

    if (local == 't'){

        let newElement = document.createElement('span')   
        newElement.className = 'newElement'
        newElement.innerText = 'dobre para cima'     
    
        let id = document.querySelector('#top') 
        id.insertAdjacentElement('beforebegin', newElement)
    
        }

    if (local == 'b'){

        let newElement = document.createElement('span')   
        newElement.className = 'newElement'
        newElement.innerText = 'dobre para baixo'     
    
        let id = document.querySelector('#botton') 
        id.insertAdjacentElement('afterend', newElement)
    
        }

    if (local == 'r'){

        let newElement = document.createElement('span')   
        newElement.className = 'newElement'
        newElement.innerText = 'dobre à direita'     
    
        let id = document.querySelector('#right') 
        id.insertAdjacentElement('afterend', newElement)
    
        }
    

}

