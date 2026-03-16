---
title: Arctic
image: /images/laptop-arctic.png
sidebar: false
---

<script setup>
import { ref } from 'vue'
const activeTab = ref('drivers')
</script>

<div class="tabs-container glass-effect tilt-card">
  <div class="tabs-header">
    <button class="tab-btn" :class="{ active: activeTab === 'drivers' }" @click="activeTab = 'drivers'">Драйверы и BIOS</button>
    <button class="tab-btn" :class="{ active: activeTab === 'manuals' }" @click="activeTab = 'manuals'">Инструкции</button>
  </div>

  <div class="tabs-content">
    <div v-show="activeTab === 'drivers'" class="tab-pane fade-in">
      <h3>Загрузка драйверов</h3>
      <table class="apple-table">
        <thead><tr><th>Артикул</th><th>Драйверы</th></tr></thead>
        <tbody>
          <tr><td>Ваш Артикул</td><td><a href="#">Скачать архив ↓</a></td></tr>
        </tbody>
      </table>
    </div>
    <div v-show="activeTab === 'manuals'" class="tab-pane fade-in">
      <h3>Инструкции</h3>
      <p>Здесь будут руководства.</p>
    </div>
  </div>
</div>
