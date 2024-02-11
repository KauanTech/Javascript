//Funções anonimas não possuem nome de conteudo e são chamadas no tempo da execução porem ela so vai ser executada quando for chamada

/* const f=function(...valores){
    res = 0
    for (v of valores) {
        res += v
    }
    return res
}

console.log(f(10, 5)) */

const f = new Function("v1","v2","v3", "return v1+v2+v3") //Função Construtor Anônima

console.log(f(10,5,15))