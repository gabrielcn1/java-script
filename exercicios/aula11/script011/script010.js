var bot = document.getElementById ('botao')
bot.addEventListener ('click', calcular)

function calcular() {
    var txtv = document.getElementById ('txtvel')
    var res = document.getElementById ('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}</p>`
    if (vel > 60) {
        res.innerHTML += `Você está MULTADO!`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}