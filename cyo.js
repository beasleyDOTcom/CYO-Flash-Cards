//I start a trend of cueing up some event listeners that trigger their respective functions.
//createCard takes user input and stores it in local storage. 
var monster = document.getElementById("createButton");
if(monster){monster.addEventListener("click", createCard);}
function createCard(){  
    let promptKey=document.getElementById("promptKey").value;
    let answerValue=document.getElementById("answerValue").value;
        localStorage.setItem(promptKey,answerValue);
        location.reload();
    };
var conk = document.getElementById("eraseMe");
if(conk){
    conk.addEventListener("click", eraseMe);}
function eraseMe(){
    localStorage.clear();
    alert("Your Deck has been ELIMINATED");
};
var gameKey=0;
var bonk = document.getElementById("startButton");
if(bonk)
    {bonk.addEventListener("click", startGame);}
//This shows instructions to start game that get overwritten after the game starts.    
    document.getElementById("result").innerHTML = 'Press "New Card" to begin.';
// generates a random number that selects and presents a key(front size of flash card) and presents it to user.
function startGame(){
    gameKey=Math.floor(Math.random()*localStorage.length);
    document.getElementById("result").innerHTML=localStorage.key(gameKey);
    var crank = document.getElementById("resultButton");
    if(crank){crank.addEventListener("click", submitAnswer);}
//This uses the random number to get the key() then uses the key to get() the backside of flashcard then compares it to user input.    
        function submitAnswer(){
            let userAnswer=document.getElementById("userAnswer").value;
            let keyName=localStorage.key(gameKey);
            let valuePair = localStorage.getItem(keyName);
            if(userAnswer==valuePair){
                document.getElementById("result").innerHTML= `YOU DID IT!!!\n`+`\nKeep up the good work!`;
            }
            else {
                document.getElementById("result").innerHTML = `Sorry, you didn't get this one right.\n`+`The correct answer was: "${valuePair}".`;
            }
        }
  }