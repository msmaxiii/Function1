// In this file, we'll continue with our soccer simulation.
// So recently we talked about a soccer match between the Emerald Eagles and the Draconian Dragons. We used conditional logic to determine soccer match scenarios, and used arrays to manage Mahalia’s backpack. But, there are more than one match in a season. Do we really want to rewrite the same blocks of code over and over again?
// This is where functions come in. Functions allow us to perform the same block of code many times, without having to rewrite the entire block of code. They even allow us to take in parameters to slightly modify the data that the function uses.

// First, let’s practice with data types and string methods. Then we’ll get into writing functions.

// Create a variable that tracks the Eagles’ morale.
let eaglesMorale = 100;

// How would we make this into a string? 
let eaglesMoraleStr = String(eaglesMorale);
// Or, by concatenating an empty string:
// let eaglesMoraleStr = eaglesMorale + '';
console.log(eaglesMorale, typeof eaglesMorale);
console.log(eaglesMoraleStr, typeof eaglesMoraleStr);

// How would we make eaglesMorale into a boolean?
let eaglesMoraleBool = Boolean(eaglesMorale);
console.log(eaglesMoraleBool, typeof eaglesMoraleBool);
// Remember: the only value for eaglesMorale that would give us false would be 0

// Let’s create a string that declares a winner. The winner should be the Dragons.
// Then let’s replace the Dragons with the Eagles.
let theWinnerIs = 'The Dragons are the winners.';
let newWinner = theWinnerIs.replace('Dragons', 'Eagles');

// Now let’s just confirm that our string contains ‘The Eagles’
console.log(newWinner.includes('Eagles'));

// Now we have to convert our string to kebab case (all lowercase separated by hyphens)
let newWinnerLower = newWinner.toLowerCase();
let newWinnerSplit = newWinnerLower.split(' ');
let newWinnerKebab = newWinnerSplit.join('-');
// Or, with method chaining:
// let newWinnerKebab = newWinner.toLowerCase()
//                               .split(' ')
//                               .join('-');
// Note: the semicolon is only after the very last method call.
console.log(newWinnerKebab);


// Now, let’s create a simple function to see if the Emerald Eagles still have morale left, and then console.log the result.
function doEaglesHaveMorale() {
    if (eaglesMorale > 0) {
        console.log('The Eagles have some morale left!');
    } else {
        console.log("The Emerald Eagles don't have any morale left.");
    }
}

// So now, at any point in time, we can call this function we have just created in order to find out if the Eagles have any fight left in them.

// So we have written this function, but you might notice, it has not actually run yet. This is because functions do not run until they are called. Let’s call the above function.
doEaglesHaveMorale();

// Now, let’s create a function that can be used every time the Eagles lose a match.
let reduceMorale = (amount) => {
    eaglesMorale -= amount;
};

// Let’s have the Emerald Eagles lose an important match. A match worth 20 morale.
reduceMorale(20);

// With our function, we can call our block of code over and over again. Call the function again, because the Eagles just lost another match worth 12 morale.
reduceMorale(12);

// If that wasn’t all, the Eagles lost a third match. However, they were already expecting to lose, so this match is only 6 morale.
reduceMorale(6);

// At this point the Emerald Eagles have lost a few times. It would probably be a good time to check and make sure they are still up for matches. Call your doEaglesHaveMorale function.
doEaglesHaveMorale();

// Thinking about it further, shouldn’t we check to see if the Eagles still have morale after each time they lose a match? We could call the doEaglesHaveMorale function after each time they lose. But, there is an easier way to do that. Modify your reduceMorale function to call doEaglesHaveMorale after it has run all its other code.
reduceMorale = (amount) => {
    eaglesMorale -= amount;
    doEaglesHaveMorale();
};

reduceMorale(33);
reduceMorale(33);
reduceMorale(34);

// Yes, you can call functions from almost anywhere, including from inside another function.
// It is important to know that functions can be set up to have as many parameters as you would like. In this next function, we will use two.

// Let’s create another function that allows 2 teams to shake hands with each other.
const shakeHands = function(team1, team2) {
    console.log(`The ${team1} and the ${team2} shake hands.`);
};
shakeHands('Eagles', 'Dragons');

// FURTHER STUDY:

// So far, we have just been console logging in our functions. But, functions can actually return a value back to its call site. Let’s create a function to represent a dice role.
function rollDice() {
    let possibleRoles = [1,2,3,4,5,6];
    let randomNumber = Math.floor(Math.random() * possibleRoles.length);
    return possibleRoles[randomNumber];
}
let firstRoll = rollDice();
let secondRoll = rollDice();
console.log(firstRoll, secondRoll);

// Further study on Math.floor:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Further study on Math.random:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Now, let’s take this one step further. Let’s create a function that calls rollDice twice, and multiplies the returned rolls together.
function diceMultiplier() {
    let firstRoll = rollDice();
    let secondRoll = rollDice();
  
    return firstRoll * secondRoll;
}
let multipliedNumber = diceMultiplier();
console.log(multipliedNumber);
// Note: the firstRoll and secondRoll variables above are scoped to the diceMultiplier function, and are not related to the variables with the same name in the outer scope.

