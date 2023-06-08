function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 11) {
                // criança
                img.setAttribute('src','aula7/imagens/menino.jpg')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src','aula7\imagens\homem adulto.jpg')
            } else if(idade < 55) {
                //adulto
                img.setAttribute('src','aula7\imagens\homem adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src','aula7\imagens\homem idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 11) {
                // criança
                img.setAttribute('src','aula7\imagens\menina.jpg')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src','aula7\imagens\mulher adulta.jpg')
            } else if(idade < 55) {
                //adulto
                img.setAttribute('src','aula7\imagens\mulher adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'aula7\imagens\mulher idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}