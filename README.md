# p5.timer.js
#### by Scott Kildall
www.kildall.com


## Overview
This is a class for p5.js that will serve as a timer. It encapsulates the millis() function and various variables you might use to do any asynchronous timing operations.


## Adding it your index.html

The easiest way to use this library it to place it in the same folder as your sketch.

Then, add the line below to the index.html file so that you can access it in your sketch.js

  <script src="p5.timer.js"></script>
  

## Functions

###constructor( _duration );
This will allocate the Timer object, duration is in milliseconds

e.g.

var simpleTimer = new Timer(5000);

###start();
This will start the timer

simpleTimer.start()

###setTimer(_duration) 
Changes the duration of the timer, also in milliseconds

###expired();
Returns true if the timer is expired, false if it is still running.

###getRemainingTime();
Returns the number of milliseconds left in the timer, zeero if it is expired

###getPercentageRemaining();
Returns percentage remaining in the timer, 0.0 through 1.0. If expired, will return 0.0


###getPercentageElapsed();
Returns percentage elapsed in the timer, 0.0 through 1.0. If expired, will return 1.0


getPercentageRemaining() + getPercentageElapsed() should always be 1.0

## License
CC BY: This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.
