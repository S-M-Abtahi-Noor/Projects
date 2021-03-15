function clock(){
    var hours = document.querySelector(".hours");
    var minutes = document.querySelector(".minutes");
    var seconds = document.querySelector(".seconds");
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    if (h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
    }

    h = (h<10)? "0"+ h: h;
    m = (m<10)? "0"+ m: m;
    s = (s<10)? "0"+ s: s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
    setTimeout(clock,1000);
}

clock();