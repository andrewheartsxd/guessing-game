var balanceOne = 0;
var numberOfRollsOne = 0;
var numberOfRollsTwo = 0;
var balanceTwo = 0;

var displayRollsOne = function () {
	document.getElementById("numberOfRollsOne");
};
var displayBalanceOne = function () {
	document.getElementById("balanceOne");
};
var displayBalanceTwo = function () {
	document.getElementById("balanceTwo");
};
var displayRollsTwo = function () {
	document.getElementById("numberOfRollsTwo");
};
var reset = function () {
	location.reload();
};

var rollDiceOne = function () {
	displayRollsOne();
	displayBalanceOne();
	numberOfRollsOne = numberOfRollsOne + 1;
	var dice1 = Math.floor((Math.random()*6)+1);
	var dice2 = Math.floor((Math.random()*6)+1);
	if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
		balanceOne = balanceOne + 1;
	} else if (dice1 + dice2 === 2) {
		balanceOne = balanceOne - 1;
	}

	document.getElementById("balanceOne").innerHTML = balanceOne;
	document.getElementById("numberOfRollsOne").innerHTML = numberOfRollsOne;
	document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
  document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";
};

function rollDiceTwo() {
	displayBalanceTwo();
	displayRollsTwo();
	displayRollsOne();
	numberOfRollsTwo = numberOfRollsTwo + 1;


		var dice1 = Math.floor((Math.random()*6)+1);
		var dice2 = Math.floor((Math.random()*6)+1);
		if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
			balanceTwo = balanceTwo + 1;
		} else if (dice1 + dice2 === 2) {
			balanceTwo = balanceTwo - 1;
		}
		document.getElementById("balanceTwo").innerHTML = balanceTwo;
		document.getElementById("numberOfRollsTwo").innerHTML = numberOfRollsTwo;
		document.getElementById("diceOneImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice1 + ".png";
    document.getElementById("diceTwoImage").src = "http://www.wpclipart.com/recreation/games/dice/die_face_" + dice2 + ".png";

    if (numberOfRollsTwo === numberOfRollsOne) {
    	document.getElementById("playerTwoRollButton").disabled = "disabled";
			var winning = balanceOne - balanceTwo;
				if (winning < 0) {
					document.getElementById("winMessage").innerHTML = ("<h2><b>The result: Player One owes Player Two $" + Math.abs(winning) + "!</b></h2>");
				} else if (winning > 0) {
					document.getElementById("winMessage").innerHTML = ("<h2><b>The result: Player Two owes Player One $" + Math.abs(winning) + "!</b></h2>");
				} else {
					document.getElementById("winMessage").innerHTML = ("<h2><b>The result: Player One and Player Two are even!</b></h2>");
				}
    }
}
