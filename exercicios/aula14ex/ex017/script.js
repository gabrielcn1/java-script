function contar() {
    var txti = document.getElementById("txti")
    var txtf = document.getElementById("txtf")
    var txtp = document.getElementById("txtp")
    var res = document.getElementById("res")

    if (txti.value == 0 || txtf.value == 0 || txtp.value == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'contando: '
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }   
    }
}