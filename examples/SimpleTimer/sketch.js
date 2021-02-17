/***********************************************************************************
  Simple Timer

  Uses the p5.timer.js class to show a 10-second countdown

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/


var simpleTimer;
var waitForClick = true;
var yTextPos = 60;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Allocate the timer itself, specify time in milliseconds
  simpleTimer = new Timer(10000);
  simpleTimer.start();

  textAlign(CENTER);
  textSize(24);
 }


// Draw code goes here
function draw() {
  background(0);

  frameRate(60);

  if( waitForClick ) {
      fill(255);
      text( "Click on mouse to begin timer", width/2, yTextPos); 
  }  
  else {
    updateTimer();
  }
}

// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {
  	fill(255,0,0);
    frameRate(1);
    text( "BOOM", width/2, yTextPos );
    waitForClick = true;
  }
  else {
    fill(255);
    text( Math.round(simpleTimer.getRemainingTime()/1000), width/2, yTextPos )
  }
}

function mousePressed() {
  waitForClick = false;
}

