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
    };
        var gameKey=0;
  var bonk = document.getElementById("startButton");
if(bonk){bonk.addEventListener("click", startGame);}
    function startGame(){
         gameKey=Math.floor(Math.random()*localStorage.length);
        document.getElementById("prompt").innerHTML=localStorage.key(gameKey);
      var crank = document.getElementById("resultButton");
      if(crank){crank.addEventListener("click", submitAnswer);}
     function submitAnswer(){
        let userAnswer=document.getElementById("userAnswer").value;
        let keyName=localStorage.key(gameKey);
        let valuePair = localStorage.get(keyName);
       console.log(keyName);
       console.log(userAnswer);
        if(userAnswer==valuePair){
            document.getElementById("result").innerHTML= "YOU DID IT!!!";
          }
        else {
            document.getElementById("result").innerHTML = "You did... something?";
             }
          }
       }
console.log("Poopy")
var monster = document.getElementById("createButton");
if(monster){monster.addEventListener("click", createCard);}
