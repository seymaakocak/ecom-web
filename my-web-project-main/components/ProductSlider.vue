<template>
    <div class="product-slider">
      <div
        class="slider-container"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(item, index) in items" :key="index" class="slider-item">
          <img :src="item.imgSrc" :alt="item.alt" />
        </div>
      </div>
      <!-- Kaydırma Butonları -->
      <button @click="prevSlide" class="prev-button">‹</button>
      <button @click="nextSlide" class="next-button">›</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 'items' props'u dışarıdan geçilecek
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  });
  
  const currentIndex = ref(0);
  
  // Kaydırma fonksiyonları
  const nextSlide = () => {
    if (currentIndex.value < props.items.length - 1) {
      currentIndex.value++;
    } else {
      currentIndex.value = 0;  // Sonraki resme gitmek için sıfırlanır
    }
  };
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    } else {
      currentIndex.value = props.items.length - 1;  // İlk resme gitmek için son indexe döner
    }
  };
  </script>
  
  <style scoped>
.product-slider {
  position: relative;
  width: 100%;
  overflow: hidden; /* Yalnızca kaydırılan içerik görünür */
  height: 560px; /* Slider yüksekliğini burada ayarlıyoruz */
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out; /* Kaydırma animasyonu */
}

.slider-item {
  min-width: 100%; /* Slider içeriğinin her biri %100 genişlikte olacak */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Yüksekliği %100 alacak şekilde ayarlandı */
}

.slider-item img {
  width: 100%;
  height: 100%; /* Resmin yüksekliği %100 olacak */
  object-fit: cover; /* Resmi kapsayıcıya sığdırırken orantıları bozmadan doldurur */
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 5px 10px; /* Küçültülmüş buton boyutu */
  cursor: pointer;
  z-index: 1;
  font-size: 18px; /* Ok butonlarının font boyutu */
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
