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
  var modalProfile = document.getElementById("Profile");  
  var overlay = document.getElementById("overlay");
  
  modalProfile.style.display = "none";
  modal.style.display = "none";
  overlay.style.display = "none";
}

window.onclick = function (event) {
  var overlay = document.getElementById("overlay");

  if (event.target == overlay) {
    closeModal();
  }
}

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

function showProfile(type) {
  var modal = document.getElementById("Profile");
  var overlay = document.getElementById("overlay");
  var modalTitle = document.getElementById("modalProfile");
  var modalContent = document.getElementById("modalIsi");

  // Set konten modal sesuai dengan jenisnya
  switch (type) {
    case 'all':
      modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Semua";
      modalContent.innerHTML = `
        tes
      `;
      break;
      case 'anies':
        modalTitle.innerText = "Detail Profile Calon Pemimpin Bangsa Anies - Muhaimin";
        modalContent.innerHTML = `
        </br>
        <h2>Profil Anies Baswedan</h2>
        <p class="profil-anies" id="paragraf1">
        Pada tahun 1989 Anies masuk perguruan tinggi dan diterima di Fakultas Ekonomi, Universitas Gadjah Mada, Yogyakarta. Anies tetap aktif berorganisasi dengan bergabung Himpunan Mahasiswa Islam dan menjadi salah satu Majelis Penyelamat Organisasi Himpunan Mahasiswa Islam Universitas Gadjah Mada. Anies pernah menjabat sebagai Ketua Senat Mahasiswa di Fakultas Ekonomi pada tahun 1992 dan turut membantu lahirnya kembali Senat Mahasiswa setelah dibekukan oleh Kementerian Pendidikan dan Kebudayaan.          
        </p>        
        </br>        
        <p class="profil-anies" id="paragraf1">
        Anies membentuk Badan Eksekutif Mahasiswa atau BEM sebagai lembaga eksekutif dan mempromosikan senat sebagai lembaga legislatif yang disahkan kongres pada tahun 1993. Masa kepemimpinannya Anies dengan dimulainya gerakan berbasis riset, sebuah tanggapan atas tereksposnya kasus Badan Penyangga dan Pemasaran Cengkeh yang menyangkut putra Presiden Soeharto, Hutomo Mandala Putra. Anies juga turut menginisiasi demonstrasi melawan penerapan Sistem Dana Sosial berhadiah pada November 1993 di kota Yogyakarta.
        </p>
        </br>
        <p class="profil-anies" id="paragraf1">
        Pada tahun 1997, Anies mendapatkan beasiswa Fulbright dari American Indonesian Exchange Foundation untuk melanjutkan kuliah masternya dalam bidang keamanan Internasional dan Kebijakan Ekonomi di School of Public Affairs, Universitas Maryland. Anies juga dianugerahi William P. Cole III Fellow di Universitasnya dan lulus pada Desember tahun 1998.Pada tahun 1999 sesaat setelah lulus dari Maryland, Anies kembali mendapatkan beasiswa untuk melanjutkan kuliahnya dalam bidang Ilmu Politik di Northern Illinois University.
        </p>
        </br>
        

        <h2>Karir Anies Baswedan</h2>
          <ol>
            <li>
              <strong>Peneliti Pusat Antar Universitas Ekonomi Universitas Gadjah Mada</strong>
              <p>
                Saat selesai program S1, Anies memiliki karir sebagai peneliti dan koordinator proyek di Pusat Antar Universitas Studi Ekonomi UGM.
              </p>
            </li>
            <li>
              <strong>Manajer Riset IPC, Inc. Chicago</strong>
              <p>
                Setelah menyelesaikan studi doktor pada 2004, Anies bekerja sebagai manajer riset di IPC, Inc. Chicago, sebuah asosiasi perusahaan elektronik sedunia.
              </p>
            </li>
            <li>
              <strong>Kemitraan Untuk Reformasi Tata Kelola Pemerintahan</strong>
              <p>
                Anies bergabung dengan Kemitraan untuk Reformasi Tata Kelola Pemerintahan, sebuah lembaga non-profit yang fokus pada reformasi birokrasi di berbagai wilayah di Indonesia dengan menekan kerjasama antara pemerintah dengan sektor sipil.
              </p>
            </li>
            <li>
              <strong>Direktur Riset Indonesian Institute Center</strong>
              <p>
                Anies menjadi direktur riset The Indonesian Institute yang didirikan pada bulan Oktober 2004 oleh aktivis dan intelektual muda yang dinamis.
              </p>
            </li>
            <li>
              <strong>Rektor Universitas Paramadina</strong>
              <p>
                Anies dilantik menjadi Rektor Universitas Paramadina pada tanggal 15 Mei 2007. Saat itu, Anies menjadi rektor termuda di Indonesia.
              </p>
            </li>
            <li>
              <strong>Ketua Yayasan Gerakan Indonesia Mengajar</strong>
              <p>
                Anies dikenal sebagai pencetus Indonesia Mengajar, sebuah gerakan yang merekrut generasi muda sebagai pengajar di Sekolah Dasar dan masyarakat selama satu tahun.
              </p>
            </li>
            <li>
              <strong>Menteri Pendidikan dan Kebudayaan Republik Indonesia</strong>
              <p>
                Anies Baswedan diberi mandat oleh Presiden Jokowi untuk menjadi Menteri Pendidikan dan Kebudayaan Republik Indonesia di dalam kabinetnya pada 27 Oktober 2014. Anies menilai bahwa pendidikan merupakan kunci peningkatan kualitas manusia, dan ia memberikan beberapa gebrakan selama menjabat sebagai Mendikbud.
              </p>
              <ul>
                <li>Menunda pelaksanaan Kurikulum 2013, tetapi mengembalikan pada Kurikulum 2006 serta menerapkan kurikulum 2013 pada jumlah sekolah yang terbatas</li>
                <li>Mengubah Ujian Nasional bukan hanya sebagai ukuran kelulusan, tetapi sebagai pemetaan pemerataan kualitas pendidikan daerah</li>
                <li>Program Uji Kompetensi guru dan Sertifikasi Guru untuk meningkatkan kompetensi seorang guru</li>
                <li>Membentuk direktorat Keayahbundaan untuk memperkuat peran orang tua dalam mendidik anak</li>
                <li>Menghapus masa orientasi sekolah menjadi Pengenalan Lingkungan Sekolah dari pihak sekolah</li>
                <li>Mengangkat direktur Jenderal Kebudayaan berasal dari Non PNS secara terbuka</li>
                <li>Mengangkat Mantan Jaksa KPK dan Kabiro Hukum KPK sebagai Staf Ahli Bidang Regulasi Pendidikan dan Kebudayaan</li>
              </ul>
            </li>
          </ol>
          </br>

          <h2>Profil Anies Baswedan Saat Menjabat Gubernur DKI Jakarta</h2>

          <p>
            Pada pemilihan calon Gubernur, Anies menggandeng Sandiaga Uno yang merupakan seorang pengusaha dan politikus Partai Gerindra sebagai wakilnya. Anies dan Sandiaga mendapatkan nomor urut tiga saat pengundian. "Jakarta Maju Bersama" merupakan jargon kampanye keduanya. Pada babak terakhir pilkada, Anies dan Sandi unggul dengan perolehan suara 57,96%. Anies Sandiaga dilantik pada tanggal 16 Oktober 2017 di Istana Merdeka, Jakarta.
          </p>

          <h3>Kebijakan Gubernur Anies Baswedan</h3>
          <ol>
            <li>
              <strong>DP Nol</strong>
              <p>
                Program ini merupakan program bagi masyarakat Jakarta untuk memiliki rumah dengan uang muka yang ringan bahkan tanpa uang muka sama sekali. Program ini mendapatkan banyak kritikan dan adanya tidak konsisten. Anies ingin "DP Nol Persen", tetapi hal ini dianggap melanggar aturan Bank Indonesia. Anies juga dianggap tidak konsisten apakah rumah yang ditawarkannya merupakan rumah tapak atau rumah susun. Sandi menegaskan bahwa program ini mirip dengan program rumah susun yang ada di Singapura. Program tersebut berupa pemerintah membangun rumah bukan sebagai fasilitator pembiayaan.
              </p>
            </li>
            <li>
              <strong>Proyek Reklamasi</strong>
              <p>
                Anies membatalkan perizinan reklamasi tiga belas pulau di Teluk Utara pada 26 September 2018. Terdapat empat pulau yang sudah dibangun terlebih dahulu dan dilanjutkan pembangunannya pada tahun 2018.
              </p>
            </li>
            <li>
              <strong>Stadion Internasional Jakarta</strong>
              <p>
                Pembangunan ini sebenarnya sudah direncanakan semenjak Jokowi menjabat sebagai Gubernur, tetapi pembangunannya baru direalisasikan pada tahun 2019.
              </p>
            </li>
            <li>
              <strong>Banjir di Jakarta</strong>
              <p>
                Dalam rencana pembangunan Jangka Menengah Daerah, Anies menerapkan program sumber daya air untuk pengendalian banjir, seperti revitalisasi prasarana sumber daya air dengan konsep naturalisasi, pembangunan sumur resapan, meningkatkan revitalisasi kanal, revitalisasi sistem polder, pembangunan tanggul pengaman pantai, dan juga perbaikan tata kelola air.
              </p>
            </li>
            <li>
              <strong>Penanganan Covid-19 di Jakarta</strong>
              <p>
                Saat virus Covid-19 memasuki Indonesia dengan adanya dua pasien yang positif, Anies mengumumkan pembentukan Tim Tanggap Covid-19. Pelaksanaan hari bebas kendaraan motor ditiadakan untuk menghindari kerumunan. Tidak adanya kegiatan belajar di sekolah, penghentian operasional kantor, tempat hiburan serta destinasi wisata ditutup. Pembatasan sosial berskala besar atau PSBB pertama kali diterapkan oleh Pemerintah Provinsi DKI Jakarta dan juga PSBB pertama yang dilakukan di Indonesia.
              </p>
            </li>
          </ol>
          </br>

          <h2>Profil Muhaimin Iskandar</h2>
          <p class="profil-muhaimin" id="paragraf4">
            Muhaimin Iskandar menempuh pendidikan Sekolah Menengah Pertama (SMP) di Madrasah Tsanawiyah Negeri Jombang dan lulus pada tahun 1982. Ia kemudian melanjutkan pendidikannya di Madrasah Aliyah Negeri I Yogyakarta dan lulus tahun 1985.
          </p>
          </br>          
          <p class="profil-muhaimin" id="paragraf5">
            Cak Imin menyelesaikan pendidikan S1 dari FISIP Universitas Gadjah Mada (UGM) di usia 26 tahun. Kemudian, pendidikan magister ditempuh Cak Imin 10 tahun setelahnya. Dia menyelesaikan pendidikan magisternya di Universitas Indonesia bidang komunikasi pada tahun 2001.
          </p>
          </br>
          <p class="profil-muhaimin" id="paragraf6">
            Tak berpuas sampai di situ, Cak Imin kembali melanjutkan pendidikan ke jenjang S3 di Universitas Airlangga Surabaya dan mendapat gelar Doktor di tahun 2018.
          </p>   
          </br>

          <h2>Karier Non Politik</h2>
            <ol>
              <li>
                <strong>Staf Pengajar Pesantren Denanyar Jombang (1980-1983)</strong>
                <p id="paragraf12">
                  Cak Imin menjadi staf pengajar di Pesantren Denanyar Jombang dari tahun 1980 hingga 1983.
                </p>
              </li>
              <li>
                <strong>Kepala Divisi Penelitian LPU Jakarta (1992-1994)</strong>
                <p id="paragraf13">
                  Pada periode 1992-1994, Cak Imin menjabat sebagai Kepala Divisi Penelitian di LPU Jakarta.
                </p>
              </li>
              <li>
                <strong>Kepala Lembaga Penelitian & Pengembangan Tabloid Detik (1994)</strong>
                <p id="paragraf14">
                  Tahun 1994, Cak Imin mengepalai Lembaga Penelitian & Pengembangan Tabloid Detik.
                </p>
              </li>
            </ol>
            </br>
        `;
        break;
      case 'prabowo':
        modalTitle.innerText = "Detail Profile Calon Pemimpin Bangsa Prabowo - Gibran";
        modalContent.innerHTML = `
        </br>
          <h2>Profil Prabowo Subianto</h2>
          <p class="profil-prabowo" id="paragraf4">
            Masa kecil Prabowo banyak dihabiskan di luar negeri, terutama setelah ayahnya terlibat dalam menentang pemerintahan Presiden Soekarno di dalam Pemerintahan Revolusioner Republik Indonesia di Sumatera Barat. Prabowo menyelesaikan studi menengahnya di Victoria Institution di Kuala Lumpur, Malaysia; Zurich International School di Zurich, Swiss; dan The American School di London, Inggris. Setelah kejatuhan Soekarno dan naiknya Soeharto, keluarga Soemitro kembali ke negara Indonesia. Lalu Prabowo masuk ke Akademi Militer di Magelang, Jawa Tengah.
          </p>
          </br>

          <h2>Karir Militer Prabowo Subianto</h2>
            <ol>
              <li>
                <strong>Pendidikan dan Awal Karir</strong>
                <p id="paragraf20">
                  Prabowo Subianto merupakan seorang politisi, pengusaha, dan perwira tinggi militer Indonesia. Beliau memulai karir militer di TNI Angkatan Darat pada tahun 1976 setelah lulus dari Akademi Militer di Magelang.
                </p>
              </li>
              <li>
                <strong>Komando Pasukan Sandi Yudha (1976-1985)</strong>
                <p id="paragraf21">
                  Dari tahun 1976 hingga 1985, Prabowo bertugas di Komando Pasukan Sandi Yudha (Kopassandha), pasukan khusus Angkatan Darat pada saat itu.
                </p>
              </li>
              <li>
                <strong>Komandan Pleton dan Peran Penting (1985)</strong>
                <p id="paragraf22">
                  Saat usianya 26 tahun, Prabowo menjadi salah satu Komandan Pleton termuda dalam operasi. Beliau memiliki peran besar dalam memimpin misi penangkapan terhadap Nicolau dos Reis Lobato, pemimpin Fretilin yang saat Operasi Seroja menjabat sebagai Perdana Menteri.
                </p>
              </li>
              <li>
                <strong>Wakil Komandan Batalyon Infanteri Lintas Udara 328 (1985)</strong>
                <p id="paragraf23">
                  Tahun 1985, Prabowo menjadi wakil komandan Batalyon Infanteri Lintas Udara 328.
                </p>
              </li>
              <li>
                <strong>Kepala Staf Brigade Infanteri Lintas Udara 17 (1991)</strong>
                <p id="paragraf24">
                  Tahun 1991, Prabowo menjabat sebagai Kepala Staf Brigade Infanteri Lintas Udara 17 yang bermarkas di Cijantung.
                </p>
              </li>
              <li>
                <strong>Kembali ke Pasukan Khusus (1993)</strong>
                <p id="paragraf25">
                  Tahun 1993, Prabowo kembali ke pasukan khusus yang kini diberi nama Komando Pasukan Khusus atau Kopassus. Beliau diangkat menjadi Komandan Grup 3/Sandi Yudha, salah satu Komando kontra-insurjensi Kopassus.
                </p>
              </li>
              <!-- ... dan seterusnya ... -->
            </ol>
            </br>

            <h2>Karir Bisnis Prabowo Subianto</h2>
              <ol>
                <li>
                  <strong>Memasuki Dunia Bisnis</strong>
                  <p id="paragraf26">
                    Setelah Prabowo meninggalkan karir militer, beliau memilih untuk memasuki dunia bisnis, mengikuti jejak adiknya. Dalam dunia bisnis, Prabowo menjadi pemilik dan pimpinan dalam 27 perusahaan di Indonesia dan luar negeri.
                  </p>
                </li>
                <li>
                  <strong>Presiden dan CEO PT Tidar Kerinci Agung</strong>
                  <p id="paragraf27">
                    Prabowo mengepalai PT Tidar Kerinci Agung, perusahaan yang bergerak dalam produksi minyak kelapa sawit.
                  </p>
                </li>
                <li>
                  <strong>PT Nusantara Energy</strong>
                  <p id="paragraf28">
                    Prabowo juga menjadi presiden dan CEO PT Nusantara Energy yang bergerak dalam sektor migas, pertambangan, pertanian, kehutanan, dan pulp.
                  </p>
                </li>
                <li>
                  <strong>PT Jaladri Nusantara</strong>
                  <p id="paragraf29">
                    PT Jaladri Nusantara, sebuah perusahaan yang bergerak di bidang perikanan, juga merupakan salah satu perusahaan yang dipimpin oleh Prabowo.
                  </p>
                </li>                
              </ol>              
              </br>

              
            <h2>Karir Politik Prabowo Subianto</h2>
            <ol>
              <li>
                <strong>Pencalonan di Partai Golkar (2004)</strong>
                <p id="paragraf30">
                  Karir politik Prabowo dimulai saat mencalonkan diri sebagai bakal calon presiden Indonesia dari Partai Golkar pada konvensi Capres Golkar tahun 2004. Meskipun lolos, pada akhirnya Prabowo kalah suara oleh Wiranto.
                </p>
              </li>
              <li>
                <strong>Pendirian Partai Gerindra (2008)</strong>
                <p id="paragraf31">
                  Pada tanggal 6 Februari tahun 2008, Prabowo bersama sang adik, Hashim Djojohadikusumo, mantan aktivis mahasiswa Fadli Zon, mantan Deputi V Badan Intelijen Negara Bidang Penggalang Muchdi Purwoprandjono, dan sederet nama lainnya, mendirikan Partai Gerakan Indonesia Raya atau Gerindra. Di partai Gerindra, Prabowo menjabat sebagai Ketua Dewan Pembina Dewan Pimpinan Pusat (DPP).
                </p>
              </li>
              <li>
                <strong>Pemilihan Presiden 2019</strong>
                <p id="paragraf32">
                  Pada pemilihan presiden 2019, Prabowo kembali maju dengan menggandeng Sandiaga Uno sebagai cawapres-nya. Namun, kemenangan tidak berpihak kepadanya.
                </p>
              </li>
              <li>
                <strong>Menteri Pertahanan (2019-2024)</strong>
                <p id="paragraf33">
                  Pada tanggal 23 Oktober 2019, Prabowo dilantik menjadi Menteri Pertahanan ke-26 Republik Indonesia dalam Kabinet Indonesia Maju untuk periode 2019 sampai 2024.
                </p>
              </li>
              <!-- ... dan seterusnya ... -->
            </ol>
            </br>

            <h2>Profil Gibran Rakabuming Raka</h2>
            <p>
              Gibran menyelesaikan pendidikan SD Mangkubumen Kidul, Surakarta. Lanjut Sekolah Menengah Pertama Negeri (SMPN) 1 Surakarta.
              Gibran kemudian pindah ke Singapura pada SMP dan kemudian melanjutkan sekolahnya yang setingkat SMA di Orchid Park Secondary School, Singapura pada 2002.
              Lalu pada tahun 2007 tingkat perkuliahan, Gibran Rakabuming lulus dari Management Development Institute of Singapore. Ia kemudian kembali melanjutkan studinya ke Program Insearch di University of Technology Sydney Insearch, Sydney, Australia sampai lulus pada tahun 2010.
            </p>
            </br>
            <p>
              Gibran mendirikan restoran Pasta Buntel yang berfokus pada makanan Italia pada 2017. Dia juga membuka usaha kopi CS Coffee Shop dan Ceker Ayam Bakar.
              Tidak hanya usaha makanan, Gibran mendirikan usaha perbaikan elektronik atau reparasi produk khusus Apple dengan nama iColor pada 2016.
              Pada tahun yang sama, dia juga membuat usaha jas hujan bernama Tugas Negara Bos. Pada 2018, Gibran bersama temannya, Kevin Susanto juga mendirikan perusahaan startup yang berfokus kuliner bernama Goola.
              Perusahaan tersebut berhasil menerima pendanaan dari Alpha JWC Ventures sebesar US$5 juta atau setara dengan Rp70 Miliar.
            </p>
            </br>
            <p>
              Setahun kemudian, Gibran kemudian berkolaborasi dengan adiknya, Kaesang Pangarep dan chef Arnold Poernomo mendirikan restoran bernama Mangkok Ku.
              Tidak puas hanya mendirikan satu usaha dengan adiknya, Gibran dan Kaesang membuat produk makanan dan minuman dengan nama Kemripik dan Ngedrink, mendirikan start up kuliner Semarang bernama Madhang serta aplikasi pencari kerja, Kerjaholic.
              Gibran pernah menduduki jabatan sebagai Ketua Asosiasi Perusahaan Jasa Boga Indonesia (APJBI) Kota Solo. Selain itu, dia juga didapuk sebagai Komisaris PT Rakabu Sejahtera.
            </p>
            </br>
            <p>
              Pada 2020, secara mengejutkan Gibran memulai karier politiknya. Dia mendaftarkan diri sebagai anggota Partai Demokrasi Indonesia Perjuangan (PDIP) di kantor dewan pimpinan cabang (DPC) Solo.
              Pendaftaran tersebut bertujuan untuk masuk dalam pencalonan sebagai Wali Kota Solo pada pemilihan 2020. Gibran menyalonkan diri bersama wakilnya, Teguh Prakasa.
              Keduanya diusung oleh PDIP. Tidak hanya itu, keduanya menerima dukungan dari Partai Golongan Karya (Golkar), Partai Gerakan Indonesia Raya (Gerindra), Partai Amanat Nasional (PAN), Partai Nasional Demokrat (Nasdem), Partai Persatuan Indonesia (Perindo), Partai Solidaritas Indonesia (PSI).
              Gibran berhasil menang dengan perolehan suara sebesar 225.451 atau setara dengan 86,53% dalam kontestasi politik Solo melawan pasangan Bagyo Wahyono dan FX Suparjo.
              Gibran Rakabuming Raka dan Teguh Prakasa resmi dilantik sebagai Wali Kota Solo pada 26 Februari 2021.
            </p>

        `;
        break;
      case 'ganjar':
          modalTitle.innerText = "Detail Calon Pemimpin Bangsa - Ganjar";
          modalContent.innerHTML = `
          <h2>Profil Ganjar Pranowo</h2>
          <p>
            Dalam hal pendidikan, Ganjar menyelesaikan pendidikan dasar dan menengahnya di Jawa Tengah, termasuk di SDN 1 Kutoarjo dan SMPN 1 Kutoarjo.
            Setelah lulus SMP, ia melanjutkan ke SMA BOPKRI 1 Yogyakarta. Di SMA, Ganjar sangat aktif dalam kegiatan organisasi, termasuk kepramukaan.
          </p>
          </br>
          <p>
            Setelah lulus SMA pada tahun 1987, Ganjar melanjutkan studinya di Universitas Gajah Mada, di mana ia diterima di Fakultas Hukum.
            Selama kuliah, ia bergabung dengan Gerakan Mahasiswa Nasional Indonesia (GMNI). Ia kemudian lulus bergelar sarjana hukum pada 1995.
          </p>
          </br>
          <p>
            Selanjutnya, Ganjar mencoba peruntungan sebagai konsultan pengembangan sumber daya manusia (SDM) di sebuah perusahaan swasta.
            Karier profesionalnya di bidang konsultan dia stop di tahun 1999. Kemudian, Ganjar memantapkan diri menekuni politik praktis pada tahun 2002.
          </p>
          </br>
          <p>
            Karier politik Ganjar dimulai ketika ia menjadi simpatisan Partai Demokrasi Indonesia (PDI) pada tahun 1996.
            Ganjar pertama kali terpilih sebagai anggota DPR pada periode 2004-2009, di mana ia menjadi anggota Komisi IV yang mengawasi bidang pertanian, perkebunan, kehutanan, dan pangan.
            Di periode kedua, ia terpilih lagi dan bertugas di Komisi II yang mengawasi bidang dalam negeri, otonomi daerah, pemilu, dan birokrasi.
          </p>
          </br>
          <p>
            Puncak kariernya adalah ketika Ganjar maju dalam pemilihan gubernur Jawa Tengah pada tahun 2013 dan berhasil memenangkan dua periode kepemimpinan.
          </p>
          </br>

          <h1>Profil Mahmud MD</h1>

            <h2>Pendidikan</h2>
            <ul>
                <li>Saat berusia tujuh tahun, Mahmud MD dimasukkan ke Sekolah Dasar Negeri dan belajar di Madrasah Ibtida’iyyah. Ia juga belajar agama di surau pada malam hingga pagi hari.</li>
                <li>Dikirim ke Pondok Pesantren Somber Lagah di Desa Tegangser Laok untuk mendalami agama ketika masih kelas 5 SD.</li>
                <li>Pondok Pesantren Somber Lagah sekarang dikenal sebagai Pondok Pesantren al-Mardhiyyah.</li>
                <li>Tidak melanjutkan ke SMPN favorit, melainkan dimasukkan ke Pendidikan Guru Agama (PGA) Negeri di Pamekasan setelah lulus SMP.</li>
                <li>Tamat PGA pada tahun 1974, lalu melanjutkan ke Pendidikan Hakim Islam Negeri (PHIN) di Yogyakarta pada 1978 setelah menjadi lulusan terbaik dari PGA.</li>
            </ul>

            <!-- Profil Karir Mahmud MD -->
            <h2>Profil Karir Mahmud MD</h2>
            <ul>
                <li>Staf pengajar dan Guru Besar Fakultas Hukum Universitas Islam Indonesia (UII) Yogyakarta sejak tahun 1984.</li>
                <li>Menteri Pertahanan Republik Indonesia (2000-2001), kemudian Menteri Kehakiman (2000–2001).</li>
                <li>Anggota DPR RI, menempati Komisi III dan Wakil Ketua Badan Legislatif (2004–2008).</li>
                <li>Anggota Tim Konsultan Ahli pada Badan Pembinaan Hukum Nasional (BPHN) Depkum HAM RI.</li>
                <li>Ketua Mahkamah Konstitusi Republik Indonesia (2008–2013).</li>
                <li>Anggota Dewan Pengarah Unit Kerja Presiden Pembinaan Ideologi Pancasila (2017–2018).</li>
                <li>Anggota Dewan Pengarah Badan Pembinaan Ideologi Pancasila (2018–).</li>
                <li>Menteri Koordinator Bidang Politik, Hukum, dan Keamanan (2019-).</li>
            </ul>
          `;
          break;
  }

  modal.style.display = "block";
  overlay.style.display = "block";
}

function showBerita(type) {
  var modal = document.getElementById("Berita");
  var overlay = document.getElementById("overlay");
  var modalTitle = document.getElementById("modalTitleBerita");
  var modalContent = document.getElementById("modalIsiBerita");

  // Tambahkan elemen loading dengan emoji sesuai kasus
  var loadingEmoji;
  switch (type) {
    case 'kasusvideo':
      loadingEmoji = '😠';
      textInfo = 'Heum Sepertinya...';
      break;
    case 'kasushack':
      loadingEmoji = '😊';
      textInfo = 'Adoohh Sepertinya...';
      break;
    case 'joinprabowo':
      loadingEmoji = '😊';
      textInfo = 'Gimana Jadinya...';
      break;
    default:
      loadingEmoji = '😊'; // Emoji default jika tidak ada kasus yang sesuai
  }

  modalContent.innerHTML = `<span class="emoji" data-type="hoax">${loadingEmoji}</span><p>${textInfo}</p>`;

  // Set timeout untuk simulasi loading, ganti nilai timeout dengan proses asinkronus yang sebenarnya
  setTimeout(function () {
    // Set konten modal sesuai dengan jenisnya
    switch (type) {
      case 'kasusvideo':
        modalTitle.innerText = "Detail Kasus Video yang viral";
        modalContent.innerHTML = `        
        <p>dalam video tersebut, penundaan Pemilu 2024 dinyatakan sebagai usulan dan keputusan terkait penundaan itu tergantung pada setiap ketua umum fraksi yang ada di DPR dan MPR. Sementara, Ketua DPR RI Puan Maharani seperti dilaporkan ANTARA, pada 15 Febuari 2022, menegaskan jadwal Pemilu 2024 telah ada dan merupakan kesepakatan bersama antara pemerintah, DPR RI, dan penyelenggara pemilu. Dengan demikian menurut Puan, Pemilu 2024 akan dilaksanakan sesuai dengan tanggal yang telah ditentukan, yaitu 14 Februari 2022. Selain itu pada 22 Maret 2022, Dewan Perwakilan Daerah (DPD) RI bersama Kementerian Dalam Negeri (Kemendagri) menyepakati tidak ada penundaan Pemilu 2024.</p>
        <br/>
        <h1 style="color: red;">HOAX</h1>
        `;
        break;
      case 'kasushack':
        modalTitle.innerText = "Penjelasan KPU dibobol hacker";
        modalContent.innerHTML = `        
        <p>Website resmi Komisi Pemilihan Umum (KPU) dilaporkan dibobol hacker dan kabarnya 204 juta data daftar pemilih tetap (DPT) bocor. Wakil Ketua Komisi I DPR RI, Abdul Kharis mengatakan kebocoran data ini harus dipertanggungjawabkan oleh pengolah data yakni KPU.</p><br/><p>Sementara Communication and Information System Security Research Center (CISSReC) mengatakan kebocoran data KPU merupakan data DPT terkait Pemilu. Dimana data sample 500 ribu yang ditunjukkan hacker sangat terbuka yang meliputi data KK, KTP hingga TPS.</p><br/><p>Chairman Lembaga Riset Keamanan Siber CISSReC, Pratama Persada mengatakan persoalan data bocor ini hal yang serius karena terkait keamanan data pribadi masyarakat.</p>
        <br/>
        <h1 style="color: green;">FAKTA</h1>
        `;
        break;
      case 'joinprabowo':
        modalTitle.innerText = "Prabowo Resmi Jadi Capres?";
        modalContent.innerHTML = `        
        <p>Empat partai besar yakni Golkar, Pan, PKB dan Geridra resmi mendukung Prabowo Subianto sebagai bakal calon Presiden 2024. Hadir dalam deklarasi dalam memberikan dukungan kepada calon Presiden (Capres) 2024, Prabowo Subianto, di antaranya Airlangga Hartarto Ketua Umum Partai Golkar, Ketua Umum Partai Amanat Nasional (PAN), Zulkifli Hasan (Zulhas) dan Ketua Umum Partai Kebangkitan Bangsa (PKB), Muhaimin Iskandari</p><br/><p>atas dukungan yang diberikan empat Partai besar kepada Prabowo Subianto, Sekretaris Jenderal (Sekjen) Gerindra Ahmad Muzani mengatakan jika dukungan dari partai besar akan menjadikan Prabowo Subianto sebagai Calon Presiden 2024 mendatang.</p>
        <br/>
        <h1 style="color: green;">FAKTA</h1>
        `;
        break;
    }

    // Hapus elemen loading setelah konten dimuat
    modalContent.querySelector('.emoji').remove();
  }, 1000); // Ganti nilai timeout dengan proses asinkronus yang sebenarnya

  modal.style.display = "block";
  overlay.style.display = "block";

  // Menambahkan event listener untuk menutup modal jika di-klik di luar modal
  overlay.addEventListener("click", closeModalOutside);
}


function closeModalOutside() {
  var modal = document.getElementById("Berita");
  var overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.display = "none";

  // Menghapus event listener setelah modal ditutup
  overlay.removeEventListener("click", closeModalOutside);
}

function closeBerita() {
  var modal = document.getElementById("Berita");
  var overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.display = "none";
}

