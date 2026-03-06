import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';
import { getAnalytics, isSupported } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js';

const firebaseConfig = {
    apiKey: 'AIzaSyCwQa1S2yxx0a7B1dShG3pbeODGr0QFMqw',
    authDomain: 'rcs-9dafc.firebaseapp.com',
    projectId: 'rcs-9dafc',
    storageBucket: 'rcs-9dafc.firebasestorage.app',
    messagingSenderId: '508718502156',
    appId: '1:508718502156:web:16e871622fe6f1bceeb929',
    measurementId: 'G-DM10WHWD6T'
};

const app = initializeApp(firebaseConfig);
window.firebaseApp = app;

isSupported()
    .then((supported) => {
        if (supported) {
            window.firebaseAnalytics = getAnalytics(app);
        }
    })
    .catch((error) => {
        console.warn('Firebase Analytics unavailable:', error);
    });
