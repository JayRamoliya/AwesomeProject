// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDcgmweFfxsucLlslC7EQQ_k6zBQWOp4cI",
    authDomain: "stocksapp-28228.firebaseapp.com",
    projectId: "stocksapp-28228",
    storageBucket: "stocksapp-28228.appspot.com",
    messagingSenderId: "284425261807",
    appId: "1:284425261807:web:7820a35dbddf1832ae411a",
    measurementId: "G-3XM9QBYYDV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };