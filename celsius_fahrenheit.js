let temperatura = "35°C"

function transformacao(temperatura){
    if (temperatura.includes("C")){
        temperatura = Number(temperatura.replace(/\D/g, ""))
        return `A temperatura em fahrenheit é: ${(temperatura * 9/5 + 32).toFixed(0)}°F`
    } else if (temperatura.includes("F")){
        temperatura = Number(temperatura.replace(/\D/g, ""))
        return `A temperatura em celsius é: ${((temperatura - 32)*5/9).toFixed(0)}°C`
    } else{
        return "Temperatura inválida"
    }
}

console.log(transformacao(temperatura))