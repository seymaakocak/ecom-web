<template>
  <div class="scrollable-rectangle">
    <div class="scrollable-container">
      <div class="scrollable-item" v-for="(item, index) in items" :key="index">
        <img :src="item.imgSrc" :alt="item.alt" class="item-image" />
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollableRectangle',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.scrollable-rectangle {
  width: 100%;
  overflow-x: auto; /* Yatay kaydırma */
  padding: 10px 0;
}

.scrollable-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  
}

.scrollable-item {
  min-width: 200px; /* Her bir öğe için genişlik */
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 15px;
}

.item-image {
  width: 100%; /* Resmin konteyner genişliğine sığması için */
  height: auto; /* Oranı koruyarak yükseklik otomatik ayarlanır */
  object-fit: cover; /* Resmin, sığmaması durumunda kesilmesini sağlar */
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  color: #333;
}
</style>
