//Declares variables for the highscore list, backbutton and clear button
var highScoreList = document.querySelector("#highScores");
var backButton = document.querySelector("#backButton");
var clearScores = document.querySelector("#clearButton");

initScores();

//Function to get the intial score 
function initScores() {
    storedScores = JSON.parse(localStorage.getItem("scores"));

    if (storedScores !== null) {
        scoreList = storedScores;
    }
    renderScores();
}

//Clears window data
function clearAll() {
    window.localStorage.clear();
}

//Shows scores in order of highest to lowest
function renderScores() {
    if (storedScores !== null) {
        scoreList.sort(function (a, b) {
            return a.newScore - b.newScore;
        });
        scoreList.reverse(function (a, b) {
            return a.newScore - b.newScore
        })

        //For loop for scorelist 
        for (i = 0; i < scoreList.length; i++) {
            var scoreListItem = scoreList[i];
            var tr = document.createElement("tr");
            var nameCell = document.createElement("td");
            var nameCellText = document.createTextNode(scoreListItem.name);
            var scoreCell = document.createElement("td");
            var scoreCellNum = document.createTextNode(scoreListItem.newScore);

            tr.setAttribute("tr-index", i);
            document.getElementById("highScores").appendChild(tr);
            tr.appendChild(nameCell);
            nameCell.appendChild(nameCellText);
            tr.appendChild(scoreCell);
            scoreCell.appendChild(scoreCellNum);

        }
    }
}

//Clears highscores once the clear button is clicked
clearScores.addEventListener("click", function () {
    clearAll();
    window.location.href = "highScores.html";
})

//When the backbutton is clicked the user will be taken back to index.html
backButton.addEventListener("click", function () {
    window.location.href = "index.html";
})