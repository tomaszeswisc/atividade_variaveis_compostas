document.getElementById('gerar-numero').addEventListener('click', function() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    document.getElementById('numero-gerado').innerText = `Número Gerado: ${numeroAleatorio}`;
});
