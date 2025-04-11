// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDv8zijZhIP3ceuGEyGI2RA4OSnh9iXqHc",
  authDomain: "rybki-party.firebaseapp.com",
  projectId: "rybki-party",
  storageBucket: "rybki-party.firebasestorage.app",
  messagingSenderId: "985551857623",
  appId: "1:985551857623:web:5b66f04f0708c3feca0d92",
  measurementId: "G-G8KF8YWEP0"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Ustawienia Firebase Auth
const provider = new firebase.auth.GoogleAuthProvider();

// Zalogowanie użytkownika
function signIn() {
  auth.signInWithPopup(provider).then((result) => {
    console.log("Zalogowano: ", result.user);
    window.location.reload();
  }).catch((error) => {
    console.log("Błąd logowania: ", error);
  });
}

// Wylogowanie użytkownika
function signOut() {
  auth.signOut().then(() => {
    window.location.reload();
  });
}

// Sprawdzenie, czy użytkownik jest zalogowany
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Zalogowano: ", user);
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'block';
  } else {
    document.getElementById('login').style.display = 'block';
    document.getElementById('logout').style.display = 'none';
  }
});
