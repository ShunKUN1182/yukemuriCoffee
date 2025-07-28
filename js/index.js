console.log("foo");

const toggle = document.querySelector("input");
const lightDark = document.querySelector("body");
const onOff = document.querySelectorAll("header>h1>img");
const kemuri = document.querySelector(".kemuri");
// const observer = document.querySelector(".observer");


// console.log(targetA);


toggle.addEventListener("change" , function(){

    if (lightDark.classList.contains("light")) {
        lightDark.classList.add("dark");
        lightDark.classList.remove("light");

    }else{
        lightDark.classList.add("light");
        lightDark.classList.remove("dark");
    }

});    






// console.log(anm[i].getBoundingClientRect().top);

// window.addEventListener("scroll", function(){
//     for(let i = 0; i = anm.length; i++){        
        // const getElemant = anm.getBoundingClienRect().top;

        // if (window.innerHeight > getElemant) {
        //     anm[i].classList.add("animation");
        // }

//     }
// })    
    



