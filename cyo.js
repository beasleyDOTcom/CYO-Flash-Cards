//this function takes two inputs and forms a key(prompt) and value(answer) from their relative inputs. 

//this function should also send that key/value to local storage.
function createCard(){  
    let promptKey=document.getElementById("promptKey").value;
    let answerValue=document.getElementById("answerValue").value;
       localStorage.setItem(promptKey,answerValue);
       location.reload();
    };
    function eraseMe(){
        localStorage.clear();
    };
 function startGame(){
        let gameKey=Math.floor(Math.random()*localStorage.length);
        document.getElementById("prompt").innerHTML=localStorage.key(gameKey);
       function submitAnswer(){
        let userAnswer=document.getElementById("userAnswer").value;
        let keyName=localStorage.key(gameKey);
        if(userAnswer==keyName){
            document.getElementById("result").innerHTML= "YOU DID IT!!!";
        }
        else {
            document.getElementById("result").innerHTML = "You did... something?"
        };
     }
    };
