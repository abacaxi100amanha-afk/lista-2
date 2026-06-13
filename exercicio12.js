let distancia
let tempo
let velocidade

distancia = prompt("INFORME A DISTANCIA PERCORRIDA EM METROS")
tempo = prompt("INFORME O TEMPO GASTO EM SEGUNDOS")

distancia = parseFloat(distancia)
tempo = parseFloat(tempo)

velocidade = distancia / tempo

alert("A VELOCIDADE DO OBJETO É:" + velocidade + "m/s")