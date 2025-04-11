<template>
    <div class="carousel-container">
      <!-- Sol ok -->
      <button class="carousel-btn left" @click="moveCarousel(-1)">&#8249;</button>
  
      <!-- Kaydırılabilir ürün listesi -->
      <div class="carousel" ref="carouselRef">
        <div v-for="(item, index) in items" :key="index" class="carousel-item">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
  
      <!-- Sağ ok -->
      <button class="carousel-btn right" @click="moveCarousel(1)">&#8250;</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Ürün verileri
  const items = ref([
    { image: "/images/hair.png", title: 'Saç Bakım' },
    { image: "/images/maskara.png", title: 'Maskaralar' },
    { image: "/images/deodorant.png", title: 'Deodorant' },
    { image: "/images/makeup.png", title: 'Fondöten & Kapatıcı' },
    { image: "/images/ruj.png", title: 'Rujlar' },
    { image: "/images/far.png", title: 'Göz Farı' },
    { image: "/images/krem.png", title: 'Kremler' },
    { image: "/images/parfume.png", title: 'Parfümler' },
  ]);
  
  // Carousel referansı
  const carouselRef = ref<HTMLElement | null>(null);
  const currentIndex = ref(0);
  
  // Kaydırma işlevi
  const moveCarousel = (direction: number) => {
    if (!carouselRef.value) return;
  
    const itemWidth = carouselRef.value.children[0].clientWidth + 20; // Öğe genişliği + boşluk
    const visibleItems = 4; // Aynı anda görünen öğe sayısı
    const totalItems = items.value.length;
  
    currentIndex.value = Math.min(
      Math.max(currentIndex.value + direction, 0),
      totalItems - visibleItems
    );
  
    // Kaydırma işlemi
    carouselRef.value.style.transform = `translateX(-${currentIndex.value * itemWidth}px)`;
  };
  </script>
  
  <style scoped>
  .carousel-container {
    max-width: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 40px;
    padding: 20px 0;
    background-color: #f8f9fa;
    border-top: 2px solid #ddd;
  }
  
  .carousel {
    display: flex;
    gap: 20px;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 220px;
    text-align: center;
    flex-shrink: 0;
  }
  
  .carousel-item img {
  width: 100%;  /* Resmin genişliğini tamamen kapsayacak şekilde */
  height: 300px;  /* Yüksekliği belirleyebilirsiniz */
  object-fit: cover;  /* Resmin kutuya tam oturmasını sağlar */
  margin-bottom: 10px;
  border-radius: 50%; /* Yuvarlak resim için */
  border: 3px solid #e0e0e0;
}
  
  .carousel-item p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .carousel-btn.left {
    left: 30px;
  }
  
  .carousel-btn.right {
    right: 10px;
  }
  </style>
  