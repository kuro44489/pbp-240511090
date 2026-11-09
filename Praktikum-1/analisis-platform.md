## Tabel Analisis Komparatif Platform

| Aspek | Web | Desktop | Mobile |
| :--- | :--- | :--- | :--- |
| **Bahasa Utama** | JavaScript, TypeScript, HTML/CSS (Sisi Klien); Python, Java, PHP, Node.js, Go (Sisi Server). | C#, C++, Java, Swift, Python, Rust. | Kotlin, Java (Android); Swift, Objective-C (iOS); Dart/JavaScript (Cross-Platform). |
| **Arsitektur** | Client-Server / Multi-tier (Frontend berjalan di peramban, Backend & Database berada di server jarak jauh). | Standalone / Monolitik / Thick-Client (Logika aplikasi dan antarmuka berjalan langsung di komputer lokal). | Client-Server / Tiered-Mobile (Komponen native berjalan di perangkat lokal dan berkomunikasi via API/REST ke server). |
| **Cara Distribusi** | Hosting di server web; diakses langsung oleh pengguna melalui alamat URL di web browser tanpa perlu instalasi. | Melalui installer (.exe, .dmg, .deb) yang diunduh dari situs web atau dipasang lewat toko aplikasi desktop (Microsoft Store, Mac App Store). | Diunduh dan diinstal melalui toko aplikasi resmi (Google Play Store, Apple App Store) atau melalui berkas instalasi (APK/IPA). |
| **Keunggulan** | - mudah diakses lintas platform tanpa perlu proses instalasi.<br>- Pembaruan aplikasi dilakukan di server sehingga pengguna selalu mendapatkan versi terbaru secara otomatis.<br>- Tidak memakan ruang penyimpanan lokal yang besar. | - Performa sangat tinggi karena mengeksekusi perintah langsung di perangkat keras lokal.<br>- Dapat bekerja secara penuh secara luring (tanpa koneksi internet).<br>- Memiliki akses penuh ke sumber daya perangkat keras (CPU, GPU, memori). | - Sangat portabel dan mudah diakses di mana saja kapan saja.<br>- Memiliki integrasi mendalam dengan fitur perangkat smartphone (kamera, GPS, notifikasi push, sensor gerak).<br>- Antarmuka dioptimalkan untuk kustomisasi sentuhan (touchscreen). |
| **Keterbatasan** | - Sangat bergantung pada ketersediaan koneksi internet.<br>- Performa terbatas oleh kapabilitas browser.<br>- Akses ke perangkat keras lokal cukup terbatas demi alasan keamanan. | - Memerlukan instalasi dan pembaruan secara manual oleh pengguna di setiap perangkat.<br>- Pengembangan butuh effort lebih untuk mendukung kompatibilitas antar-sistem operasi (Windows, macOS, Linux).<br>- Penggunaan memori dan penyimpanan lokal lebih besar. | - Memiliki keterbatasan ruang layar dan kapasitas baterai.<br>- Proses publikasi aplikasi harus melewati aturan sertifikasi dan peninjauan ketat dari toko aplikasi.<br>- Fragmentasi perangkat (terutama di Android) menuntut penyesuaian khusus. |
| **Contoh Aplikasi** | Google Docs, Figma Web, Trello, Canva Web. | Microsoft Word, Adobe Photoshop, VS Code, Steam. | WhatsApp Mobile, Instagram, Gojek, Spotify Mobile. |

---


## Sumber Referensi

1. Johnson, T., & Seeling, P. (2014). *Desktop and mobile web page comparison.* IEEE Communications Magazine, 52(6), 144-151. https://ieeexplore.ieee.org/abstract/document/6894465
2. Pop, P. (2002/2006). Comparing Web Applications with Desktop Applications: An Empirical Study. http://www2.compute.dtu.dk/~paupo/publications/Pop2002aa-Comparing%20Web%20Applications%20wit-.pdf
3. Alsaid, M. A. M., et al. (2021). A Comparative Analysis of Mobile Application Development Approaches. https://www.paspk.org/wp-content/uploads/2021/08/ES-717.pdf
4.Rieger & Majchrzak (2019). Towards the definitive evaluation framework for cross-platform app development approaches. Journal of Systems and Software.https://www.wi.uni-muenster.de/publication/150522

## Refleksi
Dari ketiga platform yang dianalisis, platform Web adalah yang paling menarik bagi saya untuk dipelajari, terutama yang berkaitan dengan data science. Alasannya, web memungkinkan hasil pengolahan data ditampilkan dalam bentuk dashboard atau aplikasi interaktif yang bisa diakses lewat browser tanpa instalasi. Dengan begitu, hasil analisis lebih mudah dibagikan dan dipahami oleh orang yang tidak mengerti pemrograman. Saya juga tertarik karena teknologi web dapat dikombinasikan dengan bahasa yang umum di bidang data, seperti Python untuk pengolahan data dan JavaScript untuk visualisasinya.

Tantangan terbesar saat setup environment saat ini adalah karena saya masih baru menggunakan Git dan GitHub.Jadi saya sempat bingung dengan alurnya, mulai dari mengatur identitas Git, membuat repository, hingga melakukan clone dan segala macam nya lah yg ada di fitur github itu.

Rencana saya untuk mengatasinya adalah berlatih menggunakan Git secara rutin dengan membuat commit dan push pada proyek-proyek kecil. Saya juga akan membaca dokumentasi resmi dan pesan error dengan teliti sebelum mencari solusi, serta mencatat perintah-perintah penting agar tidak lupa.
