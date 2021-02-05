'use strict';
    let mijnButton = document.getElementById('mijnButton');
    let optellen = document.getElementById('optellen');
    let delen= document.getElementById('delen')
    let aftrekken= document.getElementById('aftrekken')
    let vermenigvuldigen = document.getElementById('vermenigvuldigen');
    mijnButton.addEventListener('click', function(){
       
        let getal1 = document.getElementById('getal1').value;        
        let getal2 = document.getElementById('getal2').value;      
        
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        
        telOp(getal1,getal2);
        vermenigvuldig(getal1,getal2);
        delenn(getal1,getal2);
        aftrekkenn(getal1,getal2);
    })




    function telOp(getal1, getal2){
        let antwoord = getal1 + getal2;
        console.log("optellen " + antwoord); 
        optellen.innerHTML = antwoord; 
    }
    function vermenigvuldig(getal1, getal2){
        let antwoord = getal1 * getal2;//
        console.log("vermenigvuldigen " + antwoord); 
        vermenigvuldigen.innerHTML = antwoord; 
    }







    function aftrekkenn(getal1, getal2){
        let antwoord = getal1 - getal2;
        console.log("aftrekken " + antwoord); 
        aftrekken.innerHTML = antwoord; 
    }
    function delenn(getal1, getal2){
        if (getal1==0){
            console.log("er is een error je mag geen 0 aangeven")
            delen.innerHTML = "ERROR: je krijg infinite ";
        }
        else if (getal2==0){
            console.log("er is een error je mag geen 0 aangeven")
            delen.innerHTML = "ERROR: je krijg infinite. voer geen 0 in";
        }
        else{
            let antwoord = getal1 / getal2;
            console.log("delen " + antwoord); 
            delen.innerHTML = antwoord; 
        }
    }