let cachorro = document.querySelector('div')

// cachorro.addEventListener('click', () => {
//     console.log('click')
// })


// cachorro.addEventListener('mousedown', () => {
//     console.log('mouse down')
// })

// cachorro.addEventListener('mouseup', () => {
//     console.log('mouse up')
// })

// cachorro.addEventListener('mouseenter', (div) => {
//     console.log('mouse enter')
//     div.target.style.backgroundColor = "teal"
// })

// cachorro.addEventListener('mouseleave', (div) => {
//     console.log('mouse leave')
//     div.target.style.backgroundColor = "yellow"
// })

// cachorro.addEventListener('mousedown', () => {
//     console.log('mouse down')
// })

// cachorro.addEventListener('dbclick', () => {
//     console.log('click duplo')
// })

// cachorro.addEventListener('dblclick', () => {
//     console.log('click duplo')
// })

// cachorro.addEventListener('contextmenu', () => {
//     console.log('menu de contexto')
// })


// cachorro.addEventListener('mousedown', (e) => {
//     console.log('mouse down')

//     console.log(e.button)

//     if (e.shiftKey) {
//         console.log('ok - shift')
//     }

//     if (e.altKey) {
//         console.log('cuca')
//     }

// })

// cachorro.addEventListener('mousemove', (ev) => {
//     console.log(ev.pageX + ev.pageY)

// })

// cachorro.addEventListener('mousemove', (ev) => {
//     let el = document.createElement('div')

//     el.className = 'elemento'

//     el.style.top = ev.pageY1

//     el.style.left = ev.pageX

//     ev.target.appendChild(el)

// })

let texto = document.querySelector('#texto')

texto.addEventListener('keydown', (e) => {
    console.log(e.key)

    console.log(e.code)

    if(e.code == "F1"){
        e.preventDefault()
    }

    console.log(e.keyCode)
})