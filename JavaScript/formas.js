
//acesso aos dados do formulário
console.log(document.forms[0].usuario.value)

//acesso dos dados do formulário pelo nome

console.log(document.forms.frm_login)
console.log(document.forms.frm_login.senha)

//eventos focus e blur

//o focus acontece quando entramos no elemento
//o blur acontece quando saímos do elemento

let form = document.forms.frm_login

form.usuario.addEventListener('focus', () => {
    console.log('usuário selecionado')
})

form.usuario.addEventListener ('blur', () => {
    if(form.usuario.value == 'leandro'){
        document.querySelector('#erro').getElementsByClassName.display = 'none'
        console.log('okkkkk')
    }
    else{
        document.querySelector('#erro').getElementsByClassName.display = 'block'
    }
})

//toda vez que o valor do input é alterado
form.senha.addEventListener('change', () => {
    console.log('alterado')
})

//toda vez que algo for inserido
// form.senha.addEventListener('input', => {
//     console.log('introduzido pelo input')
// })

//copy, cut e paste
form.senha.addEventListener('copy', () => {
    console.log('texto copiado')
})

//evitar que o texto seja copiado
form.senha.addEventListener('copy', (el) => {
    el.preventDefault()
})


//obter lista de verificação
let lista = document.querySelectorAll('verificacao > li')

//verificação de senha
form.senha.addEventListener('keyup', (el) => {
    let.forca = 0
    let.senha = 

    if (el.target.value.match('/[a-z]+/'))
        console.log('minuscula ok')
})