---
layout: home
title: Поддержка Echips
---

<script setup>
import { onMounted } from 'vue'
import TiltCard from './components/TiltCard.vue'

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
    <div class="logo-area">
      <img src="/images/main-logo.png" alt="Echips" class="hero-logo" />
    </div>
    <h1 class="hero-title">Поддержка Echips</h1>
    <p class="hero-subtitle">Официальные драйверы, инструкции и сервис.</p>
  </div>

  <div class="search-container">
    <div class="search-bar glass-effect">
      <div class="mouse-glow"></div>
      <input type="text" placeholder="Введите название модели или артикул..." class="search-input" />
    </div>
  </div>

  <div class="icon-row">
    <a href="/laptops/" class="icon-card-link">
      <div class="icon-box glass-effect">
        <div class="mouse-glow"></div>
        <img src="/images/icon-laptop.png" alt="Laptops" class="img-icon" />
      </div>
      <span class="label">Ноутбуки</span>
    </a>
    <a href="/monoblocks/" class="icon-card-link">
      <div class="icon-box glass-effect">
        <div class="mouse-glow"></div>
        <img src="/images/icon-monoblock.png" alt="AIO" class="img-icon" />
      </div>
      <span class="label">Моноблоки</span>
    </a>
    <a href="/warranty/" class="icon-card-link">
      <div class="icon-box glass-effect">
        <div class="mouse-glow"></div>
        <img src="/images/icon-warranty.png" alt="Warranty" class="img-icon" />
      </div>
      <span class="label">Гарантия</span>
    </a>
  </div>

  <div class="action-grid">
    <a href="/laptops/" class="big-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <img src="/images/icon-drivers.png" alt="Drivers" class="img-large" />
        <h3 class="card-h">Скачать драйверы</h3>
        <span class="btn-yellow">Выбрать модель &rarr;</span>
      </div>
    </a>
    <a href="/guide" class="big-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <img src="/images/icon-faq.png" alt="FAQ" class="img-large" />
        <h3 class="card-h">Инструкции и FAQ</h3>
        <span class="btn-yellow">Найти ответ &rarr;</span>
      </div>
    </a>
    <a href="/service" class="big-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <img src="/images/icon-service.png" alt="ASC" class="img-large" />
        <h3 class="card-h">Найти сервис (АСЦ)</h3>
        <span class="btn-yellow">Адреса на карте &rarr;</span>
      </div>
    </a>
  </div>

  <div class="footer-contacts">
    <h2 class="f-title">Сервисный департамент Echips 0.1</h2>
    <p class="f-desc">Мы обеспечиваем техническую поддержку высшего уровня.</p>
    <div class="f-grid">
      <div class="f-item"><h4>Для клиентов</h4><p>support@echips.ru</p></div>
      <div class="f-item"><h4>Для сервисов</h4><p>service@echips.ru</p></div>
    </div>
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
  
  max-width: 1100px; 
  margin: 0 auto; 
  position: relative; 
  text-align: center; 
  font-family: 'Montserrat', sans-serif !important;
  padding: 120px 20px 60px; 
}

/* ================= ФОН (ОЧЕНЬ МЯГКИЙ) ================= */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.45; } /* Увеличена непрозрачность */
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } /* Увеличена непрозрачность */

html.dark .top-glow { opacity: 0.45; }
html.dark .bottom-glow { opacity: 0.2; }

/* ================= ШАПКА ================= */
.main-header { margin-bottom: 50px; }
.hero-logo { width: 180px; margin: 0 auto 20px; display: block; }
.hero-title { font-size: 98px; font-weight: 800; color: var(--e-text); letter-spacing: -0.03em; margin-bottom: 30px !important;}
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }
html.dark .hero-logo { filter: invert(1); opacity: 0.9; }

/* ================= ПОИСК ================= */
.search-section { width: 100%; max-width: 600px; margin: 0 auto 60px; position: relative; z-index: 10; }
.search-bar {
  position: relative; overflow: hidden;
  height: 56px; border-radius: 28px; display: flex; align-items: center; padding: 0 24px;
  background: var(--vp-c-bg-soft); 
  /* Видимая рамка для светлой темы */
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: all 0.3s ease;
}
html.dark .search-bar { border: 1px solid rgba(255, 255, 255, 0.1) !important; }
.search-bar:focus-within { border-color: var(--e-yellow) !important; box-shadow: 0 8px 30px rgba(255, 184, 0, 0.1); }

.search-icon { font-size: 18px; margin-right: 12px; opacity: 0.5; }
.search-input { background: transparent; border: none; outline: none; width: 100%; color: var(--e-text); font-size: 16px; font-family: 'Montserrat', sans-serif; }
.search-input::placeholder { color: var(--e-desc); opacity: 0.6; }

/* ================= ВЕРХНИЕ ИКОНКИ ================= */
.icon-row { display: flex; justify-content: center; gap: 32px; margin-bottom: 70px; margin-top: 50px !important; }
.icon-card-link { display: flex; flex-direction: column; align-items: center; width: 100px; cursor: pointer; }
.icon-box { 
  position: relative; overflow: hidden;
  width: 80px; height: 80px; border-radius: 22px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px;
  background: var(--vp-c-bg-soft); 
  /* Видимая рамка для светлой темы */
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
html.dark .icon-box { border: 1px solid rgba(255, 255, 255, 0.1) !important; }

.img-icon { width: 36px; height: 36px; object-fit: contain; opacity: 0.8; transition: transform 0.3s; }
html.dark .img-icon { filter: invert(1); opacity: 0.9; }
.label { font-size: 14px; font-weight: 600; color: var(--e-text); transition: color 0.3s; 
          border-bottom: none !important;
          box-shadow: none !important;}

.icon-card-link:hover .icon-box { transform: translateY(-4px); border-color: var(--e-gray); box-shadow: 0 10px 24px rgba(0,0,0,0.05); }
.icon-card-link:hover .img-icon { transform: scale(1.1); opacity: 1; }

/* ================= НИЖНИЕ ПЛАШК ================= */
.action-grid { display: flex; flex-direction: row; justify-content: center; gap: 24px; }
.big-card { 
  position: relative; flex: 1; max-width: 320px; min-height: 280px; 
  padding: 40px 24px; border-radius: 28px;
  display: flex; flex-direction: column; align-items: center; justify-content: space-between;
  background: var(--vp-c-bg-soft); 
  /* Жестко заданная красивая рамка и тень для светлой темы */
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;
  transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); overflow: hidden;
}
html.dark .big-card {
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important;
}
.card-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; height: 100%; width: 100%; justify-content: space-between; pointer-events: none; }

/* Иконки на плашках */
.img-large { height: 64px; width: auto; margin-top: 10px; opacity: 0.85; transition: transform 0.4s ease; }
html.dark .img-large { filter: invert(1); opacity: 0.95; }
.card-h { font-size: 20px; font-weight: 700; color: var(--e-text); margin: 20px 0 !important; text-align: center; }

/* КНОПКА */
.btn-yellow {
  font-size: 14px; font-weight: 600; color: var(--e-text);
  background: var(--vp-c-default-soft); padding: 10px 24px; border-radius: 20px;
  transition: all 0.3s ease; display: inline-block; pointer-events: auto;
}

/* ================= ЭФФЕКТЫ ПРИ НАВЕДЕНИИ ================= */
/* 1. Карточка приподнимается */
.big-card:hover { transform: translateY(-6px); border-color: rgba(255, 184, 0, 0.3); box-shadow: 0 16px 40px rgba(0,0,0,0.06); }
html.dark .big-card:hover { box-shadow: 0 16px 40px rgba(0,0,0,0.2); }

/* 2. Иконка чуть увеличивается */
.big-card:hover .img-large { transform: scale(1.08); opacity: 1; }

/* 3. Кнопка загорается */
.big-card:hover .btn-yellow { background: var(--e-yellow); color: #000 !important; box-shadow: 0 4px 12px rgba(255, 184, 0, 0.3); }

/* 4. УСПОКОЕННОЕ СВЕЧЕНИЕ МЫШИ */
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0;
  transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.8), transparent 100%);
}
html.dark .mouse-glow { background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.8), transparent 100%); }

/* Включаем прозрачность свечения для всех карточек при наведении */
.big-card:hover .mouse-glow,
.icon-card-link:hover .mouse-glow,
.search-bar:hover .mouse-glow,
.search-bar:focus-within .mouse-glow { 
  opacity: 1; 
}

/* ================= ФУТЕР ================= */
.footer-contacts { margin-top: 80px; padding-top: 40px; border-top: 1px solid var(--vp-c-divider); }
.f-title { font-size: 24px; font-weight: 700; color: var(--e-text); margin-bottom: 8px !important; }
.f-desc { color: var(--e-desc); margin-bottom: 30px; font-weight: 500; }
.f-grid { display: flex; justify-content: center; gap: 60px; }
.f-item h4 { font-size: 12px; text-transform: uppercase; color: var(--e-gray); margin-bottom: 6px !important; letter-spacing: 1px; font-weight: 700; }
.f-item p { font-size: 16px; font-weight: 600; color: var(--e-text); }

@media (max-width: 800px) {
  .action-grid { flex-direction: column; align-items: center; }
  .big-card { width: 100%; min-height: 240px; }
  .f-grid { flex-direction: column; gap: 30px; }
}

/* ================= ГЛОБАЛЬНЫЕ ИСПРАВЛЕНИЯ (ВСТАВИТЬ В КОНЕЦ) ================= */

/* 1. Исправляем горизонтальную прокрутку из-за выходящих BG пятен */
html, body {
  overflow-x: hidden !important; 
}

/* 2. Делаем верхний бар "жидким стеклом" */
:deep(.VPNavBar) {
  background-color: transparent !important; /* Убираем сплошной фон */
  backdrop-filter: blur(25px) !important; /* Добавляем размытие */
  -webkit-backdrop-filter: blur(25px) !important;
  border-bottom: 1px solid var(--vp-c-divider) !important; /* Тонкая граница */
}

/* Исправление цвета для темной темы навигации */
html.dark :deep(.VPNavBar) {
  background-color: rgba(30, 30, 30, 0.4) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* Гарантируем, что заголовок "Поддержка Echips" не обрезается */
.hero-title {
  position: relative;
  z-index: 2;
}

</style>