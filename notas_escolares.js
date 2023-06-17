let nota = 90

if (nota <= 100 && nota >= 90)
{
    nota = "A"
} else if (nota < 90 && nota >= 80)
{
    nota = "B"
} else if (nota < 80 && nota >= 70)
{
    nota = "C"
} else if (nota < 70 && nota >= 60)
{
    nota = "D"
} else if (nota < 60 && nota >= 0)
{
    nota = "F"
} else
{
    nota = "Inválido"
}

console.log("Sua nota é: " + nota)