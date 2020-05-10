var colHead = new Array("B","I","N","G","O");

function newGame() {
	for(var asub=1; asub<76; asub++){
		var cellID = "N" + asub;
		document.getElementById(cellID).className = "numberoff";
	}
	document.getElementById("ballnum").innerHTML = "&nbsp;";
}

function getBall() {
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
		}
	}
}
