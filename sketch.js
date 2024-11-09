function setup() {
  createCanvas(1280, 593);

  const myColors = {
    pink: [230, 67, 126, 0],
    brown: [110, 99, 82, 0],
    darkBrown: [56, 49, 39, 0],
    darkerBlue: [20, 24, 59, 0],
    darkBlue: [7, 111, 222, 0],
    lightPurple: [130, 77, 184, 0],
    darkPurple: [97, 60, 117, 0],
    darkPurple2: [39, 17, 64, 0]
  }

  const walkers = []
  Object.values(myColors).forEach(e => walkers.push(new Walker(e, ADD)));

  background(30, 30, 30);

  
  for (let i = 0; i < 100000; i++) {
    setTimeout(() => {
      walkers.forEach(e => e.step().changeColor().show());
      if (floor(random(2000)) === 42) {printStar();}
    }, 5);
  }
}

function printStar() {
    const x = floor(random(width));
    const y = floor(random(height));
    stroke([255, 220, 170, 150]);
    blendMode(ADD);
    strokeWeight(floor(random(3, 5)));
    point(x, y);
    strokeWeight(2);
    point(x, y);point(x, y);
  
}

class Walker {
  constructor(color, mode) {
    this.x = width/2;
    this.y = height/2;
    this.color = color;
    this.mode = mode;
  }
  changeColor() { // just changes alpha
    this.color[3] = (this.color[3]+0.5)%60;
    return this;
  }
  show() {
    blendMode(this.mode);
    stroke(this.color);
    strokeWeight(floor(random(2, 4)))
    point(this.x, this.y);
    return this;
  }
  step() {
    let xstep = (floor(random(3)) - 1)*2;
    let ystep = (floor(random(3)) - 1)*2;
    this.x += xstep;
    this.y += ystep;
    return this;
  }
}

