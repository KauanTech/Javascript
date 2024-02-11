//const soma=function(v1,v2){return v1+v2}

//Resumindo Arrow Function e uma abreviação para não precisar escrever function e diminuir o codígo

//Se por acaso for apenas 1 parametro não é necessario colocar parenteses nele Ex:

/*const nome=n => {return n}

console.log(nome("Michael"))*/

/*const soma=(...valores)=>{
    let res = 0
    for (v of valores) {
       res += v 
    }
    return res
}

console.log(soma(10,4,6,2,8)) */

const add = n => n+n //Tambem podemos fazer as arrow functions sem os parenteses e sem o return porem em funções bem simples

console.log(add(10))