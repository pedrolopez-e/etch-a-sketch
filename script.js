const container = document.querySelector(".container");
const grid = document.createElement('div');

for (let n = 0; n <= 16; n++){
    container.appendChild(grid);
    grid.classList.add("square");
};
