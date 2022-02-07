const blocks = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [1, 0, 0, 2, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function render(blockArray) {
    let markup = '';
    blockArray.forEach((row) => {
        markup += '<div class = "row"></div>';
        Array.from(row).forEach((item) => {
            if (item === 0) {
                markup += '<div class = "item"></div>';
            } else if (item === 1) {
                markup += '<div class = "tree"></div>';
            } else if (item === 2) {
                markup += '<div class = "men"></div>';
            }
        });
    });
    document.getElementById('app').innerHTML = markup;
};

render(blocks);




