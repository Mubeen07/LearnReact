import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDDp_ybuLVWJITUp9m4wZJvOZMClDHQSq4",
    authDomain: "react-auth-32a92.firebaseapp.com",
    databaseURL: "https://react-auth-32a92.firebaseio.com",
    projectId: "react-auth-32a92",
    storageBucket: "react-auth-32a92.appspot.com",
    messagingSenderId: "673760966513",
    appId: "1:673760966513:web:87808992f5b165a8cea8d0",
    measurementId: "G-JHB4XCJ5HE"
};

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export function signInWithGoogle() {
    auth.signInWithPopup(provider)

}