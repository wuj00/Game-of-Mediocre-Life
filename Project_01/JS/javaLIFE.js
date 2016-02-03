$(function(){

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

  /*------------------------Spin Button------------------------*/
  var spinDial = document.querySelector('.spin')

  function getRandom(min, max) {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    display.innerText = randomNum
    //alert("Spin again!");
    //console.log("workkk");
    console.log(spaces[randomNum])
  }

  spinDial.addEventListener("click", getRandom)

  /*-------------------moving number of spaces------------------*/
  function movePlayer(who,randomNum){
     var plyPosition = $('.spaces').index($(who).parent())
     $('.spaces').eq(plyPosition + randomNum).append($(who))
  }
  movePlayer('who', 5)

  // for (i = 0; i < getRandom.length; i++) {
  //   getRandom[i].addEventListener('click', function() {
  //
  //   })
  // }




  /*-----------------------players-----------------------------*/
  function players(who) {
      var playerOne = 0, '<img src="CSS/IMG/Hipster Girl.png" alt="Girl">'
      var playerTwo = '<img src="CSS/IMG/Cooldude.png" alt="Boy">'
      if (playerOne <= 0) {
          this.innerText = moveForward
      } else {
        this.innerText = moveForward
      }
  }

})
