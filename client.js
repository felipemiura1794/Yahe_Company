// Inicialize o Google One Tap
google.accounts.id.initialize({
    client_id: 'SEU_ID_DE_CLIENTE_OAUTH',
    callback: handleCredentialResponse
  });
  // Manipula a resposta de credenciais
  function handleCredentialResponse(response) {
    if (response.credential) {
      // As credenciais do usuário estão disponíveis em response.credential
      console.log('Credenciais do usuário:', response.credential);
    } else {
      // O usuário não fez login
      console.log('O usuário não fez login.');
    }
  }
  // Adicione um ouvinte de eventos ao botão de login
  document.getElementById('login-button').addEventListener('click', function() {
    // Solicite as credenciais do usuário
    google.accounts.id.prompt(notification => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // O usuário não visualizou ou pulou a notificação
        console.log('O usuário não visualizou ou pulou a notificação.');
      } else {
        // A notificação foi exibida e o usuário interagiu com ela
        console.log('O usuário interagiu com a notificação.');
      }
    });
  });