import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Array<{ id: string; name: string; price: number; image: string }>,
  }),
  actions: {
    async fetchProducts() {
      try {
        // Nuxt plugin üzerinden Firebase Firestore erişimi
        const db = useNuxtApp().$firebaseDB;
        const { collection, getDocs } = await import('firebase/firestore'); // Dinamik import
        const querySnapshot = await getDocs(collection(db, 'products'));

        // Firestore'dan alınan verileri products dizisine aktarıyoruz
        this.products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Array<{ id: string; name: string; price: number; image: string }>;
      } catch (error) {
        console.error('Veriler alınırken hata oluştu:', error);
      }
    },
  },
});
