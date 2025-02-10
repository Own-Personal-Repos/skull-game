let correctSkull = 0;
let gameInProgress = false;

function startGame() {
    let skulls = document.querySelectorAll(".skull");
    document.getElementById("result").innerText = "";
    document.getElementById("instructions").innerText = "Watch where the red stone is!";
    
    correctSkull = Math.floor(Math.random() * 3) + 1;
    
    // Hide button when game starts
    document.querySelector(".button-container").classList.remove("show-button");

    // Show the red stone before shuffling
    let skull = document.getElementById(`skull${correctSkull}`);
    skull.src = "/static/stone.png"; 
    
    setTimeout(() => {
        // Hide the stone again
        skull.src = "/static/skull.png";
        
        // Shuffle animation
        skulls.forEach(s => s.classList.add("shuffling"));

        setTimeout(() => {
            skulls.forEach(s => s.classList.remove("shuffling"));
            document.getElementById("instructions").innerText = "Now, find the red stone!";
            gameInProgress = true;
        }, 2000);
        
    }, 1000);
}

function checkStone(skullNumber) {
    if (!gameInProgress) return;

    let resultText = document.getElementById("result");
    if (skullNumber === correctSkull) {
        resultText.innerHTML = "🎉 You found the red stone!";
    } else {
        resultText.innerHTML = "❌ Wrong choice! Try again.";
    }
    
    gameInProgress = false;

    // Show the "Try Again" button after game ends
    document.querySelector(".button-container").classList.add("show-button");
}