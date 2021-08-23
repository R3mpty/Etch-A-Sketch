let container = document.querySelector('.container'); // get element by id doesn't work?
let buttonsContainer = document.querySelector('.buttons');
let size = window.prompt("Enter the desired size: ");


let button = document.createElement('button');
button.innerText = 'Clear'
buttonsContainer.appendChild(button)
buttonsContainer.addEventListener('click', function()
{
    clearGrid();
});


document.documentElement.style.setProperty('--size', size);

function createDivs(size) {

    // row
    for (let i = 0; i < size; i++) {
        const col = document.createElement('div');

        // col
        for (let j = 0; j < size; j++){
            const box = document.createElement('div');
            box.addEventListener('mouseenter', function(){
                box.style.backgroundColor = changeColor();
            })
            box.classList = "grid-element";
            col.appendChild(box);
        }
        
        container.appendChild(col);
    }
}

function changeColor(){
    const randomR = Math.floor((Math.random() * 256) + 1);
    const randomG = Math.floor((Math.random() * 256) + 1);
    const randomB = Math.floor((Math.random() * 256) + 1);
    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    return randomColor;
}

// How should I do the clear grid button
function clearGrid(){
    const elements = Array.from(document.querySelectorAll(".grid-element"));
    for (let i = 0; i < elements.length; i++){
        const box = elements[i];
        box.style.backgroundColor = "white";
    }
}



createDivs(size);