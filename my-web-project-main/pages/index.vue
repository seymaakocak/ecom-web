<template>
  
  <div class="page">
     <!-- Sekmeler -->
    <div class="tabs">
      <span
        @click="activeTab = 'populer'"
        :class="{ active: activeTab === 'populer' }"
        class="tab"
      >
        En Popüler
      </span>
      <span
        @click="activeTab = 'yeniler'"
        :class="{ active: activeTab === 'yeniler' }"
        class="tab"
      >
        En Yeniler
      </span>
      <span
        @click="activeTab = 'coksatanlar'"
        :class="{ active: activeTab === 'coksatanlar' }"
        class="tab"
      >
        En Çok Satanlar
      </span>
    </div>

    <!-- İçerikler -->
    <div v-if="activeTab === 'populer'" class="tab-content">
      <h2>En Popüler Ürünler</h2>
      <div class="product-list">
        <div v-for="product in popularProducts" :key="product.id" class="product-card">
          <img :src="product.imgSrc" alt="Popüler Ürün" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }} ₺</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'yeniler'" class="tab-content">
      <h2>En Yeniler</h2>
      <div class="product-list">
        <div v-for="product in newProducts" :key="product.id" class="product-card">
          <img :src="product.imgSrc" alt="Yeni Ürün" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }} ₺</p>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'coksatanlar'" class="tab-content">
      <h2>En Çok Satanlar</h2>
      <div class="product-list">
        <div v-for="product in bestSellers" :key="product.id" class="product-card">
          <img :src="product.imgSrc" alt="Çok Satan Ürün" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }} ₺</p>
        </div>
      </div>
    </div>

    <!-- Diğer Bileşenler -->
    <ScrollableRectangle :items="rectangleItems" />
    <ProductSlider :items="sliderItems" />
    <Carousel />
    <Chatbox />

    <!-- Blog Sekmesi -->
    <div class="blog-section">
      <h2>Popüler Blog Yazıları</h2>
      <div class="blog-list">
        <div v-for="post in blogPosts" :key="post.slug" class="blog-card">
          <nuxt-link :to="`/blog/${post.slug}`">
            <img :src="post.imgSrc" alt="Blog Resmi" class="blog-image" />
            <div class="blog-info">
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <Footer />
    <Snowfall />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ScrollableRectangle from '~/components/ScrollableRectangle.vue';
import ProductSlider from '~/components/ProductSlider.vue';
import Carousel from '~/components/Carousel.vue';
import Chatbox from '~/components/ChatBox.vue';
import Snowfall from '~/components/Snowfall.vue';

const activeTab = ref('populer');
const rectangleItems = [
  {
    imgSrc: "/images/populer3.png",  // Resim yolu
  },
  {
    imgSrc: "/images/fondöten.jpg",  // Resim yolu
  },
  {
    imgSrc: "/images/yeni1.png",  // Resim yolu
  },
  {
    imgSrc: "/images/coksatan2.png",  // Resim yolu
  },
  {
    imgSrc: "/images/populer2.png",  // Resim yolu
  },
  {
    imgSrc: "/images/coksatan4.png",  // Resim yolu
  },
  {
    imgSrc: "/images/coksatan3.png",  // Resim yolu
  },
  {
    imgSrc: "/images/yeni3.png",  // Resim yolu
  },
  {
    imgSrc: "/images/coksatan5.png",  // Resim yolu
  },
  {
    imgSrc: "/images/yeni4.png",  // Resim yolu
  }
  // Diğer öğeleri buraya ekleyebilirsiniz...
];


const sliderItems = [
  {
    imgSrc: "/images/slider1.png",  // Slider resim yolu
  
  },
  {
    imgSrc: "/images/slider2.png",  // Slider resim yolu

  },
  {
    imgSrc: "/images/slider3.png",  // Slider resim yolu
   
  },
  {
    imgSrc: "/images/slider4.png",  // Slider resim yolu
   
  },
  {
    imgSrc: "/images/slider5.png",  // Slider resim yolu
   
  }
];

const popularProducts = [
  { id: 1, name: 'Beauty Girl Likit Allık', price: 150, imgSrc: '/images/populer1.png' },
  { id: 2, name: 'Maruderm Balm', price: 200, imgSrc: '/images/populer2.png' },
  { id: 3, name: 'Milk Therapy', price: 180, imgSrc: '/images/populer3.png' },
  { id: 4, name: 'High Sky Maskara', price: 130, imgSrc: '/images/populer4.png' },
  { id: 5, name: 'Dalin Kolonya', price: 210, imgSrc: '/images/populer5.png' },
];

const newProducts = [
  { id: 6, name: 'Balmy Banyo Lifi', price: 120, imgSrc: '/images/yeni1.png' },
  { id: 7, name: 'Beauty House Sıvı Sabun', price: 180, imgSrc: '/images/yeni2.png' },
  { id: 8, name: 'Beauty Girl Aseton', price: 160, imgSrc: '/images/yeni3.png' },
  { id: 9, name: 'Siveno Rollon', price: 190, imgSrc: '/images/yeni4.png' },
  { id: 10, name: 'Dalin Vazelin', price: 210, imgSrc: '/images/yeni5.png' },
];

const bestSellers = [
  { id: 11, name: 'Glotion Highliter', price: 170, imgSrc: '/images/coksatan1.png' },
  { id: 12, name: 'Rexona Deodorant', price: 210, imgSrc: '/images/coksatan2.png' },
  { id: 13, name: 'Kalyon Nail Oil', price: 200, imgSrc: '/images/coksatan3.png' },
  { id: 14, name: 'Fırça Seti', price: 160, imgSrc: '/images/coksatan4.png' },
  { id: 15, name: 'Flormar Oje', price: 220, imgSrc: '/images/coksatan5.png' },
];

const blogPosts = [
  {
    title: 'Cilt Tipine Göre Doğru Nemlendirici Seçimi',
    slug: 'cilt-tipine-gore-dogru-nemlendirici-secimi',
    imgSrc: '/images/blog2.png',
    excerpt: 'Cilt tipine göre doğru nemlendirici seçmek çok önemlidir...',
  },
  {
    title: 'Saç Dökülmesini Azaltan Besinler',
    slug: 'sac-dokulmesini-azaltan-besinler',
    imgSrc: '/images/blog1.png',
    excerpt: 'Saç dökülmesini azaltmak için doğru besinleri almak çok önemlidir...',
  },
  {
    title: 'Yaz İçin Pratik Cilt Bakım İpuçları',
    slug: 'yaz-icin-pratik-cilt-bakim-ipuclari',
    imgSrc: '/images/blog3.jpg',
    excerpt: 'Yaz aylarında cilt bakımında dikkat edilmesi gereken püf noktalar...',
  },
];
</script>

<style scoped>
.page {
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 10px;
}

h1 {
  font-size: 40px;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tab {
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 30px;
}

.tab.active {
  font-weight: bold;
  color: #d14b88;
  border-bottom: 2px solid #d14b88;
}

.tab-content {
  margin-top: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: 18%; /* 5 kart için %20'lik alan */
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  height: 250px; /* Yükseklik artırıldı */
  object-fit: cover;
  border-radius: 8px; /* Kart köşelerine yuvarlaklık eklenmiş */
}

.product-card p {
  font-size: 14px;
  margin-top: 10px;
}

/* Blog sekmesi stilleri */
.blog-section {
  margin-top: 40px;
  text-align: center;
}

.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.blog-card {
  width: 30%;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-info {
  padding: 15px;
  text-align: left;
}

.blog-info h3 {
  font-size: 18px;
  margin: 10px 0;
}

.blog-info p {
  font-size: 14px;
  color: #777;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
