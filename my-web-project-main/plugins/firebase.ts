import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin((_nuxtApp) => {
  // Firebase yapılandırması
  const firebaseConfig = {
    apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
    authDomain: "my-web-project2025.firebaseapp.com",
    projectId: "my-web-project2025",
    storageBucket: "my-web-project2025.firebasestorage.app",
    messagingSenderId: "351407598944",
    appId: "1:351407598944:web:fec994457bc35dcb2a8205",
    measurementId: "G-RENZF83JTP",
  };

  // Firebase’i başlat
  const app = initializeApp(firebaseConfig);

  // Authentication ve Firestore referansları
  const auth = getAuth(app);
  const db = getFirestore(app);

  // (İsteğe bağlı) Analytics servisi
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }

  // Firebase servislerini provide ile Nuxt’a dahil et
  return {
    provide: {
      firebaseApp: app,
      firebaseAuth: auth,
      firebaseDB: db,
    },
  };
});
