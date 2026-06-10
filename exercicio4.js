let nota1
let nota2
let nota3
let media

nota1= prompt("INFORME A PRIMEIRA NOTA")
nota2= prompt("INFORME A SEGUNDA NOTA")
nota3= prompt("INFORME A TERCEIRA NOTA")

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

media = (nota1 + nota2 + nota3) / 3
alert("A MEDIA DO ALUNO É:" + media)