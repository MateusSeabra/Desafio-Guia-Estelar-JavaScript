let caixa = {
    receitas: [200.00, 100.00],
    despesas: [100.00, 50.00]
}

function saldo(caixa){
    let soma_receitas = 0
    let soma_despesas = 0
    for (let i = 0; i < caixa.receitas.length; i++){
        soma_receitas += caixa.receitas[i]
    }
    for (let i = 0; i < caixa.despesas.length; i++){
        soma_despesas += caixa.despesas[i]
    }
    total = soma_receitas - soma_despesas
    if (total > 0){
        return `Saldo Positivo: R$ ${total.toFixed(2)}`
    } else if (total == 0){
        return `Saldo Zerado: R$ ${total.toFixed(2)}`
    } else {
        return `Saldo Negativo: R$ ${total.toFixed(2)}`
    }
}

console.log(saldo(caixa))