function tabuada(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    res.innerHTML = `Tabuada de ${num.value}: <br>`
    for (var c = 1; c<=10; c++){
        resul = Number(num.value)*c
        res.innerHTML += `${num.value} x ${c} = ${resul} <br>`
    }
}