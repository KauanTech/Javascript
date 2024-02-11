//O map pode conter 1, 2 ou 3 parametros sendo eles na ordem 1: elemento, 2: indice , 3: E o própio Array que ele vai interar

//Para usar uma função no map e necessario deixar ela entre os parentes do comando map.

//Se eu quiser pegar propiedade de um elemento eu uso chave = {}.

//O comando "parseInt" transforma uma string em um numero inteiro

/* const cursos=["HTML", "CSS", "Javascript", "PHP", "React"]
let c = cursos.map((el, i)=>{
    return el
})

console.log(c) */

//Manipulação de DOM OBS: O professor transformou os elementos em el com o spread para poder manipula-los acessa-los

/* const el = document.getElementsByTagName("div")
el = [...el]
console.log(el)
el.map((e, i)=>{
e.innerHTML = "CFB Cursos" */

/* const el = document.getElementsByTagName("div")
const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
console.log(val)
}) */

const converterInt = (e)=>parseInt(e)
const dobrar = (e)=> e * 2
let num = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(num)