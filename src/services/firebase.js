import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCh1TzHHyQ7aMWQ7Wuhn17rGV1rgzlNkYQ",
    authDomain: "westzone-clone.firebaseapp.com",
    projectId: "westzone-clone",
    storageBucket: "westzone-clone.appspot.com",
    messagingSenderId: "61096554266",
    appId: "1:61096554266:web:897b751529edd16f3206a3",
    measurementId: "G-K1ME1ZBDTN"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, storage };
  export default firebase;