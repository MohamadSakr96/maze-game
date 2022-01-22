// load the page and only start when to buttong S is pressed
window.onload = () => {
    
    // start the game?
    youLoose();
    

}

// Where the game starts
function startGame() {



}


function youLoose() {
    let elements = document.getElementsByClassName('boundary');
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "red";
    }
    document.getElementById('status').innerHTML = "You Loose 🙁";
}

