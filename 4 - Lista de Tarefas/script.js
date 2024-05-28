document.getElementById('form-tarefa').addEventListener('submit', function(event) {
    event.preventDefault();
    let novaTarefa = document.getElementById('nova-tarefa').value;
    if (novaTarefa.trim() !== '') {
        adicionarTarefa(novaTarefa);
        document.getElementById('nova-tarefa').value = '';
    }
});

function adicionarTarefa(tarefa) {
    let listaTarefas = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.textContent = tarefa;
    li.addEventListener('click', function() {
        li.classList.toggle('concluida');
    });
    listaTarefas.appendChild(li);
}
