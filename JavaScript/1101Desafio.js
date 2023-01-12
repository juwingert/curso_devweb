let btn = document.querySelector('button').addEventListener('click', Alterar)

function Alterar(){
    let tit = document.querySelector('h1')

    let ju = document.querySelector('button')
    
    if(tit.style.backgroundColor == ''){
        tit.style.backgroundColor = 'yellow' 
        ju.innerText = 'Fundo transparente'
    }

    else{
        tit.style.backgroundColor = ''
        ju.innerText = 'Fundo amarelo'
    }
}

