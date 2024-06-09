document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('suggestion-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.email.value;
        const subject = form.subject.value;

        if (email && subject) {
            alert('Sugestão enviada com sucesso! Obrigado por sua contribuição.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
