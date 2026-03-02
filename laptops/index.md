---
layout: page
title: Ноутбуки Echips
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('mousemove', (e) => {
    const target = e.target.closest('.glass-effect');
    if (!target) return;
    
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  });
})
</script>

<div class="apple-catalog-container">
  <div class="ambient-glow glow-blue-top"></div>
  <div class="ambient-glow glow-coral-bottom"></div>

  <div class="catalog-header">
    <a href="/" class="back-link">← На главную</a>
    <h1>Линейки ноутбуков</h1>
    <p class="subtitle">Выберите серию вашего ноутбука Echips для поиска драйверов, BIOS и сервисных инструкций.</p>
  </div>

  <div class="laptop-grid">
    
    <a href="/laptops/arctic/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-arctic.png" alt="Echips Arctic" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Arctic</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

    <a href="/laptops/hot/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-hot.png" alt="Echips Hot" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Hot</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

    <a href="/laptops/taganay/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-taganay.png" alt="Echips Taganay" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Taganay</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

    <a href="/laptops/fusion/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-fusion.png" alt="Echips Fusion" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Fusion</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

    <a href="/laptops/atlant/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-atlant.png" alt="Echips Atlant" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Atlant</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

    <a href="/laptops/rush/" class="laptop-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="laptop-image-container">
          <img src="/images/laptop-rush.png" alt="Echips Rush" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="series-title">Rush</h2>
        <span class="card-link-text">Смотреть модели →</span>
      </div>
    </a>

  </div>
</div>

<style>
/* ================= ПАЛИТРА И БАЗА ================= */
:root {
  --echips-coral: #f07f65;
  --echips-blue: #5cbbf0;
  --text-primary: var(--vp-c-text-1);
  --text-secondary: var(--vp-c-text-2);
}

.apple-catalog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  z-index: -1;
  pointer-events: none;
  opacity: 0.12;
}
.glow-blue-top { width: 500px; height: 500px; background: var(--echips-blue); top: -10%; left: -10%; }
.glow-coral-bottom { width: 600px; height: 600px; background: var(--echips-coral); bottom: -20%; right: -10%; }

.catalog-header { margin-bottom: 60px; animation: fadeSlideUp 0.6s ease forwards; }
.back-link {
  display: inline-block; margin-bottom: 24px; color: var(--echips-blue); text-decoration: none; font-weight: 500; transition: opacity 0.2s;
}
.back-link:hover { opacity: 0.7; }
.catalog-header h1 { font-size: 52px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 16px; color: var(--text-primary); }
.subtitle { font-size: 20px; color: var(--text-secondary); font-weight: 400; max-width: 600px; margin: 0 auto; }

/* ================= LIQUID GLASS ================= */
.glass-effect {
  position: relative; overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.05); border-top: 1px solid rgba(255, 255, 255, 0.15); border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  transform: translateZ(0); will-change: transform, box-shadow;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, background 0.5s ease;
}
.glass-effect:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 24px 56px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.glow-overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius: inherit; opacity: 0;
  transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(92, 187, 240, 0.12), transparent 70%);
}
.glass-effect:hover .glow-overlay { opacity: 1; }
.content-wrapper { position: relative; z-index: 1; }

/* ================= СЕТКА И КАРТОЧКИ ================= */
.laptop-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;
  animation: fadeSlideUp 0.8s ease forwards;
}

.laptop-card {
  border-radius: 32px; padding: 40px 32px;
  display: flex; flex-direction: column; align-items: center; text-align: center; text-decoration: none !important;
}
.laptop-card:hover { transform: translateY(-12px); }

.laptop-image-container {
  width: 100%; height: 160px; margin-bottom: 24px; display: flex; justify-content: center; align-items: center;
}
.laptop-img {
  max-width: 90%; max-height: 100%; object-fit: contain; transform: translateZ(0);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  filter: drop-shadow(0 20px 20px rgba(0,0,0,0.3));
}
.laptop-card:hover .laptop-img { transform: scale(1.1) translateY(-10px); }

.series-title { font-size: 26px; font-weight: 700; margin-bottom: 16px; color: var(--text-primary); border: none; padding: 0; }
.card-link-text {
  font-size: 15px; color: var(--echips-blue); font-weight: 600; background: rgba(92, 187, 240, 0.1);
  padding: 10px 24px; border-radius: 20px; transition: background 0.3s, transform 0.3s;
}
.laptop-card:hover .card-link-text { background: rgba(92, 187, 240, 0.2); transform: translateY(-2px); }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .catalog-header h1 { font-size: 36px; }
  .laptop-grid { grid-template-columns: 1fr; }
  .laptop-card { padding: 32px 20px; }
}
</style>