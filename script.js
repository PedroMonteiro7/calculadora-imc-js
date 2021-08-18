const nome = document.getElementById('nome')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function calcular() {
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    resultado.value = parseFloat(peso.value) / 
    (parseFloat(altura.value) . parseFloat(altura.value))
}

calcular.addEventListener('click', resultado)



