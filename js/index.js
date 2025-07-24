console.log("foo");

const toggle = document.querySelector("input");
const lightDark = document.querySelector("body");
const onOff = document.querySelectorAll("header>h1>img");


console.log(onOff);


toggle.addEventListener("change" , function(){

    if (lightDark.classList.contains("light")) {
        lightDark.classList.add("dark");
        lightDark.classList.remove("light");
        // onOff.innerHTML = `"images/OnsenLogo_02.png"`

    }else{
        lightDark.classList.add("light");
        lightDark.classList.remove("dark");
        // onOff.innerHTML = `"images/logo_onsen.png"`
    }

});    

