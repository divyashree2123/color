// Function to generate a random color in hex format
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate and display a palette
function generatePalette() {
    const paletteDiv = document.getElementById('palette');
    paletteDiv.innerHTML = '';  // Clear any previous colors

    // Generate 5 random colors
    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();

        // Create a new div for each color
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.innerHTML = `<span>${color}</span>`;

        // Copy color to clipboard when clicked
        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            alert(`Color ${color} copied to clipboard!`);
        });

        // Append color box to the palette container
        paletteDiv.appendChild(colorBox);
    }
}

// Add event listener to the "Generate Palette" button
document.getElementById('generate-btn').addEventListener('click', generatePalette);

// Generate an initial palette when the page loads
window.onload = generatePalette;
