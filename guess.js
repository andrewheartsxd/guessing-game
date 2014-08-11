//declare starting variables
var balanceOne = 0;
var numberOfRollsOne = 0;
var numberOfRollsTwo = 0;
var balanceTwo = 0;

//declare starting functions
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

//function for when player 1 rolls
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
	};

	//we use this in order to update the HTML values so player 2 can call them
	document.getElementById("balanceOne").innerHTML = balanceOne;
	document.getElementById("numberOfRollsOne").innerHTML = numberOfRollsOne;
};

//function for when player 2 rolls
function rollDiceTwo() {
	displayBalanceTwo();
	displayRollsTwo();
	displayRollsOne(); //we call this also because we compare player 1's # of rolls to player 2's # of rolls
	numberOfRollsTwo = numberOfRollsTwo + 1;
	if (numberOfRollsTwo < numberOfRollsOne) {
		var dice1 = Math.floor((Math.random()*6)+1);
		var dice2 = Math.floor((Math.random()*6)+1);
		if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
			balanceTwo = balanceTwo + 1;
		} else if (dice1 + dice2 === 2) {
			balanceTwo = balanceTwo - 1;
		}
		//we change these values here because every time player 2 clicks the button these values need to be different, so we can compare them in the first for statement of this function
		document.getElementById("balanceTwo").innerHTML = balanceTwo;
		document.getElementById("numberOfRollsTwo").innerHTML = numberOfRollsTwo;

	//this ends the game
	} else {
		var winning = balanceOne - balanceTwo;
			if (winning < 0) {
				alert("Player 1 owes Player 2 $" + Math.abs(winning) + ".");
			} else if (winning > 0) {
				alert("Player 2 owes Player 1 $" + Math.abs(winning) + ".");
			} else {
				alert("We're even.");
			};
		};
	};




			// for (i = 1; i < document.getElementById("numberOfRollsOne").textContent.parseint; i++) {
				// 	var displayBalanceTwo = document.getElementById("balanceTwo").textContent;
				// 	var displayRollsTwo = document.getElementById("numberOfRollsTwo").textContent;
				// 	numberOfRollsTwo = document.getElementById("numberOfRollsOne").textContent - 1
				// 	var dice1 = Math.floor((Math.random()*6)+1)
				// 	var dice2 = Math.floor((Math.random()*6)+1)

				// 	if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
				// 		balanceTwo = balanceTwo + 1;
				// 	} else if (dice1 + dice2 === 2) {
				// 		balanceTwo = balanceTwo -1;
				// 	};

				// 	displayBalanceTwo.innerHTML = balanceTwo;
				// 	displayRollsTwo.innerHTML = numberOfRollsTwo;
				// }


// document.getElementById("numberOfRollsTwo").textContent
// document.getElementById("numberOfRollsOne").textContent
