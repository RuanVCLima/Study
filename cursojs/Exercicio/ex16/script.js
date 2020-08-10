function contador(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length ==0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Dados inválidos')   
    }else if(Number(inicio.value)>Number(fim.value)){
        //contagem regressiva
        res.innerHTML = 'Contando: <br> '
        for (var c = Number(inicio.value); c>=Number(fim.value); c-=Number(passo.value)){
            res.innerHTML += ` ${c} \u{1F449}`
            res.innerHTML += `\u{1F3C1}`
    }
    }
    //contagem crescente
    else if(Number(passo.value)<=0){
        window.alert('Passo igual a zero é inválido, então vamos considera-lo como 1!')
        var v = 1
        res.innerHTML = 'Contando: <br> '
        for (var c = Number(inicio.value); c<=Number(fim.value); c+=v){
           res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } else{
        res.innerHTML = 'Contando: <br> '
        for (var c = Number(inicio.value); c<=Number(fim.value); c+=Number(passo.value)){
            res.innerHTML += ` ${c} \u{1F449}`
    }
        res.innerHTML += `\u{1F3C1}`
            
    }
}