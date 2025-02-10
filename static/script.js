let correctSkull = Math.floor(Math.random() * 3) + 1;

function checkStone(skullNumber) {
    let resultText = document.getElementById("result");
    if (skullNumber === correctSkull) {
        resultText.innerHTML = "🎉 You found the red stone!";
    } else {
        resultText.innerHTML = "❌ Wrong choice! Try again.";
    }
}
