const go = document.getElementById("letsgo");
const main = document.getElementById("main");
const text = document.getElementById("h1");
go.addEventListener("click", ()=>{
    main.style.opacity =  "1";
    go.style.opacity = "0";
    text.style.opacity = "0";
    go.style.pointerEvents = "none";
    text.styyle.pointerEvents = "none";
})