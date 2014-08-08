var balanceOne = 0;
var numberOfRollsOne = 0;
var balanceTwo = 0;

var rollDiceOne = function() {
	var displayBalance = document.getElementById("balanceOne");
	var displayRolls = document.getElementById("numberOfRollsOne");
	numberOfRollsOne = numberOfRollsOne + 1
	var dice1 = Math.floor((Math.random()*6)+1)
	var dice2 = Math.floor((Math.random()*6)+1)

	if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
		balanceOne = balanceOne + 1;
	} else if (dice1 + dice2 === 2) {
		balanceOne = balanceOne -1;
	};

	displayBalance.innerHTML = balanceOne;
	displayRolls.innerHTML = numberOfRollsOne;
};

var rollDiceTwo = function() {
		if (numberOfRollsTwo === 0) {
		alert("You're no fun!")
	} else {
		for (i = 1, i < document.getElementById("numberOfRollsTwo"), i++) {
				var displayBalance = document.getElementById("balanceTwo");
				var displayRolls = document.getElementById("numberOfRollsTwo");
				numberOfRollsTwo = numberOfRollsOne - 1
				var dice1 = Math.floor((Math.random()*6)+1)
				var dice2 = Math.floor((Math.random()*6)+1)

				if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
					balanceTwo = balanceTwo + 1;
				} else if (dice1 + dice2 === 2) {
					balanceTwo = balanceTwo -1;
				};

				displayBalance.innerHTML = balanceTwo;
				displayRolls.innerHTML = numberOfRollsTwo;
		}
	}
};

function winCalculation() {
	winning = balance - myBalance
	if(winning<0) {
		alert("You owe me $" + result)
	} else if (winning > 0) {
		alert("I owe you $" + result)
	} else {
		alert("We're even")
	};
};
