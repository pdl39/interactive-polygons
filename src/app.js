import Polygon from './components/polygon.js';

class App {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.c = canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.isDown = false;
    this.moveX = 0;
    this.offsetX = 0;
    document.addEventListener('pointerdown', this.onDown.bind(this), false);
    document.addEventListener('pointermove', this.onMove.bind(this), false);
    document.addEventListener('pointerup', this.onUp.bind(this), false);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.c.scale(this.pixelRatio, this.pixelRatio);

    this.polygon = new Polygon(
      this.stageWidth / 2,
      this.stageHeight / 2,
      this.stageHeight / 5,
      6
    );
  }

  onDown(e) {
    this.isDown = true;
    this.moveX = 0;
    this.offsetX = e.clientX;
  }

  onMove(e) {
    if (this.isDown) {
      this.moveX = e.clientX - this.offsetX;
      this.offsetX = e.clientX;
    }
  }

  onUp(e) {
    this.isDown = false;
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.c.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.moveX *= 0.99;
    this.polygon.animate(this.c, this.moveX);
  }
}

export default App;
