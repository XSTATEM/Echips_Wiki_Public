---
layout: page
title: Батарея и питание
sidebar: false
---

<div class="echips-wrapper">
  <div class="bg-glow top-glow"></div>
  <div class="bg-glow bottom-glow"></div> 
  <div class="main-header">
    <a href="/" class="back-link">← Назад к списку</a>
    <h1 class="hero-title" style="font-size: 48px; margin-bottom: 10px !important;">Батарея и питание</h1>
    <p class="hero-subtitle">Рекомендации по калибровке и продлению срока службы АКБ</p>
  </div>
  <div class="faq-container glass-effect article-content">
    <div class="mouse-glow"></div>
    <h2>1. Первичная калибровка</h2>
    <p>Новому устройству требуется калибровка контроллера питания, чтобы система корректно отображала процент заряда.</p>
    <ul>
      <li>Полностью зарядите ноутбук до 100%.</li>
      <li>Отключите блок питания и пользуйтесь ноутбуком до тех пор, пока он сам не выключится (0%).</li>
      <li>Подключите зарядное устройство и, <b>не включая ноутбук</b>, дайте ему зарядиться до 100% (около 3-4 часов).</li>
    </ul>
    <div class="alert-box" style="border-left-color: #34C759; background: rgba(52, 199, 89, 0.1);">
      <strong>Совет:</strong> Проведите такую процедуру 1-2 раза в первые дни использования устройства. В дальнейшем полностью разряжать ноутбук в "ноль" не рекомендуется.
    </div>
    <h2>2. Повседневное использование</h2>
    <ul>
      <li><b>Избегайте глубокого разряда.</b> Подключайте зарядное устройство, когда уровень падает до 15-20%.</li>
      <li><b>Не перегревайте.</b> Не используйте ноутбук на мягких поверхностях (одеяла, подушки), перекрывающих вентиляционные отверстия снизу.</li>
      <li><b>Работа от сети.</b> Если ноутбук постоянно работает от розетки, контроллер сам отключит зарядку при 100%. Однако раз в пару недель полезно отключать кабель и разряжать устройство до 20%.</li>
    </ul>
  </div>
</div>

<style scoped>
/* СЮДА ПРОСТО СКОПИРУЙ ТОТ ЖЕ БЛОК <style scoped> ЧТО И В ФАЙЛЕ ВЫШЕ, ОН АБСОЛЮТНО ИДЕНТИЧНЫЙ */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
:deep(h1:not(.hero-title)) { display: none !important; }
.echips-wrapper { --e-yellow: #FFB800; --e-orange: #FF4500; --e-gray: #8E8E93; --e-text: var(--vp-c-text-1); --e-desc: var(--vp-c-text-2); max-width: 900px; margin: 0 auto; padding: 100px 20px 60px; position: relative; font-family: 'Montserrat', sans-serif !important; }
.echips-wrapper a { text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; }
.bg-glow { position: absolute; border-radius: 50%; filter: blur(140px); z-index: -1; pointer-events: none; }
.top-glow { width: 450px; height: 450px; background: var(--e-orange); top: -10%; left: 5%; opacity: 0.25; } 
.bottom-glow { width: 550px; height: 550px; background: var(--e-yellow); bottom: 10%; right: -5%; opacity: 0.15; } 
html.dark .top-glow { opacity: 0.3; } html.dark .bottom-glow { opacity: 0.2; }
.glass-effect { background: var(--vp-c-bg-soft); border: 1px solid rgba(128, 130, 133, 0.25) !important; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important; position: relative; overflow: hidden; border-radius: 28px; }
html.dark .glass-effect { border: 1px solid rgba(255, 255, 255, 0.12) !important; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3) !important; }
.main-header { margin-bottom: 50px; text-align: center; }
.back-link { display: inline-block; margin-bottom: 24px; color: var(--e-gray); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s; }
.back-link:hover { color: var(--e-yellow) !important; }
.hero-title { font-weight: 800; letter-spacing: -0.03em; line-height: 1.1 !important; color: var(--e-text); }
.hero-subtitle { font-size: 18px; color: var(--e-desc); font-weight: 500; margin: 0 !important; }
.article-content { padding: 40px 50px; text-align: left; }
.article-content h2 { font-size: 24px; font-weight: 700; color: var(--e-text); margin: 40px 0 20px; border-bottom: 1px solid rgba(128, 130, 133, 0.15); padding-bottom: 12px; border-top: none !important; }
.article-content h2:first-child { margin-top: 0; }
.article-content p { font-size: 16px; line-height: 1.7; color: var(--e-desc); margin-bottom: 16px; }
.article-content ul { padding-left: 24px; margin-bottom: 24px; color: var(--e-desc); }
.article-content li { margin-bottom: 10px; line-height: 1.6; }
.article-content b, .article-content strong { color: var(--e-text); }
.alert-box { background: rgba(255, 184, 0, 0.1); border-left: 4px solid var(--e-yellow); padding: 18px 24px; border-radius: 0 12px 12px 0; margin-top: 30px; color: var(--e-desc); font-size: 15px; line-height: 1.6; }
@media (max-width: 768px) { .article-content { padding: 30px 20px; } .hero-title { font-size: 36px !important; } }
:deep(.VPNavBar) { background-color: transparent !important; backdrop-filter: blur(25px) !important; -webkit-backdrop-filter: blur(25px) !important; border-bottom: 1px solid var(--vp-c-divider) !important; }
html.dark :deep(.VPNavBar) { background-color: rgba(30, 30, 30, 0.4) !important; border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important; }
</style>