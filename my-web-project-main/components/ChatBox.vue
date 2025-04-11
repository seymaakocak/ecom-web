<template>
    <div>
      <!-- Chat simgesi -->
      <div class="chat-icon" @click="toggleChat">
        <img src="/images/chat-icon.png" alt="Chat Icon" />
      </div>
  
      <!-- Chat kutusu -->
      <div v-if="isChatOpen" class="chat-box">
        <div class="chat-header">
          <span>L'ORÉAL Türkiye</span>
          <button @click="toggleChat" class="close-btn">X</button>
        </div>
        <div class="chat-content">
          <p>Merhaba! Size nasıl yardımcı olabilirim?</p>
          <!-- Kullanıcı mesajları ve diğer içerikler buraya gelecek -->
        </div>
        <div class="chat-input">
          <input type="text" placeholder="Mesaj yazın..." />
          <button>Gönder</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isChatOpen = ref(false); // Chatbox açık/kapalı durumu
  
  // Chatbox görünürlüğünü değiştir
  function toggleChat() {
    isChatOpen.value = !isChatOpen.value;
  }
  </script>
  
  <style scoped>
  /* Chat simgesi */
  .chat-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #ff4081;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 1000;
  }
  
  .chat-icon img {
    width: 30px;
    height: 30px;
  }
  
  /* Chat kutusu */
  .chat-box {
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }
  
  /* Chat kutusu başlığı */
  .chat-header {
    background-color: #ff4081;
    color: white;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .chat-header span {
    font-size: 16px;
    font-weight: bold;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  
  /* Chat içeriği */
  .chat-content {
    padding: 10px;
    height: 200px;
    overflow-y: auto;
  }
  
  /* Chat giriş alanı */
  .chat-input {
    display: flex;
    border-top: 1px solid #ddd;
  }
  
  .chat-input input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
    font-size: 14px;
  }
  
  .chat-input button {
    background-color: #ff4081;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
  }
  </style>