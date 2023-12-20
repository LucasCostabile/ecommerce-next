import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDCkypVDZfSBySUGoCtdDRr4xtMeNALVns",
    authDomain: "ecommerce-next-6cf81.firebaseapp.com",
    projectId: "ecommerce-next-6cf81",
    storageBucket: "ecommerce-next-6cf81.appspot.com",
    messagingSenderId: "510357438487",
    appId: "1:510357438487:web:7705873082f46b1727dc52",
    measurementId: "G-1LDHXB90PB"
};

const APP_FIREBASE = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

export { APP_FIREBASE }