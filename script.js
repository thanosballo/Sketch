const container=document.querySelector(".container");
let i=0;
for (i=0;i<16;i++){
    const div=document.createElement('div');
    div.classList.add("border");
    container.appendChild(div);
};