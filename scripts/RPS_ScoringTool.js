var resolutionMatrix, mistake1Matrix, mistake2Matrix, name, mistake1, mistake2;

function initialize() {
  resolutionMatrix = [0, -1, 1, 1, 0, -1, -1, 1, 0];
  mistake1Matrix = ["Player's <strong>ROCK</strong> <em>beats</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>ROCK</strong> <em>ties with</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>ROCK</strong> <em>loses to</em> Computer's <strong>SCISSORS</strong>",
    "Player's <strong>PAPER</strong> <em>loses to</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>PAPER</strong> <em>beats</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>PAPER</strong> <em>ties with</em> Computer's <strong>SCISSORS</strong>",
    "Player's <strong>SCISSORS</strong> <em>ties with</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>SCISSORS</strong> <em>loses to</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>SCISSORS</strong> <em>beats</em> Computer's <strong>SCISSORS</strong>"
  ];
  mistake2Matrix = ["Player's <strong>ROCK</strong> <em>loses to</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>ROCK</strong> <em>beats</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>ROCK</strong> <em>ties with</em> Computer's <strong>SCISSORS</strong>",
    "Player's <strong>PAPER</strong> <em>ties with</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>PAPER</strong> <em>loses to</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>PAPER</strong> <em>beats</em> Computer's <strong>SCISSORS</strong>",
    "Player's <strong>SCISSORS</strong> <em>beats</em> Computer's <strong>ROCK</strong>",
    "Player's <strong>SCISSORS</strong> <em>ties with</em> Computer's <strong>PAPER</strong>",
    "Player's <strong>SCISSORS</strong> <em>loses to</em> Computer's <strong>SCISSORS</strong>"
  ];
}

function start() {
  name = document.getElementById("name").value;
  if (name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }
  name = name.toLowerCase();
  mistake1 = (name.charCodeAt(0) - "a".charCodeAt(0)) % 9;
  mistake2 = (name.charCodeAt(1) - "a".charCodeAt(0)) % 9;
  if (mistake1 == mistake2) {
    mistake2 = (mistake2 + 4) % 9;
  }
  resolutionMatrix[mistake1] = ((resolutionMatrix[mistake1] + 2) % 3) - 1;
  resolutionMatrix[mistake2] = ((resolutionMatrix[mistake2] + 3) % 3) - 1;
  document.getElementById("Output").innerHTML = mistake1Matrix[mistake1] + "<br />" + mistake2Matrix[mistake2];
}
