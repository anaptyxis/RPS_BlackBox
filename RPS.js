var selectHuman, 
    selectComputer, 
    scoreHuman, 
    scoreComputer, 
    winner, 
    results, 
    oldresults, 
    turn, 
    resolutionMatrix,
    winMsgMatrix, 
    Name, 
    mistake1, 
    mistake2;

function initialize()
{
	document.getElementById("msg").innerHTML="Enter your name and press 'Start' to begin! &#8594;";
	document.getElementById("RButton").disabled=true;
	document.getElementById("PButton").disabled=true;
	document.getElementById("SButton").disabled=true;
	resolutionMatrix=[0,-1,1,1,0,-1,-1,1,0];
	winMsgMatrix=["Computer wins!","It's a tie!","Human wins!"];
}

function start()
{
	score=0;
	turn=0;
	results='';	
	Name=document.getElementById("Name").value;
	Name = Name.toLowerCase();
	mistake1 = (Name.charCodeAt(0)-"a".charCodeAt(0))%9;
	mistake2 = (Name.charCodeAt(1)-"a".charCodeAt(0))%9;
	if (mistake1 == mistake2) 
	{
		mistake2 = (mistake2 + 4) % 9;
	}
	resolutionMatrix[mistake1]=((resolutionMatrix[mistake1]+2)%3)-1;
	resolutionMatrix[mistake2]=((resolutionMatrix[mistake2]+3)%3)-1;
	document.getElementById("Name").disabled=true;
	document.getElementById("instructions").innerHTML="You go first, human!";
	document.getElementById("Console").innerHTML="&nbsp;";
	document.getElementById("msg").innerHTML="&nbsp;";
	document.getElementById("StartButton").innerHTML="Restart";
	document.getElementById("RButton").disabled=false;
	document.getElementById("PButton").disabled=false;
	document.getElementById("SButton").disabled=false;
}

function iterDisplay0() {
       	document.getElementById("instructions").innerHTML="&nbsp;";
        document.getElementById("RButton").disabled=true;
        document.getElementById("PButton").disabled=true;
        document.getElementById("SButton").disabled=true;
        results='<tr><td align="center" style="background-color:#003333; color:#003333">Turn</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;"><img src="../images/BlankU.png"/></td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;"><img src="../images/BlankC.png"/></td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;" width="90">Score: &nbsp;&nbsp; </tr>'+oldresults;
        document.getElementById("msg").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="background-color:#ffffff; border:1px solid #000033; margin:5px;"><tbody>'+results+'</tbody></table>';
        document.getElementById("Console").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="border:1px solid #000033; margin:5px; background-color:#ccc999;"><tbody><tr><td><h2>&nbsp;</h2></td></tr></tbody></table>';
}

function iterDisplay1() {
	results='<tr><td align="center" style="background-color:#003333; color:#ffffff">Turn<br/>'+turn+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;"><img src="../images/BlankU.png"/></td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;"><img src="../images/BlankC.png"/></td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;" width="90">Score: &nbsp;&nbsp; </tr>'+oldresults;
	document.getElementById("msg").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="background-color:#ffffff; border:1px solid #000033; margin:5px;"><tbody>'+results+'</tbody></table>';
    document.getElementById("Console").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="border:1px solid #000033; margin:5px; background-color:#ccc999;"><tbody><tr><td><h2>1... </h2></td></tr></tbody></table>';
}


function iterDisplay2() {
	results='<tr><td align="center" style="background-color:#003333; color:#ffffff">Turn<br/>'+turn+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;">'+uImg+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;"><img src="../images/BlankC.png"/></td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;" width="90">Score: &nbsp;&nbsp;</tr>'+oldresults;
	document.getElementById("msg").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="background-color:#ffffff; border:1px solid #000033; margin:5px;"><tbody>'+results+'</tbody></table>';
	document.getElementById("Console").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="border:1px solid #000033; margin:5px; background-color:#ccc999;"><tbody><tr><td><h2>1... 2... </h2></td></tr></tbody></table>';
}

function iterDisplay3() {

	results='<tr><td align="center" style="background-color:#003333; color:#ffffff">Turn<br/>'+turn+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;">'+uImg+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;">'+cImg+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;" width="90">Score: &nbsp;&nbsp;</tr>'+oldresults;
	document.getElementById("msg").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="background-color:#ffffff; border:1px solid #000033; margin:5px;"><tbody>'+results+'</tbody></table>';
    document.getElementById("Console").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="border:1px solid #000033; margin:5px; background-color:#ccc999;"><tbody><tr><td><h2>1... 2... 3!!!</h2></td></tr></tbody></table>';
}

function iterDisplay4() {

	results='<tr><td align="center" style="background-color:#003333; color:#ffffff">Turn<br/>'+turn+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;">'+uImg+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;">'+cImg+'</td><td align="center" style="background:#e5e5dd; border:1px solid #000033; margin:5px;" width="90">Score: '+score+'</tr>'+oldresults;
	document.getElementById("msg").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="background-color:#ffffff; border:1px solid #000033; margin:5px;"><tbody>'+results+'</tbody></table>';
	document.getElementById("Console").innerHTML='<table cellspacing="5" cellpadding="5" border="0" width="480" style="border:1px solid #000033; margin:5px; background-color:#ccc999;"><tbody><tr><td><h2>1... 2... 3!!! &nbsp;&nbsp;&nbsp;&nbsp;'+winner+'</h2></td></tr></tbody></table>';
	document.getElementById("RButton").disabled=false;
	document.getElementById("PButton").disabled=false;
	document.getElementById("SButton").disabled=false;
	document.getElementById("instructions").innerHTML="Your turn, human!";
}

function display()
{
	turn+=1;
	oldresults=results;
	setTimeout("iterDisplay0()",0);
	setTimeout("iterDisplay1()",1500);
	setTimeout("iterDisplay2()",3000);
	setTimeout("iterDisplay3()",4500);
	setTimeout("iterDisplay4()",6000);
}

function computerTurn()
{
	selectComputer = Math.floor(Math.random()*3);
	if (selectComputer == 0)
	{
		cImg = '<img src="../images/RockC.png" title="Computer plays Rock" alt="Computer plays Rock"\>';
	}
	else if (selectComputer == 1)
	{
		cImg = '<img src="../images/PaperC.png" title="Computer plays Paper" alt="Computer plays Paper"\>';
	}
	else
	{
		cImg = '<img src="../images/ScissorsC.png" title="Computer plays Scissors" alt="Computer plays Scissors"\>';
	}
	whoWon();
}

function playRock()
{
	selectHuman = 0;
	uImg = '<img src="../images/RockU.png" title="Human plays Rock" alt="Human plays Rock"\>';
	computerTurn();	
	display();
}

function playPaper()
{
	selectHuman = 1;
	uImg = '<img src="../images/PaperU.png" title="Human plays Paper" alt="Human plays Paper"\>';
	computerTurn();	
	display();
}

function playScissors()
{
	selectHuman = 2;
	uImg = '<img src="../images/ScissorsU.png" title="Human plays Scissors" alt="Human plays Scissors"\>';
	computerTurn();	
	display();
}

function whoWon()
{
	score += (resolutionMatrix[3*selectHuman+selectComputer]);
	winner = winMsgMatrix[(resolutionMatrix[3*selectHuman+selectComputer])+1];
}

