---
layout: home
title: Поддержка Echips
---

<script setup>
import { onMounted } from 'vue'

// Этот код VitePress запустит только когда страничка полностью загрузится
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

<div class="apple-support-container">
  <div class="ambient-glow glow-coral"></div>
  <div class="ambient-glow glow-blue"></div>

  <div class="header-section">
    <div class="main-logo-circle">
      <img src="/images/main-logo.png" alt="Echips Logo" class="main-img" onerror="this.style.display='none'">
    </div>
    <h1>Поддержка Echips</h1>
    <p class="subtitle">Официальные драйверы, инструкции и сервис.</p>
  </div>

  <div class="product-row">
    <a href="/laptops/" class="product-item">
      <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-laptop.webp" alt="Ноутбуки" class="custom-icon">
      </div>
      <span>Ноутбуки</span>
    </a>
    <a href="/monoblocks/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-monoblock.png" alt="Моноблоки" class="custom-icon">
      </div>
      <span>Моноблоки</span>
    </a>
    <a href="/warranty/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-warranty.png" alt="Гарантия" class="custom-icon">
      </div>
      <span>Гарантия</span>
    </a>
  </div>

  <div class="action-cards-row">
    <a href="/drivers/" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-drivers.png" alt="Драйверы" class="custom-icon-large">
        </div>
        <span class="card-title">Скачать драйверы</span>
        <span class="card-link-text">Выбрать модель →</span>
      </div>
    </a>
    <a href="/guide/windows" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-faq.webp" alt="Инструкции" class="custom-icon-large">
        </div>
        <span class="card-title">Инструкции и FAQ</span>
        <span class="card-link-text">Найти ответ →</span>
      </div>
    </a>
    <a href="/service/centers" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-service.png" alt="АСЦ" class="custom-icon-large">
        </div>
        <span class="card-title">Найти сервис (АСЦ)</span>
        <span class="card-link-text">Адреса на карте →</span>
      </div>
    </a>
  </div>

  <div class="service-footer">
    <h2 class="service-title">Сервисный департамент Echips</h2>
    <p class="service-desc">Мы обеспечиваем техническую поддержку высшего уровня для наших партнеров и клиентов.</p>
    <div class="contacts-row">
      <div class="contact-block">
        <h4>Для клиентов</h4>
        <p>support@echips.ru</p>
      </div>
      <div class="contact-block">
        <h4>Для сервисных центров</h4>
        <p>service@echips.ru</p>
      </div>
    </div>
  </div>

</div>

<style>
/* ================= ПАЛИТРА ================= */
:root {
  --echips-coral: #f07f65;
  --echips-blue: #5cbbf0;
  --text-primary: var(--vp-c-text-1);
  --text-secondary: var(--vp-c-text-2);
}

/* ================= ОБЩИЙ КОНТЕЙНЕР ================= */
.apple-support-container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 24px 40px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

/* ================= AMBIENT GLOW ================= */
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  pointer-events: none;
  opacity: 0.15;
}
.glow-coral {
  width: 400px; height: 400px;
  background: var(--echips-coral);
  top: 10%; left: 15%;
}
.glow-blue {
  width: 350px; height: 350px;
  background: var(--echips-blue);
  bottom: 20%; right: 10%;
}

/* ================= ШАПКА ================= */
.header-section { margin-bottom: 70px; animation: fadeSlideUp 0.6s ease forwards; }
.main-logo-circle {
  width: 72px; height: 72px;
  margin: 0 auto 24px;
}
.main-img { width: 100%; height: 100%; object-fit: contain; }
.header-section h1 {
  font-size: 56px; line-height: 1.1; font-weight: 700; letter-spacing: -0.02em;
  margin-bottom: 16px; color: var(--text-primary);
}
.subtitle {
  font-size: 24px; line-height: 1.3; color: var(--text-secondary); font-weight: 400;
}

/* ================= УЛУЧШЕННЫЙ LIQUID GLASS EFFECT + MOUSE GLOW ================= */
.glass-effect {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* СЛОЙ МАТОВОГО СВЕЧЕНИЯ */
.glow-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(240, 127, 101, 0.15),
    transparent 70%
  );
}

.glass-effect:hover .glow-overlay { opacity: 1; }

.glass-effect:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 16px 48px 0 rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.content-wrapper, .custom-icon, .custom-icon-large {
  position: relative;
  z-index: 1;
}

/* ================= СТИЛИ ДЛЯ ТВОИХ PNG ИКОНОК ================= */
.custom-icon {
  width: 44px;
  height: 44px;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.custom-icon-large {
  width: 56px;
  height: 56px;
  object-fit: contain;
  transition: transform 0.4s ease;
}

/* ================= ВЕРХНИЙ РЯД ================= */
.product-row {
  display: flex; justify-content: center; gap: 40px; margin-bottom: 100px;
  flex-wrap: wrap; animation: fadeSlideUp 0.8s ease forwards;
}
.product-item {
  display: flex; flex-direction: column; align-items: center;
  text-decoration: none !important; color: var(--text-primary) !important;
  transition: all 0.3s ease;
}
.product-icon-container {
  width: 88px; height: 88px;
  border-radius: 22px; 
  display: flex; justify-content: center; align-items: center;
  margin-bottom: 16px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.product-item span { font-size: 15px; font-weight: 600; letter-spacing: 0.3px; }

.product-item:hover .product-icon-container { 
  transform: translateY(-8px) scale(1.05); 
}
.product-item:hover span {
  color: var(--echips-coral);
}

/* ================= НИЖНИЙ РЯД ================= */
.action-cards-row {
  display: flex; justify-content: center; gap: 32px;
  flex-wrap: wrap; animation: fadeSlideUp 1s ease forwards;
}
.action-card {
  border-radius: 28px;
  padding: 40px 32px;
  width: 300px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  text-decoration: none !important;
}
.action-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.card-icon-container {
  margin-bottom: 24px;
}
.action-card:hover .custom-icon-large { transform: scale(1.1); }

.card-title {
  font-size: 21px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);
}
.card-link-text {
  font-size: 15px; color: var(--echips-blue); font-weight: 500;
  opacity: 0.8; transition: opacity 0.2s ease;
}
.action-card:hover .card-link-text { opacity: 1; }

/* ================= ФУТЕР ================= */
.service-footer {
  margin-top: 100px;
  padding-top: 60px;
  border-top: 1px solid rgba(128, 128, 128, 0.15);
  opacity: 0; 
  animation: fadeSlideUp 1.2s ease forwards;
  animation-delay: 1.2s; 
}
.service-title {
  font-size: 28px; font-weight: 700; margin-bottom: 12px; color: var(--text-primary);
  letter-spacing: -0.02em;
}
.service-desc {
  color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px; font-size: 16px;
}
.contacts-row {
  display: flex; justify-content: center; gap: 64px; flex-wrap: wrap;
}
.contact-block h4 {
  font-size: 14px; margin: 0 0 8px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px;
}
.contact-block p {
  margin: 0; color: var(--text-primary); font-size: 18px; font-weight: 500;
}

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .apple-support-container { padding: 40px 20px; }
  .header-section h1 { font-size: 40px; }
  .ambient-glow { filter: blur(80px); }
  .glow-coral { width: 200px; height: 200px; }
  .glow-blue { width: 200px; height: 200px; }
  .product-row { gap: 20px; }
  .product-icon-container { width: 64px; height: 64px; border-radius: 18px; }
  .custom-icon { width: 32px; height: 32px; }
  .action-card { width: 100%; max-width: 340px; padding: 30px 24px; border-radius: 24px; }
  .contacts-row { gap: 32px; flex-direction: column; }
}
</style>