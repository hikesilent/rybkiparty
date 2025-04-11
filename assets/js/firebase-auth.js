document.addEventListener('DOMContentLoaded', function() {
  // Przyciski w UI
  const loginBtn = document.querySelector('.login-btn');
  const logoutBtn = document.querySelector('.logout-btn');
  const adminBtn = document.querySelector('.admin-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', signInWithGitHub);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', signOut);
  }

  if (adminBtn) {
    adminBtn.addEventListener('click', function() {
      window.location.href = '/admin';
    });
  }

  // Sprawdź stan logowania przy załadowaniu strony
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Sprawdź, czy użytkownik ma dostęp do admina
      user.getIdTokenResult().then((idTokenResult) => {
        if (idTokenResult.claims.admin) {
          adminBtn.style.display = 'block';
        } else {
          adminBtn.style.display = 'none';
        }
      });
    }
  });
});