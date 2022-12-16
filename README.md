# p5.timer.js
#### by Scott Kildall
[https://github.com/scottkildall
](https://github.com/scottkildall)

##### with modifications from Alina Xia
[https://github.com/acelaena](https://github.com/acelaena)



## Overview
This is a class for p5.js that will serve as a timer. It encapsulates the millis() function and various variables you might use to do any asynchronous timing operations.


## Adding it your index.html

The easiest way to use this library it to place it in the same folder as your sketch.

Then, add the line below to the index.html file so that you can access it in your sketch.js

  <script src="p5.timer.js"></script>
  

## Functions

###constructor( _duration,start = false ) );
This will allocate the Timer object, duration is in milliseconds


`var simpleTimer = new Timer(5000);
`

The 2nd parameter is an optional parameter to start the timer upon instantiation. If no parameter is specified, it will not start.


`var simpleTimer = new Timer(5000, true);
`

###start();
This will start the timer if it was expired or resume it if it was paused.

`simpleTimer.start();`

###reset();
This will reset the timer, essentially restarting it. If it is paused, it will still be paused. 

`simpleTimer.reset();`

###pause();
This will pause the timer 

`simpleTimer.pause();`

###addTime(x);
This will add x time in ms to the timer. The code below adds 1 second to the timer.

`simpleTimer.addTime(1000);`

###setTimer(_duration) 
Changes the duration of the timer, also in milliseconds. Doesn't restart the timer. This sets it to 10 seconds.

`simpleTimer.setTimer(10000);`

###endTimer() 
Forces an expired() to the timer by setting remaining duration to zero.

`simpleTimer.endTimer();`

###expired();
Returns true if the timer is expired, false if it is still running. This code will check for an expired timer, send an alert and then re-start the timer.

`if( simpleTimer.expired() ){`

   `alert("done");`
   
  ` simpleTimer.start();`
  
`   
}`

###getRemainingTime();
Returns the number of milliseconds left in the timer, zeero if it is expired

`remainingMS = getRemainingTime();`

###getPercentageRemaining();
Returns percentage remaining in the timer, 0.0 through 1.0. If expired, will return 0.0

`remainingPct = getPercentageRemaining();`


###getPercentageElapsed();
Returns percentage elapsed in the timer, 0.0 through 1.0. If expired, will return 1.0

`remainingPct = getPercentageElapsed();`


getPercentageRemaining() + getPercentageElapsed() should always be 1.0

## License
CC BY: This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use.
