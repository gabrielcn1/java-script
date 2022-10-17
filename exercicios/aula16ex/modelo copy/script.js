function add() {
    let num = document.getElementById('num')
    let fin = document.getElementById('fin')

    if (num.value == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        fin.innerHTML = `Valor ${n} adicionado.`
    }
}