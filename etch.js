const mainContainer = document.querySelector("#container"); 

//Create a 16x16 grid of divs
function generateGrid() {
    
    //This loop creates 16 rows
    for(let i = 0; i < 16; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row-container');

        //This loop populates each row with 16 divs
        for(let u = 0; u < 16; u++) {
            const newColumn = document.createElement('div');
            newColumn.classList.add('grid-item');
            //newColumn.textContent = 'this is a div';

            newRow.appendChild(newColumn);
        }
        mainContainer.appendChild(newRow);
    }
    
    /*
    for(let i = 0; i < quantity; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-div');
        newDiv.textContent = 'This is a div';
        mainContainer.appendChild(newDiv);
    }
    */
}

//Call generateGrid and create a grid of 16 x 16
generateGrid();