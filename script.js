

document.getElementById("liftForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const floorNumber = parseInt(document.querySelector("#floors").value);
    const liftNumber = parseInt(document.getElementById("lifts").value);

    buildingCreate(floorNumber, liftNumber);

    document.querySelectorAll(".lift-up").addEventListener("click", () => {
        console.log("clickd")
    })
});

function buildingCreate(floorNumber, liftNumber) {
    const building = document.querySelector("#building");
    building.innerHTML = ''; 
    for (let i = 0; i < floorNumber; i++) {
        const floor = document.createElement("div");
        floor.classList.add("floor");
        floor.setAttribute("id", `floor-${floorNumber - i - 1}`);

        const liftUp = document.createElement("button");
        liftUp.classList.add("lift-up"); 
        liftUp.style.cssText = `
            width: 5vw; 
            height: 2vw; 
            font-size: 15px;
        `;
        liftUp.innerText = "Lift Up";

        const liftDown = document.createElement("button");
        liftDown.style.cssText = `
            width: 5.5vw; 
            height: 2vw; 
            font-size: 15px;
        `;
        liftDown.innerText = "Lift Down";
        floor.appendChild(liftUp);

        
        if (i === floorNumber - 1) {
            for (let j = 0; j < liftNumber; j++) {
                const lift = document.createElement("div");
                lift.classList.add("lift");
                lift.setAttribute("id", `lift-${floorNumber - i - 1}` )
                lift.style.cssText = `
                    width: 2.5vw;
                    height: 5vw;
                    background-color: blue;
                    border-radius: 7px;
                    bottom: 0;
                `;

                
                
            floor.appendChild(lift);
                

            }
        }

        floor.appendChild(liftDown);

        building.appendChild(floor);

        
        
    }

    
    
}


