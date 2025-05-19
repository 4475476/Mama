function calcularSalario() {
    Credito = 0;
    Sm = parseFloat(document.getElementById('Sm').value);
    if (Sm <= 1300) {
        Credito = (Sm * 0.2);
    } else if (Sm > 1300 && Sm <= 3000) {
        Credito = (Sm * 0.3);
    } else if (Sm > 3000 && Sm <= 8000) {
        Credito = (Sm * 0.45);
    } else if (Sm > 8000 && Sm <= 10000) {
        Credito = Sm * 0.5;
    } else {
        Credito = Sm * 0.6
    }
    document.getElementById('resposta').innerHTML = `Credito de R$${Credito}`;
}