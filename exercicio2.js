let  quantidadeDeHoras //entrada-input
let valorPagoPorHoras //entrada-input
let salarioMensal //saida ouput

quantidadeDeHoras = prompt("INFORME A QUANTIDADE DE HORAS TRABALHADAS")

valorPagoPorHoras = prompt("INFORME O VALOR POR HORAS")

quantidadeDeHoras = parseFloat(quantidadeDeHoras)
valorPagoPorHoras = parseFloat(valorPagoPorHoras)

salarioMensal = quantidadeDeHoras / valorPagoPorHoras

alert("o salario é:" + salarioMensal + "reais" )
