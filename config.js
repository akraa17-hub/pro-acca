// config.js - المحرك المركزي للنظام
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, updateDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDUcQyht2D6vpuUZyCQTxEqtLZf4Feo5aM",
    authDomain: "acca-app-80ca8.firebaseapp.com",
    projectId: "acca-app-80ca8",
    storageBucket: "acca-app-80ca8.firebasestorage.app",
    messagingSenderId: "196121768353",
    appId: "1:196121768353:web:e0623f775bb3f0409e1be0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fs = { collection, addDoc, setDoc, updateDoc, deleteDoc, doc, onSnapshot };
export const authActions = { signInWithEmailAndPassword, signOut, onAuthStateChanged };

// دالة تحميل وتطبيق الإعدادات (الخط والألوان)
export const applySystemSettings = () => {
    const settings = JSON.parse(localStorage.getItem('system_settings')) || {
        primaryColor: '#2563eb', // الأزرق الافتراضي
        fontFamily: "'Readex Pro', sans-serif",
        companyName: "المحاسب القانوني زياد العتيبي"
    };

    // تطبيق الخط
    document.body.style.fontFamily = settings.fontFamily;
    
    // تطبيق اللون الأساسي عبر CSS Variables
    document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
    
    return settings;
};