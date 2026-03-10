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
    <a href="/guide/windows" class="big-card glass-effect">
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

