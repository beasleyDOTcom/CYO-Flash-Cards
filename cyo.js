//this function takes two inputs and forms a key(prompt) and value(answer) from their relative inputs. 

//this function should also send that key/value to local storage.
function createCard(){  
    let promptKey=document.getElementById("promptKey").value;
    let answerValue=document.getElementById("answerValue").value;
       localStorage.setItem(promptKey,answerValue);
       location.reload();
    };
