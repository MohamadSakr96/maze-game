// make it into class later...
var game_state = true;
var game_score = 0;


// load the page and only start when to buttong S is pressed
window.onload = () => {   
    document.getElementById('start').addEventListener("click", startGame);
}

// Where the game starts
function startGame() {
    if (game_state == true) {
        trackMouse();
    }else {
        resetGame();
    }
}


function trackMouse() {
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        elements[i].addEventListener("mouseover", looseGame);
    }
    document.getElementById('end').addEventListener("mouseover", winGame);
}


function winGame() {      
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "blue";
    }
    game_state = false;
    game_score += 5;
    document.getElementById('status').innerHTML += `<br><br> 🎉 YOU WIN!! 🎉 <br> ${game_score}`;
    disableEvent();
}


function looseGame() {
    let elements = document.getElementsByClassName('boundary');
    
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    game_state = false;
    game_score -= 10;
    document.getElementById('status').innerHTML += `<br><br> 🙁 YOU LOOSE!! 🙁 <br> ${game_score}`;
    disableEvent();   
}

function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    game_state = true;
    game_score = 0; // before reseting show final score ?
}

function disableEvent() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        if (game_state == false) {
            elements[i].removeEventListener("mouseover", looseGame);
            document.getElementById('end').removeEventListener("mouseover", winGame);
        }
    }
}

