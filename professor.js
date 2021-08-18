function calcularImc(peso, altura) {
    return (peso / (altura ** 2)).toFixed(1)
}

function classificar(imc) {

    //let porque nesse caso varia, mudando o seu valor a cada condição
    let classificacao = ''

    if (imc < 18.5) {
        classificacao = 'abaixo do peso.'
    } else if (imc < 25) {
        classificacao = 'com o peso ideal. <span class="parabens">Parabéns!</span>'
    } else if (imc < 30) {
        classificacao = 'levemente acima do peso.'
    } else if (imc < 35) {
        classificacao = 'com obesidade grau I.'
    } else if (imc < 40) {
        classificacao = 'com obesidade grau II.'
    } else {
        classificacao = 'com obesidade grau III. <span class="cuidado">Cuidado!</span>'
    }

    return classificacao
}

//Verificando se os campos foram preenchidos
function camposValidos() {
    return document.querySelector('form').reportValidity()
}

function exibirResultado() {
    const resultado = document.getElementById('resultado')
    const nome = document.getElementById('nome').value
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'))
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'))
    
    if (camposValidos()) {
        const imc = calcularImc(peso, altura)
        const classificacao = classificar(imc)

        resultado.innerHTML = `${nome}, seu IMC é ${imc.replace('.', ',')} e você está ${classificacao}`
        //innerHtml interpreta código html
    } else {
        resultado.textContent = 'Preencha todos os campos.'
    }
}

//dando à tecla "Enter" a mesma função do botão "Calcular"
function capturarEnter(event) {
    if (event.key == "Enter") {
        exibirResultado()
    }
}

// eventos
document.getElementById('calcular').addEventListener('click', exibirResultado)
document.querySelector('form').addEventListener('keypress', capturarEnter)