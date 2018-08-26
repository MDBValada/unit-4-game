//master function for entire self-contained game
$(document).ready(function(){
//Creating the variables that will be needed for the entire game and accessed by later methods
    // where the goal will be placed each round, initialization from a later math.floor or math.ceil (math.random)) function will enter a number from 19-120 for each game.
    let goalNumber;
    //Where the current total score will be placed each round, initialized to 0 on page load, but restored by the reset function(s) after the first game
    //To ONLY be incremented by any of the four crystal onclicks (for a game-set random value from 1-12).
    let currentScore = 0;
    //Where the total number of matches WON will be recorded to, initialized to 0 on page load, updated only when the player wins a round.
    let victoryCount = 0;
    //Where the total number of matches LOST will be recorded to, initialized to 0 on page load, updated only when the player loses a round.
    let defeatCount = 0;
    // Setting up the four crystal variables. In an attempt to avoid confusion: crystal variables will all be prefixed with "crystal", while all html/css
    // references classes/ids will instead bgemed with "crystal", while continuously not usind numerals in the actual variable names.
    //Like goalNumber, these will be re initialized with a new number from 1-12 each game.
    let crystalOne;
    let crystalTwo;
    let crystalThree;
    let crystalFour;

    //Now we need to initialize the random numbers for the goal and the four crystals using a new object
    function newGameRandomizer() {
        //Math.floor(Math.random() * (max - min + 1)) + min; This is generally agreed to be a safe formula for getting an integer between a state min and max values in javascript.
        goalNumber = Math.floor(Math.random()*(120 - 19 + 1)) + 19; //a little confusing, but in the end the numbers are ()*101)+19, which IS correctly 19-120, it just LOOKS weird.
        crystalOne = Math.floor(Math.random()*12)+1; //using the same thing to make sure i get 1-12
        crystalTwo = Math.floor(Math.random()*12)+1; //ditto
        crystalThree = Math.floor(Math.random()*12)+1; //re:
        crystalFour= Math.floor(Math.random()*12)+1; //etc, etc...
    } // This closes out the numberRoll function: do not lose it!

    //time to make the game itself
    function newGamePlus() {
        //execute the random numbers function first!
        newGameRandomizer();
        //make sure the playerscore is reset to 0 for a new game (this basically does nothing on game one)
        currentscore = 0;
        //now reinitialize the playerscore HTML to 0 (again, this basically does nothing on game one)
        $("#totalScore").text(currentScore);
        //now initialize the randomized goalNumber into the playerGoal id tagged HTML element so they know what they are aiming for.
        $("#playerGoal").text(goalNumber);
        //now we set the random crystal values to their respective image ids by making an attribute for all four, in this case the arbitrarily named "crystalValue"
        $("#gemOne").attr("crystalValue", crystalOne);
		$("#gemTwo").attr("crystalValue", crystalTwo);
		$("#gemThree").attr("crystalValue", crystalThree);
        $("#gemFour").attr("crystalValue", crystalFour);
        //for cheaters and safety in testing, log all four of the current crystal values to console
        console.log(crystalOne); //should comment out on a live game, but why the fuck are they undefined??????
        console.log(crystalTwo);
        console.log(crystalThree);
        console.log(crystalFour);
    }//this is the end of the newGame function: don't lose it!
    //gem images have values but aren't actually buttons to click at this point. game also hasn't actually been started so nothing at ALL has actually happened beyond initialization.

    //might as well start the game now.
    newGamePlus();








});//this is the final closing brackets for the master function, NOTHING should be outside of it!