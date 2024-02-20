//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDWp-MJTdkJHiYO5oGnEVemtMoB1zbbWSU",
    authDomain: "comp1800-202410-demo-93a3e.firebaseapp.com",
    projectId: "comp1800-202410-demo-93a3e",
    storageBucket: "comp1800-202410-demo-93a3e.appspot.com",
    messagingSenderId: "148945323527",
    appId: "1:148945323527:web:c67c47dcbffe554dd44ca2"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
