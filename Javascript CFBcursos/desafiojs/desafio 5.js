const multiplicação=(...valores)=>{
    const efetuar=x=>{
        let res = 1
        for (v of x) {
            res *= v
        }
        return res
    }
    return efetuar(valores)
}

console.log(multiplicação(3, 3, 9))