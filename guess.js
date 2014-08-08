function rollDice()
{
	var balance = 0
	var rolls = 0

	var play = "yes"

	// while(play === "yes")
	// {
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

	var balance = balance + winPoint;

  console.log("Dice 1 roll " + dice1);
  console.log("Dice 2 roll " + dice2);
  console.log("Rolls " + rolls);
  console.log("Balance " + balance);
  return balance;

  getElementById =


	// alert("You rolled " + dice1 + " & " + dice2 + ". You have scored $" + balance + " in " + rolls + " roll(s). Go again?")

		// while (play !== "yes" && play !== "no")
		// {
		// 		play = prompt("Please enter 'yes' or 'no'")
		// };
	// };
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
{
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


// var play = prompt("Roll the dice? Yes or no?").toLowerCase();

// switch(play)
// {
// 	case 'yes':

// 		while(play === "yes")
// 		{
// 			rollDice();
// 			play = prompt("Play again?").toLowerCase();

// 		};

// 		alert("Thanks for playing!");
// 		break;

// 	case 'no':

// 		alert("You're no fun :(");
// 		break;

// 	default:

// 		alert("Please answer 'Yes' or 'No'");
// 		location.reload()
// };

function show_image(src, width, height, alt)
{
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}

function add_google_logo()
{
  var src = "http://google.com/images/logo.gif"
  show_image("http://google.com/images/logo.gif", 276, 110, "Google Logo");
}
