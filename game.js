
var state_of_game = false;

// load the page and only start when to buttong S is pressed
window.onload = () => {
    // start the game?
    
    document.getElementById('start').addEventListener("click", startGame);
    

}

// Where the game starts
function startGame() {
    if (state_of_game == false) {
        looseGame();
    }else {
        resetGame();
    }

}


function looseGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    document.getElementById('status').innerHTML = "You Loose 🙁";
    state_of_game = true;
}

function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = "";
    state_of_game = false;
}
