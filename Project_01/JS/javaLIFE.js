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


  var display = document.querySelector('#display')
  var spaces = document.querySelectorAll('.spaces')
  var messageDiv = document.getElementById('message')
  var randomNum = null
  // var moneyScore = document.querySelectorAll('#player1-score', '#player2-score')
  // var playerOneTurn = true
  // var $plyPosition

  /*--------------------player properties----------------------*/

  var player1 = {money: 50000, location: 0, $id: $('#player1')}
  var player2 = {money: 50000, location: 0, $id: $('#player2')}

  var current = player1

  var game = {}

  game.players = [player1, player2]

  /*------------------------Spin Button------------------------*/

  var spinDial = document.querySelector('.spin')

  function getRandom(min, max) {
        randomNum = Math.floor(Math.random() * 3) + 1
        display.innerText = randomNum
        movePlayer(current, randomNum)
        //alert("Spin again!");
        //console.log("workkk");
      // console.log(spaces[randomNum])
  /*----------------------switching players-------------------------*/
        // if (playerOneTurn) {
        //     currentPlayer = '#player1'
        //     playerOneTurn = false
        //   console.log("player1 moves")
        // }
        // else {
        //     currentPlayer = '#player2'
        //     playerOneTurn = true
        //   console.log("player2 moves")
        // }//calling function to move players
        //   // movePlayer(currentPlayer, randomNum)
    }
    spinDial.addEventListener("click", getRandom)

  /*-------------------moving number of spaces------------------*/

  function movePlayer(who,randomNum){
      who.location += randomNum
      $('#s'+ who.location).append(who.$id) //which player -- will move 'how many' spaces from current spot
      // alert(events['#s'+ who.location].message) //alert message when the player lands on the space
      messageDiv.innerHTML = events['#s'+ who.location].message
      current.money += events['#s' + who.location].money //current player's money will be deducted or added according to event triggered
      console.log(current)

      if (current === player1) { //if statement for switching players
        console.log("player1 moves")
        console.log(current.money)
        $('#player1-score').text(current.money) //add-subtract money from the score
      getWinner()
        current = player2
      }
      else {
        console.log("player2 moves")
        $('#player2-score').text(current.money)
      getWinner()
        current = player1
      }
      console.log(events['#s' + who.location].money)
    }

    function getWinner() {
      // console.log(player1, player2)
      // if (player1.location === 20 && player2.location !== 20)
      //       document.getElementById('#player1').disabled = true
      if (player1.location > 20 && player2.location > 20)
      if (player1.location === 20 && player2.location === 20) {

          if (player1.money < player2.money) {
            console.log("player2 wins!")
            alert("Player 2 Wins!")
            document.location.reload()
          }
          else if (player1.money > player2.money) {
            console.log("player1 wins!")
            alert("Player 1 Wins!")
            document.location.reload()
          }
          else {
            console.log("It's a tie!")
          }
        }
        else {
          console.log("continue playing")
      }
    }



        // $plyPosition = $('.spaces').index($(who).parent())
        // console.log(plyPosition)
        // $('.spaces').eq(plyPosition + randomNum).append($(who))

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
