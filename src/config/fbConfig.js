import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyB87o1jU6Fxf8PhhYCfqeMVe_mAmWSxyDU",
authDomain: "react-redux-firebase-app-7964d.firebaseapp.com",
projectId: "react-redux-firebase-app-7964d",
storageBucket: "react-redux-firebase-app-7964d.appspot.com",
messagingSenderId: "110637129916",
appId: "1:110637129916:web:1161d1bbde3f774732f0b9",
measurementId: "G-ET3VP5V73H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampInSnapshots: true});

export default firebase