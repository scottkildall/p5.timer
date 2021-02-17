/***********************************************************************************
  Metronome

  Uses the p5.timer.js class to play a metronome sound (it's actually a squeak)

  mouse to left will set timer be faster, mouse to right will set to be slower

  Can adjust the sound with setTimer

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/


var simpleTimer;
var waitForClick = true;
var yTextPos = 60;
var metronomeSound;

function preload() {
  metronomeSound = loadSound('assets/squeak.wav');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Allocate the timer itself, specify time in milliseconds
  simpleTimer = new Timer(1000);
  simpleTimer.start();

  textAlign(CENTER);
  textSize(24);
  frameRate(10);
 }


// Draw code goes here
function draw() {
  background(0);

  newTime = map(mouseX, 0,windowWidth, 250,3000);
  simpleTimer.setTimer(newTime);

  updateTimer();
}

// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {
  	metronomeSound.play();
    simpleTimer.start();
    background(255,0,0);
  }
}



