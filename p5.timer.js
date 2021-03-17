/*******************************************************************************************************************
//
//  Class: Timer
//  for P5.js
//
//  Written by Scott Kildall
//  Modified by Alina Xia
//	
//------------------------------------------------------------------------------------------------------------------
// - Very simple but incredibly useful timer class
// - Call start() whenever it expires to reset the time
// - Call expired() to check to see if timer is still active
//------------------------------------------------------------------------------------------------------------------
//   Constructor: requires a timer duration, this can always be changed with setTimer()
//------------------------------------------------------------------------------------------------------------------
// --> Additions + Mods by Alina
// new Timer(_duration, start) now creates a timer with an option to start immediately or not. default does not start. 
// reset() covers the old start() functionality
// pause() pauses the timer, allowing it to be restarted when needed. 
// addTime(x) adds x millis to the remaining duration. it does not modify the original duration. 
//  --> Can also use to subtract time w/ neg number
// endTimer() forcibly ends the timer (will return true when expired() called); 
// --> Modifications:
// start() -- now starts ONLY IF timer not currently running
// --> starts if paused by pause() or timer expired
*********************************************************************************************************************/

class Timer {
    // Store the duration and start the timer
    constructor( _duration, start = false ) {
        this.startTime = millis();
        this.duration = _duration;
        this.paused = false;
        this.pauseStartTime = 0;        // this will be millis() after the pause()
        this.totalPauseTime = 0;        // so we can make accurate calculations
    }

// MAIN FUNCTIONS
    //starts the timer if it was expired or paused
    start() { 
        if( this.expired() ) {            
            this.startTime = millis();      // restarts counting millis
        }
        else if( this.paused ) { 
             // unpauses, add paused amount to total pause tume
            this.totalPauseTime += millis() - this.pauseStartTime;
            this.paused = false; 
        }
    }

    // returns true if the timer is expired, e.g. if millis() is greater than startTime + duration
    expired() {
        return (this.startTime + this.duration + this.getPauseTime() ) < millis();
    }

    // restarts timer regardless of status
    reset(){
        this.startTime = millis();
         this.totalPauseTime = 0;

        if( this.paused ) {
            this.pauseStartTime = this.startTime;
        }
        else {
            this.pauseStartTime = 0;
        }
    }

    // pauses the timer 
    pause(){
        if( this.paused === false ) {
            this.pauseStartTime = millis();
            this.paused = true; 
        }
    }
    
    // adds x millis to the remaining duration. 
    addTime(x){
        this.duration += x; 
    }

    // set the duration, doesn't start the timer
    setTimer(_duration) {
        this.duration = _duration;
    }
    
    //forces an expired() state by setting remaining duration to zero. 
    endTimer(){
        this.duration = 0; 
    }

// SIMPLE ACCESSORS
    // accessor: returns true/false, indicating paused state
    isPaused() {
        return this.paused;
    }

    // returns remaining time in milliseconds, zero if timer is done
    getRemainingTime() {
        if( this.expired() ) {
            return 0;
        }
        
        // never return a neg number + account for pause time
        let rt = this.startTime + this.duration + this.getPauseTime() - millis();
        if( rt < 0 )
            rt = 0;
        return rt;
    }  

    // returns remaining % of timer, 0.0 through 1.0
    getPercentageRemaining() {
        if( this.duration === 0 )  { 
            return 0.0;     // avoid div by zero error
        }
        if( this.expired() ) { 
            return 0.0;
        }

        return this.getRemainingTime()/this.duration;
    }

    // returns elapsed % of timer, 0.0 through 1.0
    getPercentageElapsed() {
        return 1.0 - this.getPercentageRemaining(); //refactor to remove duplication
    }	

    // we use this to account for all paused actions: return active and past pause times
    getPauseTime() {
        let pauseTime = this.totalPauseTime;

        if( this.paused ) {
            pauseTime += (millis() - this.pauseStartTime);
        }

        return pauseTime;
    } 	
}
