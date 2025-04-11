<template>
    <div class="blog-detail">
      <h1>{{ post.title }}</h1>
      <img :src="post.imgSrc" alt="Blog Resmi" class="blog-image" />
      
      <!-- Uzun yazı için v-html kullanarak içerik ekliyoruz -->
      <div class="blog-content" v-html="post.content"></div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  // Blog verisi (Blog yazılarının içeriği)
  const blogPosts = [
    {
      title: 'Cilt Tipine Göre Doğru Nemlendirici Seçimi',
      slug: 'cilt-tipine-gore-dogru-nemlendirici-secimi',
      imgSrc: '/images/blog_3.png',
      content: `Cilt bakımının en temel adımlarından biri, nemlendirici seçimidir. Cilt tipine uygun ürünlerle yapıldığında hem cilt sağlığını korur hem de cildin ihtiyaç duyduğu nem dengesini sağlar. Herkesin cilt yapısı farklı olduğu için nemlendirici ürünlerin, cilt tipine göre özel olarak seçilmesi gerekir.
      
      Yanlış bir nemlendirici kullanımı; ciltte kuruluk, yağlanma ya da hassasiyet gibi sorunlara yol açabilir. Kuru ciltler daha yoğun bir nemlendirme ihtiyacı hisseder. Yağlı ciltler daha hafif ve su bazlı ürünlere yönelmelidir. Karma ciltler ise farklı bölgelerdeki değişen ihtiyaçları dengelerken hassas ciltler yatıştırıcı ve koruyucu ürünlerle desteklenmelidir. Doğru nemlendirici seçimi; cildinize sadece nem sağlamakla kalmaz, aynı zamanda cilt bariyerini güçlendirerek çevresel faktörlerin etkisini en aza indirir.Bu cilt tipi, çevresel faktörlere ve mevsimsel değişimlere karşı daha savunmasızdır. Bu nedenle özel bakım gerektirir. Kuru ciltler için doğru nemlendirici krem, cildin nem bariyerini güçlendirerek çatlama, pul pul dökülme ve gerginlik hissini azaltır. Bu cilt tipi için yoğun nemlendirme özelliklerine sahip, genellikle yağ bazlı veya hyaluronik asit içeren ürünler tercih edilmelidir. Eğer cildiniz kuruysa Garnier'in hyaluronik asit içeren nemlendirici kremleri sizin için doğru bir tercih olabilir.

Kuru cilt için nemlendirici öneri ve ipuçları arıyorsanız sizin için bazı önerilerimiz var. Cildin nem seviyesini artırarak uzun süreli nemlendirme sağlar. L'Oreal Paris'in hyalüronik asit serisi, kuru ciltler için yoğun nem desteği sunar. Shea ve badem yağı ise ciltteki kuruluğu giderir ve cilt bariyerini güçlendirir. Ciltte yumuşak bir his bırakan bu ürünler, özellikle kış aylarında etkili bir çözüm sunar.

Kuru ciltler, gece boyunca yoğun nemlendiricilerden faydalanabilir. Bu ürünler, cildin kendini yenileme sürecine destek olur. Gündüz kullanım için formüle edildiğinden hem cildi nemlendirir hem de güneşin zararlı etkilerine karşı korur.`,
    },
    {
      title: 'Saç Dökülmesini Azaltan Besinler',
      slug: 'sac-dokulmesini-azaltan-besinler',
      imgSrc: '/images/blog_2.png',
      content: `Saç dökülmesini azaltmak için doğru besinleri almak çok önemlidir. Özellikle B vitaminleri, çinko ve biotin gibi besinler saçı güçlendirmeye yardımcı olabilir. Saç dökülmesinin önüne geçmek için bu besinlere odaklanarak, sağlıklı saç büyümesini destekleyebilirsiniz. Beslenme alışkanlıklarınız cildinizin ve saçınızın sağlığını doğrudan etkileyebilir. Yeterli su tüketimi ve dengeli bir beslenme de saç sağlığınız için büyük önem taşır.Saç dökülmesinin nedenleri genetik faktörlerden hormonal değişimlere, stres ve beslenme eksikliklerinden çevresel etkilere kadar uzanır. Her gün ortalama 50-100 saç teli dökülmesi normal kabul edilir. Yine de bu miktarın üzerine çıkan saç kaybı bir sorun olduğunu gösterebilir. Saç köklerinin zayıflaması, saç derisinin sağlıksız olması veya vücudun temel besin maddelerinden yoksun kalması saç dökülmesinin başlıca nedenleri arasında yer alır. Genetik faktörler, saç dökülmesinin en sık görülen sebeplerindendir.

Erkek tipi saç dökülmesinde genetik yatkınlık ön plandadır. Hormonal değişimler ise kadınlarda gebelik, menopoz veya doğum kontrol hapı kullanımı sırasında saç dökülmesine yol açabilir. Bunun yanı sıra, stres seviyelerinin yüksek olması saç köklerini zayıflatarak bu soruna sebep olur. Beslenme eksiklikleri; protein, demir, çinko ve biyotin gibi saç sağlığı için hayati öneme sahip besin maddelerinin yetersiz alımı, saçların güçsüzleşmesine ve dökülmesine yol açar.

Çevresel faktörler de saç dökülmesini etkileyebilir. Kirli hava, güneş ışınlarına uzun süre maruz kalma ve kimyasal içerikli saç ürünlerinin sık kullanımı saç köklerine zarar vererek dökülmeyi artırabilir. Bu nedenle, saç dökülmesi ile mücadelede hem içsel hem de dışsal nedenleri ele alarak bütüncül bir yaklaşım benimsemek önemlidir. Dışsal bakım için doğru ürünlerin kullanılması da saç sağlığını destekler. Örneğin en sevilen saç bakım ürünleri arasında yer alan Head & Shoulders Şampuan Klasik Bakım, saç derisini arındırarak sağlıklı bir zemin oluşturur ve saçların dökülmesini azaltmaya yardımcı olur.`,
    },
    {
      title: 'Yaz İçin Pratik Cilt Bakımı İpuçları',
      slug: 'yaz-icin-pratik-cilt-bakim-ipuclari',
      imgSrc: '/images/blog_1.png',
      content: `Yaz mevsimi, cildin daha fazla bakım ve özen gerektirdiği bir dönemdir. Güneş ışınları, cildinizi kurutabilir ve erken yaşlanma belirtilerine yol açabilir. Bu nedenle yazın cilt bakımı rutininizi yeniden gözden geçirmek önemlidir. Yazın cilt bakımı için öneriler arasında güneş koruyucu kullanmak, cildi nemlendirmek ve aşırı sıcaklardan kaçınmak yer alır. Ayrıca yaz aylarında cildinizi temiz tutmak ve terleme nedeniyle oluşabilecek sivilceleri engellemek de oldukça önemlidir.Günlük yaşamlarımız bizi bakır gibi, kurşun gibi metallarin etkisine maruz bırakır. Bu toksinler vücutta birikebilir ve zaman içerisinde vücudun fonksiyonlarını yitirmesine neden olabilir. Kilin bu toksik maddeleri emdiği, vücudun daha sağlıklı ve zinde olmasını sağladığı kanıtlanmıştır. Hafif miktarda su ile karıştırılarak yapılan yeşil kil maskesinin faydaları arasında ilk sırada cildin korunması gelir. Kil maskesi cildin olası tahriş edicilere karşı korunmasını sağlar.


Kil maskeleri, ayrıca cilt bakım ürünlerinin cildinize yapışmasına ve daha fazla suya dayanıklı olmasına yardımcı olur. Cilt bakım ürünlerinin cildinizde daha uzun süre kalması ve cilt bakımı yapması için düzenli kil maskesi yapılması etkilidir. İçerisinde kil bulunan güneş kremlerinin suya daha fazla dayanıklı olduğu ve cildi güneşten daha uzun sürede koruduğu bilinmektedir. Yeşil kil maskeleri birçok ülkede saç temizleyici ve yumuşatıcı olarak da kullanılmaktadır.`,
    }
    // Diğer blog yazılarını buraya ekleyebilirsiniz
  ];
  
  // Dinamik olarak URL parametresinden slug'ı al
  const route = useRoute();
  const slug = route.params.slug;
  
  // Sluga göre blog içeriğini bul
  const post = blogPosts.find(post => post.slug === slug);
  </script>
  
  <style scoped>
  .blog-detail {
    text-align: center;
    margin: 40px;
  }
  
  .blog-image {
    width: 100%;
    max-width: 800px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .blog-content {
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    margin-top: 20px;
    text-align: left; /* Sol hizalama için */
  }
  </style>
  