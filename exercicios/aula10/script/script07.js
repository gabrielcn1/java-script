var cli = document.getElementById('botao')
    cli.addEventListener('click', somar)

    function somar() {
        var tn1 = document.getElementById ('txtn1')
        var tn2 = document.getElementById ('txtn2')
        var res = document.getElementById ('res')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var s = n1 + n2
        res.innerText = "A soma de " + n1 + " mais " + n2 + " è igual " + s
    }