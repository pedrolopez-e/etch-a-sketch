const container = document.querySelector(".container");

function createSquares(row) {
    for (let n = 0; n < 16; n++) {
        let square = document.createElement('div');
        row.appendChild(document.createElement('square'));
    }
}

function getColor(colors, index) {
    let color = colors[index];
    index += 1;
    if (index > 6) {
        index = 0;
    }

    return color;
}

function changeBackgroundColor(event) {
    let colors = ['violet', 'blue', 'lightskyblue', 'greenyellow', 'yellow', 'orange', 'red'];
    let index = 0;
    event.target.style.backgroundColor = getColor(colors, index);
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
        event.target.style.background = 'yellow';
    })
})

/*for (let n = 0; n < 16; n++) {
    square = document.querySelector('square');
    square.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'yellow';
    });
}*/






















