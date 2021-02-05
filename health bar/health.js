document.getElementById("attack").addEventListener("click",(e)=>{
        console.log("hallo");
        let hb = document.getElementById("health");

        
        let damage = 10;
        let hp = hb.value;
        console.log(hp);
        hp -= damage;
        console.log(hp);
        hb.value = hp;

        if (hb.value == 0){
            document.write("You Win!")
        }
    
})