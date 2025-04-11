<template>
    <nav class="relative bg-white">
      <ul class="flex space-x-4">
        <li
          v-for="category in categories"
          :key="category.name"
          class="relative group"
        >
          <a
            :href="category.link"
            class="px-4 py-2 block"
            :class="{ 'text-pink-500': activeCategory === category.name }"
            @mouseover="showSubMenu(category.name)"
            @mouseleave="hideSubMenu"
          >
            {{ category.name }}
          </a>
          <div
            v-if="activeCategory === category.name"
            class="absolute left-0 mt-2 w-48 bg-white shadow-lg"
          >
            <ul>
              <li
                v-for="subItem in category.subItems"
                :key="subItem.name"
                class="hover:bg-gray-100 px-4 py-2"
              >
                <a :href="subItem.link">{{ subItem.name }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeCategory: null,
        categories: [
          {
            name: "Makyaj",
            link: "/makyaj",
            subItems: [
              { name: "Göz Makyajı", link: "/makyaj/goz-makyaji" },
              { name: "Yüz Makyajı", link: "/makyaj/yuz-makyaji" },
              { name: "Makyaj Aksesuar", link: "/makyaj/makyaj-aksesuar" },
            ],
          },
          {
            name: "Cilt Bakım",
            link: "/cilt-bakim",
            subItems: [{ name: "Nemlendirici", link: "/cilt-bakim/nemlendirici" }],
          },
          // Diğer kategoriler buraya...
        ],
      };
    },
    methods: {
      showSubMenu(categoryName) {
        this.activeCategory = categoryName;
      },
      hideSubMenu() {
        this.activeCategory = null;
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    border-bottom: 1px solid #ddd;
  }
  .group:hover a {
    color: #ff1493; /* Hover rengi */
  }
  </style>
  