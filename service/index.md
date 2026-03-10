---
layout: page
title: Сервисные центры (АСЦ)
sidebar: false
---

<script setup>
import { ref, computed } from 'vue'
import db from './centers.json'

// VitePress сам достает данные из шапки файла
const searchQuery = ref('')
const userLat = ref(null)
const userLng = ref(null)
const geoError = ref('')
const isLocating = ref(false)
let mapInstance = null

// Формула расчета расстояния
// Формула расчета расстояния
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c).toFixed(1);
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    // Загружаем API Яндекс.Карт
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.onload = () => {
      ymaps.ready(initYandexMap);
    };
    document.head.appendChild(script);
  }
})

const initYandexMap = () => {
  // Создаем карту в блоке с id="ymap"
  mapInstance = new ymaps.Map('ymap', {
    center: [55.751574, 37.573856], // По умолчанию показываем Москву/Россию
    zoom: 4, // Отдаление, чтобы было видно всю страну
    controls: ['zoomControl', 'fullscreenControl']
  });
  const allCenters = db.centers || [];
  allCenters.forEach(center => {
    if (center.lat && center.lng) {
      const placemark = new ymaps.Placemark([center.lat, center.lng], {
        balloonContentHeader: `<strong>${center.name}</strong>`,
        balloonContentBody: `${center.city}, ${center.address}<br><br>📞 ${center.phone}`,
        hintContent: center.city
      }, {
        preset: 'islands#yellowDotIcon' // Желтая иконка под стиль Echips
      });
      mapInstance.geoObjects.add(placemark);
    }
  });
}

// Запрос координат у браузера
const findNearest = () => {
  if (!navigator.geolocation) {
    geoError.value = "Геолокация не поддерживается";
    return;
  }
  isLocating.value = true;
  geoError.value = '';
  searchQuery.value = '';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLat.value = position.coords.latitude;
      userLng.value = position.coords.longitude;
      isLocating.value = false;

      if (mapInstance) {
        mapInstance.setCenter([userLat.value, userLng.value], 11, {
            checkZoomRange: true,
            duration: 1000 // Анимация полета (1 секунда)
        });
      }
    },

    (error) => {
      isLocating.value = false;
      geoError.value = "Не удалось определить местоположение.";
    }
  );
}

// Умный поиск работает с данными из шапки
const filteredCenters = computed(() => {
  // Берем данные из импортированного JSON файла
  let allCenters = db.centers || []

  let centersWithDistance = allCenters.map(c => {
    return { ...c, distance: calculateDistance(userLat.value, userLng.value, c.lat, c.lng) }
  });

  const q = searchQuery.value.toLowerCase().trim()
  if (q) {
    userLat.value = null; userLng.value = null;
    return centersWithDistance.filter(c => c.city.toLowerCase().includes(q))
  }

  if (userLat.value && userLng.value) {
    return centersWithDistance
      .filter(c => c.distance !== null)
      .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
  }

  return centersWithDistance
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
    <div class="mouse-glow"></div>
      <input type="text" v-model="searchQuery" placeholder="Введите ваш город..." class="search-input" />
      <button @click="findNearest" class="geo-btn" :disabled="isLocating" title="Найти ближайший ко мне">
        <span v-if="isLocating" class="spinner">⏳</span>
        <span v-else>Рядом со мной</span>
      </button>
    </div>
    <div v-if="geoError" class="geo-error">{{ geoError }}</div>
  </div>

  <div class="map-container glass-effect">
    <div id="ymap" class="yandex-map"></div>
  </div>

  <div class="centers-grid" v-if="filteredCenters.length > 0">
    <div v-for="center in filteredCenters" :key="center.city + center.name" class="center-card glass-effect">
    <div class="mouse-glow"></div>
      <div class="card-header">
        <h3 class="city-name">{{ center.city }}</h3>
        <span class="badge" :class="{'badge-partner': center.type === 'Партнер'}">{{ center.type }}</span>
      </div>
      <div v-if="center.distance" class="distance-badge">
        \~ {{ center.distance }} км от вас
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
  <div class="mouse-glow"></div>
    <p>К сожалению, в этом городе пока нет нашего сервисного центра.</p>
    <a href="mailto:service@echips.ru" class="contact-link">Напишите нам: service@echips.ru</a>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.map-container {
  width: 100%;
  height: 450px; /* Высота карты */
  border-radius: 28px;
  overflow: hidden; /* Чтобы углы карты не вылезали за рамку */
  margin-bottom: 40px;
  animation: fadeSlideUp 0.7s ease forwards;
  padding: 0; /* Убираем внутренние отступы, чтобы карта была на всю ширину блока */
  position: relative;
  z-index: 5;
}

.yandex-map {
  width: 100%;
  height: 100%;
}

/* Приглушаем цвета карты в темной теме, чтобы не била по глазам */
html.dark .yandex-map {
  filter: brightness(0.8) contrast(1.1);
}

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


.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.45; }
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; }

html.dark .top-glow { opacity: 0.45; }
html.dark .bottom-glow { opacity: 0.2; }


.main-header { margin-bottom: 50px; text-align: center; animation: fadeSlideUp 0.6s ease forwards; }
.back-link {
  display: inline-block; margin-bottom: 24px; color: var(--e-gray);
  font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s;
}
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; color: var(--e-text); letter-spacing: -0.03em; position: relative; z-index: 2; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }


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

/* ================= СЕТКА СЕРВИСОВ ================= \*/
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

/* Нет результатов \*/
.no-results { text-align: center; padding: 40px; border-radius: 24px; border: 1px solid rgba(128, 130, 133, 0.25) !important; }
.no-results p { font-size: 18px; color: var(--e-desc); margin-bottom: 15px; }
.contact-link { color: var(--e-yellow) !important; font-weight: 600; font-size: 16px; }

@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

/* ================= ГЛОБАЛЬНЫЕ ИСПРАВЛЕНИЯ ================= \*/
html, body { overflow-x: hidden !important; }
:deep(.VPNavBar) {
  background-color: transparent !important; backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important;
}
html.dark :deep(.VPNavBar) {
  background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* КНОПКА ГЕОЛОКАЦИИ \*/
.geo-btn {
  background: rgba(142, 142, 147, 0.15); color: var(--e-text);
  border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: 600; font-family: 'Montserrat', sans-serif;
  cursor: pointer; transition: all 0.3s ease; white-space: nowrap; margin-left: 10px;
}
.geo-btn:hover:not(:disabled) { background: var(--e-yellow); color: #000; }
.geo-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.geo-error { color: var(--e-orange); font-size: 13px; text-align: center; margin-top: 10px; font-weight: 500; }
.spinner { display: inline-block; animation: spin 1.5s linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }

/* ПЛАШКА РАССТОЯНИЯ В КАРТОЧКЕ \*/
.distance-badge {
  display: inline-block; margin-bottom: 15px; font-size: 13px; font-weight: 700; color: var(--e-orange);
  background: rgba(255, 69, 0, 0.1); padding: 4px 12px; border-radius: 10px;
}
</style>
