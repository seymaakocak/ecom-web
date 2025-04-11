<script>
import Header from '~/components/Header.vue';  // Header bileşenini import ediyoruz
import Menu from '@/components/Menu.vue';      // Menu bileşenini import ediyoruz
import Footer from '@/components/Footer.vue';

  // Footer bileşenini import ediyoruz

export default {
  components: {
    Header,
    Menu,
    Footer,
     // Footer bileşeni
  },
};
</script>

<template>
  <div class="page-container">
    <!-- Header -->
    <header>
      <Header />
    </header>
    
    <!-- Menü veya Sidebar -->
    <Menu />

    <!-- Ana İçerik -->
    <main class="main-content">
      <Nuxt />
    </main>

    <!-- Footer -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
/* Ana İçeriğin Layout Düzenlemesi */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header'ın Sticky olması için */
header {
  position: sticky;
  top: 0; /* Ekranın üst kısmına sabitlenir */
  z-index: 1000; /* Header'ı diğer içeriklerin üstünde tutar */
  background-color: rgb(255, 255, 255);
}

/* Main Content alanının, sidebar ile uyumlu olması için */
.main-content {
  margin-left: 250px; /* Sidebar genişliği kadar bir boşluk bırak */
  padding: 20px;
}

/* Footer'a genel bir düzenleme eklenebilir */

</style>
