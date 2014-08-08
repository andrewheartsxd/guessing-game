var balanceOne = 0;
var numberOfRollsOne = 0;
var balanceTwo = 0;
var numberOfRollsTwo= 0;

function rollDiceOne() {
	var displayBalanceOne = document.getElementById("balanceOne");
	var displayRollsOne = document.getElementById("numberOfRollsOne");
	numberOfRollsOne = numberOfRollsOne + 1;
	var dice1 = Math.floor((Math.random()*6)+1);
	var dice2 = Math.floor((Math.random()*6)+1);

	if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
		balanceOne = balanceOne + 1;
	} else if (dice1 + dice2 === 2) {
		balanceOne = balanceOne -1;
	};

	displayBalanceOne.innerHTML = balanceOne;
	displayRollsOne.innerHTML = numberOfRollsOne;
};



function rollDiceTwo() {

	var numberOfRollsOne = document.getElementById("numberOfRollsOne")

	while (numberOfRollsTwo <= numberOfRollsOne)
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
	var displayBalanceTwo = document.getElementById("balanceTwo");
	var displayRollsTwo = document.getElementById("numberOfRollsTwo");
	numberOfRollsTwo = numberOfRollsOne + 1;
	var dice1 = Math.floor((Math.random()*6)+1);
	var dice2 = Math.floor((Math.random()*6)+1);

	if (dice1 + dice2 === 7 || dice1 + dice2 === 11) {
		balanceTwo = balanceTwo + 1;
	} else if (dice1 + dice2 === 2) {
		balanceTwo = balanceTwo - 1;
	};

	displayBalanceTwo.innerHTML = balanceTwo;
	displayRollsTwo.innerHTML = numberOfRollsTwo;
	}

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
