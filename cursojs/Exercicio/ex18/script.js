var dados = document.getElementById('n')
var vetor = []
var n = document.getElementById('numeros')
var res = document.getElementById('res')
function isNumero(n){
    if (Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n, m){
    if(m.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
    
}
function add(){
    if (isNumero(dados.value) && !inLista(dados.value, vetor)){
        vetor.push(Number(dados.value))
        var item = document.createElement('option')
        item.text = `o numero ${dados.value} foi adicionado a lista`
        n.appendChild(item)
        dados.value = ''
        dados.focus()
        res.innerHTML = ' '
    } else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
}
function finalizar(){
    if (vetor.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        var maior = vetor[0]
        var menor = vetor [0]
        var soma = 0
        var media = 0
        for (var c in vetor){
            soma += vetor[c]
            if (maior < vetor[c]){
                maior = vetor[c]
            }
            if (menor>vetor[c]){
                menor = vetor[c]
            }
        }
        media = soma/vetor.length
        
        res.innerHTML = `O número de elementos é: ${vetor.length} <br>`
        res.innerHTML +=`O maior número entre os elementos é: ${maior} <br>`
        res.innerHTML += `O menor número entre os elementos é: ${menor} <br>`
        res.innerHTML +=`A soma de todos os valores é: ${soma} <br>`
        res.innerHTML +=`A média de todos os valores é: ${media}`
       
    }
    


}