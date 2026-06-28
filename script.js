const go = document.getElementById("letsgo");
const main = document.getElementById("main");
const text = document.getElementById("h1");
const doll = document.getElementById("doll");
const head = document.getElementById("head");
const body = document.getElementById("body");
const neck = document.getElementById("neck");
const skincolor = document.getElementById("color");
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