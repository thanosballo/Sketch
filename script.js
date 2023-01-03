const container=document.querySelector(".container");
const clear=document.querySelector(".clear-btn");
let i=0;
let gridselection=16*16;
for (i=0;i<gridselection;i++){
    const div=document.createElement('div');
    div.classList.add("box");
    container.appendChild(div);
};

const boxes=Array.from(document.querySelectorAll(".box"));
boxes.forEach(div => {
    div.addEventListener("mouseover",()=>{
        
        div.classList.add("grey");
    });
});
clear.addEventListener("click",()=>{
    boxes.forEach(div=>{
        div.classList.remove("grey");
    });
});