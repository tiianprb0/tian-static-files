
  // Pastikan objek `databases` sudah didefinisikan sebelum skrip ini dijalankan
  const databases = {
    generalInfo: {
      outlet: {
        firstOutlet: "Outlet pertama ESKA berada di Eska Nagoya Hill pada tahun 2008.",
        tagline: "Escape The Moment."
      },
      hotline: {
        platform: "WhatsApp",
        number: "08117799333",
        link: "https://wa.me/628117799333",
        verified: true
      },
      operatingHours: {
        wellness: {
          general: "Senin sampai Minggu dari jam 10 pagi sampai jam 10 malam.",
          specific: {
            eskaMarriott: "Minggu sampai Kamis sama, Jumat dan Sabtu jam 10 pagi sampai 12 malam.",
            grandEskaWellness: "Minggu sampai Kamis sama, Jumat dan Sabtu jam 10 pagi sampai 12 malam."
          }
        },
        clinic: "Jam 9 pagi sampai jam 8 malam."
      },
      instagram: {
        handle: "@eskaspabatam",
        link: "https://www.instagram.com/eskaspabatam"
      }
    },
    
    branches: {
      wellness: [
        {
          name: "Eska Nagoya Hill",
          address: "F3 & F3A, Ruko Nagoya Hill Block R4 No.F2, Lubuk Baja, Batam.",
          map: "https://maps.app.goo.gl/NHV32KMZmEheDHK4A?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Mega Mall",
          address: "Mega Mall Lantai 2 (Depan Cinema XXI)",
          map: "https://maps.app.goo.gl/bbReyzXdkhzxEFhc6?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Grand Batam Mall",
          address: "Kompleks Pertokoan Top 100",
          map: "https://maps.app.goo.gl/gh5sHZuqh3tt677B8?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Grand Eska Wellness",
          address: "Jalan Prambanan No. 1, Sungai Jodoh",
          map: "https://maps.app.goo.gl/yNMVTa7CQRx5Y4RC8?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Kepri Mall",
          address: "Kepri Mall No. 27-34",
          map: "https://maps.app.goo.gl/LityhsCTFYBPAwiN6?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Bayfront Mall",
          address: "Harbourbay Ferry Terminal Level 2, Harbour Bay Downtown",
          map: "https://maps.app.goo.gl/LtMhTLbcfMuHr5Lh8?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Marriott",
          address: "Marriott Hotel Level 5 - Harbour Bay Downtown",
          map: "https://maps.app.goo.gl/7vewh5WSKfNVvegYA?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Wyndham Panbil",
          address: "Jl. A Yani, Muka Kuning",
          map: "https://maps.app.goo.gl/9yb3JZ4L834eK7oN6?g_st=com.google.maps.preview.copy"
        }
      ],
      aestheticClinic: [
        {
          name: "Eska Aesthetic Clinic",
          map: "https://maps.app.goo.gl/8Qoh4Eddz9PJJ2wS8?g_st=com.google.maps.preview.copy"
        }
      ],
      hotel: [
        {
          name: "Grand Eska Hotel & Suites",
          address: "Jl. Prambanan No. 1, Sungai Jodoh, Batam",
          map: "https://maps.app.goo.gl/khsknk4pdUJeZYBE7?g_st=com.google.maps.preview.copy"
        },
        {
          name: "Eska Hotel",
          map: "https://maps.app.goo.gl/ueTP8WZ1remuxdMcA?g_st=com.google.maps.preview.copy"
        }
      ]
    },

    services: {
      massage: [
        "Foot Relax",
        "Foot SPA",
        "Relaxation Back Massage",
        "Aromatherapy Touch Massage",
        "Aromatic Candle Massage",
        "Sport Massage",
        "Holistic Massage",
        "Healing Stone Massage",
        "Slimming-Fat Burn Massage",
        "Detox Lymphatic Massage with Infrared Hot Blanket",
        "Body Scrub",
        "Body Wrap",
        "Hydrotherapy Bath"
      ],
      salon: [
        "Shampoo",
        "Blow Dry & Styling",
        "Hair Manicure",
        "Coloring",
        "Coloring Plus",
        "Highlight",
        "Rebonding / Straight Diamond",
        "Smoothing / Collagen Sculpting",
        "Curl Wave Perm",
        "Nano Japanese / Korean Perm"
      ],
      hairCare: [
        "4 Steps Hair Botox",
        "Keratin Care",
        "Anion Blue Nano Mist",
        "Organic Care"
      ],
      hairSpa: [
        "Hydratherapie Intense Moisture Cream",
        "Colorcaretherapie Protective Cream",
        "Scalptherapie Invigorating Balm"
      ],
      hairMask: [
        "Scalpure"
      ]
    },
    
    massageDetails: [
      {
        name: "Foot Relax",
        description: "Discover the joys of flex. The rejuvenating acupressure massage takes place with special care to the reflex points on the sole. A final warm towel wipe down is all you need to walk out on happier feet."
      },
      {
        name: "Foot SPA",
        description: "For the ultimate relaxation experience, combine the foot scrub with a foot massage! Foot scrubs can be used to rejuvenate the feet, enhance their look and feel, relieve pressure and pain, soothe achy feet, and help remove dead skin with natural ingredients."
      },
      {
        name: "Relaxation Back Massage",
        description: "Flowing strokes of this classic massage with clothes on provide express relaxation, soothe sore muscles, and relieve body tension."
      },
      {
        name: "Aromatherapy Touch Massage",
        description: "Select your favorite aromatherapy oil to pamper your senses and revitalize your mind and body. This sensuous, customized treat is especially effective in relieving aching joints and other symptoms of body and mental stress. A relaxing and de-stressing back massage, perfect for busy executives to revive the spirit."
      },
      {
        name: "Aromatic Candle Massage",
        description: "This is a unique healing massage combined with our special candle, which is a great moisturizer. It works gently yet deeply into the important parts of the massage, helping reduce cellulite and tension. This massage rejuvenates the mind, body, and spirit by removing energy blockages and opening energy pathways within the body."
      },
      {
        name: "Sport Massage",
        description: "Our Sport Massage aims to bring healing and balance to one’s well-being. An exceptional incorporation of massage techniques rooted in traditional Thai massage, point pressure, compression, and muscle stretching is applied using rhythmic movements to boost energy fields and relieve mental stress."
      },
      {
        name: "Holistic Massage",
        description: "Be comforted by the therapeutic properties of the Compress Ball for ultimate relaxation. This intensive therapy relieves pains and aches with ease, promotes circulation, and normalizes metabolic processes."
      },
      {
        name: "Healing Stone Massage",
        description: "A relaxing treatment for relief from stiffness. Smooth, warmed stones glide across your body in long, flowing strokes before being placed on the body’s various energy points. The heat penetrates deep within the muscles to melt away tension and restore energy balance."
      },
      {
        name: "Slimming-Fat Burn Massage",
        description: "This light pressure massage is ideal for those interested in slimming down. You will undergo multiple slimming massage techniques, from rubbing and massaging to slapping and palper rouler. These techniques aim to rupture and disrupt pockets of fat, resulting in a reduction in the appearance of “pitted” cellulite, complemented by fat burn or collagen drinks."
      },
      {
        name: "Detox Lymphatic Massage with Infrared Hot Blanket",
        description: "A detoxifying massage can help purge the body of toxins, promoting both physical and mental well-being. This massage provides maximum results, and with regular sessions, you can look forward to a stronger immune system, better circulation, and less stress!"
      }
    ],
    
    packages: {
      allIn: "Mencakup paket 2 in 1 hingga 6 in 1",
      express: [
        "Hair Foot Spa",
        "Head to Toe",
        "Head to Pretty Nail",
        "Head to Shiny Nails"
      ],
      doubleSpaIndulgences: [
        "True Transformation for TWO",
        "Senses of Fragrance for TWO",
        "Keep Young Detox Spa for TWO"
      ],
      description: "Setiap paket dirancang untuk memberikan pengalaman perawatan yang lengkap dan memuaskan bagi pelanggan kami."
    },
    
    promo: {
      promoList: [
        {
          name: "Trio Pampers",
          description: "Body scrub, aromatherapy touch massage, dan body masque mulai dari IDR 599.000."
        },
        {
          name: "Lifetime Membership",
          description: "Diskon 20% semua treatment (Senin - Kamis) khusus member."
        },
        {
          name: "Unlimited Weekday Visit",
          description: "Akses tanpa batas ke semua treatment hanya IDR 18.000.000 selama 6 bulan."
        },
        {
          name: "ESKA CASH",
          description: "Promo tidak dapat digabungkan."
        }
      ]
    },
    
    menu: {
      eskaNagoyaHill: "https://drive.google.com/file/d/1W9xIoP7WsSxgARkZ6Nltw2E20JImg8ZE/view?usp=sharing",
      eskaMegaMall: "https://drive.google.com/file/d/1W9xIoP7WsSxgARkZ6Nltw2E20JImg8ZE/view?usp=sharing", // Sesuaikan link sebenarnya
      eskaGrandBatamMall: "https://drive.google.com/file/d/1W9xIoP7WsSxgARkZ6Nltw2E20JImg8ZE/view?usp=sharing", // Placeholder
      eskaKepriMall: "https://drive.google.com/file/d/19fmbKAN7XUcZobX3fp11CLEoYAnNskbB/view?usp=sharing",
      eskaBayfrontMall: "https://drive.google.com/file/d/1O87a_4t4UKq-y-NMlueD6Rr-Z0bd76W4/view?usp=share_link",
      grandEskaWellness: "https://drive.google.com/file/d/15jHO4kD3hveKR5JXWjY5vz3WsjuNXDNA/view",
      eskaWyndham: "https://drive.google.com/file/d/1GRpwmKgjlCb7MfEK2ABQr6bWGc31OndY/view?usp=sharing",
      eskaMarriott: "https://drive.google.com/file/d/15jHO4kD3hveKR5JXWjY5vz3WsjuNXDNA/view"
    },
    
    hotel: {
      grandEskaHotel: {
        description: "Grand ESKA Hotel, hotel bintang 4 yang terletak di Batam, menawarkan berbagai fasilitas terbaik untuk memenuhi setiap kebutuhan tamu. Fasilitas tersebut meliputi lounge yang bergaya, kolam renang yang menyegarkan, restoran yang istimewa, gym yang dilengkapi dengan peralatan lengkap, serta Starbucks untuk menikmati kopi favorit Anda.",
        facilities: [
          "Restaurant",
          "Wi-Fi",
          "Jogging Track",
          "24 Hours Security",
          "Swimming Pool",
          "Fitness Center",
          "Angel Lounge",
          "ESKA Wellness Massage & Salon",
          "Meeting Room",
          "Shuttle Bus"
        ],
        roomTypes: [
          "Escape Room",
          "Escape Deluxe Balcony",
          "Escape View",
          "Suite 1 Bedroom Balcony",
          "Suite 2 Bedroom Balcony",
          "Suite 3 Bedroom Balcony",
          "Romantic Suite",
          "Executive Suite"
        ],
        distanceFromPublicPlaces: {
          grandBatamMall: "9 menit",
          nagoyaHillShoppingMall: "4 menit",
          harbourBayFerryTerminal: "6 menit",
          batamCenterFerryTerminal: "15 menit"
        }
      },
      eskaHotel: {
        description: "Eska Hotel tidak memiliki kolam renang. Ada restaurant di rooftop bernama Roof Garden, cocok untuk tempat acara, meeting, atau sekadar melihat pemandangan.",
        facilities: [
          "Roof Garden",
          "Meeting Room",
          "Shuttle Bus"
        ],
        roomTypes: [
          "Wellness Room",
          "Deluxe Room",
          "Family Room",
          "Superior Room"
        ],
        distanceFromPublicPlaces: {
          // Tambahkan jarak dari tempat umum jika diperlukan
        }
      }
    },

    prompts: {
      generalInfo: `
      Saat memberikan informasi umum:
      1. Tidak perlu kalimat penutup mengarah ke instagram atau hotline
      2. Jangan menambahkan atau mengubah informasi yang ada
      3. Berikan link atau kontak yang relevan jika tersedia
      4. Arahkan ke hotline hanya jika informasi tidak tersedia di database
      `,
      branches: `
      Saat memberikan informasi cabang:
      1. Sebutkan cabang wellness saja yang relevan berdasarkan pertanyaan pengguna
      2. Sertakan alamat dan link peta jika tersedia
      3. Jangan menambahkan cabang yang tidak ada di database
      4. Jangan meyebutkan cabang hotel jika tidak ditanya
      `,
      services: `
      Saat memberikan informasi layanan:
      1. Sebutkan massage atau treatment yang relevan berdasarkan pertanyaan pengguna
      2. Jangan menambahkan massage atau treatment yang tidak ada di database
      3. Jika diminta, berikan detail lebih lanjut tentang massage atau treatment tertentu
      `,
      packages: `
      Saat memberikan informasi paket:
      1. Sebutkan semua paket yang relevan berdasarkan pertanyaan pengguna
      2. Sertakan deskripsi singkat jika diminta
      3. Jangan menambahkan paket yang tidak ada di database
      `,
      promo: `
      Saat memberikan informasi promo:
      1. Sebutkan semua promo yang relevan berdasarkan pertanyaan pengguna
      2. Sertakan deskripsi dan syarat jika diperlukan
      3. Jangan menambahkan promo yang tidak ada di database
      `,
      menu: `
      Saat memberikan informasi menu:
      1. Sebutkan menu berdasarkan outlet yang disebutkan dalam pertanyaan
      2. Sertakan link jika tersedia
      3. Jangan menambahkan menu yang tidak ada di database
      4. jika pengguna tidak menyebutkan branch mana, tanya kembali ke pengguna
      5. jika ditanya harga atau biaya jangan menyebutkan harga, beri link menu
      `,
      hotel: `
      Saat memberikan informasi hotel:
      1. Sebutkan semua hotel yang relevan berdasarkan pertanyaan pengguna
      2. Sertakan deskripsi, fasilitas, tipe kamar, dan jarak dari tempat umum jika tersedia
      3. Jangan menambahkan hotel yang tidak ada di database
      `,
      operatingHours: `
      Saat memberikan informasi jam operasional:
      1. Sebutkan jam operasional sesuai dengan cabang dan hari yang ditanyakan
      2. Gunakan informasi spesifik jika tersedia
      3. Jangan menambahkan jam operasional yang tidak ada di database
      4. sebelum menjawab, kamu bisa menggunakan sistem kamu untuk mengetahui hari ini hari apa untuk menjawab
      `
    }
  };
  
// Daftar Kata Kunci untuk Deteksi Topik dengan Pemetaan Spesifik
const keywords = {
  operatingHours: { 
    keys: [
      'jam buka', 'jam operasional', 'jam kerja', 'waktu buka', 'waktu operasional',
      // Kata Kunci Berhubungan/Sinonim
      'buka', 'waktu buka', 'jam layanan', 'jam pelayanan', 'jadwal buka',
      'hari buka', 'jam tutup', 'jam operasional harian', 'jam operasional minggu',
      'jam kerja harian', 'jam pelayanan kami', 'jam operasional kami'
    ],
    priority: 0,
    databasePath: 'operatingHours'
  },
  services: { 
    keys: [
      // Kata Kunci Asli
      'services', 'layanan', 'treatment', 'pijatan', 'terapi', 'layanan kami', 'pelayanan',
      // Kata Kunci Baru dari kategori salon
      'shampoo', 'blow dry & styling', 'hair manicure', 'coloring', 'coloring plus', 
      'highlight', 'rebonding / straight diamond', 'smoothing / collagen sculpting', 
      'curl wave perm', 'nano japanese / korean perm',
      // Kata Kunci Baru dari kategori hairCare
      '4 steps hair botox', 'keratin care', 'anion blue nano mist', 'organic care',
      // Kata Kunci Baru dari kategori hairSpa
      'hydratherapie intense moisture cream', 'colorcaretherapie protective cream', 
      'scalptherapie invigorating balm',
      // Kata Kunci Baru dari kategori hairMask
      'scalpure',
      // Kata Kunci Berhubungan/Sinonim
      'cuci rambut', 'pencucian rambut', 'styling rambut', 'perawatan rambut', 
      'perawatan salon', 'manicure rambut', 'warna rambut', 'highlight rambut', 
      'perataan rambut', 'smoothing rambut', 'permen rambut', 'perawatan keratin', 
      'botox rambut', 'mist nano anion', 'perawatan organik', 'krim kelembapan intens', 
      'krim pelindung colorcare', 'balm penguat kulit kepala', 'masker rambut', 
      'perawatan scalp', 'hydrotherapy', 'perawatan hidrologi'
    ],
    priority: 1,
    databasePath: 'services'
  },
  packages: { 
    keys: [
      'packages', 'paket', 'bundling', 'paket kami', 'paket spesial',
      // Kata Kunci Berhubungan/Sinonim
      'promo paket', 'paket bundling', 'paket layanan', 'paket harga', 'paket diskon',
      'paket terjangkau', 'paket eksklusif', 'paket lengkap', 'paket hemat',
      'bundling layanan', 'bundling harga', 'bundling spesial'
    ],
    priority: 2,
    databasePath: 'packages' // Menambahkan kata kunci spesifik
  },
  promo: { 
    keys: [
      'promo', 'offers', 'eska promo', 'discount', 'disc', 'diskon', 'diskon spesial', 'penawaran terbatas',
      // Kata Kunci Berhubungan/Sinonim
      'penawaran', 'diskon besar', 'promo spesial', 'flash sale', 'penjualan cepat',
      'diskon waktu terbatas', 'promo akhir tahun', 'penawaran eksklusif', 'diskon khusus',
      'obral', 'diskon member', 'diskon loyalitas', 'promo bundling', 'promo paket'
    ],
    priority: 3,
    databasePath: 'promo'
  },
  menu: { 
    keys: [
      'harga', 'menu', 'pricelist', 'price list', 'catalogue', 'katalog', 'biaya',
      // Kata Kunci Berhubungan/Sinonim
      'daftar harga', 'harga layanan', 'harga paket', 'harga promo', 'daftar menu',
      'menu layanan', 'harga terjangkau', 'biaya layanan', 'biaya paket', 'daftar biaya',
      'menu harga', 'harga terperinci', 'harga lengkap', 'katalog harga'
    ],
    priority: 4,
    databasePath: 'menu'
  },
  massage: { 
    keys: [
      // Kata Kunci Asli
      'foot relax', 'foot spa', 'relaxation back massage', 'aromatherapy touch massage',
      'aromatic candle massage', 'sport massage', 'holistic massage', 'healing stone massage',
      'slimming-fat burn massage', 'detox lymphatic massage with infrared hot blanket',
      // Kata Kunci Baru
      'body scrub', 'body wrap', 'hydrotherapy bath',
      // Kata Kunci Berhubungan/Sinonim
      'exfoliation', 'spa treatment', 'infrared therapy', 'lymphatic drainage',
      'detox treatment', 'thermal blanket', 'fat burning massage', 'lymph detox',
      'aromatherapy massage', 'candle therapy', 'hot stone massage', 'lymphatic massage'
    ],
    priority: 5,
    databasePath: 'services' // Diubah untuk mencerminkan subkategori
  },
  hotel: { 
    keys: [
      'hotel', 'akomodasi', 'kamar', 'suite', 'room', 'penginapan', 'grand eska hotel', 'eska hotel',
      // Kata Kunci Berhubungan/Sinonim
      'penginapan mewah', 'kamar hotel', 'suite hotel', 'reservasi kamar', 'booking hotel',
      'penginapan nyaman', 'hotel terdekat', 'hotel bintang lima', 'akomodasi hotel',
      'kamar suite', 'room booking', 'suite room', 'penginapan keluarga', 'hotel pusat kota',
      'hotel dekat bandara', 'hotel eksklusif', 'hotel butik', 'hotel economy'
    ],
    priority: 6,
    databasePath: 'hotel'
  },
  branches: { // Menambahkan kategori branches
    keys: [
      'branch', 'cabang', 'lokasi', 'lokasi cabang', 'alamat cabang', 'outlet', 'nh', 'mm', 'gbm', 'kpm', 'bfm', 'ges', 'wyndham',
      // Kata Kunci Berhubungan/Sinonim
      'cabang terdekat', 'lokasi outlet', 'alamat lokasi', 'cabang kami', 'outlet terdekat',
      'lokasi kami', 'alamat kami', 'outlet lokasi', 'cabang baru', 'lokasi baru',
      'penambahan cabang', 'cabang pusat', 'cabang regional', 'lokasi strategis',
      'outlet utama', 'outlet tambahan', 'cabang cabang', 'lokasi layanan'
    ],
    priority: 7,
    databasePath: 'branches'
  }
};


  // Riwayat Chat (Menyimpan dua riwayat terakhir)
  let chatHistory = [];

  // Referensi Elemen HTML
  const chatWindow = document.getElementById('chat-window');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const chatbotButton = document.getElementById('chatbot-button');
  const chatbotOverlay = document.getElementById('chatbot-overlay');
  const closeChatbot = document.getElementById('close-chatbot');
  const importantMessageButton = document.getElementById('important-message-button');
  const tooltip = document.querySelector('.tooltip');
  const importantMessageContainer = document.querySelector('.important-message-container');

  // Flag untuk Menampilkan Pesan Awal Sekali Saja
  let initialMessageShown = false;

  // Fungsi untuk Menambahkan Pesan ke Chat Window
  function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    if (sender === 'bot') {
      const avatar = document.createElement('div');
      avatar.classList.add('avatar');
      messageElement.appendChild(avatar);

      const content = document.createElement('div');
      content.classList.add('content');

      const textElement = document.createElement('div');
      textElement.classList.add('text');
      textElement.innerHTML = formatMessage(message);
      content.appendChild(textElement);

      // Tambahkan Tombol untuk Tautan di Pesan Bot
      const linkMatches = message.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g);
      if (linkMatches) {
        linkMatches.forEach(linkMarkdown => {
          const linkMatch = linkMarkdown.match(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/);
          if (linkMatch) {
            const linkText = linkMatch[1];
            const linkURL = linkMatch[2];
            const button = document.createElement('button');
            button.classList.add('message-button');
            button.textContent = linkText;
            button.onclick = () => {
              window.open(linkURL, '_blank');
            };
            content.appendChild(button);
          }
        });
      }

      messageElement.appendChild(content);
    } else {
      const textElement = document.createElement('div');
      textElement.classList.add('text');
      textElement.textContent = message;
      messageElement.appendChild(textElement);
    }

    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Fungsi untuk Memformat Pesan
  function formatMessage(message) {
    let formatted = message;

    // Mengubah teks Markdown sederhana menjadi HTML
    // Mengubah paragraf
    formatted = formatted.replace(/(?:\r\n|\r|\n){2,}/g, '</p><p>');
    formatted = `<p>${formatted}</p>`;

    // Mengubah list (- item) menjadi <ul><li>
    formatted = formatted.replace(/<p>- (.+?)<\/p>/g, '<ul><li>$1</li></ul>');
    formatted = formatted.replace(/<\/ul>\s*<ul>/g, '');

    // Mengubah teks tebal **text** menjadi <strong>text</strong>
    formatted = formatted.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Mengubah teks miring *text* menjadi <em>text</em>
    formatted = formatted.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Mengubah tautan Markdown [text](url) menjadi <a href="url" target="_blank" rel="noopener noreferrer">$1</a>
    formatted = formatted.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    return formatted;
  }

  // Fungsi untuk Mendeteksi Topik Pertanyaan dengan Prioritas
  function detectTopic(question, maxTopics = 3) {
    const lowerCaseQuestion = question.toLowerCase();
    const detectedTopics = [];

    for (let [topic, data] of Object.entries(keywords)) {
      for (let key of data.keys) {
        if (lowerCaseQuestion.includes(key.toLowerCase())) {
          // Hindari duplikasi topik
          if (!detectedTopics.some(t => t.topic === topic)) {
            detectedTopics.push({ topic, priority: data.priority });
          }
          break; // Jika salah satu kata kunci cocok, lanjut ke topik berikutnya
        }
      }
    }

    // Mengurutkan topik berdasarkan prioritas (semakin kecil nilainya, semakin tinggi prioritasnya)
    detectedTopics.sort((a, b) => a.priority - b.priority);

    // Mengambil topik dengan prioritas tertinggi hingga batas maksimal
    const limitedTopics = detectedTopics.slice(0, maxTopics).map(item => item.topic);

    return limitedTopics;
  }

  // Fungsi untuk Mengambil Data yang Relevan Berdasarkan Topik
  function getRelevantData(detectedTopics, userQuestion) {
    let relevantData = '';

    detectedTopics.forEach(topic => {
      const keywordData = keywords[topic];
      if (keywordData && databases[keywordData.databasePath]) {
        switch (topic) {
          case 'massage':
            // Cari jenis pijat yang disebutkan dalam pertanyaan
            const massageType = databases.massageDetails.find(massage => 
              userQuestion.toLowerCase().includes(massage.name.toLowerCase())
            );
            if (massageType) {
              relevantData += `**${massageType.name}**\n${massageType.description}\n\n`;
            } else {
              // Jika tidak ada jenis pijat spesifik, tampilkan semua jenis pijat
              relevantData += `**Jenis Pijat Kami:**\n`;
              databases.services.massage.forEach(massage => {
                relevantData += `- ${massage}\n`;
              });
              relevantData += `\n`;
            }
            break;

          case 'menu':
            // Tampilkan menu berdasarkan outlet yang disebutkan dalam pertanyaan
            const outletsMentioned = [];
            Object.keys(databases.branches).forEach(category => {
              databases.branches[category].forEach(branch => {
                if (userQuestion.toLowerCase().includes(branch.name.toLowerCase())) {
                  outletsMentioned.push(branch.name);
                }
              });
            });

            if (outletsMentioned.length > 0) {
              outletsMentioned.forEach(outletName => {
                // Cari key menu berdasarkan nama outlet
                const menuKey = Object.keys(databases.menu).find(key => 
                  key.toLowerCase().includes(outletName.toLowerCase().replace(/ /g, ''))
                );
                if (menuKey && databases.menu[menuKey]) {
                  relevantData += `**Menu ${outletName}:**\n[View Menu](${databases.menu[menuKey]})\n\n`;
                }
              });
            } else {
              // Jika outlet tidak disebutkan, tampilkan semua menu
              relevantData += `**Menu Kami:**\n`;
              for (const [outlet, link] of Object.entries(databases.menu)) {
                relevantData += `- ${capitalizeWords(outlet.replace(/([A-Z])/g, ' $1').trim())}: [View Menu](${link})\n`;
              }
              relevantData += `\n`;
            }
            break;

          case 'promo':
            // Tampilkan semua promo
            relevantData += `**Promo:**\n`;
            databases.promo.promoList.forEach(promo => {
              relevantData += `- **${promo.name}**: ${promo.description}\n`;
            });
            relevantData += `\n`;
            break;

          case 'services':
            // Tampilkan semua layanan selain massage
            relevantData += `**Layanan Kami:**\n`;
            for (const [serviceCategory, servicesList] of Object.entries(databases.services)) {
              if (serviceCategory !== 'massage') { // Menghindari duplikasi jika 'massage' ditangani terpisah
                relevantData += `- **${capitalizeWords(serviceCategory)}:**\n`;
                servicesList.forEach(service => {
                  relevantData += `  - ${service}\n`;
                });
              }
            }
            // Tambahkan layanan massage
            relevantData += `- **Massage:**\n`;
            databases.services.massage.forEach(service => {
              relevantData += `  - ${service}\n`;
            });
            relevantData += `\n`;
            break;

          case 'hotel':
            // Tampilkan informasi hotel berdasarkan yang disebutkan dalam pertanyaan
            const hotelsMentioned = databases.hotelFilter(userQuestion);
    
            if (hotelsMentioned.length > 0) {
              hotelsMentioned.forEach(hotelKey => {
                if (databases.hotel[hotelKey]) {
                  const hotelInfo = databases.hotel[hotelKey];
                  relevantData += `**${capitalizeWords(hotelKey.replace(/eska/g, 'Eska '))}**\n`;
                  relevantData += `${hotelInfo.description}\n\n`;
                  relevantData += `**Fasilitas:** ${hotelInfo.facilities.join(', ')}\n\n`;
                  relevantData += `**Tipe Kamar:** ${hotelInfo.roomTypes.join(', ')}\n\n`;
                  if (Object.keys(hotelInfo.distanceFromPublicPlaces).length > 0) {
                    relevantData += `**Jarak dari Tempat Umum:**\n`;
                    for (const [place, distance] of Object.entries(hotelInfo.distanceFromPublicPlaces)) {
                      relevantData += `- ${capitalizeWords(place.replace(/([A-Z])/g, ' $1').trim())}: ${distance}\n`;
                    }
                    relevantData += `\n`;
                  }
                }
              });
            } else {
              // Jika hotel tidak disebutkan, tampilkan semua hotel
              relevantData += `**Hotel Kami:**\n`;
              for (const [hotelKey, hotelInfo] of Object.entries(databases.hotel)) {
                relevantData += `- **${capitalizeWords(hotelKey.replace(/eska/g, 'Eska '))}**:\n`;
                relevantData += `  ${hotelInfo.description}\n`;
                relevantData += `  **Fasilitas:** ${hotelInfo.facilities.join(', ')}\n`;
                relevantData += `  **Tipe Kamar:** ${hotelInfo.roomTypes.join(', ')}\n`;
                if (Object.keys(hotelInfo.distanceFromPublicPlaces).length > 0) {
                  relevantData += `  **Jarak dari Tempat Umum:**\n`;
                  for (const [place, distance] of Object.entries(hotelInfo.distanceFromPublicPlaces)) {
                    relevantData += `    - ${capitalizeWords(place.replace(/([A-Z])/g, ' $1').trim())}: ${distance}\n`;
                  }
                }
                relevantData += `\n`;
              }
            }
            break;

          case 'operatingHours':
            // Menangani pertanyaan tentang jam operasional
            // Cari cabang yang disebutkan
            let branchName = '';
            databases.branches.wellness.forEach(branch => {
              if (userQuestion.toLowerCase().includes(branch.name.toLowerCase())) {
                branchName = branch.name;
              }
            });

            // Jika cabang ditemukan
            if (branchName) {
              // Cari informasi jam operasional spesifik
              const operatingHours = databases.generalInfo.operatingHours.wellness.specific;
              const branchKey = Object.keys(operatingHours).find(key => key.toLowerCase() === branchName.toLowerCase().replace(/ /g, ''));
              
              if (branchKey && operatingHours[branchKey]) {
                // Cari hari yang disebutkan
                const days = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
                let dayFound = '';
                days.forEach(day => {
                  if (userQuestion.toLowerCase().includes(day)) {
                    dayFound = capitalizeWords(day);
                  }
                });

                if (dayFound) {
                  // Extract operating hours for the specific day
                  let hours = '';
                  if (['Jumat', 'Sabtu'].includes(dayFound)) {
                    hours = operatingHours[branchKey].split('Jumat dan Sabtu ')[1];
                  } else {
                    hours = operatingHours[branchKey].split('Minggu sampai Kamis sama, ')[1];
                  }

                  if (hours) {
                    relevantData += `**Jam Buka ${branchName} pada hari ${dayFound}:** ${hours}\n\n`;
                  } else {
                    // Jika tidak ada jam operasional spesifik, gunakan jam umum
                    relevantData += `**Jam Buka ${branchName} pada hari ${dayFound}:** ${databases.generalInfo.operatingHours.wellness.general}\n\n`;
                  }
                } else {
                  // Jika hari tidak disebutkan, tampilkan jam umum
                  relevantData += `**Jam Buka ${branchName}:** ${operatingHours[branchKey]}\n\n`;
                }
              } else {
                // Jika cabang tidak ditemukan di jam operasional spesifik, gunakan jam umum
                relevantData += `**Jam Buka ${branchName}:** ${databases.generalInfo.operatingHours.wellness.general}\n\n`;
              }
            } else {
              // Jika cabang tidak disebutkan, tampilkan jam operasional umum
              relevantData += `**Jam Operasional Kami:**\n${databases.generalInfo.operatingHours.wellness.general}\n\n`;
            }
            break;

          default:
            break;
        }
      }
    });

    return relevantData;
  }

  // Tambahkan metode untuk memfilter hotel berdasarkan pertanyaan pengguna
  databases.hotelFilter = function(userQuestion) {
    const lowerCaseQuestion = userQuestion.toLowerCase();
    return Object.keys(this).filter(hotelKey => 
      lowerCaseQuestion.includes(hotelKey.replace('eska', '').toLowerCase())
    );
  }

  // Fungsi untuk Menambahkan Data ke Prompt
  function buildPrompt(userQuestion, detectedTopics) {
    let languageText = getLanguageText(); // Menangkap teks bahasa yang sesuai
    let prompt = `Kamu atau nama kamu adalah EVA (Eska Virtual Assistant), asisten bot andal dan ramah dengan bahasa ${languageText} sebagai bahasa utama yang bertugas menjawab pertanyaan customer berdasarkan informasi berikut:\n\n`;

    // Sertakan Informasi Umum
    prompt += `${databases.generalInfo.outlet.firstOutlet} Memiliki tagline "${databases.generalInfo.outlet.tagline}".\n\n`;
    prompt += `Hotline berada di ${databases.generalInfo.hotline.platform} dengan nomor ${databases.generalInfo.hotline.number} (${databases.generalInfo.hotline.link}) yang sudah verified.\n\n`;
    prompt += `Instagram: ${databases.generalInfo.instagram.handle} (${databases.generalInfo.instagram.link})\n\n`;

    // Sertakan Informasi Cabang
    prompt += `**Cabang Kami:**\n`;
    Object.keys(databases.branches).forEach(category => {
      // Pastikan hanya kategori yang berisi array yang diiterasi
      if (Array.isArray(databases.branches[category])) {
        databases.branches[category].forEach(branch => {
          prompt += `- **${branch.name}**: ${branch.address ? branch.address : 'Alamat tidak tersedia'} [Lihat Peta](${branch.map})\n`;
        });
      }
    });
    prompt += `\n`;

    // Sertakan Instruksi Prompt untuk Topik yang Relevan
    detectedTopics.forEach(topic => {
      if (databases.prompts[topic]) {
        prompt += `${databases.prompts[topic]}\n\n`;
      }
    });

    // Sertakan Database Berdasarkan Topik yang Dideteksi dengan Filter
    const relevantData = getRelevantData(detectedTopics, userQuestion);
    prompt += `${relevantData}\n`;

    // Menambahkan Riwayat Chat
    if (chatHistory.length > 0) {
      prompt += `Riwayat Chat Terakhir:\n`;
      chatHistory.forEach((chat, index) => {
        prompt += `${index + 1}. Customer: ${chat.user}\n   Eva Bot: ${chat.bot}\n`;
      });
      prompt += `\n`;
    }

    // Menambahkan Pertanyaan Pengguna
    prompt += `Pertanyaan Customer: ${userQuestion}\n\n`;

    // Instruksi Akhir dengan Pengaturan Tambahan
    prompt += `Jangan mulai dengan sapaan. Jawab singkat, sesuai konteks. jika ditanya treatment atau massage, sebutkan saja tanpa keterangan kecuali diminta. Jangan menambahkan treatment sendiri. Jika ada link, sertakan. Buat paragraf baru setiap 3 kalimat.

Selalu gunakan bahasa ${languageText} untuk menjawab. Jika pertanyaannya tidak jelas, minta penjelasan detail tanpa asumsi. Jangan terjemahkan atau ubah nama treatment, promo.

Tidak perlu mengarahkan ke hotline, arahkan hanya jika relevan. EVA tidak menerima pemesanan.`;

    return prompt;
  }

  // Fungsi untuk Mengirim Permintaan ke API dengan Metode GET
  async function sendToAPI(text, prompt) { // <-- Diperbarui untuk menerima dua parameter
    const apiUrlPrimary = 'https://apidl.asepharyana.cloud/api/ai/v2/chatgpt'; // <-- API Utama Baru
    const apiUrlBackup = 'https://apidl.asepharyana.cloud/api/ai/meta-llama'; // <-- API Cadangan Baru

    // Encode prompt dan text untuk URL
    const encodedText = encodeURIComponent(text);
    const encodedPrompt = encodeURIComponent(prompt);

    try {
      const response = await fetch(`${apiUrlPrimary}?text=${encodedText}&prompt=${encodedPrompt}`, { // <-- Menambahkan parameter prompt
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('API Primary Error');
      }

      const data = await response.json();
      return sanitizeHTML(data.response); // <-- Sanitasi HTML sebelum mengembalikan
    } catch (error) {
      console.warn('Primary API gagal, mencoba Backup API.');

      try {
        const responseBackup = await fetch(`${apiUrlBackup}?text=${encodedText}`, { // <-- Backup menggunakan hanya text
          method: 'GET',
          headers: {
            'accept': 'application/json'
          }
        });

        if (!responseBackup.ok) {
          throw new Error('API Backup juga gagal.');
        }

        const dataBackup = await responseBackup.json();
        return sanitizeHTML(dataBackup.response); // <-- Sanitasi HTML sebelum mengembalikan
      } catch (backupError) {
        console.error('Backup API juga gagal:', backupError);
        return 'Maaf, terjadi kesalahan dalam memproses permintaan Anda. Silakan coba lagi nanti.';
      }
    }
  }

  // Fungsi untuk Menampilkan Loading Animation
  function showLoading() {
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('message', 'bot', 'loading');

    // Avatar untuk Bot
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    loadingElement.appendChild(avatar);

    // Content Container untuk Loading
    const content = document.createElement('div');
    content.classList.add('content');

    // Konten Loading
    const textElement = document.createElement('div');
    textElement.classList.add('text', 'loading');
    textElement.innerHTML = `
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    `;
    content.appendChild(textElement);

    loadingElement.appendChild(content);
    chatWindow.appendChild(loadingElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return loadingElement;
  }

  // Fungsi untuk Menghapus Loading Animation
  function removeLoading(loadingElement) {
    if (loadingElement) {
      chatWindow.removeChild(loadingElement);
    }
  }

  // Fungsi untuk Menampilkan Pesan Awal
  function showInitialMessage() {
    if (!initialMessageShown) {
      const language = getLanguageText();
      if (language === 'Indonesia') {
        addMessage('bot', 'Hai, Salam Hangat dari Eska Group! Silakan beri tahu kami bagaimana kami dapat membantu Anda.');
      } else {
        addMessage('bot', 'Hi, Warmest Greetings from Eska Group! Please let us know how may we assist you?');
      }
      initialMessageShown = true;
    }
  }

  // Fungsi untuk Sanitasi HTML (Mencegah XSS)
  function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.innerHTML = str;

    // Menghapus semua elemen yang tidak diizinkan
    const allowedTags = ['P', 'UL', 'LI', 'STRONG', 'EM', 'A'];
    const elements = temp.querySelectorAll('*');

    elements.forEach(el => {
      if (!allowedTags.includes(el.tagName)) {
        el.remove();
      } else {
        // Hanya mengizinkan atribut tertentu
        const allowedAttributes = {
          'A': ['href', 'target', 'rel']
        };

        // Hapus atribut yang tidak diizinkan
        Array.from(el.attributes).forEach(attr => {
          if (!allowedAttributes[el.tagName] || !allowedAttributes[el.tagName].includes(attr.name)) {
            el.removeAttribute(attr.name);
          }
        });

        // Pastikan link aman
        if (el.tagName === 'A') {
          const href = el.getAttribute('href');
          if (!href.startsWith('http://') && !href.startsWith('https://')) {
            el.removeAttribute('href');
          }
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      }
    });

    return temp.innerHTML;
  }

  // Fungsi Utama untuk Menangani Pengiriman Pesan dengan Caching dan Time-Based Expiration
  async function handleSendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    addMessage('user', userMessage);
    userInput.value = '';

    // Normalisasi Pertanyaan (misalnya, mengubah ke huruf kecil)
    const normalizedMessage = userMessage.toLowerCase();

    // Cek Cache
    const cachedResponse = responseCache.get(normalizedMessage);
    if (cachedResponse) {
      addMessage('bot', cachedResponse);
      return;
    }

    // Deteksi Topik Pertanyaan dengan Pembatasan
    const detectedTopics = detectTopic(userMessage, 3); // Misalnya, batasi ke 3 topik

    // Bangun Prompt dengan Informasi yang Relevan
    const prompt = buildPrompt(userMessage, detectedTopics);

    // Tambahkan ke Riwayat Chat
    chatHistory.push({ user: userMessage, bot: '...' });
    if (chatHistory.length > 2) {
      chatHistory.shift();
    }

    // Tampilkan Loading Animation
    const loadingElement = showLoading();

    // Kirim ke API dengan Parameter yang Benar
    const botResponse = await sendToAPI(userMessage, prompt); // <-- Memanggil dengan dua argumen

    // Update Riwayat Chat dengan Respons Bot
    chatHistory[chatHistory.length - 1].bot = botResponse;

    // Simpan ke Cache
    responseCache.set(normalizedMessage, botResponse);

    // Hapus Loading Animation
    removeLoading(loadingElement);

    // Tambahkan Pesan Bot ke Chat Window dengan Formatting
    addMessage('bot', botResponse);
  }

  // Fungsi Utilitas untuk Mengkapitalisasi Kata
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  // Fungsi untuk Menentukan Bahasa
  function getLanguageText() {
    const lang = navigator.language || navigator.userLanguage; 
    if (lang.startsWith('id')) {
      return 'Indonesia';
    } else {
      return 'English';
    }
  }

  // Cache dengan LRU dan Time-Based Expiration
  class LRUCache {
    constructor(limit = 100, ttl = 3600) { // ttl dalam detik
      this.cache = new Map();
      this.limit = limit;
      this.ttl = ttl; // Time To Live
    }

    get(key) {
      if (!this.cache.has(key)) return null;
      const { value, timestamp } = this.cache.get(key);
      const now = Date.now();
      if ((now - timestamp) / 1000 > this.ttl) {
        // Jika sudah kadaluarsa
        this.cache.delete(key);
        console.log(`Cache expired for key: ${key}`);
        return null;
      }
      // Mengatur ulang urutan entri
      this.cache.delete(key);
      this.cache.set(key, { value, timestamp });
      console.log(`Cache hit for key: ${key}`);
      return value;
    }

    set(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.limit) {
        // Menghapus entri pertama (terlama)
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
        console.log(`Cache evicted for key: ${firstKey}`);
      }
      this.cache.set(key, { value, timestamp: Date.now() });
      console.log(`Cache set for key: ${key}`);
    }
  }

  // Inisialisasi Cache dengan Batas 100 entri dan TTL 1 jam
  const responseCache = new LRUCache(100, 3600);

  // Event Listener untuk Tombol Kirim
  sendButton.addEventListener('click', handleSendMessage);

  // Event Listener untuk Enter Key
  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  });

  // Event Listener untuk Membuka Chatbot
  chatbotButton.addEventListener('click', function() {
    chatbotOverlay.style.display = 'flex';
    userInput.focus();
    // Menyembunyikan tombol chatbot saat popup dibuka
    chatbotButton.style.display = 'none';
    // Tampilkan pesan awal saat membuka chatbot
    showInitialMessage();
  });

  // Event Listener untuk Menutup Chatbot
  function closeChatbotFunction() {
    chatbotOverlay.style.display = 'none';
    // Menampilkan kembali tombol chatbot saat popup ditutup
    chatbotButton.style.display = 'flex';
    // Reset chat window dan riwayat jika diperlukan
    // chatWindow.innerHTML = '';
    // chatHistory = [];
    // initialMessageShown = false; // Jika ingin pesan awal muncul kembali saat dibuka
  }

  closeChatbot.addEventListener('click', closeChatbotFunction);

  // Menutup Chatbot ketika mengklik di luar container
  chatbotOverlay.addEventListener('click', function(e) {
    if (e.target === chatbotOverlay) {
      closeChatbotFunction();
    }
  });

  // Event Listener untuk Toggle Tooltip pada Click (untuk mobile)
  importantMessageButton.addEventListener('click', function(e) {
    e.stopPropagation(); // Mencegah event bubbling
    importantMessageContainer.classList.toggle('active');
  });

  // Menutup Tooltip saat mengklik di luar
  window.addEventListener('click', function(e) {
    if (!importantMessageContainer.contains(e.target)) {
      importantMessageContainer.classList.remove('active');
    }
  });

