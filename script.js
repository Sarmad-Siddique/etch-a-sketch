let mouseDown = false;
const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");

    rowContainer.classList.add("row");

    sketchContainer.appendChild(rowContainer);


    for (let j = 0; j < 16; j++) {
        const pixelDiv = document.createElement("div");
        pixelDiv.classList.add("pixel");
        
        rowContainer.appendChild(pixelDiv);

        pixelDiv.addEventListener("mouseenter", function (event) {
            if (!mouseDown) {
                return;
            }
            targetDiv = event.target;
        
            targetDiv.style.backgroundColor = "green";
        });

        pixelDiv.addEventListener("mousedown", ()=> {
            mouseDown= true;

            targetDiv = event.target;
        
            targetDiv.style.backgroundColor = "green";
        });

        pixelDiv.addEventListener("mouseup", ()=> {
            mouseDown= false;
        });
    }

    
}

sketchContainer.addEventListener("mouseleave", ()=>{
    mouseDown = false;
});
