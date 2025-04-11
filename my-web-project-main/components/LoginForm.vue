<template>
  <div class="login-form">
    <h1>Giriş Yap</h1>

    <div class="form-group">
      <input
        type="email"
        v-model="email"
        placeholder="E-posta Adresiniz"
        required
      />
    </div>
    <div class="form-group">
      <input
        type="password"
        v-model="password"
        placeholder="Şifre"
        required
      />
    </div>

    <button @click="handleLogin">Giriş Yap</button>

    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { useNuxtApp } from "#app";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleLogin() {
      this.errorMessage = "";
      if (!this.email || !this.password) {
        this.errorMessage = "Lütfen e-posta ve şifreyi giriniz.";
        return;
      }

      try {
        // Nuxt plugin üzerinden auth nesnesini alıyoruz.
        const { $firebaseAuth } = useNuxtApp();

        // Firebase ile e-posta/şifre giriş
        const userCredential = await signInWithEmailAndPassword(
          $firebaseAuth,
          this.email,
          this.password
        );

        // Başarılı giriş -> userCredential.user
        alert("Giriş başarılı! Hoş geldin: " + userCredential.user.email);

        // İstersen parent bileşene bir event fırlatabilirsin
        // this.$emit('logged-in', userCredential.user);
      } catch (err) {
        this.errorMessage = err.message;
      }
    },
  },
};
</script>

<style scoped>
/* Ana kapsayıcı */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Tam ortalamak için */
  height: 100vh; /* Yüksekliği ekranın tamamını kaplasın */
  width: 100vw; /* Genişliği ekranın tamamını kaplasın */
  background-color: #f9f9f9;
  padding: 20px;
  box-sizing: border-box;
}


/* Başlık */
h1 {
  font-size: 32px;
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
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
}
.form-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.form-header button {
  flex: 1;
  padding: 10px;
  border: none;
  background: #f7f7f7;
  cursor: pointer;
}
.form-header button.active {
  font-weight: bold;
  background: #ddd;
}
.form-group {
  margin-bottom: 15px;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-group.checkbox label {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.form-group.checkbox input {
  margin-right: 10px;
}
button[type="submit"] {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"]:disabled {
  background: #ccc;
  cursor: not-allowed;
}
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}
.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
.success-message {
  color: green;
  margin-top: 10px;
  text-align: center;
}
</style>

