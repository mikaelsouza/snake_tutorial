var snake;
var food;
var scl = 30;
var score;
var pressed;

function setup() {
  score = document.getElementById("Score");
  frameRate(15);
  createCanvas(601, 601);
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

restart = function() {
  snake.size = 0;
  snake.tail = [];

  snake.x = 0;
  snake.y = 0;

  snake.xspeed = 1;
  snake.yspeed = 0;

  pickLocation();
};

function draw() {
  background(51);

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  snake.update();
  if (snake.death()) {
    restart();
  }
  snake.show();

  score.innerText = "Score: " + snake.size;
  pressed = false;
}

function keyPressed() {

  if (pressed === false) {
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
  pressed = true;
}
