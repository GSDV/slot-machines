// DELAY FUNCTION
const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});
 
 
 
// DEFINING VARIABLES
var firstColumn = document.getElementById("first-column");
var secondColumn = document.getElementById("second-column");
var thirdColumn = document.getElementById("third-column");
 
var firstImage = document.getElementById("first-image");
var secondImage = document.getElementById("second-image");
var thirdImage = document.getElementById("third-image");
 
var firstWinOrLose = document.getElementById("first-win-or-lose");
var secondWinOrLose = document.getElementById("second-win-or-lose");
var thirdWinOrLose = document.getElementById("third-win-or-lose");
 
var leverDiv= document.getElementById("ball-and-lever-div");
var leverBall = document.getElementById("lever-ball");
var leverStick = document.getElementById("lever-stick");
 
var remainingCreditsText = document.getElementById("amount-of-credits");
var remainingCredits = 300;
var wagerAmount = 10;
 
var isRoundOver = true;
 
// OTHER ARRAYS
var slotColumnArray = [
    firstColumn,
    secondColumn,
    thirdColumn
]
 
var slotImageArray = [
    firstImage,
    secondImage,
    thirdImage
]
var slotImageArrayLength = slotImageArray.length;
 
var winOrLoseArray = [
    firstWinOrLose, 
    secondWinOrLose,
    thirdWinOrLose
]
var winOrLoseArrayLength = winOrLoseArray.length;
 
 
 
// SET UP STICKER SYMBOLS
document.getElementById("first-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[0] + `.png`;
document.getElementById("second-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[5] + `.png`;
document.getElementById("third-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[6] + `.png`;
document.getElementById("fourth-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[9] + `.png`;
document.getElementById("fifth-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[7] + `.png`;
document.getElementById("sixth-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[8] + `.png`;
document.getElementById("seventh-background-symbol").src = `Symbols/` + slotSymbols + `/` + symbolArray[10] + `.png`;
 
if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    /*document.getElementById("first-background-symbol").src = ``;
    document.getElementById("second-background-symbol").src = ``;
    document.getElementById("third-background-symbol").src = ``;
    document.getElementById("fourth-background-symbol").src = ``;
    document.getElementById("fifth-background-symbol").src = ``;
    document.getElementById("sixth-background-symbol").src = ``;
    document.getElementById("seventh-background-symbol").src = ``;*/

    document.getElementById("checkmark-text").style.bottom = '10px';
}
 
 
 
// SET UP RANDOM SLOTS WHEN USER LOADS PAGE
var firstRandomScrollingImage = document.getElementById("first-image");
var pastFirstRandomScrollingImage = firstRandomScrollingImage;
 
var secondRandomScrollingImage = document.getElementById("second-image");
var pastSecondRandomScrollingImage = secondRandomScrollingImage;
 
var thirdRandomScrollingImage = document.getElementById("third-image");
var pastThirdRandomScrollingImage = thirdRandomScrollingImage;
 
firstRandomScrollingImage.src = `Symbols/` + slotSymbols + `/` + symbolArray[Math.floor(Math.random() * symbolArray.length)] + `.png`;
secondRandomScrollingImage.src = `Symbols/` + slotSymbols + `/` + symbolArray[Math.floor(Math.random() * symbolArray.length)] + `.png`;
thirdRandomScrollingImage.src = `Symbols/` + slotSymbols + `/` + symbolArray[Math.floor(Math.random() * symbolArray.length)] + `.png`;

 
 
// Toggle Auto Spin
var isAutoSpinOn = false;
function toggleAutoSpin() {
    if (window.getComputedStyle(document.getElementById("checkmark-text")).getPropertyValue("color") == "rgb(255, 0, 0)") {
        document.getElementById("checkmark-text").innerHTML = `&#x2713;`;
        document.getElementById("checkmark-text").style.color = `rgb(0, 255, 0)`;
        isAutoSpinOn = true;
    }
    else if (window.getComputedStyle(document.getElementById("checkmark-text")).getPropertyValue("color") == "rgb(0, 255, 0)") {
        document.getElementById("checkmark-text").innerHTML = `&#x2717;`;
        document.getElementById("checkmark-text").style.color = `rgb(255, 0, 0)`;
        isAutoSpinOn = false;
    }
}
 
 

// AUDIO FUNCTIONS
var isAudioOn = true;
var scrollSound = new Audio('play-sound.mp3');
var winSound = new Audio('win-sound.mp3');

function toggleAudio() {
	if (isAudioOn) {
	    document.getElementById("audio-icon").src = "audio_off.png";
	    isAudioOn = false;
	}
    else if (isAudioOn == false) {
	    document.getElementById("audio-icon").src = "audio_on.png";
	    isAudioOn = true;
    }

	if (scrollSound.duration > 0 && !scrollSound.paused) {
        scrollSound.pause();
	}
	if (winSound.duration > 0 && !winSound.paused) {
        winSound.pause();
	}
}
function playScrollingAudio() {
    if (isAudioOn) {
        scrollSound.play();
    }
}
function playWinAudio() {
	if (isAudioOn) {
		winSound.play();
	}
}



// EACH SLOT SCROLLING ANIMATION
async function firstScrollAnimation() {
    for (i = 0; i < 30 ; i++) {
        while (firstRandomScrollingImage == pastFirstRandomScrollingImage) {
            firstRandomScrollingImage = symbolArray[Math.floor(Math.random() * symbolArray.length)];
        }
        pastFirstRandomScrollingImage = firstRandomScrollingImage;
        firstImage.src = `Symbols/` + slotSymbols + `/` + firstRandomScrollingImage + `.png`;
        await delay(90);
    }
}
async function secondScrollAnimation() {
    for (i = 0; i < 50 ; i++) {
        while (secondRandomScrollingImage == pastSecondRandomScrollingImage) {
            secondRandomScrollingImage = symbolArray[Math.floor(Math.random() * symbolArray.length)];
        }
        pastSecondRandomScrollingImage = secondRandomScrollingImage;
        secondImage.src = `Symbols/` + slotSymbols + `/` + secondRandomScrollingImage + `.png`;
        await delay(90);
    }
}
async function thirdScrollAnimation() {
    for (i = 0; i < 60 ; i++) {
        while (thirdRandomScrollingImage == pastThirdRandomScrollingImage) {
            thirdRandomScrollingImage = symbolArray[Math.floor(Math.random() * symbolArray.length)];
        }
        pastThirdRandomScrollingImage = thirdRandomScrollingImage;
        thirdImage.src = `Symbols/` + slotSymbols + `/` + thirdRandomScrollingImage + `.png`;
        await delay(90);
    }
}



// CHECK IF USER WON THE ROUND
async function checkWinConditions() {
    if (firstImage.getAttribute("src") == secondImage.getAttribute("src") && secondImage.getAttribute("src") == thirdImage.getAttribute("src") && firstImage.getAttribute("src") == thirdImage.getAttribute("src")) {
        document.getElementById("slot-container").classList.toggle("glowing-win-border");
        document.getElementById("first-win-or-lose").classList.toggle("win-or-lose-animation");
        remainingCredits = remainingCredits + wagerAmount * 4;
        remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;

        playWinAudio();
    }
 
    else if (firstImage.getAttribute("src") == secondImage.getAttribute("src") || secondImage.getAttribute("src") == thirdImage.getAttribute("src") || firstImage.getAttribute("src") == thirdImage.getAttribute("src")) {
        document.getElementById("slot-container").classList.toggle("glowing-win-border");
        document.getElementById("second-win-or-lose").classList.toggle("win-or-lose-animation");
        remainingCredits = remainingCredits + wagerAmount * 2;
        remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;

        playWinAudio();
    }
 
    else if (firstImage.getAttribute("src") !== secondImage.getAttribute("src") && firstImage.getAttribute("src") !== thirdImage.getAttribute("src") && secondImage.getAttribute("src") !== thirdImage.getAttribute("src")) {
        document.getElementById("third-win-or-lose").classList.toggle("win-or-lose-animation");
    }


    if (firstImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` || secondImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` || thirdImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
        if (document.getElementById("third-win-or-lose").classList.contains("win-or-lose-animation")) {
            document.getElementById("third-win-or-lose").classList.toggle("win-or-lose-animation");
        }
        if (document.getElementById("second-win-or-lose").classList.contains("win-or-lose-animation") == false) {
            document.getElementById("second-win-or-lose").classList.toggle("win-or-lose-animation");
        }
        playWinAudio();

        if (firstImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` && secondImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` && thirdImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
            remainingCredits = remainingCredits + 500;
            remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;
 
            document.getElementById("second-win-or-lose").classList.toggle("win-or-lose-animation");
            if (document.getElementById("first-win-or-lose").classList.contains("win-or-lose-animation" == false)) {
                document.getElementById("first-win-or-lose").classList.toggle("win-or-lose-animation");
            }
            if (document.getElementById("slot-container").classList.contains("glowing-win-border" == false)) {
                document.getElementById("slot-container").classList.toggle("glowing-win-border");
            }
 
            for (var i = 0; i < slotImageArrayLength; i++) {
                if ((slotImageArray[i]).getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
                    slotColumnArray[i].classList.toggle("glowing-animation");
                }
            }

            await delay(3000);
 
            document.getElementById("slot-container").classList.toggle("glowing-win-border");
            document.getElementById("first-win-or-lose").classList.toggle("win-or-lose-animation");
 
            for (var i = 0; i < slotImageArrayLength; i++) {
                if ((slotImageArray[i]).getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
                    slotColumnArray[i].classList.toggle("glowing-animation");
                }
            }
        }


        else {
            if ((firstImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` && secondImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) || (firstImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` && thirdImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) || (thirdImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png` && secondImage.getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`)) {
                remainingCredits = remainingCredits + 300;
                remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;
            }
            else {
                remainingCredits = remainingCredits + 100;
                remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;
            }
 
            var slotImageArrayLength = slotImageArray.length;
            for (var i = 0; i < slotImageArrayLength; i++) {
                if ((slotImageArray[i]).getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
                    slotColumnArray[i].classList.toggle("glowing-animation");
                }
            }


            await delay(3000);
 
            for (var i = 0; i < slotImageArrayLength; i++) {
                if ((slotImageArray[i]).getAttribute("src") == `Symbols/` + slotSymbols + `/` + specialSymbol + `.png`) {
                    slotColumnArray[i].classList.toggle("glowing-animation");
                }
            }
        }
    }
 
    else {
        await delay(3000);
    }
 
 
    if (document.getElementById("slot-container").classList.contains("glowing-win-border")) {
        document.getElementById("slot-container").classList.toggle("glowing-win-border");
    }
 
    for (var i = 0; i < winOrLoseArrayLength; i++) {
        if (winOrLoseArray[i].classList.contains("win-or-lose-animation")) {
            winOrLoseArray[i].classList.toggle("win-or-lose-animation");
        }
    }
}





// SET UP ROUND
async function setUpRound() {
    isRoundOver = false;
	
    remainingCredits = remainingCredits - wagerAmount;
    remainingCreditsText.innerHTML = `Credits: ` + remainingCredits;
 
    document.getElementById("credit-checker-text").style.border = `0px solid red`;
    document.getElementById("credit-checker-text").style.backgroundColor = "transparent";
 
    leverBall.style.pointerEvents = 'none';
    leverStick.style.pointerEvents = 'none';
 
    leverDiv.style.cursor = 'not-allowed';
 
    leverDiv.classList.toggle("lever-animation-class");
    leverBall.classList.toggle("lever-ball-animation-class");
    leverStick.classList.toggle("lever-stick-animation-class");
 
    await delay(2000);
 
    leverDiv.classList.toggle("lever-animation-class");
    leverBall.classList.toggle("lever-ball-animation-class");
    leverStick.classList.toggle("lever-stick-animation-class");
}

async function resetForNextRound() {
    leverDiv.style.cursor = 'auto';
    leverBall.style.pointerEvents = 'auto';
    leverStick.style.pointerEvents = 'auto';
}



// CHECK IF USER HAS NOT RUN OUT OF CREDITS
var areThereEnoughCredits = `Enough Credits`;
function checkIfSufficientCreditsAvailable() {
    if (remainingCredits >= wagerAmount) {
        areThereEnoughCredits = `Enough Credits`;
    }
    else if (remainingCredits == 0) {
        areThereEnoughCredits = `No Credits`;
        isRoundOver = true;
    }
    else if (remainingCredits < wagerAmount) {
        areThereEnoughCredits = `Lower Wager`;
        isRoundOver = true;
    }
 
    switch (areThereEnoughCredits) {
        case `Enough Credits`:
            document.getElementById("credit-checker-text").innerHTML = ``;
            playTheRound();
            break;
    
        case `No Credits`:
            document.getElementById("credit-checker-text").innerHTML = `You Lost All Your Credits! (Refresh This Page To Restart)`;
            document.getElementById("credit-checker-text").style.border = `5px solid red`;
            document.getElementById("credit-checker-text").style.backgroundColor = "#2b2b2b";
            isRoundOver = true;
            break;
    
        case `Lower Wager`:
            document.getElementById("credit-checker-text").innerHTML = `Your Wager Is Too High!`;
            document.getElementById("credit-checker-text").style.border = `5px solid red`;
            document.getElementById("credit-checker-text").style.backgroundColor = "#2b2b2b";
            isRoundOver = true;
            break;
    }
}



// PLAY THE ROUND
async function playTheRound() {
    setUpRound();

    playScrollingAudio();
    
    firstScrollAnimation();
    secondScrollAnimation();
    thirdScrollAnimation();
    await delay(2800);

    /*
    DEBUGGING WIN CONDITIONS CODE
    firstImage.src = "Symbols/` + slotSymbols + `/ghost.png";
    secondImage.src = "Symbols/` + slotSymbols + `/zombie.png";
    thirdImage.src = "Symbols/` + slotSymbols + `/ghost.png";
    */

    checkWinConditions();

    await delay (3000);
    resetForNextRound();

    if (isAutoSpinOn) {
        checkIfSufficientCreditsAvailable();
    }
    else {
        isRoundOver = true;
    }
}





// UP AND DOWN WAGER BUTTONS
async function upTheWager() {
    if (isAutoSpinOn) {
        document.getElementById("max-or-min-wager").innerHTML = `Turn off Auto Spin to change wager`;
    }
    else if (isRoundOver == false) {
        document.getElementById("max-or-min-wager").innerHTML = `Wait until round is over to change wager`;
    }
    else if (wagerAmount == 100) {
        document.getElementById("max-or-min-wager").innerHTML = `Max wager is 100 credits`;
    }
    else {
        wagerAmount = wagerAmount + 10;
        document.getElementById("amount-wager").innerHTML = `Wager: ` + wagerAmount;
        document.getElementById("max-or-min-wager").innerHTML = ``;
    }
}
async function downTheWager() {
    if (isAutoSpinOn) {
        document.getElementById("max-or-min-wager").innerHTML = `Turn off Auto Spin to change wager`;
    }
    else if (isRoundOver == false) {
        document.getElementById("max-or-min-wager").innerHTML = `Wait until round is over to change wager`;
    }
    else if (wagerAmount == 10) {
        document.getElementById("max-or-min-wager").innerHTML = `Min wager is 10 credits`;
    }
    else {
        wagerAmount = wagerAmount - 10;
        document.getElementById("amount-wager").innerHTML = `Wager: ` + wagerAmount;
        document.getElementById("max-or-min-wager").innerHTML = ``;
    }
}





// PAY TABLE POP UP
var popUpBox = document.getElementById("pop-up-box");
async function displayPayTable() {
    popUpBox.style.display = "block";
}
 
async function closePopUp() {
    popUpBox.style.display = "none";
}
 
window.onclick = function(event) {
    if (event.target == popUpBox) {
        popUpBox.style.display = "none";
    }
        else {}
}





var currentWindowSize;
var newScaleNumber;
function displayWindowSize(){
    currentWindowSize = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    newScaleNumber = currentWindowSize/(currentWindowSize + 200);
    document.getElementById("slot-container-wrapper").style.transform = "translateX(-50%) scale(" + (newScaleNumber) + ")";
    document.getElementById("pop-up-box-content").style.transform = "scale(" + (newScaleNumber + 0.07) + ")";
    
    //document.getElementById("audio-toggle").style.transform = "scale(" + (newScaleNumber) + ")";
    //document.getElementById("slot-machine").style.padding = (10/1100 * currentWindowSize + 2) + "px";
}
displayWindowSize();

window.addEventListener("resize", displayWindowSize);