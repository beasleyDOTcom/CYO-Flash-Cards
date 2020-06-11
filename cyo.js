function createCard(){  
    let promptKey=document.getElementById("promptKey").value;
    let answerValue=document.getElementById("answerValue").value;
       localStorage.setItem(promptKey,answerValue);
       location.reload();
    };
    function eraseMe(){
        localStorage.clear();
    };
        var gameKey=0;
 function startGame(){
        let gameKey=Math.floor(Math.random()*localStorage.length);
        document.getElementById("prompt").innerHTML=localStorage.key(gameKey);
    };  
     function submitAnswer(){
        let userAnswer=document.getElementById("userAnswer").value;
        let keyName=localStorage.key(gameKey);
       console.log(keyName);
        if(userAnswer==keyName){
            document.getElementById("result").innerHTML= "YOU DID IT!!!";
        }
        else {
            document.getElementById("result").innerHTML = "You did... something?"
        };
       location.reload();
    };

