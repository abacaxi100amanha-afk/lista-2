let largura
let comprimento
let perimetro

largura = prompt("INFORME A LARGURA DO RETANGULO")
comprimento = prompt("INFORME O COMPRIMENTO DO RETANGULO")

largura = parseFloat(largura)
comprimento = parseFloat(comprimento)

perimetro = 2 * (largura + comprimento)

alert("O PERIMETRO DO RETANGULO É:" + perimetro + "metros")