---
layout: page
title: Сервисные центры (АСЦ)
sidebar: false
# ВОТ ТВОЯ БАЗА ДАННЫХ ДЛЯ РЕДАКТОРА
centers:
  - city: "Уфа"
    name: "Меморек"
    type: "Основной"
    address: "Карла Маркса, 63"
    phone: "8 (347) 251-85-98"
    map: "https://yandex.ru/maps/-/CHcQ6DLK"
    
  - city: "Челябинск"
    name: "Ечипс"
    type: "Основной"
    address: "Северная, 56 (п. Шершни)"
    phone: "8 (951) 255 7555"
    map: "https://yandex.ru/maps/-/CDR45JO7"
    
  - city: "Москва"
    name: "Smart-service"
    type: "Основной"
    address: "Ткацкая, 5, стр.3"
    phone: "8 (495) 921-11-88"
    map: "https://yandex.ru/maps/-/CDR45RIU"
    
  - city: "Абакан"
    name: "Notebook сервис+"
    type: "Партнер"
    address: "ул. Стофато, д. 5д"
    phone: "8 (3902) 32-99-33"
    map: "https://yandex.ru/maps/-/CHX0zVl-"
---

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

// VitePress сам достает данные из шапки файла
const { frontmatter } = useData()
const searchQuery = ref('')

// Умный поиск работает с данными из шапки
const filteredCenters = computed(() => {
  const allCenters = frontmatter.value.centers || []
  const q = searchQuery.value.toLowerCase().trim()
  if (!q) return allCenters 
  return allCenters.filter(c => c.city.toLowerCase().includes(q))
})
</script>

<div class="echips-wrapper">
  <div class="bg-glow top-glow"></div>
  <div class="bg-glow bottom-glow"></div>

  <div class="main-header">
    <a href="/" class="back-link">← На главную</a>
    <h1 class="hero-title">Сервисные центры</h1>
    <p class="hero-subtitle">Найдите ближайший авторизованный сервисный центр Echips в вашем городе.</p>
  </div>

  <div class="search-section">
    <div class="search-bar glass-effect">
      <span class="search-icon">📍</span>
      <input type="text" v-model="searchQuery" placeholder="Введите ваш город..." class="search-input" />
    </div>
  </div>

  <div class="centers-grid" v-if="filteredCenters.length > 0">
    <div v-for="center in filteredCenters" :key="center.city + center.name" class="center-card glass-effect">
      <div class="card-header">
        <h3 class="city-name">{{ center.city }}</h3>
        <span class="badge" :class="{'badge-partner': center.type === 'Партнер'}">{{ center.type }}</span>
      </div>
      <h4 class="center-name">{{ center.name }}</h4>
      <div class="center-details">
        <p><strong>Адрес:</strong> {{ center.address }}</p>
        <p><strong>Телефон:</strong> {{ center.phone }}</p>
      </div>
      <div class="card-footer">
        <a v-if="center.map" :href="center.map" target="_blank" class="btn-yellow">На карте &rarr;</a>
      </div>
    </div>
  </div>
  
  <div v-else class="no-results glass-effect">
    <p>К сожалению, в этом городе пока нет нашего сервисного центра.</p>
    <a href="mailto:service@echips.ru" class="contact-link">Напишите нам: service@echips.ru</a>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ================= ГЛОБАЛЬНЫЙ СБРОС ================= */
.echips-wrapper a.back-link,
.echips-wrapper a.btn-yellow,
.echips-wrapper a.contact-link {
  text-decoration: none !important;
  border-bottom: none !important;
  box-shadow: none !important;
}
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3, .echips-wrapper h4 { 
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

/* ================= ПОИСК ================= */
.search-section { width: 100%; max-width: 600px; margin: 0 auto 40px; position: relative; z-index: 10; animation: fadeSlideUp 0.7s ease forwards; }
.search-bar {
  position: relative; overflow: hidden;
  height: 56px; border-radius: 28px; display: flex; align-items: center; padding: 0 24px;
  background: var(--vp-c-bg-soft); 
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: all 0.3s ease;
}
html.dark .search-bar { border: 1px solid rgba(255, 255, 255, 0.1) !important; }
.search-bar:focus-within { border-color: var(--e-yellow) !important; box-shadow: 0 8px 30px rgba(255, 184, 0, 0.1); }
.search-icon { font-size: 18px; margin-right: 12px; opacity: 0.7; }
.search-input { background: transparent; border: none; outline: none; width: 100%; color: var(--e-text); font-size: 16px; font-family: 'Montserrat', sans-serif; }
.search-input::placeholder { color: var(--e-desc); opacity: 0.6; }

/* ================= СЕТКА СЕРВИСОВ ================= */
.centers-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;
  animation: fadeSlideUp 0.8s ease forwards;
}

.center-card {
  padding: 30px 24px; border-radius: 24px;
  background: var(--vp-c-bg-soft); 
  border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05) !important;
  transition: all 0.4s ease; display: flex; flex-direction: column;
}
html.dark .center-card {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2) !important;
}
.center-card:hover { transform: translateY(-5px); border-color: rgba(255, 184, 0, 0.3) !important; }

.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.city-name { font-size: 22px; font-weight: 800; color: var(--e-text); }
.badge { 
  font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;
  padding: 4px 10px; border-radius: 12px; background: rgba(255, 184, 0, 0.15); color: var(--e-yellow); 
}
.badge-partner { background: rgba(142, 142, 147, 0.15); color: var(--e-gray); }

.center-name { font-size: 18px; font-weight: 600; color: var(--e-text); margin-bottom: 20px !important; }
.center-details p { font-size: 14px; color: var(--e-desc); margin-bottom: 8px; line-height: 1.4; }
.center-details strong { color: var(--e-text); font-weight: 600; }

.card-footer { margin-top: auto; padding-top: 24px; }
.btn-yellow {
  font-size: 13px; font-weight: 600; color: var(--e-text) !important;
  background: var(--vp-c-default-soft); padding: 10px 20px; border-radius: 18px;
  transition: all 0.3s ease; display: inline-block;
}
.center-card:hover .btn-yellow { background: var(--e-yellow) !important; color: #000 !important; }

/* Нет результатов */
.no-results { text-align: center; padding: 40px; border-radius: 24px; border: 1px solid rgba(128, 130, 133, 0.25) !important; }
.no-results p { font-size: 18px; color: var(--e-desc); margin-bottom: 15px; }
.contact-link { color: var(--e-yellow) !important; font-weight: 600; font-size: 16px; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

/* ================= ГЛОБАЛЬНЫЕ ИСПРАВЛЕНИЯ ================= */
html, body { overflow-x: hidden !important; }
:deep(.VPNavBar) {
  background-color: transparent !important; backdrop-filter: blur(25px) !important; 
  -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; 
}
html.dark :deep(.VPNavBar) {
  background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}
</style>