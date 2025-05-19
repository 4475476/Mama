function calcularIMC() {
    p = parseFloat(document.getElementById('pe').value)
    a = parseFloat(document.getElementById('alt').value)
    IMC = p / (a * a)
    if (IMC <= 18.5) {
        msg = "Abaixo do Peso"
    } else if (IMC <= 24.9) {
        msg = "Peso Normal"
    } else if (IMC <= 29.9) {
        msg = "Sobrepeso"
    } else {
        msg = "Obesidade"
    }
    document.getElementById('resposta').innerHTML = `Seu IMC: ${IMC.toFixed(2)} ${msg}`
}