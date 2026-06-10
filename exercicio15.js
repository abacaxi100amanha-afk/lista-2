let quantidade 
let custoUnitario
let custoTotal

quantidade = prompt("INFORME A QUANTIDADE DE PRODUTOS ADQUIRIDOS")
custoUnitario = prompt("INFORME O CUSTO POR UNIDADE DO PRODUTO")

quantidade = parseFloat(quantidade)
custoUnitario = parseFloat(custoUnitario)

custoTotal = quantidade * custoUnitario

alert("O VALOR TOTAL DA COMPRA É:" + custoTotal + "reais")


