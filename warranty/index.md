---
layout: page
title: Гарантия Echips
sidebar: false
---

<div class="echips-wrapper">
  <div class="bg-glow top-glow"></div>
  <div class="bg-glow bottom-glow"></div>

  <div class="main-header">
    <a href="/" class="back-link">← На главную</a>
    <h1 class="hero-title">Гарантийное обслуживание</h1>
    <p class="hero-subtitle">Официальные условия сервисного обслуживания техники Echips.</p>
  </div>

  <div class="content-card glass-effect">
    <h2>Сроки гарантии</h2>
    <p>На всю технику Echips (ноутбуки и моноблоки) предоставляется официальная гарантия сроком <strong>1 год (12 месяцев)</strong> с момента покупки.</p>
    <h2>Что покрывает гарантия?</h2>
    <ul>
      <li>Аппаратные неисправности материнской платы и процессора.</li>
      <li>Дефекты оперативной памяти и накопителя (SSD/HDD).</li>
      <li>Неисправности дисплея (матрицы), возникшие не по вине пользователя.</li>
      <li>Выход из строя системы охлаждения, клавиатуры или тачпада при нормальной эксплуатации.</li>
    </ul>
    <h2>Гарантия не распространяется на:</h2>
    <ul>
      <li>Механические повреждения (сколы, вмятины, трещины корпуса).</li>
      <li>Следы залития жидкостью и окисления внутренних компонентов.</li>
      <li>Самостоятельное вскрытие устройства (срыв пломб) и неквалифицированный ремонт.</li>
      <li>Естественный износ аккумулятора.</li>
      <li>Программные сбои, вызванные действиями пользователя или вирусами.</li>
    </ul>
    <h2>Как обратиться по гарантии?</h2>
    <p>Если у вас возникла проблема, вы можете обратиться в любой авторизованный сервисный центр (АСЦ) в вашем регионе. Для обращения потребуется чек о покупке и заполненный гарантийный талон.</p>
    <div class="action-btn-container">
      <a href="/service/centers" class="btn-yellow">Найти ближайший сервис &rarr;</a>
    </div>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ================= ГЛОБАЛЬНЫЙ СБРОС ================= */
.echips-wrapper a.back-link,
.echips-wrapper a.btn-yellow {
  text-decoration: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
}
.echips-wrapper h1, .echips-wrapper h2 { 
  border: none !important; margin: 0; padding: 0; 
}

/* ================= БАЗА ================= */
.echips-wrapper {
  --e-yellow: #FFB800;
  --e-orange: #FF4500;
  --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1);
  --e-desc: var(--vp-c-text-2);
  
  max-width: 1000px; /* Чуть уже для комфортного чтения текста */
  margin: 0 auto; padding: 60px 20px 80px;
  position: relative; 
  font-family: 'Montserrat', sans-serif !important;
}

/* ================= ФОН ================= */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.45; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 

html.dark .top-glow { opacity: 0.45; }
html.dark .bottom-glow { opacity: 0.2; }

/* ================= ШАПКА ================= */
.main-header { margin-bottom: 50px; text-align: center; animation: fadeSlideUp 0.6s ease forwards; }
.back-link { 
  display: inline-block; margin-bottom: 24px; color: var(--e-gray); 
  font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s;
}
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; color: var(--e-text); letter-spacing: -0.03em; position: relative; z-index: 2; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }

/* ================= ТЕКСТОВАЯ ПЛАШКА В СТЕКЛЕ ================= */
.content-card {
  padding: 60px 50px; 
  border-radius: 32px;
  background: var(--vp-c-bg-soft); 
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;
  text-align: left;
  animation: fadeSlideUp 0.8s ease forwards;
}

html.dark .content-card {
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important;
}

/* Оформление текста внутри плашки */
.content-card h2 {
  font-size: 24px; font-weight: 700; color: var(--e-text);
  margin-top: 40px !important; margin-bottom: 20px !important;
}
.content-card h2:first-of-type { margin-top: 0 !important; }

.content-card p {
  font-size: 16px; line-height: 1.6; color: var(--e-desc);
  margin-bottom: 20px; font-weight: 500;
}

.content-card ul {
  margin-bottom: 30px; padding-left: 20px;
}
.content-card li {
  font-size: 16px; line-height: 1.6; color: var(--e-desc);
  margin-bottom: 10px; font-weight: 500;
}
.content-card strong { color: var(--e-text); }

/* КНОПКА */
.action-btn-container { margin-top: 40px; text-align: center; }
.btn-yellow {
  font-size: 15px; font-weight: 600; color: var(--e-text) !important;
  background: var(--vp-c-default-soft); padding: 14px 32px; border-radius: 25px;
  transition: all 0.3s ease; display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.btn-yellow:hover { 
  background: var(--e-yellow) !important; color: #000 !important; 
  box-shadow: 0 8px 24px rgba(255, 184, 0, 0.3); transform: translateY(-3px);
}

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 800px) {
  .hero-title { font-size: 38px; }
  .content-card { padding: 40px 24px; }
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