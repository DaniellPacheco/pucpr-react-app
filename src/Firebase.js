import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// eslint-disable-next-line
const firebaseConfig = {
    apiKey: "AIzaSyAg4uwSG3TQypm6pvqAddH0UekmoSuP3Q8",
    authDomain: "projetoead-70d8a.firebaseapp.com",
    projectId: "projetoead-70d8a",
    storageBucket: "projetoead-70d8a.appspot.com",
    messagingSenderId: "411883385012",
    appId: "1:411883385012:web:c37fb6555edfb7dbfe67e1"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
  