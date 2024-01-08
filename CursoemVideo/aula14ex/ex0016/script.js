function Contar() {
    var ini = parseInt(window.document.getElementById('Inicio').value)
    var fim = parseInt(window.document.getElementById('Fim').value)
    var passo = parseInt(window.document.getElementById('Passo').value)
    var res = window.document.getElementById('res')

    res.innerHTML = '';

    if (ini == 0 && fim == 0 &&passo == 0) {
        res.innerHTML = 'Impossivel contar!'
    }

    else if (passo == 0) {
        window.alert('O passo precisa ser maior que zero')
    }

    else {
    if (ini < fim) {
        for (ini;ini < fim;ini += passo) {
            res.innerHTML += `${ini} \u{1F449}`
        }
    }

    else {
        for (ini;ini > fim;ini -= passo) {
            res.innerHTML += `${ini} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
}
