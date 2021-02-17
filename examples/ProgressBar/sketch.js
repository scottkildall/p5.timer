/***********************************************************************************
  Simple Counter

  Uses the p5.timer.js class to show elapsed seconds on the screen

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// uninitialized object
var simpleTimer;
var elapsedSeconds = 0;

var progBarWidth;    // init in setup() to match screen width with marget
var progBarHeight = 20;
var hMargin = 40;
var vMargin = 60;

var bWaitForMouse = true;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  simpleTimer = new Timer(5000);

  textAlign(LEFT);
  textSize(24);

  rectMode(CORNER);

  progBarWidth = width - (hMargin*2);    // give some margin to edge
 }


// Draw code goes here
function draw() {
  background(0);

  if( bWaitForMouse === true ) {
    fill(255);
    text("Click mouse to begin progress bar", hMargin, 60 );
  }
  else {
    drawProgressBar();

    if( simpleTimer.expired() ) {
      fill(255);
      text("Done", hMargin, 60 );
      drawTimerText();
    }
    else {
      drawTimerText();
   }
  }
}

// Looks for elapsed time
function drawTimerText() {
  fill(255);
  text( "Remaining = " + Math.round(simpleTimer.getPercentageRemaining()*100) + "%", hMargin, 150 );
  text( "Elapsed = " + Math.round(simpleTimer.getPercentageElapsed()*100) + "%", hMargin, 200 );
  text( "Remaing time = " + Math.round(simpleTimer.getRemainingTime()), hMargin, 240 );
}

function drawProgressBar() {
  // draw the bar itself
  noStroke();
  fill(240,124,0);
  rect( hMargin, vMargin + progBarHeight, progBarWidth*simpleTimer.getPercentageElapsed(), progBarHeight );
  
  noFill();
  stroke(50);
  strokeWeight(1);
  rect( hMargin, vMargin + progBarHeight, progBarWidth, progBarHeight );

  noStroke();
}

function mousePressed() {
  // start the timer if we are waiting for a mouseclick
  if( bWaitForMouse === true ) {
    bWaitForMouse = false;
    simpleTimer.start();
  }

  else if( simpleTimer.expired() ) {
    bWaitForMouse = true;
  }
}