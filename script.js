const go = document.getElementById("letsgo");
const main = document.getElementById("main");
const arrow = document.getElementById("arrow")
const text = document.getElementById("h1");
const doll = document.getElementById("doll");
const head = document.getElementById("head");
const skincolor = document.getElementById("color");
const hairs = document.getElementById("hair");
const dresses = document.getElementById("clothes");
const d1 = document.getElementById("dress1");
const d2 = document.getElementById("dress2");
const d3 = document.getElementById("dress3");
const d4 = document.getElementById("dress4");
const d5 = document.getElementById("dress5");
const h1 = document.getElementById("hair1");
const h2 = document.getElementById("hair2");
const h3 = document.getElementById("hair3");
const h4 = document.getElementById("hair4");
const h5 = document.getElementById("hair5");
let a = false;
let h = false;
let c = false;
go.addEventListener("click", ()=>{
    main.style.opacity =  "1";
    go.style.opacity = "0";
    text.style.opacity = "0";
    go.style.pointerEvents = "none";
    text.style.pointerEvents = "none";
})
skincolor.addEventListener('input', (e)=>{
    head.style.backgroundColor = e.target.value;
})
dresses.addEventListener("click",()=>{
    c = true;
    h = false;
})
hairs.addEventListener("click", ()=>{
    c = false;
    h = true;
})
function s1(){
    h1.style.opacity="1";
    head.style.width = "90px";
    head.style.height = "120px";
    head.style.border.radius = "20px";
    head.style.top = "100px";
    head.style.left = "440px";
}
function s2(){
    h2.style.opacity = "1";
    h1.style.opacity = "0";
    h3.style.opacity = "0";
    h4.style.opacity = "0";
    h5.style.opacity = "0";
    head.style.width = "70px";
    head.style.height = "120px";
    head.style.top = "110px";
    head.style.left = "450px";
    d4.style.left = "340px";
    d4.style.top = "150px";
    d5.style.left = "320px";
    d5.style.top = "150px";
}
let currentIndex = 0;
let darray = [d1,d2,d3,d4,d5];
let harray = [h1,h2,h3,h4,h5];
arrow.addEventListener("click", ()=>{
    if(c===true) {
        darray[currentIndex].style.opacity = "0";
        currentIndex = (currentIndex + 1) % darray.length;
        darray[currentIndex].style.opacity = "1";
    };
});