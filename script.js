/*
  EDIT WEBSITE DI SINI
  1) Ubah nama brand, nomor WhatsApp, harga dan isi template di bagian CONFIG.
  2) Nomor WhatsApp gunakan kode negara tanpa +, spasi, atau strip. Contoh: 6281234567890.
  3) Setelah mengedit, simpan/commit file ke GitHub.
*/
const CONFIG = {
  siteName: "InviteKita",
  whatsappNumber: "6281234567890", // GANTI dengan nomor WhatsApp bisnis kamu
  whatsappGreeting: "Halo, saya tertarik membuat undangan digital.",
  templates: [
    { id: "evergreen", name: "Evergreen Vows", category: "Wedding", price: "Rp99.000", style: "Botanical minimal", symbol: "❋", kicker: "THE WEDDING OF", title: "Alya & Bima", detail: "12 Desember 2026 · Yogyakarta", theme: "sage" },
    { id: "sunday", name: "Sunday Bloom", category: "Wedding", price: "Rp129.000", style: "Warm & romantic", symbol: "✿", kicker: "SAVE THE DATE", title: "Nadia & Arga", detail: "A beautiful new beginning", theme: "sand" },
    { id: "quiet", name: "Quiet Luxury", category: "Wedding", price: "Rp149.000", style: "Clean editorial", symbol: "✳", kicker: "JOIN US TO CELEBRATE", title: "Dara & Rafi", detail: "Together is a wonderful place", theme: "stone" },
    { id: "birthday", name: "Little Celebration", category: "Birthday", price: "Rp69.000", style: "Playful minimal", symbol: "✦", kicker: "YOU'RE INVITED TO", title: "Naya's Day", detail: "A little party, a lot of joy", theme: "sand" },
    { id: "garden", name: "Garden Gathering", category: "Event", price: "Rp79.000", style: "Fresh & natural", symbol: "❀", kicker: "PLEASE JOIN US", title: "Garden Party", detail: "Good people, good moments", theme: "sage" },
    { id: "modern", name: "Modern Moment", category: "Event", price: "Rp89.000", style: "Modern monochrome", symbol: "◇", kicker: "SAVE THE DATE", title: "A Special Day", detail: "An occasion worth celebrating", theme: "stone" }
  ],
  packages: [
    { name: "Essential", price: "Rp79.000", caption: "sekali bayar", description: "Undangan digital praktis untuk momen spesial.", features: ["1 desain pilihan", "Nama & detail acara", "Informasi lokasi", "Link undangan"], featured: false },
    { name: "Signature", price: "Rp129.000", caption: "sekali bayar", description: "Pilihan lengkap dengan sentuhan yang lebih personal.", features: ["Semua fitur Essential", "Galeri foto", "Countdown acara", "RSVP / konfirmasi tamu", "Musik latar opsional"], featured: true },
    { name: "Custom", price: "Mulai Rp199.000", caption: "sesuai kebutuhan", description: "Untuk kamu yang ingin desain lebih khusus.", features: ["Diskusi desain personal", "Warna & layout khusus", "Fitur sesuai kesepakatan", "Estimasi waktu sebelum mulai"], featured: false }
  ]
};

function waUrl(message) {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function bindWhatsApp() {
  document.querySelectorAll("[data-wa-link]").forEach(link => {
    link.href = waUrl(CONFIG.whatsappGreeting);
    link.addEventListener("click", event => {
      if (!CONFIG.whatsappNumber || CONFIG.whatsappNumber === "6281234567890") {
        // Link tetap berfungsi sebagai contoh; ganti nomor sebelum website dipublikasikan.
      }
    });
  });
}
function renderTemplates(filter = "Semua") {
  const grid = document.getElementById("templateGrid");
  const list = CONFIG.templates.filter(t => filter === "Semua" || t.category === filter);
  grid.innerHTML = list.map(t => `
    <article class="template-card">
      <div class="template-art ${t.theme}">
        <div class="template-paper">
          <span class="paper-kicker">${t.kicker}</span>
          <span class="paper-deco">${t.symbol}</span>
          <h3>${t.title}</h3>
          <p>${t.detail}</p>
        </div>
      </div>
      <div class="template-meta">
        <div><h3>${t.name}</h3><p>${t.style}</p></div><span class="template-price">${t.price}</span>
      </div>
      <a class="template-link" href="${waUrl(`Halo, saya tertarik dengan template ${t.name} (${t.category}), harga contoh ${t.price}. Bisa minta info lebih lanjut?`)}" target="_blank" rel="noopener">Pilih template ↗</a>
    </article>`).join("");
}
function renderPackages() {
  const grid = document.getElementById("pricingGrid");
  grid.innerHTML = CONFIG.packages.map(p => `
    <article class="price-card ${p.featured ? "featured" : ""}">
      ${p.featured ? '<span class="popular-label">MOST CHOSEN</span>' : ""}
      <p class="plan-name">${p.name.toUpperCase()}</p>
      <p class="plan-price">${p.price}</p><p class="plan-caption">${p.caption}</p>
      <p class="plan-desc">${p.description}</p>
      <ul class="plan-features">${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
      <a class="plan-button" href="${waUrl(`Halo, saya ingin bertanya tentang paket ${p.name} (${p.price}).`)}" target="_blank" rel="noopener">Pilih paket ↗</a>
    </article>`).join("");
}
document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = CONFIG.siteName);
document.getElementById("year").textContent = new Date().getFullYear();
bindWhatsApp();
renderTemplates();
renderPackages();

document.getElementById("filterRow").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  renderTemplates(button.dataset.filter);
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
