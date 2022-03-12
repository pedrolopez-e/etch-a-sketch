const container = document.querySelector(".container");

function createSquares(row) {
    for (let n = 0; n < 16; n++) {
        let square = document.createElement('div');
        row.appendChild(document.createElement('square'));
    }
}

function askNumberOfSquares() {
    do {
        numberOfSquares = prompt("Enter the number of squares per row that you want: ");
        if (numberOfSquares > 100 || numberOfSquares < 0) {
            alert("The number must be between 0 and 100");
        };
    } while(numberOfSquares > 100 || numberOfSquares < 0);
    

}

for (let n = 0; n < 16; n++) {
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

const clear = document.querySelector('.clear');
clear.addEventListener('click', askNumberOfSquares)






















