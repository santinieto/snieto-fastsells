import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiSqaAd5gsFDhUh5D6TWZipf7w86A-__o",
    authDomain: "fastsells-ea4c0.firebaseapp.com",
    projectId: "fastsells-ea4c0",
    storageBucket: "fastsells-ea4c0.firebasestorage.app",
    messagingSenderId: "108777766831",
    appId: "1:108777766831:web:1ad4ccf921cbe451a5795a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)