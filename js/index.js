console.log("foo");

const toggle = document.querySelector("input");
const onOff = document.getElementsByClassName("onOff");


if (onOff.classList.contains("off")) {
    onOff.classList.add("on");
    onOff.classList.remove("off");
}

if (ofOff.classList.contains("on")) {
    onOff.classList.add("off");
    onOff.classList.remove("on");
}

