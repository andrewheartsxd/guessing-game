function myFunction()
{
	var balance = 0
	var rolls = 0

	var play2 = "yes"

	while(play2 === "yes")
	{
		var rolls = rolls + 1
		var dice1 = Math.floor((Math.random()*6)+1)
		var dice2 = Math.floor((Math.random()*6)+1)

		if(dice1 + dice2 === 7 || dice1 + dice2 === 11)
		{
			var winPoint = 1
		}
		else if(dice1 + dice2 > 2)
		{
			var winPoint = 0
		}
		else
		{
			var winPoint = -1
		}

		var balance = balance + winPoint


		play2 = prompt("You rolled " + dice1 + " & " + dice2 + ". You have scored $" + balance + " in " + rolls + " roll(s). Go again?").toLowerCase()

		while (play2 !== "yes" && play2 !== "no")
		{
				play2 = prompt("Please enter 'yes' or 'no'")
		};
	};

	// alert("My turn! I have " + rolls + " rolls!")
	// var myRolls = 0
	// var myBalance = 0

	// while(myRolls < rolls)
	// {
	// 	var dice3 = Math.floor((Math.random()*6)+1)
	// 	var dice4 = Math.floor((Math.random()*6)+1)
	// 	// alert(dice3)
	// 	// alert(dice4)
	// 	// alert(myRolls)

	// 	if(dice3 + dice4 === 7 || dice3 + dice4 === 11)
	// 	{

	// 		var myWinPoint = 1
	// 		var myRolls = myRolls + 1
	// 	}
	// 	else if(dice3 + dice4 > 2)
	// 	{
	// 		var myWinPoint = 0
	// 		var myRolls = myRolls + 1
	// 	}
	// 	else
	// 	{
	// 		var myWinPoint = -1
	// 		var roll = 1
	// 	}

	// 	var myBalance = myBalance + myWinPoint
	// 	alert("I rolled " + dice3 + " & " + dice4 + ". I have scored $" + myBalance + " in " + myRolls + " roll(s).")
	// };

function winCalculation()

	winning = balance - myBalance
	// alert(result)

	if(winning<0)
	{
		alert("You owe me $" + -result)
	}
	else if(winning > 0)
	{
		alert("I owe you $" + result)
	}
	else
	{
		alert("We're even")
	}

};


var play = prompt("Roll the dice? Yes or no?").toLowerCase();

switch(play)
{
	case 'yes':

		while(play === "yes")
		{
			myFunction();
			play = prompt("Play again?").toLowerCase();

		};

		alert("Thanks for playing!");
		break;

	case 'no':

		alert("You're no fun :(");
		break;

	default:

		alert("Please answer 'Yes' or 'No'");
		location.reload()
};