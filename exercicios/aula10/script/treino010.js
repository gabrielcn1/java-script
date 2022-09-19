var x = document.getElementById('sobre')

x.style.width = '500px'
x.style.height = '500px'
x.style.background = 'gray'
x.style.lineHeight = '500px'
x.style.textAlign = 'center'
x.style.fontSize = '60px'
x.style.color = 'white'

x.addEventListener ('click', clicar)
x.addEventListener ('mouseover', entrar)
x.addEventListener ('mouseout', sair)

function clicar(){
    x.innerText = 'Clicou!'
    x.style.textTransform = 'uppercase'
    x.style.background = 'red'
}

function entrar() {
    x.innerText = 'Entrou!'
    x.style.textTransform = 'uppercase'
    x.style.background = 'blue'
}

function sair() {
    x.innerText = 'Saiu!'
    x.style.textTransform = 'uppercase'
    x.style.background = 'green'
}