function fatorial(v1) {
    let cont = v1 - 1
    while (cont >= 1) {
        v1 *= cont
        res = v1
        cont--
        console.log(res)
    }
}

fatorial(9)