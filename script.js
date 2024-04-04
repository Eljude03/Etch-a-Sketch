const container = document.getElementById('etch-a-sketch');
const clearButton = document.getElementById('clear-btn');
const gridSizeInput = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');

// Create grid cells
function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = colorPicker.value;
        });
        container.appendChild(cell);
    }
}

// Initialize grid
createGrid(gridSizeInput.value);

// Clear button event listener
clearButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('#etch-a-sketch div');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});

// Grid size input event listener
gridSizeInput.addEventListener('change', () => {
    createGrid(gridSizeInput.value);
});
