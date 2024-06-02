let images = document.getElementsByClassName("slider-img");
let cont = 0;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let divSlider = document.querySelector(".ratings");
let opDiv = document.getElementsByClassName("sponsor-op");
const divWidth = 98;
const imagesArr = ["Img/website.png", "Img/work-1.png", "Img/work-3.png"];
let imgSl = document.querySelector(".slider-img");
const header = document.querySelector("header");
function slider(){
    if (cont > 2){
        cont = 0;
    }
    imgSl.setAttribute("src", imagesArr[cont]);
    cont++
    setTimeout(slider, 4000);
}

function headerActive(){
    if (window.innerWidth < 768){
        header.classList.add("active");
        header.style.margin = "0";
    }
    else{
        header.classList.remove("active");
        header.style.margin = "1rem 0";
    }
}

headerActive();
slider();

let contLeft = 0;
let contRight = 0; 
function sliderRight(){
    let totalR = `translateX(${-contRight *divWidth}rem)`
    leftArrow.style.opacity = "1";
    contRight++;
    if(contRight >= 4){
        contRight = 0;
    }

    if(contLeft < 3){
        leftArrow.style.cursor = "pointer";
    }
    if(totalR === `translateX(-196rem)`){
        rightArrow.style.opacity = "0.6";
    }
    else{
        rightArrow.style.opacity = "1";
    }
    
    divSlider.style.transform = `translateX(${-contRight *divWidth}rem)`;


}


function sliderLeft(){
    contRight--;
    let total = `translateX(${-contRight *divWidth}rem)`;
    
    if(contRight < 4 || contRight === 0){
        rightArrow.style.opacity = "1";
        rightArrow.style.cursor = "pointer";
        
    }

    if ( total === 'translateX(98rem)'){
        contRight = 3;
        rightArrow.style.opacity = "0.6";
    }
    if(total === `translateX(0rem)`){
        leftArrow.style.opacity = "0.6";
        leftArrow.style.cursor = "default";
    }
    else{
        leftArrow.style.opacity = "1";
        leftArrow.style.cursor = "pointer";
    }
    

    divSlider.style.transform = `translateX(${(-contRight * divWidth)}rem)`;
    contLeft++;

}
leftArrow.addEventListener("click", sliderLeft);
rightArrow.addEventListener("click", sliderRight);


