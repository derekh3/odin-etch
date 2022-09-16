

const container = document.querySelector(".container");
const newSize = document.createElement("button");
newSize.innerText = "New size";
document.body.prepend(newSize);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function darken(rgb) {
    rgb = rgb.substring(4, rgb.length - 1)
        .replace(/ /g, '')
        .split(',');
    rgbNumber = rgb.map(x => parseInt(x));
    for (i = 0; i < 3; i++) {
        rgbNumber[i] = Math.min(rgbNumber[i] - 25, 255);
    }
    return `rgb(${rgbNumber[0]}, ${rgbNumber[1]}, ${rgbNumber[2]})`;
}


function generateNewGrid(gridSize = 16) {
    removeAllChildNodes(container);

    for (i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.style.margin = "0";
        row.style.display = "flex";
        for (j = 1; j <= gridSize; j++) {
            const element = document.createElement("div");
            element.classList.add("not-hovered");
            element.style.width = `${960 / gridSize}px`;
            element.style.height = `${960 / gridSize}px`;
            element.style.margin = "0";
            // element.style.display = "inline-block"
            row.append(element);
            element.addEventListener("mouseover", (e) => {
                const currentColor = window.getComputedStyle(e.target).backgroundColor;
                console.log(currentColor);
                e.target.style.backgroundColor = darken(currentColor);
            });
        }
        container.append(row);
    }

}

newSize.addEventListener("click", (e) => {
    console.log(e);
    generateNewGrid(prompt("New size? (Max: 100)"))
});

generateNewGrid();

// for (i = 1; i <= 16; i++) {
//     const row = document.createElement("div");
//     for (j = 1; j <= 16; j++) {
//         const element = document.createElement("div");
//         element.classList.add("not-hovered");
//         element.style.width = "100px";
//         element.style.height = "100px";
//         element.style.margin = "5px 5px";
//         element.style.display = "inline-block"
//         row.append(element);
//         element.addEventListener("mouseover", (e) => e.target.classList.add("hovered"));
//     }
//     container.append(row);
// }

