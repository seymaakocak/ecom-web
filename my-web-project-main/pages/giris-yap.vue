<template>
  <div class="login-container">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';

export default {
  name: 'GirisYap',
};
</script>

<style scoped>
/* Tüm sayfayı kaplayan kapsayıcı */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Yatayda ortalama */
  justify-content: flex-start; /* Dikeyde üst hizalama */
  height: 100vh; /* Sayfanın tamamını kaplayacak yükseklik */
  width: 100vw; /* Sayfanın tamamını kaplayacak genişlik */
  background-color: #f9f9f9;
  padding-top: 100px; /* Yukarıdan boşluk */
  box-sizing: border-box;
}

/* Başlık */
h1 {
  font-size: 40px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Form kapsayıcısı */
.login-form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Alanlar arasındaki boşluk */
}

/* Giriş alanları */
.login-form input {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  text-align: center;
}

/* Buton */
.login-button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 25px; /* Daha yuvarlak köşeler */
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

/* Hover efekti */
.login-button:hover {
  background-color: #004080;
  transform: scale(1.05); /* Hafif büyüme efekti */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Hover sırasında gölge */
}
</style>
