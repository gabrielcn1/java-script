var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
var d = document.getElementById('msg')
var fundo = document.getElementById('container')
var title = document.getElementById('titulo')

// fundo
fundo.style.background = 'green'
fundo.style.borderRadius = '20px'
fundo.style.padding = '10px'

// titulo
titulo.style.fontSize = '40px'
titulo.style.color = 'darkorange'

// texto
d.style.color = 'black'
d.style.fontSize = '24px'
d.style.fontWeight = 'bold'
d.style.padding = '10px 0px'

//corpo
corpo.style.background  = 'rgb(53, 105, 163)'
corpo.style.color = 'white'
corpo.style.fontFamily = 'Arial'
corpo.style.textAlign = 'center'