let distanciaPercorida //entrada - input
let combustivelEmLitros //entrada - input
let consumoMedio // saida ouput

distanciaPercorida = prompt("INFORME A DISTANCIA A SER PERCORRIDA EM KM")

combustivelEmLitros = prompt("INFORME A QUANTIDADE GASTA DE COMBUSTIVEL EM LITROS")

distanciaPercorida = parseFloat(distanciaPercorida)
combustivelEmLitros= parseFloat(combustivelEmLitros)


consumoMedio =  distanciaPercorida / combustivelEmLitros

alert("O consumo medio do veiculo é:" + consumoMedio + "litros por km rodado")
