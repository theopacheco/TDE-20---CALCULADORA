function somar() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 != '' && num2 != '') {
        let resultado = num1 + num2
        document.getElementById('result').innerHTML = 'Resultado: ' + resultado
    } else {
        alert('Preencha todos os campos.')
        document.getElementById('num1').focus()
    }
}

function subtrair() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 != '' && num2 != '') {
        let resultado = num1 - num2
        document.getElementById('result').innerHTML = 'Resultado: ' + resultado
    } else {
        alert('Preencha todos os campos.')
        document.getElementById('num1').focus()
    }
}

function multiplicar() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 != '' && num2 != '') {
        let resultado = num1 * num2
        document.getElementById('result').innerHTML = 'Resultado: ' + resultado
    } else {
        alert('Preencha todos os campos.')
        document.getElementById('num1').focus()
    }
}

function dividir() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)
    if (num1 != '' && num2 != '') {
        let resultado = num1 / num2
        document.getElementById('result').innerHTML = 'Resultado: ' + resultado
    } else {
        alert('Preencha todos os campos.')
        document.getElementById('num1').focus()
    }
}

function limpar() {
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    document.getElementById('result').innerHTML = 'Resultado: '
    document.getElementById('num1').focus()
}

function calcular() {
    const ap1 = Number(document.getElementById('ap1').value)
    const ap2 = Number(document.getElementById('ap2').value)
    const av_sem = Number(document.getElementById('av_sem').value)
    let media = ap1 + ap2 + av_sem
    if (media >= 6) {
        document.getElementById('msg').innerHTML = 'Nota: ' + media + ' Aprovado. Parabéns!'
    } else {
        document.getElementById('msg').innerHTML = 'Nota: ' + media + ' Reprovado. Reforce seus estudos para realização da AF!'
    }
}
function verificaAp1() {
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 > 1.5) {
        alert('Nota inválida')
    }
}

function verificaAp2() {
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 > 2.5) {
        alert('Nota inválida')
    }
}

function verificaAv_Sem() {
    const ap1 = Number(document.getElementById('ap1').value)
    if (ap1 < 0 || ap1 > 6) {
        alert('Nota inválida')
    }
}

function limpar2() {
    document.getElementById('ap1').value = ''
    document.getElementById('ap2').value = ''
    document.getElementById('av_sem').value = ''
    document.getElementById('msg').innerHTML = 'Resultado: '
    document.getElementById('ap1').focus()
}