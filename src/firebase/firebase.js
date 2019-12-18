import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyALP4xl3BrOokj--Jt87af_DfxTWKSo8NA",
    authDomain: "expensify-aellisnola.firebaseapp.com",
    databaseURL: "https://expensify-aellisnola.firebaseio.com",
    projectId: "expensify-aellisnola",
    storageBucket: "expensify-aellisnola.appspot.com",
    messagingSenderId: "1027377572313",
    appId: "1:1027377572313:web:f694a2d182f9b73640d1c8",
    measurementId: "G-LNP56CY7X9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.database().ref().set({
      name: 'Anthony Ellis'
  })