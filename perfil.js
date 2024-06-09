// Função para carregar dados do localStorage
function loadUserProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profileName').innerText = `Nome: ${user.firstName} ${user.lastName}`;
        document.getElementById('profileEmail').innerText = `Email: ${user.email}`;
        if (user.profileImage) {
            const profileImage = document.getElementById('profileImage');
            profileImage.src = user.profileImage;
            profileImage.style.display = 'block';
        }
    }
}

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('profilePicture');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const user = JSON.parse(localStorage.getItem('user'));
            user.profileImage = e.target.result;
            localStorage.setItem('user', JSON.stringify(user));
            alert('Foto de perfil salva com sucesso!');
            loadUserProfile();
        };
        reader.readAsDataURL(file);
    }
});

// Carregar dados do usuário ao carregar a página
window.onload = loadUserProfile;
