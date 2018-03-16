
    var guessArr = [];
    var wordBankArr = ["truck", "car", "jeep","suv", "mini", "van", "tanker", "hummer"];
    
    var counter = 0;
    
    var match = 0;
    var letter = " ";
    var pick = " ";



    function Setup() {
    
      pick = wordBankArr[Math.floor(Math.random() * wordBankArr.length)];
      console.log(pick);
      for (var i = 0; i < pick.length; i++) {

        guessArr[i] = "_ ";

      }
    
      spaces = guessArr.join(" ");
      var answer = document.getElementById("answer");

      answer.textContent = spaces;
    }
     
    
    function Letter() {

    
      
      for (var i = 0; i < pick.length; i++){

        if (pick[i] === letter){
          guessArr[i] = letter;
          counter --;  
        }
    
      }
    counter ++;
    spaces = guessArr.join(" ");
    answer.textContent = spaces;
    var counterDiv = document.getElementById("counter"); 
    counterDiv.textContent = ("Guesses left: " + (6-counter));
    var hangman = document.getElementById("hangman");
    hangman.innerHTML = ("<img id='hangman' src='assets/images/hangman-" + counter + ".png'/>");
    
    }
    
    
    

document.onkeyup = function(event) {

      // Converts all key clicks to lowercase letters.
      letter= String.fromCharCode(event.which).toLowerCase();
      console.log(letter);
      Letter();
    };


