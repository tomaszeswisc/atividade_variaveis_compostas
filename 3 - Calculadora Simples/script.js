function calcular(operador) {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    switch (operador) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        default:
            resultado = "Operação inválida";
            break;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
