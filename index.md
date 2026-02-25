---
layout: home
title: Поддержка Echips
---

<div class="apple-support-container">
  
  <div class="header-section">
    <div class="main-logo-circle">
      💻
    </div>
    <h1>Поддержка Echips</h1>
    <p class="subtitle">Нужна помощь? Начните отсюда.</p>
  </div>

  <div class="product-row">
    <a href="/laptops/" class="product-item">
      <div class="product-icon">💻</div>
      <span>Ноутбуки</span>
    </a>
    <a href="/monoblocks/" class="product-item">
      <div class="product-icon">🖥️</div>
      <span>Моноблоки</span>
    </a>
    <a href="/accessories/" class="product-item">
      <div class="product-icon">🖱️</div>
      <span>Аксессуары</span>
    </a>
    <a href="/warranty/" class="product-item">
      <div class="product-icon">🛡️</div>
      <span>Гарантия</span>
    </a>
  </div>

  <div class="action-cards-row">
    <a href="/drivers/" class="action-card">
      <div class="card-icon" style="color: var(--echips-coral)">💾</div>
      <span class="card-link">Скачать драйверы</span>
    </a>
    <a href="/faq/windows" class="action-card">
      <div class="card-icon" style="color: var(--echips-gold)">🪟</div>
      <span class="card-link">Установка Windows</span>
    </a>
    <a href="/service/centers" class="action-card">
      <div class="card-icon" style="color: var(--echips-red)">📍</div>
      <span class="card-link">Найти сервис (АСЦ)</span>
    </a>
  </div>

</div>

<style>
/* ==================================================
   ЦВЕТОВАЯ ПАЛИТРА ECHIPS (из твоей картинки)
   ================================================== */
:root {
  --echips-yellow: #fae155;
  --echips-gold: #d99b28;
  --echips-coral: #f07f65;
  --echips-red: #ba2f25;
  --echips-blue: #5cbbf0; /* Сделала чуть темнее для читаемости текста */
  
  --vp-home-bg: var(--vp-c-bg);
  --card-bg: var(--vp-c-bg-soft);
}

/* ==================================================
   ДИЗАЙН В СТИЛЕ APPLE
   ================================================== */
.apple-support-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Шапка */
.header-section {
  margin-bottom: 60px;
  animation: fadeSlideUp 0.6s ease forwards;
}

.main-logo-circle {
  width: 80px;
  height: 80px;
  background: var(--echips-coral);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 20px;
  box-shadow: 0 10px 20px rgba(240, 127, 101, 0.3);
}

.header-section h1 {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
  color: var(--vp-c-text-1);
}

.subtitle {
  font-size: 20px;
  color: var(--vp-c-text-2);
}

/* Ряд продуктов (Иконки без фона) */
.product-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 80px;
  flex-wrap: wrap;
  animation: fadeSlideUp 0.8s ease forwards;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  transition: transform 0.2s ease;
}

.product-item:hover {
  transform: scale(1.05);
}

.product-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.product-item span {
  font-size: 14px;
  font-weight: 500;
}

/* Ряд карточек действий (Закругленные квадраты) */
.action-cards-row {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  animation: fadeSlideUp 1s ease forwards;
}

.action-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 40px 20px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none !important;
  transition: all 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.action-card:hover {
  background: var(--vp-c-bg-mute);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transform: translateY(-4px);
}

.card-icon {
  font-size: 42px;
  margin-bottom: 15px;
}

.card-link {
  color: var(--echips-blue);
  font-size: 16px;
  font-weight: 400;
}

/* Анимация появления */
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Адаптация под мобилки */
@media (max-width: 768px) {
  .header-section h1 { font-size: 36px; }
  .product-row { gap: 20px; }
  .action-card { width: 100%; max-width: 320px; }
}
</style>