console.log("foo");

const toggle = document.querySelector("input");
const onOff = document.querySelector("body");


console.log(onOff);


toggle.addEventListener("change" , function(){

    if (onOff.classList.contains("off")) {
        onOff.classList.add("on");
        onOff.classList.remove("off");
    }else{
        onOff.classList.add("off");
        onOff.classList.remove("on");
    }
    

});    

