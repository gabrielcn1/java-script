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