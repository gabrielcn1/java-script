function clicar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || pas.value == 0){
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}