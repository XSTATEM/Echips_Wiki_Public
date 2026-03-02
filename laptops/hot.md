---
layout: doc
title: Серия Echips Hot
---

<script setup>
import { ref } from 'vue'

// Управление активной вкладкой
const activeTab = ref('drivers')
</script>

<div class="series-header">
  <a href="/laptops/" class="back-link">← Назад к линейкам</a>
  <div class="series-title-row">
    <img src="/images/laptop-hot.png" alt="Echips Hot" class="series-mini-img" onerror="this.style.display='none'">
    <div>
      <h1>Серия Echips Hot</h1>
      <p class="subtitle">Универсальные решения для дома и офиса</p>
    </div>
  </div>
</div>

<div class="tabs-container glass-effect">
  
  <div class="tabs-header">
    <button 
      class="tab-btn" 
      :class="{ active: activeTab === 'drivers' }" 
      @click="activeTab = 'drivers'">
      Драйверы и BIOS
    </button>
    <button 
      class="tab-btn" 
      :class="{ active: activeTab === 'manuals' }" 
      @click="activeTab = 'manuals'">
      Инструкции (FAQ)
    </button>
    <button 
      class="tab-btn" 
      :class="{ active: activeTab === 'service' }" 
      @click="activeTab = 'service'">
      Сервисная документация
    </button>
  </div>

  <div class="tabs-content">
    
    <div v-show="activeTab === 'drivers'" class="tab-pane fade-in">
      <h3>Загрузка драйверов (Windows 11)</h3>
      <p class="pane-desc">Выберите артикул вашего ноутбука (указан на нижней крышке устройства).</p>
      
      <table class="apple-table">
        <thead>
          <tr>
            <th>Артикул (SKU)</th>
            <th>Платформа / Процессор</th>
            <th>Драйверы</th>
            <th>BIOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sku-cell">XPS15U57-1</td>
            <td>Intel Core i3-1025G1</td>
            <td><a href="#" class="download-link">Скачать архив (1.2 ГБ) ↓</a></td>
            <td><a href="#" class="download-link">Версия 1.04 ↓</a></td>
          </tr>
          <tr>
            <td class="sku-cell">NB15A-RH-1</td>
            <td>AMD Ryzen 5 (Ожидается)</td>
            <td><a href="#" class="download-link">Скачать архив (1.4 ГБ) ↓</a></td>
            <td><span class="na-text">Не требуется</span></td>
          </tr>
          <tr>
            <td class="sku-cell">NB140A</td>
            <td>Intel N-series</td>
            <td><a href="#" class="download-link">Скачать архив (950 МБ) ↓</a></td>
            <td><a href="#" class="download-link">Версия 2.1 ↓</a></td>
          </tr>
          <tr>
            <td class="sku-cell">NB141A</td>
            <td>Intel N-series (14.1")</td>
            <td><a href="#" class="download-link">Скачать архив (950 МБ) ↓</a></td>
            <td><a href="#" class="download-link">Версия 2.1 ↓</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-show="activeTab === 'manuals'" class="tab-pane fade-in">
      <h3>Руководства пользователя</h3>
      <ul class="manual-list">
        <li>
          <span class="doc-icon">📄</span>
          <div class="doc-info">
            <h4>Краткое руководство пользователя (Все модели Hot)</h4>
            <a href="#" class="download-link">Скачать PDF (2.4 МБ)</a>
          </div>
        </li>
        <li>
          <span class="doc-icon">⚙️</span>
          <div class="doc-info">
            <h4>Инструкция по установке Windows 11</h4>
            <a href="#" class="download-link">Читать статью →</a>
          </div>
        </li>
        <li>
          <span class="doc-icon">🔧</span>
          <div class="doc-info">
            <h4>Правила эксплуатации АКБ</h4>
            <a href="#" class="download-link">Читать статью →</a>
          </div>
        </li>
      </ul>
    </div>

    <div v-show="activeTab === 'service'" class="tab-pane fade-in">
      <div class="service-warning">
        <span class="warning-icon">⚠️</span>
        <div>
          <strong>Внимание: Раздел для инженеров АСЦ</strong>
          <p>Некомпетентное вмешательство в компонентную базу лишает устройство гарантии производителя.</p>
        </div>
      </div>

      <table class="apple-table">
        <thead>
          <tr>
            <th>Артикул (SKU)</th>
            <th>Boardview (.brd)</th>
            <th>Принципиальная схема (PDF)</th>
            <th>Дамп BIOS (Clear ME)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="sku-cell">XPS15U57-1</td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
          </tr>
          <tr>
            <td class="sku-cell">NB140A</td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
            <td><a href="#" class="download-link locked">Доступ закрыт 🔒</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

<style>
/* ================= БАЗОВЫЕ СТИЛИ ================= */
:root {
  --echips-coral: #f07f65;
  --echips-blue: #5cbbf0;
  --bg-secondary: var(--vp-c-bg-soft);
  --border-color: var(--vp-c-divider);
}

.series-header { margin: 40px 0; }
.back-link { color: var(--echips-blue); text-decoration: none; font-weight: 500; display: inline-block; margin-bottom: 24px; transition: opacity 0.2s; }
.back-link:hover { opacity: 0.7; }
.series-title-row { display: flex; align-items: center; gap: 24px; }
.series-mini-img { height: 80px; object-fit: contain; filter: drop-shadow(0 8px 12px rgba(0,0,0,0.15)); }
.series-header h1 { font-size: 40px; font-weight: 800; margin: 0 0 8px 0; border: none; padding: 0; line-height: 1.2; }
.subtitle { font-size: 18px; color: var(--vp-c-text-2); margin: 0; }

/* ================= СТЕКЛЯННЫЙ КОНТЕЙНЕР ================= */
.glass-effect {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0,0,0,0.05);
}

/* ================= ВКЛАДКИ ================= */
.tabs-header {
  display: flex;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid var(--border-color);
  padding: 0 16px;
  overflow-x: auto;
}
.tab-btn {
  padding: 20px 24px;
  background: transparent;
  border: none;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: color 0.3s;
}
.tab-btn:hover { color: var(--vp-c-text-1); }
.tab-btn.active { color: var(--echips-blue); }
.tab-btn.active::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 3px; background: var(--echips-blue); border-radius: 3px 3px 0 0;
}

.tabs-content { padding: 32px; }
.tab-pane h3 { margin: 0 0 8px 0; border: none; padding: 0; font-size: 24px; }
.pane-desc { color: var(--vp-c-text-2); margin-bottom: 24px; font-size: 15px; }

/* ================= ТАБЛИЦЫ APPLE СТАЙЛ ================= */
.apple-table {
  width: 100%; border-collapse: collapse; text-align: left; margin: 0;
}
.apple-table th {
  padding: 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;
  color: var(--vp-c-text-2); border-bottom: 1px solid var(--border-color); font-weight: 600;
}
.apple-table td {
  padding: 16px; border-bottom: 1px solid var(--border-color); font-size: 14px;
  vertical-align: middle;
}
.apple-table tbody tr:last-child td { border-bottom: none; }
.apple-table tbody tr:hover td { background: rgba(92, 187, 240, 0.03); }

.sku-cell { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-weight: 600; }
.download-link { color: var(--echips-blue); text-decoration: none; font-weight: 500; transition: opacity 0.2s; }
.download-link:hover { opacity: 0.7; }
.download-link.locked { color: var(--vp-c-text-3); pointer-events: none; }
.na-text { color: var(--vp-c-text-3); font-style: italic; }

/* ================= СПИСКИ И АЛЕРТЫ ================= */
.manual-list { list-style: none; padding: 0; margin: 0; }
.manual-list li {
  display: flex; gap: 16px; align-items: flex-start; padding: 16px;
  border: 1px solid var(--border-color); border-radius: 12px; margin-bottom: 12px;
  background: var(--vp-c-bg); transition: transform 0.2s;
}
.manual-list li:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.doc-icon { font-size: 24px; }
.doc-info h4 { margin: 0 0 8px 0; font-size: 16px; font-weight: 600; border: none; padding: 0; }

.service-warning {
  display: flex; gap: 16px; align-items: center; padding: 16px 20px;
  background: rgba(240, 127, 101, 0.1); border-left: 4px solid var(--echips-coral);
  border-radius: 8px; margin-bottom: 24px;
}
.service-warning p { margin: 4px 0 0 0; font-size: 14px; color: var(--vp-c-text-2); }
.warning-icon { font-size: 24px; }

/* ================= АНИМАЦИИ ================= */
.fade-in { animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 640px) {
  .tabs-content { padding: 20px 16px; }
  .apple-table { display: block; overflow-x: auto; white-space: nowrap; }
}
</style>