function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
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