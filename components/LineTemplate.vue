<template>
  <div class="echips-wrapper">
    <div class="bg-glow top-glow"></div>
    <div class="bg-glow bottom-glow"></div>

    <div class="series-header">
      <a href="/laptops/" class="back-link">← Ко всем линейкам</a>
      <h1 class="hero-title">Линейка {{ frontmatter.title }}</h1>
      <p class="subtitle">Выберите модель вашего устройства</p>
    </div>

    <div v-if="filteredSkus.length > 0" class="sku-grid">
      <a v-for="sku in filteredSkus" :key="sku.url" :href="sku.url" class="sku-card glass-effect tilt-card">
        <div class="mouse-glow"></div>
        <div class="card-stack">
          <h3>{{ sku.title }}</h3>
          <span class="btn-yellow">Характеристики и драйверы &rarr;</span>
        </div>
      </a>
    </div>
    
    <div v-else class="empty-state glass-effect">
      <p>В эту линейку еще не добавлены модели.</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as allSkus } from '../laptops/skus.data.mjs'

const { frontmatter } = useData()
const route = useRoute()

// МАГИЯ: Фильтруем артикулы. Оставляем только те, чей URL начинается с URL текущей линейки
const filteredSkus = computed(() => {
  const currentPath = route.path.replace(/\.html$/, '').replace(/\/$/, '')
  return allSkus.filter(sku => sku.url.startsWith(currentPath + '/'))
})

// 3D Наклон для карточек
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      const cards = document.querySelectorAll('.tilt-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

:deep(h1:not(.hero-title)) { display: none !important; }
.echips-wrapper a { text-decoration: none !important; }

.echips-wrapper {
  --echips-coral: #FF4500; --echips-blue: #FFB800;
  max-width: 1000px; margin: 0 auto; padding: 140px 20px 60px;
  position: relative; font-family: 'Montserrat', sans-serif !important;
}

.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--echips-coral); top: -10%; left: 5%; opacity: 0.25; } 
.bottom-glow { width: 550px; height: 550px; background: var(--echips-blue); bottom: 10%; right: -5%; opacity: 0.15; } 

.series-header { margin-bottom: 50px; text-align: center; }
.back-link { color: var(--vp-c-text-2) !important; text-transform: uppercase; font-size: 14px; font-weight: 600; display: inline-block; margin-bottom: 24px; }
.hero-title { font-size: 42px; font-weight: 800; margin: 0 0 10px 0 !important; color: var(--vp-c-text-1); }
.subtitle { font-size: 18px; color: var(--vp-c-text-2); margin: 0; }

.sku-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }
.sku-card { padding: 35px 25px; border-radius: 20px; display: flex; flex-direction: column; align-items: center; text-align: center; }
.sku-card h3 { font-size: 24px; font-weight: 800; color: var(--vp-c-text-1); margin-bottom: 20px !important; border: none; padding: 0; }

.btn-yellow { font-size: 14px; font-weight: 600; color: var(--vp-c-text-1); background: var(--vp-c-default-soft); padding: 12px 24px; border-radius: 20px; transition: all 0.3s; }
.sku-card:hover .btn-yellow { background: var(--echips-blue); color: #000; box-shadow: 0 4px 12px rgba(255, 184, 0, 0.3); }

.glass-effect { background: var(--vp-c-bg-soft); border: 1px solid rgba(128, 130, 133, 0.25); box-shadow: 0 12px 32px rgba(0,0,0,0.08); overflow: hidden; position: relative; }
html.dark .glass-effect { border-color: rgba(255, 255, 255, 0.12); box-shadow: 0 16px 40px rgba(0,0,0,0.3); }

.tilt-card { transition: transform 0.2s, box-shadow 0.3s, border-color 0.3s; }
.tilt-card:hover { transform: translateY(-5px); border-color: rgba(255, 184, 0, 0.4); }
.card-stack { position: relative; z-index: 1; }

.mouse-glow { position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s; pointer-events: none; z-index: 0; background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.6), transparent 100%); }
.sku-card:hover .mouse-glow { opacity: 1; }

.empty-state { padding: 40px; text-align: center; border-radius: 20px; color: var(--vp-c-text-2); font-size: 16px; }

:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; perspective: none; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
</style>