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
    target = Math.floor(Math.random() * 101) + 19;
    firstCrystalValue = Math.floor(Math.random() * 11) + 1;
    secondCrystalValue = Math.floor(Math.random() * 11) + 1;
    thirdCrystalValue = Math.floor(Math.random() * 11) + 1;
    fourthCrystalValue = Math.floor(Math.random() * 11) + 1;
};

const startGame = function() {
    assignValues();
    $('#target').text('Target: ' + target)
    $('#score').text('Your Current Total Score: ' + score);
    $('#winsAndLosses').text('Wins: ' + wins + '    Losses: ' + losses);
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