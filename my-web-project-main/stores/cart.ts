import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';

export const useCartStore = defineStore('cart', {
  actions: {
    async addToCart(product: { id: string; name: string; price: number; image: string }) {
      try {
        // Firebase servislerini Nuxt plugin üzerinden alıyoruz
        const { $firebaseAuth, $firebaseDB } = useNuxtApp();

        // Kullanıcı oturum bilgisi kontrolü
        const user = $firebaseAuth.currentUser;
        if (!user) {
          alert('Lütfen giriş yapın!');
          return;
        }

        // Firestore'daki "cart" koleksiyonuna ürün ekleme
        const { collection, addDoc } = await import('firebase/firestore');
        await addDoc(collection($firebaseDB, 'users', user.uid, 'cart'), {
          name: product.name,
          price: product.price,
          imageUrl: product.image,
          quantity: 1,
        });

        alert(`${product.name} sepete eklendi!`);
      } catch (err) {
        console.error('Sepete eklenirken hata:', err);
        alert('Ürün sepete eklenemedi.');
      }
    },
  },
});
