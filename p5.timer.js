/*******************************************************************************************************************
//
//  Class: Timer
//
//  Written by Scott Kildall
//  Modified by Alina Xia
//	for P5.js
//
//------------------------------------------------------------------------------------------------------------------
// - Very simple but incredibly useful timer class
// - Call start() whenever it expires to reset the time
// - Call expired() to check to see if timer is still active
//------------------------------------------------------------------------------------------------------------------
// --> Additions: 
// new Timer(_duration) now creates a timer with an option to start immediately or not. default does not start. 
// start() changed to start only if timer paused or expired (not currently running)
// reset() covers the old functionality
// pause() pauses the timer, allowing it to be restarted when needed. 
// addTime(x) adds x millis to the remaining duration. it does not modify the original duration. 
//  --> Can also use to subtract time w/ neg number
//------------------------------------------------------------------------------------------------------------------
//   Constructor: requires a timer duration, this can always be changed with setTimer()
*********************************************************************************************************************/

class Timer {
    // Store the duration and start the timer
    constructor( _duration, start = false ) {
        this.startTime = millis();
        this.duration = _duration;
        this.paused = !start; 
        this.remainingDuration = _duration;
    
    }

    //starts the timer if it was expired or paused
    start() { 
        if (expired() || this.paused){
            this.startTime = millis();
            if (expired()){ this.remainingDuration = this.duration; }
            if (this.paused){ this.paused = false; }
        }
    }

    //restart timer
    reset(){
        this.startTime = millis(); 
    }

    //pauses the timer 
    pause(){
        this.remainingDuration = getRemainingTime(); 
        this.paused = true; 
    }
    
    //adds x millis to the remaining duration. 
    addTime(x){
        this.remainingDuration + x; 
    }

    // set the duration, doesn't restart the timer
    setTimer(_duration) {
        this.duration = _duration;
        this.remainingDuration = _duration;
    }

    // returns true if the timer is expired, e.g. if millis() is greater than startTime + duration
    expired() {
        return (this.startTime + this.remainingDuration) < millis();
    }

    // returns remaining time in milliseconds, zero if timer is done
    getRemainingTime() {
        if( this.expired() ){ return 0; }
        return  (this.startTime + this.remainingDuration) - millis();
    }  

    // returns remaining % of timer, 0.0 through 1.0
    getPercentageRemaining() {
        if( this.duration === 0 )  {  return 0.0; }// avoid div by zero error
        if( this.expired() ) { return 0.0; }
        return this.getRemainingTime()/this.duration;
    }

    // returns elapsed % of timer, 0.0 through 1.0
    getPercentageElapsed() {
        if( this.duration === 0 ) { return 0.0; } // avoid div by zero error
        if( this.expired() ) {return 1.0;}
        return 1.0 - (this.getRemainingTime()/this.duration);
    }	 	
}
