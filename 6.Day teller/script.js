function userInput(){
    var user1 = document.querySelector(".dd").value;
    var user2 = document.querySelector(".mm").value;
    var user3 = document.querySelector(".yy").value;
    var resultUser = user1 +" " + user2+" " + user3 +" ";
    document.querySelector(".resultText").innerHTML=dayTell;

    var dayTell  = new Date(resultUser);
    var dayTell2 = dayTell.getDay();
    
   
    if(dayTell2==1){
        document.querySelector(".resultText").innerHTML=resultUser + " : Monday";
    }
    else if(dayTell2==2){
        document.querySelector(".resultText").innerHTML=resultUser + " : Tuesday";
    }
    else if(dayTell2==3){
        document.querySelector(".resultText").innerHTML=resultUser + " : Wednesday";
    }
    else if(dayTell2==4){
        document.querySelector(".resultText").innerHTML=resultUser + " : Thursday";
    }
    else if(dayTell2==5){
        document.querySelector(".resultText").innerHTML=resultUser + " : Friday";
    }
    else if(dayTell2==6){
        document.querySelector(".resultText").innerHTML=resultUser + " : Saturday";
    }
    else if(dayTell2==0){
        document.querySelector(".resultText").innerHTML=resultUser + " : Sunday";
    }
   else{
       document.querySelector(".resultText").innerHTML="Select the date!";
    
    }
    




}



document.querySelector(".threeLineMenu").addEventListener("click",function(){
    document.querySelector(".threeLineMenu").src="close.png";
    document.querySelector(".rulesTxt").style.display="block";

})

document.querySelector(".threeLineMenu").addEventListener("dblclick",function(){
    document.querySelector(".threeLineMenu").src="threesquareslines.png";
    document.querySelector(".rulesTxt").style.display="none";

})


