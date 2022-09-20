// SCRIPT
function carregar() {
    var txt = document.getElementById('texto')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = (`Agora são ${hora} horas`)
    txt.style.font = 'normal 15pt Arial'
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = 'rgb(102, 103, 105)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(126, 67, 27)'
    } else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(25, 24, 24)'
    }
}

// DOM
var secao = document.getElementById ('section')
var h1 = document.getElementById ('h1')
var copy = document.getElementById ('copy')

// ESTILO
secao.style.background = 'white'
secao.style.padding = '10px'
secao.style.width = '500px'
secao.style.margin = 'auto'
secao.style.textAlign = 'center'
secao.style.borderRadius = '15px 0px'
secao.style.boxShadow = 'box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.363);'

h1.style.color = 'white'
h1.style.textAlign = 'center'
h1.style.fontFamily = 'Arial'
h1.style.fontSize = '42px'
h1.style.textShadow = '3px 3px 5px rgba(0, 0, 0, 0.363)'

copy.style.color = 'white'
copy.style.textAlign = 'center'
copy.style.marginTop = '30px'
copy.style.fontFamily = 'Arial'
