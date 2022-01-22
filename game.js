// make it into class later...
var game_state = true;
var game_score = 0;
var count = 0;

// load the page and only start when to buttong S is pressed
window.onload = () => {
    // start the game?
    
    document.getElementById('start').addEventListener("click", startGame);
    
    console.log(`OnLoad: game state is ${game_state} and counter is ${count}`);

}

// Where the game starts
function startGame() {
    if (game_state == true) {
        count += 1; 
        console.log(`start game: game state is ${game_state} and counter is ${count}`);
        trackMouse();
    }else {
        resetGame();
    }
}


function trackMouse() {
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        if (game_state == true) {
            elements[i].addEventListener("mouseover", looseGame);
        }
    }
    if (game_state == true) {
        document.getElementById('end').addEventListener("mouseover", winGame);
    }
}


function winGame() {
    if (game_state == true) {    
        let elements = document.getElementsByClassName('boundary');
        for (let i=0; i<elements.length; i++) {
            elements[i].style.backgroundColor = "blue";
        }
        document.getElementById('status').innerHTML = "🎉 YOU WIN!! 🎉";
        game_state = false;
        game_score += 5;
    }
}


function looseGame() {
    console.log("hon?", game_state);
    if (game_state == true) {
        let elements = document.getElementsByClassName('boundary');
        for (let i=0; i<elements.length; i++) {
            elements[i].style.backgroundColor = "red";
        }
        document.getElementById('status').innerHTML = "🙁 YOU LOOSE!! 🙁";
        game_state = false;
        game_score -= 10;
    }
    
}

function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = "";
    game_state = true;
    game_score = 0; // before reseting show final score ?
}

