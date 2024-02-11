//Funções aninhadas são algo meio confuso mas quando se for vir revisar novamente meu eu do futuro preste atenção que o return que leva os valores a função somar ou a 2 função como preferir chamar

const soma=(...valores)=>{
    const somar=val => {
        let res = 0
        for(v of val) {
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10, 5, 15))