// make it into class later...
var game_state = false;
var game_score = 0;

// load the page and only start when to buttong S is pressed
window.onload = () => {
    // start the game?
    
    document.getElementById('start').addEventListener("click", startGame);
    

}

// Where the game starts
function startGame() {
    if (state_of_game == false) {
        trackMouse();
    }else {
        resetGame();
    }
}


function winGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "blue";
    }
    document.getElementById('status').innerHTML = "🎉 YOU WIN!! 🎉";
    game_state = true;
    game_score += 5;
}


function looseGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    document.getElementById('status').innerHTML = "🙁 YOU LOOSE!! 🙁";
    game_state = true;
    game_score -= 10;
}

function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = "";
    game_state = false;
    game_score = 0; // before reseting show final score ?
}
