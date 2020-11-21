import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyDjfhXgMSFxMEbmtrCsDusR85cyyhn5_84",
    authDomain: "ig-backend.firebaseapp.com",
    databaseURL: "https://ig-backend.firebaseio.com",
    projectId: "ig-backend",
    storageBucket: "ig-backend.appspot.com",
    messagingSenderId: "129725281200",
    appId: "1:129725281200:web:78f5562af86281814c1c75"
  };

firebase.initializeApp(firebaseConfig);

export var database = firebase.database();