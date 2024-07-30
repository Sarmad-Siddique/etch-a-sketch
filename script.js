let mouseDown = false;
let pixelColor = "green";
let dimensions = 32;
const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < dimensions; i++) {
    const rowContainer = document.createElement("div");

    rowContainer.classList.add("row");

    sketchContainer.appendChild(rowContainer);


    for (let j = 0; j < dimensions; j++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        
        rowContainer.appendChild(pixelDiv);

        pixelDiv.addEventListener("mousedown", (event)=> {
            mouseDown= true;

            targetDiv = event.target;
        
            targetDiv.style.backgroundColor = pixelColor;
        });

        pixelDiv.addEventListener("mouseenter", (event) => {
            if (!mouseDown) {
                return;
            }
            targetDiv = event.target;
        
            targetDiv.style.backgroundColor = pixelColor;
        });

        pixelDiv.addEventListener("mouseup", ()=> {
            mouseDown= false;
        });
    }
    
}

sketchContainer.addEventListener("mouseleave", ()=>{
    mouseDown = false;
});

const colorDiv = document.querySelectorAll(".color");

colorDiv.forEach( div => {
    div.addEventListener("click", (event) => {
        let curTarget = event.currentTarget;
        pixelColor = curTarget.style.backgroundColor
    });
});

