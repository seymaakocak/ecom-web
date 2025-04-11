<template>
  <div>
    <h1>Üye Ol</h1>
    <!-- Giriş yapma formu buraya gelecek -->
    <SignUp />
  </div>
</template>

<script>
import SignUp from '~/components/SignUp.vue';

export default {
  name: 'UyeOl'
}
</script>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center; /* Yatayda ortalama */
  margin-bottom: 20px; /* Başlık ile form arasında boşluk */
}
</style>