// Preload mínimo — expõe um flag de "desktop" para o app web.
// contextIsolation: true — nada sensível é exposto ao renderer.
window.addEventListener('DOMContentLoaded', () => {
  try {
    document.documentElement.setAttribute('data-plansc-desktop', 'true');
  } catch (e) {}
});