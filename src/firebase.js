import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDbqWZwx61URpU4AMw1e78c1oT8OO-2360",
  authDomain: "clone-d7f2d.firebaseapp.com",
  projectId: "clone-d7f2d",
  storageBucket: "clone-d7f2d.appspot.com",
  messagingSenderId: "801434470446",
  appId: "1:801434470446:web:16d9ad5683fe4921dcb7bf",
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
