const container=document.querySelector(".container");
let i=0;
let gridselection=16*16;
for (i=0;i<gridselection;i++){
    const div=document.createElement('div');
    div.classList.add("border","box");
    container.appendChild(div);
};

const box=Array.from(document.querySelectorAll(".box"));