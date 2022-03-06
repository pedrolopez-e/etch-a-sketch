const container = document.querySelector(".container");

function createSquares(row) {
    for (let n = 0; n < 16; n++) {
        row.appendChild(document.createElement('square'));
    }
}

function changeBackgroundColor(event) {
    event.target.style.backgroundColor = 'yellow';
}

for (let n = 0; n < 16; n++) {
    let row = document.createElement('div');
    container.appendChild(document.createElement('row'));
}

let square = document.createElement('div');
const rows = document.querySelectorAll('row');
const squares = document.querySelectorAll('square')

rows.forEach(createSquares);

square = document.querySelector('square');
square.addEventListener('mouseenter', function(event) {
    event.target.style.backgroundColor = 'yellow';
});





















