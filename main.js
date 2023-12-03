const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const bookingType = document.getElementById("booking-type");

bookingType.addEventListener("click", (e) => {
  Array.from(bookingType.getElementsByTagName("div")).forEach((item) => {
    item.classList.remove("active");
  });

  e.target.classList.add("active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .booking", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

// offer container
ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

function openModal(type) {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlay");
  var modalTitle = document.getElementById("modalTitle");
  var modalContent = document.getElementById("modalContent");

  // Set konten modal sesuai dengan jenisnya
  switch (type) {
    case 'all':
      modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Semua";
      modalContent.innerHTML = `
        <p>1. Anies - Muhaimin</p>
        <p>2. Prabowo - Gibran</p>
        <p>3. Ganjar - Mahfud</p>
        <p>Pilihlah sesuai hati dan akal yang sehat </p>
      `;
      break;
      case 'anies':
        modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Anies";
        modalContent.innerHTML = `
          <h3>Visi Anies Baswedan - Muhaimin Iskandar</h3>
          <p>"Dengan perubahan sebagai dasar gagasan, kami mengusung visi yang merupakan impian jugaan rakyat Indonesia, yakni: Indonesia Adil Makmur untuk Semua,"</p>
          <h3>Misi Anies Baswedan - Muhaimin Iskandar</h3>
          <p>Misi pasangan Anies Baswedan - Muhaimin Iskandar disebut sebagai "8 jalan perubahan".</p>
          <ol>
            <li>Memastikan Ketersediaan Kebutuhan Pokok dan Biaya Hidup Murah melalui Kemandirian Pangan, Ketahanan Energi, dan Kedaulatan Air.</li>
            <li>Mengentaskan Kemiskinan dengan Memperluas Kesempatan Berusaha dan Menciptakan Lapangan Kerja, Mewujudkan Upah Berkeadilan, Menjamin Kemajuan Ekonomi Berbasis Kemandirian dan Pemerataan, serta Mendukung Korporasi Indonesia Berhasil di Negeri Sendiri dan Bertumbuh di Kancah Global.</li>
            <li>Mewujudkan Keadilan Ekologis Berkelanjutan untuk Generasi Mendatang.</li>
            <li>Membangun Kota dan Desa Berbasis Kawasan yang Manusiawi, Berkeadilan dan Saling Memajukan.</li>
            <li>Mewujudkan Manusia Indonesia yang Sehat, Cerdas, Produktif, Berakhlak, serta Berbudaya.</li>
            <li>Mewujudkan Keluarga Indonesia yang Sejahtera dan Bahagia sebagai Akar Kekuatan Bangsa.</li>
            <li>Memperkuat Sistem Pertahanan dan Keamanan Negara, serta Meningkatkan Peran dan Kepemimpinan Indonesia dalam Kancah Politik Global untuk Mewujudkan Kepentingan Nasional dan Perdamaian Dunia.</li>
            <li>Memulihkan Kualitas Demokrasi, Menegakkan Hukum dan HAM, Memberantas Korupsi Tanpa Tebang Pilih, serta Menyelenggarakan Pemerintahan yang Berpihak pada Rakyat.</li>
          </ol>
        `;
        break;
        case 'prabowo':
        modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Prabowo";
        modalContent.innerHTML = `
          <h3>Visi Prabowo Subianto - Gibran Rakabuming Raka</h3>
          <p>"Paham ekonomi yang membuka lebar kesempatan berinovasi dengan kebebasan pasar, tetapi juga memperhatikan dan menjamin jaring pengaman sosial (social safety net) untuk masyarakat yang paling lemah,” dikutip dari draft visi-misi Prabowo-Gibran.</p>
          <p>"Dengan persatuan, kesatuan, dan kebersamaan kita bisa berhasil sebagai negara dalam mencapai cita-cita Indonesia Emas, maka visi Calon Presiden Prabowo Subianto dan Calon Wakil Presiden Gibran adalah: Bersama Indonesia Maju Menuju Indonesia Emas 2045," ditulis dalam draft Visi-Misi Prabowo-Gibran</p>
          <h3>Misi Prabowo Subianto - Gibran Rakabuming Raka</h3>
          <ol>
            <li>Memperkokoh ideologi, Pancasila, demokrasi, dan hak asasi manusia (HAM).</li>
            <li>Memantapkan sistem, pertahanan keamanan, negara dan mendorong, kemandirian bangsa, melalui swasembada, pangan, energi, air, ekonomi kreatif, ekonomi, hijau, dan ekonomi biru.</li>
            <li>Meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif, dan melanjutkan pengembangan infrastruktur.</li>
            <li>Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda, dan penyandang disabilitas.</li>
            <li>Melanjutkan hilirisasi dan industrialisasi untuk meningkatkan nilai tambah di dalam negeri.</li>
            <li>Membangun dari desa dan dari bawah untuk pemerataan ekonomi dan pemberantasan kemiskinan.</li>
            <li>Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi dan narkoba.</li>
            <li>Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam, dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur.</li>
          </ol>
        `;
        break;
        case 'ganjar':
          modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Ganjar";
          modalContent.innerHTML = `
            <h3>Visi Ganjar Pranowo - Mahmud MD</h3>
            <p>Menuju Indonesia Unggul: Gerak Cepat Mewujudkan Negara Maritim yang Adil dan Lestari.</p>
            <p>Berikut makna dari visi tersebut:</p>
            <ol>
              <li>Indonesia unggul</li>
              <li>Gerak cepat</li>
              <li>Negara maritim</li>
              <li>Adil dan lestari</li>
            </ol>
            <h3>Misi Ganjar Pranowo - Mahfud MD</h3>
            <ol>
              <li>Mempercepat pembangunan manusia Indonesia unggul yang berkualitas, produktif, dan berkepribadian.</li>
              <ul>
                <li>Kesehatan jiwa dan raga</li>
                <li>Pendidikan berkualitas dan merata</li>
                <li>Negara hadir dan perlindungan sosial adaptif</li>
                <li>Budaya maju dan sportif</li>
                <li>Perempuan maju dan anak sejatera</li>
              </ul>
              <ol start="6">
                <li>Mempercepat perwujudan lingkungan hidup yang berkelanjutan melalui ekonomi hijau dan biru</li>
                <ul>
                  <li>Lingkungan hidup berkelanjutan</li>
                  <li>Ekonomi hijau yang berbasis pada energi</li>
                  <li>Ekonomi biru dari sektor kelautan</li>
                </ul>
                <li>Mempercepat pelaksanaan demokrasi subtantif, penghormatan HAM, supremasi hukum yang berkeadilan, dan keamanan yang profesional</li>
                <ul>
                  <li>Demokrasi subtantif</li>
                  <li>Pemerintahan yang bersih dan tulus melayani rakyat</li>
                  <li>Hukum adil untuk semua lapisan masyarakat</li>
                  <li>Aparat polisi yang profesional dan terpercaya</li>
                </ul>
                <li>Mempercepat peningkatan peran Indonesia dalam mewujudkan tata dunia baru yang lebih berkeadilan melalui politik luar negeri bebas aktif dan memperkuat pertahanan negara</li>
                <ul>
                  <li>Berperan sentral dalam menata dunia baru</li>
                  <li>Kedaulatan NKRI dengan sistem pertahanan 5.0</li>
                </ul>
              </ol>
            
          `;
          break;
  }

  modal.style.display = "block";
  overlay.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  var overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.display = "none";
}

window.onclick = function (event) {
  var overlay = document.getElementById("overlay");

  if (event.target == overlay) {
    closeModal();
  }
}


function rateNews(type) {
  const emojiSpan = document.querySelector(`span[data-type="${type}"]`);

  if (type === 'hoax') {
    // Berita Hoax
    emojiSpan.innerHTML = '😢';
  } else if (type === 'provokasi') {
    // Berita Provokasi
    emojiSpan.innerHTML = '😠';
  } else if (type === 'real') {
    // Berita Real
    emojiSpan.innerHTML = '😊';
  }
}