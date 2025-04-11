<template>
    <div>
      <!-- Sekmeler -->
      <div class="tabs">
        <nuxt-link 
          to="/en-populer" 
          :class="{ active: $route.path === '/en-populer' }" 
          class="tab"
        >
          En Popüler
        </nuxt-link>
        <nuxt-link 
          to="/en-yeniler" 
          :class="{ active: $route.path === '/en-yeniler' }" 
          class="tab"
        >
          En Yeniler
        </nuxt-link>
        <nuxt-link 
          to="/en-cok-satanlar" 
          :class="{ active: $route.path === '/en-cok-satanlar' }" 
          class="tab"
        >
          En Çok Satanlar
        </nuxt-link>
      </div>
  
      <!-- İçerikler -->
      <div class="tab-content">
        <slot></slot> <!-- Dinamik içerik buraya gelecek -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Tabs",
  };
  </script>
  
  <style scoped>
  .tabs {
    display: flex;
    gap: 20px;
  }
  
  .tab {
    cursor: pointer;
    padding: 10px 20px;
    text-decoration: none;
    color: black;
  }
  
  .tab.active {
    color: pink;
    border-bottom: 2px solid pink;
  }
  
  .tab-content {
    margin-top: 20px;
  }
  </style>