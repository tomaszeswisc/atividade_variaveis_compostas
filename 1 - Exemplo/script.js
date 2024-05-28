document.getElementById('mostrar-variaveis').addEventListener('click', function() {
    
    // Variáveis Simples
    let idade = 25;
    let nome = "Ana";
    let casado = true;

    document.getElementById('variavel-simples').innerText = `Simples: Nome: ${nome}, Idade: ${idade}, Casado: ${casado}`;

    // Variáveis Compostas
    let frutas = ["maçã", "banana", "laranja"];
    let pessoa = {
        nome: "Carlos",
        idade: 30,
        casado: false
    };

    document.getElementById('variavel-composta').innerText = `Compostas: Frutas: ${frutas.join(', ')}, Pessoa: Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Casado: ${pessoa.casado}`;

    // Variáveis de Variáveis
    let a = 10;
    let b = 20;
    let c = 30;

    let variaveis = [a, b, c];
    let chave = "dinamica";
    let objetoDinamico = {
        dinamica: "Este é um valor dinâmico"
    };

    document.getElementById('variavel-de-variaveis').innerText = `Variáveis de Variáveis: Array: ${variaveis.join(', ')}, Objeto Dinâmico: ${objetoDinamico[chave]}`;
});
