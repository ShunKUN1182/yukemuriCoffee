console.log("foo");

const toggle = document.querySelector("input");
const lightDark = document.querySelector("body");
const onOff = document.querySelectorAll("header>h1>img");
const targetA = document.querySelector(".onsenContent");
const targetB = document.querySelector(".coffeeContent");
const targetC = document.querySelector("news");
const targetD = document.querySelector("map");
const anm = document.querySelectorAll(".anm");



console.log(targetA);


toggle.addEventListener("change" , function(){

    if (lightDark.classList.contains("light")) {
        lightDark.classList.add("dark");
        lightDark.classList.remove("light");

    }else{
        lightDark.classList.add("light");
        lightDark.classList.remove("dark");
    }

});    

addEventListener("scroll", function(){

    for(let i = 0; i = anm.length; i++){
        
        const getElemant = anm.getBoundingClienRect().top;

        if (window.innerHeight > getElement) {
            anm[i].classList.add("animation");
        }

    }
})    
    



