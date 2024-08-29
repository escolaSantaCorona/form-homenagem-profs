document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('sheetdb-form');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // Desativar o botão de enviar
        submitButton.disabled = true;

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(data => {
            alert('FORMULÁRIO ENVIADO COM SUCESSO!!!');
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
