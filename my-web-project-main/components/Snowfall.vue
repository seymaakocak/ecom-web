<template>
  <div class="snow-container">
    <svg
      v-for="n in snowflakes"
      :key="n.id"
      class="snowflake"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      :style="{
        left: `${n.x}px`,
        top: `${n.y}px`,
        width: `${n.size}px`,
        height: `${n.size}px`,
        animationDuration: `${n.speed}s`,
        opacity: `${n.opacity}`,
        transform: `rotate(${n.rotation}deg)`
      }"
    >
      <path
        d="M50 5 L55 20 L70 25 L60 35 L70 50 L55 45 L50 60 L45 45 L30 50 L40 35 L30 25 L45 20 Z
           M50 60 L55 75 L65 80 L55 85 L60 95 L50 90 L40 95 L45 85 L35 80 L45 75 Z
           M10 40 L25 45 L20 55 L30 60 L20 70 L25 75 L10 80 L15 65 L5 60 L15 55 Z
           M90 40 L75 45 L80 55 L70 60 L80 70 L75 75 L90 80 L85 65 L95 60 L85 55 Z"
        fill="rgba(173, 216, 230, 0.9)"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const snowflakes = ref([]);

const createSnowflake = () => {
  return {
    id: Math.random(),
    x: Math.random() * window.innerWidth,
    y: -Math.random() * 100,
    size: Math.random() * 15 + 8, // Kar tanelerinin büyüklüğü
    speed: Math.random() * 5 + 3,
    opacity: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360
  };
};

onMounted(() => {
  // Kar tanelerini oluştur
  for (let i = 0; i < 100; i++) {
    snowflakes.value.push(createSnowflake());
  }

  // Kar tanelerinin hareketini güncelle
  setInterval(() => {
    snowflakes.value = snowflakes.value.map(snowflake => ({
      ...snowflake,
      y: snowflake.y + snowflake.speed
    }));

    // Kar tanesi alt kısma ulaştığında yeniden başlat
    snowflakes.value.forEach(snowflake => {
      if (snowflake.y > window.innerHeight) {
        snowflake.y = -Math.random() * 100;
        snowflake.x = Math.random() * window.innerWidth;
      }
    });
  }, 50);
});
</script>

<style scoped>
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.snowflake {
  position: absolute;
  animation: snowfall 10s linear infinite;
  pointer-events: none;
  transform-origin: center;
}

@keyframes snowfall {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100vh);
  }
}
</style>
