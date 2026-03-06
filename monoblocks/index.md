---
layout: page
title: Моноблоки Echips
sidebar: false
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.glass-effect');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });
  }
})
</script>

<div class="echips-wrapper">
  <div class="bg-glow top-glow"></div>
  <div class="bg-glow bottom-glow"></div>

  <div class="main-header">
    <a href="/" class="back-link">← На главную</a>
    <h1 class="hero-title">Линейки моноблоков</h1>
    <p class="hero-subtitle">Выберите серию вашего моноблока Echips для поиска драйверов и сервисных инструкций.</p>
  </div>

  <div class="laptop-grid">  
    <a href="/monoblocks/series-24/" class="laptop-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <div class="laptop-image-container">
          <img src="/images/aio-24.png" alt="Echips 24" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="card-h">Серия 24"</h2>
        <span class="btn-yellow">Смотреть модели &rarr;</span>
      </div>
    </a>
    <a href="/monoblocks/series-27/" class="laptop-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <div class="laptop-image-container">
          <img src="/images/aio-23.png" alt="Echips 27" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="card-h">Серия 23"</h2>
        <span class="btn-yellow">Смотреть модели &rarr;</span>
      </div>
    </a>
    <a href="/monoblocks/pro/" class="laptop-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <div class="laptop-image-container">
          <img src="/images/aio-pro.png" alt="Echips Pro" class="laptop-img" onerror="this.style.display='none'">
        </div>
        <h2 class="card-h">K1-серия</h2>
        <span class="btn-yellow">Смотреть модели &rarr;</span>
      </div>
    </a>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ================= ГЛОБАЛЬНЫЙ СБРОС ================= */
.echips-wrapper a,
.echips-wrapper a:hover,
.echips-wrapper a:focus,
.echips-wrapper a:visited {
  text-decoration: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3 { 
  border: none !important; margin: 0; padding: 0; 
}

/* ================= БАЗА ================= */
.echips-wrapper {
  --e-yellow: #FFB800;
  --e-orange: #FF4500;
  --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1);
  --e-desc: var(--vp-c-text-2);
  
  max-width: 1100px; margin: 0 auto; padding: 60px 20px 80px;
  position: relative; 
  text-align: center; 
  font-family: 'Montserrat', sans-serif !important;
}

/* ================= ФОН ================= */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.45; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 

html.dark .top-glow { opacity: 0.45; }
html.dark .bottom-glow { opacity: 0.2; }

/* ================= ШАПКА ================= */
.main-header { margin-bottom: 60px; animation: fadeSlideUp 0.6s ease forwards; }
.back-link { 
  display: inline-block; margin-bottom: 24px; color: var(--e-gray); 
  font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s;
}
.back-link:hover { color: var(--e-yellow); }
.hero-title { font-size: 52px; font-weight: 800; color: var(--e-text); letter-spacing: -0.03em; position: relative; z-index: 2; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }

/* ================= СЕТКА (ОТ НОУТБУКОВ) ================= */
.laptop-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 32px; 
  animation: fadeSlideUp 0.8s ease forwards;
}

/* ================= КАРТОЧКА ================= */
.laptop-card { 
  position: relative; 
  padding: 40px 24px; border-radius: 28px;
  display: flex; flex-direction: column; align-items: center; justify-content: space-between;
  background: var(--vp-c-bg-soft); 
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); overflow: hidden;
}

html.dark .laptop-card {
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important;
}

.card-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; height: 100%; width: 100%; justify-content: space-between; pointer-events: none; }

/* Картинка моноблока */
.laptop-image-container { height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; }
.laptop-img { 
  max-width: 90%; max-height: 100%; object-fit: contain; 
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.25));
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.card-h { font-size: 24px; font-weight: 800; color: var(--e-text); margin: 0 0 20px 0 !important; text-align: center; }

/* КНОПКА */
.btn-yellow {
  font-size: 14px; font-weight: 600; color: var(--e-text);
  background: var(--vp-c-default-soft); padding: 10px 24px; border-radius: 20px;
  transition: all 0.3s ease; display: inline-block; pointer-events: auto;
}

/* ================= ЭФФЕКТЫ ПРИ НАВЕДЕНИИ ================= */
.laptop-card:hover { transform: translateY(-8px); border-color: rgba(255, 184, 0, 0.3) !important; box-shadow: 0 16px 40px rgba(0,0,0,0.06) !important; }
html.dark .laptop-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.2) !important; }
.laptop-card:hover .laptop-img { transform: scale(1.08) translateY(-6px); }
.laptop-card:hover .btn-yellow { background: var(--e-yellow); color: #000 !important; box-shadow: 0 4px 12px rgba(255, 184, 0, 0.3); }

/* СВЕЧЕНИЕ МЫШИ */
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0;
  transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.8), transparent 100%);
}
html.dark .mouse-glow { background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.8), transparent 100%); }
.laptop-card:hover .mouse-glow { opacity: 1; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 800px) {
  .hero-title { font-size: 38px; }
  .laptop-grid { grid-template-columns: 1fr; }
}

/* ================= ГЛОБАЛЬНЫЕ ИСПРАВЛЕНИЯ ================= */
html, body { overflow-x: hidden !important; }

:deep(.VPNavBar) {
  background-color: transparent !important; 
  backdrop-filter: blur(25px) !important; 
  -webkit-backdrop-filter: blur(25px) !important;
  border-bottom: 1px solid var(--vp-c-divider) !important; 
}
html.dark :deep(.VPNavBar) {
  background-color: rgba(30, 30, 30, 0.4) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}
</style>