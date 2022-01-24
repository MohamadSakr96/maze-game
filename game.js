// Game state variables
var game_state = true; // if true you can start the game, when false (then you are playing)
var game_score = 0;

// load the page and only start when to button S is pressed
window.onload = () => {  
    if (game_state == true) {
        document.getElementById('start').addEventListener("mouseenter", trackMouse);
    }
}

// tracking if the mouse hit a boundary or reach the end
function trackMouse() {
    game_state = false;
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "black";
        elements[i].addEventListener("mouseover", looseGame);
    }
    document.getElementById('start').addEventListener("click", resetGame);
    document.getElementById('end').addEventListener("mouseover", winGame);
    document.getElementById('game').addEventListener("mouseleave", looseGame);
}

// if you reach the end!!
function winGame() {      
    let elements = document.getElementsByClassName('boundary');

    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "green";
    }
    game_state = true;
    game_score += 5;
    document.getElementById('status').innerHTML = `🎉 YOU WIN!! 🎉 <br> ${game_score} points`;
    disableEvent();
}

// if you hit a boundary
function looseGame() {
    let elements = document.getElementsByClassName('boundary');
    
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    game_state = true;
    game_score -= 10;
    document.getElementById('status').innerHTML = `🙁 YOU LOOSE!! 🙁 <br> ${game_score} points`;
    disableEvent();   
}

// only when you press "S" again
function resetGame() {
    let elements = document.getElementsByClassName('boundary');
    game_state = true;
    game_score = 0; 
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('status').innerHTML = `Begin by moving your mouse over the "S".`;
    disableEvent();
}

// to stop event listeners from always running
function disableEvent() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].removeEventListener("mouseover", looseGame);
    }
    document.getElementById('end').removeEventListener("mouseover", winGame);
    document.getElementById('game').removeEventListener("mouseleave", looseGame);
}

