const mainContainer = document.querySelector("#container"); 

//Create a 16x16 grid of divs
function generateGrid(sideQuantity) {
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sideQuantity}, 1fr)`);
    if(sideQuantity > 100) {

    }
    else {    
        for(let i = 0; i < sideQuantity*sideQuantity; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('grid-cell');
            mainContainer.appendChild(newCell);
        }    
    }

    //Changes the color of the tile on hover
    const gridCell = document.querySelectorAll(".grid-cell");
    gridCell.forEach((cell) => {
        //Toggles color-change class to grid-cell which adds the color
        cell.addEventListener('mouseenter', () => {
            cell.classList.toggle('color-change');
        });
        /*
        //Toggles color-change class to grid-cell which removes the color
        cell.addEventListener('mouseout', () => {
            cell.classList.toggle('color-change');
        });
        */
    });
}

generateGrid(16);

/* This function deletes the old grid by removing all children of the 
 * mainContainer. 
*/
function clearGrid() {
    while(mainContainer.firstElementChild) {
        mainContainer.firstElementChild.remove();
    }
}


/* Prompts user for input when button is pressed and calls generateGrid
 * with the inputted Number.
*/
function promptGrid() {
    while(true) {
        let newGridLength = prompt("Please enter the width of the new grid: ", 16);

        if(newGridLength != null && !isNaN(newGridLength)) {
            clearGrid();
            generateGrid(newGridLength);
            break;
        }
    }
}