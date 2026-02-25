---
layout: home

hero:
  name: "Поддержка Echips"
  text: "Всё работает как надо."
  tagline: Драйверы, руководства и быстрые ответы на ваши вопросы в одном месте. Ничего лишнего.
  actions:
    - theme: brand
      text: Найти драйверы
      link: /drivers/
    - theme: alt
      text: Частые вопросы
      link: /faq/

features:
  - title: Быстрый старт
    details: Распаковка, первое включение и базовая настройка Windows шаг за шагом.
    link: /guide/quick-start
  - title: Драйверы и загрузки
    details: Актуальные версии официального ПО для всех моделей ноутбуков Echips.
    link: /drivers/
  - title: Решение проблем
    details: Пропал звук, не подключается Wi-Fi или нужна помощь с настройкой? Начните отсюда.
    link: /faq/
  - title: Гарантия и сервис
    details: Прозрачные условия обслуживания, адреса авторизованных центров и правила сдачи в ремонт.
    link: /warranty/
---

<style>
/* Немного CSS-магии для эффекта "Apple" (округляем углы, добавляем мягкие тени при наведении) */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #1c1c1e 30%, #48484a);
}

.dark {
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ffffff 30%, #ebebf5);
}

.VPFeature {
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  border-radius: 16px !important;
}

.VPFeature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}
</style>