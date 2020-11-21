import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBaW3L-k4T6SsVybV_GR9hCXxzykOjhKzU",
  authDomain: "simonsays-db.firebaseapp.com",
  databaseURL: "https://simonsays-db.firebaseio.com",
  projectId: "simonsays-db",
  storageBucket: "simonsays-db.appspot.com",
  messagingSenderId: "121005814078",
  appId: "1:121005814078:web:9632b47659f7626945fc6f"
};

firebase.initializeApp(firebaseConfig);

export var database = firebase.database();