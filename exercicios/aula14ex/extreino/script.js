function clicar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var con = document.getElementById('con')
    var res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || con.value == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'
        i = Number(ini.value)
        f = Number(fim.value)
        c = Number(con.value)
        if (i < f) {
            for(var p = i; p <= f; p += c) {
                res.innerHTML += ` ${p}`
            }
        } else {
            for(var p = i; p >= f; p -= c) {
                res.innerHTML += ` ${p}`
            }
        }
    }
}