<template>
  <div class="echips-wrapper">
    <div class="bg-glow top-glow"></div>
    <div class="bg-glow bottom-glow"></div>

    <div class="series-header">
      <a href="/laptops/" class="back-link">← Ко всем линейкам</a>
      <div class="series-title-row">
        <img v-if="frontmatter.image" :src="frontmatter.image" class="series-mini-img" onerror="this.style.display='none'">
        <div>
          <h1 class="hero-title">{{ frontmatter.title }}</h1>
          <p class="subtitle">Серия: <span class="text-yellow">{{ frontmatter.line }}</span></p>
        </div>
      </div>
    </div>

    <div class="tabs-container glass-effect tilt-card" ref="cardRef" @mousemove="handleTilt" @mouseleave="resetTilt">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        
        <div class="tabs-header">
          <button class="tab-btn" :class="{ active: activeTab === 'specs' }" @click="activeTab = 'specs'">Характеристики</button>
          <button class="tab-btn" v-if="frontmatter.drivers && frontmatter.drivers.length" :class="{ active: activeTab === 'drivers' }" @click="activeTab = 'drivers'">Драйверы и BIOS</button>
          <button class="tab-btn" v-if="frontmatter.faq && frontmatter.faq.length" :class="{ active: activeTab === 'faq' }" @click="activeTab = 'faq'">FAQ</button>
        </div>

        <div class="tabs-content"> 
          
          <div v-show="activeTab === 'specs'" class="tab-pane fade-in">
            <h3>Спецификации модели</h3>
            <table class="apple-table" v-if="frontmatter.specs">
              <tbody>
                <tr><th>Процессор</th><td>{{ frontmatter.specs.cpu }}</td></tr>
                <tr><th>Оперативная память</th><td>{{ frontmatter.specs.ram }}</td></tr>
                <tr><th>Накопитель</th><td>{{ frontmatter.specs.storage }}</td></tr>
                <tr><th>Экран</th><td>{{ frontmatter.specs.screen }}</td></tr>
                <tr><th>ОС</th><td>{{ frontmatter.specs.os }}</td></tr>
              </tbody>
            </table>
            <p v-else class="pane-desc">Характеристики для этой модели пока не заполнены.</p>
          </div>
          
          <div v-show="activeTab === 'drivers'" class="tab-pane fade-in">
            <h3>Файлы для загрузки</h3>
            <ul class="manual-list" v-if="frontmatter.drivers && frontmatter.drivers.length">
              <li v-for="(driver, index) in frontmatter.drivers" :key="index">
                <div class="doc-info">
                  <h4>{{ driver.name }} <span class="version-badge" v-if="driver.version">{{ driver.version }}</span></h4>
                  <a :href="driver.url" target="_blank" class="download-link">Скачать файл ↓</a>
                </div>
              </li>
            </ul>
          </div>

          <div v-show="activeTab === 'faq'" class="tab-pane fade-in">
            <h3>Частые вопросы по модели</h3>
            <div class="faq-list" v-if="frontmatter.faq && frontmatter.faq.length">
              <div class="faq-item" v-for="(item, index) in frontmatter.faq" :key="index">
                <div class="faq-q"><strong>Q:</strong> {{ item.q }}</div>
                <div class="faq-a"><strong>A:</strong> {{ item.a }}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

// Вытаскиваем все данные, которые ты заполнила в админке
const { frontmatter } = useData()

// По умолчанию открываем вкладку с характеристиками
const activeTab = ref('specs')

// ================= МАГИЯ 3D НАКЛОНА =================
const cardRef = ref(null)

const handleTilt = (e) => {
  const card = cardRef.value;
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -1; 
  const rotateY = ((x - centerX) / centerX) * 1;  
  
  card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
}

const resetTilt = () => {
  const card = cardRef.value;
  if (!card) return;
  card.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg)`;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* Системные сбросы */
:deep(h1:not(.hero-title)) { display: none !important; }
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; background-color: transparent !important; }

/* ================= БАЗОВЫЕ СТИЛИ ================= */
.echips-wrapper {
  --echips-coral: #FF4500;
  --echips-blue: #FFB800;
  --bg-secondary: var(--vp-c-bg-soft);
  --border-color: rgba(128, 130, 133, 0.25);
  
  max-width: 900px;
  margin: 0 auto; padding: 140px 20px 60px;
  position: relative; font-family: 'Montserrat', sans-serif !important;
  perspective: 1500px;
}
html.dark .echips-wrapper { --border-color: rgba(255, 255, 255, 0.12); }

/* Фон */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--echips-coral); top: -10%; left: 5%; opacity: 0.25; } 
.bottom-glow { width: 550px; height: 550px; background: var(--echips-blue); bottom: 10%; right: -5%; opacity: 0.15; } 
html.dark .top-glow { opacity: 0.3; } html.dark .bottom-glow { opacity: 0.2; }

/* Шапка серии */
.series-header { margin-bottom: 40px; }
.back-link { color: var(--vp-c-text-2) !important; text-transform: uppercase; font-size: 14px; font-weight: 600; letter-spacing: 1px; display: inline-block; margin-bottom: 24px; transition: color 0.3s; }
.back-link:hover { color: var(--echips-blue) !important; }
.series-title-row { display: flex; align-items: center; gap: 24px; }
.series-mini-img { height: 100px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.25)); }
.hero-title { font-size: 42px; font-weight: 800; margin: 0 0 8px 0 !important; border: none; padding: 0; line-height: 1.2 !important; color: var(--vp-c-text-1); }
.subtitle { font-size: 18px; color: var(--vp-c-text-2); margin: 0; font-weight: 500; }
.text-yellow { color: var(--echips-blue); font-weight: 700; }

/* ================= СТЕКЛЯННЫЙ КОНТЕЙНЕР ================= */
.glass-effect {
  background: var(--vp-c-bg-soft); border: 1px solid var(--border-color) !important;
  border-radius: 24px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.08) !important;
}
html.dark .glass-effect { box-shadow: 0 16px 40px rgba(0,0,0,0.3) !important; }

.tilt-card { transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease; transform-style: preserve-3d; will-change: transform; }
.tilt-card:hover { box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important; border-color: rgba(255, 184, 0, 0.4) !important; z-index: 10; }
html.dark .tilt-card:hover { box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important; }
.card-stack { position: relative; z-index: 1; transform: translateZ(10px); }

.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.4), transparent 100%);
}
.tilt-card:hover .mouse-glow { opacity: 1; }

/* ================= ВКЛАДКИ ================= */
.tabs-header { display: flex; background: rgba(0, 0, 0, 0.02); border-bottom: 1px solid var(--border-color); padding: 0 16px; overflow-x: auto; }
html.dark .tabs-header { background: rgba(0,0,0,0.2); }
.tab-btn {
  padding: 20px 24px; background: transparent; border: none; font-size: 15px; font-weight: 600; color: var(--vp-c-text-2);
  cursor: pointer; position: relative; white-space: nowrap; transition: color 0.3s; font-family: 'Montserrat', sans-serif;
}
.tab-btn:hover { color: var(--vp-c-text-1); }
.tab-btn.active { color: var(--echips-blue); }
.tab-btn.active::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; background: var(--echips-blue); border-radius: 3px 3px 0 0; }

.tabs-content { padding: 32px; color: var(--vp-c-text-1); }
.tab-pane h3 { margin: 0 0 16px 0 !important; border: none; padding: 0; font-size: 24px; font-weight: 700; color: var(--vp-c-text-1); }
.pane-desc { color: var(--vp-c-text-2); margin-bottom: 24px; font-size: 15px; }

/* ================= ТАБЛИЦЫ ХАРАКТЕРИСТИК ================= */
.apple-table { width: 100%; border-collapse: collapse; text-align: left; margin: 0; }
.apple-table th {
  padding: 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;
  color: var(--vp-c-text-2); border-bottom: 1px solid var(--border-color); font-weight: 700; width: 35%;
}
.apple-table td { padding: 16px; border-bottom: 1px solid var(--border-color); font-size: 14px; vertical-align: middle; font-weight: 500; }
.apple-table tbody tr:last-child td, .apple-table tbody tr:last-child th { border-bottom: none; }
.apple-table tbody tr:hover td, .apple-table tbody tr:hover th { background: rgba(255, 184, 0, 0.05); }

/* ================= СПИСКИ ФАЙЛОВ И FAQ ================= */
.manual-list { list-style: none; padding: 0; margin: 0; }
.manual-list li {
  display: flex; gap: 16px; align-items: flex-start; padding: 16px;
  border: 1px solid var(--border-color); border-radius: 16px; margin-bottom: 12px;
  background: rgba(0,0,0,0.02); transition: transform 0.2s;
}
html.dark .manual-list li { background: rgba(0,0,0,0.2); }
.manual-list li:hover { transform: translateY(-2px); border-color: rgba(255, 184, 0, 0.3); }
.doc-icon { font-size: 24px; }
.doc-info h4 { margin: 0 0 8px 0 !important; font-size: 16px; font-weight: 600; border: none; padding: 0; color: var(--vp-c-text-1); display: flex; align-items: center; gap: 10px; }
.version-badge { background: rgba(255, 184, 0, 0.2); color: var(--echips-blue); padding: 2px 8px; border-radius: 8px; font-size: 11px; text-transform: uppercase; font-weight: 800; }
.download-link { color: var(--echips-blue) !important; font-weight: 600; transition: opacity 0.2s; font-size: 14px; }
.download-link:hover { opacity: 0.7; }

.faq-list { display: flex; flex-direction: column; gap: 16px; }
.faq-item { padding: 16px; border-radius: 16px; background: rgba(0,0,0,0.02); border: 1px solid var(--border-color); }
html.dark .faq-item { background: rgba(0,0,0,0.2); }
.faq-q { font-weight: 600; color: var(--vp-c-text-1); margin-bottom: 8px; line-height: 1.5; }
.faq-q strong { color: var(--echips-blue); }
.faq-a { color: var(--vp-c-text-2); line-height: 1.5; font-size: 14px; }
.faq-a strong { color: var(--echips-coral); }

/* Анимации */
.fade-in { animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 640px) {
  .tabs-content { padding: 20px 16px; }
  .apple-table th { width: 100%; display: block; padding-bottom: 4px; border: none; }
  .apple-table td { display: block; padding-top: 0; padding-bottom: 16px; }
  .hero-title { font-size: 32px; }
}
</style>