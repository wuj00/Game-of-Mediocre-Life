/*Javascript Functions:
	- Interactive players (x2)
	- Randomizer for spin dial
	- Money score/counter
	- Be able to move players to number of spaces according to spin dial
	- Event trigger for boxes
	- Event needs to be able to deplete/add specific player's money
	- Pop-up for  beginning game, ending game. (ie: 'PLAYER 2' WINS)
*/

var playerOne = '<img src="CSS/IMG/Hipster Girl.png" alt="Girl">'
var playerTwo = '<img src="CSS/IMG/Cooldude.png" alt="Boy">'
var moneyScore
var spaces = document.querySelectorAll('.spaces')
var spinDial = document.querySelector('.spin')
var display = document.querySelector('#display')

// function start() {
document.querySelector('.spin').addEventListener("click", getRandom)
  function getRandom(min, max) {
    display.innerText = Math.floor(Math.random() * 3) + 1;
    alert("Let's begin!");
    console.log("workkk");
    }

// }





// for (var i = 0; i < spinDial.length; i++) {
//   spinDial[i].addEventListener('click', start)
//   console.log("forloop spin")
//   }
