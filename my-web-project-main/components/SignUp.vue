<template>
  <div class="form-container">
    <div class="form-header">
      <button
        :class="{ active: currentTab === 'login' }"
        @click="currentTab = 'login'"
      >
        Giriş Yap
      </button>
      <button
        :class="{ active: currentTab === 'register' }"
        @click="currentTab = 'register'"
      >
        Üye Ol
      </button>
    </div>

    <!-- Giriş Yap Formu -->
    <div v-if="currentTab === 'login'">
      <LoginForm />
    </div>

    <!-- Üye Ol Formu -->
    <form v-if="currentTab === 'register'" @submit.prevent="submitForm">
      <h1>Üye Ol</h1>
      <div class="form-group">
        <input type="text" v-model="form.firstName" placeholder="Adınız" required />
      </div>
      <div class="form-group">
        <input type="text" v-model="form.lastName" placeholder="Soyadınız" required />
      </div>
      <div class="form-group">
        <input type="email" v-model="form.email" placeholder="Email Adresiniz" required />
      </div>
      <div class="form-group">
        <input type="password" v-model="form.password" placeholder="Şifre" required />
      </div>
      <div class="form-group">
        <input type="tel" v-model="form.phone" placeholder="Telefonunuz" />
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.terms" required />
          Eve Sadakat Programı Üyelik Sözleşmesi ve Açık Rıza Metni’ni okudum, kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.electronicMessages" />
          Eve Mağazacılık'ın onay metni kapsamında ticari elektronik ileti göndermesini kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.tomCompaniesMessages" />
          TOM Şirketlerinin tarafıma ticari elektronik ileti göndermesini kabul ediyorum.
        </label>
      </div>
      <div class="form-group checkbox">
        <label>
          <input type="checkbox" v-model="form.agreements.dataProcessing" />
          Eve Mağazacılık nezdindeki kişisel verilerimin Açık Rıza Metni kapsamında
          TOM Şirketlerine aktarılmasına ve işlenmesine onay veriyorum.
        </label>
      </div>
      <button type="submit" :disabled="!isFormValid">Kaydol</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script>
import LoginForm from "~/components/LoginForm.vue";

// Firebase
import { useNuxtApp } from "#app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// Firestore'a kaydetmek istersen
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      currentTab: "register", // Varsayılan olarak 'register' sekmesi açık
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "", // Kayıt için gerekli
        phone: "",
        agreements: {
          terms: false,
          electronicMessages: false,
          tomCompaniesMessages: false,
          dataProcessing: false,
        },
      },
      errorMessage: "",
      successMessage: "",
    };
  },
  computed: {
    isFormValid() {
      return (
        this.form.firstName &&
        this.form.lastName &&
        this.form.email &&
        this.form.password && // Şifre boş olamaz
        this.form.agreements.terms // Sözleşmeyi onaylamak zorunlu
      );
    },
  },
  methods: {
    async submitForm() {
      // Temel form validasyonu 
      if (!this.isFormValid) {
        this.errorMessage =
          "Lütfen zorunlu alanları doldurun ve sözleşmeyi onaylayın.";
        return;
      }

      this.errorMessage = "";
      this.successMessage = "";

      try {
        // 1) Firebase Auth nesnesini al
        const { $firebaseAuth } = useNuxtApp();

        // 2) createUserWithEmailAndPassword ile kullanıcı oluştur
        const userCredential = await createUserWithEmailAndPassword(
          $firebaseAuth,
          this.form.email,
          this.form.password
        );

        // 3) Ad/Soyadı Firebase profil alanlarına eklemek için
        await updateProfile(userCredential.user, {
          displayName: `${this.form.firstName} ${this.form.lastName}`,
        });

        // 4) Telefon veya anlaşmalar gibi ek bilgileri Firestore’a kaydetmek istersen:
        // (Opsiyonel)
        const db = getFirestore(); // Plugin ile initialize edilmiş app'ten getFirestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          phone: this.form.phone,
          agreements: this.form.agreements,
          createdAt: new Date().toISOString(),
        });

        // 5) Başarılı
        this.successMessage = `Kayıt başarılı! Hoş geldin, ${this.form.firstName}!`;
        // Formu temizle
        this.form.firstName = "";
        this.form.lastName = "";
        this.form.email = "";
        this.form.password = "";
        this.form.phone = "";
        this.form.agreements.terms = false;
        this.form.agreements.electronicMessages = false;
        this.form.agreements.tomCompaniesMessages = false;
        this.form.agreements.dataProcessing = false;
      } catch (err) {
        // Hata durumunda
        this.errorMessage = err.message;
      }
    },
  },
};
</script>

<style scoped>
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
