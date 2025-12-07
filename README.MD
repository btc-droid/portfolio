# 🌐 Personal Portfolio Website

Portfolio website ini dibuat untuk menampilkan profil, skill, project, dan kontak secara profesional.  
Dibangun menggunakan **HTML, CSS, dan JavaScript**, serta mendukung **komponen reusable**, **responsive layout**, dan **animasi modern**.

---

## ✨ Features

- Responsive layout (mobile, tablet, desktop)
- Komponen header & footer reusable
- Halaman lengkap: Home, About, Projects, Contact
- Animasi scroll reveal
- Smooth scroll navigation
- Dynamic project rendering menggunakan JSON
- Clean & modern UI design

---

## 📁 Folder Structure

portfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── assets/
│ ├── css/
│ │ ├── style.css
│ │ └── responsive.css
│ │
│ ├── js/
│ │ ├── main.js
│ │ └── animation.js
│ │
│ ├── images/
│ │ └── (your images here)
│ │
│ └── fonts/
│ └── Poppins-Regular.ttf
│
├── components/
│ ├── header.html
│ ├── footer.html
│ └── project-card.html
│
├── data/
│ └── projects.json
│
└── README.md


---

## 🚀 How to Use

1. Clone repository ini:
   ```bash
   git clone https://github.com/yourname/portfolio.git

2. Pastikan struktur folder sama seperti contoh di atas.

3. Buka index.html di browser:

4. Klik 2x langsung, atau

5. Jalankan Live Server (VS Code):
   npm install -g live-server
   live-server

## ⚙️ Dynamic Projects (Optional)

Website ini mendukung project otomatis via JSON.
Data dapat diedit di:

data/projects.json

Untuk memuat project otomatis, gunakan script berikut:

fetch("data/projects.json")
  .then(res => res.json())
  .then(projects => {
      const container = document.querySelector(".project-container");

      projects.forEach(project => {
          container.innerHTML += `
              <div class="project-card fade-up">
                  <img src="${project.image}" alt="${project.title}">
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <a href="${project.link}" target="_blank" class="btn">View Project</a>
              </div>
          `;
      });
  });

## 🧩 Components

1. header.html → Navigation reusable

2. footer.html → Footer reusable

3. project-card.html → Template kartu project

4. projects.json → Data project dinamis

5. Dapat di-include menggunakan JS, PHP, atau template engine.

## 🎨 Customization

Kamu dapat mengubah:

1. Warna tema

2. Font

3. Animasi

4. Susunan halaman

5. Gambar & konten

6. Jika ingin versi dark mode, neon, glassmorphism, atau minimalis, kamu tinggal modifikasi style.css atau minta bantuan saya.

## 📸 Preview (optional)

Tambahkan screenshot UI:

/assets/images/preview-home.png
/assets/images/preview-projects.png

## 📬 Contact

Jika ingin menghubungi saya:

Email: yourname@gmail.com

Instagram: @yourusername

GitHub: https://github.com/yourusername

## 📝 License

Project ini bebas dipakai untuk keperluan pribadi atau portfolio Anda.