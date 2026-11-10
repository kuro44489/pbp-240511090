// ===== Dark mode =====
const tombol = document.getElementById('toggle-tema');
const simpan = localStorage.getItem('tema');
if (simpan) document.documentElement.setAttribute('data-theme', simpan);
tombol.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

tombol.addEventListener('click', () => {
    const gelap = document.documentElement.getAttribute('data-theme') === 'dark';
    const baru = gelap ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', baru);
    localStorage.setItem('tema', baru);
    tombol.textContent = gelap ? '🌙' : '☀️';
});

// ===== Animasi muncul saat di-scroll =====
const pengamat = new IntersectionObserver((entri) => {
    entri.forEach(e => { if (e.isIntersecting) e.target.classList.add('tampil'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => pengamat.observe(el));
