<template>
  <div>
    <!-- Sepet Sidebar -->
    <div v-if="isSidebarOpen" class="sidebar" @click.stop>
      <div class="sidebar-content">

        <!-- Kullanıcı girişi yoksa -->
        <div v-if="!currentUser">
          <h2>Lütfen giriş yapın.</h2>
          <p>Kullanıcı girişi olmadan sepete ürün eklenemez.</p>
          <div
            v-for="(cat, idx) in categories"
            :key="idx"
            class="category-item"
          >
            <button class="category-button">{{ cat }}</button>
          </div>
        </div>

        <!-- Kullanıcı varsa -->
        <div v-else>
          <!-- Sepet boş mu? -->
          <div v-if="cartItems.length === 0">
            <h2>Sepetiniz Şu An Boş.</h2>
            <div
              v-for="(cat, idx) in categories"
              :key="idx"
              class="category-item"
            >
              <button class="category-button">{{ cat }}</button>
            </div>
          </div>
          <!-- Sepet doluysa ürünleri göster -->
          <div v-else>
            <h2>Sepet</h2>
            <div
              v-for="(item, index) in cartItems"
              :key="item.id"
              class="cart-item"
            >
              <img
                v-if="item.imageUrl"
                :src="item.imageUrl"
                alt="Ürün resmi"
                class="cart-item-image"
              />
              <div class="cart-item-info">
                <p>{{ item.name }}</p>
                <p>{{ item.price }} TL</p>
                <!-- Silme -->
                <button @click="removeFromCart(item.id)">Sil</button>
              </div>
            </div>

            <!-- Toplam Fiyat -->
            <div class="cart-total">
              Toplam: {{ totalPrice }} TL
            </div>
            <button class="checkout-button">Siparişi Tamamla</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Sidebar dışında bir alana tıklayınca kapanması için overlay -->
    <div
      v-if="isSidebarOpen"
      class="overlay"
      @click="closeSidebar"
    ></div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Aynı Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyB4YFG3e1n81PmYHGcVE6cnjaM4Hfzcmvo",
  authDomain: "my-web-project2025.firebaseapp.com",
  projectId: "my-web-project2025",
  storageBucket: "my-web-project2025.firebasestorage.app",
  messagingSenderId: "351407598944",
  appId: "1:351407598944:web:fec994457bc35dcb2a8205",
  measurementId: "G-RENZF83JTP"
}

// Tekrar aynı app, db, auth
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export default {
  data() {
    return {
      isSidebarOpen: false,
      categories: [
        "Makyaj",
        "Cilt Bakım",
        "Saç Bakım",
        "Parfüm & Deodorant",
        "Kişisel Bakım",
        "Erkek Bakım",
        "Anne & Bebek",
        "Ev & Yaşam",
        "Kampanyalar"
      ],
      cartItems: [],
      currentUser: null,
      unsubscribeCart: null,
      errorMessage: ''
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + (item.price || 0), 0)
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    },
    watchCartRealtime() {
      // Daha önce abone olduysak iptal
      if (this.unsubscribeCart) {
        this.unsubscribeCart()
      }

      const cartRef = collection(db, 'users', this.currentUser.uid, 'cart')

      this.unsubscribeCart = onSnapshot(
        cartRef,
        (snapshot) => {
          const temp = []
          snapshot.forEach((docSnap) => {
            temp.push({ id: docSnap.id, ...docSnap.data() })
          })
          this.cartItems = temp
        },
        (err) => {
          this.errorMessage = err.message || 'Sepeti dinlerken hata oluştu.'
        }
      )
    },
    async removeFromCart(itemId) {
      if (!this.currentUser) {
        alert('Giriş yapmadınız.')
        return
      }
      try {
        await deleteDoc(doc(db, 'users', this.currentUser.uid, 'cart', itemId))
      } catch (err) {
        alert('Ürün silinirken hata: ' + err.message)
      }
    }
  },
  mounted() {
    // Kullanıcı giriş durumunu dinliyoruz
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user
      if (user) {
        this.watchCartRealtime()
      } else {
        this.cartItems = []
        if (this.unsubscribeCart) {
          this.unsubscribeCart()
          this.unsubscribeCart = null
        }
      }
    })
  },
  beforeUnmount() {
    if (this.unsubscribeCart) {
      this.unsubscribeCart()
      this.unsubscribeCart = null
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-top: 20px;
  transition: transform 0.3s ease-in-out;
}
.sidebar-content {
  padding: 20px;
}
.sidebar-content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.category-item {
  margin-bottom: 15px;
}
.category-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  width: 250px;
  text-align: left;
  display: block;
  margin: 0 auto;
}
.category-button:hover {
  background-color: #f2f2f2;
  border-color: #d14b88;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.cart-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}
.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.cart-item-info p {
  margin: 0;
}
.cart-total {
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
}
.checkout-button {
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
