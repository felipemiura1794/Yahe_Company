document.addEventListener('DOMContentLoaded', function() {
    // Obter os dados do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        // Exibir mensagem de boas-vindas
        const welcomeMessage = `Olá, ${user.firstName} ${user.lastName}! Seja bem-vindo.`;
        document.getElementById('welcomeMessage').textContent = welcomeMessage;
    } else {
        // Redirecionar para a página de cadastro se não houver usuário
        window.location.href = 'html1.html';
    }
});
