---
layout: home
title: Поддержка Echips
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

<div class="apple-support-container">
  <div class="ambient-glow bulb-glow-top"></div>
  <div class="ambient-glow bulb-glow-bottom"></div>

  <div class="header-section">
    <div class="main-logo-circle">
      <img src="/images/main-logo.png" alt="Echips Logo" class="main-img" onerror="this.style.display='none'">
    </div>
    <h1 class="gradient-text">Поддержка Echips</h1>
    <p class="subtitle">Официальные драйверы, инструкции и сервис.</p>
  </div>

  <div class="product-row">
    <a href="/laptops/" class="product-item">
      <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-laptop.webp" alt="Ноутбуки" class="custom-icon">
      </div>
      <span class="strict-center">Ноутбуки</span>
    </a>
    <a href="/monoblocks/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-monoblock.png" alt="Моноблоки" class="custom-icon">
      </div>
      <span class="strict-center">Моноблоки</span>
    </a>
    <a href="/warranty/" class="product-item">
       <div class="product-icon-container glass-effect">
        <div class="glow-overlay"></div>
        <img src="/images/icon-warranty.png" alt="Гарантия" class="custom-icon">
      </div>
      <span class="strict-center">Гарантия</span>
    </a>
  </div>

  <div class="action-cards-row">
    <a href="/laptops/" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper strict-center-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-drivers.png" alt="Драйверы" class="custom-icon-large">
        </div>
        <span class="card-title strict-center">Скачать драйверы</span>
        <span class="card-link-text strict-center">Выбрать модель →</span>
      </div>
    </a>
    <a href="/guide/windows" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper strict-center-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-faq.webp" alt="Инструкции" class="custom-icon-large">
        </div>
        <span class="card-title strict-center">Инструкции и FAQ</span>
        <span class="card-link-text strict-center">Найти ответ →</span>
      </div>
    </a>
    <a href="/service/centers" class="action-card glass-effect">
      <div class="glow-overlay"></div>
      <div class="content-wrapper strict-center-wrapper">
        <div class="card-icon-container">
          <img src="/images/icon-service.png" alt="АСЦ" class="custom-icon-large">
        </div>
        <span class="card-title strict-center">Найти сервис (АСЦ)</span>
        <span class="card-link-text strict-center">Адреса на карте →</span>
      </div>
    </a>
  </div>

  <div class="service-footer">
    <h2 class="service-title strict-center">Сервисный департамент Echips</h2>
    <p class="service-desc strict-center">Мы обеспечиваем техническую поддержку высшего уровня для наших партнеров и клиентов.</p>
    <div class="contacts-row">
      <div class="contact-block">
        <h4 class="strict-center">Для клиентов</h4>
        <p class="strict-center">support@echips.ru</p>
      </div>
      <div class="contact-block">
        <h4 class="strict-center">Для сервисных центров</h4>
        <p class="strict-center">service@echips.ru</p>
      </div>
    </div>
  </div>
</div>

<style>
/* ================= ПАЛИТРА "ЛАМПА НАКАЛИВАНИЯ" ================= */
:root {
  --bulb-main: #FF9E00;     /* Насыщенный янтарный/вольфрамовый */
  --bulb-light: #FFC266;    /* Мягкий светлый желтый */
  --bulb-glow: rgba(255, 158, 0, 0.25); /* Теплый свет для мышки */
  --text-primary: var(--vp-c-text-1);
  --text-secondary: var(--vp-c-text-2);
}

/* ================= ОБЩИЙ КОНТЕЙНЕР ================= */
.apple-support-container {
  max-width: 1024px; margin: 0 auto; padding: 80px 24px 40px;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  position: relative; overflow: hidden;
}

/* ЖЕСТКОЕ ЦЕНТРИРОВАНИЕ ТЕКСТА */
.strict-center {
  display: block !important; width: 100% !important; text-align: center !important;
  margin-left: 0 !important; margin-right: 0 !important; padding-left: 0 !important; padding-right: 0 !important;
}
.strict-center-wrapper { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; width: 100% !important; }

/* ================= ФОНОВОЕ СВЕЧЕНИЕ ================= */
.ambient-glow { position: absolute; border-radius: 50%; filter: blur(130px); z-index: -1; pointer-events: none; }
.bulb-glow-top {
  width: 450px; height: 450px; background: var(--bulb-light) !important;
  top: 5%; left: 10%; opacity: 0.12;
}
.bulb-glow-bottom {
  width: 400px; height: 400px; background: var(--bulb-main) !important;
  bottom: 15%; right: 5%; opacity: 0.08;
}

/* ================= ШАПКА ================= */
.header-section { margin-bottom: 70px; animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; display: flex; flex-direction: column; align-items: center; }
.main-logo-circle { width: 72px; height: 72px; margin: 0 auto 24px; display: flex; justify-content: center; }
.main-img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1)); }
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
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  transform: translateZ(0); will-change: transform, box-shadow;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease, background 0.5s ease, border 0.5s ease;
}

.glow-overlay {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  /* ПРАВИЛЬНЫЙ СИНТАКСИС ДЛЯ СВЕЧЕНИЯ */
  background: radial-gradient(circle 280px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 158, 0, 0.25), transparent 70%) !important;
}
.glass-effect:hover .glow-overlay { opacity: 1; }
.glass-effect:hover {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 24px 56px 0 rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.content-wrapper, .custom-icon, .custom-icon-large { position: relative; z-index: 1; }

/* ================= ИКОНКИ ================= */
.custom-icon { width: 44px; height: 44px; object-fit: contain; transform: scale(1) translateZ(0); transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); margin: 0 auto; display: block; }
.custom-icon-large { width: 56px; height: 56px; object-fit: contain; transform: scale(1) translateZ(0); transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); margin: 0 auto; display: block; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); }

/* ================= ВЕРХНИЙ РЯД (ЖЕСТКАЯ ЛИНИЯ) ================= */
.product-row { 
  display: flex !important; flex-direction: row !important; justify-content: center !important; 
  align-items: center !important; gap: 40px !important; margin-bottom: 80px !important; 
  flex-wrap: wrap !important; animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.1s; opacity: 0; 
}
.product-item { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-decoration: none !important; color: var(--text-primary) !important; transition: all 0.3s ease; width: 100px !important; }
.product-icon-container { width: 88px !important; height: 88px !important; border-radius: 24px !important; display: flex !important; justify-content: center !important; align-items: center !important; margin: 0 auto 16px !important; }
.product-item span { font-size: 15px; font-weight: 600; letter-spacing: 0.3px; transition: color 0.3s; }
.product-item:hover .product-icon-container { transform: translateY(-8px) scale(1.03); }
.product-item:hover span { color: var(--bulb-main); }

/* ================= НИЖНИЙ РЯД (ЖЕСТКАЯ ЛИНИЯ) ================= */
.action-cards-row { 
  display: flex !important; flex-direction: row !important; justify-content: center !important; 
  align-items: stretch !important; gap: 32px !important; flex-wrap: wrap !important; 
  animation: fadeSlideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.2s; opacity: 0; 
}
.action-card {
  border-radius: 32px !important; padding: 48px 32px !important; width: 320px !important;
  display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important;
  text-decoration: none !important; transform: translateY(0);
}
.action-card:hover { transform: translateY(-8px); }
.card-icon-container { margin-bottom: 28px !important; width: 100% !important; display: flex !important; justify-content: center !important; }
.action-card:hover .custom-icon-large { transform: scale(1.08) translateY(-4px); }
.card-title { font-size: 22px; font-weight: 700; margin-bottom: 16px !important; color: var(--text-primary); letter-spacing: -0.01em; }

/* ТЕПЛЫЕ КНОПКИ-ССЫЛКИ */
.card-link-text { 
  font-size: 15px; color: var(--bulb-main) !important; font-weight: 600; 
  background: rgba(255, 158, 0, 0.05); padding: 8px 20px; border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.action-card:hover .card-link-text { 
  background: rgba(255, 158, 0, 0.15); transform: translateY(-2px);
}

/* ================= ФУТЕР ================= */
.service-footer { margin-top: 100px; padding-top: 60px; border-top: 1px solid rgba(128, 128, 128, 0.15); opacity: 0; animation: fadeSlideUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; animation-delay: 0.4s; display: flex; flex-direction: column; align-items: center; }
.service-title { font-size: 28px; font-weight: 700; margin-bottom: 12px !important; color: var(--text-primary); letter-spacing: -0.02em; border: none; }
.service-desc { color: var(--text-secondary); max-width: 600px; margin: 0 auto 40px !important; font-size: 16px; line-height: 1.5; }
.contacts-row { display: flex; justify-content: center; gap: 64px; flex-wrap: wrap; width: 100%; }
.contact-block { display: flex; flex-direction: column; align-items: center; }
.contact-block h4 { font-size: 13px; margin: 0 0 8px !important; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.8px; border: none; }
.contact-block p { margin: 0 !important; color: var(--text-primary); font-size: 18px; font-weight: 500; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .apple-support-container { padding: 40px 20px; }
  .gradient-text { font-size: 40px; }
  .ambient-glow { filter: blur(80px); }
  .bulb-glow-top, .bulb-glow-bottom { width: 250px; height: 250px; }
  .product-row { gap: 20px !important; }
  .product-icon-container { width: 64px !important; height: 64px !important; border-radius: 18px !important; }
  .custom-icon { width: 32px; height: 32px; }
  .action-card { width: 100% !important; max-width: 340px !important; padding: 40px 24px !important; border-radius: 28px !important; }
  .contacts-row { gap: 32px; flex-direction: column; }
}
</style>