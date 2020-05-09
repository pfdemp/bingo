function setCards() {
	var numPicked = new Array();
	for(var asub=1; asub<76; asub++){
		numPicked[asub] = false;
	}
	var colHead = new Array("X","B","I","N","G","O");
	for(var bcol=1; bcol<6; bcol++){
		var minrand = 1 + ((bcol-1) * 15);
		var maxrand = 15 * bcol;
		for(var row=1; row<6; row++){
			var numDupe = true;
			var curSquare = colHead[bcol]+row;
			while(numDupe){
				var cardnum = Math.floor(Math.random() * (maxrand - minrand)) + minrand;
				if(!(numPicked[cardnum])){
					numPicked[cardnum] = true;
					if(curSquare != "N3"){
						document.getElementById(curSquare).innerHTML = cardnum;
						document.getElementById(curSquare).className = "cellopen";
					}
					numDupe = false;
				}
			}
		}
	}
}
function toggleCell(cell){
	if(cell.className == "cellclosed"){
		cell.className = "cellopen";
	}
	else {
		cell.className = "cellclosed";
	}
	
}