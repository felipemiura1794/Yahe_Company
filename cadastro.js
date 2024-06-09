document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação da senha mínima de 6 caracteres
    if (password.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres.');
        return;
    }

    // Validação da confirmação de senha
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    // Armazenar os dados no localStorage
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Cadastro realizado com sucesso!');

    // Mostrar a área do perfil
    showProfile(user);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Obter os dados do usuário do localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login realizado com sucesso!');
        showProfile(user);
    } else {
        alert('Email ou senha incorretos.');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    // Remover os dados do usuário do localStorage
    localStorage.removeItem('user');

    // Esconder a área do perfil e mostrar a área de autenticação
    document.getElementById('profileContainer').style.display = 'none';
    document.getElementById('authContainer').style.display = 'block';
});

function showProfile(user) {
    document.getElementById('profileName').innerText = `Nome: ${user.firstName} ${user.lastName}`;
    document.getElementById('profileEmail').innerText = `Email: ${user.email}`;
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('profileContainer').style.display = 'block';
}

// Verificar se há um usuário logado ao carregar a página
window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        showProfile(user);
    }
};
