function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || +(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - +(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0]. checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/hcriança.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/hjovem.png')
            }
            else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'imagens/hidoso.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/mcriança.png')
            }
            else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mjovem.png')
            }
            else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'imagens/midosa.png')
            }
        }
        img.style.width = '300px'
        img.style.height = '300px'

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}