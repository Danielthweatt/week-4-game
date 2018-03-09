'use strict';

// variables
let target;
let score;
let firstCrystalValue;
let secondCrystalValue;
let thirdCrystalValue;
let fourthCrystalValue;
let wins = 0;
let losses = 0;

//function definitions
const assignValues = function() {
    score = 0;
    target = ;
    firstCrystalValue = ;
    secondCrystalValue = ;
    thirdCrystalValue = ;
    fourthCrystalValue = ;
};

const compareScoreAndTarget = function () {
    if (score === target) {
        wins = wins + 1;
        startGame();
    };
    if (score > target) {
        losses = losses + 1;
        startGame();
    } 
};

const startGame = function() {
    assignValues();
    $('#target').text('Target: ' + target)
    $('#score').text('Your Current Total Score: ' + score);
    $('#winsAndLosses').text('Wins: ' + wins + '    Loses: ' + losses);
};

//function calls

startGame();

$('#firstCrystal').click(function() {
    score = score + firstCrystalValue;
    $('#score').text('Your Current Total Score: ' + score);
    compareScoreAndTarget();
});

$('#secondCrystal').click(function() {
    score = score + secondCrystalValue;
    $('#score').text('Your Current Total Score: ' + score);
    compareScoreAndTarget();
});

$('#thirdCrystal').click(function() {
    score = score + thirdCrystalValue;
    $('#score').text('Your Current Total Score: ' + score);
    compareScoreAndTarget();
});

$('#fourthCrystal').click(function() {
    score = score + fourthCrystalValue;
    $('#score').text('Your Current Total Score: ' + score);
    compareScoreAndTarget();
});