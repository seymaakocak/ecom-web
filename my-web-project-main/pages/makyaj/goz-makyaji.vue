<template>
  <div class="goz-makyaji">
    <!-- Ürün Listesi -->
    <div class="product-list">
      <div
        v-for="(product, index) in productStore.products"
        :key="index"
        class="product"
      >
        <img :src="product.image" :alt="product.name" />
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }} ₺</p>

          <!-- Favori ve Sepet Butonları -->
          <div class="button-container">
            <button class="favorite-btn" @click="addFavorite(product)">
              Favorilere Ekle
            </button>
            <button class="cart-btn" @click="addToCart(product)">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/products'; // Pinia store'u import ediyoruz
import { useCartStore } from '~/stores/cart'; // Sepet için store'u import ediyoruz

const productStore = useProductStore(); // Ürünleri yönetmek için store
const cartStore = useCartStore(); // Sepet işlemleri için store

// Ürünleri bileşen yüklendiğinde alıyoruz
onMounted(async () => {
  await productStore.fetchProducts();
});

// Favorilere ekleme işlemi
const addFavorite = (product: { id: string; name: string; price: number; image: string }) => {
  alert(`${product.name} favorilere eklendi!`);
  // Burada "favorites" koleksiyonuna veri eklenebilir
};

// Sepete ekleme işlemi
const addToCart = async (product: { id: string; name: string; price: number; image: string }) => {
  await cartStore.addToCart(product);
};
</script>

<style scoped>
.goz-makyaji {
  font-family: Arial, sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}
.product {
  width: 250px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-info {
  padding: 10px;
}
.product-info h3 {
  font-size: 1.1rem;
  color: #333;
}
.price {
  font-size: 1.2rem;
  color: #e91e63;
  font-weight: bold;
  margin-top: 10px;
}
.button-container {
  margin-top: 10px;
}
.favorite-btn,
.cart-btn {
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}
.favorite-btn:hover,
.cart-btn:hover {
  background-color: #d81b60;
}
</style>
