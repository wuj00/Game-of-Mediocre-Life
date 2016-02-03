// $(function(){

  /*Javascript Functions:
  	- Interactive players (x2)
  	** Randomizer for spin dial
  	- Money score/counter
  	- Be able to move players to number of spaces according to spin dial
  	- Event trigger for boxes
  	- Event needs to be able to deplete/add specific player's money
  	- Pop-up for  beginning game, ending game. (ie: 'PLAYER 2' WINS)
  */


  // function movePlayer(who,howMuch){
  //    var p1Position = $('.spaces').index($(who).parent())
  //    $('.spaces').eq(p1Position + howMuch).append($(who))
  // }

  // movePlayer('#player1', 5)

  var moneyScore
  var display = document.querySelector('#display')
  var spaces = document.querySelectorAll('.spaces')
  var randomNum = null
  var player = null
  var playerTwoTurn = false

  /*------------------------Spin Button------------------------*/
  var spinDial = document.querySelector('.spin')

  function getRandom(min, max) {
    randomNum = Math.floor(Math.random() * 3) + 1
    display.innerText = randomNum
    //alert("Spin again!");
    //console.log("workkk");
    console.log(spaces[randomNum])
  /*----------------------switching players-------------------------*/
    if (playerTwoTurn) {
      player = '#player2'
      playerTwoTurn = false
      console.log("player2 moves")
    }
    else {
      player = '#player1'
      playerTwoTurn = true
      console.log("player1 moves")
    }//calling function to move players
    movePlayer(player, randomNum)
  }

  spinDial.addEventListener("click", getRandom)

  /*-------------------moving number of spaces------------------*/
  function movePlayer(who,randomNum){
     var plyPosition = $('.spaces').index($(who).parent())
     $('.spaces').eq(plyPosition + randomNum).append($(who))
  }

  /*-----------------------score-moneyCounter-----------------------------*/























// })
