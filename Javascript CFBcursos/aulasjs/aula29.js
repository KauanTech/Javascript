//O this e usado para diferenciar variaveis de valores a serem recebidos com o mesmo nome dentro de uma function OBS: O this so funciona para sua instancia ou seja ele funciona apenas para a função onde ele foi colocado OBS 2: Arrow function consegue resolver esse problema ja que ele usa como base o "pai" para funcionar o "pai" seria a function aluno.

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000);
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        }, 2000);
    }
}

const al1 = new aluno("Bruno", 100)
al1.dados_anonimo()
al1.dados_arrow()