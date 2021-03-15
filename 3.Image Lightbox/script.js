let images = document.querySelectorAll(".image");
let popUp = document.querySelector(".popupImage");
let popUpImage = document.querySelector(".popimg");
let closeBtn = document.querySelector(".closeText");
let darkOnBack = document.querySelector(".darkOnBack");

images.forEach((image) =>{
    image.addEventListener("click",(event)=>{
        popUp.classList.add("activePopUp");
        darkOnBack.classList.add("active");

        popUpImage.setAttribute("src",event.target.src);
        
    })
})

closeBtn.addEventListener("click",(event)=>{
    popUp.classList.remove("activePopUp");
    darkOnBack.classList.remove("active");
})