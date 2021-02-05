
// activeer de Device Orientation API
window.addEventListener('deviceorientation', handleOrientation);

// event handler
function handleOrientation(eventData){
    let alpha, beta, gamma;
    // alpha rotation compass rotation Z-axis
    alpha = Math.round(eventData.alpha);
    // beta rotation front back rotation X-axis
    beta = Math.round(eventData.beta);
    // gamma rotation left right rotation Y-axis
    gamma = Math.round(eventData.gamma);
    
    // doe iets met de data
    doSomething(alpha, beta, gamma);     
}   


function doSomething(alpha, beta, gamma){
    showDataColor(alpha, beta, gamma); // kleurtjes en tekst
    activateVoice(alpha, beta, gamma); // geluid
    showMyImage(alpha, beta, gamma);   // afbeelding  
}

function showDataColor(alpha, beta, gamma){
    //show the data in HTML
    document.getElementById('beta').innerHTML = beta;
    document.getElementById('gamma').innerHTML = gamma;
    document.getElementById('alpha').innerHTML = alpha;

    // change background color
     // gamma rotation left right rotation Y-axis
    document.body.style.background = `rgb(150, ${Math.abs(gamma)*5}, 150)`;
}

function activateVoice(alpha, beta, gamma){
    // voice if Z-axis rotation > value
    if(alpha >70){
        let myTxt ="Rotate me why. Not do."; 
  
        sayItLoud(myTxt); // text 2 speech
        

        // laat het ook in de HTML zien
        document.getElementById('voice').innerHTML = myTxt;
        }
    else if (alpha > 40 && alpha < 60){
        let myTxt2 ="sterf!"; 
        let tekst="faen";
        sayItLoud(myTxt2); // text 2 speech
        
        // laat het ook in de HTML zien
        document.getElementById('voice').innerHTML = tekst;
        
    }
    else{
        // haal de tekst weg
        document.getElementById('voice').innerHTML = "";
        }
}

function showMyImage(alpha, beta, gamma){
    // image if X-axis > value
    if(beta > 10){
        document.getElementById('myImage').src = "logo.jpg"; // show image
       
        }
    else if(beta < -10){
         document.getElementById('myImage').src = "forest.jpg"; // show image of forest
    }
    
        else {
            document.getElementById('myImage').src = ""; // no image
        }
}