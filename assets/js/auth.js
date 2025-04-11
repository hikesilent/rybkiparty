document.addEventListener('DOMContentLoaded', function() {
  // Obsługa przycisków
  document.querySelector('.login-btn')?.addEventListener('click', signInWithGitHub);
  document.querySelector('.logout-btn')?.addEventListener('click', signOut);

  // Monitorowanie stanu autentykacji
  firebase.auth().onAuthStateChanged((user) => {
    const loginBtn = document.querySelector('.login-btn');
    const logoutBtn = document.querySelector('.logout-btn');
    const adminBtn = document.querySelector('.admin-btn');

    if (user) {
      // Użytkownik zalogowany
      loginBtn?.classList.add('hidden');
      logoutBtn?.classList.remove('hidden');
      
      // Sprawdź uprawnienia admina
      user.getIdTokenResult().then((idTokenResult) => {
        if (idTokenResult.claims.admin) {
          adminBtn?.classList.remove('hidden');
        }
      });
    } else {
      // Użytkownik wylogowany
      loginBtn?.classList.remove('hidden');
      logoutBtn?.classList.add('hidden');
      adminBtn?.classList.add('hidden');
    }
  });
});