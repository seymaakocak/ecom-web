// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  plugins: ["~/plugins/firebase"],
  devtools: { enabled: true },

  // Font Awesome CSS ekleme
  css: [
    '@fortawesome/fontawesome-free/css/all.css',  // Font Awesome'ı dahil ediyoruz
  ],

  // Pinia modülü ekleme
  modules: [
    '@pinia/nuxt', // Pinia modülü burada tanımlanır
  ],

  // Ekstra yapılandırmalar gerekirse buraya eklenir
});
