/***********************************************************************************
  ProgressBar

  Uses the p5.timer.js class to show an animated progress bar on the screen

------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// Global timer variable, uninitialized
var simpleTimer;

// Drawing
var progBarWidth;    // init in setup() to match screen width with marget
var progBarHeight = 20;
var hMargin = 40;
var vMargin = 60;

// User interaction
var waitForMouse = true;

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Allocate a 5-second timer
  simpleTimer = new Timer(5000);

  textAlign(LEFT);
  textSize(24);
  rectMode(CORNER);

  progBarWidth = width - (hMargin*2);    // give some margin to edge
 }


// State 1 = Wait for mouse, just draw text on the screen
// State 2 = Progress bar is animating (wait for mouse is false)
function draw() {
  background(0);

  if( waitForMouse ) {
    fill(255);
    text("Click mouse to begin progress bar", hMargin, 60 );
  }
  else {
    if( simpleTimer.expired() === false ) {
      if( simpleTimer.isPaused() ) {
        fill(220,120,0);
        text("Press [r] to resume", hMargin, 400 );
      }
      else {
        fill(220,120,0);
        text("Press [p] to pause", hMargin, 400 );
      }

      fill(220,120,0);
      text("Press [e] to end timer", hMargin, 440 );

      fill(220,120,0);
      text("Press [a] to add 3 seconds to the timer", hMargin, 480 );
    }

  	// wait for mouse === false
    drawProgressBar();
    drawTimerText();

    if( simpleTimer.expired() ) {
      fill(255);
      text("Done", hMargin, 60 );
    }
  }
}

// Looks for elapsed time
function drawTimerText() {
  fill(255);
  text( "Remaining (%) = " + Math.round(simpleTimer.getPercentageRemaining()*100) + "%", hMargin, 150 );
  text( "Elapsed (%) = " + Math.round(simpleTimer.getPercentageElapsed()*100) + "%", hMargin, 200 );
  text( "Remaing time (ms) = " + Math.round(simpleTimer.getRemainingTime()), hMargin, 240 );
}

// draw the bar itself
function drawProgressBar() {
  // Draw a growing rectangle, from left to right
  noStroke();
  fill(240,124,0);
  rect( hMargin, vMargin + progBarHeight, progBarWidth*simpleTimer.getPercentageElapsed(), progBarHeight );
  
  // draw an outline on top of the rect
  noFill();
  stroke(50);
  strokeWeight(1);
  rect( hMargin, vMargin + progBarHeight, progBarWidth, progBarHeight );

  noStroke();
}

function mousePressed() {
  // start the timer if we are waiting for a mouseclick
  if( waitForMouse ) {
    waitForMouse = false;
    simpleTimer.start();
  }

  else if( simpleTimer.expired() ) {
    bWaitForMouse = true;
  }
}

function keyPressed() {
  if( simpleTimer.expired() === false ) {
    if( key === 'p') {
      simpleTimer.pause();
    }
    else if( key === 'r' ) {
       simpleTimer.start();
    }
    else if( key === 'e' ) {
      simpleTimer.endTimer();
    }
    else if( key === 'a' ) {
      simpleTimer.addTime(3000);
    }
  }

}