<template>
  <div>
    <!-- Sidebar -->
    <div v-if="isSidebarOpen" class="sidebar" @click.stop>
      <div class="sidebar-content">
        <ul>
          <li>
            <nuxt-link to="/giris-yap" @click="closeSidebar">Giriş Yap</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/uye-ol" @click="closeSidebar">Üye Ol</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/siparis-takip" @click="closeSidebar"
              >Sipariş Takip</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/magazalarimiz" @click="closeSidebar"
              >Mağazalarımız</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/katalog" @click="closeSidebar">Katalog</nuxt-link>
          </li>
          <li>
            <!-- Çıkış Yap -->
            <nuxt-link to="#" @click.prevent="logout">Çıkış Yap</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- Sidebar dışında bir alana tıklanınca kapanması -->
    <div v-if="isSidebarOpen" class="overlay" @click="closeSidebar"></div>
  </div>
</template>

<script>
import { useNuxtApp } from "#app";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default {
  name: "Menu",
  data() {
    return {
      isSidebarOpen: false,
      userEmail: "", // Kullanıcı e-postasını tutacak
    };
  },
  mounted() {
    // Uygulama yüklenince Firebase Auth durumunu dinleyerek e-postayı alıyoruz.
    const { $firebaseAuth } = useNuxtApp();
    onAuthStateChanged($firebaseAuth, (user) => {
      if (user) {
        this.userEmail = user.email; // Oturum varsa e-posta değerini sakla
      } else {
        this.userEmail = "";
      }
    });
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    async logout() {
      try {
        const { $firebaseAuth } = useNuxtApp();
        await signOut($firebaseAuth);

        // Eğer userEmail doluysa, o e-postayı göstereceğiz
        if (this.userEmail) {
          alert(`Kullanıcı '${this.userEmail}' başarıyla çıkış yaptı!`);
        } else {
          alert("Kullanıcı başarıyla çıkış yaptı!");
        }

        // Sidebar'ı kapat
        this.closeSidebar();
      } catch (err) {
        alert("Çıkış yapılırken hata oluştu: " + err.message);
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-top: 20px;
}

.sidebar-content ul {
  list-style: none;
  padding: 0;
}

.sidebar-content li {
  margin: 20px 0;
}

.sidebar-content li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  display: block;
  border: none;
  background: none;
  cursor: pointer;
}

.sidebar-content li a:hover {
  background-color: #f1f1f1;
  color: #ff4081;
}

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
