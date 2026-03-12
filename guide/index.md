---
layout: page
title: Инструкции и FAQ
sidebar: false
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Наша база частых вопросов (можешь легко добавлять новые)
const faqs = ref([
  {
    question: 'Слетит ли гарантия, если я сам переустановлю Windows?',
    answer: 'Нет. Установка или переустановка операционной системы (Windows, Linux) никак не влияет на аппаратную гарантию вашего устройства. Гарантия аннулируется только при физическом повреждении или неквалифицированном вскрытии корпуса.'
  },
  {
    question: 'Ноутбук не видит установочную флешку с Windows. Что делать?',
    answer: 'Убедитесь, что флешка записана для режима UEFI (схема разделов GPT). Современные ноутбуки ECHIPS не поддерживают устаревший режим Legacy/CSM. Рекомендуем использовать официальную утилиту Microsoft Media Creation Tool или программу Rufus для записи образа.'
  },
  {
    question: 'Пропал звук после чистой установки Windows',
    answer: 'Это частая ситуация для современных процессоров (особенно линеек Intel N100/N5095). Звуковой чип работает через умный интерфейс Intel SST. Вам необходимо перейти в раздел "Драйверы", скачать полный пакет для вашей модели и установить драйверы на чипсет и аудио строго по приложенной инструкции.'
  },
  {
    question: 'Могу ли я сам добавить оперативную память или второй SSD?',
    answer: 'Возможность апгрейда зависит от конкретной модели (в некоторых ультрабуках память распаяна на плате). Если апгрейд технически предусмотрен, мы настоятельно рекомендуем делать это через Авторизованный Сервисный Центр (АСЦ). При самостоятельном вскрытии и повреждении пломб гарантия будет аннулирована.'
  }
])

// Логика открытия/закрытия аккордеона FAQ
const activeFaq = ref(null)
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

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
  
  card.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
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
    <h1 class="hero-title">База знаний ECHIPS</h1>
    <p class="hero-subtitle">Инструкции по настройке, установке ОС и ответы на частые вопросы.</p>
  </div>

  <div class="category-grid">
    <a href="/guide/windows-install" class="cat-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="cat-icon bg-blue">💻</div>
        <h3>Установка Windows</h3>
        <p>Пошаговое руководство по созданию флешки и установке ОС.</p>
      </div>
    </a>
    
    <a href="/laptops" class="cat-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="cat-icon bg-yellow">⚙️</div>
        <h3>Установка драйверов</h3>
        <p>Как правильно скачать и установить драйверы для вашей модели.</p>
      </div>
    </a>

    <a href="/guide/battery" class="cat-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="cat-icon bg-green">🔋</div>
        <h3>Батарея и питание</h3>
        <p>Рекомендации по калибровке и продлению срока службы АКБ.</p>
      </div>
    </a>

    <a href="/service" class="cat-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="cat-icon bg-purple">🛠</div>
        <h3>Апгрейд и ремонт</h3>
        <p>Где и как правильно добавить память без потери гарантии.</p>
      </div>
    </a>
  </div>

  <h2 class="section-title">Частые вопросы (FAQ)</h2>
  
  <div class="faq-container glass-effect">
    <div class="mouse-glow"></div>
    <div class="faq-list">
      
      <div 
        v-for="(faq, index) in faqs" 
        :key="index"
        class="faq-item"
        :class="{ 'active': activeFaq === index }"
      >
        <button class="faq-question" @click="toggleFaq(index)">
          <span>{{ faq.question }}</span>
          <div class="faq-icon">
            <span class="cross-line vertical"></span>
            <span class="cross-line horizontal"></span>
          </div>
        </button>
        
        <div class="faq-answer-wrapper" :style="{ maxHeight: activeFaq === index ? '300px' : '0' }">
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="support-banner glass-effect tilt-card">
    <div class="mouse-glow"></div>
    <div class="card-stack banner-content">
      <div class="banner-text">
        <h3>Не нашли ответ на свой вопрос?</h3>
        <p>Наш технический специалист поможет разобраться с любой проблемой.</p>
      </div>
      <a href="https://wa.me/79226981304" target="_blank" class="btn-yellow">Написать в WhatsApp &rarr;</a>
    </div>
  </div>

</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* БРОНЕБОЙНОЕ СКРЫТИЕ СТАНДАРТНЫХ ЗАГОЛОВКОВ VITEPRESS */
:deep(h1:not(.hero-title)) { display: none !important; }

/* ================= ОБЩИЕ ПАРАМЕТРЫ СТРАНИЦЫ ================= */
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; background-color: transparent !important; transition: color 0.3s; }
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3, .echips-wrapper h4 { border: none !important; margin: 0; padding: 0; color: var(--e-text); }
.echips-wrapper p, .echips-wrapper ul { margin: 0; padding: 0; }

.echips-wrapper {
  --e-yellow: #FFB800; --e-orange: #FF4500; --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1); --e-desc: var(--vp-c-text-2);
  max-width: 900px; /* Сделали чуть уже для красоты текста */
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

.tilt-card { transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease; transform-style: preserve-3d; will-change: transform; border-radius: 24px; }
.tilt-card:hover { box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important; border-color: rgba(255, 184, 0, 0.4) !important; z-index: 10; }
html.dark .tilt-card:hover { box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important; }
.card-stack { position: relative; z-index: 1; transform: translateZ(20px); }

.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.5), transparent 100%);
  transform: translateZ(10px);
}
html.dark .mouse-glow { background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.6), transparent 100%); }
.tilt-card:hover .mouse-glow, .faq-container:hover .mouse-glow { opacity: 1; }

/* Шапка */
.main-header { margin-bottom: 60px; text-align: center; perspective: none; }
.back-link { display: inline-block; margin-bottom: 24px; color: var(--e-gray); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; letter-spacing: -0.03em; line-height: 1.1 !important; margin-bottom: 20px !important; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); font-weight: 500; line-height: 1.5 !important; margin: 0 !important; }
.section-title { font-size: 32px; font-weight: 800; margin: 60px 0 30px !important; text-align: center; }

/* Категории */
.category-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 50px; }
.cat-card { padding: 30px; display: flex; flex-direction: column; cursor: pointer; }
.cat-icon { width: 48px; height: 48px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; }
.bg-blue { background: rgba(0, 122, 255, 0.15); }
.bg-yellow { background: rgba(255, 184, 0, 0.15); }
.bg-green { background: rgba(52, 199, 89, 0.15); }
.bg-purple { background: rgba(175, 82, 222, 0.15); }
.cat-card h3 { font-size: 20px; font-weight: 700; margin-bottom: 10px !important; }
.cat-card p { color: var(--e-desc); font-size: 14px; line-height: 1.5; }

/* FAQ Аккордеон */
.faq-container { border-radius: 28px; padding: 10px 30px; }
.faq-container:hover { border-color: rgba(255, 184, 0, 0.3) !important; }
.faq-item { border-bottom: 1px solid rgba(128, 130, 133, 0.15); position: relative; z-index: 1; }
.faq-item:last-child { border-bottom: none; }
html.dark .faq-item { border-bottom-color: rgba(255, 255, 255, 0.05); }

.faq-question {
  width: 100%; text-align: left; padding: 24px 0; background: transparent; border: none; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'Montserrat', sans-serif; font-size: 18px; font-weight: 600; color: var(--e-text);
  transition: color 0.3s;
}
.faq-question:hover { color: var(--e-yellow); }

.faq-icon { width: 20px; height: 20px; position: relative; flex-shrink: 0; margin-left: 20px; }
.cross-line { position: absolute; background: var(--e-yellow); border-radius: 2px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.vertical { width: 3px; height: 20px; left: 8.5px; top: 0; }
.horizontal { width: 20px; height: 3px; top: 8.5px; left: 0; }
/* Анимация крестика в минус при открытии */
.faq-item.active .vertical { transform: rotate(90deg); opacity: 0; }
.faq-item.active .horizontal { transform: rotate(180deg); }

.faq-answer-wrapper { overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.faq-answer { padding-bottom: 24px; color: var(--e-desc); font-size: 15px; line-height: 1.6; }

/* Баннер поддержки */
.support-banner { margin-top: 60px; padding: 40px; }
.banner-content { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
.banner-text h3 { font-size: 24px; font-weight: 800; margin-bottom: 10px !important; }
.banner-text p { color: var(--e-desc); font-size: 15px; }

.btn-yellow {
  font-size: 14px; font-weight: 600; color: #000 !important;
  background: var(--e-yellow); padding: 14px 28px; border-radius: 20px;
  transition: all 0.3s ease; display: inline-block; white-space: nowrap;
}
.support-banner:hover .btn-yellow { transform: scale(1.05); box-shadow: 0 10px 20px rgba(255, 184, 0, 0.3); }

/* Адаптив */
@media (max-width: 800px) {
  .category-grid { grid-template-columns: 1fr; }
  .banner-content { flex-direction: column; text-align: center; }
}

/* Системные исправления шапки */
:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; perspective: none; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
</style>