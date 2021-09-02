var diceOptions = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

function diceRoll() {
    var diceFace = Math.floor((Math.random() * 6 + 1))
    return diceFace;
}

function diceGame () {

    var p1Roll = diceRoll()
        document.getElementById("diceIMG1").src = "images\\" + diceOptions[p1Roll - 1]

    var p2Roll = diceRoll()
        document.getElementById("diceIMG2").src = "images\\" + diceOptions[p2Roll - 1]

    // need to update dice face pictures with each players numbers

    if (p1Roll > p2Roll) {
        //player 1 wins!
        //need to change the heading <h1>
        document.getElementById("heading").innerHTML = "Player 1 wins"

    } else if (p1Roll < p2Roll) {
         //player 2 wins!
        //need to change the heading <h1>
        document.getElementById("heading").innerHTML = "Player 2 wins"

    } else if (p1Roll == p2Roll) {
        //A draw
        document.getElementById("heading").innerHTML = "DRAW"
    }

}

diceGame()
