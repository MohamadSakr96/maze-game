// Game state variables
var game_state = true;
var game_score = 0;


// load the page and only start when to button S is pressed
window.onload = () => {  
    let a = 1; 
    document.getElementById('start').addEventListener("click", () => {startGame();});
}

// Where the game starts
function startGame() {

    if (game_state == true) {
        trackMouse();
    }else {
        resetGame();
    }
}

// tracking if the mouse hit a boundary or reach the end
function trackMouse() {
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "black";
        elements[i].addEventListener("mouseover", looseGame);
    }
    document.getElementById('end').addEventListener("mouseover", winGame);
    document.getElementById('game').addEventListener("mouseleave", outGame);
}

// if you go outside of the game
function outGame() {
    if (game_state == true) {
        alert("😁 Try Again! 😁");
        looseGame();
    }
}


// if you reach the end!!
function winGame() {      
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "green";
    }
    game_state = false;
    game_score += 5;
    document.getElementById('status').innerHTML += `<br><br> 🎉 YOU WIN!! 🎉 <br> ${game_score} points`;
    disableEvent();
}

// if you hit a boundary
function looseGame() {
    let elements = document.getElementsByClassName('boundary');
    
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    game_state = false;
    game_score -= 10;
    document.getElementById('status').innerHTML += `<br><br> 🙁 YOU LOOSE!! 🙁 <br> ${game_score} points`;
    disableEvent();   
}

// only when you press "S" again
function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    game_state = true;
    game_score = 0; // before reseting show final score ?
}

// to stop event listeners from always running
function disableEvent() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].removeEventListener("mouseover", looseGame);
    }
    document.getElementById('end').removeEventListener("mouseover", winGame);
    document.getElementById('game').removeEventListener("mouseleave", outGame);
}

