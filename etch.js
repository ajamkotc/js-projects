const mainContainer = document.querySelector("#container"); 

//Create a 16x16 grid of divs
function generateGrid() {
    for(let u = 0; u < 16; u++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row-container');

        for(let i = 0; i < 16; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('grid-cell');
            newRow.appendChild(newCell);
        }
        mainContainer.appendChild(newRow);
    }
}

generateGrid();

//Changes the color of the tile on hover
const gridCell = document.querySelector(".grid-cell");
gridCell.addEventListener('mouseover', () => {
    alert("Hello, World!");
});