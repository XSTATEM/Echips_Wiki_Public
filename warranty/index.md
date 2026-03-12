---
layout: page
title: Гарантия и возврат
sidebar: false
---

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const purchaseDate = ref('')

// Логика умного калькулятора
const calcResult = computed(() => {
  if (!purchaseDate.value) return null;
  const d = new Date(purchaseDate.value);
  if (isNaN(d)) return null;
  
  // Основная гарантия (1 год)
  const basic = new Date(d);
  basic.setFullYear(basic.getFullYear() + 1);
  
  // Максимальная расширенная гарантия (3 года)
  const max = new Date(d);
  max.setFullYear(max.getFullYear() + 3);

  // Склонение месяцев для красоты
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return {
    basic: basic.toLocaleDateString('ru-RU', options),
    max: max.toLocaleDateString('ru-RU', options),
    isExpired: basic < new Date()
  }
})

// ================= МАГИЯ 3D НАКЛОНА (TILT EFFECT) =================

// Функция, которая заставляет плашку "прогибаться"
const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  
  // Координаты мыши внутри плашки
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Центр плашки
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Угол наклона (чем больше делитель, тем мягче наклон)
  // Увеличила силу наклона для заметности
  const rotateX = ((y - centerY) / centerY) * -10; // Наклон по вертикали
  const rotateY = ((x - centerX) / centerX) * 10;  // Наклон по горизонтали
  
  // Применяем трансформацию и обновляем координаты для свечения
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
}

// Функция возврата плашки в ровное состояние
const resetTilt = (e) => {
  const card = e.currentTarget;
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}

let cards = [];

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Находим все "стеклянные" плашки
    cards = document.querySelectorAll('.tilt-card');
    
    // Вешаем события мыши на каждую
    cards.forEach(card => {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', resetTilt);
    });
  }
})

// Убираем за собой события при закрытии страницы
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
    <h1 class="hero-title">Гарантия и сервис</h1>
    <p class="hero-subtitle">До 3 лет спокойствия за ваш ноутбук ECHIPS.</p>
  </div>

  <div class="calculator-section glass-effect tilt-card">
    <div class="mouse-glow"></div>
    <div class="calc-content">
      <div class="calc-input-area">
        <h3 class="calc-title">Узнайте срок вашей гарантии</h3>
        <p class="calc-desc">Укажите дату покупки из чека или гарантийного талона:</p>
        <div class="input-wrapper" @mousemove.stop>
          <input type="date" v-model="purchaseDate" class="date-input" />
        </div>
      </div>
      
      <div class="calc-result-area" :class="{ 'active': calcResult }">
        <div v-if="calcResult">
          <div class="result-block">
            <span class="res-label">Основная гарантия истекает:</span>
            <span class="res-value" :class="{'expired': calcResult.isExpired}">{{ calcResult.basic }}</span>
          </div>
          <div class="result-block max-warranty">
            <span class="res-label">Максимальная расширенная гарантия:</span>
            <span class="res-value text-yellow">до {{ calcResult.max }}</span>
            <p class="res-hint">При условии ежегодного платного ТО в АСЦ.</p>
          </div>
        </div>
        <div v-else class="calc-placeholder">
          <span class="icon-calendar">📅</span>
          <p>Выберите дату слева, чтобы увидеть расчет</p>
        </div>
      </div>
    </div>
  </div>

  <div class="warranty-grid">
    <div class="w-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="w-badge">1 ГОД</div>
        <h3>Основная гарантия</h3>
        <ul>
          <li>Действует с момента покупки (по чеку).</li>
          <li>При отсутствии чека — с даты производства.</li>
          <li>Бесплатный ремонт и замена деталей (гарантийный случай).</li>
        </ul>
      </div>
    </div>

    <div class="w-card glass-effect border-yellow tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <div class="w-badge bg-yellow">ДО 3 ЛЕТ</div>
        <h3>Расширенная гарантия</h3>
        <p>Продлевайте гарантию на год всего за <strong>1000 ₽</strong>!</p>
        <ul>
          <li>Обратитесь в АСЦ <strong>до истечения</strong> текущей гарантии.</li>
          <li>Полное ТО (очистка СО, замена термопасты).</li>
          <li>Получите Акт с новой датой гарантии (+1 год).</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="alert-box glass-effect">
    <div class="alert-icon">⚠️</div>
    <div class="alert-text">
      <strong>Ремонт только в АСЦ!</strong> 
      Обслуживание в неавторизованных центрах, а также самостоятельное вскрытие влечет прекращение гарантии. <a href="/service" class="text-yellow">Найти АСЦ &rarr;</a>
    </div>
  </div>

  <h2 class="section-title">Возврат товара</h2>
  <div class="returns-grid">
    <div class="return-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <h4>Маркетплейсы (WB, Ozon, Я.Маркет)</h4>
        <p>Возврат осуществляется строго через интерфейс платформы покупки.</p>
        <ol>
          <li>Раздел «Мои заказы».</li>
          <li>Кнопка «Вернуть товар».</li>
          <li>Инструкции по упаковке и отправке.</li>
        </ol>
        <p class="small-text text-gray">* Сроки зависят от правил маркетплейса.</p>
      </div>
    </div>
    
    <div class="return-card glass-effect tilt-card">
      <div class="mouse-glow"></div>
      <div class="card-stack">
        <h4>Памятка потребителя</h4>
        <ul class="tips-list">
          <li><strong>Сохраните документы:</strong> Чек, гарантийный талон и заводскую упаковку.</li>
          <li><strong>Качество:</strong> Отсутствие механических повреждений и полная комплектация.</li>
          <li><strong>Политика:</strong> Изучайте условия возврата до покупки.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="support-contacts glass-effect tilt-card">
    <div class="mouse-glow"></div>
    <div class="card-stack">
      <h3>Остались вопросы? Мы на связи!</h3>
      <div class="support-grid">
        <div class="support-item" @mousemove.stop> <span class="s-icon">💬</span>
          <div class="s-info">
            <h5>Для клиентов</h5>
            <p><strong>8 (922) 698-13-04</strong></p>
            <span>Валерий. WhatsApp / Telegram.<br>Пн-Пт с 10:00 до 18:00 (МСК).</span>
          </div>
        </div>
        <div class="support-item partner-support" @mousemove.stop>
          <span class="s-icon">🛠</span>
          <div class="s-info">
            <h5>Для сервисных центров</h5>
            <p><strong>8 (951) 255-75-55</strong></p>
            <span>Старший инженер.<br>Ежедневно с 07:00 до 15:00 (МСК).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ================= ОБЩИЕ ПАРАМЕТРЫ СТРАНИЦЫ ================= */
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; background-color: transparent !important; transition: color 0.3s; }
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3, .echips-wrapper h4, .echips-wrapper h5 { border: none !important; margin: 0; padding: 0; color: var(--e-text); }
.echips-wrapper p, .echips-wrapper ul, .echips-wrapper ol { margin: 0; padding: 0; }

.echips-wrapper {
  --e-yellow: #FFB800; --e-orange: #FF4500; --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1); --e-desc: var(--vp-c-text-2);
  max-width: 1100px; margin: 0 auto; padding: 60px 20px;
  position: relative; font-family: 'Montserrat', sans-serif !important;
  /* Добавляем перспективу всему контейнеру, чтобы 3D работало */
  perspective: 1000px;
}

/* Фон */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.3; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 
html.dark .top-glow { opacity: 0.35; } html.dark .bottom-glow { opacity: 0.2; }

/* ================= СТИЛИ СТЕКЛА И 3D ЭФФЕКТА ================= */
.glass-effect {
  background: var(--vp-c-bg-soft); border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important; 
  position: relative; overflow: hidden;
}
html.dark .glass-effect { border: 1px solid rgba(255, 255, 255, 0.12) !important; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important; }

/* Базовый класс для всех наклоняющихся карточек */
.tilt-card {
  /* Важно для плавного возвращения мыши */
  transition: transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease;
  /* Указываем, что трансформация происходит в 3D пространстве */
  transform-style: preserve-3d;
  will-change: transform;
}

/* При наведении карточка чуть сильнее всплывает и светится */
.tilt-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15) !important;
  border-color: rgba(255, 184, 0, 0.4) !important;
  z-index: 10; /* Всплывает над другими */
}
html.dark .tilt-card:hover { box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important; }

/* Контейнер внутри карточки, чтобы контент не деформировался */
.card-stack {
  position: relative; z-index: 1;
  /* Заставляет контент слегка "выпирать" вперед (параллакс) */
  transform: translateZ(30px);
}

/* Свечение мыши */
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.5), transparent 100%);
  /* Свечение находится глубже контента */
  transform: translateZ(10px);
}
/* В темной теме свечение сочнее */
html.dark .mouse-glow { background: radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.6), transparent 100%); }
.tilt-card:hover .mouse-glow { opacity: 1; }

/* ================= ЛОКАЛЬНЫЕ СТИЛИ СТРАНИЦЫ ================= */
.main-header { margin-bottom: 50px; text-align: center; perspective: none; /* Шапка не наклоняется */ }
.back-link { display: inline-block; margin-bottom: 24px; color: var(--e-gray); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; letter-spacing: -0.03em; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }
.section-title { font-size: 32px; font-weight: 800; margin: 60px 0 30px !important; text-align: center; perspective: none; }

/* Калькулятор */
.calculator-section { padding: 35px; border-radius: 28px; margin-bottom: 40px; z-index: 5; }
.calc-content { display: flex; gap: 40px; align-items: stretch; }
.calc-input-area { flex: 1; display: flex; flex-direction: column; justify-content: center; transform: translateZ(40px); /* Выпирает сильнее */ }
.calc-title { font-size: 24px; font-weight: 700; margin-bottom: 10px !important; }
.calc-desc { color: var(--e-desc); margin-bottom: 20px; font-size: 15px; line-height: 1.4; }

.input-wrapper { display: inline-block; }
.date-input {
  width: 100%; max-width: 300px; padding: 12px 20px; border-radius: 16px;
  background: rgba(142, 142, 147, 0.1); border: 1px solid rgba(142, 142, 147, 0.3);
  color: var(--e-text); font-family: 'Montserrat', sans-serif; font-size: 16px;
  outline: none; transition: border 0.3s; color-scheme: dark;
}
html:not(.dark) .date-input { color-scheme: light; }
.date-input:focus { border-color: var(--e-yellow); }

.calc-result-area {
  flex: 1; background: rgba(0, 0, 0, 0.05); border-radius: 20px; padding: 30px;
  display: flex; flex-direction: column; justify-content: center;
  border: 1px dashed rgba(142, 142, 147, 0.3); transition: all 0.3s ease;
  transform: translateZ(20px);
}
html.dark .calc-result-area { background: rgba(0, 0, 0, 0.3); }
.calc-result-area.active { border: 1px solid var(--e-yellow); background: rgba(255, 184, 0, 0.05); }

.calc-placeholder { text-align: center; color: var(--e-desc); opacity: 0.7; }
.icon-calendar { font-size: 32px; margin-bottom: 10px; display: block; }
.result-block { margin-bottom: 20px; }
.result-block:last-child { margin-bottom: 0; }
.res-label { display: block; font-size: 12px; text-transform: uppercase; font-weight: 600; color: var(--e-desc); margin-bottom: 5px; letter-spacing: 0.5px; }
.res-value { font-size: 24px; font-weight: 800; color: var(--e-text); line-height: 1.2; }
.res-value.expired { color: var(--e-orange); text-decoration: line-through; opacity: 0.7; }
.text-yellow { color: var(--e-yellow) !important; }
.text-gray { color: var(--e-gray) !important; }
.res-hint { font-size: 13px; color: var(--e-gray); margin-top: 5px; }

/* Сетка гарантий */
.warranty-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
.w-card { padding: 45px 35px; border-radius: 28px; }
.border-yellow { border-color: rgba(255, 184, 0, 0.35) !important; }
.w-badge { display: inline-block; padding: 6px 14px; background: rgba(142, 142, 147, 0.15); border-radius: 12px; font-size: 12px; font-weight: 700; margin-bottom: 20px; letter-spacing: 0.5px; }
.bg-yellow { background: var(--e-yellow); color: #000; }
.w-card h3 { font-size: 22px; font-weight: 800; margin-bottom: 15px !important; }
.w-card p { color: var(--e-desc); line-height: 1.5; margin-bottom: 15px; }
.w-card ul { padding-left: 20px; color: var(--e-text); }
.w-card li { margin-bottom: 10px; line-height: 1.5; }

/* Алерт (не наклоняется) */
.alert-box { display: flex; gap: 20px; align-items: center; padding: 24px 30px; border-radius: 20px; background: rgba(255, 69, 0, 0.05); border-color: rgba(255, 69, 0, 0.2) !important; margin-bottom: 60px; perspective: none; }
.alert-icon { font-size: 32px; }
.alert-text { line-height: 1.5; color: var(--e-text); font-size: 15px; }
.alert-text strong { font-weight: 700; color: var(--e-orange); }

/* Возврат */
.returns-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 60px; }
.return-card { padding: 35px; border-radius: 24px; }
.return-card h4 { font-size: 20px; font-weight: 700; margin-bottom: 15px !important; }
.return-card p { color: var(--e-desc); line-height: 1.5; margin-bottom: 15px; }
.return-card ol { padding-left: 20px; margin-bottom: 15px; line-height: 1.6; color: var(--e-text); }
.tips-list { padding-left: 20px; color: var(--e-text); }
.tips-list li { margin-bottom: 12px; line-height: 1.5; }
.small-text { font-size: 13px; margin-bottom: 0 !important; }

/* Поддержка */
.support-contacts { padding: 45px; border-radius: 28px; text-align: center; }
.support-contacts h3 { font-size: 26px; font-weight: 800; margin-bottom: 35px !important; }
.support-grid { display: flex; gap: 20px; text-align: left; transform: translateZ(20px); }
.support-item { flex: 1; display: flex; gap: 15px; padding: 25px; background: rgba(142, 142, 147, 0.05); border-radius: 20px; border: 1px solid rgba(128,130,133,0.1); transition: all 0.3s ease; }
html.dark .support-item { background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.05); }
.support-item:hover { background: rgba(142, 142, 147, 0.1); border-color: rgba(128,130,133,0.2); transform: translateY(-3px); }
html.dark .support-item:hover { background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1); }
.partner-support { background: rgba(255, 184, 0, 0.03); border-color: rgba(255, 184, 0, 0.1); }
.partner-support:hover { background: rgba(255, 184, 0, 0.05); border-color: rgba(255, 184, 0, 0.2); }

.s-icon { font-size: 30px; }
.s-info h5 { margin: 0 0 6px 0 !important; color: var(--e-gray); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
.s-info p { margin: 0 0 6px 0; font-size: 19px; font-weight: 700; color: var(--e-text); }
.s-info span { font-size: 13px; color: var(--e-desc); line-height: 1.4; display: block; }

/* Системные исправления */
:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; perspective: none; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
html, body { overflow-x: hidden !important; }

/* Адаптив */
@media (max-width: 850px) {
  .calc-content, .warranty-grid, .returns-grid, .support-grid { flex-direction: column; display: flex; }
  .calc-input-area { margin-bottom: 25px; text-align: center; align-items: center; }
  .support-item { padding: 20px; }
}
</style>