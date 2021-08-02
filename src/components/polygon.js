const twoPi = Math.PI * 2;

class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(c, moveX) {
    c.save();
    c.fillStyle = '#4df2a1';
    c.beginPath();

    const angle = twoPi / this.sides;

    c.translate(this.x, this.y);

    this.rotate -= moveX * 0.01;
    c.rotate(this.rotate);

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i);
      const y = this.radius * Math.sin(angle * i);

      (i == 0) ? c.moveTo(x, y) : c.lineTo(x, y);

    }



    c.fill();
    c.closePath();
    c.restore();
  }
}

export default Polygon;
