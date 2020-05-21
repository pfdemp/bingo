var colHead = new Array("B","I","N","G","O");
var balls = 0;

function newGame() {
	for(var asub=1; asub<76; asub++){
		var cellID = "N" + asub;
		document.getElementById(cellID).className = "numberoff";
	}
	document.getElementById("ballnum").innerHTML = "&nbsp;";
	document.getElementById("message").innerHTML = " ";
	balls = 0;
}

function getBall() {
	if(balls > 74){
		document.getElementById("message").innerHTML = "All balls have been selected.";
	}
	else {
		var minrand = 1;
		var maxrand = 76;
		var numDupe = true;
		while(numDupe){
			var ballnum = Math.floor(Math.random() * (maxrand - minrand)) + minrand;
			var ballID = "N" + ballnum;
			if(document.getElementById(ballID).className == "numberoff"){
				document.getElementById(ballID).className = "numberon";
				ballLetter = colHead[Math.floor((ballnum-1)/15)];
				document.getElementById("ballnum").innerHTML = ballLetter + ballnum;
				numDupe = false;
				balls++;
				document.getElementById("message").innerHTML = "Balls selected: " + balls;
			}	
		}
	}
}
