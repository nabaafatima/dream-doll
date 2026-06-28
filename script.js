const go = document.getElementById("letsgo");
const main = document.getElementById("main");
const text = document.getElementById("h1");
const doll = document.getElementById("doll");
const head = document.getElementById("head");
const accessories = document.getElementById("accessories");
const skincolor = document.getElementById("color");
let a = false;
let b = false;
let c = false;
go.addEventListener("click", ()=>{
    main.style.opacity =  "1";
    go.style.opacity = "0";
    text.style.opacity = "0";
    go.style.pointerEvents = "none";
    text.styyle.pointerEvents = "none";
})
color.addEventListener('input', (e)=>{
    head.style.backgroundColor = e.target.value;
})