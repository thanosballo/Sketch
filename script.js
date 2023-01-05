const container=document.querySelector(".container");
const clear=document.querySelector(".clear-btn");
let i=0;
let gridOption=0;
function gridConstructor(gridCol){
for (i=0;i<gridCol*gridCol;i++){
    const div=document.createElement('div');
    div.classList.add("box");
    container.appendChild(div);
};
};
gridConstructor(16);

function boxRemoval(){
boxes=Array.from(document.querySelectorAll(".box"));
boxes.forEach(div => {
        div.remove();
        console.log("remove boxes");
})
}
let boxes=Array.from(document.querySelectorAll(".box"));
function buttonListener(){
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
};
buttonListener();

const buttons=Array.from(document.querySelectorAll(".grid-btn"));
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        console.log(button.dataset.grid);
        gridOption=button.dataset.grid;
        boxRemoval();
        container.classList.remove("container16","container32","container64");
        switch (gridOption){
            case "16":
                gridConstructor(16);
                container.classList.add("container16");
                boxes=Array.from(document.querySelectorAll(".box"));
                buttonListener();
                break;
            case "32":
                container.classList.add("container32");
                gridConstructor(32);
                boxes=Array.from(document.querySelectorAll(".box"));
                buttonListener();
                break;
            case "64":
                container.classList.add("container64");
                gridConstructor(64);
                boxes=Array.from(document.querySelectorAll(".box"));
                buttonListener();
                break;
        };
    })
})