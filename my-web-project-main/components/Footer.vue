<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Sol Kısım -->
        <div class="footer-column">
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">İletişim</a></li>
            <li><a href="#">Kişisel Verilerin Korunması</a></li>
            <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
            <li><a href="#">Kiralık Yeriniz Mi Var?</a></li>
            <li><a href="#">Eve'de Kariyer</a></li>
            <li><a href="#">Sertifikalarımız</a></li>
            <li><a href="#">Mağazalarımız</a></li>
          </ul>
        </div>
  
        <!-- Orta Kısım -->
        <div class="footer-column">
          <ul>
            <li><a href="#">Üyelik Sözleşmesi</a></li>
            <li><a href="#">Ön Bilgilendirme Formu</a></li>
            <li><a href="#">Çerez Aydınlatma Metni</a></li>
            <li><a href="#">Hesap Silme Aydınlatma Metni</a></li>
            <li><a href="#">Kalite Politikası</a></li>
          </ul>
        </div>
  
        <!-- Sağ Kısım -->
        <div class="footer-column">
          <ul>
            <li><a href="#">Makyaj</a></li>
            <li><a href="#">Cilt Bakım</a></li>
            <li><a href="#">Saç Bakım</a></li>
            <li><a href="#">Parfüm & Deodorant</a></li>
            <li><a href="#">Ev & Yaşam</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color:#ff4081 ; /* Siyah arka plan */
    color: #fff; /* Beyaz metin */
    padding: 20px 0;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .footer-column {
    flex: 1;
    min-width: 200px;
    margin: 10px;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-column li {
    margin-bottom: 10px;
  }
  
  .footer-column a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
  
  .footer-column a:hover {
    text-decoration: underline;
  }
  </style>
  