//Defines variables
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");
var timer = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var i = 0;
var score = 0;
var secondsLeft = 75;
var storedScores;
var scoreList = [];
const scoreArea = document.getElementById("scoreArea");


//Timer function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        //if no time left, display no more time left
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

//Function to end the questions
function questionEnder() {
    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
   
    //Score equals score  + time remaining - 1 second to account for processing time for page to calculate the score
    score += secondsLeft- 1;
    
    //Sets score to have no decimal 
    score = score.toFixed(0);

    //Indicates the quiz is over
    document.getElementById("question").style.fontSize= "15pt";
    document.getElementById("question").style.fontWeight= "bold";
    document.getElementById("question").style.marginTop= "100px";
    document.getElementById("question").textContent = "All done!";

    //removes answer choices 
    answerOne.remove();
    answerTwo.remove();
    answerThree.remove();
    answerFour.remove();
    messageDiv.remove();
    
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    
    //Displays final score
    document.getElementById("score").textContent = "Your final score: " + score;
   
    //Displays inputfield where the user's initials are requested
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    inputTag.value="Enter your initials here";
    
    //creates Submit button with purple background and white font
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton).style.backgroundColor = "purple";
    submitButton.style.color = "white";

    //EventListener based on the click event to capture the highscore
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "highScores.html";
    });
}

//Function to prepare the questions
function questionSetter() {
   //Makes answer choice fields visible
    answerOne.hidden = false;
    answerTwo.hidden = false;
    answerThree.hidden = false;
    answerFour.hidden = false;

    //Sart button is hidden once the quiz begins
    document.getElementById("startButton").hidden = true;
   
    //Ends the questions if no more remain
    if (i === questions.length) {
        questionEnder();
    }
    else {
        //Pulls question 
        document.getElementById("question").textContent = questions[i]["title"];

        //Displays answer choices
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
    }
}

//Stores scores in an array
function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

//Sets click events to begin the quiz once the start button is clicked
document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

answerOne.hidden = true;
answerTwo.hidden = true;
answerThree.hidden = true;
answerFour.hidden = true;

//Determines if answerOne is correct or wrong based on the click event
document.getElementById("answerOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
       //Displays right if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Correct!";
        score= score + 20;
        
    }
    else {
        //Displays wrong if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
       
    }
    i++;
    questionSetter();
})

//Determines if answerTwo is correct or wrong based on the click event
document.getElementById("answerTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        //Displays right if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Correct!";
        score= score + 20;
      
    }
    else {
        //Displays wrong if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
       
    }
    i++;
    questionSetter();
})

//Determines if answerThree is correct or wrong based on the click event
document.getElementById("answerThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
         //Displays right if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Correct!";
        score= score + 20;
       
    }
    else {
        //Displays wrong if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
       
    }
    i++;
    questionSetter();
})

//Determines if answerFour is correct or wrong based on the click event
document.getElementById("answerFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        //Displays right if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Correct!";
        score= score + 20;
       
    }
    else {
        //Displays wrong if answer is wrong and subtracts 10 points
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
       
    }
    i++;
    questionSetter();
})
