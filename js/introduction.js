// console.log("foo");
const lightDark = document.querySelector("body");
const toggle = document.querySelector("input");


// if (hours >= 18 || hours < 4) {
//     localStorage.setItem("mode" , "dark");
//     check.checked = true;
// }else{
//     console.log("noon");
//     localStorage.setItem("mode" , "light");
// }

// lightDark.classList.add(localStorage.getItem("mode"));

toggle.addEventListener("change" , function(){

    if (lightDark.classList.contains("light")) {
        localStorage.setItem("mode" , "dark");
        lightDark.classList.add("dark");
        lightDark.classList.remove("light");

    }else{
        localStorage.setItem("mode" , "light");
        lightDark.classList.add("light");
        lightDark.classList.remove("dark");
    }


});    
