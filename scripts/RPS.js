var selectHuman,
  selectComputer,
  scoreHuman,
  scoreComputer,
  winner,
  results,
  oldresults,
  turn,
  resolutionMatrix,
  winMessageMatrix,
  name,
  mistake1,
  mistake2;

const tick = 1.5;

function initialize() {
  document.getElementById("Message").innerHTML = "Enter your name and press 'Start' to begin! &#8594;";
  document.getElementById("RButton").disabled = true;
  document.getElementById("PButton").disabled = true;
  document.getElementById("SButton").disabled = true;
  resolutionMatrix = [0, -1, 1, 1, 0, -1, -1, 1, 0];
  winMessageMatrix = ["Computer wins!", "It's a tie!", "Human wins!"];
}

function start() {
  scoreHuman = 0;
  scoreComputer = 0;
  turn = 0;
  results = '';
  name = document.getElementById("name").value;
  name = name.toLowerCase();
  mistake1 = (name.charCodeAt(0) - "a".charCodeAt(0)) % 9;
  mistake2 = (name.charCodeAt(1) - "a".charCodeAt(0)) % 9;
  if (mistake1 == mistake2) {
    mistake2 = (mistake2 + 4) % 9;
  }
  resolutionMatrix[mistake1] = ((resolutionMatrix[mistake1] + 2) % 3) - 1;
  resolutionMatrix[mistake2] = ((resolutionMatrix[mistake2] + 3) % 3) - 1;
  document.getElementById("name").disabled = true;
  document.getElementById("instructions").innerHTML = "You go first, human!";
  document.getElementById("Console").innerHTML = "&nbsp;";
  document.getElementById("Message").innerHTML = "&nbsp;";
  document.getElementById("StartButton").innerHTML = "Restart";
  document.getElementById("RButton").disabled = false;
  document.getElementById("PButton").disabled = false;
  document.getElementById("SButton").disabled = false;
}

function iterDisplay0() {
  document.getElementById("instructions").innerHTML = "&nbsp;";
  document.getElementById("RButton").disabled = true;
  document.getElementById("PButton").disabled = true;
  document.getElementById("SButton").disabled = true;
  results = '<tr><td align="center" width="12%" class="results">&nbsp;</td><td align="center" width="33%" class="pane"><img src="./images/Blank.png"/></td><td align="center" width="33%" class="pane"><img src="./images/Blank.png"/></td><td align="center" width="22%" class="pane">&nbsp;</td></tr>' + oldresults;
  document.getElementById("Message").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="message"><tbody>' + results + '</tbody></table>';
  document.getElementById("Console").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="activeConsole"><tbody><tr><td><h2>Get Ready!</h2></td></tr></tbody></table>';
}

function iterDisplay1() {
  results = '<tr><td align="center" width="12%" class="results">Turn<br/>' + turn + '</td><td align="center" width="33%" class="pane"><img src="./images/Blank.png"/></td><td align="center" width="33%" class="pane"><img src="./images/Blank.png"/></td><td align="center" width="22%" class="pane">&nbsp;</td></tr>' + oldresults;
  document.getElementById("Message").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="message"><tbody>' + results + '</tbody></table>';
  document.getElementById("Console").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="activeConsole"><tbody><tr><td><h2>1... <img class="spin" src="images/spinner.gif"/></h2></td></tr></tbody></table>';
}


function iterDisplay2() {
  results = '<tr><td align="center" width="12%" class="results">Turn<br/>' + turn + '</td><td align="center" width="33%" class="pane">' + uImg + '</td><td align="center" width="33%" class="pane"><img src="./images/Blank.png"/></td><td align="center" width="22%" class="pane">&nbsp;</td></tr>' + oldresults;
  document.getElementById("Message").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="message"><tbody>' + results + '</tbody></table>';
  document.getElementById("Console").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="activeConsole"><tbody><tr><td><h2>1... 2... <img class="spin" src="images/spinner.gif"/></h2></td></tr></tbody></table>';
}

function iterDisplay3() {

  results = '<tr><td align="center" width="12%" class="results">Turn<br/>' + turn + '</td><td align="center" width="33%" class="pane">' + uImg + '</td><td align="center" width="33%" class="pane">' + cImg + '</td><td align="center" width="22%" class="pane">&nbsp;</td></tr>' + oldresults;
  document.getElementById("Message").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="message"><tbody>' + results + '</tbody></table>';
  document.getElementById("Console").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="activeConsole"><tbody><tr><td><h2>1... 2... 3!!! &nbsp;&nbsp;<img class="spin" src="images/spinner.gif"/></h2></td></tr></tbody></table>';
}

function iterDisplay4() {

  results = '<tr><td align="center" width="12%" class="results">Turn<br/>' + turn + '</td><td align="center" width="33%" class="pane">' + uImg + '</td><td align="center" width="33%" class="pane">' + cImg + '</td><td align="center" width="22%" class="pane">Human ' + scoreHuman + '<br/><br/>Computer ' + scoreComputer + '</td></tr>' + oldresults;
  document.getElementById("Message").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="message"><tbody>' + results + '</tbody></table>';
  document.getElementById("Console").innerHTML = '<table cellspacing="5" cellpadding="5" border="0" width="480" class="activeConsole"><tbody><tr><td><h2>1... 2... 3!!! &nbsp;&nbsp;' + winner + '</h2></td></tr></tbody></table>';
  document.getElementById("RButton").disabled = false;
  document.getElementById("PButton").disabled = false;
  document.getElementById("SButton").disabled = false;
  document.getElementById("instructions").innerHTML = "Your turn, human!";
}

function display() {
  turn += 1;
  oldresults = results;
  setTimeout("iterDisplay0()", 0);
  setTimeout("iterDisplay1()", tick * 1500);
  setTimeout("iterDisplay2()", tick * 2500);
  setTimeout("iterDisplay3()", tick * 3500);
  setTimeout("iterDisplay4()", tick * 4500);
}

function computerTurn() {
  selectComputer = Math.floor(Math.random() * 3);
  if (selectComputer == 0) {
    cImg = '<img src="./images/RockC.png" title="Computer plays Rock" alt="Computer plays Rock"\>';
  } else if (selectComputer == 1) {
    cImg = '<img src="./images/PaperC.png" title="Computer plays Paper" alt="Computer plays Paper"\>';
  } else {
    cImg = '<img src="./images/ScissorsC.png" title="Computer plays Scissors" alt="Computer plays Scissors"\>';
  }
  whoWon();
}

function playRock() {
  selectHuman = 0;
  uImg = '<img src="./images/RockU.png" title="Human plays Rock" alt="Human plays Rock"\>';
  computerTurn();
  display();
}

function playPaper() {
  selectHuman = 1;
  uImg = '<img src="./images/PaperU.png" title="Human plays Paper" alt="Human plays Paper"\>';
  computerTurn();
  display();
}

function playScissors() {
  selectHuman = 2;
  uImg = '<img src="./images/ScissorsU.png" title="Human plays Scissors" alt="Human plays Scissors"\>';
  computerTurn();
  display();
}

function whoWon() {
  if (resolutionMatrix[3 * selectHuman + selectComputer] > 0) {
    scoreHuman++;
  }
  if (resolutionMatrix[3 * selectHuman + selectComputer] < 0) {
    scoreComputer++;
  }
  winner = winMessageMatrix[(resolutionMatrix[3 * selectHuman + selectComputer]) + 1];
}
