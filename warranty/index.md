---
layout: page
title: Гарантия и возврат
sidebar: false
---

<script setup>
import { ref, computed, onMounted } from 'vue'

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

// Подключаем эффект свечения от мышки для этой страницы
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
    <a href="/" class="back-link">← На главную</a>
    <h1 class="hero-title">Гарантия и сервис</h1>
    <p class="hero-subtitle">До 3 лет спокойствия за ваш ноутбук ECHIPS.</p>
  </div>

  <div class="calculator-section glass-effect">
    <div class="mouse-glow"></div>
    <div class="calc-content">
      <div class="calc-input-area">
        <h3 class="calc-title">Узнайте срок вашей гарантии</h3>
        <p class="calc-desc">Укажите дату покупки из чека (или дату производства по серийному номеру):</p>
        <input type="date" v-model="purchaseDate" class="date-input" />
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
          <p>Выберите дату слева, чтобы увидеть расчет</p>
        </div>
      </div>
    </div>
  </div>

  <div class="warranty-grid">
    <div class="w-card glass-effect">
      <div class="mouse-glow"></div>
      <div class="w-badge">1 ГОД</div>
      <h3>Основная гарантия</h3>
      <ul>
        <li>Действует с момента покупки (по чеку).</li>
        <li>При отсутствии чека — с даты производства (по серийному номеру).</li>
        <li>Включает бесплатное обслуживание, ремонт и замену деталей в рамках гарантии.</li>
      </ul>
    </div>
    <div class="w-card glass-effect border-yellow">
      <div class="mouse-glow"></div>
      <div class="w-badge bg-yellow">ДО 3 ЛЕТ</div>
      <h3>Расширенная гарантия</h3>
      <p>Продлевайте гарантию на год (до 3 лет) всего за <strong>1000 ₽</strong>!</p>
      <ul>
        <li>Обратитесь в АСЦ <strong>до истечения</strong> текущей гарантии.</li>
        <li>Мастер проведет полное ТО (очистка СО, замена термопасты).</li>
        <li>Вы получите Акт с новой датой гарантии (дата выдачи + 1 год).</li>
      </ul>
    </div>
  </div>

  <div class="alert-box glass-effect">
    <div class="mouse-glow"></div>
    <div class="alert-text">
      <strong>Ремонт только в АСЦ!</strong> 
      Обслуживание и ремонт устройств ECHIPS в неавторизованных центрах, а также самостоятельное вскрытие влечет за собой полное прекращение гарантии. <a href="/service" class="text-yellow">Найти ближайший АСЦ &rarr;</a>
    </div>
  </div>

  <h2 class="section-title">Возврат товара</h2>
  <div class="returns-grid">
    <div class="return-card glass-effect">
      <div class="mouse-glow"></div>
      <h4>Маркетплейсы (WB, Ozon, Я.Маркет)</h4>
      <p>Возврат осуществляется строго через интерфейс платформы, на которой был куплен товар.</p>
      <ol>
        <li>Перейдите в раздел «Мои заказы».</li>
        <li>Выберите ноутбук и нажмите «Вернуть товар».</li>
        <li>Следуйте инструкциям по упаковке и отправке.</li>
      </ol>
      <p class="small-text text-gray">* Сроки возврата зависят от правил конкретного маркетплейса.</p>
    </div>
    <div class="return-card glass-effect">
      <div class="mouse-glow"></div>
      <h4>Памятка потребителя</h4>
      <ul class="tips-list">
        <li><strong>Сохраните документы:</strong> Храните чек, гарантийный талон и заводскую упаковку.</li>
        <li><strong>Качество:</strong> Убедитесь, что товар не имеет механических повреждений и упакован должным образом.</li>
        <li><strong>Политика:</strong> Изучайте условия возврата перед покупкой во избежание недоразумений.</li>
      </ul>
    </div>
  </div>

  <div class="support-contacts glass-effect">
    <div class="mouse-glow"></div>
    <h3>Остались вопросы? Мы на связи!</h3>
    <div class="support-grid">
      <div class="support-item">
        <span class="s-icon">💬</span>
        <div class="s-info">
          <h5>Для клиентов</h5>
          <p><strong>8 (922) 698-13-04</strong> (Валерий)</p>
          <span>WhatsApp / Telegram. Пн-Пт с 10:00 до 18:00 (МСК).</span>
        </div>
      </div>
      <div class="support-item partner-support">
        <span class="s-icon">🛠</span>
        <div class="s-info">
          <h5>Для сервисных центров</h5>
          <p><strong>8 (951) 255-75-55</strong> (Старший инженер)</p>
          <span>Ежедневно с 07:00 до 15:00 (МСК).</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* ================= ГЛОБАЛЬНЫЕ ПАРАМЕТРЫ ДЛЯ СТРАНИЦЫ ================= */
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; background-color: transparent !important; }
.echips-wrapper h1, .echips-wrapper h2, .echips-wrapper h3, .echips-wrapper h4, .echips-wrapper h5 { border: none !important; margin: 0; padding: 0; }

.echips-wrapper {
  --e-yellow: #FFB800; --e-orange: #FF4500; --e-gray: #8E8E93;
  --e-text: var(--vp-c-text-1); --e-desc: var(--vp-c-text-2);
  max-width: 1100px; margin: 0 auto; padding: 60px 20px;
  position: relative; font-family: 'Montserrat', sans-serif !important;
}

/* Фон */
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.45; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 
html.dark .top-glow { opacity: 0.45; } html.dark .bottom-glow { opacity: 0.2; }

/* Эффекты стекла и мыши */
.glass-effect {
  background: var(--vp-c-bg-soft); border: 1px solid rgba(128, 130, 133, 0.25) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important; transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative; overflow: hidden;
}
html.dark .glass-effect { border: 1px solid rgba(255, 255, 255, 0.12) !important; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important; }
.mouse-glow {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; z-index: 0;
  background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 184, 0, 0.8), transparent 100%);
}
.glass-effect:hover .mouse-glow { opacity: 1; }

/* Шапка */
.main-header { margin-bottom: 50px; text-align: center; }
.back-link { display: inline-block; margin-bottom: 24px; color: var(--e-gray); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s; }
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-size: 52px; font-weight: 800; color: var(--e-text); letter-spacing: -0.03em; }
.hero-subtitle { font-size: 20px; color: var(--e-desc); margin-top: 10px; font-weight: 500; }

/* ================= ЛОКАЛЬНЫЕ СТИЛИ ГАРАНТИИ ================= */
.section-title { font-size: 32px; font-weight: 800; margin: 60px 0 30px !important; text-align: center; color: var(--e-text); }

/* Калькулятор */
.calculator-section { padding: 30px; border-radius: 28px; margin-bottom: 40px; z-index: 5; }
.calc-content { display: flex; gap: 40px; align-items: stretch; position: relative; z-index: 1; }
.calc-input-area { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.calc-title { font-size: 24px; font-weight: 700; margin-bottom: 10px !important; color: var(--e-text); }
.calc-desc { color: var(--e-desc); margin-bottom: 20px; font-size: 15px; }

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
}
html.dark .calc-result-area { background: rgba(0, 0, 0, 0.3); }
.calc-result-area.active { border: 1px solid var(--e-yellow); background: rgba(255, 184, 0, 0.05); }

.calc-placeholder { text-align: center; color: var(--e-desc); opacity: 0.7; }
.icon-calendar { font-size: 32px; margin-bottom: 10px; display: block; }
.result-block { margin-bottom: 20px; }
.result-block:last-child { margin-bottom: 0; }
.res-label { display: block; font-size: 13px; text-transform: uppercase; font-weight: 600; color: var(--e-desc); margin-bottom: 5px; }
.res-value { font-size: 24px; font-weight: 800; color: var(--e-text); }
.res-value.expired { color: var(--e-orange); text-decoration: line-through; opacity: 0.7; }
.text-yellow { color: var(--e-yellow) !important; }
.text-gray { color: var(--e-gray) !important; }
.res-hint { font-size: 13px; color: var(--e-gray); margin-top: 5px; }

/* Сетка гарантий */
.warranty-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 40px; }
.w-card { padding: 40px 30px; border-radius: 28px; }
.w-card > * { position: relative; z-index: 1; }
.border-yellow { border-color: rgba(255, 184, 0, 0.4) !important; }
.w-badge { display: inline-block; padding: 6px 14px; background: rgba(142, 142, 147, 0.2); border-radius: 12px; font-size: 13px; font-weight: 700; margin-bottom: 20px; color: var(--e-text); }
.bg-yellow { background: var(--e-yellow); color: #000; }
.w-card h3 { font-size: 22px; font-weight: 800; margin-bottom: 15px !important; color: var(--e-text); }
.w-card p { color: var(--e-desc); line-height: 1.5; margin-bottom: 15px; }
.w-card ul { padding-left: 20px; color: var(--e-text); margin: 0; }
.w-card li { margin-bottom: 10px; line-height: 1.5; }

/* Алерт */
.alert-box { display: flex; gap: 20px; align-items: center; padding: 24px 30px; border-radius: 20px; background: rgba(255, 69, 0, 0.05); border-color: rgba(255, 69, 0, 0.2) !important; margin-bottom: 60px; }
.alert-icon { font-size: 32px; position: relative; z-index: 1; }
.alert-text { line-height: 1.5; color: var(--e-text); position: relative; z-index: 1; }

/* Возврат */
.returns-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 60px; }
.return-card { padding: 30px; border-radius: 24px; }
.return-card > * { position: relative; z-index: 1; }
.return-card h4 { font-size: 20px; font-weight: 700; margin-bottom: 15px !important; color: var(--e-text); }
.return-card p { color: var(--e-desc); line-height: 1.5; margin-bottom: 15px; }
.return-card ol { padding-left: 20px; margin-bottom: 15px; line-height: 1.6; color: var(--e-text); }
.tips-list { padding-left: 20px; color: var(--e-text); margin: 0; }
.tips-list li { margin-bottom: 12px; line-height: 1.5; }
.small-text { font-size: 13px; margin-bottom: 0 !important; }

/* Поддержка */
.support-contacts { padding: 40px; border-radius: 28px; text-align: center; }
.support-contacts > * { position: relative; z-index: 1; }
.support-contacts h3 { font-size: 24px; font-weight: 800; margin-bottom: 30px !important; color: var(--e-text); }
.support-grid { display: flex; gap: 20px; text-align: left; }
.support-item { flex: 1; display: flex; gap: 15px; padding: 20px; background: var(--vp-c-bg-soft); border-radius: 16px; border: 1px solid rgba(128,130,133,0.1); }
html.dark .support-item { background: rgba(0,0,0,0.2); border-color: rgba(255,255,255,0.05); }
.partner-support { background: rgba(142, 142, 147, 0.05); }
.s-icon { font-size: 28px; }
.s-info h5 { margin: 0 0 5px 0 !important; color: var(--e-gray); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
.s-info p { margin: 0 0 5px 0; font-size: 18px; color: var(--e-text); }
.s-info span { font-size: 13px; color: var(--e-desc); line-height: 1.4; display: block; }

/* Навбар */
:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
html, body { overflow-x: hidden !important; }

/* Адаптив */
@media (max-width: 800px) {
  .calc-content, .warranty-grid, .returns-grid, .support-grid { flex-direction: column; display: flex; }
  .calc-input-area { margin-bottom: 20px; }
}
</style>