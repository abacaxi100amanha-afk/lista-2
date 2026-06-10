let produtosAdquiridos //entrada input
let preçoPorUnidade //entradainput
let valorTotalDeCompra //saida ouput

produtosAdquiridos = prompt ("INFORME A QUANTIDADES DE PRODUTOS ADQUIRIDOS")

preçoPorUnidade = prompt ("INFORME O VALOR DE CADA UNIDADE")

produtosAdquiridos = parseFloat(produtosAdquiridos)
preçoPorUnidade = parseFloat(preçoPorUnidade)

valorTotalDeCompra = produtosAdquiridos * preçoPorUnidade

alert("o valor total dos produtos é" + valorTotalDeCompra + "reais")

