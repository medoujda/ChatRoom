import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDibC5pptnFmSKHuunbZ66Fwx67FcpczBs",
    authDomain: "chat-room-db2af.firebaseapp.com",
    databaseURL: "https://chat-room-db2af.firebaseio.com",
    projectId: "chat-room-db2af",
    storageBucket: "chat-room-db2af.appspot.com",
    messagingSenderId: "330478451979"
  };
  firebase.initializeApp(config);

export default firebase;