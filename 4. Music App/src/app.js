
for(let i = 0; i < 5;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",()=>{
        let getText = document.querySelectorAll(".btn")[i].innerHTML;
        audioPlay(getText);
        animatioon(getText);
    });
}

    function audioPlay(getText){
        if(getText == "A"){
            let audio = new Audio("../musics/adventure.mp3");
            audio.play();
        }else if(getText == "B"){
            let audio = new Audio("../musics/dubstep.mp3");
            audio.play();
        }else if(getText == "C"){
            let audio = new Audio("../musics/funnysong.mp3");
            audio.play();
        }else if(getText == "D"){
            let audio = new Audio("../musics/memories.mp3");
            audio.play();
        }else if(getText == "E"){
            let audio = new Audio("../musics/tomorrow.mp3");
            audio.play();
        }else{
            alert("Click Correctly");
        }
    }

    function animatioon(getText){
        let selectedButton = document.querySelectorAll(".btn")[i];
        selectedButton.classList.add("anim");

        setTimeout(function(){
            selectedButton.classList.remove("anim");
        },1500)

    }

    document.addEventListener("keypress",(event)=>{
        let getText = event.key;
        animatioon(getText)
        audioPlay(getText);

    })
