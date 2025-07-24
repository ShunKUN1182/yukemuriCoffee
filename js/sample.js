const toggle = document.getElementsByClassName("toggle");
const btn = document.querySelector(".btn");


const onOff = document.querySelector("h1");



btn.addEventListener("click",()=>{

    // console.log(toggle.checked, );
    console.log("ボタンを押すw")

    if (onOff.classList.contains("off")) {
        onOff.classList.add("on");
        onOff.classList.remove("off");
    }

    document.body.style.background = "black";
    document.body.style.color = "white";

    console.log(onOff);
})