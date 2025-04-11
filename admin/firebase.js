// firebase.js

// Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDv8zijZhIP3ceuGEyGI2RA4OSnh9iXqHc",
  authDomain: "rybki-party.firebaseapp.com",
  projectId: "rybki-party",
  storageBucket: "rybki-party.firebasestorage.app",
  messagingSenderId: "985551857623",
  appId: "1:985551857623:web:5b66f04f0708c3feca0d92",
  measurementId: "G-G8KF8YWEP0"
};

// Inicjalizacja Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Konfiguracja Firebase Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

// Funkcja logowania
function signIn() {
  auth.signInWithPopup(provider)
    .then((result) => {
      // Sukces logowania
      console.log("Zalogowano: ", result.user);
      // Przekierowanie po zalogowaniu
      window.location.reload();
    })
    .catch((error) => {
      // Obsługa błędów logowania
      console.error("Błąd logowania: ", error.message);
    });
}

// Funkcja wylogowania
function signOut() {
  auth.signOut()
    .then(() => {
      // Po wylogowaniu
      console.log("Zostałeś wylogowany");
      // Przekierowanie po wylogowaniu
      window.location.reload();
    })
    .catch((error) => {
      // Obsługa błędów wylogowania
      console.error("Błąd wylogowania: ", error.message);
    });
}

// Funkcja sprawdzająca stan użytkownika
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Zalogowano: ", user);
    // Ukryj przycisk logowania i pokaż przycisk wylogowania
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
    // Tutaj można dodać kod, który pozwala na zainicjowanie Decap CMS
    DecapCMS.init({
      config: "/admin/config.yml",
      backend: {
        name: "github",
        repo: "hikesilent/rybkiparty",
        branch: "main",
        auth: {
          token: user.getIdToken() // Użyj tokenu użytkownika do autentykacji na backendzie
        }
      }
    });
  } else {
    console.log("Nie zalogowano");
    // Pokazanie przycisku logowania, gdy użytkownik nie jest zalogowany
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
  }
});
