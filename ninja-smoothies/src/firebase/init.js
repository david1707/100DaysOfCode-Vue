import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDgkJ6iMU0UzWRCxqXBi74BNQ28iPhGHMg",
    authDomain: "udemy-vue-firebase.firebaseapp.com",
    databaseURL: "https://udemy-vue-firebase.firebaseio.com",
    projectId: "udemy-vue-firebase",
    storageBucket: "udemy-vue-firebase.appspot.com",
    messagingSenderId: "615748505438"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// Export firestore database
export default firebaseApp.firestore()
