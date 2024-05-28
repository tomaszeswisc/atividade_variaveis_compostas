let contador = 0;

document.getElementById('botao-cliques').addEventListener('click', function() {
    contador++;
    document.getElementById('contador-cliques').innerText = `Cliques: ${contador}`;
});
