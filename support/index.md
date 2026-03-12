---
layout: page
title: Контакты техподдержки
sidebar: false
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

// ================= МАГИЯ 3D НАКЛОНА =================
const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -3; 
  const rotateY = ((x - centerX) / centerX) * 3;  
  
  card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
}

const resetTilt = (e) => {
  const card = e.currentTarget;
  card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}

let cards = [];
onMounted(() => {
  if (typeof window !== 'undefined') {
    cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
    });
  }
})

onUnmounted(() => {
  if (cards.length > 0) {
    cards.forEach(card => {
      card.removeEventListener('mousemove', handleTilt);
      card.removeEventListener('mouseleave', resetTilt);
    });
  }
})
</script>

<div class="echips-wrapper">
  <div class="bg-glow top-glow"></div>
  <div class="bg-glow bottom-glow"></div>
  <div class="main-header">
    <a href="/" class="back-link">← На главную</a>
    <h1 class="hero-title">Свяжитесь с нами</h1>
    <p class="hero-subtitle">Мы всегда на связи, чтобы помочь решить любой вопрос с вашим устройством ECHIPS.</p>
  </div>
  <div class="contact-grid">    
    <a href="https://t.me/ECHIPS_Support" target="_blank" class="contact-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="c-icon bg-telegram">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.36-.99.54-1.41.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.48 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.42.02.11.04.31.02.47z"/></svg>
        </div>
        <h3>Telegram</h3>
        <p>Быстрые ответы в мессенджере.</p>
        <span class="c-action text-blue">Написать в Telegram &rarr;</span>
      </div>
    </a>
    <a href="https://wa.me/79226981304" target="_blank" class="contact-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="c-icon bg-whatsapp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32"><path d="M16.75 13.96c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.25-.65.82-.8 1-.15.17-.3.2-.55.08-.25-.13-1.07-.39-2.04-1.26-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.5-.41-.43-.57-.44-.15-.01-.32-.01-.5-.01-.18 0-.46.07-.71.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.85.14.17 1.94 2.96 4.7 4.12 2.76 1.16 2.76.77 3.26.72.5-.05 1.5-.61 1.71-1.21.21-.6.21-1.11.15-1.21-.06-.1-.23-.15-.48-.28zM12 21.82c-1.82 0-3.59-.49-5.15-1.41l-.37-.22-3.83 1.01 1.02-3.74-.24-.39C2.45 15.42 1.9 13.74 1.9 12 1.9 6.43 6.43 1.9 12 1.9s10.1 4.53 10.1 10.1-4.53 10.1-10.1 10.1zM12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.16 1.59 5.95L.08 24l6.19-1.63C8.01 23.4 10.03 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
        </div>
        <h3>WhatsApp</h3>
        <p>Поддержка по фото и видео.</p>
        <span class="c-action text-green">Открыть чат &rarr;</span>
      </div>
    </a>
    <a href="mailto:support@echips.ru" class="contact-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="c-icon bg-email">✉️</div>
        <h3>Email</h3>
        <p>Для развернутых вопросов и документов.</p>
        <span class="c-action text-yellow">support@echips.ru &rarr;</span>
      </div>
    </a>
  </div>
  <h2 class="section-title">Прямые телефоны</h2> 
  <div class="phone-grid">
    <div class="phone-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="p-header">
          <span class="p-badge">ДЛЯ КЛИЕНТОВ</span>
          <span class="p-status">Онлайн Пн-Пт</span>
        </div>
        <a href="tel:+79226981304" class="p-number">8 (922) 698-13-04</a>
        <div class="p-details">
          <p><strong>Валерий / Макс</strong> — Технические специалисты</p>
          <p class="time">с 10:00 до 18:00 (МСК)</p>
          <p class="note">Пишите в мессенджеры в любое время, мы ответим в рабочие часы.</p>
        </div>
      </div>
    </div>
    <div class="phone-card glass-effect tilt-card partner-bg">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="p-header">
          <span class="p-badge partner-badge">ДЛЯ СЕРВИСОВ (АСЦ)</span>
          <span class="p-status">Ежедневно</span>
        </div>
        <a href="tel:+79512557555" class="p-number">8 (951) 255-75-55</a>
        <div class="p-details">
          <p><strong>Старший инженер</strong> — Поддержка по ремонту</p>
          <p class="time">с 07:00 до 15:00 (МСК)</p>
          <p class="note">Выделенная линия только для авторизованных партнеров.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* Бронебойное скрытие системных заголовков */
:deep(h1:not(.hero-title)) { display: none !important; }

/* ================= ОБЩИЕ ПАРАМЕТРЫ СТРАНИЦЫ ================= */
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; background-color: transparent !important; transition: color 0.3s; }
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3, .echips-wrapper h4 { border: none !important; margin: 0; padding: 0; color: var(--e-text); }
.echips-wrapper p, .echips-wrapper ul { margin: 0; padding: 0; }

.echips-wrapper {
  --e-yellow: #FFB800; --e-orange: #FF4500; --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1); --e-desc: var(--vp-c-text-2);
  max-width: 1000px;
  margin: 0 auto; padding: 140px 20px 60px;
  position: relative; font-family: 'Montserrat', sans-serif !important;
  perspective: 1500px;
}

/* Фон */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.25; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 
html.dark .top-glow { opacity: 0.3; } html.dark .bottom-glow { opacity: 0.2; }

/* Стекло и 3D */
.glass-effect {
  background: var(--vp-c-bg-soft); border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important; position: relative; overflow: hidden;
}
html.dark .glass-effect { border: 1px solid rgba(255, 255, 255, 0.12) !important; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important; }

.tilt-card { transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease; transform-style: preserve-3d; will-change: transform; border-radius: 28px; }
.tilt-card:hover { box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important; border-color: rgba(255, 184, 0, 0.4) !important; z-index: 10; }
html.dark .tilt-card:hover { box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important; }
.card-stack { position: relative; z-index: 1; transform: translateZ(20px); height: 100%; display: flex; flex-direction: column; }

.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.5), transparent 100%);
  transform: translateZ(10px);
}
html.dark .mouse-glow { background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.6), transparent 100%); }
.tilt-card:hover .mouse-glow { opacity: 1; }

/* Шапка */
.main-header { margin-bottom: 60px; text-align: center; perspective: none; }
.back-link { display: inline-block; margin-bottom: 24px; color: var(--e-gray); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1 !important; margin-bottom: 20px !important; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); font-weight: 500; line-height: 1.5 !important; margin: 0 !important; }
.section-title { font-size: 32px; font-weight: 800; margin: 60px 0 30px !important; text-align: center; }

/* Сетка мессенджеров */
.contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.contact-card { padding: 40px 30px; text-align: center; cursor: pointer; display: block; }
.c-icon { width: 64px; height: 64px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 24px; color: white; }
.bg-telegram { background: #2AABEE; box-shadow: 0 8px 20px rgba(42, 171, 238, 0.3); }
.bg-whatsapp { background: #25D366; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3); }
.bg-email { background: var(--e-yellow); box-shadow: 0 8px 20px rgba(255, 184, 0, 0.3); font-size: 32px !important; }
.contact-card h3 { font-size: 22px; font-weight: 800; margin-bottom: 12px !important; }
.contact-card p { color: var(--e-desc); font-size: 15px; line-height: 1.5; margin-bottom: 24px; flex-grow: 1; }
.c-action { font-size: 14px; font-weight: 700; letter-spacing: 0.5px; margin-top: auto; }
.text-blue { color: #2AABEE !important; }
.text-green { color: #25D366 !important; }
.text-yellow { color: var(--e-yellow) !important; }

/* Сетка телефонов */
.phone-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.phone-card { padding: 40px; }
.partner-bg { background: rgba(142, 142, 147, 0.05); }
.p-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.p-badge { padding: 6px 12px; border-radius: 8px; font-size: 11px; font-weight: 800; letter-spacing: 1px; background: rgba(255, 184, 0, 0.15); color: var(--e-yellow); }
.partner-badge { background: rgba(142, 142, 147, 0.15); color: var(--e-gray); }
.p-status { font-size: 13px; font-weight: 600; color: #25D366; display: flex; align-items: center; gap: 6px; }
.p-status::before { content: ''; width: 8px; height: 8px; background: #25D366; border-radius: 50%; box-shadow: 0 0 10px #25D366; }

.p-number { display: block; font-size: 36px; font-weight: 800; color: var(--e-text) !important; margin-bottom: 20px; transition: color 0.3s; }
.phone-card:hover .p-number { color: var(--e-yellow) !important; }

.p-details p { font-size: 16px; margin-bottom: 8px; color: var(--e-text); }
.p-details strong { font-weight: 700; }
.p-details .time { color: var(--e-yellow); font-weight: 600; margin-bottom: 16px; }
.p-details .note { font-size: 13px; color: var(--e-desc); line-height: 1.5; border-top: 1px solid rgba(128, 130, 133, 0.2); padding-top: 16px; margin-top: 16px; }

/* Адаптив */
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .phone-grid { grid-template-columns: 1fr; }
  .p-number { font-size: 28px; }
}

/* Системные исправления шапки */
:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; perspective: none; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
</style>