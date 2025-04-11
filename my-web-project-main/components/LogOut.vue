<template>
    <div>
      <!-- Sadece tek bir buton: "Çıkış Yap" -->
      <button @click="logout">Çıkış Yap</button>
    </div>
  </template>
  
  <script>
  import { signOut } from 'firebase/auth'
  import { useNuxtApp } from '#app'
  
  export default {
    name: 'LogoutButton',
    methods: {
      async logout() {
        try {
          const { $firebaseAuth } = useNuxtApp(); // Plugin'den auth nesnesine eriş
          await signOut($firebaseAuth);
          alert("Çıkış yapıldı!");
  
          // Oturum kapandıktan sonra giriş sayfasına yönlendirebilirsin:
          this.$router.push('/giris-yap');
        } catch (err) {
          alert("Çıkış yapılırken hata oluştu: " + err.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* İsteğe bağlı basit stil */
  button {
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #444;
  }
  </style>
  