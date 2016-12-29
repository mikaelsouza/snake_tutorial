var snake;
var food;
var scl = 10;
var score;

function setup() {
  score = document.getElementById("Score");
  frameRate(15);
  createCanvas(600, 600);
  snake = new Snake();
  pickLocation();
  score.innerText = "Score: " + snake.size;
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  snake.update();
  snake.show();
  snake.death();
  score.innerText = "Score: " + snake.size;
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode == LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode == RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
