---
layout: home
title: Поддержка Echips
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Слушаем движение мыши только внутри нашего контейнера
    document.addEventListener('mousemove', (e) => {
      const target = e.target.closest('.glass-effect');
      if (!target) return; // Если мышка не на карточке - ничего не делаем
      
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      target.style.setProperty('--mouse-x', `${x}px`);
      target.style.setProperty('--mouse-y', `${y}px`);
    });
  }
})
</script>

<div class="apple-support-container">
  <div class="ambient-glow bulb-glow-top"></div>
  <div class="ambient-glow bulb-glow-bottom"></div>

  <div class="header-section">
    <div class="main-logo-circle">
      <img src="/images/main-logo.png" alt="Echips Logo" class="main-img" />
    </div>
    <h1 class="gradient-text">Поддержка Echips</h1>
    <p class="subtitle">Официальные драйверы, инструкции и сервис.</p>
  </div>

  <div class="product-row">
    <a href="/laptops/" class="product-item">
      <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-laptop.webp" alt="Ноутбуки" class="custom-icon" />
      </div>
      <span class="centered-text">Ноутбуки</span>
    </a>
    <a href="/monoblocks/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-monoblock.png" alt="Моноблоки" class="custom-icon" />
      </div>
      <span class="centered-text">Моноблоки</span>
    </a>
    <a href="/warranty/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-warranty.png" alt="Гарантия" class="custom-icon" />
      </div>
      <span class="centered-text">Гарантия</span>
    </a>
  </div>

  <div class="action-cards-row">
    <a href="/laptops/" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-drivers.png" alt="Драйверы" class="custom-icon-large" />
        </div>
        <span class="card-title centered-text">Скачать драйверы</span>
        <span class="card-link-text centered-text">Выбрать модель &rarr;</span>
      </div>
    </a>
    <a href="/guide/windows" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-faq.webp" alt="Инструкции" class="custom-icon-large" />
        </div>
        <span class="card-title centered-text">Инструкции и FAQ</span>
        <span class="card-link-text centered-text">Найти ответ &rarr;</span>
      </div>
    </a>
    <a href="/service/centers" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-service.png" alt="АСЦ" class="custom-icon-large" />
        </div>
        <span class="card-title centered-text">Найти сервис (АСЦ)</span>
        <span class="card-link-text centered-text">Адреса на карте &rarr;</span>
      </div>
    </a>
  </div>

  <div class="service-footer">
    <h2 class="service-title centered-text">Сервисный департамент Echips</h2>
    <p class="service-desc centered-text">Мы обеспечиваем техническую поддержку высшего уровня для наших партнеров и клиентов.</p>
    <div class="contacts-row">
      <div class="contact-block">
        <h4 class="centered-text">Для клиентов</h4>
        <p class="centered-text">support@echips.ru</p>
      </div>
      <div class="contact-block">
        <h4 class="centered-text">Для сервисных центров</h4>
        <p class="centered-text">service@echips.ru</p>
      </div>
    </div>
  </div>
</div>

<style>

  /* Жестко убиваем подчеркивания VitePress */
.apple-support-container a, 
.apple-support-container a:hover {
  text-decoration: none !important;
  border-bottom: none !important;
}
/* ================= ПАЛИТРА "ЛАМПА НАКАЛИВАНИЯ" ================= */
:root {
  --bulb-main: #FF9E00;     
  --bulb-light: #FFC266;    
  --text-primary: var(--vp-c-text-1);
  --text-secondary: var(--vp-c-text-2);
}

/* ================= ОБЩИЙ КОНТЕЙНЕР ================= */
.apple-support-container {
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 80px 24px 40px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  position: relative; 
  overflow: hidden;
}

/* ================= ЦЕНТРИРОВАНИЕ ТЕКСТА ================= */
.centered-text {
  display: block; width: 100%; text-align: center; margin: 0; padding: 0;
}
.content-wrapper { 
  display: flex; flex-direction: column; align-items: center; width: 100%; 
}

/* ================= ФОНОВОЕ СВЕЧЕНИЕ ================= */
.ambient-glow { position: absolute; border-radius: 50%; filter: blur(130px); z-index: -1; pointer-events: none; }
.bulb-glow-top { width: 450px; height: 450px; background: var(--bulb-light); top: 5%; left: 10%; opacity: 0.12; }
.bulb-glow-bottom { width: 400px; height: 400px; background: var(--bulb-main); bottom: 15%; right: 5%; opacity: 0.08; }

/* ================= ШАПКА ================= */
.header-section { margin-bottom: 70px; animation: fadeSlideUp 0.8s ease forwards; display: flex; flex-direction: column; align-items: center; }
.main-logo-circle { width: 72px; height: 72px; margin: 0 auto 24px; display: flex; justify-content: center; }
.main-img { width: 100%; height: 100%; object-fit: contain; }
.gradient-text {
  font-size: 56px; line-height: 1.1; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 16px; text-align: center; border: none;
  background: linear-gradient(135deg, var(--text-primary) 30%, var(--text-secondary) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.subtitle { font-size: 22px; line-height: 1.4; color: var(--text-secondary); font-weight: 400; margin: 0; text-align: center; }

/* ================= ПРЕМИАЛЬНОЕ СТЕКЛО ================= */
.glass-effect {
  position: relative; overflow: hidden;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 255, 255, 0.08); 
  border-top: 1px solid rgba(255, 255, 255, 0.15); 
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15);
  transform: translateZ(0); will-change: transform, box-shadow;
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease, border 0.4s ease;
}

.glow-overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit; opacity: 0; transition: opacity 0.4s ease; 
  pointer-events: none; z-index: 0;
  background: radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 158, 0, 0.25), transparent 60%);
}
.glass-effect:hover .glow-overlay { opacity: 1; }

.glass-effect:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 24px 56px 0 rgba(0, 0, 0, 0.2);
}

.content-wrapper, .custom-icon, .custom-icon-large { position: relative; z-index: 1; pointer-events: none; }

/* ================= ИКОНКИ ================= */
.custom-icon { width: 44px; height: 44px; object-fit: contain; transition: transform 0.4s ease; margin: 0 auto; display: block; }
.custom-icon-large { width: 56px; height: 56px; object-fit: contain; transition: transform 0.4s ease; margin: 0 auto; display: block; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); }

/* ================= ВЕРХНИЙ РЯД ================= */
.product-row { 
  display: flex; flex-direction: row; justify-content: center; align-items: center; 
  gap: 40px; margin-bottom: 80px; flex-wrap: nowrap; 
  animation: fadeSlideUp 0.8s ease forwards; animation-delay: 0.1s; opacity: 0; 
}
.product-item { display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: var(--text-primary); transition: all 0.3s ease; width: 120px; }
.product-icon-container { width: 88px; height: 88px; border-radius: 24px; display: flex; justify-content: center; align-items: center; margin: 0 auto 16px; }
.product-item span { font-size: 15px; font-weight: 600; letter-spacing: 0.3px; transition: color 0.3s; border: none; }
.product-item:hover .product-icon-container { transform: translateY(-8px); }
.product-item:hover span { color: var(--bulb-main); }

/* ================= НИЖНИЙ РЯД ================= */
.action-cards-row { 
  display: flex; flex-direction: row; justify-content: center; 
  gap: 32px; flex-wrap: nowrap; width: 100%;
  animation: fadeSlideUp 0.8s ease forwards; animation-delay: 0.2s; opacity: 0; 
}
.action-card {
  border-radius: 32px; padding: 48px 32px; flex: 1; max-width: 320px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-decoration: none; transform: translateY(0);
}
.action-card:hover { transform: translateY(-8px); }
.card-icon-container { margin-bottom: 28px; width: 100%; display: flex; justify-content: center; }
.action-card:hover .custom-icon-large { transform: scale(1.08) translateY(-4px); }
.card-title { font-size: 22px; font-weight: 700; margin-bottom: 16px; color: var(--text-primary); border: none; }

/* ТЕПЛЫЕ КНОПКИ-ССЫЛКИ */
.card-link-text { 
  font-size: 15px; color: var(--bulb-main); font-weight: 600; 
  background: rgba(255, 158, 0, 0.05); padding: 8px 20px; border-radius: 20px;
  transition: all 0.3s ease; border: none;
}
.action-card:hover .card-link-text { 
  background: rgba(255, 158, 0, 0.15); transform: translateY(-2px);
}

/* ================= ФУТЕР ================= */
.service-footer { margin-top: 100px; padding-top: 60px; border-top: 1px solid rgba(128, 128, 128, 0.15); opacity: 0; animation: fadeSlideUp 1s ease forwards; animation-delay: 0.4s; display: flex; flex-direction: column; align-items: center; }
.service-title { font-size: 28px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary); border: none; }
.service-desc { color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; font-size: 16px; line-height: 1.5; }
.contacts-row { display: flex; justify-content: center; gap: 64px; flex-wrap: nowrap; width: 100%; }
.contact-block { display: flex; flex-direction: column; align-items: center; }
.contact-block h4 { font-size: 13px; margin: 0 0 8px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; border: none; }
.contact-block p { margin: 0; color: var(--text-primary); font-size: 18px; font-weight: 500; border: none; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

/* ================= МОБИЛЬНАЯ ВЕРСИЯ ================= */
@media (max-width: 900px) {
  .product-row, .action-cards-row, .contacts-row { flex-wrap: wrap; }
  .apple-support-container { padding: 40px 20px; }
  .action-card { max-width: 100%; width: 100%; flex: none; }
}
</style>