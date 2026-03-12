<template>
  <div 
    class="tilt-card" 
    @mousemove="handleTilt" 
    @mouseleave="resetTilt"
    ref="cardRef"
  >
    <div class="mouse-glow"></div>
    
    <div class="card-stack">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cardRef = ref(null)

//=логика мягкого 3D-наклона (уже с уменьшенными углами)
const handleTilt = (e) => {
  const card = cardRef.value;
  if (!card) return;
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

const resetTilt = () => {
  const card = cardRef.value;
  if (!card) return;
  card.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}
</script>

<style scoped>
/* Все стили стекла и анимации живут теперь только здесь */
.tilt-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
  transform-style: preserve-3d;
  will-change: transform;
  
  /* Базовое стекло */
  background: var(--vp-c-bg-soft); 
  border: 1px solid rgba(128, 130, 133, 0.25);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-radius: 24px;
}
html.dark .tilt-card { 
  border-color: rgba(255, 255, 255, 0.12); 
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3); 
}

/* Эффект при наведении */
.tilt-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 184, 0, 0.4);
  z-index: 10;
}
html.dark .tilt-card:hover { 
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5); 
}

/* Выдвижение контента вперед */
.card-stack {
  position: relative;
  z-index: 1;
  transform: translateZ(30px);
  width: 100%;
  height: 100%;
}

/* Свечение */
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; 
  transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.5), transparent 100%);
  transform: translateZ(10px);
}
html.dark .mouse-glow { background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.6), transparent 100%); }
.tilt-card:hover .mouse-glow { opacity: 1; }
</style>