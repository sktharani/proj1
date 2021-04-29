import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0-owHo0b4ooo6QEU4RYEFiZiH-rtHr4o",
  authDomain: "chat-app-a2c8e.firebaseapp.com",
  projectId: "chat-app-a2c8e",
  storageBucket: "chat-app-a2c8e.appspot.com",
  messagingSenderId: "76304976812",
  appId: "1:76304976812:web:d70481351c8cdfde1a4809"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db