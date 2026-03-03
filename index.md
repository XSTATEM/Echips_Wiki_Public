---
layout: home
title: Поддержка Echips
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
    <div class="logo-area">
      <img src="/images/main-logo.png" alt="Echips" class="hero-logo" />
    </div>
    <h1 class="hero-title">Поддержка Echips</h1>
    <p class="hero-subtitle">Официальные драйверы, инструкции и сервис.</p>
  </div>
<div class="search-container">
  <div class="search-bar glass-effect">
    <input type="text" placeholder="Введите название модели или артикул..." class="search-input" />
  </div>
  <div class="popular-tags">
    <span class="tag-label">Часто ищут:</span>
    <a href="/laptops/hot/" class="tag">Hot</a>
    <a href="/laptops/arctic/" class="tag">Arctic</a>
    <a href="/laptops/fusion/" class="tag">Fusion</a>
    <a href="/laptops/taganay/" class="tag">Taganay</a>
  </div>
</div>
  <div class="icon-row">
    <a href="/laptops/" class="icon-card-link">
      <div class="icon-box glass-effect">
        <div class="mouse-glow"></div>
        <img src="/images/icon-laptop.webp" alt="Laptops" class="img-icon" />
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
    <a href="/guide/windows" class="big-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <img src="/images/icon-faq.webp" alt="FAQ" class="img-large" />
        <h3 class="card-h">Инструкции и FAQ</h3>
        <span class="btn-yellow">Найти ответ &rarr;</span>
      </div>
    </a>
    <a href="/service/centers" class="big-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="card-inner">
        <img src="/images/icon-service.png" alt="ASC" class="img-large" />
        <h3 class="card-h">Найти сервис (АСЦ)</h3>
        <span class="btn-yellow">Адреса на карте &rarr;</span>
      </div>
    </a>
  </div>

  <div class="footer-contacts">
    <h2 class="f-title">Сервисный департамент Echips</h2>
    <p class="f-desc">Мы обеспечиваем техническую поддержку высшего уровня.</p>
    <div class="f-grid">
      <div class="f-item"><h4>Для клиентов</h4><p>support@echips.ru</p></div>
      <div class="f-item"><h4>Для сервисов</h4><p>service@echips.ru</p></div>
    </div>
  </div>
</div>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');
/* УБИВАЕМ СТАНДАРТНЫЕ СТИЛИ VITEPRESS */
:deep(.vp-doc a) { text-decoration: none !important; border: none !important; }
:deep(.vp-doc h1), :deep(.vp-doc h2), :deep(.vp-doc h3) { border: none !important; margin: 0; padding: 0; }



.echips-wrapper {
  --e-yellow: #FFB800;
  --e-orange: #FF4500;
  --e-gray: #8E8E93;
  --e-white: var(--vp-c-text-1);
  --e-desc: var(--vp-c-text-2);
  
  max-width: 1100px; margin: 0 auto; padding: 60px 20px;
  position: relative; overflow: hidden;
  text-align: center;
  font-family: 'Manrope', sans-serif !important;
}

/* ФОНОВЫЕ ПЯТНА (ЛАМПОВЫЕ) */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(100px); z-index: -1; pointer-events: none; opacity: 0.15; }
.top-glow { width: 400px; height: 400px; background: var(--e-orange); top: -5%; left: 10%; }
.bottom-glow { width: 400px; height: 400px; background: var(--e-yellow); bottom: 10%; right: 5%; }

/* ШАПКА */
.main-header { margin-bottom: 60px; }
.hero-logo { width: 70px; margin: 0 auto 20px; display: block; }

.hero-title { 
  font-size: 52px; 
  font-weight: 800; 
  color: var(--e-white); 
  letter-spacing: -0.04em; /* Сделали заголовок чуть плотнее и стильнее */
}

.hero-subtitle, .label, .card-h, .btn-yellow, .f-item p {
  font-family: 'Manrope', sans-serif !important;
}

/* ОБЩЕЕ СТЕКЛО */
.glass-effect {
  position: relative; overflow: hidden; background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.1); border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: all 0.4s ease;
}

/* СВЕЧЕНИЕ МЫШИ (ТЕПЛО-ЖЕЛТОЕ) */
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0;
  transition: opacity 0.4s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.25), transparent 70%);
}
.glass-effect:hover .mouse-glow { opacity: 1; }
.glass-effect:hover { transform: translateY(-5px); border-top: 1px solid rgba(255, 255, 255, 0.3); }

/* ВЕРХНИЙ РЯД */
.icon-row { display: flex; justify-content: center; gap: 40px; margin-bottom: 80px; }
.icon-card-link { text-decoration: none !important; color: var(--e-white) !important; display: flex; flex-direction: column; align-items: center; width: 110px; }
.icon-box { width: 85px; height: 85px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.img-icon { width: 40px; height: 40px; object-fit: contain; position: relative; z-index: 1; }
.label { font-size: 15px; font-weight: 600; transition: color 0.3s; }
.icon-card-link:hover .label { color: var(--e-orange); }

/* ПОИСКОВАЯ СТРОКА */
.search-container {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeSlideUp 0.8s ease forwards;
}

.search-bar {
  width: 100%;
  max-width: 600px;
  height: 56px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.05) !important;
}

.search-input {
  background: transparent;
  border: none;
  color: var(--e-white);
  font-size: 16px;
  width: 100%;
  outline: none;
  font-family: 'Montserrat', sans-serif;
}

.search-input::placeholder { color: var(--e-gray); opacity: 0.5; }

/* ТЕГИ */
.popular-tags { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: center; }
.tag-label { font-size: 13px; color: var(--e-gray); font-weight: 500; }
.tag {
  font-size: 13px;
  color: var(--e-white);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 14px;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.tag:hover {
  background: var(--e-yellow);
  color: #000;
  transform: translateY(-2px);
}

/* НИЖНИЙ РЯД (ЖЕСТКО В ЛИНИЮ) */
.action-grid { display: flex; flex-direction: row; justify-content: center; gap: 25px; }
.big-card { flex: 1; max-width: 320px; border-radius: 30px; padding: 40px 20px; text-decoration: none !important; }
.card-inner { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
.img-large { width: 55px; height: 55px; margin-bottom: 20px; }
.card-h { font-size: 22px; font-weight: 700; color: var(--e-white); margin-bottom: 15px !important; }

/* КНОПКА (СЕРАЯ -> ЖЕЛТАЯ) */
.btn-yellow {
  font-size: 14px; font-weight: 700; color: var(--e-white);
  background: rgba(142, 142, 147, 0.15); padding: 10px 22px; border-radius: 20px;
  transition: all 0.3s ease;
}
.big-card:hover .btn-yellow { background: var(--e-yellow); color: #000 !important; }

/* ФУТЕР */
.footer-contacts { margin-top: 80px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }
.f-title { font-size: 26px; font-weight: 700; color: var(--e-white); margin-bottom: 10px !important; }
.f-desc { color: var(--e-desc); margin-bottom: 30px; }
.f-grid { display: flex; justify-content: center; gap: 50px; }
.f-item h4 { font-size: 12px; text-transform: uppercase; color: var(--e-gray); margin-bottom: 5px !important; letter-spacing: 1px; }
.f-item p { font-size: 18px; font-weight: 600; color: var(--e-white); }

/* МОБИЛКИ */
@media (max-width: 800px) {
  .icon-row, .action-grid, .f-grid { flex-wrap: wrap; }
  .action-grid { flex-direction: column; align-items: center; }
  .big-card { width: 100%; max-width: 350px; }
}
</style>