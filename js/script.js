function showMessage() {
  alert("Hai! Makasih ya sudah mampir ke portofolio aku 😊");
}

const btnMessage = document.getElementById("btnMessage");
if (btnMessage) btnMessage.addEventListener("click", showMessage);

// Tahun otomatis
const yearEl = document.getElementById("year");
if (yearEl) yearEl.innerText = new Date().getFullYear();

// Mood toggle (ubah teks + ubah nuansa halaman)
const btnMood = document.getElementById("btnMood");
const moodText = document.getElementById("moodText");

let isCalm = true;

function setMood() {
  if (!moodText) return;

  if (isCalm) {
    moodText.innerHTML = "Mood saat ini: <strong>Bright</strong>";
    document.body.style.filter = "saturate(1.05)";
  } else {
    moodText.innerHTML = "Mood saat ini: <strong>Calm</strong>";
    document.body.style.filter = "saturate(0.95)";
  }

  isCalm = !isCalm;
}

if (btnMood) btnMood.addEventListener("click", setMood);

// Form contact (validasi sederhana + pesan status)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const msg = document.getElementById("msgInput").value.trim();

    if (!name || !email || !msg) {
      if (statusEl) statusEl.innerText = "Masih ada yang kosong—isi dulu ya 🙂";
      return;
    }

    if (statusEl) {
      statusEl.innerText = "Terkirim! (Simulasi) Makasih, " + name + " ✨";
    }

    form.reset();
  });
}
