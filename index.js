// Declare global variables
const boxContainer = document.querySelector("#container");
const changeGridSizeBtn = document.querySelector("#changeGridSize");
var userInputColumn = 15;
var userInputRow = 15;


// Update canvas size based on user input
function submitGridSize () {

    // Asks user for the number of column
    userInputColumn = Number(document.querySelector("#columnInput").value);

    // Asks user for the number of rows
     userInputRow = Number(document.querySelector("#rowInput").value);

    // Alert user regarding the maximum and minimum amount (100 and 0);
    const alertUser = document.querySelector('#alertUser');

    if (userInputColumn > 100 || userInputColumn <= 0 || userInputRow > 100 || userInputRow <= 0) 
        {alertUser.textContent = "Please input a number between 0 and 100";
        userInputColumn = 15;
        userInputRow = 15;
        return;
    };
}


// Create a row with n boxes inside    
function createRow () {
     
    // Create a single div
    const newRow = document.createElement('div');
    newRow.classList.add('rowItem');

    // Create multiple div boxes inside the row
    for (let i = 0; i < userInputColumn; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('boxItem');
        newRow.appendChild(newBox);

        // Change the color of the box when the mouse hovers over it
        newBox.addEventListener('mouseover', function () {
            newBox.style.backgroundColor = "black";
        });

        // Allows the user to reset the color
        const clearBtn = document.querySelector('#clearGridButton');

        clearBtn.addEventListener('click', function () {
            newBox.style.backgroundColor = 'white';
        });

    } return newRow;
}

// Multiply the row based on the number of columns from the user   
function createGrid () {
    
    // Clear existing grid
    function clearGridForNewSize() {
        boxContainer.replaceChildren();
        }clearGridForNewSize();

    // Fetch user input    
    submitGridSize();

    // Multiply the row 
    for (let i = 0 ; i < userInputRow ; i ++) {
        const row = createRow();
        boxContainer.appendChild(row);
    }
} 

// Execute user input
changeGridSizeBtn.addEventListener('click',createGrid);

// Execute initial grid when the page loads
createGrid();