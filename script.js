const container = document.querySelector(".container");
let numberOfSquares = 16;
let square = document.createElement('div');

function createSquares(row) {
    for (let n = 0; n < numberOfSquares; n++) {
        row.appendChild(document.createElement('square'));
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function askNumberOfSquares() {

    removeAllChildNodes(container);

    do {
        numberOfSquares = prompt("Enter the number of squares per row that you want: ");
        if (numberOfSquares > 100 || numberOfSquares < 0) {
            alert("The number must be between 0 and 100");
        };
    } while(numberOfSquares > 100 || numberOfSquares < 0);

    for (let n = 0; n < numberOfSquares; n++) {
        container.appendChild(document.createElement('row'));
    };
    
    const rows = document.querySelectorAll('row');
    rows.forEach(createSquares);

    const squares = document.querySelectorAll('square')
    squares.forEach((square) => {
        square.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = 'yellow';
        });
    });
};

for (let n = 0; n < numberOfSquares; n++) {
    let row = document.createElement('div');
    container.appendChild(document.createElement('row'));
}

const rows = document.querySelectorAll('row');
rows.forEach(createSquares);

const squares = document.querySelectorAll('square')
squares.forEach((square) => {
    square.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'yellow';
    })
})

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', askNumberOfSquares);





















