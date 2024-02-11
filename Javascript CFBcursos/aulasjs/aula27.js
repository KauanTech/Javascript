//As funções geradoras são o pilar da programação Assincrona OBS: Para funções geradoras e necessario usar a palavra function e o asterisco ao lado: function*

//Para conseguir acessar os valores da function geradora se usa um console.log() na variavel que ela foi armazenada ex: console.log(itc) e coloca o seguinte comando ao lado .next().value entre parenteses EX: console.log(itc.next().value)

//Se as todas as opções forem chamadas e chamarmos novamente a função o resultado sera undefined pois não há mais nenhuma opção a ser visualizada.

/* function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) */

/* function* perguntas() {
    const nome = yield 'Qual seu nome?'
    const esporte = yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp = perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value) */

/* function* contador() {
    let i=0
    while(true) {
        yield i++
    }
}

const itc = contador()
for(let i=0; i <= 10; i++){
    console.log(itc.next().value)
} */

function* contador() {
    let i=0
    while(true) {
        yield i++
        if(i > 5)
        break
    }
}

const itc = contador()
for (c of itc) {
    console.log(c)
}

