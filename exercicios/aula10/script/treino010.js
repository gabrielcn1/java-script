var a = document.getElementById('bloco')

// Estilo
a.style.width = '400px'
a.style.height = '400px'
a.style.background = 'gray'
a.style.margin = 'auto'
a.style.display = 'block'
a.style.borderRadius = '50%'
a.style.textAlign = 'center'
a.style.justifyContent = 'center'
a.style.alignItems = 'center'
a.style.boxShadow = '0px 0px 1px black'
a.style.lineHeight = '400px'
a.style.fontSize = '70px'
a.style.fontFamily = 'Arial'
a.style.color = 'white'

// Funções
a.addEventListener('click', clicou)
a.addEventListener('mouseover', entrar)
a.addEventListener('mouseout', sair)
// Final das funções

function clicou() {
    a.innerText = 'Clicou!'
    a.style.background = 'pink'
    a.style.color = 'black'
}

function entrar() {
    a.innerText = 'Entrou!'
    a.style.background = 'darkorange'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}