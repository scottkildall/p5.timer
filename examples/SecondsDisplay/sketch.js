/***********************************************************************************
  Seconds Display

  Uses the p5.timer.js class to show elapsed seconds on the screen

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// uninitialized object
var simpleTimer;
var elapsedSeconds = 0;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  simpleTimer = new Timer(1000);
  simpleTimer.start();

  textAlign(CENTER);
  textSize(96);
 }


// Draw code goes here
function draw() {
  background(128);

  updateTimer();

  fill(255);
  text(elapsedSeconds, width/2, height/2);
}

// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {
  	elapsedSeconds++;
  	simpleTimer.start();
  }
}