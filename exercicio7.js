let preço
let percentualDeDesconto
let desconto

preço = prompt("INFORME O PREÇO DO PRODUTO")
percentualDeDesconto = prompt("INFORME O PERCENTUAL DE DESCONTO")

preço = parseFloat(preço)
percentualDeDesconto = parseFloat(percentualDeDesconto)

desconto = (preço * percentualDeDesconto) / 100

alert("O VALOR DO DESCONTO É:" + desconto + "reais")