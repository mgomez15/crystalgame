var red = $("#red");
var green = $("#green");
var blue = $("#blue");
var yellow = $("#yellow");
var totalScore = $("#totalScore");
var currentScore = 0;
var wins = 0;
var losses = 0;
var randomNumber = 0;
var targetScore = $("#randomAmount");

red.on("click",function(){
currentScore+=parseInt(red.attr("value"));
totalScore.text("Total Score: "+ currentScore)
})

green.on("click",function(){
currentScore+=parseInt(green.attr("value"));
totalScore.text("Total Score: "+ currentScore)
})

blue.on("click",function(){
currentScore+=parseInt(blue.attr("value"));
totalScore.text("Total Score: "+ currentScore)
})

yellow.on("click",function(){
currentScore+=parseInt(yellow.attr("value"));
totalScore.text("Total Score: "+ currentScore)
})

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max-min+1))+min;
}

function restartGame() {
    currentScore = 0;
    randomNumber = getRandomInt(20,80);
    red.attr("value", getRandomInt(1,10));
    green.attr("value", getRandomInt(1,10));
    blue.attr("value", getRandomInt(1,10));
    yellow.attr("value", getRandomInt(1,10));
    totalScore.text("Total Score: "+ currentScore);
    targetScore.text("Target Score: "+ randomNumber);
}

restartGame()

//Can't get code to wotk to keep track of score
if (currentScore === randomNumber) {
    wins++;
}

else  {
    losses++;
};

