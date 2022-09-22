function verificar() {
    var filmes = document.getElementsByName('film')
    var imge = document.getElementById('imagem')
    var nome = document.getElementById('res')
    if (filmes[0].checked) {
        imge.src = 'o-profissional.jpg'
    } else if (filmes[1].checked) {
        imge.src = 'de-volta-para-o-futuro.jpg'
    } else if (filmes[2].checked) {
        imge.src = 'homem-aranha.png'
    } else if (filmes[3].checked) {
        imge.src = 'gente-grande.jpg'
    } else if (filmes[4].checked) {
        imge.src = 'como-se-fosse-a-primeira-vez.jpg'
    } else if (filmes[5].checked) {
        imge.src = 'o-dilema-das-redes.jpg'
    } else if (filmes[6].checked) {
        imge.src = 'coracoes-de-ferro.jpg'
    } else if (filmes[7].checked) {
        imge.src = 'django.jpg'
    } else if (filmes[8].checked) {
        imge.src = 'o-senhor-dos-aneis.jpg'
    } else if (filmes[9].checked) {
        imge.src = 'interestelar.jpg'
    } else if (filmes[10].checked) {
        imge.src = 'batman.jpg'
    } else if (filmes[11].checked) {
        imge.src = 'bastardos-inglorios.jpg'
    } else if (filmes[12].checked) {
        imge.src = 'grease.jpg'
    } else if (filmes[13].checked) {
        imge.src = 'questao-de-tempo.jpg'
    } else { (filmes[14].checked) 
        imge.src = 'corra.jpg'
    } 
}

// DOM 

var titulo = document.getElementById ('h1')
var sect = document.getElementById ('section')
var list = document.getElementById ('ul')
var gen = document.getElementById ('gen')
var bot = document.getElementById ('bot')
var button = document.getElementById ('button')
var img = document.getElementById ('img')

// ESTILO

titulo.style.fontFamily = 'Bungee Spice'
titulo.style.fontSize = '3em'
titulo.style.textAlign = 'center'
titulo.style.margin = '20px 0px'
titulo.style.textShadow = '5px 7px 1px black'

sect.style.width = '700px'
sect.style.background = 'white'
sect.style.margin = 'auto'
sect.style.padding = '15px'
sect.style.borderRadius = '10px'
sect.style.boxShadow = '6px 8px 8px rgba(0, 0, 0, 0.582)'

list.style.listStyle = 'none'

gen.style.columns = '3'

bot.style.textAlign = 'center'
bot.style.margin = '25px 0'

button.style.padding = '10px'
button.style.fontSize = '1.4em'
button.style.fontFamily = 'Bungee Spice'
button.style.border = 'none'
button.style.borderRadius = '15px'
button.style.background = '#2F97C1'
button.style.cursor = 'pointer'
button.style.textShadow = '2px 2px 1px black'
button.style.boxShadow = '0px 0px 10px #F85E00'

img.style.display = 'flex'
img.style.justifyContent = 'center'