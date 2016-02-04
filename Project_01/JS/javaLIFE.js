// $(function(){

  /*Javascript Functions:
  	- Interactive players (x2)
  	** Randomizer for spin dial
  	- Money score/counter
  	** Be able to move players to number of spaces according to spin dial
  	- Event trigger for boxes
  	- Event needs to be able to deplete/add specific player's money
  	- Pop-up for  beginning game, ending game. (ie: 'PLAYER 2' WINS)
  */


  var display = document.querySelector('#display')
  var spaces = document.querySelectorAll('.spaces')
  var randomNum = null
  var currentPlayer = null
  var playerOneTurn = true
  // var turn = 2

  /*--------------------player properties----------------------*/

  var player1 = {money: 50000, location: 0, $id: $('#player1')}
  var player2 = {money: 50000, location: 0}
  var game = {}

  game.players = [player1, player2]



/*-------------------------Canvas----------------------------*/

    // var canvas = document.getElementById('myCanvas')
    // var dice = document.getElementById('spin')
    // var context = canvas.getContext('2d')
    // var x = 0
    // var y = 0
    // var width = 1040
    // var height = 767
    // var imageObj = new Image()
    //
    // imageObj.onload = function() {
    //   context.drawImage(imageObj, x, y, width, height)
    // };
    // imageObj.src = 'CSS/IMG/Mediocre LIFE Board Game-Path.png'
    //
    //
    // function init() {
    // var ctx = myCanvas.getContext("2d");
    //     ctx.fillStyle = "white";
    //     ctx.fillRect(25,25,120,100);
    //     ctx.font = "24pt Helvetica";
    //     ctx.fillStyle = "black";
    //     ctx.fillText("Notice:", 30, 55);
    // }


  /*------------------------Spin Button------------------------*/

  var spinDial = document.querySelector('.spin')

  function getRandom(min, max) {
        randomNum = Math.floor(Math.random() * 3) + 1
        display.innerText = randomNum
        movePlayer(current, randomNum)
        //alert("Spin again!");
        //console.log("workkk");
      console.log(spaces[randomNum])

  /*----------------------switching players-------------------------*/
    if (playerOneTurn) {
        currentPlayer = '#player1'
        playerOneTurn = false
      console.log("player1 moves")
    }
    else {
        currentPlayer = '#player2'
        playerOneTurn = true
      console.log("player2 moves")
    }//calling function to move players
      // movePlayer(currentPlayer, randomNum)
}
spinDial.addEventListener("click", getRandom)

var $plyPosition


  /*-------------------moving number of spaces------------------*/

  function movePlayer(who,randomNum){
      if (current == player1) {
        who.location += randomNum
        $('#s'+who.location).append(who.$id)
        alert(events['#s'+who.location].message)
        current = player2
      }
      else {
        who.location += randomNum
        alert(events['#s'+who.location].message)
        current = player1
      }


        // $plyPosition = $('.spaces').index($(who).parent())
        // console.log(plyPosition)
        // $('.spaces').eq(plyPosition + randomNum).append($(who))
  }

/*-------------------------tile events----------------------------*/
      //make object for each spaces
      var events = {
      '#s1': {
        message: "Pay for college.  -$25,000",
        money: -25000
      },
      '#s2': {
        message: "PAYDAY! yayuhhh!  +$5,000",
        money: +5000
      },
      '#s3': {
        message: "Drunk night. Got mugged  -$200",
        money: -200
      },
      '#s4': {
        message: "Marijuana side business booms.  +$5,000",
        money: +5000
      },
      '#s5': {
        message: "Broken arm from snowboarding wipe-out.  -$1,000",
        money: -1000
      },
      '#s6': {
        message: "PAYDAY! yayuhhh!  +$5,000",
        money: +5000
      },
      '#s7': {
        message: "Got married! But weddings cost alot, sucka.  -$20,000",
        money: -20000
      },
      '#s8': {
        message: "Successful tax evasion. Woohoo!  +$5,000",
        money: +5000
      },
      '#s9': {
        message: "You won March Madness.  +$5,000",
        money: +5000
      },
      '#s10': {
        message: "Your house just got broken into.  -$2,000",
        money: -2000
      },
      '#s11': {
        message: "PAYDAY! yayuhhh!  +$5,000",
        money: +5000
      },
      '#s12': {
        message: "Car crash. Aww.  -$1,000",
        money: -1000
      },
      '#s13': {
        message: "Partial house fire...but at least your DDR board survived!  -$20,000",
        money: -20000
      },
      '#s14': {
        message: "Drunk night. Got mugged  -$200",
        money: -200
      },
      '#s15': {
        message: "PAYDAY! yayuhhh!  +$5,000",
        money: +5000
      },
      '#s16': {
        message: "Your first child is born! Kids aren't cheap.  -$50,000",
        money: -50000
      },
      '#s17': {
        message: "Won Bingo!  +$1,000",
        money: +1000
      },
      '#s18': {
        message: "PAYDAY! yayuhhh!  +$5,000",
        money: +5000
      },
      '#s19': {
        message: "MACBOOK BROKE, NOOOOOOH!!!  -$2,000",
        money: -2000
      },
      '#s20': {
        message: "Retirement plan finally kicks in..assuming you are the average American...and with a pension.  +$150,000",
        money: +150000
      }
    }

    // var total = 0
    // function getSpot(currentPlayer) {
    //   if(currentPlayer = 1) {
    //
    //   for (var i = 0; i < currentPlayer.length; i++) {
    //     currentPlayer[i]
    //     console.log("what number")
    //   }
    //   return total
    //   }
    // }

  var player1Location = 0
  var player2Location = 0
  var current = player1

  // function landOn() {
  // roll dice & game play
  // $('.spin').click(function(){
  //   movePlayer(current, getRandom())
  // })
    //   if (current === player1) {
    //       plyPosition += randomNum // keep track of the location of the players
    //       alert(events[$plyPosition].message) // show what events would happen at that specified location
    //       game.players[0].money += moneyScore //events.location.money += player1Money // events.location.money
    //       current = player2
    //   } else {
    //       game.players[0].location += randomNum
    //       alert(events.location.message)
    //       game.players[1].money += moneyScore
    //       current = player1
    //   }
    // })
// }


// events['#s1'].money
// -25000
// alert(events['#s9'].message)
// undefined
// function landing(location) {
// alert(events[location].message)
// console.log(events[location].money)
// }











  /*-----------------------score-moneyCounter-----------------------------*/

  // var moneyScore = 50000
  //
  // function makingBank() {
  //       ctx.font = "bold 14px Arial";
  //       ctx.fillStyle = "#0095DD";
  //       ctx.fillText("Player 1"+moneyScore, 80, 20);
  //
  // }















// })
