// Rename this file to 'init.js' and your collection keys

import firebase from 'firebase';

var config = {
    apiKey: "<youKeyHere>",
    authDomain: "<youKeyHere>",
    databaseURL: "<youKeyHere>",
    projectId: "<youKeyHere>",
    storageBucket: "<youKeyHere>",
    messagingSenderId: "<youKeyHere>"
  };
firebase.initializeApp(config);