let  dias
let ValorDia
let Total

dias = prompt("INFORME A QUANTIDADE DE DIAS QUE O CARRO FOI ALUGADO")
ValorDia = prompt("INFORME O VALOR POR DIA DE ALUGUEL")

dias = parseFloat(dias)
ValorDia = parseFloat(ValorDia)

Total = dias * ValorDia

alert("O VALOR TOTAL DO ALUGUEL DO CARRO É:" + Total + "reais")