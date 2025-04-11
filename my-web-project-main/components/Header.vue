<template>
  <header class="header">
    <div class="header-top">
      <!-- Logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.png" alt="Logo" />
        </nuxt-link>
      </div>

      <!-- Arama Çubuğu -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Ürün, marka, kategori ara..."
        />
        <button @click="search">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <!-- İkonlar -->
      <div class="icons">
        <button>
          <i class="fas fa-heart"></i>
        </button>
        <button @click="toggleCart">
          <i class="fas fa-shopping-bag"></i>
        </button>
        <button @click="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="header-bottom">
      <ul>
        <!-- Dynamic Category Dropdowns -->
        <li
          class="nav-item dropdown"
          v-for="category in categories"
          :key="category.name"
          @mouseover="showSubMenu(category.name)"
          @mouseleave="hideSubMenu"
        >
          <span>{{ category.name }}</span>
          <ul v-show="activeCategory === category.name" class="dropdown-menu">
            <li v-for="subItem in category.subItems" :key="subItem.name">
              <nuxt-link :to="subItem.link">{{ subItem.name }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>

  <!-- Sepet Component -->
  <Sepet ref="sepet" />
  <Menu ref="menu" />
</template>

<script>
import Sepet from '@/components/Sepet.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Sepet,
    Menu,
  },
  data() {
    return {
      searchQuery: '', // Arama çubuğu için
      activeCategory: null,
      categories: [
        {
          name: "Makyaj",
          subItems: [
            { name: "Göz Makyajı", link: "/makyaj/goz-makyaji" },
            { name: "Yüz Makyajı", link: "/makyaj/yuz-makyaji" },
            { name: "Makyaj Aksesuarları", link: "/makyaj/makyaj-aksesuar" },
          ],
        },
        {
          name: "Cilt Bakım",
          subItems: [{ name: "Nemlendirici", link: "/cilt-bakim/nemlendirici" }],
        },
        {
          name: "Saç Bakım",
          subItems: [{ name: "Şampuanlar", link: "/sac-bakim/sampuanlar" }],
        },
        {
          name: "Parfüm & Deodorant",
          subItems: [{ name: "Parfümler", link: "/parfum/parfumler" }],
        },
        {
          name: "Kişisel Bakım",
          subItems: [{ name: "Vücut Bakımı", link: "/kisisel-bakim/vucut-bakimi" }],
        },
        {
          name: "Erkek Bakım",
          subItems: [{ name: "Erkek Cilt Bakımı", link: "/erkek-bakim/cilt-bakimi" }],
        },
        {
          name: "Anne & Bebek",
          subItems: [{ name: "Bebek Ürünleri", link: "/anne-bebek/bebek-urunleri" }],
        },
        {
          name: "Ev & Yaşam",
          subItems: [{ name: "Ev Dekorasyonu", link: "/ev-yasam/ev-dekorasyonu" }],
        },
        {
          name: "Kampanyalar",
          subItems: [{ name: "İndirimler", link: "/kampanyalar/indirimler" }],
        },
        {
          name: "Blog",
          subItems: [{ name: "Güncel Yazılar", link: "/blog/guncel-yazilar" }],
        },
        {
          name: "Markalar",
          subItems: [{ name: "Tüm Markalar", link: "/markalar/tum-markalar" }],
        },
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
    search() {
      console.log('Arama sorgusu:', this.searchQuery); // Arama işlemi tetikleniyor
    },
    toggleCart() {
      this.$refs.sepet.toggleSidebar(); // Sepet componentini aç/kapa
    },
    toggleSidebar() {
      this.$refs.menu.toggleSidebar(); // Menü componentini aç/kapa
    },
  },
};
</script>

<style scoped>
/* Header Genel */
.header {
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

/* Üst Menü */
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo img {
  width: 120px;
  height: auto;
}

.search-bar {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.search-bar input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  outline: none;
}

.search-bar button {
  padding: 8px 12px;
  background-color: #ff4081;
  border: none;
  border-radius: 0 20px 20px 0;
  color: white;
  cursor: pointer;
}

.icons button {
  background: none;
  border: none;
  margin-left: 15px;
  font-size: 18px;
  cursor: pointer;
}

/* Alt Menü */
.header-bottom {
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.header-bottom ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
}

.header-bottom li {
  position: relative;
}

.header-bottom li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: color 0.3s ease;
}

.header-bottom li a:hover {
  color: #ff4081;
}

/* Dropdown Menü */
.nav-item.dropdown {
  position: relative;
}

.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 10;
}

.dropdown-menu li {
  padding: 5px 15px;
}

.dropdown-menu li a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.dropdown-menu li a:hover {
  color: #ff4081;
}

/* Alt Dropdown (Submenu) */
.dropdown-submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
}

.nav-item.dropdown:hover .dropdown-submenu {
  display: block;
}
</style>
