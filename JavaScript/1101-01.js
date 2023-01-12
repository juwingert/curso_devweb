document.querySelector('#add').addEventListener('click', addEventos)

function addEventos(){
    let el = document.querySelector('#ex')

    el.addEventListener('click', func1)

    el.addEventListener('click', func2)

    function func1(){
        let agora = new Date()
        document.querySelector('#titulo1').textContent = agora.getSeconds()
    }

    function func2(){
        let agora = new Date()
        document.querySelector('#titulo2').textContent = agora.getSeconds()
    }

    document.querySelector('#rm').addEventListener('click', rmEvento)

    function rmEvento (){
        document.querySelector('#ex').removeEventListener('click', func2)
    }
}

