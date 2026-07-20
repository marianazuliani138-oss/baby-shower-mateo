// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyBgvV1oNDdgJ3ow-sRwq0gYCiErHE3WgBQ",
  authDomain: "baby-shower-f495e.firebaseapp.com",
  projectId: "baby-shower-f495e",
  storageBucket: "baby-shower-f495e.firebasestorage.app",
  messagingSenderId: "1012751100438",
  appId: "1:1012751100438:web:833f6ef05f85e99b53e337"
};

// Inicializar
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
};