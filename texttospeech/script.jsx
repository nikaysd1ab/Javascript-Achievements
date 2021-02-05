  
    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["nikay", "Timo", "kiek"];
    const werkwoord = ["heft", "kijkt", "drinkt"];
    const restwoord = ["gewicht", "rugby", "coffee"];
        
    let plaatjes = ["https://cdn.hammer.de/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/6/7/6723-hammer-20-kg-kurzhantel-set-01_1_.jpg", "http://www.sarugbytravel.com/wp-content/uploads/2019/08/190826-RWC-squad-announcement.jpg", "https://i.ytimg.com/vi/w39qW3u-Oz4/maxresdefault.jpg", "https://www.jasperalblas.nl/app/uploads/2014/07/Koffie2_2000x1000-jasperalblas.jpg"]
    let arrayLength = onderwerp.length; 