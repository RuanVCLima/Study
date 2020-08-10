function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value>ano){
        window.alert('Dados inválidos!! ')
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked){
            genero = 'Homen'
            if (idade>=0 && idade<=12){
                //crianca
                img.setAttribute('src','homicrianca.png')
            }else if (idade<21){
                //jovem
                img.setAttribute('src', 'homijovi.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','homiadulto.png')
            }else{
                //idoso
                img.setAttribute('src','homiveio.png')
            }
        }else {
            genero = 'Mulher'
            if (idade>=0 && idade<=12){
                //crianca
                img.setAttribute('src','muiecrianca.png')
            }else if (idade<21){
                //jovem
                img.setAttribute('src','muiejovi.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','muiadulta.png')
            }else{
                //idoso
                img.setAttribute('src','muieveia.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}