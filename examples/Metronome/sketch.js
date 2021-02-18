/***********************************************************************************
  Metronome
  by Scott Kildall

  Uses the p5.timer.js class to play a metronome sound (it's actually a squeak)

  mouse to left will set timer be faster, mouse to right will set to be slower

  Can adjust the time with Timer.setTimer()

  We are going to make the screen flash every time the metronome "clicks".

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// global var for our timer
var simpleTimer;

// drawing
var yTextPos = 60;

// user input
var waitForMouse = true;

// the squeak sound
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

  // newTime is a local variable that represents the new amount of time on the timer
  let newTime = map(mouseX, 0, windowWidth, 10, 250 );
  simpleTimer.setTimer(newTime);

  updateTimer();
}

// flash the screen red and make a metronome sound if timer expires
function updateTimer() {
  if( simpleTimer.expired() ) {
  	metronomeSound.play();
    background(255,0,0);
    simpleTimer.start();
  }
}
