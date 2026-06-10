let  peso
let altura
let imc

peso= prompt("  INFORME O PESO DO PACIENTE")
altura= prompt("  INFORME A ALTURA DO PACIENTE")

peso = parseFloat(peso)
altura = parseFloat(altura)
imc = peso / altura

alert("O IMC DO PACIENTE É:" + imc)
