let ingressos
let valor
let total

ingressos = prompt("INFORME A QUANTIDADE DE INGRESSOS VENDIDOS")
valor = prompt("INFORME O VALOR DE CADA INGRESSO")

ingressos = parseFloat(ingressos)
valor = parseFloat(valor)

total = ingressos * valor

alert("O VALOR TOTAL ARRECADADO COM A VENDA DOS INGRESSOS É:" + total + "reais")