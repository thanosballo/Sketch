const container=document.querySelector(".container");
const clear=document.querySelector(".clear-btn");
let i=0;
let gridOption=0;
let gridCol=0;
function gridConstructor(gridCol){
for (i=0;i<gridCol*gridCol;i++){
    const div=document.createElement('div');
    div.classList.add("box");
    container.appendChild(div);
};
};
gridConstructor(16);

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

const buttons=Array.from(document.querySelectorAll(".grid-btn"));
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        console.log(button.dataset.grid);
        gridOption=button.dataset.grid;
        switch (gridOption){
            case "16":
                container.setAttribute(`style`,`grid-template-columns: repeat(16, 1fr)`);
                container.setAttribute(`style`,`grid-template-rows: repeat(16, 1fr)`);
                gridConstructor(16);
                break;
            case "32":
                container.setAttribute(`style`,`grid-template-columns: repeat(32, 1fr)`);
                container.setAttribute(`style`,`grid-template-rows: repeat(32, 1fr)`);
                gridConstructor(32);
                break;
            case "64":
                container.setAttribute(`style`,`grid-template-columns: repeat(64, 1fr)`);
                container.setAttribute(`style`,`grid-template-rows: repeat(64, 1fr)`);
                gridConstructor(64);
                break;
        };
    })
})