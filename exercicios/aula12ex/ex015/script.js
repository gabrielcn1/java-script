function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 23) {
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 23) {
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulta-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}