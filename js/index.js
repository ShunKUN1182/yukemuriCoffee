console.log("foo");

const toggle = document.querySelector("input");
const lightDark = document.querySelector("body");
const onOff = document.querySelectorAll("header>h1>img");
const targetA = document.querySelector(".onsenContent");
const targetB = document.querySelector(".coffeeContent");
const targetC = document.querySelector("news");
const targetD = document.querySelector("map");



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

// addEventListener("scroll", function(){

//     for(let i = 0; i = 4; i++){
        
//         const getElemantA = targetA.getBoundingClienRect().top;
//         const getElemantB = targetB.getBoundingClienRect().top;
//         const getElemantC = targetC.getBoundingClienRect().top;
//         const getElemantD = targetD.getBoundingClienRect().top;

//         }
//     })
    

//     if ( >= 500) {
//         targetA.classList.add("anm d1");
//     }else if (getElemant >= 950) {
//         targetB.classList.add("anm d1");
//     }

// })


