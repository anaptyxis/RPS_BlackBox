var resolutionMatrix, mistake1Matrix, mistake2Matrix, name, mistake1, mistake2;

function initialize()
{
	resolutionMatrix=[0,-1,1,1,0,-1,-1,1,0];
	mistake1Matrix=["Player's ROCK beats Computer's ROCK",
					"Player's ROCK ties with Computer's PAPER",
					"Player's ROCK loses to Computer's SCISSORS",
					"Player's PAPER loses to Computer's ROCK",
					"Player's PAPER beats Computer's PAPER",
					"Player's PAPER ties with Computer's SCISSORS",
					"Player's SCISSORS ties with Computer's ROCK",
					"Player's SCISSORS loses to Computer's PAPER",
					"Player's SCISSORS beats Computer's SCISSORS"];
	mistake2Matrix=["Player's ROCK loses to Computer's ROCK",
					"Player's ROCK beats Computer's PAPER",
					"Player's ROCK ties with Computer's SCISSORS",
					"Player's PAPER ties with Computer's ROCK",
					"Player's PAPER loses to Computer's PAPER",
					"Player's PAPER beats Computer's SCISSORS",
					"Player's SCISSORS beats Computer's ROCK",
					"Player's SCISSORS ties with Computer's PAPER",
					"Player's SCISSORS loses to Computer's SCISSORS"];
}

function start()
{
	name=document.getElementById("name").value;
	name = name.toLowerCase();
	mistake1 = (name.charCodeAt(0)-"a".charCodeAt(0))%9;
	mistake2 = (name.charCodeAt(1)-"a".charCodeAt(0))%9;
	if (mistake1 == mistake2)
	{
		mistake2 = (mistake2 + 4) % 9;
	}
	resolutionMatrix[mistake1]=((resolutionMatrix[mistake1]+2)%3)-1;
	resolutionMatrix[mistake2]=((resolutionMatrix[mistake2]+3)%3)-1;
	document.getElementById("Output").innerHTML=mistake1Matrix[mistake1]+"<br />"+mistake2Matrix[mistake2];
}
