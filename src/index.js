import App from './app.js';
import fallback from './fallback.js';

const canvas = document.getElementById('canvas');

if (canvas.getContext) {
  window.onload = () => {
    new App();
  }
}
else {
  canvas.innerHTML = fallback;
}
