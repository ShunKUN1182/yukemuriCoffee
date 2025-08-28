console.log("foo");

const toggle = document.querySelector("input");
const lightDark = document.querySelector("body");
const onOff = document.querySelectorAll("header>h1>img");
const kemuri = document.querySelector(".kemuri");
const sliderImg = document.querySelectorAll(".mainVisual>ul>li");
const maxCount = sliderImg.length - 1;
const delay = 5000;
let imagesCount = 0;
const check = document.querySelector("input");

// const observer = document.querySelector(".observer");

console.log(sliderImg , maxCount);


sliderImg[0].style.opacity = 1;

const time = new Date();
const hours = time.getHours();
// const hours = 4;
console.log(hours);


if (hours >= 18 || hours < 4) {
    console.log("night");
    lightDark.classList.add("dark");
    check.checked = true;
}else{
    console.log("noon");
    lightDark.classList.add("light");
}



toggle.addEventListener("change" , function(){

    if (lightDark.classList.contains("light")) {
        lightDark.classList.add("dark");
        lightDark.classList.remove("light");

    }else{
        lightDark.classList.add("light");
        lightDark.classList.remove("dark");
    }

});    



setInterval( () => {

    console.log(imagesCount);
    

    for(i = 0; i <= maxCount; i++){
        sliderImg[i].style.opacity = 0;
    }

    if(imagesCount < maxCount){
        imagesCount++;
    }else{
        imagesCount = 0;
    }

    sliderImg[imagesCount].style.opacity = 1;

},delay);






// console.log(anm[i].getBoundingClientRect().top);

// window.addEventListener("scroll", function(){
//     for(let i = 0; i = anm.length; i++){        
        // const getElemant = anm.getBoundingClienRect().top;

        // if (window.innerHeight > getElemant) {
        //     anm[i].classList.add("animation");
        // }

//     }
// })    
    



