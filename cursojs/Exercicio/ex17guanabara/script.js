function tabuada(){
    var num = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor digite um número!')
    }else{
        var n = Number(num.value)
        tabuada.innerHTML = ''
        for (var c = 1; c<=10; c++){
            var item = document.createElement('option')
            resul = n*c
            item.text = `${n} x ${c} = ${resul}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
        }
    }
    
}