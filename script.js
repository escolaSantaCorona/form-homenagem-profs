document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('sheetdb-form');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Desativar o botão de enviar
        submitButton.disabled = true;

        const professorEscolhido = document.getElementById('comments').value;

        fetch(form.action, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ professor_escolhido: professorEscolhido })
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            form.reset();
        })
        .catch(error => {
            alert('Houve um erro ao enviar o formulário. Tente novamente.');
        })
        .finally(() => {
            // Reativar o botão após a resposta do servidor ou erro
            submitButton.disabled = false;
        });
    });
});
